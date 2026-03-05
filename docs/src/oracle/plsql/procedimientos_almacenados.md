---
outline: deep
---

# Procedimientos Almacenados

Un procedimiento almacenado es un bloque PL/SQL guardado en la base de datos que puede ejecutarse múltiples veces.

**Ventajas**

* Reutilización de código
* Mejor rendimiento
* Centralización de lógica de negocio


``` sql
CREATE OR REPLACE PROCEDURE insertar_pais(
   p_id VARCHAR2,
   p_nombre VARCHAR2,
   p_region NUMBER
)
IS
BEGIN
   INSERT INTO countries(country_id, country_name, region_id)
   VALUES(p_id, p_nombre, p_region);

   COMMIT;
END;
```

## Ejecutar el procedimiento

``` sql
BEGIN
    insertar_pais('CL', 'Chile', 2);
END;
```