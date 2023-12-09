# Comandos para versionamiento de Repositorios

::: tip
* Ayuda para comandos:
```bash
git help
```

* Ver el estado de los archivos:
```bash
git status
```
:::

## Iniciar proyecto

```bash
git init
```

## Agregar archivo a seguimiento

```bash
git add .
```

## Agregar todos los archivos a seguimiento

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

## Commit con título

```bash
git commit -m "Primer commit"
```

## Editar el título del último commit

```bash
git commit --amend
```

```bash
git commit --amend -m "Nuevo título del commit"
```

## Agregar y hacer commit a la vez

En archivos que ya están en seguimiento

```bash
git commit -am "Mensaje del commit"
```

## Regresar los archivos al estado del último commit (deshacer cambios)

```bash
# Archivo actual
git checkout -- .
```
```bash
# A un archivo específico (Ejemplo: README.md)
git checkout -- README.md
```

## Eliminar el último commit (manteniendo los cambios)

```bash
git reset --soft HEAD^
```

## Regresar al commit borrando los cambios realizados

```bash
git reset --mixed n°hash
```

## Regresar al commit y dejar los archivos como estaban en ese punto (del hash)

```bash
git reset --hard n°hash
```

## Historial de Commits

::: tip
q : para cerrar el historial
:::

```bash
git log
```

## Historial de Commits resumido

```bash
git log --one line
```

## Historial completo en orden cronológico

```bash
git reflog
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