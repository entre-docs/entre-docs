---
outline: deep
---

# Comandos para seguimiento de Repositorios

## Agregar archivos (git add)

### Archivos en seguimiento

```bash
git add .
```

### Todos los archivos

```bash
git add -A
```

### Por extensión

```bash
git add *.html
```

```bash
git add *.js
```

### Por carpeta y extensión

```bash
git add js/*.js
```

## Quitar del seguimiento

```bash
git reset nombreArchivo
```

## Renombrar archivo

::: tip
El archivo vuelve a su estado inicial para hacer add o commit
:::

```bash
git mv nombre-actual-archivo nuevo-nombre-archivo
```

## Eliminar archivo

::: tip
Hacer un commit para registrar la eliminacion
:::

```bash
git rm nombre-archivo
```
