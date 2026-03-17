---
outline: deep
---

# Integración de Apache Kafka con Spring Boot

En arquitecturas de microservicios, Apache Kafka permite implementar **comunicación asíncrona** entre servicios.

Un microservicio puede actuar como:

- Producer → enviando mensajes a un topic  
- Consumer → procesando mensajes desde un topic  



## Requisitos previos

Para integrar Kafka con Spring Boot se requiere:

- Java JDK instalado  
- Proyecto Spring Boot configurado  
- Clúster Kafka en ejecución  



## Beneficios de la integración

- Desacoplamiento entre microservicios  
- Mayor resiliencia del sistema  
- Escalabilidad horizontal  
- Procesamiento de eventos en tiempo real  



## Ejemplo de arquitectura

Un sistema puede tener:

- Microservicio de pedidos → Producer  
- Microservicio de facturación → Consumer  
- Microservicio de notificaciones → Consumer  

Kafka actúa como **canal de comunicación central** entre los servicios.