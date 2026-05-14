---
outline: deep
---


# Configuración de application.yml


El archivo `application.yml` permite configurar Spring Boot de forma centralizada.

Aquí normalmente se configuran:

- Base de datos
- Puerto servidor
- Hibernate
- JPA
- HikariCP
- Variables de entorno
- Logs


El archivo se encuentra en `src/main/resources/application.yml`



## Diferencia entre `.properties` y `.yml`

Spring Boot soporta:

- `application.properties`
- `application.yml`



## application.properties

```properties
spring.datasource.url=jdbc:oracle:thin:@DATABASE_medium?TNS_ADMIN=./wallet
spring.datasource.username=ADMIN
```



## application.yml

```yaml
spring:
  datasource:
    url: jdbc:oracle:thin:@DATABASE_medium?TNS_ADMIN=./wallet
    username: ADMIN
```


## Configuración básica

### Puerto del servidor

```yaml
server:
  port: 8080
```



## Configuración datasource

```yaml
spring:
  datasource:
    url: jdbc:oracle:thin:@DATABASE_medium?TNS_ADMIN=./wallet
    username: ADMIN
    password: MiPassword
    driver-class-name: oracle.jdbc.OracleDriver
```



## Explicación

| Propiedad | Uso |
|---|---|
| `url` | URL JDBC Oracle |
| `username` | Usuario Oracle |
| `password` | Contraseña Oracle |
| `driver-class-name` | Driver JDBC |



## Configuración JPA

```yaml
spring:
  jpa:
    hibernate:
      ddl-auto: update

    show-sql: true

    properties:
      hibernate:
        dialect: org.hibernate.dialect.OracleDialect
```



## Explicación de JPA

| Propiedad | Uso |
|---|---|
| `ddl-auto` | Manejo automático de tablas |
| `show-sql` | Mostrar SQL en consola |
| `dialect` | Dialecto Oracle Hibernate |

