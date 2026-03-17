---
outline: deep
---

# Topics en Apache Kafka

Un **topic** es el canal lógico donde los productores envían mensajes y desde donde los consumidores los leen.

Permite organizar la información dentro del clúster Kafka.



## Características de los topics

- Permiten comunicación desacoplada  
- Se dividen en **particiones**  
- Los mensajes son **inmutables**  
- Admiten **replicación**  
- Permiten definir políticas de **retención de datos**



## Particiones

Cada topic puede dividirse en múltiples particiones.

Esto permite:

- Procesamiento paralelo  
- Mayor rendimiento  
- Escalabilidad horizontal  

Cada partición mantiene el **orden secuencial** de los mensajes.



## Replicación

Kafka replica los datos entre distintos brokers.

Esto permite:

- Alta disponibilidad  
- Recuperación ante fallos  
- Continuidad operacional  



## Configuración básica de un topic

Al crear un topic se pueden definir parámetros como:

- Número de particiones  
- Factor de replicación  
- Tiempo de retención de mensajes  

Estas configuraciones impactan directamente en el rendimiento del sistema.


### Funcionamiento de Topic

|**Componente**|**Descripción**|
|--------------|---------------|
|Producer|Los productores publican mensajes en uno o varios topics. Pueden enviar mensajes a un topic específico o a una partición dentro de un topic. |
|Partitions|Dentro de cada topic, las particiones actúan como unidades de almacenamiento. Los mensajes se distribuyen entre las particiones para permitir un procesamiento paralelo. Cada partición mantiene el orden secuencial de los mensajes.|
|Consumers|Los consumidores se suscriben a uno o varios topics y leen los mensajes de las particiones, permitiendo escalabilidad horizontal. |
|Replication|Los datos pueden replicarse en distintos brokers para asegurar alta disponibilidad y tolerancia a fallos.|


## Ejemplo conceptual

En un sistema de pedidos online puede existir un topic llamado `orders`.

- El sistema web envía pedidos como producer  
- Un microservicio de facturación consume los mensajes  
- Un sistema de analítica también procesa la información  

Esto permite procesar pedidos en tiempo real sin bloquear el sistema principal.

