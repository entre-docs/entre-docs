---
outline: deep
---


# Introducción a Azure Pipelines y Orquestación de Contenedores


## 🎯 ¿Qué es la Orquestación de Contenedores?

La **orquestación de contenedores** automatiza la gestión de aplicaciones contenedorizadas en entornos escalables, como arquitecturas de **microservicios**. Un orquestador simplifica tareas esenciales para garantizar despliegues **eficientes** y **confiables** en clústeres.



<p align="center">
  <img src="/aks_func_ppal_orquestador.png" width="800" alt="azure aks"/>
</p>




## 🛠️ Herramientas de Orquestación

- **Kubernetes (K8s)** 🌟: Plataforma de código abierto líder para gestionar contenedores a gran escala, ideal para cargas de trabajo complejas.
- **Docker Swarm** 🐳: Solución integrada de Docker, perfecta para entornos más simples.
- **Apache Mesos** 🖥️: Abstrae recursos del centro de datos, pero requiere complementos adicionales.



## 🚀 Kubernetes

**Kubernetes** es la herramienta más popular para orquestar contenedores, ofreciendo **portabilidad**, **escalabilidad** y **extensibilidad**. Se integra perfectamente con servicios como **Azure Kubernetes Service (AKS)**, combinado con **Azure Container Registry (ACR)** para despliegues seguros y eficientes.

### ✨ Ventajas de Kubernetes

- 🌍 **Portabilidad**: Usa archivos **YAML** para despliegues sin rediseñar la infraestructura.
- 📈 **Escalabilidad**: Gestiona el ciclo de vida de contenedores según necesidades.
- 🔧 **Extensibilidad**: Su **API** permite integraciones con herramientas **CI/CD** y lenguajes variados.

---

## 🏗️ Arquitectura de Kubernetes

Un clúster de **Kubernetes** está compuesto por:

- **Nodos de trabajo** 🖥️: Ejecutan aplicaciones contenedorizadas. Incluyen:
  - **Kubelet**: Agente que gestiona contenedores.
  - **Kube-proxy**: Maneja el tráfico de red.
  - **Entorno de ejecución de contenedores**: Ejecuta los contenedores.
- **Plano de control** 🎮: Gestiona la orquestación mediante:
  - **kube-api-server**: Expone la API de Kubernetes.
  - **kube-scheduler**: Asigna cargas de trabajo a nodos.
  - **Controller**: Mantiene el estado deseado.

---

## 📖 Glosario de Kubernetes

- **Pod** 🧳: Unidad básica que agrupa contenedores relacionados.
- **Service** 🌐: Define cómo acceder a un conjunto de pods (microservicio).
- **Controlador** ⚙️: Mantiene el estado deseado (ej. **ReplicaSet**, **Deployment**).
- **kubectl** 🖱️: Herramienta CLI para gestionar clústeres.
- **Kubelet** 🤖: Agente que ejecuta contenedores en nodos.
- **Kube-proxy** 🔌: Gestiona la red virtual y el tráfico.
- **kube-api-server** 📡: Expone la API de Kubernetes.
- **kube-scheduler** 📅: Asigna cargas de trabajo a nodos.

---

## ☁️ Azure Kubernetes Service (AKS)

**AKS** simplifica la gestión de clústeres **Kubernetes** en Azure, integrándose con **Microsoft Entra ID** y **Azure Container Registry (ACR)**. Facilita el despliegue de aplicaciones portátiles en contenedores con la potencia de la infraestructura de Azure. 🚀

---

## Estructura de Kubernetes

<p align="center">
  <img src="/az_estructura_k8s.png" width="800" alt="estructura k8s"/>
</p>



## 💾 Gestión de Almacenamiento y Redes en Kubernetes

### 💿 Almacenamiento

- **Volúmenes** 📂: Kubernetes utiliza volúmenes para gestionar almacenamiento.
- **Volúmenes Persistentes** 💾: Proveen almacenamiento duradero, accesible tras reinicios (ej. **azureDisk** para discos de Azure).
- **Volúmenes Efímeros** 🗑️: Almacenamiento temporal que se pierde al reiniciar un contenedor.

### 🌐 Redes

- **Redes de Contenedores** 🔗: Contenedores en un pod comparten la **IP** y configuración de red, como si estuvieran en el mismo host.
- **Redes de Clústeres** 🕸️: Facilitan comunicación entre pods en un clúster.
- **Servicios Externos** 🌍: Permiten acceso a aplicaciones desde fuera del clúster.
- **Servicios Internos** 🔒: Gestionan comunicación entre recursos dentro del clúster.
- **CNI (Interfaz de Red de Contenedor)** 🔌: Habilita comunicación directa entre pods y aplica políticas de red.

### 🔧 Configuraciones Clave

- **Contenedores**: Comparten la red del pod. 🛢️
- **Pods**: Cada pod tiene una **IP única**. 📍
- **Servicios**: Cada servicio tiene una **IP virtual**. 🌐
- **Clústeres**: Cada nodo tiene su propia **IP**. 💻
- **Comunicación del Clúster**: Usa **kube-dns** y **kube-proxy** para enrutar tráfico de servicios a pods. 🚦