---
outline: deep
---

# Comandos para la gestión de submódulos


Un submódulo en Git es un repositorio dentro de otro repositorio. Esto es útil cuando tu proyecto depende de otro proyecto que deseas gestionar por separado (por ejemplo, una librería externa).


::: tip ¿Qué hace?

* update: Descarga la versión correcta de cada submódulo definida en el commit actual del repositorio principal.

* --init: Inicializa cualquier submódulo que aún no haya sido configurado en el repositorio. Esto crea los enlaces necesarios entre tu proyecto principal y el submódulo.

* --recursive: Asegura que los submódulos dentro de otros submódulos (submódulos anidados) también sean inicializados y actualizados.
:::


##  Inicializar, actualizar y clonar submódulos dentro de un repositorio

```bash
git submodule update --init --recursive
```

Ejemplo de uso:

* Supongamos que clonamos un repositorio que contiene submódulos:

```bash
git clone https://github.com/usuario/proyecto-con-submodulos.git
```

* Después de clonar, los submódulos no estarán descargados. Para inicializarlos y actualizarlos:

```bash
git submodule update --init --recursive
```

* Resultado:

- Los submódulos se clonan en las rutas definidas en el repositorio principal.
- Las versiones específicas de los submódulos (según el commit registrado) se actualizan automáticamente.