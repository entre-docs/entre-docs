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



## Ejemplo básico: Productor y Consumidor

Flujo del ejemplo:

``` md
POST /api/pedidos  →  [topic: pedidos]  →  @KafkaListener
```

::: code-group
```java [KafkaConfig.java]
// Clase de configuración central de Kafka.
// Define los beans necesarios para que Spring pueda crear productores,
// consumidores y gestionar el topic "pedidos".
@EnableKafka
@Configuration
public class KafkaConfig {

    // broker Kafka desde application.yml
    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;

    // Productor: crea instancias del productor con su configuración.
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        return new DefaultKafkaProducerFactory<>(config);
    }

    // KafkaTemplate: clase para enviar mensajes al topic.
    // Se construye a partir del producerFactory.
    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }

    // Consumidor: crea instancias del consumidor con su configuración.
    // group-id agrupa consumidores que comparten la lectura de un mismo topic.
    // auto-offset-reset: "earliest" hace que lea desde el primer mensaje disponible.
    @Bean
    public ConsumerFactory<String, String> consumerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        config.put(ConsumerConfig.GROUP_ID_CONFIG, "grupo-pedidos");
        config.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        return new DefaultKafkaConsumerFactory<>(config);
    }

    // Contenedor que conecta el consumerFactory con los métodos anotados
    // con @KafkaListener, permitiendo escuchar mensajes de forma concurrente.
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, String> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }

    // Crea el topic "pedidos" en Kafka al iniciar la aplicación,
    // con 3 particiones (para paralelismo) y 1 réplica.
    @Bean
    public NewTopic topicPedidos() {
        return TopicBuilder.name("pedidos")
                .partitions(3)
                .replicas(1)
                .build();
    }
}
```

```yaml [application.yml]
# Dirección del broker Kafka al que se conecta la aplicación.
# En producción se reemplaza por la IP o dominio real del clúster.
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.apache.kafka.common.serialization.StringSerializer
    consumer:
      group-id: grupo-pedidos
      auto-offset-reset: earliest
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.apache.kafka.common.serialization.StringDeserializer
```

```java [PedidoProducer.java]
// Servicio productor: envia mensajes al topic "pedidos".
// Usa KafkaTemplate.send(topic, key, value), donde la key es el pedidoId.
// Kafka usa la key para garantizar que mensajes del mismo pedido
// siempre vayan a la misma partición (orden garantizado por clave).
@Service
public class PedidoProducer {

    private static final String TOPIC = "pedidos";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void enviar(String pedidoId, String mensaje) {
        kafkaTemplate.send(TOPIC, pedidoId, mensaje);
    }
}
```

```java [PedidoConsumer.java]
// Servicio consumidor: escucha mensajes del topic "pedidos".
// @KafkaListener se activa automáticamente cuando llega un mensaje.
// groupId debe coincidir con el configurado en consumerFactory.
@Slf4j
@Service
public class PedidoConsumer {

    @KafkaListener(topics = "pedidos", groupId = "grupo-pedidos")
    public void escuchar(String mensaje) {
        log.info("Pedido recibido: {}", mensaje);
    }
}
```

```java [PedidoController.java]
// Controlador REST que expone el endpoint POST /api/pedidos.
// Recibe el id y detalle del pedido como parámetros de query
// y delega el envío al servicio PedidoProducer.
@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidoProducer pedidoProducer;

    @PostMapping
    public ResponseEntity<String> crear(@RequestParam String id,
                                        @RequestParam String detalle) {
        pedidoProducer.enviar(id, detalle);
        return ResponseEntity.ok("Pedido enviado: " + id);
    }
}
```
:::