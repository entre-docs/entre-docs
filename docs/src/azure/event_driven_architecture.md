---
outline: deep
---

# Arquitectura basadas en eventos

La Arquitectura Orientada a Eventos (Event-Driven Architecture, EDA) es un patrón de arquitectura de software que se basa en la **producción, detección, consumo y reacción a eventos**.

Un evento es cualquier cambio de estado o actualización en un sistema que puede ser observado y actuado por otros componentes del sistema.


## Componentes del EDA

::: code-group
``` md [Productores]
# Productores de Eventos

Son componentes o servicios que generan eventos.
Un productor puede ser cualquier aplicación o servicio que detecta cambios 
de estado significativos en su entorno y emite eventos para notificar esos 
cambios. 
```

``` md [Consumidores]
# Consumidores de Eventos

Son componentes o servicios que reciben y procesan eventos. 
Los consumidores reaccionan a los eventos realizando acciones específicas 
como actualizar bases de datos, llamar a otros servicios, o desencadenar 
procesos adicionales. 
```

``` md [Bus de eventos]
# Bus de Eventos

Es el middleware que facilita la transmisión de eventos entre productores 
y consumidores.
Puede ser un sistema de colas de mensajes, como RabbitMQ o Kafka, 
o un servicio de eventos en la nube como AWS EventBridge o Azure Event Grid.
```

``` md [Procesadores de Eventos]
# Procesadores de Eventos

Estos son servicios o funciones que reciben eventos y realizan lógica 
de procesamiento. Por ejemplo, las funciones Lambda en AWS o las Azure 
Functions pueden actuar como procesadores de eventos. 
```

``` md [Event Store]
# Event Store

Es un componente que almacena eventos para su posterior consulta y 
análisis. Puede ser una base de datos o un sistema especializado en 
almacenamiento de eventos.
```
:::


## Diferencia entre productores y consumidores

|Característica|Procesadores de eventos|Consumidores de Eventos|
|--------------|------------------------|----------------------|
|**Propósito Principal**|Ejecutar lógica de negocio compleja|Realizar acciones directas en respuesta a eventos|
|**Tipo de Operaciones**|Validación, transformación, generación de eventos|Actualización de UI, notificaciones, almacenamiento|
|**Generación de eventos**|Pueden generar nuevos eventos|Generalmente no generan nuevos eventos|
|**Complejidad**|Pueden ser más complejos y contener lógica detallada|Normalmente más simples, ejecutan acciones rápidas|


