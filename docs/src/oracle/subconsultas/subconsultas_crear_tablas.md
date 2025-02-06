---
outline: deep
---

# Uso de Subconsultas para crear tablas


La forma más simple de crear una tabla es utilizando una sentencia **SELECT** con la sentencia **CREATE TABLE**.

Se debe utilizar la opción **AS seguido de la sentencia SELECT** y se creará una tabla con los nombres de columnas, tipos de datos de las columnas seleccionadas y con las filas que retornará la sentencia SELECT.


## Ejemplo

Crear la tabla EMPLEADOS_JEFES basada en una consulta SELECT. La estructura de la tabla y sus datos se generan a partir del resultado de la consulta.

```sql
CREATE TABLE empleados_jefes AS
    SELECT  
        e.employee_id "ID_EMPLEADO", 
        e.first_name || ' ' || e.last_name "NOMBRE_EMPLEADO", 
        CASE 
            WHEN e.manager_id IS NULL THEN 'SIN JEFE'  
            WHEN e.manager_id IS NOT NULL THEN m.first_name || ' ' || m.last_name
        END "NOMBRE_JEFE" 
    FROM employees e
    LEFT JOIN  employees m ON (e.manager_id = m.employee_id)
    ORDER BY e.employee_id; 
```


Debe coincidir el número de columnas especificadas con el número de columnas  de la Subconsulta.

La **única constraint** que la tabla creada "hereda" de las tablas que se utilizan en la sentencia SELECT es la constraint **NULL**.