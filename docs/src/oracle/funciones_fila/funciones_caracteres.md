---
outline: deep
---

# Funciones para trabajar con Caracteres

Aceptan como argumentos de entrada datos del tipo caracter y retornan datos del tipo caracteres o números.

## Lower

Convierte todas las letras de una cadena en minúsculas.

```sql
SELECT LOWER('ORACLE SQL') AS resultado
FROM DUAL;
```

| resultado        |
|------------------|
| oracle sql       |

## Upper

Convierte todas las letras de una cadena en mayúsculas.

```sql
SELECT UPPER('oracle sql') AS resultado
FROM DUAL;
```

| resultado         |
|-------------------|
| ORACLE SQL        |

## Initcap

Convierte la primera letra de cada palabra en mayúscula y el resto en minúscula.

```sql
SELECT INITCAP('bienvenido a oracle sql') AS resultado
FROM DUAL;
```

| resultado                 |
|---------------------------|
| Bienvenido A Oracle Sql   |


## Substr

Extrae una subcadena de una cadena dada, comenzando desde una posición específica.

::: info Sintaxis
SUBSTR(cadena, inicio, longitud)


* cadena: es la cadena de texto de la que se extraerá la subcadena.
* inicio: posición inicial (1 para el primer carácter).
* longitud: número de caracteres a extraer (opcional).
:::

```sql
SELECT SUBSTR('Oracle SQL', 8, 3) AS resultado
FROM DUAL;
```

| resultado |
|-----------|
| SQL       |



Supongamos que tenemos una tabla **products** con una columna *product_code* que contiene códigos como PROD-12345. 

Queremos extraer el prefijo (PROD) y el número (12345).

```sql
SELECT 
    product_code,
    SUBSTR(product_code, 1, 4) AS prefix,
    SUBSTR(product_code, 6) AS product_number -- Inicia desde la posición 6 hasta el final
FROM products;
```

| product_code | prefix | product_number |
| ----------   | ------ | -------------- |
|  PROD-12345  | PROD   |       12345    |



## Length

Devuelve la longitud de una cadena (número de caracteres).

```sql
SELECT LENGTH('Oracle SQL') AS resultado FROM DUAL;
```

| resultado |
|-----------|
| 10        |


## Concat

Une dos cadenas en una sola.

* Sintaxis: **CONCAT(cadena1, cadena2)**

```sql
SELECT CONCAT('Oracle', ' SQL') AS resultado
FROM DUAL;
```

| resultado     |
|---------------|
| Oracle SQL    |


```sql
SELECT  RUT_EMP AS RUT_EMPLEADO,
        CONCAT(NOMBRE_EMP, ' ', APPATERNO_EMP) AS NOMBRE_COMPLETO
FROM EMPLEADO;
```
| RUT_EMPLEADO  | NOMBRE_COMPLETO   | 
| ------------- | ----------------- |
| 12345678-9    | ALBANIA MUSABELI  |


### Uso de pipes

```sql
SELECT  RUT_EMP AS RUT_EMPLEADO,
        NOMBRE_EMP ||' '|| APPATERNO_EMP AS NOMBRE_COMPLETO
FROM EMPLEADO;
```
| RUT_EMPLEADO  | NOMBRE_COMPLETO     | 
| ------------- | ------------------- |
| 12345678-9    | WILLIAMS CABALLERO  |



## Trim

Elimina caracteres no deseados (por defecto, espacios) desde el inicio y/o final de una cadena.


```sql
SELECT TRIM('O' FROM 'Oracle') AS resultado
FROM DUAL;
```

| resultado |
|-----------|
| racle     |


## RTRIM/ LTRIM

* RTRIM: Elimina caracteres desde el final de la cadena.
* LTRIM: Elimina caracteres desde el inicio de la cadena.

```sql
SELECT RTRIM('Oracle   ') AS resultado_rtrim,
       LTRIM('   Oracle') AS resultado_ltrim
FROM DUAL;
-- Resultado: "Oracle" (RTRIM), "Oracle" (LTRIM)
```

| resultado_rtrim | resultado_ltrim |
|-----------------|-----------------|
| Oracle          | Oracle          |


## Replace

Reemplaza todas las apariciones de un texto específico dentro de una cadena.

* Sintaxis: **REPLACE(cadena, buscar, reemplazar)**


```sql
SELECT REPLACE('Bienvenido a Oracle', 'Oracle', 'SQL') AS resultado
FROM DUAL;
```

| resultado         |
|-------------------|
| Bienvenido a SQL  |



## LPAD/ RPAD

* LPAD: Rellena una cadena por la izquierda con un carácter específico el largo que se le indica.
* RPAD: Rellena una cadena por la derecha con un carácter específico el largo que se le indica.

```sql
-- La palabra 'Oracle' tiene 6 caracteres (debe completar 10)
SELECT LPAD('Oracle', 10, '*') AS resultado_lpad,
       RPAD('Oracle', 10, '-') AS resultado_rpad
FROM DUAL;
```

| resultado_lpad  | resultado_rpad  |
|-----------------|-----------------|
| ****Oracle      | Oracle----      |


## Instr

Devuelve la posición de la primera ocurrencia de un texto dentro de una cadena.
Sintaxis: INSTR(cadena, subcadena, inicio, ocurrencia)

* inicio (opcional): posición inicial para buscar (por defecto 1).
* ocurrencia (opcional): número de ocurrencia de la subcadena.

```sql
SELECT INSTR('Oracle SQL', 'SQL') AS resultad
FROM DUAL;
-- Resultado: 8 (posición donde comienza "SQL")
```

| resultado |
|-----------|
| 8         |