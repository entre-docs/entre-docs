---
outline: deep
---

# Funciones anidadas

Las funciones anidadas en Oracle se refieren al uso de una función SQL dentro de otra. Esto permite realizar transformaciones o cálculos más complejos en una única instrucción.

Oracle evalúa primero las funciones más internas y luego las externas.

Se pueden usar diferentes tipos de funciones, como funciones de conversión, de manejo de cadenas, matemáticas, de agrupación, entre otras.

**TABLE EMPLOYEES**

| last_name  | department_id |
|------------|---------------|
| Taylor     | 10            |
| King       | 20            |
| Adams      | 30            |
| Green      | 40            |
| Peterson   | 50            |
| Brown      | 60            |


```sql
SELECT last_name,
        department_id, 
        UPPER(CONCAT(SUBSTR(last_name, 1, 6), '_chile')) resultado
 FROM employees
WHERE department_id between 10 AND 40;
```

La función **SUBSTR** retorna los primeros seis caracteres del apellido del empleado. La  función **CONCAT** concatena el resultado de la función SUBSTR con el string '_chile'. Finalmente  la función **UPPER** convierte en mayúscula el resultado entregado por la función CONCAT.

| last_name | department_id | resultado     |
|-----------|---------------|---------------|
| Taylor    | 10            | TAYLOR_CHILE  |
| King      | 20            | KING_CHILE    |
| Adams     | 30            | ADAMS_CHILE   |
| Green     | 40            | GREEN_CHILE   |
