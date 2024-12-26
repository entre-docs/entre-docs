---
outline: deep
---

# Comandos para el uso de Constraints en Oracle

## Constraint Primary Key

### Constraint Nivel Columna

La clave primaria se define directamente al lado de la declaración de la columna.

Se usa cuando la clave primaria consiste en una sola columna.

```sql
CREATE TABLE empleado(
    id_empleado NUMBER(6) CONSTRAINT PK_EMPLEADO PRIMARY KEY,
    pnombre VARCHAR(20),
    appaterno VARCHAR(20),
    apmaterno VARCHAR(20)
    );
```

### Constraint Nivel Tabla

La clave primaria se define como una restricción independiente al final de la declaración de las columnas, dentro de la cláusula CONSTRAINT.

Se usa cuando:

* La PK abarca más de una columna (clave primaria compuesta).
* Deseas dar un nombre explícito a la restricción.
* Quieres separar claramente las restricciones de las definiciones de las columnas.


```sql
CREATE TABLE COMISION_MES(
    rut_vendedor NUMBER(8),
    nro_boleta NUMBER(8),
    comision_venta NUMBER(8),
    CONSTRAINT PK_COMISION_MES PRIMARY KEY(rut_vendedor, nro_boleta)
    );
```