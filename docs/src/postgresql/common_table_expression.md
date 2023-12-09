---
outline: deep
---

# Comandos para crear Common Table Expression (CTE)

Una CTE (cursor) es el resultado de un query al cual se le pueden hacer consultas. Usados para simplificar las consultas.

## Crear CTE

:::tip IMPORTANTE
No se debe dejar espacios entre el CTE y el **SELECT** al final.
:::

```sql
WITH posts_week_2024_1 as(
 SELECT date_trunc('week'::text, posts.created_at) AS weeks,
    sum(claps.counter) AS total_claps,
    count(DISTINCT posts.post_id) AS number_of_posts,
    count(*) AS number_of_claps
   FROM posts
     JOIN claps ON claps.post_id = posts.post_id
  GROUP BY (date_trunc('week'::text, posts.created_at))
  ORDER BY (date_trunc('week'::text, posts.created_at)) DESC
)
SELECT * FROM posts_week_2024_1 WHERE weeks
BETWEEN '2024-01-01' AND '2024-12-31' AND total_claps >= 600;
```


## Crear múltiples CTE

Se pueden crear varias tablas en memoria para simplificar las consultas.
Es otra opción a usar *JOIN*.


**Ejemplo:**

* Consulta 1: Mostrar el total de claps.

```sql
SELECT post_id, SUM(counter)
FROM claps
GROUP BY post_id;
```

* Consulta 2: Seleccionar todos los post sólo del año 2023.

```sql
SELECT *
FROM posts
WHERE created_at BETWEEN '2023-01-01' AND '2023-12-31';
```

* Ahora se puede juntar esas 2 consultas usando Common Table Expression (CTE).

```sql
WITH claps_per_post AS (
	SELECT post_id, SUM(counter) FROM claps
	GROUP BY post_id
), posts_from_2023 AS (
	SELECT *
	FROM posts
	WHERE created_at BETWEEN '2023-01-01' AND '2023-12-31'
)
SELECT * FROM claps_per_post
	WHERE claps_per_post.post_id IN ( SELECT post_id FROM posts_from_2023 )
```

Se utilizó el segundo CTE como **SUBCONSULTA**.

* Resultado:

|post_id    |sum    |
|-----------|-------|
|951        |234    |
|70         |115    |
|946        |326    |
|576        |141    |
|1045       |22     |


## CTE recursivos

Los CTE recursivos son muy útiles cuando se tiene una estructura jerárquica.

En el ejemplo de cuenta regresiva, los datos son:

* nombre de tabla en memoria: **countdown** (nombre inventado)
* campos que vamos a tener: **valor**
* **valor** representa a los campos que se tendrá en el query (**SELECT**)

```sql
WITH RECURSIVE countdown(valor) AS (
	-- valores iniciales
	SELECT 5 AS valor
	UNION
	-- query recursivo
	SELECT valor - 1 FROM countdown WHERE valor > 1
	)
-- select
	SELECT * FROM countdown;
```

|valor|
|-----|
|5    |
|4    |
|3    |
|2    |
|1    |


El siguiente es un ejemplo para crear una tabla de multiplicar.

```sql
WITH RECURSIVE multiplication_table(val, multiplicador, resultado) AS (
	-- valor inicial: 1
	SELECT 1 AS val, 5 AS multiplicador, 5*1 AS resultado
	UNION
	SELECT val + 1 , multiplicador, (val+1)*multiplicador FROM multiplication_table WHERE val < 10
)
SELECT * FROM multiplication_table;
```

|val  |multiplicador  |resultado  |
|-----|---------------|-----------|
|1    |5              |5          |
|2    |5              |10         |
|3    |5              |15         |
|4    |5              |20         |
|5    |5              |25         |
|6    |5              |30         |
|7    |5              |35         |
|8    |5              |40         |
|9    |5              |45         |
|10   |5              |50         |


## CTE Recursivo - Estructura Organizacional

El ejemplo es el siguiente:
 
El jefe tiene a cargo unos trabajadores y, a su vez, éstos tienen trabajadores a cargo.
Al mostrar al Gerente, aparecen sus trabajadores y deben mostrar los trabajadores que tienen a su cargo (jerarquía).

<p align="center">
  <img src="/cte_recurs_ejem_organig.jpg" width="800" alt="organigrama"/>
</p>

```sql
SELECT * FROM employees;

-- Mostrar el jefe y los trabajadores a su cargo (según el id del WHERE)
WITH RECURSIVE BOSSES AS (
	--INIT
	SELECT id, "name", reports_to FROM employees WHERE id = 7
	UNION
	--RECURSIVE
	SELECT e.id, e."name", e.reports_to FROM employees e
	INNER JOIN bosses ON bosses.id = e.reports_to
)
-- SELECT de los campos que quiero
SELECT * FROM bosses;
```

|id|name                  |reports_to	|
|--|----------------------|-----------|
|7 | SubGerente Ramiro    | 5         |
|8 | Programador Fernando | 7         |
|9 | Programador Eduardo  | 7         |
|11| Jr Mariano           | 8         |


## Estructura Organizacional con límite

Se requiere ver cuántos **niveles de recursividad** necesito. Para eso, se debe agregar una nueva columna con el valor: **1 AS DEPTH**

Para este caso, sólo se requiere al **subgerente y trabajadores a cargo**, no a todos los trabajadores.

<p align="center">
  <img src="/cte_recurs_ejem_organig_2.png" width="800" alt="organigrama2"/>
</p>


```sql
WITH RECURSIVE BOSSES AS (
	--INIT
	SELECT id, "name", reports_to, 1 AS depth FROM employees WHERE id = 7
	UNION
	--RECURSIVE (debe tener la misma cantidad de columnas)
	SELECT e.id, e."name", e.reports_to, depth + 1 FROM employees e
	INNER JOIN bosses ON bosses.id = e.reports_to
	WHERE DEPTH < 3
)
-- SELECT de los campos que quiero
SELECT * FROM bosses;
```

|id|name                  |reports_to |depth|
|--|----------------------|-----------|-----|
|7 |SubGerente Ramiro     |5          |1    |
|8 |Programador Fernando  |7          |2    |
|9 |Programador Eduardo   |7          |2    |
|11|Jr Mariano            |8          |3    |


Ejemplo: Mostrar el nombre de a quien reporta el trabajador

```sql
WITH RECURSIVE BOSSES AS (
	--INIT
	SELECT id, "name", reports_to, 1 AS DEPTH FROM employees WHERE id = 1
	UNION
	--RECURSIVE
	SELECT e.id, e."name", e.reports_to, depth + 1 FROM employees e
		INNER JOIN bosses ON bosses.id = e.reports_to
		WHERE DEPTH < 10
)
SELECT bosses.*, e."name" AS reports_to_name FROM bosses
LEFT JOIN employees e ON e.id = bosses.reports_to
ORDER BY depth;
```

|id|name                |reports_to |depth |reports_to_name     |
|--|--------------------|-----------|------|--------------------|
|1 |Jefe Carlos         | 1         |NULL  |NULL                |
|3 |Subjefe Juan        | 1         | 2    |Jefe Carlos         |
|2 |Subjefe Susana      | 1         | 2    |Jefe Carlos         |
|5 |Gerente Melissa     | 3         | 3    |Subjefe Juan        |
|6 |Gerente Carmen      | 2         | 3    |Subjefe Susana      |
|4 |Gerente Pedro       | 3         | 3    |Subjefe Juan        |
|7 |SubGerente Ramiro   | 5         | 4    |Gerente Melissa     |
|8 |Programador Fernando| 7         | 5    |SubGerente Ramiro   |
|9 |Programador Eduardo | 7         | 5    |SubGerente Ramiro   |
|11|Jr Mariano          | 8         | 6    |Programador Fernando|
