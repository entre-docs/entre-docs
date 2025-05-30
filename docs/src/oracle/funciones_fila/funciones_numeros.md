---
outline: deep
---

# Funciones para trabajar con Números

Manipulan números, aceptan un valor numérico como argumento y retornan un valor numérico.


## Round

Redondea un número a un número específico de decimales. Si no se especifica el número de decimales, redondea al entero más cercano.

::: tip
* Sintaxis: **ROUND(número, posición)**
* número: Valor numérico que se desea redondear.
* posición: Número de decimales a conservar. Si es negativo, redondea posiciones enteras a la izquierda del punto decimal.
:::


```sql
-- Redondea 123.456 a 2 decimales
SELECT ROUND(123.456, 2) AS resultado FROM DUAL;  
-- Resultado: 123.46  

-- Redondea 123.456 al entero más cercano
SELECT ROUND(123.456) AS resultado FROM DUAL;  
-- Resultado: 123  

-- Redondea 123.456 a -1 (posición a la izquierda del punto decimal)
SELECT ROUND(123.456, -1) AS resultado FROM DUAL;  
-- Resultado: 120  
```


## Trunc

Trunca un número a un número específico de decimales sin redondearlo.

::: tip
* Sintaxis: **TRUNC(número, posición)**
* posición: Número de decimales a conservar. Si es negativo, elimina posiciones enteras a la izquierda del punto decimal.
:::

```sql
-- Trunca 123.456 a 2 decimales
SELECT TRUNC(123.456, 2) AS resultado FROM DUAL;  
-- Resultado: 123.45  

-- Trunca 123.456 al entero
SELECT TRUNC(123.456) AS resultado FROM DUAL;  
-- Resultado: 123  

-- Trunca 123.456 a -1 (posición a la izquierda del punto decimal)
SELECT TRUNC(123.456, -1) AS resultado FROM DUAL;  
-- Resultado: 120  
```

## Ceil

Devuelve el menor número entero que sea mayor o igual al valor dado.

Es decir, **siempre redondea hacia arriba.**

::: tip
* Sintaxis: **CEIL(número)**
* número: Valor numérico que se desea redondear.
:::

```sql
SELECT CEIL(5.1) AS resultado FROM DUAL;
-- Resultado: 6

SELECT CEIL(5.7) AS resultado FROM DUAL;
-- Resultado: 6
```

Redondear una edad hacia arriba:

```sql
SELECT 
(MONTHS_BETWEEN(LAST_DAY(SYSDATE), '07/09/89') / 12) AS "EDAD",
TRUNC(MONTHS_BETWEEN(LAST_DAY(SYSDATE), '07/09/89') / 12) AS "TRUNC",
CEIL(MONTHS_BETWEEN(LAST_DAY(SYSDATE), '07/09/89') / 12) AS "CEIL",
ROUND(MONTHS_BETWEEN(LAST_DAY(SYSDATE), '07/09/89') / 12) AS "ROUND"
FROM DUAL;
-- sysdate: '08/02/25'
```

| EDAD      | ROUND | TRUNC | CEIL  |
|-----------|-------|-------|-------|
| 35.313452 | 35    | 35    | 36    |



## Mod

Devuelve el residuo de una división (operación módulo).

::: tip
* Sintaxis: **MOD(dividendo, divisor)**

- dividendo: El número que se divide.
- divisor: El número por el cual se divide.
:::

```sql
-- Residuo de 10 dividido entre 3
SELECT MOD(10, 3) AS resultado FROM DUAL;  
-- Resultado: 1  

-- Residuo de 25 dividido entre 7
SELECT MOD(25, 7) AS resultado FROM DUAL;  
-- Resultado: 4  

-- Residuo de un número negativo (-10 dividido entre 3)
SELECT MOD(-10, 3) AS resultado FROM DUAL;  
-- Resultado: -1  
```


## Resumen Comparativo


| Función | Propósito                       | Ejemplo               | Resultado |
|---------|---------------------------------|-----------------------|-----------|
| ROUND   | Redondear números               | `ROUND(123.456, 2)`   | 123.46    |
| TRUNC   | Truncar sin redondear           | `TRUNC(123.456, 2)`   | 123.45    |
| CEIL    | Redondea hacia arriba siempre   | `CEIL(123.456)`       | 124       |
| MOD     | Residuo de una división         | `MOD(10, 3)`          | 1         |
