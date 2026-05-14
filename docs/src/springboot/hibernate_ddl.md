---
outline: deep
---


# Hibernate y ddl-auto


Hibernate puede crear, modificar o validar automáticamente las tablas de la base de datos utilizando:

```yaml
spring:
  jpa:
    hibernate:
      ddl-auto:
```



## ddl-auto

`ddl-auto` le indica a Hibernate cómo manejar la estructura de la base de datos automáticamente.


```yaml
spring:
  jpa:
    hibernate:
      ddl-auto: update
```


| Valor | Descripción | Crea tablas | Borra tablas | Modifica tablas |
|---|---|---|---|---|
| `create` | Borra y crea tablas nuevamente | Sí | Sí | Sí |
| `create-drop` | Crea tablas y las elimina al cerrar |  Sí | Sí | Sí |
| `update` | Actualiza tablas existentes | Sí | No | Sí |
| `validate` | Solo valida estructura |  No | No | No |
| `none` | No realiza cambios | No | No | No |



<!-- 
## Ejemplo práctico

## Entity

```java
@Entity
@Table(name = "PERSONA")
public class Persona {

    @Id
    private Long id;

    private String nombre;
}
```

---

## Con ddl-auto=create

Hibernate genera automáticamente:

```sql
CREATE TABLE PERSONA (
    id NUMBER,
    nombre VARCHAR2(255)
);
```

---

## Con ddl-auto=update

Si luego agregamos:

```java
private String apellido;
```

Hibernate intentará ejecutar:

```sql
ALTER TABLE PERSONA ADD apellido VARCHAR2(255);
```

---

## Relación con JPA

Hibernate utiliza las anotaciones JPA para generar la estructura SQL.

Ejemplo:

```java
@Column(nullable = false)
private String nombre;
```

---

## Configuración completa ejemplo

```yaml
spring:
  datasource:
    url: jdbc:oracle:thin:@DATABASE_medium?TNS_ADMIN=./wallet

  jpa:
    hibernate:
      ddl-auto: update

    show-sql: true

    properties:
      hibernate:
        dialect: org.hibernate.dialect.OracleDialect
```

---

## Mostrar SQL generado

```yaml
show-sql: true
```

Permite visualizar consultas y cambios automáticos.

---

## Recomendaciones por ambiente

| Ambiente | Recomendado |
|---|---|
| Desarrollo | update |
| Testing | create-drop |
| Producción | validate |

---

## Producción

En producción normalmente se evita:

```yaml
ddl-auto: create
```

porque puede eliminar tablas y datos.


---

## Problemas comunes

### Tablas no creadas

* Causa

```yaml
ddl-auto: none
```

o:

```yaml
ddl-auto: validate
```


## Tablas borradas accidentalmente

* Causa

```yaml
ddl-auto: create
```


## Columnas no actualizadas

* Causa

Hibernate no siempre detecta cambios complejos automáticamente.



## Buenas prácticas

### Desarrollo

```yaml
ddl-auto: update
```



### Producción

```yaml
ddl-auto: validate
```



### No depender completamente de Hibernate

Para proyectos grandes se recomienda:

- scripts SQL
- Flyway
- Liquibase



### Revisar siempre SQL generado

```yaml
show-sql: true
```
 -->