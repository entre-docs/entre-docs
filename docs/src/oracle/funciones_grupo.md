---
outline: deep
---

# Funciones de grupo

## Count

```bash
SELECT
    CARRERAID AS "ID DE CARRERA",
    COUNT(ALUMNOID) AS "TOTAL ALUMNOS MATRICULADOS"
FROM ALUMNO
GROUP BY CARRERAID
ORDER BY COUNT(ALUMNOID) DESC, CARRERAID ASC
;
```

| ID DE CARRERA  | TOTAL ALUMNOS MATRICULADOS | 
| -------------- | -------------------------- |
| 123            | 40                         |
| 456            | 30                         |
| 789            | 25                         |


## Group by

```bash
SELECT
    MIN(SALARIO),
    MAX(SALARIO),
    TO_CHAR(DEPARTAMENTO_ID)
FROM EMPLEADOS
GROUP BY TO_CHAR(DEPARTAMENTO_ID);
```

## MAX() - MIN() - SUM() - AVG()

:::info
- MIN: obtener el valor mínimo
- MAX: obtener el valor máximo
- SUM: sumar
- AVG: obtener el promedio
:::

```bash
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