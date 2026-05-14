---
outline: deep
---

# Introducción a JPA

## JPA

JPA (*Java Persistence API*) es una especificación de Java que permite trabajar con bases de datos utilizando objetos Java en lugar de escribir consultas SQL manualmente.

JPA define reglas y anotaciones para mapear clases Java hacia tablas de una base de datos relacional.


## ORM

ORM significa `Object Relational Mapping`


Permite convertir Objeto Java en Tabla de Base de Datos


Ejemplo:

| Clase Java | Tabla Oracle |
|---|---|
| `Persona` | `PERSONA` |
| `Producto` | `PRODUCTO` |



## Hibernate

Hibernate es la implementación más utilizada de JPA.

Spring Boot utiliza Hibernate internamente para:

- Generar consultas SQL
- Mapear entidades
- Manejar persistencia
- Administrar relaciones entre tablas




## Dependencia principal

Para utilizar JPA en Spring Boot se agrega la dependencia:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```


## Conceptos importantes

| Concepto | Descripción |
|---|---|
| JPA | Especificación de persistencia |
| Hibernate | Implementación de JPA |
| ORM | Mapeo objeto-relacional |
| Entity | Clase mapeada a tabla |
| Repository | Acceso a datos |
| Persistence | Guardar objetos en BD |



## Entity

Una *Entity* es una clase Java que representa una tabla en la base de datos.


```java
@Entity
@Table(name = "PERSONA")
public class Persona {

    @Id
    private Long id;

    private String nombre;
}
```


## Anotaciones más utilizadas

| Anotación | Uso |
|---------|-------|
| `@Entity` | Define una entidad |
| `@Table` | Define la tabla |
| `@Id` | Clave primaria |
| `@Column` | Configura una columna |
| `@GeneratedValue` | Genera IDs automáticamente |



## Spring Data JPA

Spring Data JPA simplifica el acceso a datos creando automáticamente gran parte del código necesario para CRUD.

Gracias a esto no es necesario escribir consultas SQL básicas manualmente.



### Ejemplo Repository

```java
public interface PersonaRepository extends JpaRepository<Persona, Long> {

}
```

Con eso ya se obtiene automáticamente:

- `findAll()`
- `findById()`
- `save()`
- `deleteById()`

