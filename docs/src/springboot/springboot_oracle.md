---
outline: deep
---


# Configuración de Springboot + Oracle Cloud

A continuación se listarán todos los archivos y configuraciones necesarias para implementarlo en una aplicación de SpringBoot para una API Rest con conexión a base de datos Oracle Cloud.

## 1. Dependencias en pom.xml

``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-webmvc</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
	<version>3.5.6</version>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<scope>runtime</scope>
	<optional>true</optional>
</dependency>
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
	<optional>true</optional>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa-test</artifactId>
	<scope>test</scope>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-webmvc-test</artifactId>
	<scope>test</scope>
</dependency>
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

## 2. Carpeta wallet en la raíz del proyecto

Descarga el wallet desde Oracle Cloud y coloca la carpeta `wallet` en la **raíz del proyecto** Spring Boot, al mismo nivel que `src` y `pom.xml`.

```
mi-proyecto/
├── src/
├── wallet/
│   ├── README
│   ├── cwallet.sso
│   ├── ewallet.p12
│   ├── ewallet.pem
│   ├── keystore.jks
│   ├── ojdbc.properties
│   ├── sqlnet.ora
│   ├── tnsnames.ora
│   └── truststore.jks
└── pom.xml
```

> [!IMPORTANT]
> Agrega `wallet/` a tu `.gitignore` para no exponer las credenciales en el repositorio.

```
# .gitignore
wallet/
```

## 3. Credenciales en .env

Las credenciales de conexión se definen en un archivo `.env` en la raíz del proyecto. Este archivo **no debe subirse al repositorio**.

```bash
CONNECTION_ALIAS=<alias_del_tnsnames>
WALLET_PATH=/app/wallet
ORACLE_USERNAME=<usuario_oracle>
ORACLE_PASSWORD=<contraseña_oracle>
API_PORT=8080
```

| Variable | Descripción |
|---|---|
| `CONNECTION_ALIAS` | Alias de conexión definido en `tnsnames.ora` dentro del wallet |
| `WALLET_PATH` | Ruta a la carpeta `wallet` (en Docker se monta en `/app/wallet`) |
| `ORACLE_USERNAME` | Usuario de la base de datos Oracle |
| `ORACLE_PASSWORD` | Contraseña del usuario Oracle |
| `API_PORT` | Puerto en el que corre la aplicación |

> [!IMPORTANT] IMPORTANTE
> Agrega `.env` a tu `.gitignore`. Puedes crear un `.env.example` con las claves sin valores reales para documentar las variables necesarias.

```bash
# .env.example
CONNECTION_ALIAS=
WALLET_PATH=
ORACLE_USERNAME=
ORACLE_PASSWORD=
API_PORT=8080
```

## 4. Configurar application.properties

```properties
spring.application.name=gestionvehiculo
spring.mvc.servlet.path=/api

# Importa las variables del archivo .env
spring.config.import=optional:file:.env[.properties]
server.port=${API_PORT}

# Datasource Oracle
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@${CONNECTION_ALIAS}?TNS_ADMIN=${WALLET_PATH}
spring.datasource.username=${ORACLE_USERNAME}
spring.datasource.password=${ORACLE_PASSWORD}

# Hibernate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.OracleDialect
spring.jpa.hibernate.ddl-auto=update

# Hikari connection pool
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.connection-timeout=30000

##spring.sql.init.mode=always
```

| Propiedad | Descripción |
|---|---|
| `spring.config.import` | Carga las variables del `.env` como propiedades |
| `spring.datasource.url` | URL JDBC con el alias del `tnsnames.ora` y la ruta al wallet |
| `TNS_ADMIN` | Parámetro que apunta a la carpeta `wallet` para que el driver encuentre los certificados |
| `ddl-auto=update` | Hibernate sincroniza el esquema sin borrar datos existentes |
| `hikari.maximum-pool-size` | Máximo de conexiones simultáneas en el pool |


## 5. Agregar entidades

Las entidades se ubican en el paquete `entities/` y representan las tablas de la base de datos Oracle. Se usan anotaciones de JPA junto con Lombok para reducir el código repetitivo.

```java
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "VEHICULO")
public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String patente;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private String ruta;

    @Column(precision = 10, scale = 6)
    private BigDecimal latitud;

    @Column(precision = 10, scale = 6)
    private BigDecimal longitud;
}
```

| Anotación | Descripción |
|---|---|
| `@Entity` | Marca la clase como entidad JPA mapeada a una tabla |
| `@Table(name = "VEHICULO")` | Especifica el nombre exacto de la tabla en Oracle (mayúsculas por convención) |
| `@Id` + `@GeneratedValue` | Clave primaria con autoincremento gestionado por la BD |
| `@Column(nullable = false)` | Campo obligatorio a nivel de base de datos |
| `@Column(precision, scale)` | Define precisión para tipos decimales (`BigDecimal`) |
| `@Data` | Lombok genera getters, setters, `equals`, `hashCode` y `toString` |
| `@Builder` | Lombok habilita el patrón builder para construir objetos |
| `@NoArgsConstructor` / `@AllArgsConstructor` | Lombok genera constructores requeridos por JPA y para tests |

## 6. Bonus: Dockerfile

El Dockerfile usa una construcción **multi-stage**: la primera etapa compila el proyecto con Maven y la segunda genera una imagen final liviana solo con el JDK y el JAR resultante.

La carpeta `wallet` se copia a `/app/wallet`, que coincide con el valor de `WALLET_PATH` en el `.env`.

```dockerfile
# Etapa 1: build con Maven
FROM maven:3.9-eclipse-temurin-21-jammy AS build

WORKDIR /app

COPY pom.xml ./
COPY src ./src

RUN mvn clean package -DskipTests

# Etapa 2: imagen final con JDK Alpine
FROM eclipse-temurin:21-jdk-alpine

# Copiar el JAR generado en la etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Copiar la carpeta wallet de Oracle Cloud
COPY wallet /app/wallet

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

| Instrucción | Descripción |
|---|---|
| `AS build` | Nombra la primera etapa para referenciarla después |
| `-DskipTests` | Omite los tests en el build de la imagen para reducir tiempo |
| `COPY --from=build` | Toma el JAR de la etapa anterior, sin incluir Maven ni el código fuente |
| `COPY wallet /app/wallet` | Incluye el wallet en la imagen; la ruta debe coincidir con `WALLET_PATH` en `.env` |
| `eclipse-temurin:21-jdk-alpine` | Imagen base ligera (~200 MB) con JDK 21 |

> [!WARNING]
> Al copiar `wallet` en la imagen Docker, los certificados quedan embebidos. Evalúa usar un volumen montado en producción en lugar de `COPY wallet` si el entorno lo permite.
