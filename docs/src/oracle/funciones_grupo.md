---
outline: deep
---

# Funciones de grupo en Oracle

Las funciones de grupo en Oracle son funciones que operan sobre un conjunto de filas y retornan un único valor basado en el grupo de datos.


## Count

```sql
SELECT
    CARRERAID AS "ID DE CARRERA",
    COUNT(ALUMNOID) AS "TOTAL ALUMNOS MATRICULADOS"
FROM ALUMNO
GROUP BY CARRERAID
ORDER BY COUNT(ALUMNOID) DESC, CARRERAID ASC
;
```

| ID DE CARRERA  | TOTAL ALUMNOS MATRICULADOS | 
|----------------|----------------------------|
| 123            | 40                         |
| 456            | 30                         |
| 789            | 25                         |



## MAX() - MIN() - SUM() - AVG()

:::info
- MIN: obtener el valor mínimo
- MAX: obtener el valor máximo
- SUM: sumar
- AVG: obtener el promedio
:::

```sql
SELECT
    ID_ESCOLARIDAD,
    COUNT(RUN_EMP) AS "TOTAL DE EMPLEADOS",
    TO_CHAR(MAX(SALARIO), '$99G999G999') AS "SALARIO MAXIMO",
    TO_CHAR(MIN(SALARIO), '$99G999G999') AS "SALARIO MINIMO",
    TO_CHAR(SUM(SALARIO), '$99G999G999') AS "SALARIO TOTAL",
    TO_CHAR(ROUND(AVG(SALARIO)), '$99G999G999') AS "SALARIO PROMEDIO"
FROM EMPLEADO
GROUP BY ID_ESCOLARIDAD
ORDER BY "TOTAL DE EMPLEADOS" DESC;
```

|ID_ESCOLARIDAD|TOTAL DE EMPLEADOS|SALARIO MÁXIMO|SALARIO MÍNIMO|SALARIO TOTAL|SALARIO PROMEDIO|
|--------------|------------------|--------------|--------------|-------------|----------------|
|1             |    150           | $25,000      |	$8,000      |	$3,500,000|	$12,000        |
|2             |	120           |	$20,000      |	$9,000      |	$2,400,000|	$10,000        |
|3             |	80            |	$18,000      |	$7,500      |	$1,400,000|	$11,250        |
|4             |	50            |	$15,000      |	$6,000      |	$750,000  |	$10,000        |


## Group by

Estas funciones suelen utilizarse junto con GROUP BY para calcular resultados por grupos.

```sql
SELECT
    TO_CHAR(DEPARTAMENTO_ID),
    MIN(SALARIO),
    MAX(SALARIO)
FROM EMPLEADOS
GROUP BY TO_CHAR(DEPARTAMENTO_ID);
```

|DEPARTAMENTO_ID|SALARIO MÍNIMO|SALARIO MÁXIMO|
|---------------|--------------|--------------|
|10             |3,000         |	10,000    |
|20             |4,500         |	15,000    |
|30             |2,500         |	8,000     |
|40             |5,000         |	12,000    |


## Distinct

Elimina valores duplicados de los resultados de una consulta, mostrando solo valores únicos en las columnas seleccionadas.

```sql
SELECT DISTINCT departamento_id
FROM empleados;
```

|DEPARTAMENTO_ID|
|---------------|
|10             |
|20             |
|30             |



## Having

Se utiliza para filtrar los resultados después de aplicar una función de agregación (como SUM, AVG, COUNT, etc.). Funciona junto con GROUP BY.

Ejemplo: Si quieres ver qué departamentos tienen más de 5 empleados.

```sql
SELECT departamento_id, COUNT(*)
FROM empleados
GROUP BY departamento_id
HAVING COUNT(*) > 5;
```

|DEPARTAMENTO_ID| EMPLEADOS|
|---------------|----------|
|10             | 7        |
|20             | 9        |



## Between

Se utiliza para filtrar registros basados en un rango de valores. Es inclusivo, lo que significa que incluye los valores extremos del rango.

Ejemplo: Si quieres listar a los empleados con un salario entre 2000 y 5000

```sql
SELECT nombre, salario
FROM empleados
WHERE salario BETWEEN 2000 AND 5000;
```

|NOMBRE |SALARIO|
|-------|-------|
|Juan   | 2500  |
|Ana    | 3000  |
|Luis   | 4500  |


## Ejemplo Combinado

Imaginemos que queremos saber qué departamentos tienen más de 3 empleados cuyos salarios estén entre 3000 y 7000.

```sql
SELECT departamento_id, COUNT(*)
FROM empleados
WHERE salario BETWEEN 3000 AND 7000
GROUP BY departamento_id
HAVING COUNT(*) > 3;
```

| DEPARTAMENTO_ID | EMPLEADOS |
|-----------------|-----------|
| 30              | 4         |
| 40              | 5         |
