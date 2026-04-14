---
outline: deep
---


# Comunicación REST y GraphQL

## REST y HTTP Trigger

A diferencia de los microservicios, por buena práctica, **en las funciones Azure no se crea un endpoint por cada tipo de verbo**, es la lógica de la función la que determina qué camino se seguirá dependiendo del verbo de la llamada.

## GraphQL y HTTP Trigger

GraphQL es un lenguaje de consulta para APIs y un entorno de ejecución para ejecutar esas consultas mediante datos existentes.



`Schema` define la estructura de los datos disponibles, tipos de datos, y las relaciones entre ellos.

|Concepto|Definición|
|--------|----------|
|`Queries`|permiten a los clientes solicitar exactamente los datos que necesitan.|
|`Mutations`|utilizadas para crear, actualizar o eliminar datos.|
|`Resolvers`|funciones que resuelven una consulta, mutación o suscripción y devuelven los datos solicitados.|
|`Subscriptions`|permiten a los clientes suscribirse a cambios en los datos en tiempo real.|



## Arquitectura REST y GraphQL


<p align="center">
  <img src="/rest_vs_graphql/az_arquit_rest_graphql.png" width="800" alt="az_rest_vs_graphql"/>
</p>



## Rest vs. GraphQL

| Aspecto | REST | GraphQL |
|---------|------|---------|
| **Endpoint** | Cada recurso o combinación de recursos necesita su propio endpoint. | Un único endpoint (`/graphql`) para todas las consultas. |
| **Estructura de respuesta** | Predefinida; puede incluir más o menos información de la que se necesita. | El cliente define exactamente qué datos necesita en la consulta. |
| **Performance** | Puede requerir múltiples llamadas para obtener datos relacionados (ej. primero el autor, luego sus libros). | Puede obtener todos los datos necesarios en una sola llamada, optimizando la eficiencia. |
| **Versionado** | Requiere versionar la API (v1, v2...) cuando cambia el contrato. | Evoluciona el schema sin romper clientes existentes. |
| **Over/Under fetching** | Propenso a over-fetching (datos de más) o under-fetching (datos de menos). | Elimina over/under fetching al obtener exactamente los campos solicitados. |
| **Tipado** | Sin tipado estricto por defecto (depende de la documentación). | Schema fuertemente tipado que sirve como contrato explícito. |



## Implementar GraphQL en función Azure

1. Agregar dependencia

``` xml
<dependencies>
    <!-- Azure Functions Dependency -->
    <dependency>
        <groupId>com.microsoft.azure.functions</groupId>
        <artifactId>azure-functions-java-library</artifactId>
        <version>1.4.2</version>
    </dependency>

    <!-- GraphQL Java Dependency -->
    <dependency>
        <groupId>com.graphql-java</groupId>
        <artifactId>graphql-java</artifactId>
        <version>17.3</version>
    </dependency>
</dependencies>
```