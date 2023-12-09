# Comandos para manejo de imagenes

## Descargar una imagen desde Docker Hub

* Default tag: latest (automático)
* 
```bash
docker pull <nombre_imagen>
```

```bash
docker pull <nombre_imagen:tag>
```

## Crear imagen desde archivo Dockerfile*

::: info
*Terminal en la ruta donde está el archivo Dockerfile
* **-t** : Para dar un nombre a la imagen
* **.** : Ruta relativa del directorio donde se encuentra el archivo dockerfile 
:::
```bash
docker build -t nombre_imagen:v1 .
```

## Agregar tag a imagen

```bash
docker build --tag <nombre_imagen> .
```

## Renombrar tag para nueva imagen

```bash
docker image tag <nombre-imagen>:nuevoNombreTag
```

## Ver todas las imágenes
```bash
docker image ls
```

## Borrar imagen
```bash
docker image rm <nombre_imagen>
```

```bash
docker image rm <id_imagen>
```


