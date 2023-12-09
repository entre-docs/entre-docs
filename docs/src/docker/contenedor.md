# Comandos para manejo de contenedores

::: tip Ayuda
```bash
docker container --help
```
:::

## Crear un contenedor

```bash
docker container run --name <nombre_contenedor> <nombre_imagen>
```

## Crear contenedor en modo "Detached"

:::tip TIP
Para no bloquear la consola
:::

```bash
docker container run -d <nombre_imagen:tag>
```

## Crear contenedor y asignar puertos

::: tip TIP
* --name: nombre del contenedor
* -p (publish): puerto_pc:puerto_contendor
* -d (detached): correr el contenedor en modo background (para no bloquear la terminal)
* --rm (Clean up): Al detener del contenedor este se borrará junto con los volúmenes que no tengan nombre.
:::

```bash
docker container run --name nombre_contenedor -p port_pc:port_image -d nombre_imagen/id
```

::: info Ejemplo de contenedor phpMyAdmin
docker run --name phpmyadmin -d -e PMA_ARBITRARY=1 -p 8080:80 phpmyadmin:5.2.0-apache
:::

## Iniciar un contenedor existente

::: info
* Por defecto el comando start inicia un contenedor con -d (detach)
* -i: para iniciar un contener con la consola activada
:::

```bash
docker container start <nombre_contenedor>
```

## Ver contenedores activos

```bash
docker container ls
```

## Ver todos los contenedores

```bash
docker container ls -a
```

## Detener un contenedor

```bash
docker container stop <nombre_contenedor>
```

## Borrar un/varios contenedor

```bash
docker container rm <nombre_contenedor> <nombre_contenedor2>
```

```bash
docker container rm <id-contenedor> <id-contenedor2>
```

## Borrar todos los contenedores detenidos

```bash
docker container prune
```

## Borrar todos los contenedores, imágenes y volúmenes

```bash
docker system prune -a
```

## Entrar al contenedor mediante la terminal interactiva

```bash
docker exec -it <nombre-contenedor> terminal
```