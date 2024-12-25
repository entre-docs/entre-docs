---
outline: deep
---

# Comandos para usar Operadores String en Oracle

## Mayúsculas y Minúsculas

```sql
SELECT LOWER(PNOMBRE_EMP), -- minúsculas
       UPPER(APPATERNO_EMP), -- MAYÚSCULAS
       INITCAP(APMATERNO_EMP) -- Primera letra en mayúscula
FROM EMPLEADO;
```

| PNOMBRE_EMP | APPATERNO_EMP | APMATERNO_EMP |
| ----------- | ------------- | ------------- |
| albania     | MUSABELI      | Aguilera      |


## Extraer caracteres

La función SUBSTR se utiliza para extraer una subcadena de un texto, especificando la posición inicial y la longitud deseada.

```sql
SUBSTR(cadena, posición_inicio [, longitud])
```

::: info
* **CADENA**: Es la cadena de texto de la que se extraerá la subcadena.
* **POSICION_INICIO**: La posición inicial (empezando en 1). Puede ser un número negativo para contar desde el final.
* **LONGITUD**: Opcional. La cantidad de caracteres a extraer. Si no se especifica, se toma desde la posición inicial hasta el final.
:::


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


## Extraer fechas

La función EXTRACT se utiliza para obtener una parte específica de una fecha, como el año, el mes o el día.

Dichos valores los retorna de tipo **número entero** (NUMBER).

```sql
EXTRACT(parte FROM fecha)
```

::: info
* **parte**: Puede ser YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, entre otros.
* **fecha**: Es una columna de tipo fecha o un valor de tipo DATE o TIMESTAMP.
:::


Supongamos que tenemos una tabla **orders** con una columna *order_date* de tipo DATE.

Queremos obtener el año y el mes de cada pedido.

```sql
SELECT 
    order_id,
    EXTRACT(YEAR FROM order_date) AS order_year,
    EXTRACT(MONTH FROM order_date) AS order_month
FROM orders;
```

| order_id | order_year | order_month |
| -------- | ---------- | ----------- |
|   1234   |  2024      |   12        |


## Contar el largo

Devuelve el número de caracteres en una cadena.

```sql
SELECT LENGTH('Hola') AS longitud
FROM dual;
```

| longitud  |
| --------- |
|   4       |

```sql
SELECT nombre, LENGTH(nombre) AS longitud
FROM empleados;
```
|nombre   | longitud  |
|---------| --------- |
|albania  |   7       |