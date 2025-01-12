---
outline: deep
---

# Funciones de conversión de datos

## To Char

Convierte un valor a una cadena de caracteres (texto). Es comúnmente utilizada para convertir fechas, números y otros tipos de datos a un formato de texto. También puedes especificar un formato para la conversión, como en el caso de las fechas.

* **Convertir una fecha a texto con un formato específico:**

```sql
SELECT TO_CHAR(SYSDATE, 'DD/MM/YYYY') FROM dual;
```

| TO_CHAR(SYSDATE, 'DD/MM/YYYY')  |
|---------------------------------|
| 12/01/2025                      |


* **Formatear un número:**

```sql
SELECT TO_CHAR(SUELDO_BASE, '$9G999G999') FROM EMPLEADO;
```

| TO_CHAR(SUELDO_BASE, '$9G999G999') |
|------------------------------------|
| $12,345,678                        |


* **Convertir un número a texto:**

```sql
SELECT TO_CHAR(12345.67, '99999.99') FROM dual;
```

| TO_CHAR(12345.67, '99999.99') |
|-------------------------------|
| 12345.67                      |



## To Number

Convierte una expresión de tipo texto o cualquier otro tipo de dato a un número. Es útil cuando se necesita realizar operaciones matemáticas sobre datos que están en formato de texto o en otros tipos que no son numéricos.

* **Convertir texto a número:**

```sql
SELECT TO_NUMBER('12345.67') AS numero FROM dual;
```

| numero    |
|-----------|
| 12345.67  |



* **Convertir una cadena de texto con formato específico a número:**

```sql
SELECT TO_NUMBER('12,345.67', '99999.99') AS numero FROM dual;
```

| numero    |
|-----------|
| 12345.67  |


* **Conversión de texto a número para operaciones aritméticas:**

```sql
SELECT TO_NUMBER('100') + 50 AS resultado FROM dual;
```

| resultado |
|-----------|
| 150       |


* **Conversión de fechas a números:**

```sql
SELECT TO_NUMBER(TO_CHAR(SYSDATE, 'YYYYMMDD')) AS fecha_numerica FROM dual;
```

| fecha_numerica |
|----------------|
| 20250112       |


* **Eliminación de caracteres no numéricos:**

```sql
SELECT TO_NUMBER('$12,345.67', '99999.99') AS numero FROM dual;
```

| numero   |
|----------|
| 12345.67 |


## To Date

La función TO_DATE() en Oracle se utiliza para convertir una cadena de texto (string) a un tipo de dato fecha (DATE). Esta función es útil cuando tienes una cadena que representa una fecha y necesitas convertirla a un formato de fecha para realizar operaciones de fecha, comparaciones o consultas basadas en fechas.


* **Convertir una cadena a una fecha en formato 'DD/MM/YYYY':**

```sql
SELECT TO_DATE('12/01/2025', 'DD/MM/YYYY') FROM dual;
```

| TO_DATE('12/01/2025', 'DD/MM/YYYY') |
|--------------------------------------|
| 12-JAN-25                            |


* **Convertir una cadena a una fecha en formato 'YYYY-MM-DD':**

```sql
SELECT TO_DATE('2025-01-12', 'YYYY-MM-DD') FROM dual;
```

| TO_DATE('2025-01-12', 'YYYY-MM-DD') |
|-------------------------------------|
| 12-JAN-25                           |


**Resultado**: La fecha '2025-01-12' se convierte en la fecha 12-JAN-25, ya que Oracle utiliza el formato DD-MON-YY por defecto.

* **Convertir una cadena con hora a fecha y hora:**

```sql
SELECT TO_DATE('2025-01-12 15:30', 'YYYY-MM-DD HH24:MI') FROM dual;
```

| TO_DATE('2025-01-12 15:30', 'YYYY-MM-DD HH24:MI') |
|---------------------------------------------------|
| 12-JAN-25 03:30 PM                                |


## EJEMPLO 1

Queremos:

* Mostrar la fecha de la venta en formato DD-MON-YYYY.
* Mostrar el monto de la venta con separadores de miles y 2 decimales, en formato de moneda.

```sql
SELECT 
    TO_CHAR(fecha_venta, 'DD-MON-YYYY') AS fecha_formateada,
    TO_CHAR(monto_venta, '$999,999.99') AS monto_formateado
FROM 
    ventas;
```

| fecha_formateada | monto_formateado |
|------------------|------------------|
| 12-JAN-2025      | $12,345.67       |
| 15-FEB-2025      | $8,900.00        |
| 20-MAR-2025      | $5,500.50        |


## EJEMPLO 2

Queremos:

* Mostrar la fecha de la venta en formato DD-MON-YYYY (día con el mes abreviado en letras y el año completo).
* Mostrar la fecha de la venta en formato DD-MM-YYYY (día, mes y año en formato numérico).

```sql
SELECT 
    TO_CHAR(fecha_venta, 'DD-MON-YYYY') AS fecha_formateada,
    TO_CHAR(fecha_venta, 'DD-MM-YYYY') AS fecha_formateada2
FROM 
    ventas;
```

| fecha_formateada | fecha_formateada2 |
|------------------|-------------------|
| 12-JAN-2025      | 12-01-2025        |
| 15-FEB-2025      | 15-02-2025        |
| 20-MAR-2025      | 20-03-2025        |

