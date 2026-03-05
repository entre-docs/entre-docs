---
outline: deep
---

# Comandos para commits de Repositorios

## Commits

### Commit con título

```bash
git commit -m "Primer commit"
```

### Editar último commit

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

### Regresar al último commit

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

## Historial de commits

::: tip
q : para cerrar el historial
:::

### Detallado

```bash
git log
```

### Resumido

```bash
git log --one line
```

### Completo (reflog)

```bash
git reflog
```

## Rebase

::: tip
Debes estar en la rama que quieres reorganizar
:::

```bash
git rebase master
```

### Ejemplo de uso

::: tip Estado inicial

* master tiene los commits: A → B → C.
* Tu rama feature tiene los commits: A → B → C → D → E.

* master avanza con nuevos commits: A → B → C → F → G.
:::

::: warning Al ejecutar git rebase master en la rama feature:

* Git toma los commits D → E (de tu rama feature).
* Los aplica sobre el último estado de master (F → G).

El nuevo historial de la rama feature será: A → B → C → F → G → D → E.
:::

### Diferencias con merge

|Característica |git merge|git rebase|
|---------------|---------|----------|
|Historial      |Preserva el historial original con bifurcaciones.|Reescribe el historial para hacerlo lineal.|
|Conflictos     |Se resuelven durante el merge.|Se resuelven durante el rebase.|
|Commit adicional|Crea un commit de merge.|No crea commits adicionales.|
|Uso principal  |Fusionar ramas sin reescribir historial.|Mantener un historial limpio y lineal.|

## Cherry-pick

Aplica un commit específico de otra rama a la rama actual, sin hacer un merge completo.

::: tip
Debes estar en la rama donde quieres aplicar el commit.
:::

```bash
git cherry-pick <hash-del-commit>
```

### Ejemplo de uso

::: tip Estado inicial

* `main` tiene los commits: A → B → C.
* La rama `develop` tiene los commits: A → B → C → D → E.
* Solo necesitas el commit D en `main`.

:::

::: warning Al ejecutar git cherry-pick en main:

```bash
git checkout main
git cherry-pick <hash-de-D>
```

El nuevo historial de `main` será: A → B → C → D'.

> El commit D' es una copia del commit D con un nuevo hash.
:::

### Casos de uso comunes

* Pasar un bug fix de `develop` a `main` sin traerse todos los demás cambios.
* Recuperar un commit hecho en la rama equivocada.
* Reutilizar un cambio puntual entre ramas.
