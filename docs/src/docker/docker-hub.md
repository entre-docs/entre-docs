# Comandos para Docker Hub

::: tip
Debes tener creada tu cuenta y logueado con tu usuario y contraseña
:::

## Cambiar tag a imagen

```bash
docker image tag <nombre-imagen> <usuario-dockerhub/nombre-imagen>
```


## Subir imagen a DockerHub

```bash
docker push <usuario-dockerhub/nombre-imagen>
```


## Opción para agregar tag de versión a una imagen lastest

```bash
docker image tag <usuario-dockerhub/nombre-imagen:latest usuario-dockerhub/nombre-imagen:v1.0.0>
```


## Subir nueva imagen a Docker Hub

```bash
docker push <usuario-dockerhub/nombre-imagen:v1.0.0>
```
