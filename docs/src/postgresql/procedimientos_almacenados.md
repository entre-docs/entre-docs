---
outline: deep
---

# Procedimientos Almacenados

Un procedimiento almacenado es un código que se quiere ejecutar de forma secuencial desde el lado de la base de datos.

* Beneficios de los Proc Almacenados:

- Centralizar las inserciones y actualizaciones con funciones o procedimientos almacenados.


## Ejemplo 1

Se creará un procedimiento almacenado para insertar un registro en la tabla COUNTRIES.

```sql
SELECT country_id, country_name, region_name
FROM countries c
INNER JOIN regions r ON c.region_id = r.region_id;
```

|country_id |country_name   |region_name|
|-----------|---------------|-----------|
|AR         |Argentina      |Americas   |
|AU         |Australia      |Asia       |
|BE         |Belgium        |Europe     |
|BR         |Brazil         |Americas   |


* Se crea la función que regresa una tabla (TABLE)

```sql
CREATE OR REPLACE FUNCTION country_region()
	RETURNS TABLE( id CHARACTER(2), "name" VARCHAR(40), region VARCHAR(25) )
	AS $$
	BEGIN
		RETURN QUERY
			SELECT country_id, country_name, region_name
			FROM countries c
			INNER JOIN regions r ON c.region_id = r.region_id;
	END;
	$$ LANGUAGE plpgsql;
```

* Se llama a la función

```sql
SELECT * FROM country_region();
```

|id	|name       |region     |
|---|-----------|-----------|
|AR	|Argentina  |Americas   |
|AU	|Australia  |Asia       |
|BE	|Belgium    |Europe     |
|BR	|Brazil     |Americas   |


* Se crea el **PROCEDIMIENTO ALMACENADO** (para insertar el registro)

```sql
CREATE OR REPLACE PROCEDURE insert_region_proc(int, varchar)
AS $$
BEGIN 
	INSERT INTO regions( region_id, region_name )
	VALUES ( $1, $2 );

	RAISE NOTICE 'Variable 1: %, %', $1, $2;-- salida por consola

	-- ROLLBACK;-- para revertir los cambios
	COMMIT;-- para guardar los cambios
END;
$$ LANGUAGE plpgsql;
```

* LLAMAR AL PROCEDIMIENTO (que inserta un dato)

```sql
CALL insert_region_proc(5, 'Central America');
```

* Revisar

```sql
SELECT * FROM regions;
```

|region_id  |region_name            |
|-----------|-----------------------|
|1          |Europe                 |
|2          |Americas               |
|3          |Asia                   |
|4          |Middle East and Africa |
|5          |Central America        |



## Ejemplo 2

Crear un procedimiento almacenado que cree el histórico y que actualice la tabla de empleados.

```sql
CREATE OR REPLACE FUNCTION max_raise( empl_id int )
returns NUMERIC(8,2) as $$

DECLARE
	possible_raise NUMERIC(8,2);

BEGIN
	
	select 
		max_salary - salary into possible_raise
	from employees
	INNER JOIN jobs on jobs.job_id = employees.job_id
	WHERE employee_id = empl_id;

	if ( possible_raise < 0 ) THEN
		possible_raise = 0;
	end if;

	return possible_raise;

END;
$$ LANGUAGE plpgsql;
```

* Trabajadores con máximo salario

```sql
SELECT current_date AS "date",
		employee_id,
		salary,
		max_raise(employee_id) * 0.05 AS "amount",
		5 AS "percentage"
FROM employees;
```

|date       |employee_id|salary     |amount     |percentage |
|-----------|-----------|-----------|-----------|-----------|
|2023-12-04 |100        |27227.24   |638.6380   |	5       |
|2023-12-04 |101        |19622.13   |518.8935   |	5       |
|2023-12-04 |102        |19622.13   |518.8935   |	5       |


* Se agrega a la nueva tabla (raise_history) con los históricos de los aumentos.

```sql
-- Crear el procedimiento
CREATE OR REPLACE PROCEDURE controlled_raise (percentage NUMERIC) AS
$$
DECLARE
	real_percentage NUMERIC(8,2);
	total_employees INT;

BEGIN
	real_percentage = percentage/100; -- 5% = 0.05
	
	-- Mantener el historico
	INSERT INTO raise_history(date, employee_id, base_salary, amount, percentage)
		SELECT current_date AS "date",
				employee_id,
				salary,
				max_raise(employee_id) * real_percentage AS "amount",
				percentage
		FROM employees;
	
	
	-- Actualizar la tabla Employees
	UPDATE employees
	SET salary = (max_raise(employee_id) * real_percentage) + salary;
		
	COMMIT; -- para impactar los datos
	
	SELECT COUNT(*) INTO total_employees
	FROM employees;
	
	RAISE NOTICE 'Afectados % empleados', total_employees;
END;
$$ LANGUAGE plpgsql;
```

```sql
-- Llamar el procedimiento
CALL controlled_raise(5);
```

```sql
-- Revisar
SELECT * FROM raise_history;
```


|id |date       |employee_id|base_salary|amount |percentage |
|---|-----------|-----------|-----------|-------|-----------|
|1  |2023-12-04 |100        |24000.00   |160.00 |1.00       |
|2  |2023-12-04 |101        |17000.00   |130.00 |1.00       |
|3  |2023-12-04 |102        |17000.00   |130.00 |1.00       |
|4  |2023-12-04 |103        |9000.00    |10.00  |1.00       |