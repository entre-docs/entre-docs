---
outline: deep
---

# Azure Container Registry

**Azure Container Registry (ACR)** es un depósito en la nube para **almacenar y gestionar imágenes de contenedores**, esos paquetes de software que llevan tus aplicaciones a cualquier rincón del universo digital. 🌐

Es la clave para **desplegar programas en la nube** 🚀 de forma ágil, ideal para proyectos grandes o cuando manejas múltiples aplicaciones al mismo tiempo. 💻


## Azure Container Apps

Proporciona un servicio de contenedor sin servidor específicamente diseñado para aplicaciones basadas en microservicios.
Este servicio destaca por sus sólidas capacidades de escalado automático, eliminando la complejidad asociada con la gestión directa de una infraestructura.


1. **Flexibilidad** sin la carga operativa (enfoque en el desarrollo de apps, no en la infraestructura)
2. Enfoque en **microservicios** (facilidad de desarrollo, implementación y escalado proporcionada por el servicio)
3. **Escalado automático** eficiente (las app pueden ajustar automaticamente su capacidad de respuesta a cambios n la carga de trabajo. Asegura un rendimiento óptimo sin requerir intervencion manual)


## ACR Tasks

ACR Tasks **automatiza la creación y actualización de imágenes** en Azure Container Registry, reaccionando a eventos como:

- 📝 Tarea rapida (compilación e inserción de imagen en contenedor Azure sin necesidad de instalar el motor de Docker. Es similar a comandos docker build y docker push)
- 🔄 Tareas desencadenadas automaticamente (CI/CD)
- ⏰ Tareas de varios pasos (definir flujos de trabajos complejos en un YAML)


Con **ACR Tasks**, se envía el contexto del código (como un repositorio GIT o archivos locales) usando el comando `az acr build` de la CLI de Azure. ¡El resultado? Imágenes construidas y almacenadas automáticamente en el registro. ✨

**Casos de uso**:
- 🛠️ Compilación automática al actualizar código.
- ⏳ Programación de builds para máxima eficiencia.



## Flujo de trabajo

::: tip
Implementar en Azure Container App desde Azure Container Registry mediante CI/CD Azure Devops Pipeline y Azure CLI
:::

<br>

1. **Desarrolladores** 💻: El desarrollador crea la imagen.
2. **Azure Repo** 🗂️: Un repositorio seguro que alberga el código.
3. **Azure Pipeline** ⚙️: Mecanismo estratégico que construye y despliega con fluidez.
4. **Azure Container Registry** ☁️: Un registro en la nube que guarda imágenes de contenedores.
5. **Azure Container App** 📦: Plataforma que implementa contenedores en producción.
6. **Log Analytics** 📊: Herramienta de monitoreo y análisis detallados para optimizar el rendimiento en tiempo real.
7. **Ciclo Continuo** 🔄: Retorno al repositorio para mejoras continuas.


<p align="center">
  <img src="/azure_acr.png" width="800" alt="azure acr"/>
</p>