---
outline: deep
---

# Comandos para crear, seleccionar, actualizar y eliminar registros


## Insertar registros

```sql{5}
INSERT INTO Usuarios (nombre, correo, fecha_registro) VALUES ('Juan Pérez', 'juan.perez@gmail.com', SYSDATE - 10);
INSERT INTO Usuarios (nombre, correo, fecha_registro) VALUES ('Ana López', 'ana.lopez@yahoo.com', SYSDATE - 20);
INSERT INTO Usuarios (nombre, correo, fecha_registro) VALUES ('Carlos Díaz', 'carlos.diaz@hotmail.com', SYSDATE - 5);
INSERT INTO Usuarios (nombre, correo, fecha_registro) VALUES ('María García', 'maria.garcia@gmail.com', SYSDATE - 30);
COMMIT; -- [!code ++]
```

### Uso de Commit

El comando **COMMIT** se utiliza para confirmar todas las modificaciones realizadas en la base de datos durante una transacción. Una vez que se ejecuta un COMMIT, las modificaciones son permanentes y no pueden ser revertidas.

Cuando ejecutas varias instrucciones de modificación (como INSERT, UPDATE, DELETE), estas no se reflejan inmediatamente en la base de datos hasta que realices un COMMIT.

```sql{2}
UPDATE Usuarios SET correo = 'juan.perez2025@gmail.com' WHERE id = 1;
COMMIT; -- [!code ++]
```


## Seleccionar todos los registros

```sql
SELECT * FROM Usuarios;
```

|ID | Nombre            |Correo                 |Fecha_Registro |
|---|-------------------|-----------------------|---------------|
|1  |	Juan Pérez      |juan.perez@gmail.com   |	25/12/2024  |
|2  |	Ana López       |ana.lopez@yahoo.com    |	15/12/2024  |
|3  |	Carlos Díaz     |carlos.diaz@hotmail.com|	30/12/2024  |
|4  |	María García    |maria.garcia@gmail.com |	05/12/2024  |
|5  |   Juan Correa     |juan.correa@gmail.com  |   07/12/2024  |



## Seleccionar campos

```sql
SELECT NOMBRE_EMP, APPATERNO_EMP, APMATERNO_EMP, FECHA_NAC_EMP
FROM EMPLEADO;
```

| NOMBRE_EMP | APPATERNO_EMP | APMATERNO_EMP | FECHA_NAC_EMP |
|------------|---------------|---------------|---------------|
| Juan       | López         | Pino          | 07/09/89      |



## Agregar alias

```sql
SELECT NOMBRE_EMP AS NOMBRE,
       APPATERNO_EMP AS "APELLIDO PATERNO",
       APMATERNO_EMP AS APELLIDO_MATERNO,
       FECHA_NAC_EMP AS NACIMIENTO
FROM EMPLEADO;
```

| NOMBRE  | APELLIDO PATERNO | APELLIDO_MATERNO | NACIMIENTO |
| ------- | ---------------- | ---------------- | ---------- |
| Albania | Musabeli         | Aguilera         | 07/09/89   |



## Seleccionar usando WHERE

```sql
SELECT * FROM Usuarios WHERE nombre = 'Juan Pérez';
```

|ID | Nombre            |Correo                 |Fecha_Registro |
|---|-------------------|-----------------------|---------------|
|1  |	Juan Pérez      |juan.perez@gmail.com   |	25/12/2024  |



## Seleccionar usando LIKE

```sql
SELECT * FROM Usuarios WHERE correo LIKE '%gmail.com';
```

|ID | Nombre            |Correo                 |Fecha_Registro |
|---|-------------------|-----------------------|---------------|
|1  |	Juan Pérez      |juan.perez@gmail.com   |	25/12/2024  |
|4  |	María García    |maria.garcia@gmail.com |	05/12/2024  |


## Seleccionar con limite

::: tip
En Oracle se usa FETCH y en PostgreSQL se usa LIMIT
:::

```sql
SELECT * FROM Usuarios 
FETCH FIRST 2 ROWS ONLY;
```

|ID |Nombre     |Correo                 |Fecha_Registro |
|---|-----------|-----------------------|---------------|
|1	|Juan Pérez |juan.perez@gmail.com   |25/12/2024     |
|2	|Ana López  |ana.lopez@yahoo.com    |15/12/2024     |


## Seleccionar con condiciones complejas

```sql
SELECT * FROM Usuarios 
WHERE nombre = 'Juan%' AND correo LIKE '%gmail%';
```
| ID | Nombre       | Correo                 | Fecha_Registro |
|----|--------------|------------------------|----------------|
| 1  | Juan Pérez   | juan.perez@gmail.com   | 25/12/2024     |
| 5  | Juan Correa  | juan.correa@gmail.com  | 07/12/2024     |


## Ordenar los registros

```sql
SELECT * FROM Usuarios ORDER BY nombre ASC; -- Orden Ascendente
SELECT * FROM Usuarios ORDER BY nombre DESC; -- Orden Descendente
```

## Actualizar un registro

```sql
UPDATE Usuarios SET nombre = 'Verónica' WHERE id = 7;
```


### Uso de Rollback

El comando **ROLLBACK** se utiliza para deshacer todas las modificaciones realizadas en la base de datos desde el inicio de la transacción. Si has realizado cambios y, por alguna razón, decides que no quieres guardar esos cambios, puedes usar ROLLBACK para revertirlos.

Si algo sale mal o si decides que no deseas aplicar los cambios realizados, puedes usar ROLLBACK para restaurar el estado de la base de datos al momento antes de la transacción.

```sql
UPDATE Usuarios SET correo = 'juan.perez2025@gmail.com' WHERE id = 1;
ROLLBACK; -- [!code ++]
```
Este comando deshace el cambio realizado por el UPDATE, por lo que el correo de Juan Pérez no se modifica.

## Eliminar un registro

```sql
DELETE FROM Usuarios WHERE id = 7;
```

## Eliminar usando LIKE

```sql
DELETE FROM Usuarios 
WHERE correo LIKE '%gmail.com';
```
|ID |   Nombre      |Correo                     |Fecha_Registro |
|---|---------------|---------------------------|---------------|
|2  |Ana López      |ana.lopez@yahoo.com        |15/12/2024     |
|3	|Carlos Díaz    |carlos.diaz@hotmail.com    |30/12/2024     |


## Eliminar usando Subconsulta

* Eliminar el registro con la fecha de registro más antigua:

```sql
DELETE FROM Usuarios 
WHERE fecha_registro = (SELECT MIN(fecha_registro) FROM Usuarios);
```

| ID | Nombre       | Correo                    | Fecha_Registro |
|----|--------------|---------------------------|----------------|
| 1  | Juan Pérez   | juan.perez@gmail.com      | 25/12/2024     |
| 2  | Ana López    | ana.lopez@yahoo.com       | 15/12/2024     |
| 3  | Carlos Díaz  | carlos.diaz@hotmail.com   | 30/12/2024     |
| 5  | Juan Correa  | juan.correa@gmail.com     | 07/12/2024     |


## Eliminar todos los registros

```sql
DELETE FROM Usuarios;
```

::: info
* Si necesitas eliminar registros y asegurarte de que los cambios sean permanentes, no olvides ejecutar **COMMIT** después de cada operación.

* Si necesitas eliminar toda la estructura de la tabla (no solo los datos), puedes usar **TRUNCATE TABLE Usuarios** (elimina todos los datos sin posibilidad de rollback).
:::


## Diferencias entre DELETE y TRUNCATE

| Característica                | DELETE                                | TRUNCATE                      |
|-------------------------------|---------------------------------------|-------------------------------|
| Filtrado con `WHERE`          | Sí                                    | No                            |
| Transacción reversible        | Sí (con `ROLLBACK` antes de `COMMIT`) | No                            |
| Desencadenadores (Triggers)   | Se ejecutan                           | No se ejecutan                |
| Velocidad                     | Más lento                             | Más rápido                    |
| Espacio liberado              | Libera espacio gradualmente           | Libera espacio inmediatamente |
| Restricciones FK              | Respeta claves foráneas               | Requiere deshabilitar FK      |
