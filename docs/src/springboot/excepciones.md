---
outline: deep
---

# Manejo de Excepciones

El manejo de excepciones centralizado permite capturar errores en un solo lugar y devolver respuestas estructuradas al cliente, evitando que se repita lógica de error en cada controller.

## Excepción personalizada

Una excepción personalizada extiende `RuntimeException` y representa un error específico del negocio, como no encontrar un recurso.

```java
package cl.albania.todolist.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
```

### Uso en el servicio

```java
return this.taskRepository.findById(id)
    .orElseThrow(() -> new ResourceNotFoundException(
        "No se encontró una tarea con el id " + id)
    );
```



## Respuesta de error estructurada

Un DTO de error define la estructura que se le devuelve al cliente cuando ocurre una excepción. Usa Lombok para reducir el código repetitivo.

```java
package cl.albania.todolist.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data // [!code ++]
@AllArgsConstructor // [!code ++]
public class ErrorResponse {

    private int status;
    private String error;
    private String message;
    private String path;

}
```

## @RestControllerAdvice

La clase anotada con `@RestControllerAdvice` actúa como un **manejador global de excepciones para APIs REST**: intercepta cualquier excepción lanzada en todos los controllers y devuelve una respuesta JSON coherente y estructurada, sin necesidad de repetir lógica de error en cada endpoint.


::: tip
`@RestControllerAdvice` es equivalente a `@ControllerAdvice` + `@ResponseBody`. Usa `@RestControllerAdvice` en APIs REST y `@ControllerAdvice` en aplicaciones que devuelven vistas HTML.
:::


```java
package cl.albania.todolist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice // [!code ++]
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(
            ResourceNotFoundException ex,
            HttpServletRequest request) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            HttpStatus.NOT_FOUND.getReasonPhrase(),
            ex.getMessage(),
            request.getRequestURI()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(
            Exception ex,
            HttpServletRequest request) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
            "Error interno del servidor",
            request.getRequestURI()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(error);
    }
}
```

::: tip Respuesta al cliente
Cuando se lanza un `ResourceNotFoundException`, el cliente recibe:
```json
{
  "status": 404,
  "error": "Not Found",
  "message": "No se encontró una tarea con el id 5",
  "path": "/tasks/5"
}
```
:::

## Logging de excepciones

Registrar información detallada sobre las excepciones facilita identificar y solucionar problemas durante el desarrollo y la operación. Se usa `Logger` de SLF4J, que viene incluido con Spring Boot.

```java
package cl.albania.todolist.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class); // [!code ++]

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(ResourceNotFoundException ex,
                                                                HttpServletRequest request) {
        logger.warn("Recurso no encontrado: {}", ex.getMessage()); // [!code ++]
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            HttpStatus.NOT_FOUND.getReasonPhrase(),
            ex.getMessage(),
            request.getRequestURI()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex,
                                                                HttpServletRequest request) {
        logger.error("Error inesperado: {}", ex.getMessage(), ex); // [!code ++]
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
            "Error interno del servidor",
            request.getRequestURI()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }

}
```

::: tip Niveles de log más usados
| Nivel        | Cuándo usarlo                              |
| ------------ | ------------------------------------------ |
| `logger.info`  | Eventos normales del flujo de la app     |
| `logger.warn`  | Situaciones inesperadas pero recuperables|
| `logger.error` | Errores graves o excepciones no previstas|
:::
