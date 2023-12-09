# Comandos para crear índices

:::tip Importante
* Los índices sirven para realizar consultas de forma más rápida.
* Se recomienda crear indices en columnas altamente consultadas.
:::


## Crear un índice único

```sql
CREATE UNIQUE INDEX "unique_country_name" ON country (
	-- nombre de la columna que será indice
	name);
```

## Crer un índice múltiple

```sql
CREATE INDEX "index_district"
ON city (district);
```