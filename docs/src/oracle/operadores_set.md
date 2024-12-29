---
outline: deep
---

# Uso de Operadores Set

En Oracle, los operadores de conjuntos (Set Operators) se utilizan para combinar los resultados de dos o más consultas. Los principales operadores son:

1. UNION
2. UNION ALL
3. INTERSECT
4. MINUS


Tenemos la siguiente tabla *employees* de ejemplo:

|first_name	|department_id|
|-----------|-------------|
|John       |10           |
|Alice      |10           |
|Bob        |10           |
|Eve        |10           |
|John       |20           |
|Alice      |20           |
|Charlie    |20           |


## Union

Combina los resultados de dos consultas y elimina las filas duplicadas.

```sql
SELECT first_name FROM employees WHERE department_id = 10
UNION
SELECT first_name FROM employees WHERE department_id = 20;
```

|first_name |
|-----------|
|John       |
|Alice      |
|Bob        |
|Eve        |
|Charlie    |



## Union All

Combina los resultados de dos consultas, incluyendo duplicados.

```sql
SELECT first_name FROM employees WHERE department_id = 10
UNION ALL
SELECT first_name FROM employees WHERE department_id = 20;
```

|first_name |
|-----------|
|John       |
|Alice      |
|Bob        |
|Eve        |
|John       |
|Alice      |
|Charlie    |


## Intersect

Devuelve solo las filas que están presentes en ambas consultas.

El operador INTERSECT devuelve los registros comunes entre ambas consultas, eliminando cualquier duplicado.

```sql
SELECT first_name FROM employees WHERE department_id = 10
INTERSECT
SELECT first_name FROM employees WHERE department_id = 20;
```

|first_name |
|-----------|
|John       |
|Alice      |


## Minus

Devuelve las filas que están en la primera consulta **pero no en la segunda**, eliminando duplicados.

```sql
SELECT first_name FROM employees WHERE department_id = 10
MINUS
SELECT first_name FROM employees WHERE department_id = 20;
```

|first_name |
|-----------|
|Bob        |
|Eve        |
