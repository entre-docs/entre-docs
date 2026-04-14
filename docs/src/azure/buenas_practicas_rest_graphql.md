---
outline: deep
---


# Buenas prácticas de diseño REST y GraphQL

Implementar REST o GraphQL en una función Azure (FaaS - Function as a Service) requiere
considerar algunos aspectos específicos para asegurar que la función sea eficiente, segura y
fácil de mantener.



<div style="display: flex; align-items: flex-start; gap: 2rem;">
    <div style="flex: 1;">

**1. Diseño de API REST**

* `Definir los endpoints` y como se estructurarán. Ej: **GET** /items, **POST** /items,  **GET**
/items/{id}, **PUT** /items/{id}, **DELETE** /items/{id}

* `Utilizar los HTTP Methods` correctos.

</div>
<div style="flex-shrink: 0;">
  <img src="/rest_vs_graphql/serverless_apirest.png" alt="serverless_apirest" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>

-------------------


<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**2. Diseño de API GraphQL**

* `Definir el esquema` con tipos, consultas, mutaciones claros.

* `Definir consultas y mutaciones` para obtener datos y modificarlos respectivamente.

* `Documentar` el esquema usando descripciones y comentarios.

</div>
<div style="flex-shrink: 0;">
  <img src="/rest_vs_graphql/serverless_graphql.png" alt="serverless_graphql" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>


-------------------


<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**3. Configuración de la Función**

* Configurar la función para que use `HTTP Trigger`. Esto permite que la función sea invocada a través de solicitudes HTTP.

* `Utilizar output Binding` si se necesita devolver datos a servicios externos o almacenar en base de datos.

</div>
<div style="flex-shrink: 0;">
  <img src="/rest_vs_graphql/serverless_config.png" alt="serverless_config" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>


-------------------


<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**4. Manejo de errores**

* Devuelve códigos de estado `HTTP` adecuados y mensajes de error claros.

* Registra errores y eventos importantes (`Logs`) para facilitar la depuración y el monitoreo.

</div>
<div style="flex-shrink: 0;">
  <img src="/rest_vs_graphql/serverless_errores.png" alt="serverless_errores" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>


-------------------

<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**5. Seguridad**

* `Autenticación y autorización`: Implementa autenticación (por ejemplo, Azure AD, JWT tokens) para asegurar que solo usuarios autorizados puedan acceder a la función.

* `Valida los datos de entrada` para prevenir ataques como inyección SQL o XSS.

* Asegurarse de que las funciones sean `accesibles a través de HTTPS` para proteger la información en tránsito.

</div>
<div style="flex-shrink: 0; margin-top:60px">
  <img src="/rest_vs_graphql/serverless_seguridad.png" alt="serverless_seguridad" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>


-------------------

<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**6. Escalabilidad y Desempeño**

* `Stateless`: Mantener las funciones sin estado para permitir la escalabilidad. No dependas de la memoria local o de variables estáticas.

* Configurar `Timeouts` (tiempos de espera) para evitar que las funciones se ejecuten indefinidamente.

* Implementar `Throttling` (limitaciones) para controlar la cantidad de solicitudes que puede manejar tu función, protegiendo así contra sobrecargas.

</div>
<div style="flex-shrink: 0; margin-top:60px">
  <img src="/rest_vs_graphql/serverless_escalabilidad.png" alt="serverless_escalabilidad" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>


-------------------

<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**7. Observabilidad y monitoreo**

* `Logs y metrics`: Usar Azure Monitor, Application Insights u otras herramientas de monitoreo para rastrear el rendimiento y detectar problemas.

* `Trace ID`: Implementar identificadores de rastreo para correlacionar las solicitudes a través de diferentes servicios.

</div>
<div style="flex-shrink: 0; margin-top:60px">
  <img src="/rest_vs_graphql/serverless_observabilidad.png" alt="serverless_observabilidad" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>



-------------------

<div style="display: flex; align-items: flex-start; gap: 2rem;">
<div style="flex: 1;">

**8. Pruebas y despliegue**

* `Pruebas unitarias y de integración`: Implementar pruebas exhaustivas para asegurar que la API REST funciona como se espera. 

* `CI/CD`: Usar pipelines de CI/CD para automatizar el despliegue y garantizar que cada cambio pase por un proceso de integración y prueba riguroso.

</div>
<div style="flex-shrink: 0; margin-top:60px">
  <img src="/rest_vs_graphql/serverless_pruebas.png" alt="serverless_pruebas" style="max-width: 320px; border-radius: 8px;" />
</div>
</div>