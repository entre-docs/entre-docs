---
outline: deep
---

# Funciones en Oracle

Las funciones son subprogramas que devuelven un valor mediante la instrucción `RETURN`.

Se utilizan para realizar cálculos o recuperar valores desde la base de datos.


## Estructura de una función

``` sql
CREATE OR REPLACE FUNCTION nombre_funcion(parametros)
RETURN tipo_dato
IS
BEGIN
   RETURN valor;
END;
```

``` sql
CREATE OR REPLACE FUNCTION calcular_doble(
   p_num NUMBER
)
RETURN NUMBER
IS
BEGIN
   RETURN p_num * 2;
END;
```

## Ejecutar función

``` sql
DECLARE
   v_result NUMBER;
BEGIN
   v_result := calcular_doble(5);

   DBMS_OUTPUT.PUT_LINE(v_result);
END;
```

## Usar una función en SQL

``` sql
SELECT calcular_doble(10)
FROM dual;
```

## Función con consulta a tabla

``` sql
CREATE OR REPLACE FUNCTION obtener_nombre_pais(
   p_id VARCHAR2
)
RETURN VARCHAR2
IS
   v_nombre countries.country_name%TYPE;
BEGIN
   SELECT country_name
   INTO v_nombre
   FROM countries
   WHERE country_id = p_id;

   RETURN v_nombre;
END;
```

## Diferencia entre función y procedimiento


| Característica         | Función  | Procedimiento |
| ---------------------- | -------- | ------------- |
| Devuelve valor         | Sí       | No necesariamente |
| Puede usarse en SELECT | Sí       |               |
| Uso principal          | Cálculos | Ejecutar acciones |
