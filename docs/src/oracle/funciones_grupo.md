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