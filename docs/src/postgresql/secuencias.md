---
outline: deep
---

# Comandos para crear secuencias

Las secuencias permiten asignar un número de forma correlativa con mayor control.
Podemos obtener el valor actual de la secuencia o el siguiente valor. Ese siguiente valor queda reservado.


## Crear secuencias

:::tip
Por defecto la secuencia comienza en 1.
:::

```sql
CREATE SEQUENCE nombre_secuencia;
```


## Eliminar la secuencia

```sql
DROP SEQUENCE nombre_secuencia;
```


## Obtener el valor de una secuencia

```sql
SELECT CURRVAL('user_sequence'),
		NEXTVAL('user_sequence'),
		CURRVAL('user_sequence');
```

:::tip
* CURRVAL: (current value) es el valor actual de la secuencia.
* NEXTVAL: (next value) es el valor siguiente de la secuencia.
:::


|currval    |nextval    |currval    |
|-----------|-----------|-----------|
|  12       | 13        | 13        |


Ejemplo:

```sql
CREATE TABLE user6 (
    "user_id" INTEGER PRIMARY KEY DEFAULT NEXTVAL('user_sequence'),
    "username" VARCHAR
    );
```


|user_id                                |username   |
|---------------------------------------|-----------|
| 10                                    | Albania   |
| 11                                    | Williams  |
| nextval('user_sequence'::regclass)	| Sofia     |

Al guardar se agregará el valor correspondiente (12).