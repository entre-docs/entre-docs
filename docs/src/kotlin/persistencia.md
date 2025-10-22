---
outline: deep
---

# Persistencia de datos en Kotlin

La persistencia de datos se refiere a la capacidad de una aplicación para **almacenar y recuperar información** incluso deespués de cerrarse.


## Formas de Persistencia



|Tipo de Persistencia|Descripción|Mecanismo Principal|Ventajas|Desventajas|Ejemplo de Uso|
|--------------------|-----------|-------------------|--------|-----------|--------------|
|En Memoria|Almacena datos temporalmente durante el ciclo de vida de la app.|SharedPreferences, MutableMap|Rápido acceso, ideal para configuraciones.|Se pierde al cerrar la app|Guardar preferencias de usuario|
|En Archivos|Guarda datos de forma permanente en el sistema de archivos|File I/O (FileInputStream, FileOutputStream)|Simple para datos no estructurados|Requiere permisos y gestión manual|Almacenar texto o logs|
|En Base de Datos|Almacena datos permanentemente con estructura y consulta avanzada|SQLite, Room, Firebase Realtime|Manejo de grandes volúmenes, integridad|Complejidad en configuración|Gestionar usuarios o transacciones|

