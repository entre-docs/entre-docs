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