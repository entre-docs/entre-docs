---
outline: deep
---

# Sistemas asíncronos


La comunicación asíncrona permite que los componentes de un sistema distribuido intercambien mensajes sin necesidad de esperar una respuesta inmediata.  

Este enfoque es ampliamente utilizado en arquitecturas modernas basadas en microservicios, ya que mejora la **escalabilidad, resiliencia y desacoplamiento**.


## Consumiendo un servicio de colas

Los sistemas pueden integrarse mediante brokers de mensajería como RabbitMQ para enviar y procesar mensajes en segundo plano.



<!-- ## Arquitectura Productor – Consumidor

Un sistema productor–consumidor es un modelo de comunicación donde:

- Los **productores** envían mensajes.
- Las **colas** almacenan los mensajes temporalmente.
- Los **consumidores** procesan los mensajes cuando están disponibles.

Esto permite desacoplar los servicios y mejorar el rendimiento global del sistema.


### Componentes principales

- **Productor:** componente que genera y envía mensajes.
- **Exchange:** recibe mensajes y los enruta según reglas definidas.
- **Cola:** almacena mensajes hasta que sean consumidos.
- **Consumidor:** procesa los mensajes recibidos.



### Flujo de trabajo

1. El productor envía un mensaje al exchange.
2. El exchange enruta el mensaje hacia una cola.
3. El consumidor recupera el mensaje desde la cola.
4. El mensaje es procesado.
 -->

<br>

<p align="center">
  <img src="/az_arquitectura_productor_consumidor.png" width="800" alt="arquit.prod.consum."/>
</p>



### Comunicación asíncrona con RabbitMQ

RabbitMQ implementa el protocolo **AMQP**, permitiendo una mensajería confiable.

Elementos clave:

- Exchanges → enrutamiento de mensajes
- Queues → almacenamiento temporal
- Bindings → reglas de conexión



## Casuísticas reales

### Procesamiento en segundo plano
Delegar tareas pesadas como:

- generación de reportes  
- procesamiento de imágenes  
- envío de correos  

### Sistema de notificaciones
Distribución de eventos en:

- redes sociales  
- chats  
- sistemas de alertas  

### Integración de microservicios
Permite comunicación desacoplada entre servicios independientes.



## Casos de uso comunes

- **Balanceo de carga:** múltiples consumidores procesan tareas.
- **Reintentos:** manejo de errores en procesamiento de mensajes.
- **Notificaciones en tiempo real:** actualización inmediata de eventos del sistema.