---
outline: deep
---

# PL/SQL y su estructura

Es un lenguaje de programación y manipulación de datos que proporciona Oracle.

Es una extensión procedimental del SQL combinando la potencialidad y flexibilidad de SQL con la de un lenguaje 3GL (lenguaje de tercera generación).

|BENEFICIOS|
|----------|
|1. Integración de lenguaje procedimental con SQL |
|2. Mejora el rendimiento de aplicaciones |
|3. Programas modulares |
|4. Integración con herramientas de Oracle |
|5. Portabilidad |
|6. Manejo de errores |

## Estructura de bloque PL/SQL

```sql
DECLARE (opcional)
- Variables, cursors, user-defined exceptions
BEGIN (obligatorio)
- sql statements
- pl/sql statements
EXCEPTION (opcional)
- acciones cuando la excepción ocurra
END; (obligatorio)
```
::: tip **Importante!**
Una variable para cada campo
:::

```sql
DECLARE
V_FNAME VARCHAR2 (20);  -- [!code ++]
BEGIN
	SELECT FIRST_NAME  -- [!code ++]
		INTO V_FNAME
	FROM EMPLOYESS
	WHERE EMPLOYEE_ID = 100;
END;
```

## Visualizar un resultado

Para ver un resultado de un bloque PL/SQL se usa `BDMS_OUT`.

```sql
DECLARE
V_FNAME VARCHAR2 (20);
V_LNAME VARCHAR2 (20);
BEGIN
	SELECT FIRST_NAME, LAST_NAME
		INTO V_FNAME, V_LNAME
	FROM EMPLOYESS
	WHERE EMPLOYEE_ID = 100;
	DBMS_OUTPUT.PUT_LINE('Hola ' || V_FNAME || ' ' || V_LNAME);  -- [!code ++]
END;
```
(Salida: Hola Juan Perez)


::: tip **Importante!**
El SELECT debe retornar `un solo resultado` para guardarlo en una variable
:::


## Asignar valor a una variable

```sql
DECLARE
V_FNAME VARCHAR2 (20);
V_LNAME VARCHAR2 (20);
V_EMPID NUMBER(3);
BEGIN
	V_EMPID:=100;  -- [!code ++]
	SELECT FIRST_NAME, LAST_NAME
		INTO V_FNAME, V_LNAME
	FROM EMPLOYESS
	WHERE EMPLOYEE_ID = V_EMPID;
	DBMS_OUTPUT.PUT_LINE('Mi nombre es ' || V_FNAME || ' ' || V_LNAME);
END;
```

(Salida: Mi nombre es Juan Pérez)