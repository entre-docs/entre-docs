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



## Actividad: Calcular aumento

* Crear una función para obtener el máximo aumento que puede tener el trabajador.

```sql
CREATE OR REPLACE FUNCTION max_raise(empl_id INT)
RETURNS NUMERIC(8,2) AS $$

DECLARE
	-- Aqui se crean las variables (para guardar lo que retorna la función)
	possible_raise NUMERIC(8,2);

/* El CÁLCULO DEL SELECT muestra el posible aumento que recibiría el empleado.
El resultado de esta consulta debe guardarse en la variable (del DECLARE)
usando INTO */
BEGIN
	SELECT (max_salary - salary) INTO possible_raise
	FROM employees e
	INNER JOIN jobs j ON j.job_id = e.job_id
	WHERE employee_id = empl_id;
	
	RETURN possible_raise;
END;
$$ LANGUAGE plpgsql;

/* Llamar la funcion: muestra cuánto se le puede aumentar
al trabajador con el id del paréntesis */
SELECT max_raise(206);


-- Mostrar el id, nombre y máximo aumento
SELECT employee_id, first_name, max_raise(employee_id)
FROM employees;
```

|employee_id|first_name	|max_raise	|
|-----------|-----------|-----------|
|100		|Steven		|16000.00	|
|101		|Neena		|13000.00	|
|102		|Lex		|13000.00	|
|103		|Alexander	|1000.00	|
|104		|Bruce		|4000.00	|
|105		|David		|5200.00	|
