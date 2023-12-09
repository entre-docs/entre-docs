---
outline: deep
---

# Comandos para crear funciones personalizadas en PostgreSQL

## Crear función con retorno

```sql
CREATE OR REPLACE FUNCTION sayHello()
RETURNS varchar
AS
$$
BEGIN
	RETURN 'Hola Mundo';
END;
$$
LANGUAGE plpgsql;
```


## Llamar a la función

```sql
SELECT sayHello();
```

|sayhello   |
|-----------|
|Hola Mundo |


```sql
SELECT sayHello(), users.name
FROM users;
```

|sayhello   | name              |
|-----------|-------------------|
|Hola Mundo | Helga Mayo        |
|Hola Mundo | Carmela Mitchell  |
|Hola Mundo | Huffman Estrada   |
|Hola Mundo | Adrienne Barry    |


## Crear función con parámetro

```sql
CREATE OR REPLACE FUNCTION sayHello2( user_name VARCHAR )
RETURNS varchar
AS
$$
BEGIN
	RETURN 'Hola ' || user_name;
END;
$$
LANGUAGE plpgsql;
```

* Llamar a la función

```sql
SELECT sayHello2(users."name"),
		users."name"
FROM users;
```

|sayhello2              | name              |
|-----------------------|-------------------|
|Hola Helga Mayo        | Helga Mayo        |
|Hola Carmela Mitchell  | Carmela Mitchell  |
|Hola Huffman Estrada   | Huffman Estrada   |
|Hola Adrienne Barry    | Adrienne Barry    |