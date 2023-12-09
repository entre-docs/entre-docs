# Comandos para el uso de JOIN y UNION

## Cláusula UNION

Cuando se usa UNION, la clausula SELECT debe tener la misma cantidad de columnas y en el mismo orden (segun tipo de dato).

```sql
SELECT * FROM continent WHERE NAME LIKE '%America%'
UNION
SELECT * FROM continent WHERE code IN (3,5)
ORDER BY name ASC;
```

|code | name		    |
|-----|-----------------|
|3    | Asia            |
|4    | Central America |
|5    | Europe          |
|6    | North America   |
|8    | South America   |


## Unión de tablas usando WHERE

```sql
SELECT a.name AS country,
		b.name AS continent
FROM country a, continent b
WHERE a.continent = b.code
ORDER BY a.name ASC;
```

|country        | continent     |
|---------------|---------------|
|Afghanista     | Asia          |
|Albania        | Europe        |
|Algeria        | Africa        |
|American Samoa | Oceania       |
|Andorra        | Europe        |
|Angola	        | Africa        |
|Anguilla       | North America |
|Antarctica     | Antarctica    |


## INNER JOIN

```sql
SELECT a.name AS country,
		b.name AS continent
FROM country a
INNER JOIN continent b
ON a.continent = b.code
ORDER BY a.name ASC;
```

|country        | continent     |
|---------------|---------------|
|Afghanistan    | Asia          |
|Albania        | Europe        |
|Algeria        | Africa        |
|American Samoa | Oceania       |
|Andorra        | Europe        |
|Angola         | Africa        |
|Anguilla       | North America |
|Antarctica     | Antarctica    |


## FULL OUTER JOIN

Muestra los datos de la tabla A y los datos de la tabla B, aunque no estén.

```sql
SELECT c.name AS country,
        c.continent AS continentCode,
        co.name AS continentName
FROM country c
FULL OUTER JOIN continent co
ON c.continent = co.code
ORDER BY c.name DESC;
```

|country    | continentCode | continentName |
|-----------|---------------|---------------|
|NULL       |   NULL        | North Asia    |
|NULL       |   NULL        | South Asia    |
|NULL       |   NULL        | Central Asia  |
|Zimbabwe   |   1           | Africa        |
|Zambia     |   1           | Africa        |
|Yugoslavia |   5           | Europe        |
|Yemen      |   3           | Asia          |


## RIGHT OUTER JOIN

* Con exclusión, usando la cláusula **WHERE... IS NULL**

```sql
SELECT c.name AS country,
		c.continent AS continentCode,
		co.name AS continentName
FROM country c
RIGHT OUTER JOIN continent co
ON c.continent = co.code
WHERE c.continent IS NULL
ORDER BY c.name DESC;
```

|country	| continentCode	| continentName |
|-----------|---------------|---------------|
|NULL		|	NULL	    | North Asia	|
|NULL		|	NULL	    | South Asia	|
|NULL		|	NULL	    | Central Asia	|