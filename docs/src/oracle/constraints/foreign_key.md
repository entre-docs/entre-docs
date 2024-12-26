---
outline: deep
---

# Comandos para el uso de Constraints en Oracle

## Constraint Foreign Key

### Constraint Nivel Columna

```sql
CREATE TABLE tabla_1(
    id_tabla_1 NUMBER(6),
    atributo_a VARCHAR2(20),
    atributo_b VARCHAR2(25) NOT NULL,
    id_tabla_2 NUMER(5) CONSTRAINT FK_tabla_1 REFERENCES tabla_2(id_tabla_2)
    );
```

* Un ejemplo:

```sql
CREATE TABLE empleado(
    id_empleado NUMBER(6),
    primer_nombre VARCHAR2(20),
    apellido VARCHAR2(25) NOT NULL,
    id_departamento NUMBER(4) CONSTRAINT FK_EMPLEADO_DEPTO REFERENCES departamento(id_departamento);
)
```

### Constraint Nivel Tabla

```sql
CREATE TABLE tabla_1(
    id_tabla_1 NUMBER(6),
    atributo_a VARCHAR2(20),
    atributo_b VARCHAR2(25) NOT NULL,
    id_tabla_2 NUMER(5)
    CONSTRAINT FK_tabla_1_tabla_2 FOREIGN KEY(id_tabla_2) REFERENCES tabla_2(id_tabla_2);
    );
```
