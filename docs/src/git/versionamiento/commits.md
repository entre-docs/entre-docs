---
outline: deep
---

# Comandos para commits de Repositorios

## Commits

### Commit con título

```bash
git commit -m "Primer commit"
```

### Editar el título del último commit

```bash
git commit --amend
```

```bash
git commit --amend -m "Nuevo título del commit"
```

### Agregar y hacer commit a la vez

En archivos que ya están en seguimiento

```bash
git commit -am "Mensaje del commit"
```

## Deshacer cambios

### Regresar los archivos al estado del último commit (deshacer cambios)

* El archivo actual

```bash
git checkout -- .
```

* Un archivo especifico

```bash
git checkout -- README.md
```

### Eliminar commit

* El último commit manteniendo cambios

```bash
git reset --soft HEAD^
```

* Regresar al commit borrando los cambios realizados

```bash
git reset --mixed n°hash
```

* Regresar al estado de un commit específico

Regresar al commit y dejar los archivos como estaban en ese punto (del hash)

```bash
git reset --hard n°hash
```

## Historial de Commits

::: tip
q : para cerrar el historial
:::

* Historial detallado

```bash
git log
```

* Historial resumido

```bash
git log --one line
```

* Historial completo en orden cronológico

```bash
git reflog
```

