---
outline: deep
---

# Estructuras de control en PL/SQL


Las estructuras de control permiten definir el flujo de ejecución de un programa.


## IF

Permite ejecutar instrucciones cuando una condición es verdadera.

```sql
DECLARE
   v_num NUMBER := 10;
BEGIN
   IF v_num > 5 THEN
      DBMS_OUTPUT.PUT_LINE('Mayor que 5');
   END IF;
END;
```


## IF ELSE

``` sql
DECLARE
   v_num NUMBER := 3;
BEGIN
   IF v_num > 5 THEN
      DBMS_OUTPUT.PUT_LINE('Mayor que 5');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Menor o igual a 5');
   END IF;
END;
```


## LOOP

Permite repetir instrucciones hasta que se cumpla una condición.

``` sql
DECLARE
   v_contador NUMBER := 1;
BEGIN
   LOOP
      DBMS_OUTPUT.PUT_LINE(v_contador);

      v_contador := v_contador + 1;

      EXIT WHEN v_contador > 5;
   END LOOP;
END;
```


## FOR LOOP

Se utiliza cuando se conoce el número de iteraciones.

``` sql
BEGIN
   FOR i IN 1..5 LOOP
      DBMS_OUTPUT.PUT_LINE('Número: ' || i);
   END LOOP;
END;
```