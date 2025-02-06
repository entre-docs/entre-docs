# Comandos para el uso de Github

## Agregar el repositorio remoto (GitHub) al local

```bash
git remote add origin url_repositorio.git
```

## Subir archivos del local a GitHub

```bash
git push origin master
```

::: tip Para después hacer sólo "git push"
git push -u origin master   
:::

## Traer cambios del repositorio remoto al local

```bash
git pull origin master
```

## Ver donde está el remoto (GitHub) asociado al repositorio local

```bash
git remote -v
```

## Clonar un repositorio de GitHub

```bash
git clone url_repositorio
```

## Clonar una rama específica

::: tip **--single-branch**
Evita que Git descargue otras ramas del repositorio.
:::

```bash
git clone -b nombre-rama --single-branch url_repositorio
```

## Ver los cambios que están en el remoto (sin unirlos al local)

```bash
git fetch
```

## Traer ramas remotas al repositorio local

```bash
git branch -a
```

## Borrar una rama que está en Github

::: tip
Hacerlo desde la rama Master
:::

```bash
git push origin :nombre_rama_remota
```

## Borrar remotos

```bash
git remote rm nombre_rama_remota
```

## Borrar el registro de ramas remotas (que fueron borradas desde Github)

```bash
git remote prune origin
```