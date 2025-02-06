---
outline: deep
---

# Uso de Join Simples y Complejos

## Inner Join

Un INNER JOIN es un tipo de operación en SQL que **combina filas de dos o más tablas con base en una condición** que especifica cómo se relacionan los datos entre ellas. **Solo devuelve las filas en las que hay coincidencias en ambas tablas** según los criterios especificados en la cláusula *ON*.

```sql
SELECT e.ID_EMPLEADO,
        e.NOMBRE AS NOMBRE_EMPLEADO,
        d.NOMBRE_DEPARTAMENTO
FROM EMPLEADO e 
INNER JOIN DEPARTAMENTO d
ON e.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO;
```

| ID_EMPLEADO	| NOMBRE_EMPLEADO	| NOMBRE_DEPARTAMENTO   |
|---------------|-------------------|-----------------------|
| 1             | Juan Pérez        | Ventas                |
| 2             | María Gómez       | Recursos Humanos      |
| 3             | Luis Torres       | IT                    |


## Outer Join

Un OUTER JOIN es un tipo de operación en SQL que combina filas de dos o más tablas, pero a diferencia del INNER JOIN, también **incluye filas que no tienen coincidencias** en una de las tablas.

::: tip ¿Cuándo usar un OUTER JOIN?

* LEFT JOIN: Cuando quieres todas las filas de la tabla izquierda, independientemente de si tienen coincidencias.
* RIGHT JOIN: Cuando quieres todas las filas de la tabla derecha, independientemente de si tienen coincidencias.
* FULL JOIN: Cuando necesitas todas las filas de ambas tablas, incluso las que no tienen coincidencias en la otra tabla.
:::

### Left Outer Join

Devuelve todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha. Si no hay coincidencia, las columnas de la tabla derecha aparecerán con valores NULL.

**TABLA EMPLEADO**

|ID_EMPLEADO|NOMBRE         |ID_DEPARTAMENTO|
|-----------|---------------|---------------|
|1          |Juan Pérez     |101            |
|2          |María Gómez    |102            |
|3          |Luis Torres    |NULL           |


**TABLA DEPARTAMENTO**

|ID_DEPARTAMENTO|NOMBRE_DEPARTAMENTO|
|---------------|-------------------|
|101            |Ventas             |
|102            |Recursos Humanos   |
|103            |IT                 |

```sql
SELECT 
    e.NOMBRE AS Nombre_Empleado,
    d.NOMBRE_DEPARTAMENTO AS Nombre_Departamento
FROM Empleado e
LEFT JOIN Departamento d
ON e.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO;
```

| Nombre_Empleado|  Nombre_Departamento |
|----------------|----------------------|
| Juan Pérez     |  Ventas              |
| María Gómez    |  Recursos Humanos    |
| Luis Torres    |  NULL                |



### Right Outer Join

Devuelve todas las filas de la tabla derecha y las filas coincidentes de la tabla izquierda. Si no hay coincidencia, las columnas de la tabla izquierda aparecerán con valores NULL.

```sql
SELECT 
    e.NOMBRE AS Nombre_Empleado,
    d.NOMBRE_DEPARTAMENTO AS Nombre_Departamento
FROM Empleado e
RIGHT JOIN Departamento d
ON e.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO;
```

|Nombre_Empleado|Nombre_Departamento|
|---------------|-------------------|
|Juan Pérez     |Ventas             |
|María Gómez    |Recursos Humanos   |
|NULL           |IT                 |



### Full Outer Join

Devuelve **todas** las filas de ambas tablas, incluidas las filas que no tienen coincidencias en ninguna tabla.
Las columnas de la tabla que no tienen coincidencias se llenan con **NULL**.

```sql
SELECT 
    e.NOMBRE AS Nombre_Empleado,
    d.NOMBRE_DEPARTAMENTO AS Nombre_Departamento
FROM Empleado e
FULL OUTER JOIN Departamento d
ON e.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO;
```

|Nombre_Empleado|Nombre_Departamento|
|---------------|-------------------|
|Juan Pérez     |Ventas             |
|María Gómez	|Recursos Humanos   |
|Luis Torres	|NULL               |
|NULL           |IT                 |


### Non Equi Join

Se utiliza cuando los datos no tienen una relación directa basada en una clave primaria o foránea, pero hay una relación lógica entre ellos que se puede establecer con otras condiciones.

* Tabla Empleado (Contiene los salarios de empleados)

|ID_EMPLEADO|NOMBRE     |SALARIO|
|-----------|-----------|-------|
|1          |Juan Pérez	|4500   |
|2          |María Gómez|7000   |
|3          |Luis Torres|12000  |

* Tabla Rango Salario (Contiene rangos de salarios y categorías)

|ID_RANGO|SALARIO_MIN|SALARIO_MAX|CATEGORIA |
|--------|-----------|-----------|----------|
|1       |0          |5000       |Junior    |
|2       |5001       |10000      |Mid-Level |
|3       |10001      |20000      |Senior    |


Queremos determinar la categoría salarial de cada empleado según los rangos definidos.

```sql
SELECT 
    e.NOMBRE AS Nombre_Empleado,
    e.SALARIO AS Salario,
    r.CATEGORIA AS Categoria
FROM Empleado e
JOIN Rango_Salario r
ON e.SALARIO BETWEEN r.SALARIO_MIN AND r.SALARIO_MAX;
```

|Nombre_Empleado|Salario|Categoria  |
|---------------|-------|-----------|
|Juan Pérez     |4500   |Junior     |
|María Gómez    |7000   |Mid-Level  |
|Luis Torres    |12000  |Senior     |

