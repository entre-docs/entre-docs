---
outline: deep
---

# Service

Los servicios son componentes que encapsulan la lógica de negocio de la aplicación. Se utilizan para realizar operaciones específicas y actúan como una capa intermedia entre los controladores y los repositorios.

* Un Service normalmente es una **interfaz** (interface en Java).

* Define qué métodos va a ofrecer un servicio, sin implementar la lógica aún.

* Su propósito es abstraer la funcionalidad de negocio que se usará en otras capas (por ejemplo, en los Controllers).

* Permite que el código sea más limpio, modular y testeable, porque depende de una interfaz y no de una clase concreta.

```java
package cl.albania.todolist.services;

import cl.albania.todolist.dtos.CreateTaskDto;
import cl.albania.todolist.dtos.ResponseTaskDto;
import cl.albania.todolist.dtos.ResponseTasksDto;
import cl.albania.todolist.dtos.UpdateTaskDto;

public interface TaskService {

    ResponseTaskDto createTask(CreateTaskDto task);

    ResponseTasksDto getAllTask();

    ResponseTaskDto findTaskById(Long id);

    ResponseTaskDto updateTask(Long id, UpdateTaskDto taskDto);

    ResponseTaskDto deleteTask(Long id);
}
```