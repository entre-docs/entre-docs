# Comandos para la creación de tablas en Oracle

## Crear tabla

```bash
CREATE TABLE mi_tabla(
    atributo_1 NUMBER(2),
    atributo_2 VARCHAR2(14),
    atributo_3 VARCHAR2(13),
    atributo_4 DATE DEFAULT SYSDATE
    );
```

## Constraint Primary Key

### Constraint Nivel Columna

```bash
CREATE TABLE mi_tabla(
    id_tabla NUMBER(6) CONSTRAINT PK_mi_tabla_PRIMARY_KEY,
    atributo_1 VARCHAR2(20),
    atributo_2 VARCHAR2(25),
    atributo_3 DATE DEFAULT SYSDATE
    );
```

### Constraint Nivel Tabla

```bash
CREATE TABLE mi_tabla(
    id_tabla NUMBER(6),
    atributo_1 VARCHAR2(20),
    atributo_2 VARCHAR2(25),
    atributo_3 DATE DEFAULT SYSDATE,
    CONSTRAINT PK_mi_tabla_PRIMARY_KEY(id_tabla)
    );
```

::: tip
Cuando la PK tiene más de un atributo, se usa Constraint a Nivel Tabla
:::

```bash
CREATE TABLE COMISION_MES(
    rut_vendedor NUMBER(8),
    nro_boleta NUMBER(8),
    comision_venta NUMBER(8),
    CONSTRAINT PK_COMISION_MES_PRIMARY_KEY(rut_vendedor, nro_boleta)
    );
```

## Not Null

::: tip
Not Null: el campo es requerido obligatoriamente
:::

```bash
CREATE TABLE mi_tabla(
    atributo_1 NUMBER(2),
    atributo_2 VARCHAR2(14),
    atributo_3 VARCHAR2(13),
    atributo_4 DATE NOT NULL
    );
```

## Constraint Foreign Key

### Constraint Nivel Columna

```bash
CREATE TABLE tabla_1(
    id_tabla_1 NUMBER(6),
    atributo_a VARCHAR2(20),
    atributo_b VARCHAR2(25) NOT NULL,
    id_tabla_2 NUMER(5) CONSTRAINT FK_tabla_1 REFERENCES tabla_2(id_tabla_2)
    );
```

* Un ejemplo:

```bash
CREATE TABLE empleado(
    id_empleado NUMBER(6),
    primer_nombre VARCHAR2(20),
    apellido VARCHAR2(25) NOT NULL,
    id_departamento NUMBER(4) CONSTRAINT FK_EMPLEADO_DEPTO REFERENCES departamento(id_departamento);
)
```

### Constraint Nivel Tabla

```bash
CREATE TABLE tabla_1(
    id_tabla_1 NUMBER(6),
    atributo_a VARCHAR2(20),
    atributo_b VARCHAR2(25) NOT NULL,
    id_tabla_2 NUMER(5)
    CONSTRAINT FK_tabla_1_tabla_2 FOREING KEY(id_tabla_2) REFERENCES tabla_2(id_tabla_2);
    );
```

## Constraint Primary Foreign Key

:::tip TIP
Con una key Primaria Foránea, se debe especificar en las CONSTRAINT, que dicha key es primary, luego indicar que es foranea haciendo REFERENCIA a la tabla de cual viene.
:::

```bash
CREATE TABLE tabla_1(
    id_tabla_1 NUMBER(6),
    atributo_a VARCHAR2(20),
    id_tabla_2 NUMER(5)
    CONSTRAINT PK_tabla_1 PRIMARY KEY(id_tabla1, id_tabla2),
    CONSTRAINT FK_tabla1_tabla2 FOREIGN KEY(id_tabla_2) REFERENCES tabla_2(id_tabla_2);
    );
```


## Uso de Check

:::tip TIP
Restricción para que los valores cumplan cierta condición
:::

* En el siguiente ejemplo, el atributo 'salario' debe ser mayor a cero.

```bash
CREATE TABLE empleado(
    id_empleado NUMBER(6),
    primer_nombre VARCHAR2(20),
    salario NUMBER(2)
    CONSTRAINT CK_salario CHECK (salario > 0);
    );
```


* En este ejemplo, el atributo 'edad' debe ser mayor a 18.

```bash
CREATE TABLE empleados (
    id NUMBER PRIMARY KEY,
    nombre VARCHAR2(50),
    edad NUMBER,
    CONSTRAINT mayor_de_edad CHECK (edad > 18)
    );
```