# Comandos para las funciones de grupo

## BETWEEN

```sql
SELECT first_name, last_name, followers
FROM users
WHERE followers BETWEEN 4600 AND 4700
ORDER BY followers ASC;
```

| first_name    | lasst_name    | followers |
|---------------|---------------|-----------|
| Clyde         | Frazier		|    4600	|
| Elnora        | Allison		|    4611	|
| Lydia         | Manning		|    4660	|


## MAX MIN ROUND AVG COUNT

```sql
SELECT COUNT(*) AS total_users,
		MIN(followers) AS min_followers,
		MAX(followers) AS max_followers,
		ROUND(AVG(followers)) AS promedio_followers,
		SUM(followers)/count(*) AS promedio_manual  
FROM users;
```

| total_users  |  min_followers	 |  max_followers  |  promedio_followers   |  promedio_manual  |
|--------------|-----------------|-----------------|-----------------------|-------------------|
|    1032	   |	   4         |      4999       |	    2533           |	    2532       |


## GROUP BY

```sql
SELECT count(*), followers
FROM users
WHERE followers BETWEEN 4500 AND 4999
GROUP BY followers
ORDER BY followers DESC;
```

|count(*)   |  followers	|
|-----------|---------------|
|   5       |       4999    | 
|   2       |       4998    | 
|   1       |       4987    | 


## HAVING

Se quiere obtener los paises cuyo conteo sea mayor a 6. Al ser una función de grupo, se usa **HAVING**

```sql
SELECT COUNT(*) AS total,
        country
FROM users
GROUP BY country
HAVING COUNT(*) > 5
ORDER BY count(*) DESC;
```

|total   |  country	    |
|--------|--------------|
|  9     |   Iceland	|
|  8     |   Nigeria	|
|  8     |   Denmark	|


## DISTINCT

Muestra sólo un valor diferente. Evita las filas duplicadas en el resultado.

```sql
SELECT DISTINCT country
FROM users;
```

|country	|
|-----------|
|Hong Kong	|
|Bangladesh	|
|Chile		|
|Francia	|