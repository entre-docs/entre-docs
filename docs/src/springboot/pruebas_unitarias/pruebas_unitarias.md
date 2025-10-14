---
outline: deep
---

# Pruebas unitarias en Springboot

SpringBoot utiliza frameworks como Mockito para crear objetos simulados (mocks) de dependencias y así aislar las unidades de código durante las pruebas.


## Prueba de un Repositorio

**`@DataJpaTest`**: Anotación que configura automáticamente un entorno para pruebas JPA.
Proporciona soporte para probar repositorios.


* `Arrange`: Se crea un objeto Estudiante con el nombre "John Doe".

* `Act`: Se guarda el estudiante en el repositorio utilizando el método save.

* `Assert`: Se verifica que después de guardar, el estudiante tenga un ID no nulo y que su nombre sea "Javiera Aguilar". Esta prueba asegura que el repositorio funcione correctamente al guardar un estudiante.


``` java
package com.example.demo.repository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.demo.model.Student;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;

    @Test
    public void guardarEstudianteTest() {
        // Arrange
        Student estudiante = new Student();
        estudiante.setName("John Doe");

        // Act
        Student resultado = studentRepository.save(estudiante);

        // Assert
        assertNotNull(resultado.getId());
        assertEquals("John Doe", resultado.getName());
    }
}
```


## Prueba de un Servicio

**`@InjectMocks`**: Anotación que inyecta automáticamente dependencias mock en el objeto de
prueba.

**`@Mock`**: Anotación que crea un objeto mock para la dependencia.


* `Arrange`: Se crea un objeto Estudiante con el nombre "José Rondon". Se configura el comportamiento del mock del repositorio para devolver este estudiante cuando se llame al método save.

* `Act`: Se llama al método guardarEstudiante del servicio.

* `Assert`: Se verifica que el resultado del servicio sea el estudiante creado. Esta prueba asegura que el servicio interactúe correctamente con el repositorio al guardar un estudiante


```java
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentServiceImpl;

@ExtendWith(MockitoExtension.class)
public class StudentServiceTest {

    @InjectMocks
    private StudentServiceImpl estudianteServicio;

    @Mock
    private StudentRepository estudianteRepositorioMock;

    @Test
    public void guardarEstudianteTest() {
        // Arrange
        Student estudiante = new Student();
        estudiante.setName("José Rondon");

        when(estudianteRepositorioMock.save(any())).thenReturn(estudiante);

        // Act
        Student resultado = estudianteServicio.createStudent(estudiante);

        // Assert
        assertEquals("José Rondon", resultado.getName());
    }
}
```

## Prueba de un controlador

* **`WebMvcTest`**: Anotación que configura un entorno para pruebas de controladores. Limita el contexto de la aplicación solo al controlador que se está probando.

* **`Arrange`**: Se crea un objeto Estudiante con el nombre " María Elvisa". Se configura el comportamiento del mock del servicio para devolver este estudiante cuando se llame al método createStudent.

* **`Act`** y **`Assert`**: Se realiza una solicitud POST simulada al endpoint /students con el estudiante creado como contenido JSON. Se espera que la respuesta tenga un estado OK (200) y que el cuerpo de la respuesta contenga el nombre " María Elvisa". Esta prueba asegura que el controlador interactúe correctamente con el servicio al crear un estudiante.


```java
package com.example.demo.controller;

import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.demo.model.Student;
import com.example.demo.service.StudentServiceImpl;

import static org.hamcrest.Matchers.*;

@WebMvcTest(StudentController.class)
public class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentServiceImpl estudianteServiceMock;

    @Test
    public void obtenerTodoTest() throws Exception {
        // Arrange
        Student estudiante1 = new Student();
        estudiante1.setId(1L);
        estudiante1.setName("John");

        Student estudiante2 = new Student();
        estudiante2.setId(2L);
        estudiante2.setName("Doe");

        List<Student> estudiantes = Arrays.asList(estudiante1, estudiante2);

        when(estudianteServiceMock.getAllStudents()).thenReturn(estudiantes);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/students"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(2)))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", is("John")))
            .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", is("Doe")));
    }
}
```