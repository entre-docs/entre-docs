---
outline: deep
---

# Privilegios y Roles en base de datos Oracle

Los privilegios son permisos que controlan lo que los usuarios pueden hacer dentro de la base de datos. Se dividen en privilegios de sistema y privilegios de objetos, y pueden asignarse de forma directa o a través de roles para facilitar la administración.

## Privilegios de Sistema

Estos privilegios permiten a los usuarios realizar tareas administrativas o globales en la base de datos. Algunos ejemplos incluyen:

- CREATE USER: Permite crear nuevos usuarios.
- ALTER DATABASE: Permite modificar la configuración de la base de datos.
- CREATE TABLE: Permite crear tablas en el esquema propio del usuario.
- DROP ANY TABLE: Permite eliminar cualquier tabla en la base de datos.

```sql
GRANT CREATE SESSION TO user_name;
GRANT CREATE TABLE TO user_name;
```


## Privilegios de Objetos

Estos privilegios son específicos para objetos individuales como tablas, vistas, procedimientos, etc., y controlan cómo un usuario puede interactuar con dichos objetos.

Algunos privilegios comunes sobre objetos son:

- SELECT: Permite consultar datos de una tabla o vista.
- INSERT: Permite insertar datos en una tabla.
- UPDATE: Permite actualizar datos en una tabla.
- DELETE: Permite eliminar datos de una tabla.
- EXECUTE: Permite ejecutar un procedimiento o función.

```sql
/* Si un usuario tiene una tabla employees,
puede otorgar permisos a otro usuario con:*/
GRANT SELECT, INSERT ON employees TO user_name;
```

```sql
-- Otorgar todos los privilegios
GRANT ALL hr.employees
TO administrador;
```

# Roles en Oracle

Un rol es un **conjunto de privilegios** que puede asignarse a uno o más usuarios, simplificando la gestión de permisos. En lugar de asignar privilegios individuales a cada usuario, se pueden agrupar en roles y asignar estos roles a los usuarios.

## Crear un rol

```sql
CREATE ROLE manager_role;
```

## Asignar privilegios al rol

```sql
GRANT CREATE SESSION, CREATE TABLE TO manager_role;
GRANT SELECT, INSERT ON employees TO manager_role;
```

## Asignar el rol a un usuario

```sql
GRANT manager_role TO user_name;
```

## Habilitar el rol

```sql
-- Un usuario puede activar un rol asignado si está habilitado con:
SET ROLE manager_role;
```

## Eliminar Privilegios

```sql
REVOKE CREATE TABLE -- privilegio
ON hr.employees -- objeto
FROM rol_consulta; -- usuario
```