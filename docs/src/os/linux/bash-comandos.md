---
outline: deep
---

# Comandos de Bash

## ls - Listar Archivos
Para listar archivos y directorios en el directorio actual.

```bash
ls
```

## cd - Cambiar directorio
Para cambiar el directorio de trabajo.

```bash
cd /ruta/al/directorio
```

## pwd - Directorio actual
Muestra el directorio de trabajo actual.

```bash
pwd
```

## mkdir - Nueva carpeta
Crea una nueva carpeta en la ruta.

```bash
mkdir nuevo_directorio
```

## rmdir - Eliminar directorio
Elimina un directorio vacío.

```bash
rmdir directorio_vacio
```

## touch - Crear archivo
Crea un archivo vacío.

```bash
touch nuevo_archivo.txt
```

## cat - Mostrar contenido
Muestra el contenido de un archivo.

```bash
cat nombre_archivo.txt
```

## mv - Mover o renombrar
Mueve o renombra archivos o directorios.

:::tip Mover
mv [opciones] origen destino
:::

```bash
mv archivo.txt subdirectorio/
```

- Renombrar: el archivo prueba1.txt se llamará prueba2.txt

```bash
mv prueba1.txt prueba2.txt
```

## rm - Eliminar
Elimina archivos o directorios.

```bash
rm archivo
```

- Borrar 1 o más directorios:

```bash
rm -r directorio1 directorio2
```

:::tip
La opción *-r* en el comando **rm** permite que el comando elimine directorios y todo su contenido de manera recursiva. Este comando eliminará el directorio y todos lo que esté dentro de él, incluidos los archivos y cualquier directorio anidado.
:::