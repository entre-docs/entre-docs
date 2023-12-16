---
outline: deep
---

# Comandos para encriptar y verificar contraseña

## Creación de nueva tabla

* Se crea la tabla "user"

```sql
CREATE TABLE "user"(
	id SERIAL,
	username varchar(50),
	"password" TEXT,
	last_login timestamp
);
```

* Los registros de ejemplo son los siguientes:

```sql
INSERT INTO "user" (username, "password") VALUES ('maria', '123456');
INSERT INTO "user" (username, "password") VALUES ('jose', '123456');
```

## Encriptar la contraseña

* Se utiliza la extensión **pgcrypto**.

```sql
CREATE EXTENSION pgcrypto;
```

* Ahora encriptar la constraseña usando *pgcryto*.

```sql
INSERT INTO "user" (username, "password")
VALUES ('maria', crypt('123456', gen_salt('bf') ));

INSERT INTO "user" (username, "password")
VALUES ('jose', crypt('123456', gen_salt('bf') ));
```

```sql
SELECT * FROM "user";
```

|username   |password                      |
|-----------|------------------------------|
|Maria      |hfgs0yuNh4shOkulT032cfrsdsfsdd|
|Jose       |fdgdfk0ntr4s3ñ43ncr1pt4d4rdwsd|


## Verificar contraseña encriptada

La función **crypt** compara ambas contraseñas, la real y la encriptada. Si son las mismas, se mostrará el registro.

```sql
SELECT * FROM "user"
WHERE username = 'maria' AND "password" = crypt('123456', "password");
```

|id|username|password                      |last_login             |
|--|--------|------------------------------|-----------------------|
|1 |maria   |hfgs0yuNh4shOkulT032cfrsdsfsdd|2023-12-06 19:31:25.649|
