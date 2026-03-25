---
outline: deep
---


# Arquitectura Serverless

La arquitectura Serverless es un modelo de computación en la nube que ofrece a los desarrolladores una forma eficiente de construir y desplegar aplicaciones sin preocuparse por la infraestructura subyacente. Sus aspectos clave son:

- **Gestión automatizada de recursos**: 
En lugar de que los desarrolladores tengan que provisionar servidores o contenedores, los proveedores de servicios en la nube se encargan automáticamente de los recursos de infraestructura. Esto incluye servidores, almacenamiento y redes. Como resultado, los desarrolladores pueden concentrarse en escribir código y crear aplicaciones sin distraerse por la administración de la infraestructura. 

- **Elasticidad y escalabilidad**: 
En la arquitectura Serverless, las aplicaciones se ejecutan en función de la demanda. Cuando aumenta la carga de trabajo, los recursos se escalan automáticamente. Ejemplo: Una aplicación experimenta un aumento repentino en el tráfico, se asignarán más recursos para manejarlo. Esto permite una mayor eficiencia y flexibilidad en comparación con los modelos tradicionales.

- **Funciones como Servicio (FaaS)**:
La característica central de la arquitectura serverless es el uso de funciones como servicio. Las funciones son pequeños fragmentos de código que se ejecutan en respuesta a eventos específicos. Ejemplo: Cuando un usuario realiza una solicitud HTTP o se produce un cambio en una base de datos, una función puede activarse automáticamente. Lo notable es que los desarrolladores no necesitan preocuparse por la gestión de servidores o contenedores para estas funciones. Se ejecutan en entornos aislados y se escalan según la demanda.

- **Costo y eficiencia**:
Dado que los recursos se asignan dinámicamente según la carga de trabajo, los costos pueden ser más bajos en comparación con los modelos tradicionales. Los desarrolladores solo pagan por el tiempo de ejecución real de sus funciones, en lugar de mantener servidores en funcionamiento todo el tiempo.


## Function as a Service (FaaS)

FaaS, o Function as a Service, es un modelo de computación en la nube que permite ejecutar fragmentos de código de manera independiente, sin la necesidad de gestionar directamente los servidores subyacentes. En FaaS, las funciones son unidades de código que se ejecutan en respuesta a eventos específicos, como solicitudes HTTP, cambios en la base de datos o mensajes en una cola.

En este modelo, el proveedor de la nube se encarga de aprovisionar, escalar y administrar la infraestructura necesaria para ejecutar las funciones, lo que permite a los desarrolladores centrarse en escribir código sin preocuparse por la gestión de servidores. Esto conlleva ventajas como una mayor flexibilidad, escalabilidad automática, y un modelo de facturación basado en el uso real de recursos. 


<p align="center">
  <img src="/az_arquitectura_serverless.png" width="800" alt="arquitectura serverless azure"/>
</p>

En la imagen se aprecia un ejemplo de una arquitectura cloud, puntos importantes a considerar:

Cuenta con `2 nubes diferentes`, una de ellas sólo es usada para un servicio de identificación (IDaaS) que es consumido desde el frontend y desde el BFF.

En el backend cuenta con 5 componentes diferentes:
    
* `BFF`: Encargado de ser la conexión entre las capas frontend y backend de un sistema, normalmente existe un BFF por cada tipo de frontend, por ejemplo, si tuviéramos un sistema que manejara 3 frontend distintos (frontend angular SPA, microfrontend y APP mobile) tendríamos 3 BFFs.

* `Microservicio Spring Batch`: Componente que usa la tecnología Spring Batch del framework Spring. Son piezas encargadas de gestionar grandes cantidades de datos de manera asíncrona, por ejemplo: un microservicio que se ejecutase todos los días a determinada hora para cargar un archivo de 5 millones de líneas a la base de datos y luego llame a un procedimiento almacenado. 

* `Microservicio Springboot`: Microservicio encargado de realizar una tarea específica, como por ejemplo ir a la base de datos a buscar datos de algún cliente. 

* `Miniservicio Springboot`: Un miniservicio es similar a un microservicio, se construye con las mismas tecnologías y patrones arquitectónicos pero que contiene mayor cantidad y complejidad de lógica en sus endpoints.

* `Función Serverless`: Es el único componente backend del diagrama, aparte de la base de datos, que no corre sobre un cluster de Kubernetes, esto debido a que las funciones corren sobre la misma nube, de ahí su denominación serverless: sin servidor. Una función puede tener la misma lógica que un microservicio, por ejemplo, ambos pudieran ir a buscar información de un cliente a la base de datos. 


::: code-group
```java [DatabaseConfig]
package com.musabeli.config;

import java.io.InputStream;
import java.net.URL;
import java.nio.file.*;
import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConfig {

    private static volatile String walletPath;

    private DatabaseConfig() {}

    public static Connection getConnection() throws Exception {
        String tnsName  = System.getenv("ORACLE_TNS_NAME");
        String username = System.getenv("ORACLE_USERNAME");
        String password = System.getenv("ORACLE_PASSWORD");

        configureWallet();

        String url = "jdbc:oracle:thin:@" + tnsName;
        return DriverManager.getConnection(url, username, password);
    }

    private static void configureWallet() throws Exception {
        if (walletPath != null) return;

        URL walletUrl = DatabaseConfig.class.getClassLoader().getResource("wallet");
        if (walletUrl == null) {
            throw new IllegalStateException("Wallet no encontrado en el classpath (resources/wallet)");
        }

        String resolvedPath;
        if ("file".equals(walletUrl.getProtocol())) {
            resolvedPath = Paths.get(walletUrl.toURI()).toString();
        } else {
            resolvedPath = extractWalletToTemp();
        }

        walletPath = resolvedPath;
        System.setProperty("oracle.net.tns_admin", walletPath);
        System.setProperty("oracle.net.wallet_location",
                "(SOURCE=(METHOD=FILE)(METHOD_DATA=(DIRECTORY=" + walletPath + ")))");
    }

    private static String extractWalletToTemp() throws Exception {
        Path tempDir = Files.createTempDirectory("oracle-wallet");
        String[] files = {
            "cwallet.sso", "ewallet.p12", "ewallet.pem",
            "keystore.jks", "ojdbc.properties", "sqlnet.ora",
            "tnsnames.ora", "truststore.jks"
        };
        for (String file : files) {
            try (InputStream is = DatabaseConfig.class.getClassLoader()
                    .getResourceAsStream("wallet/" + file)) {
                if (is != null) {
                    Files.copy(is, tempDir.resolve(file), StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }
        return tempDir.toString();
    }
}
```

```java [GsonConfig]
package com.musabeli.config;

import com.google.gson.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class GsonConfig {

    private GsonConfig() {}

    public static Gson create() {
        return new GsonBuilder()
                .registerTypeAdapter(LocalDate.class,
                        (JsonSerializer<LocalDate>) (src, t, ctx) ->
                                new JsonPrimitive(src.toString()))
                .registerTypeAdapter(LocalDate.class,
                        (JsonDeserializer<LocalDate>) (json, t, ctx) ->
                                LocalDate.parse(json.getAsString()))
                .registerTypeAdapter(LocalDateTime.class,
                        (JsonSerializer<LocalDateTime>) (src, t, ctx) ->
                                new JsonPrimitive(src.toString()))
                .registerTypeAdapter(LocalDateTime.class,
                        (JsonDeserializer<LocalDateTime>) (json, t, ctx) ->
                                LocalDateTime.parse(json.getAsString()))
                .create();
    }
}
```

```java [Usuario Entity]
package com.musabeli.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    private Long id;
    private String nombre;
    private String email;
    private LocalDateTime createdAt;
}
```

```java [Usuario Repository]
package com.musabeli.repository;

import com.musabeli.config.DatabaseConfig;
import com.musabeli.entities.Usuario;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UsuarioRepository {

    public List<Usuario> findAll() throws Exception {
        String sql = "SELECT ID, NOMBRE, EMAIL, CREATED_AT FROM USUARIOS ORDER BY ID";
        List<Usuario> result = new ArrayList<>();
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                result.add(mapRow(rs));
            }
        }
        return result;
    }

    public Optional<Usuario> findById(long id) throws Exception {
        String sql = "SELECT ID, NOMBRE, EMAIL, CREATED_AT FROM USUARIOS WHERE ID = ?";
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return Optional.of(mapRow(rs));
                }
            }
        }
        return Optional.empty();
    }

    public Usuario create(Usuario usuario) throws Exception {
        String sql = "INSERT INTO USUARIOS (NOMBRE, EMAIL) VALUES (?, ?)";
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql, new String[]{"ID"})) {
            ps.setString(1, usuario.getNombre());
            ps.setString(2, usuario.getEmail());
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                if (rs.next()) {
                    usuario.setId(rs.getLong(1));
                }
            }
        }
        return usuario;
    }

    public boolean update(long id, Usuario usuario) throws Exception {
        String sql = "UPDATE USUARIOS SET NOMBRE = ?, EMAIL = ? WHERE ID = ?";
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, usuario.getNombre());
            ps.setString(2, usuario.getEmail());
            ps.setLong(3, id);
            return ps.executeUpdate() > 0;
        }
    }

    public boolean delete(long id) throws Exception {
        String sql = "DELETE FROM USUARIOS WHERE ID = ?";
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setLong(1, id);
            return ps.executeUpdate() > 0;
        }
    }

    private Usuario mapRow(ResultSet rs) throws SQLException {
        Timestamp createdAt = rs.getTimestamp("CREATED_AT");
        return Usuario.builder()
                .id(rs.getLong("ID"))
                .nombre(rs.getString("NOMBRE"))
                .email(rs.getString("EMAIL"))
                .createdAt(createdAt != null ? createdAt.toLocalDateTime() : null)
                .build();
    }
}
```

```java [UsuariosFunction]
package com.musabeli.functions;

import com.google.gson.Gson;
import com.microsoft.azure.functions.*;
import com.microsoft.azure.functions.annotation.*;
import com.musabeli.config.GsonConfig;
import com.musabeli.entities.Usuario;
import com.musabeli.repository.UsuarioRepository;

import java.util.Optional;

public class UsuariosFunction {

    private final Gson gson = GsonConfig.create();
    private final UsuarioRepository usuarioRepo = new UsuarioRepository();

    @FunctionName("GetUsuarios")
    public HttpResponseMessage getUsuarios(
            @HttpTrigger(name = "req", methods = {HttpMethod.GET},
                    route = "usuarios", authLevel = AuthorizationLevel.ANONYMOUS)
            HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {
        try {
            return request.createResponseBuilder(HttpStatus.OK)
                    .header("Content-Type", "application/json")
                    .body(gson.toJson(usuarioRepo.findAll()))
                    .build();
        } catch (Exception e) {
            context.getLogger().severe("Error GetUsuarios: " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al obtener usuarios").build();
        }
    }

    @FunctionName("GetUsuarioById")
    public HttpResponseMessage getUsuarioById(
            @HttpTrigger(name = "req", methods = {HttpMethod.GET},
                    route = "usuarios/{id}", authLevel = AuthorizationLevel.ANONYMOUS)
            HttpRequestMessage<Optional<String>> request,
            @BindingName("id") String id,
            final ExecutionContext context) {
        try {
            return usuarioRepo.findById(Long.parseLong(id))
                    .<HttpResponseMessage>map(u -> request.createResponseBuilder(HttpStatus.OK)
                            .header("Content-Type", "application/json")
                            .body(gson.toJson(u)).build())
                    .orElse(request.createResponseBuilder(HttpStatus.NOT_FOUND)
                            .body("Usuario no encontrado").build());
        } catch (Exception e) {
            context.getLogger().severe("Error GetUsuarioById: " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al obtener usuario").build();
        }
    }

    @FunctionName("CreateUsuario")
    public HttpResponseMessage createUsuario(
            @HttpTrigger(name = "req", methods = {HttpMethod.POST},
                    route = "usuarios", authLevel = AuthorizationLevel.ANONYMOUS)
            HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {
        try {
            String body = request.getBody().orElse("");
            Usuario usuario = gson.fromJson(body, Usuario.class);
            Usuario created = usuarioRepo.create(usuario);
            return request.createResponseBuilder(HttpStatus.CREATED)
                    .header("Content-Type", "application/json")
                    .body(gson.toJson(created)).build();
        } catch (Exception e) {
            context.getLogger().severe("Error CreateUsuario: " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al crear usuario").build();
        }
    }

    @FunctionName("UpdateUsuario")
    public HttpResponseMessage updateUsuario(
            @HttpTrigger(name = "req", methods = {HttpMethod.PUT},
                    route = "usuarios/{id}", authLevel = AuthorizationLevel.ANONYMOUS)
            HttpRequestMessage<Optional<String>> request,
            @BindingName("id") String id,
            final ExecutionContext context) {
        try {
            String body = request.getBody().orElse("");
            Usuario usuario = gson.fromJson(body, Usuario.class);
            boolean updated = usuarioRepo.update(Long.parseLong(id), usuario);
            if (updated) {
                return request.createResponseBuilder(HttpStatus.OK)
                        .body("Usuario actualizado").build();
            }
            return request.createResponseBuilder(HttpStatus.NOT_FOUND)
                    .body("Usuario no encontrado").build();
        } catch (Exception e) {
            context.getLogger().severe("Error UpdateUsuario: " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al actualizar usuario").build();
        }
    }

    @FunctionName("DeleteUsuario")
    public HttpResponseMessage deleteUsuario(
            @HttpTrigger(name = "req", methods = {HttpMethod.DELETE},
                    route = "usuarios/{id}", authLevel = AuthorizationLevel.ANONYMOUS)
            HttpRequestMessage<Optional<String>> request,
            @BindingName("id") String id,
            final ExecutionContext context) {
        try {
            boolean deleted = usuarioRepo.delete(Long.parseLong(id));
            if (deleted) {
                return request.createResponseBuilder(HttpStatus.OK)
                        .body("Usuario eliminado").build();
            }
            return request.createResponseBuilder(HttpStatus.NOT_FOUND)
                    .body("Usuario no encontrado").build();
        } catch (Exception e) {
            context.getLogger().severe("Error DeleteUsuario: " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar usuario").build();
        }
    }
}
```
:::