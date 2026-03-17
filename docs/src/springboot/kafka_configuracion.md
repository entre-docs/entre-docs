---
outline: deep
---

# Configuraciones básicas de Apache Kafka

Kafka requiere configurar distintos componentes para funcionar correctamente dentro de una arquitectura distribuida.



## Configuración de un Broker

Algunos parámetros importantes son:

- **broker.id**: Identificador único del servidor dentro del clúster.

- **log.dirs**: Directorio donde se almacenan los mensajes.

- **zookeeper.connect**: Dirección del servidor de coordinación del clúster.



## Configuración por defecto de Topics

Kafka permite definir configuraciones globales como:

- **num.partitions**: Número de particiones por defecto.

- **default.replication.factor**: Factor de replicación inicial.

- **min.insync.replicas**: Número mínimo de réplicas sincronizadas.

Estas configuraciones influyen en la disponibilidad y rendimiento.



## Configuración de un Producer

Un productor debe definir:

- **bootstrap.servers**: Dirección del broker Kafka.

- **key.serializer**: Serializador de la clave del mensaje.

- **value.serializer**: Serializador del contenido del mensaje.

- **acks**: Nivel de confirmación de entrega.

- **retries**: Número de reintentos en caso de fallo.



## Configuración de un Consumer

Un consumidor debe configurar:

- **bootstrap.servers**: dirección del broker

- **group.id**: identificador del grupo de consumidores

- **key.deserializer**

- **value.deserializer**

- **auto.offset.reset**: comportamiento al iniciar la lectura

- **enable.auto.commit**: confirmación automática de lectura

Estas configuraciones permiten controlar el procesamiento y escalabilidad del consumo de mensajes.
