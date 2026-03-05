---
outline: deep
---

# Vistas en Oracle

Una vista es una consulta almacenada que actúa como una tabla virtual. Permite presentar datos de una o más tablas de la base de datos de manera estructurada y personalizada, **sin duplicar físicamente los datos subyacentes**.


## Tipos de vistas

|Vistas simples|Vistas Complejas|Vistas materializadas|
|--------------|----------------|---------------------|
|Basadas en una sola tabla, sin funciones de agregado ni operaciones complejas.|Basadas en múltiples tablas, pueden incluir uniones, funciones de agregado y otras operaciones avanzadas.|Almacenan físicamente los datos y se actualizan periódicamente, mejorando el rendimiento en consultas sobre datos grandes o costosos de calcular.|



## Crear una vista

```sql
CREATE VIEW nombre_vista AS
SELECT columnas
FROM tabla
WHERE condiciones;
```

### Ejemplo

Supongamos que tienes una tabla llamada empleados con las siguientes columnas: id, nombre, departamento y salario.

Para crear una vista que muestre solo los empleados del departamento de "Ventas"

```sql
CREATE VIEW vista_ventas AS
SELECT id, nombre, salario
FROM empleados
WHERE departamento = 'Ventas';
```

## Consultar la vista

```sql
SELECT * FROM vista_ventas;
```

## Modificar la vista

```sql
CREATE OR REPLACE VIEW vista_ventas AS
SELECT id, nombre, salario
FROM empleados;
```

## Eliminar una vista

``` sql
DROP VIEW vista_ventas;
```


## Vista con JOIN

``` sql
CREATE VIEW vista_paises_regiones AS
SELECT
   c.country_id,
   c.country_name,
   r.region_name
FROM countries c
JOIN regions r
ON c.region_id = r.region_id;
```


## Vistas Materializadas

En Oracle también existen vistas materializadas, que **almacenan físicamente el resultado de una consulta**.

Se utilizan principalmente para mejorar el rendimiento en consultas complejas.


### Crear vista materializada

``` sql
CREATE MATERIALIZED VIEW vista_paises_mat
AS
SELECT country_id, country_name
FROM countries;
```

### Actualizar vista materializada

``` sql
REFRESH MATERIALIZED VIEW vista_paises_mat;
```