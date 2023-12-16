---
outline: deep
---

# Uso de Trigger con cláusula When

## Trigger When

Al crear un trigger se puede especificar una condición BOOLEANA (WHEN) que se probará para determinar si el disparador debe activarse. En disparadores a nivel de fila, la condición WHEN puede examinar los valores antiguos (OLD) y/o nuevos (NEW) de las columnas de la fila.

:::tip *Actividad del Ejemplo*
Disparar el trigger solamente cuando cambia el dato de "last_login".
:::

## Función del trigger

Esta es la función que se ejecutará con el trigger.

```sql
CREATE OR REPLACE FUNCTION create_session_log()
RETURNS TRIGGER AS $$

BEGIN
	INSERT INTO "session"(user_id, last_login) VALUES ( NEW.id, NOW() );
	
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

## Crear trigger usando when

:::tip *Actividad del Ejemplo*
Disparar el trigger solamente cuando cambia el dato de "last_login".
No cuando se actualiza otro dato del usuario.

Para detallar cuando se quiere disparar el trigger se usa WHEN.
En este caso, cuando el valor del OLD.last_login es distinto del NEW.last_login
:::

```sql
CREATE OR REPLACE TRIGGER create_session_trigger AFTER UPDATE ON "user"
FOR EACH ROW
WHEN (OLD.last_login IS DISTINCT FROM NEW.last_login)
EXECUTE PROCEDURE create_session_log();
```

:::info Importante
Se actualizó el nombre manualmente (de 'maria' a 'camila').
:::

Ahora llamamos al procedimiento almacenado con el nuevo nombre, deberia guardarse en la tabla SESSION.

```sql
CALL user_login('camila', '123456');
```

Cada vez que llamamos al procedimiento, se guarda en la tabla SESSION.

Este es el resultado en la tabla SESSION:

|id|user_id |last_login             |
|--|------- |-----------------------|
|1 |2       |2023-12-10 20:57:03.852|
|2 |2       |2023-12-10 20:58:19.528|
|3 |2       |2023-12-10 21:04:04.029|
|4 |2       |2023-12-10 21:07:10.470|
