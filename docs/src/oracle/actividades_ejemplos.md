---
outline: deep
---

# Ejemplos prácticos de Consultas


## Filtrar con Having (Datos NULL)

```sql
SELECT RUN_JEFE AS "RUN JEFE SIN DV",
    COUNT(RUN_EMP) AS "TOTAL EMPLEADOS A SU CARGO",
    TO_CHAR(MAX(SALARIO),'FM9G999G999') AS "SALARIO MAXIMO",
    (COUNT(RUN_EMP))*10||'% del Salario Máximo' AS "PORCENTAJE DE BONIFICACION",
    TO_CHAR(((MAX(SALARIO))*(COUNT(RUN_EMP)*10))/100, 'L999G999') AS "BONIFICACION"
FROM EMPLEADO
GROUP BY RUN_JEFE
HAVING RUN_JEFE IS NOT NULL -- que solo incluya en los resultado los grupos donde run_jefe NO ES NULL
ORDER BY COUNT(RUN_EMP);
```

| RUN JEFE SIN DV  | TOTAL EMPLEADOS A SU CARGO | SALARIO MAXIMO | PORCENTAJE DE BONIFICACION | BONIFICACION |
|------------------|----------------------------|----------------|----------------------------|--------------|
| 12345678         | 5                          | 2,500,000      | 50% del Salario Máximo     | $1,250,000   |
| 19765432         | 3                          | 1,800,000      | 30% del Salario Máximo     | $540,000     |
| 15678901         | 2                          | 2,200,000      | 20% del Salario Máximo     | $440,000     |
| 18901234         | 1                          | 1,500,000      | 10% del Salario Máximo     | $150,000     |



## Ejemplo uso de CASE

```sql
SELECT EXTRACT(YEAR FROM SYSDATE) AS "AÑO TRIBUTARIO",
    NUMRUN_EMP||'-'||DVRUN_EMP AS "RUN EMPLEADO",
    PNOMBRE_EMP||' '||SNOMBRE_EMP||' '||APPATERNO_EMP||' '||APMATERNO_EMP AS "NOMBRE EMPLEADO",
    CASE
    -- Si el contrato fue antes de este año
    WHEN EXTRACT(YEAR FROM FECHA_CONTRATO) < EXTRACT(YEAR FROM SYSDATE) THEN 
        EXTRACT(MONTH FROM SYSDATE) -- Mes actual del año actual
    -- Si el contrato fue en este año
    WHEN EXTRACT(YEAR FROM FECHA_CONTRATO) = EXTRACT(YEAR FROM SYSDATE) THEN
        EXTRACT(MONTH FROM SYSDATE) - EXTRACT(MONTH FROM FECHA_CONTRATO) + 1
    ELSE 0
    END AS "MESES TRABAJADOS EN EL AÑO",
        TRUNC(MONTHS_BETWEEN(SYSDATE, FECHA_CONTRATO)/12) AS "AÑOS TRABAJADOS"
FROM EMPLEADO
ORDER BY "RUN EMPLEADO";
```

* Notas:

**MESES TRABAJADOS EN EL AÑO:**

* Juan lleva más de un año trabajando, por lo que toma el mes actual (enero = 1).
* Ana comenzó en febrero de 2023, por lo que ha trabajado todos los meses de 2024 más enero de 2025.

**AÑOS TRABAJADOS:**

* Juan comenzó en mayo de 2020, así que ha trabajado 4 años completos (2020, 2021, 2022, y 2023).
* Ana comenzó en febrero de 2023, así que ha trabajado 1 año completo hasta ahora.


| AÑO TRIBUTARIO | RUN EMPLEADO  | NOMBRE EMPLEADO       | MESES TRABAJADOS EN EL AÑO | AÑOS TRABAJADOS  |
|----------------|---------------|-----------------------|----------------------------|------------------|
| 2025           | 12345678-K    | Juan Pablo Pérez Gómez| 1                          | 4                |
| 2025           | 7654321-9     | Ana María López Díaz  | 12                         | 1                |


## Cumpleaños el próximo mes

```sql
SELECT TO_CHAR(NUMRUN, '99G999G999') ||'-'||DVRUN AS "RUN CLIENTE",
        INITCAP(PNOMBRE||' '||SNOMBRE||' '||APPATERNO||' '||APMATERNO) AS "NOMBRE CLIENTE",
        NOMBRE_PROF_OFIC AS "PROFESION/OFICIO",
        EXTRACT(DAY FROM FECHA_NACIMIENTO)||' de '|| INITCAP(TO_CHAR(FECHA_NACIMIENTO, 'MONTH')) AS "DIA DE CUMPLEAÑOS"
FROM CLIENTE C
JOIN PROFESION_OFICIO PO
ON C.COD_PROF_OFIC = PO.COD_PROF_OFIC
WHERE EXTRACT(MONTH FROM FECHA_NACIMIENTO) = EXTRACT(MONTH FROM SYSDATE)+1
ORDER BY EXTRACT(DAY FROM FECHA_NACIMIENTO)||' de '|| INITCAP(TO_CHAR(FECHA_NACIMIENTO, 'MONTH')) ASC, APPATERNO ASC;
```

**Importante**:

En su resultado, el valor de la columna **DIA DE CUMPLEAÑOS** será diferente ya que depende del mes en que se ejecute la sentencia. En este caso, se ejecutó en *enero* por eso muestra la información correspondiente al mes de *febrero*.


| RUN CLIENTE      | NOMBRE CLIENTE         | PROFESION/OFICIO  | DIA DE CUMPLEAÑOS     |
|------------------|------------------------|-------------------|-----------------------|
| 12.345.678-9     | Juan Pérez Gómez López | Ingeniero         | 5 de Febrero          |
| 23.456.789-0     | María López Torres     | Arquitecto        | 10 de Febrero         |
| 34.567.890-1     | Pedro Jiménez Vargas   | Médico            | 15 de Febrero         |
| 45.678.901-2     | Ana Martínez Fernández | Profesor          | 20 de Febrero         |


## Ver información por cada mes del año anterior

```sql
SELECT TO_CHAR(CC.FECHA_OTORGA_CRED,'MMYYYY') "MES TRANSACCION",
        CR.NOMBRE_CREDITO "TIPO CREDITO",
        SUM(CC.MONTO_CREDITO) "MONTO SOLICITADO CREDITO",
        ROUND(CASE
        WHEN SUM(CC.MONTO_CREDITO) BETWEEN 100000 AND 1000000 THEN (SUM(CC.MONTO_CREDITO))*0.01
        WHEN SUM(CC.MONTO_CREDITO) BETWEEN 100001 AND 2000000 THEN (SUM(CC.MONTO_CREDITO))*0.02
        WHEN SUM(CC.MONTO_CREDITO) BETWEEN 200001 AND 4000000 THEN (SUM(CC.MONTO_CREDITO))*0.03
        WHEN SUM(CC.MONTO_CREDITO) BETWEEN 400001 AND 6000000 THEN (SUM(CC.MONTO_CREDITO))*0.04
        ELSE (SUM(CC.MONTO_CREDITO))*0.07
        END) "APORTE A LA SBIF"
FROM CREDITO_CLIENTE CC
JOIN CREDITO CR
ON(CC.COD_CREDITO = CR.COD_CREDITO)
WHERE EXTRACT(YEAR FROM CC.FECHA_OTORGA_CRED) = EXTRACT(YEAR FROM SYSDATE)-1
GROUP BY TO_CHAR(CC.FECHA_OTORGA_CRED,'MMYYYY'), CR.NOMBRE_CREDITO
ORDER BY TO_CHAR(CC.FECHA_OTORGA_CRED,'MMYYYY'), CR.NOMBRE_CREDITO;
```

**Importante:**

En su resultado, el año de la columna **MES TRANSACCIÓN** será diferente ya que depende del año en que se ejecute la sentencia. En este caso, se ejecutó el año 2025 por eso muestra la información correspondiente el año 2024.


| MES TRANSACCION | TIPO CREDITO        | MONTO SOLICITADO CREDITO | APORTE A LA SBIF |
|-----------------|---------------------|--------------------------|------------------|
| 092024          | CRÉDITO AUTOMOTRIZ  | 4000000                  | 120000           |
| 102024          | CRÉDITO AUTOMOTRIZ  | 4900000                  | 196000           |
| 122024          | CRÉDITO AUTOMOTRIZ  | 38960000                 | 1990600          |
| 122024          | CRÉDITO DE CONSUMO  | 10592050                 | 185921           |
| 122024          | CRÉDITO HIPOTECARIO | 12550000                 | 768500           |


## Ejercicio

Este informe tiene relación al detalle de los abonos y rescates de los productos de inversión que los clientes han efectuado durante el año.

**INFORMACIÓN REQUERIDA**

- Run del cliente
- Nombre del cliente
- Monto total de los abonos efectuados por el cliente durante el año.
- Monto total de los rescates efectuados por el cliente durante el año.

```sql
SELECT * FROM PRODUCTO_INVERSION_CLIENTE; -- JOIN CON CLIENTE
SELECT * FROM TIPO_MOVIMIENTO;

-- SUM: Calcular el monto total de abonos del cliente en el año anterior.
-- CASE: Filtra los movimientos (abono:1 / rescate:2)
SELECT LPAD(TO_CHAR(CLI.NUMRUN,'FM99G999G999'),10,0)||'-'||CLI.DVRUN "RUN CLIENTE",
    INITCAP(CLI.PNOMBRE||' '||CLI.SNOMBRE||' '||CLI.APPATERNO||' '||CLI.APMATERNO) "NOMBRE CLIENTE",
    NVL(TO_CHAR(SUM(
    CASE MOV.COD_TIPO_MOV
    WHEN 1 THEN MOV.MONTO_MOVIMIENTO
    END),'FM$999G999'),'No realizó') ABONO,
        
    NVL(TO_CHAR(SUM(
    CASE MOV.COD_TIPO_MOV
    WHEN 2 THEN MOV.MONTO_MOVIMIENTO
    END
    ),'FM$999G999'),'No realizó') RESCATE
FROM CLIENTE CLI
JOIN PRODUCTO_INVERSION_CLIENTE PIC
ON CLI.NRO_CLIENTE = PIC.NRO_CLIENTE

JOIN MOVIMIENTO MOV
ON PIC.NRO_SOLIC_PROD = MOV.NRO_SOLIC_PROD
WHERE EXTRACT (YEAR FROM MOV.FECHA_MOVIMIENTO) = EXTRACT(YEAR FROM SYSDATE)-1
GROUP BY LPAD(TO_CHAR(CLI.NUMRUN,'FM99G999G999'),10,0)||'-'||CLI.DVRUN,
    INITCAP(CLI.PNOMBRE||' '||CLI.SNOMBRE||' '||CLI.APPATERNO||' '||CLI.APMATERNO),
    CLI.APPATERNO
ORDER BY CLI.APPATERNO;
```


| RUN CLIENTE   | NOMBRE CLIENTE         | ABONO        | RESCATE       |
|---------------|------------------------|--------------|---------------|
| 06.175.302-8  | Juan Pérez Gómez López | $21.000      | No realizó    |
| 12.345.678-9  | María Torres Hidalgo   | $30.000      | No realizó    |
| 23.456.789-0  | Pedro Jiménez Vargas   | $370.000     | $370.000      |
| 14.567.890-1  | Ana Martínez Fernández | No realizó   | $40.000       |
| 15.678.901-2  | Luis Gómez Rivera      | $125.000     | $125.000      |

