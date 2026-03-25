---
outline: deep
---

# Creación de Proyecto - Initializr

Se crea un nuevo proyecto Spring Boot utilizando una herramienta de creación de proyectos como **Spring Initializer** o directamente desde el IDE (Entorno de Desarrollo Integrado) anexando la extensión *Spring Initializer*.

* Link para crear un proyecto: https://start.spring.io/

## Dependencias

* Lombok
* Spring Boot DevTools
* Spring Web

<br>
<p align="center">
  <img src="/springboot_initializr.png" width="800" alt="initializr"/>
</p>


## Dependencias de Oracle

* ojdbc11
* oraclepki
* osdt_core
* osdt_cert


Link: https://mvnrepository.com/


### Ejemplo de pom para conexión Oracle

```xml
<dependency>
	<groupId>com.oracle.database.jdbc</groupId>
	<artifactId>ojdbc11</artifactId>
	<scope>runtime</scope>
</dependency>
<dependency>
  <groupId>com.oracle.database.security</groupId>
  <artifactId>oraclepki</artifactId>
  <version>23.9.0.25.07</version>
</dependency>
<dependency>
  <groupId>com.oracle.database.security</groupId>
  <artifactId>osdt_core</artifactId>
  <version>21.19.0.0</version>
</dependency>
<dependency>
  <groupId>com.oracle.database.security</groupId>
  <artifactId>osdt_cert</artifactId>
  <version>21.19.0.0</version>
</dependency>
```