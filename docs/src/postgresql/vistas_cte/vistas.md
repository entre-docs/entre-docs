---
outline: deep
---

# Comandos para crear vistas y vistas materializadas en PostgreSQL

## Vista

La vista es un alias de un query. Se pueden realizar consultas de esta vista.

### Crear una vista

```sql
CREATE VIEW comments_per_week AS
	SELECT date_trunc('week', p.created_at) AS weeks,
			COUNT(DISTINCT p.post_id) AS total_posts,
			SUM(c.counter) AS total_claps
	FROM posts p
	INNER JOIN claps c ON c.post_id = p.post_id 
	GROUP BY weeks
	ORDER BY weeks DESC;
```

### Consultar la vista

```sql
SELECT * FROM comments_per_week;
```

### Eliminar una vista

```sql
DROP VIEW comments_per_week;
```

## Vista Materializada

La vista materializada no realiza nuevamente la consulta, guarda una copia (pero la data no se actualiza en tiempo real). Toma una foto de como estaban los datos cuando se creó la tabla. La vista **no se actualizará** si luego actualizo la tabla principal.

Al crear una vista materializada, el tamaño de esa vista ocupará espacio en la base de datos.

### Crear una vista materializada

```sql
CREATE MATERIALIZED VIEW comments_per_week_mat AS
	SELECT date_trunc('week', p.created_at) AS weeks,
			SUM(c.counter) AS total_claps,
			COUNT(DISTINCT p.post_id) AS total_posts,
			COUNT(*) AS number_of_claps
	FROM posts p
	INNER JOIN claps c ON c.post_id = p.post_id 
	GROUP BY weeks
	ORDER BY weeks DESC;
```

### Consultar vista materializada

```sql
SELECT * FROM comments_per_week_mat;
```

### Actualizar vista materializada

Se elimina el dato actualizado.

```sql
REFRESH MATERIALIZED VIEW comments_per_week_mat;
```

### Renombrar vista materializada

```sql
ALTER MATERIALIZED VIEW comments_per_week_mat
RENAME TO posts_per_week_mat;
```