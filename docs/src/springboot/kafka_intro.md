---
outline: deep
---

# Introducción a Apache Kafka

Apache Kafka es una plataforma de **streaming distribuido de eventos** utilizada para construir sistemas escalables y desacoplados.

Surge como solución al problema de la comunicación directa entre múltiples sistemas en arquitecturas distribuidas.

En un modelo tradicional cliente-servidor, cada sistema debe conectarse directamente con otros sistemas, lo que aumenta la complejidad y la carga de conexiones.

Kafka actúa como un **middleware de integración**, permitiendo que los sistemas productores envíen datos a la plataforma y que los sistemas consumidores los reciban desde ella.

Esto permite mejorar la escalabilidad y la resiliencia de los sistemas.



## Streaming distribuido

Kafka almacena los datos en múltiples servidores dentro de un clúster distribuido.

Esto permite:

- Alta disponibilidad  
- Tolerancia a fallos  
- Escalabilidad horizontal  
- Procesamiento de eventos en tiempo real  



## Componentes principales

| Componente | Descripción |
|------------|-------------|
| Producer | Aplicación que envía mensajes a Kafka |
| Consumer | Aplicación que recibe mensajes |
| Topic | Canal lógico donde se almacenan los mensajes |
| Broker | Servidor Kafka que almacena y distribuye datos |
| Cluster | Conjunto de brokers funcionando en conjunto |



## Casos de uso comunes

Kafka se utiliza en:

- Integración de microservicios  
- Procesamiento de eventos en tiempo real  
- Sistemas IoT  
- Análisis de logs  
- Pipelines de datos empresariales  



## Ejemplo conceptual

En un sistema de pedidos online:

- La aplicación web envía pedidos como **producer**
- Un microservicio de facturación actúa como **consumer**
- Un sistema de analítica también procesa los datos

Esto permite procesar información en tiempo real sin bloquear el sistema principal.