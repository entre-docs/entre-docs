---
outline: deep
---

# Controller

Los controladores son componentes responsables de manejar las **solicitudes HTTP** y
gestionar la interacción entre el cliente y el microservicio. **Mapean las rutas URL** a métodos
que procesan las peticiones y devuelven respuestas.

```java
package cl.albania.todolist.controllers;

import cl.albania.todolist.dtos.CreateTaskDto;
import cl.albania.todolist.dtos.ResponseTaskDto;
import cl.albania.todolist.dtos.ResponseTasksDto;
import cl.albania.todolist.dtos.UpdateTaskDto;
import cl.albania.todolist.services.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController // [!code ++]
@RequestMapping("/tasks")
public class TaskController {

    // Inyeccion de dependencia (servicio)
    @Autowired
    private TaskService taskService;

    @GetMapping("/getAllTasks")
    public ResponseEntity<ResponseTasksDto> getAllTasks(){
        ResponseTasksDto allTasks = this.taskService.getAllTask();
        return ResponseEntity.status(HttpStatus.OK).body(allTasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseTaskDto> getTaskById(@PathVariable Long id){
        ResponseTaskDto task = this.taskService.findTaskById(id);
        return ResponseEntity.status(HttpStatus.OK).body(task);
    }

    @PostMapping
    public ResponseEntity<ResponseTaskDto> createTask(@Valid @RequestBody CreateTaskDto createTaskDto){
        // Llamar al servicio
        ResponseTaskDto createdTask = this.taskService.createTask(createTaskDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseTaskDto> updateTask(@PathVariable Long id, @Valid @RequestBody UpdateTaskDto taskDto){
        ResponseTaskDto updatedTask = this.taskService.updateTask(id, taskDto);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseTaskDto> deleteTask(@PathVariable Long id){
        ResponseTaskDto deletedTask = this.taskService.deleteTask(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedTask);
    }

}
```