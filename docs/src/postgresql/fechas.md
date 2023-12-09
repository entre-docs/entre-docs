---
outline: deep
---

# Comandos para el uso de fechas, intervalos y funciones sobre fecha

## Funciones básicas

### Fecha exacta

```sql
SELECT NOW();
```

|now                            |
|-------------------------------|
|2023-10-18 17:49:09.597 -0300  |


### Fecha YYYY-MM-DD

```sql
SELECT current_date;
```

|current_date|
|------------|
|2023-10-18  |


### Hora actual

```sql
SELECT current_time;
```

|current_time	|
|---------------|
|17:54:48 -0300 |


### Extraer una parte de alguna fecha u hora

Ejemplo: 07/09/2023 18:15

```sql
SELECT date_part('day', now()) AS "day",
        date_part('month', now()) AS "month",
		date_part('year', now()) AS "year",
		date_part('hour', now()) AS "hour",
		date_part('minutes', now()) AS "minutes";
```

|day|month	| year	|hour	|minutes|
|---|-------|-------|-------|-------|
|07 |09		|2023	|18     |15     |


## Intervalos

### INTERVAL

```sql
SELECT MAX(hire_date) fecha,
		MAX(hire_date) + INTERVAL '1 day' AS suma_dia,
		MAX(hire_date) + INTERVAL '1 month' AS suma_mes,
		MAX(hire_date) + INTERVAL '1 year' AS suma_anio,
		MAX(hire_date) - INTERVAL '1 day' AS resta_dia
FROM employees;
```

|fecha      | suma_dia                | suma_mes                | suma_anio	              | resta_dia   |
|-----------|-------------------------|-------------------------|-------------------------|-------------|
|2000-01-04 | 2000-01-05 00:00:00.000 | 2000-02-04 00:00:00.000 | 2001-01-04 00:00:00.000 | 2000-01-03 00:00:00.000|


### MAKE INTERVAL (generar intervalo)

```sql
SELECT  MAX(hire_date) fecha,
		MAX(hire_date) + INTERVAL '1 years' + INTERVAL '1 day' AS years,
		DATE_PART('year', NOW()),
		MAKE_INTERVAL( YEARS := 23 ),
		max(hire_date) + MAKE_INTERVAL( YEARS := 23 ) AS sumar_23_anios 
FROM employees;
```

|fecha	    | years                     | date_part | make_interval | sumar_23_anios            |
|-----------|---------------------------|-----------|---------------|---------------------------|
|2000-01-04 |2001-01-05 00:00:00.000    | 2023.0    | 23 years      | 2023-01-04 00:00:00.000   |



## Cláusula CASE - THEN

```sql
SELECT first_name,
		last_name,
		hire_date,
		CASE
			WHEN hire_date > NOW() - INTERVAL '1 YEAR' THEN '1 año o menos'
			WHEN hire_date > NOW() - INTERVAL '3 YEAR' THEN '1 a 3 años'
			WHEN hire_date > NOW() - INTERVAL '6 YEAR' THEN '3 a 6 años'
			ELSE 'Más de 6 años'
		END AS años_antiguedad
FROM employees
ORDER BY hire_date DESC;
```

|name       | last_name | hire_date | años_antiguedad   |
|-----------|-----------|-----------|-------------------|
|Charles    |Johnson    |2023-01-04 |1 año o menos      |
|Luis       |Popp       |2022-12-07 |1 año o menos      |
|Karen      |Colmenares |2022-08-10 |1 a 3 años         |
|Kimberely  |Grant      |2022-05-24 |1 a 3 años         |
|Sigal      |Tobias     |2020-07-24 |3 a 6 años         |
|Bruce      |Ernst      |2014-05-21 |Más de 6 años      |