---
outline: deep
---

# Funciones para trabajar con Fechas

* La base de datos almacena la fecha en un formato interno: siglo, año, mes, dia, horas, minutos y segundos
* Por defecto las fechas se visualizan: dia, las primeras 3 letras del mes y el año en 2 dígitos
* Las fechas se almacenas **como números**, por lo tanto, se pueden realizar cálculos usando operadores aritméticos
* Cuando se consulta por una fecha en particular debe ir entre **comillas simples**

::: tip
Todas las funciones de fechas retornan un tipo de dato fecha excepto la función **MONTHS_BETWEEN** que retorna un valor numérico.
:::

## SYSDATE

Devuelve la fecha y hora actuales del sistema de la base de datos.

```sql
SELECT SYSDATE AS fecha_sistema
FROM dual;
```

|fecha_sistema          |
|-----------------------|
|05-JAN-2025 14:30:00   |


## EXTRACT

Extrae una parte específica de una fecha (año, mes, día, hora, etc.).

Dichos valores los retorna de tipo **número entero** (NUMBER).

```sql
EXTRACT(parte FROM fecha)
```

::: info
* **parte**: Puede ser YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, entre otros.
* **fecha**: Es una columna de tipo fecha o un valor de tipo DATE o TIMESTAMP.
:::

```sql
SELECT EXTRACT(YEAR FROM SYSDATE) AS current_year FROM dual;
```

|CURRENT_YEAR   |
|---------------|
|2025           |


Supongamos que tenemos una tabla **orders** con una columna *order_date* de tipo DATE. Queremos obtener el año y el mes de cada pedido. Dichos valores los retorna de tipo **número entero** (NUMBER).

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



## ROUND

Redondea una fecha al valor más cercano basado en el formato especificado (día, mes, año, etc.).

```sql
SELECT ROUND(SYSDATE, 'MONTH') AS rounded_date FROM dual;
```

|ROUNDED_DATE   |
|---------------|
|01-JAN-2025    |



## TRUNC

Trunca una fecha a la unidad especificada (día, mes, año, etc.).

```sql
SELECT TRUNC(SYSDATE, 'MONTH') AS truncated_date FROM dual;
```

|TRUNCATED_DATE |
|---------------|
|01-JAN-2025    |



## MONTHS BETWEEN

Devuelve el número de meses entre dos fechas.

```sql
SELECT MONTHS_BETWEEN(TO_DATE('2025-12-31', 'YYYY-MM-DD'), SYSDATE) AS months_diff
FROM dual;
```

|MONTHS_DIFF|
|-----------|
|11.87      |



## ADD MONTHS

Agrega o resta un número especificado de meses a una fecha.

```sql
SELECT ADD_MONTHS(SYSDATE, 3) AS future_date FROM dual;
```

|FUTURE_DATE    |
|---------------|
|05-APR-2025    |



## LAST DAY

Devuelve la última fecha del mes de una fecha dada.

```sql
SELECT LAST_DAY(SYSDATE) AS end_of_month FROM dual;
```

|END_OF_MONTH   |
|---------------|
|31-JAN-2025    |



## NEXT DAY

Devuelve la próxima fecha que corresponde a un día específico de la semana.

```sql
SELECT NEXT_DAY(SYSDATE, 'MONDAY') AS next_monday FROM dual;
```

|NEXT_MONDAY    |
|---------------|
|08-JAN-2025    |


## Calcular Edad

```sql
SELECT NOMBRE, 
       FECHA_NACIMIENTO, 
       TRUNC(MONTHS_BETWEEN(SYSDATE, FECHA_NACIMIENTO)/12) AS EDAD
FROM EMPLEADOS;
```
* SYSDATE = 2025


| NOMBRE       | FECHA_NACIMIENTO | EDAD |
|--------------|------------------|------|
| Juan Pérez   | 1990-03-15       | 34   |
| Ana Gómez    | 2000-06-20       | 24   |
| Carlos Ruiz  | 1985-12-10       | 39   |


## Obtener el mes anterior

Supongamos que tienes una tabla llamada PEDIDOS con las siguientes columnas y datos:

| ID_PEDIDO | FECHA_1     | MONTO  |
|-----------|-------------|--------|
| 1         | 2024-12-15  | 100.50 |
| 2         | 2025-01-02  | 200.00 |
| 3         | 2024-11-20  | 150.75 |
| 4         | 2024-12-25  | 300.00 |

```sql
SELECT ID_PEDIDO, FECHA_1, MONTO
FROM PEDIDOS
WHERE EXTRACT(MONTH FROM FECHA_1) = EXTRACT(MONTH FROM (ADD_MONTHS(SYSDATE, -1)));
```

**Suposiciones**:

- Hoy es 2025-01-05.
- El mes anterior es diciembre (12).


**Resultado**:
La consulta seleccionará los registros con FECHA_1 correspondiente al mes de diciembre (12):

| ID_PEDIDO | FECHA_1     | MONTO  |
|-----------|-------------|--------|
| 1         | 2024-12-15  | 100.50 |
| 4         | 2024-12-25  | 300.00 |
