---
outline: deep
---

# Funciones para validar valores nulos

Son funciones que trabajan con cualquier tipo de dato y permiten definir valores a utilizar en el caso de que las expresiones tengan valor nulo.


## NVL()

Reemplaza un valor nulo con un valor predeterminado.

::: tip
* Sintaxis: **NVL(expr1, expr2)**

- expr1: El valor que puede ser nulo.
- expr2: El valor que se usará si expr1 es nulo.
:::

| last_name | salary | commission_pct |
|-----------|--------|----------------|
| King      | 5000   | 0.1            |
| Taylor    | 4000   | NULL           |
| Adams     | 3000   | 0.05           |

```sql
SELECT last_name,
    salary,
    commission_pct "PORC. COMISION SIN NVL", 
    (salary*12) + (salary*12*commission_pct)"SALARIO ANUAL SIN NVL",
    NVL(commission_pct, 0) "PORC. COMISION CON NVL", 
    (salary*12) + (salary*12*NVL(commission_pct,0)) "SALARIO ANUAL CON NVL"
FROM employees;
```


| last_name| salary| PORC. COMISION SIN NVL| SALARIO ANUAL SIN NVL| PORC. COMISION CON NVL| SALARIO ANUAL CON NVL|
|----------|-------|-----------------------|----------------------|-----------------------|----------------------|
| King     | 5000  | 0.1                   | 66000                | 0.1                   |6000                  |
| Taylor   | 4000  | NULL                  | NULL                 | 0                     |48000                 |
| Adams    | 3000  | 0.05                  | 37800                | 0.05                  |37800                 |



## COALESCE

Devuelve el primer valor **no nulo** de una lista de expresiones.

Es más flexible que NVL porque puede manejar múltiples valores alternativos.

::: tip
* Sintaxis: **COALESCE(expr1, expr2, ..., exprN)**

* Devuelve el primer valor NO NULO.
:::

```sql
SELECT COALESCE(bono, comision, 0) AS ingreso_extra
FROM empleados;

/* Devuelve el valor de bono si no es nulo;
si bono es nulo, devuelve comision,
y si ambos son nulos, devuelve 0. */
```

## NVL2()

::: tip
* Sintaxis: **NVL2(expr1, expr2, expr3)**

- expr1: La expresión que se evalúa. Puede ser nula o no nula.
- expr2: El valor que se devuelve si expr1 no es nula.
- expr3: El valor que se devuelve si expr1 es nula.
:::


| employee_id | salary | commission_pct |
|-------------|--------|----------------|
| 100         | 24000  | NULL           |
| 101         | 17000  | 0.1            |
| 114         | 11000  | NULL           |
| 147         | 12000  | 0.05           |
| 148         | 15000  | NULL           |
| 149         | 13000  | NULL           |


```sql
SELECT  employee_id, salary, commission_pct, 
    NVL2(commission_pct, 'SALARIO+COMISION', 'SOLO SALARIO') 
    AS  "SALARIO MENSUAL CORRESPONDE A" 
 FROM employees
WHERE employee_id IN(100, 101, 114, 147,148, 149);
```

| employee_id | salary | commission_pct | SALARIO MENSUAL CORRESPONDE A |
|-------------|--------|----------------|-------------------------------|
| 100         | 24000  | NULL           | SOLO SALARIO                  |
| 101         | 17000  | 0.1            | SALARIO+COMISION              |
| 114         | 11000  | NULL           | SOLO SALARIO                  |
| 147         | 12000  | 0.05           | SALARIO+COMISION              |
| 148         | 15000  | NULL           | SOLO SALARIO                  |
| 149         | 13000  | NULL           | SOLO SALARIO                  |


## NULLIF()

La función NULLIF compara dos expresiones:

* Si las dos expresiones son iguales, devuelve NULL.
* Si las dos expresiones son diferentes, devuelve el valor de la primera expresión.

::: tip
* Sintaxis: **NULLIF(expr1, expr2)**

- expr1: La primera expresión a evaluar.
- expr2: La segunda expresión a comparar con la primera.
:::

**EMPLEADOS**

| employee_id | first_name | salary | commission_pct |
|-------------|------------|--------|----------------|
| 100         | Steven     | 24000  | NULL           |
| 104         | Bruce      | 12000  | 0.1            |
| 106         | Nancy      | 9000   | NULL           |
| 110         | John       | 8000   | 0.05           |
| 166         | Sundar     | 7000   | NULL           |
| 167         | Alice      | 6000   | 0.2            |


```sql
SELECT first_name, salary, commission_pct,
        salary*NVL(commission_pct,0) "VALOR COMISION", 
        NULLIF(salary*NVL(commission_pct,0),0) "RESULTADO FUNCION NULLIF"
FROM employees
WHERE employee_id IN(100, 104, 106, 110, 166, 167);
```

**RESULTADO**

| first_name | salary | commission_pct | VALOR COMISION | RESULTADO FUNCION NULLIF |
|------------|--------|----------------|----------------|--------------------------|
| Steven     | 24000  | NULL           | 0              | NULL                     |
| Bruce      | 12000  | 0.1            | 1200           | 1200                     |
| Nancy      | 9000   | NULL           | 0              | NULL                     |
| John       | 8000   | 0.05           | 400            | 400                      |
| Sundar     | 7000   | NULL           | 0              | NULL                     |
| Alice      | 6000   | 0.2            | 1200           | 1200                     |
