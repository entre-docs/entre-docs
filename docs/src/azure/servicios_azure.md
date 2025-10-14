---
outline: deep
---

# Servicios de Azure DevOps

<div class="contenedor">
  <div class="fila">
    <img src="/servicios_azure/azure_boards.png" alt="Azure Boards">
    <div class="texto">
      <p>
      Incluye un conjunto de herramientas ágiles diseñadas para respaldar la planificación y el seguimiento del trabajo, así como para abordar defectos de código y problemas mediante los métodos Kanban y Scrum. 
      </p>
    </div>
  </div>

  <div class="fila">
    <img src="/servicios_azure/azure_repos.png" alt="Azure Repos">
    <div class="texto">
      <p>
      Brinda repositorios de Git o el Control de Versiones de Team Foundation (TFVC) como solución para gestionar el control del código fuente.
      </p>
    </div>
  </div>

  <div class="fila">
    <img src="/servicios_azure/azure_pipelines.png" alt="Azure Pipelines">
    <div class="texto">
      <p>
      Ofrece servicios de compilación y versionamiento para respaldar la implementación continua y entrega de aplicaciones.
      </p>
    </div>
  </div>

  <div class="fila">
    <img src="/servicios_azure/azure_test_plans.png" alt="Azure Test Plans">
    <div class="texto">
      <p>
      Suministra diversas herramientas para la realización de pruebas de aplicaciones, abarcando pruebas manuales o exploratorias y pruebas continuas.
      </p>
    </div>
  </div>

  <div class="fila">
    <img src="/servicios_azure/azure_artifacts.png" alt="Azure Artifacts">
    <div class="texto">
      <p>
      Facilita a los equipos la compartición de paquetes, como Maven, npm, NuGet, entre otros, tanto desde fuentes públicas como privadas, e integra el uso compartido de paquetes en las canalizaciones.
      </p>
    </div>
  </div>
</div>

<style scoped>
.contenedor {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 15px;
  align-items: center;
  max-width: 700px;
  margin: 2rem auto;
}

.fila {
  display: contents;
}

.fila img {
  width: 100%;
  border-radius: 8px;
}

.texto {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.fila:not(:last-child) img, 
.fila:not(:last-child) .texto {
  margin-bottom: 10px;
}
</style>


## Repos

Los sistemas de control de código fuente o versiones permiten la colaboración entre desarrolladores y el seguimiento de las modificaciones en la base de código, siendo esencial en proyectos con múltiples colaboradores. Estos sistemas admiten dos tipos de control de código fuente: Git y el Control de Versiones de Team Foundation (TFVC). En ambos, es posible asegurar archivos y organizarlos en carpetas, ramas y repositorios.


### Git

En el uso de Git, cada desarrollador mantiene una copia en su máquina de desarrollo del repositorio original, que incluye la información de la rama y el historial completo. Cada desarrollador trabaja directamente con su propio repositorio local, compartiendo cambios entre repositorios como un paso independiente. Los desarrolladores confirman cada conjunto de cambios y realizan operaciones de control de versiones, como revisar el historial y comparar, sin depender de una conexión de red. Para cambiar de contexto, los desarrolladores pueden crear una rama local privada y alternar entre variantes del código base moviéndose de una rama a otra. Posteriormente, combinan, publican o eliminan la rama.


### TFVC

Con TFVC (Team Foundation Version Control), los desarrolladores mantienen una única versión de cada archivo en sus máquinas de desarrollo.

Los datos históricos se almacenan únicamente en el servidor, y las bifurcaciones se basan en las rutas de acceso, generándose en el servidor.


## Boards

En los proyectos de desarrollo de software, es esencial disponer de métodos eficaces para compartir información y realizar un seguimiento del estado del trabajo, las tareas, los problemas y los defectos del código. En el pasado, es probable que hayas utilizado Microsoft Excel, Microsoft Project, un sistema de seguimiento de errores o una combinación de herramientas para estos fines. Sin embargo, en la actualidad, muchos equipos han adoptado enfoques ágiles para respaldar la planificación y el desarrollo. A través de Boards, se accede a las herramientas ágiles necesarias para respaldar eficazmente la labor de planificación y seguimiento.


En Boards, puedes realizar las siguientes acciones:

- Agregar y actualizar elementos de trabajo.
- Definir consultas de elementos de trabajo y crear gráficos de estado y tendencias en función de esas consultas.
- Administrar el trabajo pendiente del producto.
- Planeamiento de sprints mediante trabajos pendientes de sprint.
- Revisar las tareas de sprint y actualizar las tareas a través de los paneles de tareas.
- Visualización del flujo de trabajo y actualización del estado mediante paneles Kanban.
- Administración de carteras mediante la agrupación de historias en características y características de agrupación en epopeyas.
- Usar paneles de tareas durante las reuniones diarias de Scrum para revisar el trabajo completado, restante o bloqueado.


## CI/CD

La integración continua y el despliegue continuo (CI/CD) constituyen un enfoque en el desarrollo de software en el cual los desarrolladores colaboran en un repositorio de código compartido. Con cada modificación, se activa un proceso automatizado de compilación para identificar posibles problemas de código. Esto resulta en un ciclo de vida de desarrollo más ágil y en una reducción de la tasa de errores.