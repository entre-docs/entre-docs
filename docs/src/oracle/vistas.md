---
outline: deep
---

# Uso de Vistas en Oracle

Una vista es una consulta almacenada que actúa como una tabla virtual. Permite presentar datos de una o más tablas de la base de datos de manera estructurada y personalizada, **sin duplicar físicamente los datos subyacentes**.


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

## Tipos de vistas en Oracle

* Vistas simples: Basadas en una sola tabla, sin funciones de agregado ni operaciones complejas.
* Vistas complejas: Basadas en múltiples tablas, pueden incluir uniones, funciones de agregado y otras operaciones avanzadas.
* Vistas materializadas: Almacenan físicamente los datos y se actualizan periódicamente, mejorando el rendimiento en consultas sobre datos grandes o costosos de calcular.

