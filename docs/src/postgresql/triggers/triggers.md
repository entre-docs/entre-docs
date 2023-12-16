---
outline: deep
---

# Comandos para el uso de Triggers

Idealmente queremos disparar una función (procedimiento almacenado o función) cuando algo sucede, ejemplo: cuando un campo se actualiza, cuando un registro se elimina.

Se puede especificar cuando se quiere disparar el trigger: antes o despues de un procedimiento como insertar, actualizar o eliminar un registro, usando las palabras BEFORE o AFTER.


:::tip *Actividad del Ejemplo*

Para este ejemplo se continúa usando el ejemplo de la sección [Procedimientos Almacenados - User Login](/postgresql/triggers/proc_almac_user_login).

Cuando se actualice la última fecha de ingreso de un usuario, vamos a crear una nueva tabla donde se almacenará todos los LOGIN exitosos.
Además, usando Procedimientos Almacenados, se almacenarán todos los LOGIN fallidos.
:::

## Crear tabla para almacenar

```sql
-- Creamos la tabla SESSION para almacenar el último login
CREATE TABLE seccion16."session" (
	id serial NOT NULL,
	user_id int NULL,
	last_login timestamp NULL
);
```

```sql
-- Se guardará este registro en la tabla SESSION
CALL user_login('maria', '123456');
```

## Crear función que se ejecutará con el trigger

```sql
CREATE OR REPLACE FUNCTION create_session_log()
RETURNS TRIGGER AS $$
BEGIN
	INSERT INTO "session"(user_id, last_login) VALUES ( NEW.id, NOW() );
	
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

## Crear el trigger

```sql
CREATE OR REPLACE TRIGGER create_session_trigger AFTER UPDATE ON "user"
FOR EACH ROW EXECUTE PROCEDURE create_session_log();
```

Ahora si llamamos al procedimiento almacenado, debería guardarse, el user_id y el last_login, en la tabla **SESSION**.

```sql
CALL user_login('maria', '123456');
```

|id|user_id |last_login             |
|--|------- |-----------------------|
|1 |2       |2023-12-10 20:57:03.852|
|2 |2       |2023-12-10 20:58:19.528|


Cada vez que llamamos al procedimiento, se guardará en la tabla Session.

