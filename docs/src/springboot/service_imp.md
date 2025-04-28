---
outline: deep
---

# Service Implements

El ServiceImpl (abreviatura de "Service Implementation") es la clase que **implementa la interfaz Service**.

Aquí es donde realmente se escribe la lógica de negocio: consultas a la base de datos, reglas, cálculos, etc.

Generalmente esta clase se marca con **@Service** para que Spring la reconozca como un bean de servicio y la inyecte cuando se necesite.

```java
package cl.albania.todolist.services;

import cl.albania.todolist.dtos.CreateTaskDto;
import cl.albania.todolist.dtos.ResponseTaskDto;
import cl.albania.todolist.dtos.ResponseTasksDto;
import cl.albania.todolist.dtos.UpdateTaskDto;
import cl.albania.todolist.entities.Task;
import cl.albania.todolist.exception.ResourceNotFoundException;
import cl.albania.todolist.mapper.TaskMapper;
import cl.albania.todolist.repositories.TaskRepositories;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service // [!code ++]
public class TaskServiceImpl implements TaskService {

    // Inyección de dependencia Repositorio
    @Autowired
    private TaskRepositories taskRepository;


    @Override
    public ResponseTaskDto createTask(CreateTaskDto taskDto) {
        // Transformar un objeto de tipo DTO a una Clase de tipo Entity
        Task task = TaskMapper.fromCreateDto(taskDto);

        // guardar en oracle (con el id)
        Task savedTask = this.taskRepository.save(task);

        // Oracle me devuelve con el id y lo transformo a DTO
        return TaskMapper.toDto(savedTask);
    }

    @Override
    public ResponseTasksDto getAllTask() {
        // Obtener todos desde la BD y guardarlos
        List<Task> tasks = this.taskRepository.findAll();

        /* "Por cada task, llama al metodo toDto de la clase TaskMapper
        pasándole ese task como argumento."*/
        List<ResponseTaskDto> taskResponse = tasks.stream()
                .map(TaskMapper::toDto)
                .collect(Collectors.toList());

        // retorna el total y la lista de tasks
        return new ResponseTasksDto(taskResponse.size(), taskResponse);
    }

    @Override
    public ResponseTaskDto findTaskById(Long id) {
        Task taskById = this.getTaskById(id);

        return TaskMapper.toDto(taskById);
    }

    private Task getTaskById(Long id){
        return this.taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró una tarea con el id " + id));
    }


    @Override
    public ResponseTaskDto updateTask(Long id, UpdateTaskDto taskDto) {
        // Task de la base de datos
        Task taskFromBD = this.getTaskById(id);

        if (taskDto.getTitle() != null){
            taskFromBD.setTitle(taskDto.getTitle());
        }

        if (taskDto.getCompleted() != null){
            taskFromBD.setCompleted(taskDto.getCompleted());
        }

        // Guardar el task actualizado
        Task updatedTask = this.taskRepository.save(taskFromBD);

        // Convertir el objeto clase de tipo TaskEntity a tipo ResponseDTO
        return TaskMapper.toDto(updatedTask);

    }

    @Override
    public ResponseTaskDto deleteTask(Long id) {
        // Primero validar que exista un task con ese id
        Task taskDeleted = this.getTaskById(id);

        this.taskRepository.deleteById(id);
        return TaskMapper.toDto(taskDeleted);
    }

}
```