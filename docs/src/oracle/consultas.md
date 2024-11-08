---
outline: deep
---

# Comandos para realizar consultas a la base de datos en Oracle

## Seleccionar campos

```sql
SELECT NOMBRE_EMP, APPATERNO_EMP, APMATERNO_EMP, FECHA_NAC_EMP
FROM EMPLEADO;
```

| NOMBRE_EMP | APPATERNO_EMP | APMATERNO_EMP | FECHA_NAC_EMP |
| --------   | ------------- | ------------- | ------------- |
| Albania    | Musabeli      | Aguilera      | 07/09/89      |

## Agregar alias

```sql
SELECT NOMBRE_EMP AS NOMBRE,
       APPATERNO_EMP AS "APELLIDO PATERNO",
       APMATERNO_EMP AS APELLIDO_MATERNO,
       FECHA_NAC_EMP AS NACIMIENTO
FROM EMPLEADO;
```

| NOMBRE  | APELLIDO PATERNO | APELLIDO_MATERNO | NACIMIENTO |
| ------- | ---------------- | ---------------- | ---------- |
| Albania | Musabeli         | Aguilera         | 07/09/89   |


## Concatenación

### Uso de CONCAT

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


## Order By

* Ordenar por RUT_PROPIETARIO de forma **ASCENDENTE**

```sql
SELECT NRO_PROPIEDAD,
        RUT_PROPIETARIO,
        DIRECCION_PROPIEDAD,
        VALOR_ARRIENDO
FROM PROPIEDAD
ORDER BY RUT_PROPIETARIO ASC;
```

* Ordenar por APPATERNO de forma **ASCENDENTE**, y por RENTA_LIQUIDA **DESCENDENTE**

```sql
SELECT
    NUMRUT AS "RUT",
    APPATERNO || ' ' || APMATERNO || ' ' || NOMBRE AS "NOMBRE COMPLETO",
    RENTA_LIQUIDA AS "RENTA",
    FONO AS "TELEFONO"
FROM CLIENTE
ORDER BY APPATERNO ASC, RENTA_LIQUIDA DESC;
```