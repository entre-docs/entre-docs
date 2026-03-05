---
outline: deep
---

# Cursores en Oracle

Un cursor permite recorrer fila por fila el resultado de una consulta.

Se utilizan cuando es necesario procesar registros individualmente.


## Cursor explícito

``` sql
DECLARE
   CURSOR c_paises IS
      SELECT country_name FROM countries;

   v_nombre countries.country_name%TYPE;

BEGIN
   OPEN c_paises;

   LOOP
      FETCH c_paises INTO v_nombre;
      EXIT WHEN c_paises%NOTFOUND;

      DBMS_OUTPUT.PUT_LINE(v_nombre);
   END LOOP;

   CLOSE c_paises;
END;
```