---
name: commit
description: Analiza los cambios del proyecto (staged o, si no hay, sin stagear) y propone un mensaje de commit en español siguiendo el estilo del repo. Solo genera el mensaje; nunca ejecuta git commit. Usar cuando el usuario pida un mensaje de commit o escriba /commit.
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Read
---

# Generar mensaje de commit (sin hacer commit)

## Reglas estrictas

- **NUNCA** ejecutes `git commit`, `git add`, `git push`, `git reset`, `git stash` ni ningún comando que modifique el repositorio o el índice. Solo lectura.
- **NO** incluyas líneas `Co-Authored-By` ni ninguna atribución a Claude o Claude Code en el mensaje.
- La salida final es únicamente el mensaje de commit propuesto, listo para copiar.

## Pasos

1. Ejecuta `git status --short` para ver qué hay staged y qué no.
2. Si hay cambios staged, analiza `git diff --cached --stat` y `git diff --cached`.
   Si no hay nada staged, analiza `git diff --stat` y `git diff` (y menciona los archivos sin trackear), y avisa que los cambios aún no están en stage.
3. Revisa `git log --format=%s -10` para imitar el estilo de los commits recientes.
4. Si el diff es grande, lee los archivos nuevos o renombrados lo justo para entender de qué tratan.

## Formato del mensaje

Estilo del repo (Conventional Commits en español):

```
<tipo>(<ámbito>): <Descripción en imperativo, empezando con mayúscula>

- Detalle 1
- Detalle 2
```

- `tipo`: `feat`, `fix`, `docs`, `refactor`, `chore`, `style`, etc.
- `ámbito`: la tecnología o sección afectada (p. ej. `java`, `springboot`, `azure`, `html,css`, `Infraestructura`).
- Título de máximo ~72 caracteres, verbo en infinitivo: "Agregar", "Actualizar", "Reorganizar", "Corregir"...
- El cuerpo con viñetas es opcional; úsalo solo si hay varios cambios relevantes (archivos nuevos, renombres, reorganización del sidebar...).

## Salida

Muestra el mensaje en un bloque de código y, debajo, una línea con el comando sugerido para que el usuario lo ejecute él mismo, por ejemplo:

```
git commit -m "<título>" -m "<cuerpo>"
```

No ejecutes ese comando.
