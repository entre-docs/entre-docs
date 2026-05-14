---
outline: deep
---

# Conexión Oracle + Spring Boot

## Introducción

Spring Boot permite conectarse fácilmente a bases de datos Oracle utilizando:

- JDBC
- Spring Data JPA
- Hibernate
- Oracle Wallet (en Oracle Cloud)


## Dependencias


Estas dependencias permiten conectar Spring Boot con Oracle Database y Oracle Cloud utilizando Oracle Wallet.

```xml
<dependencies>

    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- Spring Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Oracle JDBC -->
    <dependency>
        <groupId>com.oracle.database.jdbc</groupId>
        <artifactId>ojdbc11</artifactId>
        <version>23.3.0.23.09</version>
    </dependency>

    <!-- Oracle PKI -->
    <dependency>
        <groupId>com.oracle.database.security</groupId>
        <artifactId>oraclepki</artifactId>
        <version>23.3.0.23.09</version>
    </dependency>

    <!-- OSDT Core -->
    <dependency>
        <groupId>com.oracle.database.security</groupId>
        <artifactId>osdt_core</artifactId>
        <version>23.3.0.23.09</version>
    </dependency>

    <!-- OSDT Cert -->
    <dependency>
        <groupId>com.oracle.database.security</groupId>
        <artifactId>osdt_cert</artifactId>
        <version>23.3.0.23.09</version>
    </dependency>

</dependencies>
```
