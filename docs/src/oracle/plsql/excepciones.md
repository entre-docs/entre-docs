---
outline: deep
---

# Manejo de Excepciones en Oracle

Las excepciones permiten manejar errores durante la ejecución de un bloque PL/SQL.

Esto evita que el programa falle abruptamente.

``` sql
DECLARE
   v_num NUMBER := 10;
   v_result NUMBER;
BEGIN
   v_result := v_num / 0;

EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Error: división por cero');
END;
```


## Excepciones más comunes

| Excepción      | Descripción                      |
| -------------- | -------------------------------- |
| NO_DATA_FOUND  | No se encontró un registro       |
| TOO_MANY_ROWS  | Demasiadas filas en una consulta |
| ZERO_DIVIDE    | División por cero                |
| INVALID_NUMBER | Conversión inválida              |



## Manejo general de excepciones

``` sql
BEGIN
   -- código
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Ocurrió un error inesperado');
END;
```