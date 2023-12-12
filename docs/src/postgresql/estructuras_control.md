---
outline: deep
---

# Estructuras de control

## IF, THEN, ELSE, END IF


* Se trabaja sobre la tabla **EMPLOYEES**

```sql
SELECT employee_id,
		first_name,
		salary,
		max_salary,
		max_salary - salary AS possible_raise,
		max_raise(employee_id),
		max_raise2(employee_id)
FROM employees
INNER JOIN jobs ON jobs.job_id = employees.job_id;
```

* Actualizamos la función agregando la condición IF

```sql{24-25-26-27-28-43-44}
CREATE OR REPLACE FUNCTION max_raise3(empl_id INT)
RETURNS NUMERIC(8,2) AS $$

DECLARE
	
	selected_employee employees%rowtype;
	selected_job jobs%rowtype;
	
	possible_raise numeric(8,2);

-- Paso 1: Obtener toda la fila de tipo selected_employee
BEGIN
	SELECT * FROM employees INTO selected_employee
	WHERE employee_id = empl_id;

	-- Paso 2: Obtener el max salary acorde a su trabajo
	SELECT * FROM jobs INTO selected_job
	WHERE job_id = selected_employee.job_id;
	
	-- Paso 3: Cálculos
	possible_raise = selected_job.max_salary - selected_employee.salary;
	
	-- Se agrega la condicion IF
	IF(possible_raise < 0) THEN/*[!code ++]*/
		RAISE EXCEPTION 'Persona con salario mayor max_salary: id:%, %',/*[!code ++]*/
                        selected_employee.employee_id,/*[!code ++]*/
                        selected_employee.first_name;/*[!code ++]*/
	END IF;/*[!code ++]*/

	RETURN possible_raise;
END;
$$ LANGUAGE plpgsql;

```

* Ejecutamos la función **max_raise3()**

```sql
SELECT employee_id, first_name, salary, max_raise3(employee_id)
FROM employees
WHERE employee_id = 206;
```

* Este es el resutado esperado por consola

```sql
SQL Error [P0001]: ERROR: Persona con salario mayor max_salary: id:206, William /*[!code ++]*/
Where: PL/pgSQL function max_raise3(integer) line 24 at RAISE /*[!code ++]*/

```
