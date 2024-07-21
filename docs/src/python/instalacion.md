---
outline: deep
---

# Instalación de Python en Windows

## [Pyenv](https://github.com/pyenv-win/pyenv-win): Python version management

## Instalar usando Git

La forma predeterminada de instalar pyenv-win requiere comandos de git. Necesitas instalar git/git-bash para Windows.

PowerShell o Git Bash: usar $HOME en lugar de %USERPROFILE%.

Para clonar con git desde la línea de comandos, usar el siguiente comando:

```bash
git clone https://github.com/pyenv-win/pyenv-win.git "$HOME.pyenv"
```

## *Opcional: Ejecutar Scripts en PowerShell
```bash
Set-ExecutionPolicy unrestricted
```

## Agregar Configuraciones del Sistema

1. Añadir PYENV, PYENV_HOME y PYENV_ROOT a las variables de ntorno
```bash
[System.Environment]::SetEnvironmentVariable('PYENV', $env:USERPROFILE + "\.pyenv\pyenv-win\", "User")
[System.Environment]::SetEnvironmentVariable('PYENV_ROOT', $env:USERPROFILE + "\.pyenv\pyenv-win\", "User")
[System.Environment]::SetEnvironmentVariable('PYENV_HOME', $env:USERPROFILE + "\.pyenv\pyenv-win\", "User")
```

2. Añadir las siguientes rutas a PATH de usuario para acceder al comando pyenv
```bash
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

## Comandos para pyenv

* **Listar versiones de Python existente**: ```pyenv install -l```
* **Instalar una version python**: ```pyenv install [PYTHON_VERSION]```
* **Listar las versiones de Python instaladas**: ```pyenv versions```
* **Uso local(directorio) de una versión de Python**: ```pyenv local [PYTHON_VERSION]```
* **Uso global de una versión de Python**: ```pyenv global [PYTHON_VERSION]```

