---
outline: deep
---

# Comandos para el uso de Not Null y Check


## Uso de Not Null

::: tip
Not Null: el campo es requerido obligatoriamente
:::

```sql
CREATE TABLE mi_tabla(
    atributo_1 NUMBER(2),
    atributo_2 VARCHAR2(14),
    atributo_3 VARCHAR2(13),
    atributo_4 DATE NOT NULL
    );
```


## Uso de Check

:::tip TIP
Restricción para que los valores cumplan cierta condición
:::

* En el siguiente ejemplo, el atributo 'salario' debe ser mayor a cero.

```sql
CREATE TABLE empleado(
    id_empleado NUMBER(6),
    primer_nombre VARCHAR2(20),
    salario NUMBER(2)
    CONSTRAINT CK_salario CHECK (salario > 0);
    );
```


* En este ejemplo, el atributo 'edad' debe ser mayor a 18.

```sql
CREATE TABLE empleados (
    id NUMBER PRIMARY KEY,
    nombre VARCHAR2(50),
    edad NUMBER,
    CONSTRAINT mayor_de_edad CHECK (edad > 18)
    );
```