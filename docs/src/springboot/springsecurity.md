---
outline: deep
---

# Spring Security

Spring Security es un marco que se centra en proporcionar autenticación y autorización a las aplicaciones Java.


## Creación del proyecto

Configuración en [Spring Initializr](https://start.spring.io):

| Campo | Valor |
|-------|-------|
| Proyecto | Maven |
| Lenguaje | Java |
| Dependencias | Spring Web, Spring Security, Thymeleaf |

### Dependencias principales

- **Thymeleaf**: motor de plantillas para simular el frontend
- **spring-boot-starter-security**: núcleo de Spring Security

```xml [pom.xml]
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```


## Integrar frontend y backend


### TokenStore.java

1. Crear un archivo con el nombre de `TokenStore.java`.

Este archivo se usará para almacenar el token JWT de respuesta al proceso de login y que se usará para llamar a los demás servicios de la capa backend.

``` java [TokenStore.java]
package com.duoc.seguridadcalidad;
import org.springframework.stereotype.Component;

@Component
public class TokenStore {
    
    private String token;
    
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
```

### CustomAuthenticationProvider

2. Ahora será necesario crear una clase `CustomAuthenticationProvider` que permitirá implementar nuestro propio método de autenticación contra la capa de backend.

``` java
package com.duoc.seguridadcalidad;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private TokenStore tokenStore;

    public CustomAuthenticationProvider(TokenStore tokenStore) {
        super();
        this.tokenStore = tokenStore;
    }
    
    @Override
    public Authentication authenticate(final Authentication authentication) throws AuthenticationException {
    
        System.out.println("Llegué Custom Authentication Provider: ");
        System.out.println("Authentication: " + authentication);
    
        final String name = authentication.getName();
        System.out.println("Name: " + name);
    
        final String password = authentication.getCredentials().toString();
        System.out.println("Password: " + password);
        System.out.println("Custom Authentication Provider: " + name);
        //log.info("Login Success");
     
        final MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("user", name);
        requestBody.add("encryptedPass", password);
        System.out.println("Request Body: " + requestBody);
    
        final var restTemplate = new RestTemplate();
        final var responseEntity = restTemplate.postForEntity("http://localhost:8080/login", requestBody, String.class);
        System.out.println("Response Entity: " + responseEntity);
    
        tokenStore.setToken(responseEntity.getBody());
        System.out.println("Token Store: " + tokenStore.getToken());
    
        if (responseEntity.getStatusCode() != HttpStatus.OK) {
            throw new BadCredentialsException("Invalid username or password");
        }
    
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    
        Authentication authenticatedToken = new UsernamePasswordAuthenticationToken(name, password, authorities);
    
        return authenticatedToken;
    }


    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
        }
}
```

### WebSecurityConfig.java

3. En este paso se debe modificar el archivo `WebSecurityConfig.java` para que se use la clase de autenticación creada en el paso anterior.

``` java
package com.duoc.seguridadcalidad;
import java.security.AuthProvider;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.context.annotation.Description;
@Configuration
@EnableWebSecurity(debug = true)
public class WebSecurityConfig {
    
    @Autowired
    private CustomAuthenticationProvider authProvider;

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.authenticationProvider(authProvider);
        return authenticationManagerBuilder.build();
}
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
http
.authorizeHttpRequests((requests) -> requests
.requestMatchers("/", "/home").permitAll()
.requestMatchers("/**.css").permitAll()
.anyRequest().authenticated()
)
.formLogin((form) -> form
.loginPage("/login")
.permitAll()
)
.logout((logout) -> logout.permitAll());
return http.build();
}
}
```


### Controller

4. Es necesario crear la ruta /greetings, que llamará al backend para obtener un saludo, el que incluirá en su header el token JWT como autenticación. El archivo a modificar es HomeController.java


``` java
package com.duoc.seguridadcalidad;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Controller
public class HomeController {

    private TokenStore tokenStore;

    public HomeController(TokenStore tokenStore) {
        super();
        this.tokenStore = tokenStore;
    }
    
    @GetMapping("/home")
    public String home(@RequestParam(name="name", required=false, defaultValue="Seguridad y Calidad en el Desarrollo")
    String name, Model model) {
        model.addAttribute("name", name);
        return "Home";
    }

    
    @GetMapping("/")
    public String root(@RequestParam(name="name", required=false, defaultValue="Seguridad y Calidad en el Desarrollo") 
    String name, Model model) {
        model.addAttribute("name", name);
        return "Home";
    }

    
    @GetMapping("/greetings")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="Juan González") String name, Model model) {
        System.out.println("Name: " + name);
        String url = "http://localhost:8080/greetings";
        final var restTemplate = new RestTemplate();
        String token = tokenStore.getToken();
        System.out.println("Token: " + token);
        
        // Crear los encabezados y añadir el token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", token);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        
        // Agregar parámetros a la URL
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url)
            .queryParam("name", name);
            
        // Realizar la petición con el token en el encabezado y los parámetros en la URL
        ResponseEntity<String> response = restTemplate.exchange(builder.toUriString(), HttpMethod.GET, entity, String.class);
        
        System.out.println("Response: " + response);
        
        model.addAttribute("name", response.getBody());
        return "Greetings";
    }
}
```

### Archivo HTML

Finalmente es necesario crear un archivo HTML que mostrará el resultado de la
llamada al servicio backend.

``` html
<!DOCTYPE HTML>
    <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>Getting Started: Serving Web Content</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <link rel="stylesheet" type="text/css" href="/style.css">
    </head>

    <body>
        <h1 th:text="|${name}!|"></h1>
        <div sec:authorize="isAuthenticated()">
            <h1 th:inline="text">Hola 
                <span th:remove="tag" sec:authentication="name"></span>!
            </h1>
            <h2>Respuesta a llamad a API externa con token JWT</h2>
        </div>
    </body>
</html>
```


## Springboot y JWT

Esta tabla describe la arquitectura de capas de un proyecto SpringBoot que implementa autenticación con JWT. Cada fila representa un paquete Java con su responsabilidad específica dentro del módulo de autenticación (auth).

|Paquete    |Anotación  |¿Qué hace? |
|-----------|-----------|-----------|
|com.musabeli.apiagricola.auth.entities|@Entity|Define el modelo de datos del usuario (tabla en BD)|
|com.musabeli.apiagricola.auth.repository|@Repository|Accede y consulta la base de datos|
|com.musabeli.apiagricola.auth.dtos|record|Objetos de transferencia de datos (lo que entra y sale de la API)|
|com.musabeli.apiagricola.auth.config|public class|Almacena la clave secreta para firmar tokens JWT|
|com.musabeli.apiagricola.auth.security|@Configuration|Lógica para crear el token JWT al autenticarse|
|com.musabeli.apiagricola.auth.service|@Service|Orquesta el registro y login de usuarios|
|com.musabeli.apiagricola.auth.controller|@RestController|Expone los endpoints REST (/login, /register, etc.)|
|com.musabeli.apiagricola.auth.security|@Component|Intercepta cada request y valida el token JWT|
|com.musabeli.apiagricola.auth.config|@Configuration|Configura qué rutas son públicas y cuáles requieren autenticación|