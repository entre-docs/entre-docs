---
outline: deep
---

# Comandos para crear, seleccionar, actualizar y eliminar tablas

## Crear tabla

```sql
CREATE TABLE USERS(
	NAME VARCHAR(10) UNIQUE
);
```

## Actualizar una tabla

:::tip Ejemplo: Agregar el nuevo campo *ESTADO* a la tabla
:::

```sql
ALTER TABLE USERS
ADD ESTADO smallint;
```

:::tip Ejemplo: Establecer una restricción para permitir solo valores 0 ó 1
:::

```sql
ALTER TABLE USERS
ADD CONSTRAINT CHK_ESTADO CHECK (ESTADO IN (0, 1));
```

## Renombrar una tabla

```sql
ALTER TABLE USERS
RENAME TO STUDENTS;
```


## Eliminar una tabla

```sql
DROP TABLE USERS;
```


## Agregar una columna

```sql
ALTER TABLE PRODUCTS
ADD COLUMN description TEXT;
```

## Renombrar una columna

```sql
ALTER TABLE USERS
RENAME COLUMN FONO TO TELEFONO;
```

## Eliminar una columna

```sql
ALTER TABLE PRODUCTS
DROP COLUMN description;
```

Los datos que había en la columna desaparecen. Las constraints de tabla que afectan a la columna también desaparecen. Sin embargo, si la columna está referenciada por una constraint de clave foranea de otra tabla, PostgreSQL no eliminará silenciosamente esa constraint. Puede autorizar la eliminación de todo lo que dependa de la columna añadiendo CASCADE


```sql
ALTER TABLE PRODUCTS
DROP COLUMN description CASCADE;
```