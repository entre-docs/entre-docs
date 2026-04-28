---
outline: deep
---

# Construcción e Implementación de Eventos


## Azure Event Grid

::: code-group
``` md [Descripción]
Azure Event Grid es un servicio de enrutamiento de eventos que facilita 
la construcción de aplicaciones orientadas a eventos. 

Event Grid permite a las aplicaciones reaccionar a eventos de manera 
escalable y eficiente al enrutar eventos desde diversas fuentes a 
múltiples destinos.
```

``` md [Características]
- Soporte para varios tipos de eventos.
- Enrutamiento avanzado con filtros.
- Integración con otros servicios de Azure como Azure Functions, 
Logic Apps y más.
- Latencia baja y alta confiabilidad.
- Modelo de entrega "at least once" (al menos una vez).
```

``` md [Caso de uso ideal]
- Enrutamiento de eventos de alta disponibilidad y baja latencia.
- Conectar múltiples servicios mediante eventos.
- Automatización de flujos de trabajo.
- Reacciones a eventos en tiempo real, como cambios en recursos de Azure 
o notificaciones de aplicaciones.
```
:::


## Azure Event Hubs

::: code-group
``` md [Descripción]
Azure Event Hubs es un servicio de ingesta de datos en tiempo real 
que puede recibir y procesar millones de eventos por segundo.

Está diseñado para capturar, retener y procesar flujos de eventos 
de alta velocidad en tiempo real. 
```

``` md [Características]
- Ingestión masiva de eventos con alta tasa de rendimiento.
- Retención configurable de datos.
- Integración con Azure Stream Analytics, Apache Kafka, Spark, y otros.
- Seguridad y cumplimiento con la gestión de identidades y acceso.
```

``` md [Caso de uso ideal]
- Telemetría y análisis de datos en tiempo real.
- Ingesta de eventos de dispositivos IoT.
- Procesamiento de grandes volúmenes de eventos, como logs de 
aplicaciones o clics web.
- Ingesta de eventos para pipelines de big data.
```
:::



## Azure Service Bus

::: code-group
``` md [Descripción]
Azure Service Bus es un servicio de mensajería totalmente administrado 
que facilita la comunicación entre aplicaciones distribuidas mediante 
colas y temas (topics).

Está diseñado para sistemas empresariales críticos que requieren mensajes 
fiables y ordenados.
```

``` md [Características]
- Colas y temas para una comunicación flexible.
- Mensajería fiable con entrega garantizada.
- Gestión avanzada de sesiones y transacciones.
- Soporte para patrones de mensajería como pub/sub, solicitudes/respuestas, 
y más.
```

``` md [Caso de uso ideal]
- Telemetría y análisis de datos en tiempo real.
- Ingesta de eventos de dispositivos IoT.
- Procesamiento de grandes volúmenes de eventos, como logs de aplicaciones 
o clics web.
- Ingesta de eventos para pipelines de big data.
```
:::


## Implementación de Azure Event Grid

### Event Grid Topic

* Consultar esta guía: [EventGridTopic](https://drive.google.com/file/d/1bsjQD8zEjpeLzMLbhq_TGjKevxyXwOeN/view?usp=drive_link)


-------------

### Función Generadora

* Consultar esta guía: [Función generadora de eventos](https://drive.google.com/file/d/1cQtji-u2hMNehqT8OCf9NlIpKMRlAgwk/view?usp=drive_link)


-------------

### Función Consumidora

* Consultar esta guía: [Función consumidora de eventos](https://drive.google.com/file/d/1-dmknxHiw_K9cJyF0XX0Y8P5gpNf246y/view?usp=drive_link)


-------------

### Suscripción a Eventos

* Consultar esta guía: [Suscripción a eventos](https://drive.google.com/file/d/14yKOIkKzIGk9qZPq5NGpqjLe7adEK60G/view?usp=drive_link)