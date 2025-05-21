---
outline: deep
---

# Data Transfer Object (DTO)

Un DTO es una clase simple utilizada para **transportar datos** entre distintas capas de la aplicación (por ejemplo, entre el controlador y el servicio, o entre el backend y el frontend) **sin exponer** directamente las **entidades** del modelo (como las que están mapeadas a la base de datos mediante JPA).


## ¿Para qué usar DTO?

**1. Controlar la información que entra y sale:**

* Evitas exponer directamente la entidad de base de datos (como Task).
* Solo incluyes los campos que el cliente necesita ver o enviar.

**2. Separar responsabilidades:**

* Las entidades (@Entity) representan el modelo de la base de datos.
* Los DTOs representan la información que se transmite.

**3. Facilitar validaciones:**

* Puedes usar anotaciones como @NotBlank, @NotNull, etc. solo en el DTO.

**4. Mayor seguridad y encapsulamiento:**

* No expones campos sensibles o internos que estén en tu entidad.


## ¿Qué pasa si no uso DTO?

🔓 **Expones la estructura interna de la base de datos**

* Cambios en la entidad afectan directamente al cliente o API.
* Podrías estar exponiendo datos sensibles innecesariamente.

💥 **Acoplamiento innecesario**

* Tu capa de presentación (API) queda acoplada a la capa de persistencia.
* Es más difícil refactorizar, cambiar el diseño o mover la lógica.

🎯 **Tienes menos control sobre validaciones**

* Las entidades no están pensadas para validaciones de entrada/salida.


## DTO para crear una tarea

Se usa *@NotBlank* y *@NotNull* para validar que los campos requeridos vengan correctamente.

```java
package cl.albania.todolist.dtos;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
public class CreateTaskDTO {

    @NotBlank(message = "El título es obligatorio")
    private String title;

    private String description;

    @NotNull(message = "El estado de completado es obligatorio")
    private Boolean completed;
}
```


## DTO para actualizar una tarea

```java
package cl.albania.todolist.dtos;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
public class UpdateTaskDTO {

    @NotNull(message = "El ID es obligatorio")
    private Long id;

    @NotBlank(message = "El título es obligatorio")
    private String title;

    private String description;

    @NotNull(message = "El estado de completado es obligatorio")
    private Boolean completed;
}
```

## ResponseTaskDTO

Un ResponseTaskDto es un DTO de salida.
Se usa para representar cómo se verá una respuesta enviada al cliente cuando se crea o actualiza una tarea en tu API.

En otras palabras, **es el "formato de respuesta" que el backend devuelve al frontend.**

Sirve para:

* Controlar y personalizar qué campos devuelve tu API.
* Evitar exponer toda la entidad Task completa (por ejemplo, si en el futuro agregas campos sensibles).
* Homogeneizar las respuestas para que el frontend reciba siempre un objeto bien estructurado.


```java
package cl.albania.todolist.dtos;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseTaskDto {
    private Long id;
    private String title;
    private String description;
    private boolean completed;
}
```



## Uso de DTO en controlador

```java
package cl.albania.todolist.controllers;

import cl.albania.todolist.dtos.CreateTaskDto;
import cl.albania.todolist.dtos.ResponseTaskDto;
import cl.albania.todolist.dtos.UpdateTaskDto;
import cl.albania.todolist.services.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

@PostMapping
    public ResponseEntity<ResponseTaskDto> createTask(@Valid @RequestBody CreateTaskDto createTaskDto){
        // Llamar al servicio
        ResponseTaskDto createdTask = this.taskService.createTask(createTaskDto);// [!code ++]
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseTaskDto> updateTask(@PathVariable Long id, @Valid @RequestBody UpdateTaskDto taskDto){
        ResponseTaskDto updatedTask = this.taskService.updateTask(id, taskDto);// [!code ++]
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }
}
```