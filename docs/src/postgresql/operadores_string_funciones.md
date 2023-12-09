# Comandos para uso de Operadores String

## Poner en mayúsculas

```sql
SELECT UPPER(NAME) FROM USERS;
```

| UPPER(NAME)   |
| ------------- |
| ALBANIA       |
| WILLIAMS      |


## Poner en minúsculas

```sql
SELECT LOWER(NAME) FROM USERS;
```

| LOWER(NAME)   |
| ------------- |
| albania       |
| williams      |


## Contar el largo

```sql
SELECT LENGTH(NAME) FROM USERS;
```

| LENGTH(NAME)  |
| ------------- |
| 7             |


## Concatenar strings

Existen 2 formas de concatenar string: usando la función **CONCAT** o usando pipes **||**

::: tip
No olvidar el espacio para separar las palabras
:::

* Uso de CONCAT

```sql
SELECT CONCAT(NAME, ' ', LASTNAME) FROM USERS;
```

| CONCAT(NAME, ' ', LASTNAME)   |
| ----------------------------- |
| wiliams caballero             |


* Uso de Pipes

```sql
SELECT NAME ||' '|| LASTNAME FROM USERS;
```

<table>
    <thead>
        <tr>
            <th>NAME ||' '|| LASTNAME</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>albania musabeli</td>
        </tr>
    </tbody>
</table>


## Substring y Position

### Substring

Permite separar un string.

SUBSTRING(string, inicio, fin)

```sql
SELECT NAME, SUBSTRING(NAME,0,5) FROM USERS;
```

| NAME          | SUBSTRING(NAME, 0,5)  |
| --------------|---------------------- |
| albania       | alba                  |
| williams      | will                  |


### Position

Permite obtener la posición de  un elemento en la columna.

```sql
SELECT NAME, POSITION('N' IN NAME) FROM USERS;
```

| NAME              | POSITION('N' IN NAME)  |
| ------------------|----------------------- |
| albania musabeli  | 5                      |


* **Ejemplo 1**: Quiero extraer el dominio de una columna

```sql
SELECT EMAIL,
	SUBSTRING(EMAIL, POSITION('@' IN EMAIL) +1 ) AS dominio
FROM users;
```

| email             | dominio       |
| ------------------|---------------|
| albania@gmail.com | gmail.com     |


* **Ejemplo 2**: Separar el nombre ALBANIA MUSABELI cuando encuentre un espacio.


```sql
SELECT NAME,
    SUBSTRING(NAME, 0, POSITION(' ' in NAME)) as nombre_separado
FROM USERS;
```

| NAME              | nombre_separado       |
| ------------------|-----------------------|
| albania@gmail.com | albania               |


## Borrar espacios (TRIM)

* **Ejemplo 1**: Al campo 'ALBANIA MUSABELI', quiero separar el apellido y borrarle el espacio

```sql
SELECT NAME,
    TRIM(SUBSTRING(name, POSITION(' ' in name))) as LASTNAME
FROM USERS;
```

| NAME             | LASTNAME       |
| -----------------|----------------|
| albania musabeli | musabeli       |



* **Ejemplo 2**: Separar el nombre y apellido para llenar los campos first_name y last_name.

```sql
UPDATE USERS
SET first_name = SUBSTRING(name, 0, POSITION(' ' IN name)),
	last_name  = SUBSTRING(name, POSITION(' ' IN name) +1);

SELECT * FROM USERS;
```

| id   |  name           | first_name   |  last_name |
| -----|-----------------|--------------|----------- |
| 1    |  Clyde Frazier  |Clyde         |Frazier     |
| 2    |  Elnora Allison |Elnora        |Allison     |
| 3    |  Lydia Manning  |Lydia         |Manning     |