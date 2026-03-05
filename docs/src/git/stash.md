# Comandos para crear y usar stash

::: tip
Lugar (rama) donde se puede guardar información de forma temporal, para después recuperarla.
:::

## Crear stash

```bash
git stash
```

## Ver stash

### Lista

```bash
git stash list
```

### Lista detallada

```bash
git stash list --stat
```

### Archivos cambiados

```bash
git stash show n°Stash
```

## Recuperar stash

### El más reciente (pop)

Recupera los cambios más recientes del stash y elimina el stash.

```bash
git stash pop
```

### Uno específico (apply)

```bash
git stash apply n°Stash
```

::: tip Ejemplo
```
git stash apply 0
(el cero es el stash más reciente)
```
:::

## Borrar stash

### Uno específico

```bash
git stash drop n°Stash
```

### El más reciente

```bash
git stash drop
```

### Todos (clear)

Borra todos los stash, si es que no se borraron cuando hacemos el git stash pop y resolvemos conflictos.

```bash
git stash clear
```

## Renombrar stash

```bash
git stash save "Mensaje para el stash"
```
