---
outline: deep
---

# Descarga e instalación de IntelliJ y JDK

## Descargar IntelliJ IDEA

* Windows: https://www.jetbrains.com/es-es/idea/download/?section=windows 


* Linux: https://www.jetbrains.com/es-es/idea/download/?section=linux


## JDK

::: tip JDK
Java Development Kit (JDK) es un conjunto de herramientas que permite desarrollar, compilar y ejecutar aplicaciones en Java.

Incluye el compilador, la Java Virtual Machine y todas las bibliotecas esenciales para la programación en Java.
:::

* Descargar JDK: https://www.oracle.com/latam/java/technologies/downloads/

Descargar y ejecutar el exe.


## Configurar variables de entorno en Windows

a. Buscar "Editar las variables de entorno del sistema"

b. Hacer click en "Variables de entorno"

c. En la sección "Variables del sistema" hacer click en **Nueva**

d. Agregar nombre de la variable JAVA_HOME **en mayúscula** 

e. Agregar el valor de la variable. Es la ruta donde está instalado el JDK (C:\Program Files\Java\jdk-23). Aceptar.

f. Se debe agregar un nuevo path, primero volver a "Variables de sistema" y hacer click en **Path**

g. Hacer click en **Nuevo**

h. Agregar el path `C:\Program Files\Java\jdk-23\bin`

i. Aceptar a todo.

Ejecutar en consola `java -version` para verificar que esté todo instalado y configurado.



## Primer Proyecto

* Ingresar a IntelliJ
* Seleccionar "New Project"
* Dar un nombre al proyecto, seleccionar ruta donde guardarlo
* Build System: IntelliJ
* Crear proyecto