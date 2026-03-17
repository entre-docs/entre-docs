---
outline: deep
---

# Desarrollo de sistema asíncrono más uso de colas


## Manejo de errores

Es esencial manejar adecuadamente los errores para asegurar que el sistema pueda recuperarse de fallos temporales y proporcionar feedback útil al usuario.


## Reintentos Automáticos

Este código en Java configura una fábrica de contenedores de escucha para RabbitMQ en una aplicación Spring. Define dos beans: uno para crear y configurar una SimpleRabbitListenerContainerFactory con una ConnectionFactory y un interceptor de reintento, y otro para configurar un interceptor de reintento sin estado con una política de reintento que intenta tres veces antes de rechazar y no reenviar el mensaje fallido.

``` java
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.retry.RejectAndDontRequeueRecoverer;
import org.springframework.amqp.rabbit.retry.RetryPolicy;
import org.springframework.amqp.rabbit.retry.SimpleRetryPolicy;
import org.springframework.amqp.rabbit.retry.StatelessRetryOperationsInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.retry.interceptor.RetryInterceptorBuilder;

@Configuration
public class RabbitMQConfig {

    @Bean
    public SimpleRabbitListenerContainerFactory
    rabbitListenerContainerFactory(ConnectionFactory connectionFactory) {

        SimpleRabbitListenerContainerFactory factory =
                new SimpleRabbitListenerContainerFactory();

        factory.setConnectionFactory(connectionFactory);
        factory.setAdviceChain(retryInterceptor());
        return factory;
    }

    @Bean
    public StatelessRetryOperationsInterceptor retryInterceptor() {
        RetryPolicy retryPolicy = new SimpleRetryPolicy(3); // Reintentos

        return RetryInterceptorBuilder.stateless()
                .retryPolicy(retryPolicy)
                .recoverer(new RejectAndDontRequeueRecoverer())
                .build();
    }
}
```

## Integración con Sprinboot Actuator

Monitorea el estado de las colas y los mensajes para asegurar el correcto funcionamiento de la aplicación.


``` java
management.endpoints.web.exposure.include=*
management.edpoint.health.show-details=always
```


Este archivo **application.properties** configura Spring Boot Actuator para exponer todos los endpoints de gestión (management.endpoints.web.exposure.include=*) y para mostrar siempre los detalles completos en el endpoint de salud del sistema (management.endpoint.health.show-details=always).


### Configuración de Actuator

La configuración de Actuator en Spring Boot sirve principalmente para monitorear y gestionar una aplicación en tiempo de ejecución.

``` java
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class RabbitMQHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        // Lógica de comprobación de estado de RabbitMQ
        return Health.up().build();
    }
}
```


### Pruebas

Implementa pruebas unitarias e integradas para asegurar que los componentes funcionen como se espera.

``` java
import org.junit.jupiter.api.Test;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RabbitMQIntegrationTest {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Test
    public void testSendMessage() {
        rabbitTemplate.convertAndSend("myQueue", "Hello, RabbitMQ!");
        // Agrega validaciones según sea necesario
    }
}
```


::: tip ¿Qué función cumple la anotación @RabbitListener en una aplicación Spring Boot integrada con RabbitMQ?

Marcar un método como consumidor de mensajes de RabbitMQ.

Se usa para indicar que un método debe actuar como consumidor de mensajes de una cola específica en RabbitMQ
:::