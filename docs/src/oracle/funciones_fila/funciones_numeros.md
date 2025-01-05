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

* Sintaxis: **TRUNC(número, posición)**

* posición: Número de decimales a conservar. Si es negativo, elimina posiciones enteras a la izquierda del punto decimal.

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


## Mod

Devuelve el residuo de una división (operación módulo).

* Sintaxis: **MOD(dividendo, divisor)**

- dividendo: El número que se divide.
- divisor: El número por el cual se divide.


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


| Función | Propósito               | Ejemplo               | Resultado |
|---------|-------------------------|-----------------------|-----------|
| ROUND   | Redondear números       | `ROUND(123.456, 2)`   | 123.46    |
| TRUNC   | Truncar sin redondear   | `TRUNC(123.456, 2)`   | 123.45    |
| MOD     | Residuo de una división | `MOD(10, 3)`          | 1         |
