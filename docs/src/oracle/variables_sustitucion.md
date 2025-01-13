---
outline: deep
---

# Comandos para el uso de Variables de Sustitución

Los comandos & y && son usados para trabajar con sustituciones de variables en consultas SQL. Esto es útil cuando necesitas interactuar con el usuario o reutilizar variables en entornos como SQL*Plus o herramientas similares.

## Sustitución una sola vez (&)

```sql
SELECT * 
FROM empleados 
WHERE departamento_id = &dep_id;
```

* Al ejecutar esta consulta, Oracle pedirá al usuario que introduzca un valor para dep_id.
* Si la consulta tiene varias referencias a &dep_id, pedirá el valor en cada aparición.


## Sustitución persistente (&&)

```sql
SELECT * 
FROM empleados 
WHERE departamento_id = &&dep_id;
```

* Al ejecutar esta consulta, Oracle pedirá al usuario que introduzca un valor para dep_id solo la primera vez.
* Si la consulta tiene varias referencias a &&dep_id, reutilizará el valor proporcionado en todas las apariciones.


## Undefine

El comando UNDEFINE elimina la variable almacenada en la sesión. De esta forma, si vuelves a ejecutar una consulta que utiliza esa variable, se te pedirá que ingreses un nuevo valor.

```sql
SELECT * 
FROM empleados 
WHERE salario > &salario_minimo; -- Solicita el valor cada vez
```

```sql
SELECT * 
FROM empleados 
WHERE salario > &&salario_minimo; -- Solicita el valor solo la primera vez
```

Si necesitas que salario_minimo vuelva a solicitar un nuevo valor después de haber usado &&, ejecuta lo siguiente:

```sql
UNDEFINE salario_minimo;
```

Esto elimina la variable de la sesión, obligando a que se vuelva a pedir el valor en la próxima ejecución.