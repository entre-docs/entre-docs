# Comandos para crear tabla, seleccionar, actualizar y eliminar registros

## Crear tabla

```sql
CREATE TABLE USERS(
	NAME VARCHAR(10) UNIQUE
);
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
| Virginia      |
| Esteban       |
| Antonio       |



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


## Ordenar los registros

```sql
SELECT * FROM USERS ORDER BY id DESC;
SELECT * FROM USERS ORDER BY id ASC;
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


## Actualizar un registro

:::tip IMPORTANTE
**NUNCA** olvidar agregar el WHERE
:::

```sql
UPDATE USERS SET NAME = 'Pepito' WHERE ID = 1;
```


## Borrar un registro

:::tip IMPORTANTE
**NUNCA** olvidar agregar el WHERE
:::

```sql
DELETE FROM USERS WHERE ID = 15;
```


## Borrar mediante subconsulta

```sql
DELETE FROM USERS
WHERE ID = (SELECT MAX(ID) FROM USERS);
```


## Borrar usando LIKE

```sql
DELETE FROM USERS WHERE NAME LIKE 'Ant%';   
```


## Eliminar los registros de una tabla

:::tip IMPORTANTE
Este comando elimina **TODOS** los registros de la tabla.
:::

```sql
TRUNCATE TABLE USERS;
```


## Eliminar una tabla

```sql
DROP TABLE USERS;
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