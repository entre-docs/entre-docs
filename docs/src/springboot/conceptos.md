---
outline: deep
---

# Conceptos básicos de Springboot

## Spring Boot

Es un framework de Java que ayuda a crear aplicaciones web rápido y fácil.

- Está basado en microservicios.
- Ya viene con muchas cosas configuradas (como un servidor web, base de datos, etc.).
- No se necesita instalar servidores aparte como antes (por ejemplo, Tomcat viene incluido).
- Se enfoca en que cada aplicación sea autosustentable: se puede ejecutar sola, sin depender de cosas externas.

Ejemplo: hacer una app con Spring Boot, se empaqueta y se puede correr sola con java -jar.


## Archivo .war

- Es un archivo Java Web clásico (Web Application Archive).
- Se usaba antes para desplegar aplicaciones dentro de un servidor como Tomcat o JBoss.
- Hoy en día, con Spring Boot, ya se no necesita un .war. Se usa .jar (Java Archive), que se ejecuta directamente.


## Microservicios

Son pequeñas aplicaciones independientes, cada una encargada de una sola cosa dentro de un sistema más grande.

Por ejemplo:

- Un microservicio maneja los usuarios.
- Otro microservicio maneja los pagos.
- Otro maneja los correos.

Cada uno tiene:

- Su propio código.
- Su propia base de datos.
- Su propia infraestructura.


## Microservicios vs Monolito


|Monolito |Microservcio |
|---------|-------------|
|Todo está en una sola aplicación gigante|Todo está separado|
|Si cambias algo, puedes romper otra parte (por eso hacemos pruebas de no impacto)|Cada parte puede crecer o escalar sola|
|Si necesitas más potencia, tienes que escalar todo el sistema, aunque solo lo necesite una parte|Si algo falla, no afecta todo lo demás|
||Facilita el trabajo en equipo y el mantenimiento|



## Escalar

Escalar es darle más recursos (CPU, RAM o instancias) a una aplicación para que pueda atender a más usuarios.

* En un monolito: se escala toda la aplicación.
* En microservicios: se escala solo el microservicio que lo necesita.


## Comunicación de los microservicios

* Usan API REST con JSON como formato de intercambio de datos.
* Esto permite que microservicios escritos en diferentes lenguajes (Java, .NET, Python) puedan hablar entre sí.


## Ventajas de los Microservicios

* `Escalabilidad`: cada parte puede crecer por separado.
* `Fácil mantenimiento`: cambiar algo no afecta todo.
* `Despliegue independiente`: puedes actualizar un solo servicio.
* `Desacoplamiento`: cada uno funciona por su cuenta.

## Desventajas

* `Más complejo`: tienes que manejar muchos servicios.
* `Overhead de comunicación`: todo pasa por red.
* `Manejo de transacciones`: es más difícil (porque cada servicio tiene su base de datos).