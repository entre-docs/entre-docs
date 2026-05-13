---
outline: deep
---

# Kubernetes

Kubernetes (K8s) es una plataforma para automatizar el despliegue, escalado y administración de contenedores.


## Cluster

Grupo de nodos que ejecutan aplicaciones en contenedores de forma:

- Distribuida
- Escalable
- Automatizada
- Eficiente


## Pod

Los Pods son la unidad más pequeña en Kubernetes.

Características:

- Contienen uno o más contenedores
- Son efímeros
- Tienen una IP única
- Si el Pod se recrea, su IP cambia


## Service

Permite comunicación estable entre componentes.

Características:

- Expone Pods mediante una IP fija
- Permite balanceo de carga
- Evita depender de IPs dinámicas de Pods


## Ingress

Gestiona tráfico externo hacia el cluster.

Flujo:

Cliente → Ingress → Service → Pod


## ConfigMap

Permite almacenar configuración pública.

Ejemplos:

- Variables de entorno
- Configuración de aplicaciones

Formato tipo:

```json
{
  "DATABASE_HOST": "localhost"
}
```


## Secret

Almacena información sensible. Sirven para mantener variables ocultas:

- Contraseñas
- Tokens
- API Keys
- Credenciales



## Volume

Permite persistencia de datos fuera del ciclo de vida del Pod.

Puede almacenar datos en:

- Disco local
- NFS
- Cloud Storage
- Bases de datos externas


K8s no maneja la persistencia de data.


## Deployment

Define cómo crear y administrar Pods y la cantidad de réplicas.

Funciones:

- Crear réplicas
- Escalar aplicaciones
- Actualizaciones automáticas
- Recuperación automática


## StatefulSet

Similar a Deployment, pero pensado para aplicaciones con estado, principalmente bases de datos.

Ejemplo:

- PostgreSQL
- MongoDB
- Redis

Permite:

- Nombres persistentes
- Volúmenes persistentes
- Identidad estable