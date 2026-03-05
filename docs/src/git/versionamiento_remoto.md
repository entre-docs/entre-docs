# Comandos para el uso de Github

## Conectar repositorio remoto

```bash
git remote add origin url_repositorio.git
```

## Push y Pull

### Subir cambios (push)

```bash
git push origin master
```

::: tip Para después hacer sólo "git push"
git push -u origin master
:::

### Traer cambios (pull)

```bash
git pull origin master
```

### Ver cambios sin unir (fetch)

```bash
git fetch
```

## Clonar repositorio

### Repositorio completo

```bash
git clone url_repositorio
```

### Rama específica

::: tip **--single-branch**
Evita que Git descargue otras ramas del repositorio.
:::

```bash
git clone -b nombre-rama --single-branch url_repositorio
```

## Ver remotos

### Remoto asociado

```bash
git remote -v
```

### Ramas remotas

| Comando          | Qué hace                               |
| ---------------- | -------------------------------------- |
| `git branch`     | Muestra solo ramas **locales**         |
| `git branch -r`  | Muestra solo ramas **remotas**         |
| `git branch -a`  | Muestra **todas (locales + remotas)**  |

## Borrar

### Rama en GitHub

::: tip
Hacerlo desde la rama Master
:::

```bash
git push origin :nombre_rama_remota
```

### Remoto

```bash
git remote rm nombre_rama_remota
```

### Registro de ramas eliminadas (prune)

```bash
git remote prune origin
```
