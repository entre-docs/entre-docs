---
outline: deep
---

# Integración de Arquitectura basada en eventos

La Arquitectura Orientada a Eventos (EDA) se ha convertido en un pilar fundamental para el desarrollo de aplicaciones escalables, resilientes y adaptables.


## Tecnologías cloud para Arquitecturas Orientadas a Eventos


> [!IMPORTANT] AMAZON WEB SERVICE (AWS)

::: details Amazon EventBridge (equivalente AWS de Azure Event Grid)
Es un servicio de bus de eventos que facilita la conexión entre aplicaciones utilizando datos de sus propios servicios, aplicaciones SaaS y servicios de AWS. Es ideal para construir aplicaciones event-driven al permitir el enrutamiento de eventos de diversas fuentes.
:::


::: details Amazon Simple Queue Service (SQS) y Amazon Simple Notification Service (SNS) (equivalente AWS de Azure Service Bus)
- **Amazon SQS**: Un servicio de mensajería completamente gestionado que permite desacoplar y escalar microservicios, sistemas distribuidos y aplicaciones serverless. Proporciona colas para almacenar mensajes de manera fiable. 

- **Amazon SNS**: Un servicio de notificación que facilita la entrega de mensajes a una gran cantidad de suscriptores o a otros servicios de AWS. Es ideal para enviar notificaciones push a dispositivos móviles, aplicaciones, correo electrónico y otros.
:::


::: details Google Cloud Pub/Sub (equivalente AWS de Azure Event Hubs)
Amazon Kinesis es una plataforma para la ingesta y el procesamiento de grandes cantidades de datos en tiempo real. Kinesis facilita la recolección, el procesamiento y el análisis de flujos de datos en tiempo real, y puede manejar millones de eventos por segundo.
:::

<br>

> [!WARNING] GOOGLE CLOUD PLATFORM (GCP)

::: details Google Cloud Pub/Sub (equivalente AWS de Azure Event Grid)
Es un servicio de mensajería asíncrona diseñado para la integración de sistemas y la entrega de mensajes en tiempo real. Permite la transmisión de eventos de una aplicación a otra y es ideal para sistemas de notificación y aplicaciones event-driven.
:::


::: details Google Cloud Pub/Sub y Google Cloud Tasks (equivalente AWS de Azure Service Bus)
- **Google Cloud Pub/Sub**: Utilizado para el intercambio de mensajes y la creación de sistemas desacoplados.

- **Google Cloud Tasks**: Permite la administración y ejecución de tareas en colas, ideal para la ejecución asíncrona de trabajos y el desacoplamiento de servicios.
:::


::: details Google Cloud Dataflow (equivalente AWS de Azure Event Hubs)
Es un servicio de procesamiento de datos en streaming y por lotes que permite construir pipelines para el análisis de datos en tiempo real. 
:::