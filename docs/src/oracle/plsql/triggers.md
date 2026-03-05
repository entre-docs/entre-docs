---
outline: deep
---

# Triggers en Oracle

Un trigger es un bloque PL/SQL que se ejecuta automáticamente cuando ocurre un evento en una tabla.



<div style="display: flex; gap: 3rem;">

| **EVENTOS COMUNES** |
| ------------------- |
| INSERT              |
| UPDATE              |
| DELETE              |

| **SE UTILIZAN PARA**        |
| --------------------------- |
| Validar datos               |
| Automatizar procesos        |
| Auditoría de cambios        |
| Mantener integridad de datos |

</div>


## Tipos de Trigger

### BEFORE

Se ejecuta antes de la operación en la tabla

``` sql
CREATE OR REPLACE TRIGGER trg_validar_pais
BEFORE INSERT ON countries
FOR EACH ROW
BEGIN
   IF :NEW.country_name IS NULL THEN
      RAISE_APPLICATION_ERROR(-20001,'Nombre no puede ser nulo');
   END IF;
END;
```


### AFTER

Se ejecuta después de la operación

``` sql
CREATE OR REPLACE TRIGGER trg_log_insert
AFTER INSERT ON countries
FOR EACH ROW
BEGIN
   DBMS_OUTPUT.PUT_LINE('Se insertó: ' || :NEW.country_name);
END;
```


## NEW y OLD en Trigger

Permiten acceder a valores antes y después de una modificación.


| Referencia | Descripción    |
| ---------- | -------------- |
| :NEW       | Nuevo valor    |
| :OLD       | Valor anterior |


* Ejemplo con UPDATE

``` sql
CREATE OR REPLACE TRIGGER trg_update_log
AFTER UPDATE ON countries
FOR EACH ROW
BEGIN
   DBMS_OUTPUT.PUT_LINE(
      :OLD.country_name || ' -> ' || :NEW.country_name
   );
END;
```


