---
outline: deep
---

# Comandos para el uso de Constraints en Oracle

## Constraint Primary Foreign Key

Una columna puede ser tanto clave primaria como clave foránea si la columna que actúa como clave foránea también es la clave primaria de la tabla en la que se define.

:::tip TIP
Con una key Primaria Foránea, se debe especificar en las CONSTRAINT, que dicha key es primary, luego indicar que es foranea haciendo REFERENCIA a la tabla de cual viene.
:::

```sql
CREATE TABLE REGION (
    id_region NUMBER PRIMARY KEY,   -- Clave primaria de la región
    nombre_region VARCHAR2(100)     -- Nombre de la región
);
```

```sql
CREATE TABLE COMUNA (
    id_comuna NUMBER PRIMARY KEY,   -- Clave primaria de la comuna
    nombre_comuna VARCHAR2(100),    -- Nombre de la comuna
    id_region NUMBER,         -- Clave foránea que hace referencia a REGION
    CONSTRAINT fk_region FOREIGN KEY (id_region) REFERENCES REGION(id_region)
);
```

## Cómo insertar datos

```sql
-- Insertar datos en la tabla REGION
INSERT INTO REGION (id_region, nombre_region) VALUES (1, 'Metropolitana');
INSERT INTO REGION (id_region, nombre_region) VALUES (2, 'Valparaíso');

-- Insertar datos en la tabla COMUNA
INSERT INTO COMUNA (id_comuna, nombre_comuna, id_region) VALUES (1, 'Santiago', 1);
INSERT INTO COMUNA (id_comuna, nombre_comuna, id_region) VALUES (2, 'Valparaíso', 2);
```


## Ejemplo órdenes y pedidos

```sql
CREATE TABLE ordenes (
    id_orden NUMBER PRIMARY KEY,
    fecha_orden DATE
);

CREATE TABLE detalle_orden (
    id_orden NUMBER PRIMARY KEY,    -- Clave primaria (cada detalle pertenece a un solo pedido)
    id_producto NUMBER,
    cantidad NUMBER,
    CONSTRAINT fk_orden FOREIGN KEY (id_orden) REFERENCES ordenes(id_orden)
);
```