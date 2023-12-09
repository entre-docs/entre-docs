---
outline: deep
---

# Pasos para crear funciones únicas de PostgreSQL

:::tip
* **json_agg()**: es una función de agregación que devuelve una matriz JSON que contiene todos los valores de un grupo.

* **json_build_object()**: crea un objeto JSON a partir de una lista variada de argumentos. Por convención, la lista de argumentos consta de claves y valores alternados. Los argumentos clave se convierten en texto; los argumentos de valor se convierten a json
:::


## Paso 1: seleccionar los datos

Seleccionar los datos que se necesitan.

```sql
SELECT * FROM "comments" c
WHERE c.comment_parent_id = 1;
```

|comment_id | post_id   | user_id   |
|-----------|-----------|-----------|
|3058       |583        |1797       |
|4649       |51         |1842       |
|4768       |835        |1447       |


## Paso 2: Juntar los id's

Juntar los id's en un arreglo, usando la función **json_agg**.

```sql
SELECT json_agg(comment_id)
FROM "comments"
WHERE comment_parent_id = 1;
```

|json_agg          |
|------------------|
|[3058, 4649, 4768]|


## Paso 3: Crear un objeto

Crear un objeto (clave:valor) usando **json_build_object()**.

```sql
SELECT json_build_object(
			'user', "comments".user_id,
			'comment', "comments"."content")
FROM "comments"
WHERE comment_parent_id = 1;
```

<table>
    <thead>
        <tr>
            <th>json_build_object</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{"user" : 1797, "comment" : "tempor mollit aliqua dolore cupidatat dolor tempor"}</td>
        </tr>
		<tr>
			<td>{"user" : 1842, "comment" : "laborum mollit amet aliqua enim eiusmod ut"}</td>
		</tr>
		<tr>
			<td>{"user" : 1447, "comment" : "nostrud nulla duis enim duis laboris cupidatat"}</td>
		</tr>
    </tbody>
</table>


## Paso 4: La solución al problema

Agregar todo el objeto JSON en una sola linea usando **JSON_AGG()**.

```sql
SELECT json_agg(json_build_object(
			'user', "comments".user_id,
			'comment', "comments"."content"))
FROM "comments"
WHERE comment_parent_id = 1;
```



<table>
	<thead>
		<tr>
			<th>json_agg</th>
		</tr>
	</thead>
	<tbody>
        <tr>
            <td>[{"user" : 1797, "comment" : "tempor mollit aliqua dolore cupidatat dolor tempor"}, {"user" : 1842, "comment" : "laborum mollit amet aliqua enim eiusmod ut"}, {"user" : 1447, "comment" : "nostrud nulla duis enim duis reprehenderit laboris voluptate cupidatat"}]</td>
        </tr>
	</tbody>
</table>