---
outline: deep
---

# Comandos para seguimiento de Repositorios

## Agregar archivo a seguimiento

```bash
git add .
```

## Agregar todos los archivos

```bash
git add -A
```

## Agregar archivos con una extensión

```bash
git add *.html
```

```bash
git add *.js
```

## Agregar archivos de una carpeta con una extensión

```bash
git add js/*.js
```

## Quitar un archivo del seguimiento

```bash
git reset nombreArchivo
```

## Renombrar archivo mediante git

::: tip
El archivo vuelve a su estado inicial para hacer add o commit
:::

```bash
git mv nombre-actual-archivo nuevo-nombre-archivo
```

## Eliminar un archivo mediante git

::: tip
Hacer un commit para registrar la eliminacion
:::

```bash
git rm nombre-archivo
```