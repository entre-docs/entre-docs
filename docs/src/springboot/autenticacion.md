---
outline: deep
---

# Implementar la autenticación

| Autenticación basada en contraseñas | Autenticación basada en tokens | Autenticación Multifactor (MFA) |
|-------------------------------------|--------------------------------|---------------------------------|
|El usuario ingresa un nombre de usuario y una contraseña. Si coinciden con los registros del sistema, el usuario es autenticado.| El usuario recibe un token tras ingresar sus credenciales, que se usa para futuras autenticaciones sin volver a ingresar la contraseña.| Requiere múltiples formas de autenticación, como una contraseña y un código enviado al teléfono.|




## IDaaS (Identity as a Service)

Es un modelo de servicio en la nube que proporciona soluciones de **gestión de identidad y acceso**. En lugar de que las organizaciones mantengan sus propias infraestructuras de gestión de identidad, pueden externalizar estas funciones a proveedores de servicios en la nube que ofrecen soluciones de IDaaS. 


## Ventajas de IDaaS

- Facilidad de implementación
- Escalabilidad
- Seguridad mejorada
- Experiencia de usuario mejorada


## JWT

JSON Web Token es un estandar que define una forma compacta y autónoma para transmitir información de forma segura entre partes como un objeto JSON. Estos tokens se utilizan para la autenticación y la transferencia segura de información entre el cliente y el servidor en aplicaciones web y servicios web.


## Integración con base de datos

1. Base de datos MySQL. (contenedor para instalarla localmente en el equipo)
2. Conexión con bbdd, creación de usuario y permisos

``` sql
create database mydatabase;
create user 'myuser'@'%' identified by 'password';
grant all on mydatabse.* to 'myuser'@'%';
```

3. Configurar parámetros de conexión con bbdd en backend en el archivo application.properties
4. Crear clase (modelo/entidad) en backend (User que implementa UserDetails)
5. Crear repositorio (UserRepository) 
6. Posteriormente es necesario sobrescribir el método UserDetailsService para poder traer desde la BD un usuario a partir de su username


## Implementación de JWT

::: tip Buscar desde maven repository y agregar al pom:

* jjwt-api
* jjwt-impl
* jjwt-jackson
:::

::: code-group
``` xml [pom]
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.5</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId> <!-- or jjwt-gson if Gson is preferred -->
    <version>0.12.5</version>
    <scope>runtime</scope>
</dependency>
```

```java [constants.java]
package com.aplicacion.backend;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;

public class Constants {

    // Spring Security
    public static final String LOGIN_URL = "/login";
    public static final String HEADER_AUTHORIZACION_KEY = "Authorization";
    public static final String TOKEN_BEARER_PREFIX = "Bearer ";

    // JWT
    public static final String ISSUER_INFO = "https://www.aplicacion.cl/";
    public static final String SUPER_SECRET_KEY = "ZnJhc2VzbGFyZ2FzcGFyYWNvbG9jYXJjb21vY2xhdmVlbnVucHJvamVjdG9kZWVtZXBsb3BhcmFqd3Rjb25zcHJpbmdzZWN1cml0eQ==bWlwcnVlYmFkZWVqbXBsb3BhcmFiYXNlNjQ=";
    public static final long TOKEN_EXPIRATION_TIME = 864_000_000; // 10 day

    public static Key getSigningKeyB64(String secret) {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public static Key getSigningKey(String secret) {
        byte[] keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
```

``` java [WebSecurityConfig.java]
package com.aplicacion.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity()
@Configuration
class WebSecurityConfig{

    @Autowired
    JWTAuthorizationFilter jwtAuthorizationFilter;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {

        http
            .csrf((csrf) -> csrf
                .disable())
            .authorizeHttpRequests( authz -> authz
                .requestMatchers(HttpMethod.POST,Constants.LOGIN_URL).permitAll()
                .anyRequest().authenticated())
            .addFilterAfter(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

``` java [JWTAuthorizationFilter.java]
package com.aplicacion.backend;

    import io.jsonwebtoken.*;
    import jakarta.servlet.FilterChain;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
    import org.springframework.security.core.authority.SimpleGrantedAuthority;
    import org.springframework.security.core.context.SecurityContextHolder;
    import org.springframework.stereotype.Component;
    import org.springframework.web.filter.OncePerRequestFilter;

    import java.io.IOException;
    import java.util.List;
    import java.util.stream.Collectors;

    import javax.crypto.SecretKey;

    import static com.aplicacion.backend.Constants.*;

    @Component
    public class JWTAuthorizationFilter extends OncePerRequestFilter {

        private Claims setSigningKey(HttpServletRequest request) {
            String jwtToken = request.
                    getHeader(HEADER_AUTHORIZACION_KEY).
                    replace(TOKEN_BEARER_PREFIX, "");

                    return Jwts.parser()
                    .verifyWith((SecretKey) getSigningKey(SUPER_SECRET_KEY))
                    .build()
                    .parseSignedClaims(jwtToken)
                    .getPayload();

        }

        private void setAuthentication(Claims claims) {

            List authorities = (List) claims.get("authorities");

            UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(claims.getSubject(), null,
                    authorities.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));

            SecurityContextHolder.getContext().setAuthentication(auth);

        }

        private boolean isJWTValid(HttpServletRequest request, HttpServletResponse res) {
            String authenticationHeader = request.getHeader(HEADER_AUTHORIZACION_KEY);
            if (authenticationHeader == null || !authenticationHeader.startsWith(TOKEN_BEARER_PREFIX))
                return false;
            return true;
        }

        @Override
        protected void doFilterInternal(@SuppressWarnings("null") HttpServletRequest request, @SuppressWarnings("null") HttpServletResponse response, @SuppressWarnings("null") FilterChain filterChain) throws ServletException, IOException {
            try {
                if (isJWTValid(request, response)) {
                    Claims claims = setSigningKey(request);
                    if (claims.get("authorities") != null) {
                        setAuthentication(claims);
                    } else {
                        SecurityContextHolder.clearContext();
                    }
                } else {
                    SecurityContextHolder.clearContext();
                }
                filterChain.doFilter(request, response);
            } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException e) {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.sendError(HttpServletResponse.SC_FORBIDDEN, e.getMessage());
                return;
            }
        }

    }

```

``` java [JWTAuthenticationConfig.java]
package com.aplicacion.backend;

    import io.jsonwebtoken.Jwts;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.core.GrantedAuthority;
    import org.springframework.security.core.authority.AuthorityUtils;

    import java.util.Date;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;
    import java.util.stream.Collectors;

    import static com.aplicacion.backend.Constants.*;

    @Configuration
    public class JWTAuthenticationConfig {

        public String getJWTToken(String username) {
            List grantedAuthorities = AuthorityUtils
                    .commaSeparatedStringToAuthorityList("ROLE_USER");


            Map claims = new HashMap<>();
            claims.put("authorities", grantedAuthorities.stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList()));

            String token = Jwts.builder()
                    .claims()
                    .add(claims)
                    .subject(username)
                    .issuedAt(new Date(System.currentTimeMillis()))
                    .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 1440))
                    .and()
                    .signWith(getSigningKey(SUPER_SECRET_KEY))
                    .compact();

            return "Bearer " + token;
        }

    }

```
:::


## Creación de controladores

Se crea la clase `LoginController.java` que implementará la acción de login, validará contra la BD que el password recibido sea el correcto para el usuario y posteriormente generará un token que enviará como respuesta. 

El segundo controller `SecuredController.java`, para las rutas que no son públicas y sólo aceptan que contengan un JWT válido.

::: code-group
``` java [LoginController]
package com.aplicacion.backend;

import com.aplicacion.backend.User;
import com.aplicacion.backend.JWTAuthtenticationConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    JWTAuthtenticationConfig jwtAuthtenticationConfig;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @PostMapping("login")
    public String login(
            @RequestParam("user") String username,
            @RequestParam("encryptedPass") String encryptedPass) {

        final UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (!userDetails.getPassword().equals(encryptedPass)) {
            throw new RuntimeException("Invalid login");
        }
        String token = jwtAuthtenticationConfig.getJWTToken(username);
        return token;
    }
}
```

``` java [SecuredController]
package com.aplicacion.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecuredController {

    @RequestMapping("greetings")
    public String greetings(@RequestParam(value="name", defaultValue="World") String name) {
        return "Hello {" + name + "}";
    }
}
```
:::