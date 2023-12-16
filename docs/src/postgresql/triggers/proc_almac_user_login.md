---
outline: deep
---

# Procedimiento Almacenado - User Login

Para esta sección, se utiliza la tabla **USER** creada en la sección [**Encriptar contraseña**](/postgresql/triggers/encriptar_contrasena).

```sql
SELECT COUNT(*) FROM "user"
WHERE username = 'maria' AND "password" = crypt('123456', "password");
```

:::tip *Actividad del Ejemplo*

El ejemplo consta de crear un procedimiento almacenado para verificar un LOGIN.

Enviará un mensaje de exito o error, en cada caso.
:::

```sql
CREATE OR REPLACE PROCEDURE user_login(user_name VARCHAR,"user_password" VARCHAR)
AS $$
DECLARE
	was_found BOOLEAN;-- PARA GUARDAR LO QUE DEVUELVE EL SELECT

BEGIN
	SELECT COUNT(*) INTO was_found
	FROM "user"
	WHERE username = user_name AND
		"password" = crypt("user_password", "password");
	
	-- verificar si existe
	IF(was_found = false) THEN
		RAISE EXCEPTION 'Usuario y/o contraseña no son correctos';
	END IF;

	-- si todo sale bien, quiero actualizar mi campo last_login
	UPDATE "user" SET last_login = now()
	WHERE username = user_name;

	COMMIT;
	RAISE NOTICE 'Usuario encontrado %', was_found;
	
END;

$$ LANGUAGE plpgsql;
```

* Llamar al procedimiento

```sql
CALL user_login('maria', '123456');

-- Respuesta por consola: 'Usuario encontrado t (la t es de true)'
```

```sql
CALL user_login('maria', '123456trg');

-- Respuesta por consola: 'ERROR: Usuario y/o contraseña no son correctos'
```