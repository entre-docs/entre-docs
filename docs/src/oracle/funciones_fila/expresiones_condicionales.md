---
outline: deep
---

# Expresiones Condicionales


## Cláusula CASE

La cláusula CASE permite realizar una comparación de múltiples condiciones y devolver un valor específico dependiendo de si las condiciones se cumplen o no.

### CASE - Búsqueda

Evalúa condiciones booleanas complejas.

```sql
SELECT 
    employee_id,
    first_name,
    salary,
    CASE 
        WHEN salary < 3000 THEN 'Low'
        WHEN salary BETWEEN 3000 AND 6000 THEN 'Medium'
        WHEN salary > 6000 THEN 'High'
        ELSE 'Not Defined'
    END AS salary_category
FROM employees;
```

|employee_id|first_name |salary |salary_category|
|-----------|-----------|-------|---------------|
|101        |John       |2500   |Low            |
|102        |Jane       |5500   |Medium         |
|103        |Alice      |7500   |High           |


### CASE - Simple

Compara una columna con valores específicos.

```sql
SELECT 
    employee_id,
    first_name,
    department_id,
    CASE department_id
        WHEN 10 THEN 'Sales'
        WHEN 20 THEN 'Marketing'
        WHEN 30 THEN 'Finance'
        ELSE 'Unknown'
    END AS department_name
FROM employees;
```

| employee_id | first_name | department_id | department_name |
|-------------|------------|---------------|-----------------|
| 101         | John       | 10            | Sales           |
| 102         | Jane       | 20            | Marketing       |
| 103         | Alice      | 30            | Finance         |



## Cláusula DECODE

La función DECODE es similar al CASE, pero más limitada. Compara un valor con un conjunto de valores y devuelve un resultado específico. Si no hay coincidencia, puede devolver un valor predeterminado.

**EJEMPLO 1**

```sql
SELECT 
    employee_id,
    first_name,
    salary,
    DECODE(
        salary,
        2500, 'Low',
        5500, 'Medium',
        7500, 'High',
        'Not Defined') AS salary_category
FROM employees;
```

| employee_id | first_name | salary | salary_category |
|-------------|------------|--------|-----------------|
| 101         | John       | 2500   | Low             |
| 102         | Jane       | 5500   | Medium          |
| 103         | Alice      | 7500   | High            |
| 104         | Bob        | 3000   | Not Defined     |



**EJEMPLO 2 - DECODE con valor predeterminado**

```sql
SELECT 
    employee_id,
    first_name,
    department_id,
    DECODE(department_id,
            10, 'Sales',
            20, 'Marketing',
            30, 'Finance',
            'Unknown') AS department_name
FROM employees;
```

| employee_id | first_name | department_id | department_name |
|-------------|------------|---------------|-----------------|
| 101         | John       | 10            | Sales           |
| 102         | Jane       | 20            | Marketing       |
| 103         | Alice      | 30            | Finance         |


