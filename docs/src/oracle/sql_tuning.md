---
outline: deep
---

# Fases de Procesamiento - SQL Tuning

## Parsing

Es el primer paso cuando Oracle recibe una consulta SQL. En esta fase, el sistema **analiza** la consulta para asegurarse de que es **sintácticamente correcta y semánticamente válida**.

## Binding

 El binding se refiere a la fase en la que Oracle **asocia los valores reales con los parámetros** en una consulta SQL, es decir, analiza las variables.

## Executing

Se ejecuta la consulta según el plan de ejecución para recuperar o modificar los datos solicitados por la consulta SQL.

## Fetching

Es el proceso de **recuperar y devolver los resultados** de la consulta a la aplicación o al usuario.