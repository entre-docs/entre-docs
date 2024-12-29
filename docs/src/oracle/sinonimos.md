---
outline: deep
---

# Comandos para el uso de Sinónimos en Oracle

Los sinónimos son **alias o nombres alternativos** para objetos de base de datos como tablas, vistas, secuencias, procedimientos almacenados, funciones, paquetes u otros sin necesidad de especificar su nombre completamente calificado (esquema.nombre_objeto). Los sinónimos **simplifican el acceso** a estos objetos, especialmente cuando pertenecen a otro esquema o base de datos.

Un sinónimo es un nombre alternativo para un objeto de la base de datos que se puede usar en lugar del nombre real del objeto. Existen dos tipos principales:

1. Sinónimos públicos: Accesibles por todos los usuarios de la base de datos.
2. Sinónimos privados: Accesibles solo por el usuario que los crea.

## Crear un sinónimo

1. Sinónimo Privado

::: tip Sintaxis
CREATE SYNONYM nombre_sinonimo FOR esquema.nombre_objeto;
:::

- Crear un sinónimo privado para la tabla ventas en el esquema comercial:
```sql
CREATE SYNONYM ventas_alias FOR comercial.ventas;
```


2. Sinónimo Público

::: tip Sintaxis
CREATE PUBLIC SYNONYM nombre_sinonimo FOR esquema.nombre_objeto;
:::

- Crear un sinónimo público para una vista llamada productos_view:
```sql
CREATE PUBLIC SYNONYM productos_alias FOR comercial.productos_view;
```


## Eliminar un sinónimo

1. Sinónimo privado

::: tip Sintaxis
DROP SYNONYM nombre_sinonimo;
:::

```sql
DROP SYNONYM ventas_alias;
```

2. Sinónimo público

::: tip Sintaxis
DROP PUBLIC SYNONYM nombre_sinonimo;
:::

```sql
DROP PUBLIC SYNONYM productos_alias;
```