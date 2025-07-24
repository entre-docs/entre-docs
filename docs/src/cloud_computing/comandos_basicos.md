---
outline: deep
---

# Comandos Básicos en Linux


## Listar el contenido

* Listar el contenido del directorio actual
```bash
ls
```

* Listar el contenido detallado (mostrar información adicional como permisos, propietario, tamaño, fecha, etc.)
```bash
ls -l
```

* Listar todos los archivos, incluyendo los ocultos (que comienzan con un punto)
```bash
ls –a
```

* Listar el contenido con detalles y también mostrar archivos ocultos
```bash
ls -la
```

## Cambiar el directorio

* Cambiar al directorio especificado
```bash
cd /ruta/del/directorio
```

* Cambiar al directorio principal del usuario
```bash
cd
```

* Ir al directorio anterior
```bash
cd ..
```

* Ir al directorio anterior al directorio actual y luego al subdirectorio llamado "ejemplo"
```bash
cd ../ejemplo
```

## Imprimir directorio de trabajo

El comando **pwd** en Linux significa "Print Working Directory" (Imprimir Directorio de Trabajo) y se utiliza para mostrar la ruta completa del directorio actual en el sistema de archivos.

Este comando devolverá la ruta completa del directorio actual.

```bash
pwd

# Ej: Si está en el directorio Descargas la ruta será:
# /home/MiUsuario/Descargas
```

## Crear directorios

El nombre **mkdir** proviene de "make directory".

* Crear un directorio en la ubicación actual
```bash
mkdir nombre_del_directorio
```

* Crear varios directorios al mismo tiempo
```bash
mkdir directorio1 directorio2 directorio3
```

* Crear un directorio en una ubicación específica
```bash
mkdir /ruta/del/nuevo_directorio
```

* Crear directorios anidados (subdirectorios)
```bash
mkdir -p directorio_padre/directorio_hijo/subdirectorio

# -p significa "parents". Si no se agrega -p el comando fallará
```

## Copiar archivos o directorios

::: info Sintaxis
**cp [opciones] origen destino**

* origen: Especifica el archivo o directorio que se va a copiar.
* destino: Especifica la ubicación donde se copiará el archivo o directorio.
:::

* Copiar un archivo a otro lugar
```bash
cp archivo.txt /ruta/de/destino/
```

* Copiar un directorio y su contenido recursivamente
```bash
cp -r directorio_origen/ /ruta/de/destino/
```

* Solicitar confirmación antes de sobrescribir un archivo existente
```bash
cp -i archivo.txt /ruta/de/destino/

# -i significa "interactivo", evita sobreescribir por accidente algún archivo
```

* Copiar todos los archivos que coinciden con un patrón (por ejemplo, todos los archivos con extensión .txt)
```bash
cp *.txt /ruta/de/destino/
```


## Borrar archivos o directorios

::: info Sintaxis
rm [opciones] archivo/directorio
:::


* Eliminar un archivo
```bash
rm nombre_archivo
```

* Eliminar un directorio y su contenido de forma recursiva
```bash
rm -r nombre_directorio
```

* Eliminar un archivo sin pedir confirmación
```bash
rm -f nombre_archivo
```


## Crear archivos

```bash
touch prueba1.txt
```

### Crear múltiples archivos

```bash
touch archivo1.txt archivo2.csv archivo3.txt
```

### Crear archivo en directorio específico

```bash
touch /ruta/del/directorio/nuevo_archivo.txt
```

## Mover archivos

```bash
mv archivo1.txt /ruta/completa/del/destino/
```

## Mostrar mensaje por consola

```bash
echo "Este es un mensaje por consola"
```

## Limpiar la consola

```bash
clear
```