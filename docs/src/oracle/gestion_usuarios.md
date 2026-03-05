---
outline: deep
---

# Gestión de Usuarios en Oracle

En Oracle, un **usuario** es una cuenta que permite acceder a la base de datos. Cada usuario tiene su propio esquema (conjunto de objetos como tablas, vistas, etc.). La gestión de usuarios incluye crearlos, modificarlos y eliminarlos.

## Tablespace según el entorno

El tablespace por defecto varía según dónde esté instalado Oracle:

| Entorno | Default Tablespace |
|---|---|
| Oracle local (XE, on-premise) | `USERS` |
| Oracle Cloud (ATP, ADW, etc.) | `DATA` |

Funcionan igual, solo difieren en el nombre según el entorno.

## Crear un Usuario

**Oracle local:**
```sql
CREATE USER nombre_usuario IDENTIFIED BY contraseña
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 50M ON users;
```

**Oracle Cloud:**
```sql
CREATE USER nombre_usuario IDENTIFIED BY contraseña
DEFAULT TABLESPACE data
TEMPORARY TABLESPACE temp
QUOTA UNLIMITED ON data;
```

| Cláusula | Descripción |
|---|---|
| `IDENTIFIED BY` | Define la contraseña del usuario |
| `DEFAULT TABLESPACE` | Espacio de almacenamiento por defecto para sus objetos |
| `TEMPORARY TABLESPACE` | Espacio para operaciones temporales (ordenamientos, joins) |
| `QUOTA` | Límite de espacio que puede usar en un tablespace (`UNLIMITED` para sin límite) |

## Permitir la Conexión y asignar Roles

Un usuario recién creado no puede conectarse ni hacer nada hasta que se le asignen roles. Lo habitual es otorgar `CONNECT` y `RESOURCE` juntos:

```sql
GRANT CONNECT TO nombre_usuario;
GRANT RESOURCE TO nombre_usuario;
```

| Rol | Qué incluye |
|---|---|
| `CONNECT` | Permite conectarse a la base de datos (`CREATE SESSION`) |
| `RESOURCE` | Permite crear objetos propios: tablas, vistas, procedimientos, secuencias, triggers, etc. |

::: tip
Usar estos roles es más práctico que otorgar privilegios individuales como `GRANT CREATE SESSION`, `GRANT CREATE TABLE`, etc., ya que los agrupan de forma estándar.
:::

## Modificar un Usuario

```sql
-- Cambiar contraseña
ALTER USER nombre_usuario IDENTIFIED BY nueva_contraseña;

-- Cambiar tablespace por defecto
ALTER USER nombre_usuario DEFAULT TABLESPACE nuevo_tablespace;

-- Ampliar cuota de almacenamiento
ALTER USER nombre_usuario QUOTA UNLIMITED ON users;

-- Bloquear / desbloquear una cuenta
ALTER USER nombre_usuario ACCOUNT LOCK;
ALTER USER nombre_usuario ACCOUNT UNLOCK;
```

## Eliminar un Usuario

```sql
-- Eliminar usuario (solo si no tiene objetos)
DROP USER nombre_usuario;

-- Eliminar usuario junto con todos sus objetos
DROP USER nombre_usuario CASCADE;
```

::: warning
`DROP USER ... CASCADE` elimina **todos los objetos** del esquema del usuario (tablas, vistas, procedimientos, etc.). Esta acción es irreversible.
:::

## Ver Usuarios Existentes

```sql
-- Todos los usuarios de la base de datos
SELECT username, account_status, default_tablespace
FROM dba_users;

-- Usuario actual conectado
SELECT USER FROM dual;
```

## Ejemplo Completo

```sql
-- 1. Crear el usuario
CREATE USER juan
IDENTIFIED BY password123
DEFAULT TABLESPACE users
QUOTA 100M ON users;

-- 2. Asignar roles (conexión + permisos básicos)
GRANT CONNECT TO juan;
GRANT RESOURCE TO juan;

-- 3. Dar acceso a una tabla específica de otro esquema
GRANT SELECT, INSERT ON empleados TO juan;
```
