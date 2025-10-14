---
outline: deep
---


# Librería HATEOAS en REST

HATEOAS (*Hypermedia As The Engine Of Application State*) es un principio clave de la arquitectura REST que permite a los clientes navegar dinámicamente por una API a través de enlaces proporcionados en las respuestas del servidor, promoviendo flexibilidad y desacoplamiento.

## Conceptos Fundamentales

| **Concepto**           | **Descripción**                                                                 |
|------------------------|--------------------------------------------------------------------------------|
| **HATEOAS**            | Guía la interacción con la aplicación mediante enlaces dinámicos proporcionados por el servidor. |
| **Enlace (Link)**      | Conexión entre recursos, definida por una relación, un URL y un método HTTP.     |

## Características Clave

| **Característica**         | **Beneficio**                                                                 |
|----------------------------|------------------------------------------------------------------------------|
| **Descubrimiento Dinámico** | Permite a los clientes explorar recursos a través de enlaces sin conocimiento previo. |
| **Desacoplamiento cliente-servidor** | Reduce la dependencia del cliente de URLs o estructuras fijas de la API.      |
| **Evolución de la API**    | Facilita cambios en la API sin impactar directamente a los clientes.           |

## Implementación con Spring Boot

Para habilitar HATEOAS en un proyecto Spring Boot, se debe agregar la dependencia correspondiente:

### Maven (`pom.xml`)

Agregar la dependencia spring-boot-starter-hateoas en el archivo pom.xml si se está utilizando Maven o en build.gradle si estás utilizando Gradle

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>
```



::: code-group
```java [Student.java]
// El siguiente paso será modificar la clase Student para 
// extender RepresentationModel`<Student>` de HATEOAS

package com.example.demo.model;

import org.springframework.hateoas.RepresentationModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student extends RepresentationModel<Student> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```


```java [StudentController.java]
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public CollectionModel<EntityModel<Student>> getAllStudents() {
        List<EntityModel<Student>> students = studentService.getAllStudents().stream()
                .map(student -> EntityModel.of(student,
                        WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getStudentById(student.getId())).withSelfRel(),
                        WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllStudents()).withRel("students")))
                .collect(Collectors.toList());

        return CollectionModel.of(students, Link.of("/students").withSelfRel());
    }

    @GetMapping("/{id}")
    public EntityModel<Student> getStudentById(@PathVariable Long id) {
        Optional<Student> student = studentService.getStudentById(id);

        // Verifica si el estudiante existe
        return EntityModel.of(student.get());
    }

    // Verifica si el estudiante existe
    if (student.isPresent()) {
        return EntityModel.of(student.get(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getStudentById(id)).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllStudents()).withRel("all-students"));
    } else {
        throw new StudentNotFoundException("Student not found with id: " + id);
    }

    @PostMapping
    public EntityModel<Student> createStudent(@RequestBody Student student) {
        Student createdStudent = studentService.createStudent(student);
        return EntityModel.of(createdStudent,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getStudentById(createdStudent.getId())).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllStudents()).withRel("all-students"));
    }

    @PutMapping("/{id}")
    public EntityModel<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(id, student);
        return EntityModel.of(updatedStudent,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getStudentById(id)).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllStudents()).withRel("all-students"));
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}
```

```java [StudentNotFoundException.java]
package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class StudentNotFoundException extends RuntimeException {

    public StudentNotFoundException(String message) {
        super(message);
    }
}
```

```java [StudentControllerTest.java]
package com.example.demo.controller;

import static org.mockito.Mockito.when;
import java.util.Arrays;
import java.util.List;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import com.example.demo.model.Student;
import com.example.demo.service.StudentServiceImpl;

@WebSpringBootTest
@AutoConfigureMockMvc
public class StudentControllerTest {

    @MockBean
    private StudentServiceImpl estudianteServiceMock;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void obtenerTodosTest() throws Exception {
        // Arreglo de estudiantes
        Student estudiante1 = new Student();
        estudiante1.setName("John");
        Student estudiante2 = new Student();
        estudiante2.setName("Doe");

        List<Student> estudiantes = Arrays.asList(estudiante1, estudiante2);

        when(estudianteServiceMock.getAllStudents()).thenReturn(estudiantes);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/students"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()", Matchers.is(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Matchers.is("John")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", Matchers.is("Doe")));
    }
}
```
:::