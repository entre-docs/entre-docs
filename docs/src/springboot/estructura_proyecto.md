---
outline: deep
---

# Estructura de un Proyecto

Spring Boot sigue una estructura de paquete común que organiza las clases y componentes.

``` md
src/
 ├─ entity/        → las clases que representan tablas (models)
 ├─ repositories/  → accede a la base de datos
 ├─ services/      → la lógica del negocio
 └─ controllers/   → define los endpoints (lo que recibe el frontend)
```

