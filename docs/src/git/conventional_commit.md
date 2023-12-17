# Conventional Commits

El formato típico de un commit convecional consta de 3 partes: tipo, alcance y descripción.

```bash
<tipo>(<alcance>): <descripción>
```

## Tipos de commit

* build: cuando el cambio afecta al compilado del proyecto.

```bash
build: compilar archivos de distribución para la versión 1.0.0
```

* chore: Son tareas de mantenimiento, refactoring, o actualizaciones que no afectan directamente al usuario. Ejemplo: añadir contenido al .gitignore o instalar una dependencia.

```bash
chore(dependencias): actualizar biblioteca de utilidades a la versión 2.0.0
```

* ci: el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua.

```bash
ci(travis): configurar Travis CI para ejecutar pruebas automáticamente
```

* docs: cuando solo se modifica documentación.

```bash
docs(readme): actualizar instrucciones de instalación
```

* feat: cuando se añade una nueva funcionalidad.

```bash
feat(usuario): añadir función de inicio de sesión
```

* fix: cuando se arregla un error.

```bash
fix(validación): corregir validación de entrada de usuario
```

* style: cambios de legibilidad o formateo de código que no afecta a funcionalidad (espacios en blanco, formato, punto y coma que faltan, etc.)

```bash
style(css): ajustar sangría en el archivo de estilos
```

* refactor: cambios de código que no corrigen errores ni añade funcionalidad, pero mejora el código, su estructura o rendimiento.

```bash
refactor(api): reorganizar código para mejorar la legibilidad
```

* perf: usado para mejoras de rendimiento.

```bash
perf(rendering): optimizar algoritmo de renderización de elementos
```

* revert: si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.

```bash
revert(auth): revertir funcionalidad de autenticación con huella dactilar"
```

* test: si añadimos o arreglamos tests.

```bash
test(api): agregar casos de prueba para el módulo de usuarios
```