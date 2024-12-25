---
outline: deep
---

# Uso de Secuencias en Oracle

La secuencia es un objeto de base de datos utilizado para generar valores numéricos únicos de manera secuencial. Las secuencias son particularmente útiles para crear valores únicos como claves primarias en tablas.

Las secuencias no están asociadas a la tabla.

::: info DESCRIPCIÓN
* START WITH: Especifica el primer valor que generará la secuencia.
* INCREMENT BY: Define el intervalo entre los números consecutivos (puede ser positivo o negativo).
* MAXVALUE: Establece el valor máximo que puede alcanzar la secuencia.
* MINVALUE: Especifica el valor mínimo que puede generar.
* CYCLE: Permite que la secuencia se reinicie cuando alcanza el valor máximo o mínimo.
* CACHE: Indica cuántos números deben almacenarse en memoria para mejorar el rendimiento.
* NOCACHE: Desactiva el almacenamiento en memoria.
:::

## Crear una secuencia

```sql
CREATE SEQUENCE secuencia_id
START WITH 1
INCREMENT BY 1
MAXVALUE 1000
CACHE 10
NOCYCLE;
```

::: tip
* NOCYCLE: No permite que la secuencia reinicie automáticamente, lo que garantiza que no se generen valores repetidos. Cuando se alcanza el valor límite, se detiene y genera un error si se solicita un nuevo valor.
:::

### Ejemplo de uso

1. Crear la secuencia

```sql
CREATE SEQUENCE secuencia_id
  START WITH 1
  INCREMENT BY 1
  MAXVALUE 1000
  CACHE 10;
```

2. Generar un valor usando la secuencia

```sql
-- Incrementa y devuelve el siguiente valor
SELECT mi_secuencia.NEXTVAL FROM dual;

-- Devuelve el valor actual
SELECT mi_secuencia.CURRVAL FROM dual;
```

::: tip
* NEXTVAL: Genera el siguiente valor en la secuencia.
* CURRVAL: Obtiene el valor actual de la secuencia (después de haber llamado a NEXTVAL al menos una vez en la sesión).
:::

3. Insertar en una tabla usando la secuencia

```sql
INSERT INTO empleados (id_empleado, nombre)
VALUES (secuencia_id.NEXTVAL, 'Juan Pérez');
```


## Eliminar una secuencia

```sql
DROP SEQUENCE mi_secuencia;
```