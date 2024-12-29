---
outline: deep
---

# Comandos para el uso de Índices en Oracle

Los índices son estructuras de datos asociadas a las tablas que permiten **acceder más rápidamente a las filas** mediante el uso de claves.

Los índices **mejoran el rendimiento** de las consultas y ayudan a reducir el tiempo de ejecución de operaciones que involucran búsquedas o filtrado de datos.

El uso más común de índices es en sentencias SELECT, WHERE, ORDER BY, GROUP BY, y uniones (JOIN).

## Crear un índice

```sql
CREATE INDEX idx_empleado_nombre
ON empleados (nombre);
```

## Índice único

```sql
CREATE UNIQUE INDEX idx_empleado_email
ON empleados (email);
```

## Índice basado en funciones

```sql
CREATE INDEX idx_upper_nombre
ON empleados (UPPER(nombre));
```