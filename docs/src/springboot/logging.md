---
outline: deep
---

# Logging

El logging efectivo es fundamental para entender el comportamiento y el rendimiento de los microservicios. A través de logs se puede rastrear el flujo de ejecución, detectar errores y monitorear el sistema en tiempo real.

Spring Boot incluye `@Slf4j` como fachada de logging y usa **Logback** como implementación por defecto.

## Niveles de log

Spring Boot soporta los siguientes niveles, ordenados de menor a mayor severidad:

| Nivel   | Uso típico                                        |
| ------- | ------------------------------------------------- |
| `TRACE` | Información muy detallada, solo en desarrollo     |
| `DEBUG` | Diagnóstico durante el desarrollo                 |
| `INFO`  | Eventos normales del flujo de la aplicación       |
| `WARN`  | Situaciones inesperadas pero recuperables         |
| `ERROR` | Errores graves o excepciones no controladas       |


## Con Lombok: `@Slf4j`

Si el proyecto usa **Lombok**, la anotación `@Slf4j` genera automáticamente un logger `log` para la clase, evitando la declaración manual.

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j // [!code ++]
@Service
public class TaskService {

    public Task findById(Long id) {
        log.info("Buscando tarea con id: {}", id);
        return taskRepository.findById(id)
            .orElseThrow(() -> {
                log.warn("Tarea no encontrada con id: {}", id);
                return new ResourceNotFoundException("No se encontró la tarea con id " + id);
            });
    }
}
```

## Sin Lombok: declaración manual

Para proyectos que no usan Lombok, declara el logger manualmente usando `LoggerFactory`:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    private static final Logger log = LoggerFactory.getLogger(TaskService.class); // [!code ++]

    public Task findById(Long id) {
        log.info("Buscando tarea con id: {}", id);
        return taskRepository.findById(id)
            .orElseThrow(() -> {
                log.warn("Tarea no encontrada con id: {}", id);
                return new ResourceNotFoundException("No se encontró la tarea con id " + id);
            });
    }
}
```

::: tip ¿Qué hace `@Slf4j` internamente?
Lombok lee la anotación `@Slf4j` en tiempo de compilación y genera automáticamente esta línea dentro de la clase:

```java
private static final Logger log = LoggerFactory.getLogger(TaskService.class);
```

Es decir, usar `@Slf4j` y declararlo manualmente produce **exactamente el mismo resultado**. La diferencia es que con `@Slf4j` no se tiene que escribir esa línea en cada clase: Lombok la inserta antes de compilar.
:::
