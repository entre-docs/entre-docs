---
outline: deep
---

# Permisos

## Dar permiso total a archivos y directorios

```bash
sudo chmod -R 777 mi_directorio
```

En términos de permisos:

* 7 (en la notación octal) representa permisos de lectura (4), escritura (2) y ejecución (1) sumados, dando un total de 7.
* Así que 777 otorga permisos totales a todos los usuarios.


## Alternativa más segura

```bash
sudo chmod -R 755 mi_directorio
```

En terminos de permisos:

* El primer 7 representa los permisos del propietario del archivo o directorio.
* El segundo 5 representa los permisos del grupo al que pertenece el archivo o directorio.
* El tercer 5 representa los permisos de otros usuarios.


En notación octal, los números representan los siguientes permisos:

| Código| Usuario         | Lectura   | Escritura | Ejecución |
|-------|-----------------|-----------|-----------|-----------|
| 7     | Propietario     |   4       |   2       |   1       |
| 5     | Grupo           |   4       |           |   1       |
| 5     | Otros Usuarios  |   4       |           |   1       |



Por lo tanto:

* El propietario del archivo tiene permisos de lectura, escritura y ejecución.
* Los usuarios del grupo y otros usuarios tienen permisos de lectura y ejecución, pero no de escritura.
