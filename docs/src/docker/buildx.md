# Build con otras arquitecturas

::: tip
https://docs.docker.com/build/building/multi-platform/
:::


## Crear build personalizado

```bash
docker buildx create --name <mybuilder> --driver docker-container --bootstrap
```

## Usar el build creado

```bash
docker buildx use <mybuilder>
```

## Ver listado de build

```bash
docker buildx ls
```

## Subir para distintas plataformas (amd64 y arm64)

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t <usuario-dockerhub/nombre-imagen-s6:v1> --push .
```

## Inspeccionar

```bash
docker buildx imagetools inspect <usuario-dockerhub/nombre-imagen-s6:v1>
```