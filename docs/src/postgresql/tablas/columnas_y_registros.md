---
outline: deep
---

# Comandos para crear, seleccionar, actualizar y eliminar columnas y registros


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

Los datos que había en la columna desaparecen. Las *constraints* de tabla que afectan a la columna también desaparecen. Sin embargo, si la columna está referenciada por una *constraint* de clave foranea de otra tabla, PostgreSQL no eliminará silenciosamente esa *constraint*. Puede autorizar la eliminación de todo lo que dependa de la columna añadiendo **CASCADE**

```sql
ALTER TABLE PRODUCTS
DROP COLUMN description CASCADE;
```



## Insertar registros

```sql
INSERT INTO USERS (NAME) VALUES ('Verónica');
INSERT INTO USERS (NAME) VALUES ('Felipe');
INSERT INTO USERS (NAME) VALUES ('Esteban');
```

## Seleccionar todos los registros

```sql
SELECT * FROM USERS;
```

| NAME          |
| ------------- |
| Verónica      |
| Felipe        |
| Esteban       |



## Seleccionar usando WHERE

```sql
SELECT * FROM USERS WHERE ID = 2;

SELECT * FROM USERS WHERE NAME = 'Felipe';
```


## Seleccionar usando LIKE

```sql
SELECT * FROM USERS WHERE NAME LIKE 'Virginia %';
SELECT * FROM USERS WHERE NAME LIKE '% Esteban';
SELECT * FROM USERS WHERE NAME LIKE '%a'; -- que termine con la letra a
```

## Seleccionar con LIMIT/OFFSET

:::tip
- **LIMIT**: cuantos elementos quiero mostrar (Ejemplo: 3 elementos)
- **OFFSET**: indica el punto de inicio. Excluye elementos (Ejemplo: excluye los primeros 2 elementos)
:::


```sql
SELECT * FROM USERS LIMIT 3 OFFSET 2;
```

| NAME          |
| ------------- |
| Virginia      |
| Esteban       |
| Antonio       |


## Ordenar los registros

```sql
SELECT * FROM USERS ORDER BY id DESC;
SELECT * FROM USERS ORDER BY id ASC;
```


## Actualizar un registro

:::tip IMPORTANTE
**NUNCA** olvidar agregar el WHERE
:::

```sql
UPDATE USERS SET NAME = 'Pepito' WHERE ID = 1;
```

## Eliminar un registro

:::tip IMPORTANTE
**NUNCA** olvidar agregar el WHERE
:::

```sql
DELETE FROM USERS WHERE ID = 15;
```


## Eliminar mediante subconsulta

```sql
DELETE FROM USERS
WHERE ID = (SELECT MAX(ID) FROM USERS);
```


## Eliminar usando LIKE

```sql
DELETE FROM USERS WHERE NAME LIKE 'Ant%';   
```


## Eliminar todos los registros

:::tip IMPORTANTE
Este comando elimina **TODOS** los registros de la tabla.
:::

```sql
TRUNCATE TABLE USERS;
```