---
outline: deep
---

# Uso de Subconsultas en sentencias


Una subconsulta es una sentencia SELECT que está en una cláusula de otra sentencia SQL. Pueden ser muy útil cuando se necesita seleccionar filas de una tabla con una condición que depende de los datos de la misma tabla.

En una sentencia SELECT se pueden colocar subconsultas en las cláusulas: 
- SELECT
- FROM
- WHERE
- GROUP BY
- HAVING


## Ejemplos de Subconsultas

### En la cláusula WHERE

Se usa para comparar un valor con un conjunto de resultados.

Obtener empleados con salario superior al promedio:

```sql
SELECT nombre, salario 
FROM empleados 
WHERE salario > (SELECT AVG(salario) FROM empleados);
```

### En la cláusula FROM

Se usa para tratar una subconsulta como una tabla temporal.

Calcula el salario promedio por departamento y lo usa en la consulta principal:

```sql
SELECT depto_id, promedio
FROM (SELECT depto_id, AVG(salario) AS promedio
        FROM empleados
        GROUP BY depto_id);
```

### En la cláusula SELECT

Devuelve un valor único por fila.

Obtiene el nombre del departamento de cada empleado.

```sql
SELECT nombre,
    (SELECT nombre FROM departamentos WHERE id = e.depto_id) AS depto
FROM empleados e;
```