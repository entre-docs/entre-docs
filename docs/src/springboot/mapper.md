---
outline: deep
---

# Mapper

Un Mapper es una clase utilitaria encargada de **convertir objetos** de un tipo a otro. En una aplicación Spring Boot su función principal es transformar **Entities en DTOs y viceversa**, manteniendo cada capa con su propia responsabilidad.

```
Entity  ──────────────►  DTO       (para enviar al cliente)
DTO     ──────────────►  Entity    (para guardar en la BD)
```

## Uso de Mapper

Sin un Mapper, la conversión entre Entity y DTO se haría dentro del Service, mezclando lógica de negocio con lógica de transformación de datos. Al separarlo:

- El **Service** solo se ocupa de la lógica de negocio.
- El **Mapper** centraliza todas las conversiones en un solo lugar.
- Si cambia la estructura de un DTO o una Entity, solo hay que modificar el Mapper.

## Tipos de Mapper

Existen dos enfoques principales:

| Enfoque | Descripción |
|---------|-------------|
| **Manual** | Clase Java con métodos estáticos escritos a mano |
| **MapStruct** | Librería que genera el código de conversión automáticamente |

---

## Mapper

Se crea una clase con métodos estáticos que realizan la conversión.


```java
package cl.albania.todolist.mapper;

import cl.albania.todolist.dtos.CreateTaskDto;
import cl.albania.todolist.dtos.ResponseTaskDto;
import cl.albania.todolist.entities.Task;

public class TaskMapper {

    // Convierte un CreateTaskDto a Task (Entity)
    public static Task fromCreateDto(CreateTaskDto dto) { // [!code ++]
        return Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .completed(dto.getCompleted())
                .build();
    }

    // Convierte un Task (Entity) a ResponseTaskDto
    public static ResponseTaskDto toDto(Task task) { // [!code ++]
        return new ResponseTaskDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.isCompleted()
        );
    }
}
```

::: tip
Se usan métodos `static` para no necesitar instanciar la clase. Basta con llamar `TaskMapper.toDto(task)` directamente.
:::

### Uso en el Service Implements

```java
@Override
public ResponseTaskDto createTask(CreateTaskDto taskDto) {
    // DTO → Entity para guardar en la BD
    Task task = TaskMapper.fromCreateDto(taskDto); // [!code ++]

    Task savedTask = this.taskRepository.save(task);

    // Entity → DTO para devolver al cliente
    return TaskMapper.toDto(savedTask); // [!code ++]
}

@Override
public ResponseTasksDto getAllTask() {
    List<Task> tasks = this.taskRepository.findAll();

    List<ResponseTaskDto> taskResponse = tasks.stream()
            .map(TaskMapper::toDto) // [!code ++]
            .collect(Collectors.toList());

    return new ResponseTasksDto(taskResponse.size(), taskResponse);
}
```