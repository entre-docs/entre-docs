---
outline: deep
---

# CRUD con JPA

## Introducción

CRUD representa las operaciones básicas utilizadas en bases de datos:

| Operación | Descripción |
|---|---|
| Create | Crear registros |
| Read | Leer registros |
| Update | Actualizar registros |
| Delete | Eliminar registros |

Spring Boot junto con JPA permite realizar estas operaciones fácilmente utilizando:

- Entity
- Repository
- Service
- Controller


## Estructura recomendada

```text
src/main/java/com/example/demo/
│
├── controller/
├── service/
├── repository/
├── entity/
└── dto/
```


## Entity

La entidad representa una tabla en la base de datos.


| Anotación | Uso |
|---|---|
| `@Entity` | Define entidad |
| `@Table` | Nombre tabla |
| `@Id` | Clave primaria |
| `@GeneratedValue` | Generación automática ID |


```java
package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "PERSONA")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```


## Repository

El Repository permite acceder a la base de datos.


```java
package com.example.demo.repository;

import com.example.demo.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<Persona, Long> {

}
```

### Métodos disponibles

Gracias a `JpaRepository` se obtienen automáticamente:

| Método | Descripción |
|---|---|
| `findAll()` | Obtener todos |
| `findById()` | Buscar por ID |
| `save()` | Guardar |
| `deleteById()` | Eliminar |



## Service/Service Implement

La capa Service contiene lógica de negocio.

::: code-group
```java [Service]
package com.example.demo.service;
import com.example.demo.entity.Persona;
import java.util.List;

public interface PersonaService {

    List<Persona> listar();

    Persona guardar(Persona persona);
    Persona obtener(Long id);
    void eliminar(Long id);
}
```

```java [ServiceImpl]
package com.example.demo.service;

import com.example.demo.entity.Persona;
import com.example.demo.repository.PersonaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImpl implements PersonaService {

    private final PersonaRepository repository;

    public PersonaServiceImpl(PersonaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Persona> listar() {
        return repository.findAll();
    }

    @Override
    public Persona guardar(Persona persona) {
        return repository.save(persona);
    }

    @Override
    public Persona obtener(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
```
:::

## Controller

El Controller expone endpoints REST.


```java
package com.example.demo.controller;
import com.example.demo.entity.Persona;
import com.example.demo.service.PersonaService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/personas")
public class PersonaController {

    private final PersonaService service;

    public PersonaController(PersonaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Persona> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Persona obtener(@PathVariable Long id) {
        return service.obtener(id);
    }

    @PostMapping
    public Persona guardar(@RequestBody Persona persona) {
        return service.guardar(persona);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
```


## Endpoints CRUD

| Método HTTP | Endpoint | Acción |
|---|---|---|
| GET | `/personas` | Listar |
| GET | `/personas/{id}` | Obtener |
| POST | `/personas` | Crear |
| DELETE | `/personas/{id}` | Eliminar |



## Configuración BBDD

```yaml
spring:
  datasource:
    url: jdbc:oracle:thin:@DATABASE_medium?TNS_ADMIN=./wallet
    username: ADMIN
    password: PASSWORD

  jpa:
    hibernate:
      ddl-auto: update # crea tablas automaticamente
```
