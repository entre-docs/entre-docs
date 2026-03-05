# Comandos para crear tags

## Crear tag

```bash
git tag nombre-tag
```

## Ver tags

### Lista

```bash
git tag
```

### Información detallada

```bash
git show n°VersionHASH
```

::: tip Ejemplo:
git show v0.1.0
:::

## Agregar versión al tag

### Por nombre

```bash
git tag -a v.1.0.0 -m "Version 1.0.0"
```

### Por número de commit

```bash
git tag -a v.0.1.0 n°HASH -m "Version Alpha"
```

## Borrar tag

```bash
git tag -d nombre-tag
```

## Subir tags a GitHub

```bash
git push --tags
```
