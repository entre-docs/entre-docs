---
outline: deep
---

# Buenas Prácticas en el Diseño de Base de datos


## Objetivos de un buen diseño

- Minimizar la redundacia (usar normalización)
- Proteger la precisión (no permitir "basura" en la bbdd)
- Ser accesible (tener alta disponibilidad a la bbdd)
- Cumplir las expectativas (resolver la necesidad)


## Principios a seguir

- Mantener la bbdd simple
- Escribir todo en minúscula sin espacios
- Usar estandarización (usar los mismos nombres de tablas, etc)
- Se recomienda nombres de tablas en singular
- Se recomienda nombres explicativos (explicitos)
- Evitar nombres reservados como "user", "table", "create"
- Establecer el tipo apropiado y precisión adecuados
- Definir las llaves foraneas y relaciones
- No usar abreviaturas

- Normalizar la data (evitar redundancia)
- Diseñar a largo plazo
- Considerar futuras modificaciones
- Mantener un modelado bajo versiones
- Crear documentación y diagramas

- Mantener la deuda técnica a raya (resolver a corto plazo errores)
- Mantener la privacidad como prioridad
- Probar el diseño
- Mantener la bbdd en su propio servidor
- No confiar en identificadores de terceros
- Si el esquema es muy grande, se recomienda particionarlo