---
outline: deep
---

# Comandos para la creación de usuarios y permisos


## Creación y gestión de usuarios

### Crear un nuevo usuario

```bash
useradd [opciones] nombre_usuario

# Ejemplo: sudo useradd -m -s /bin/bash juan
# Crea un usuario juan con un directorio personal en /home/juan 
# y el shell Bash.
```

|Opciones|Resultado|
|--------|---------|
|-m      |Crea un directorio personal para el usuario (por ejemplo, /home/nombre_usuario)|
|-s      |Especifica el shell predeterminado (por ejemplo, /bin/bash)|
|-G      |Añade al usuario a grupos adicionales|
|-d      |Define un directorio personal personalizado|


### Establecer o cambiar contraseña

Establecer o cambiar contraseña de un usuario

```bash
sudo passwd nombre_usuario

## Solicita ingresar y confirmar la nueva contraseña
```

### Modificar un usuario existente

Modifica atributos de un usuario, como su grupo, shell o directorio personal.

|Opciones|Resultado|
|--------|---------|
|-aG     |Añade al usuario a grupos adicionales (usar con -a para no sobrescribir)|
|-s      |Cambia el shell|
|-d      |Cambia el directorio personal|

```bash
sudo usermod -aG sudo nombre_usuario
```

### Eliminar un usuario

Elimina el usuario y su directorio personal.

```bash
sudo userdel -r nombre_usuario
```

## Crear un grupo

```bash
sudo groupadd nombre_grupo
```

## Eliminar un grupo

```bash
sudo groupdel nombre_grupo
```


## Gestión de permisos

### Cambiar permisos

Cambiar permisos de lectura (r), escritura (w) y ejecución (x) de archivos o directorios

```bash
chmod [opciones] permisos archivo
```

### Dar permiso total a archivos y directorios

```bash
sudo chmod -R 777 mi_directorio
```

En notación octal, los números representan los siguientes permisos:

| Código| Usuario         | Lectura   | Escritura | Ejecución |
|-------|-----------------|-----------|-----------|-----------|
| 7     | Propietario     |   4       |   2       |   1       |
| 7     | Grupo           |   4       |   2       |   1       |
| 7     | Otros Usuarios  |   4       |   2       |   1       |



### Alternativa más segura

```bash
sudo chmod -R 755 mi_directorio
```


En notación octal, los números representan los siguientes permisos:

| Código| Usuario         | Lectura   | Escritura | Ejecución |
|-------|-----------------|-----------|-----------|-----------|
| 7     | Propietario     |   4       |   2       |   1       |
| 5     | Grupo           |   4       |           |   1       |
| 5     | Otros Usuarios  |   4       |           |   1       |


### Cambiar al propietario

Cambiar al propietario de un archivo

```bash
chown [opciones] usuario[:grupo] archivo
```

Opciones:
* -R: Aplica cambios recursivamente.

Ejemplos:

* Cambiar propietario:

```bash
sudo chown juan archivo.txt

## Cambia el propietario de archivo.txt a juan
```

* Cambiar el propietario y grupo:

```bash
sudo chown juan:desarrolladores archivo.txt

## Cambia el propietario a juan y el grupo a desarrolladores
```

* Recursivo:

```bash
sudo chown -R juan:desarrolladores /proyectos

## Cambia propietario y grupo de /proyectos y su contenido
```

### Cambiar el grupo

Cambiar el grupo de un archivo o directorio.

::: tip
```
chgrp [opciones] grupo archivo
```

* Recursivo:
```
chgrp -R grupo /directorio
```
:::

```bash
sudo chgrp desarrolladores archivo.txt
```

```bash
sudo chgrp -R desarrolladores /proyectos
```
