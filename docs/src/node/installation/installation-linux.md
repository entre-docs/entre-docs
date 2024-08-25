---
outline: deep
---

# Node Version Manager: Linux/Ubuntu

* https://github.com/nvm-sh/nvm

## Instalación

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```
```bash
source ~/.bashrc
```

## Comandos de NVM

* Versión de NVM
```bash
nvm --version
```

* Versiones disponibles de Node
```bash
nvm ls-remote
```

* Instalar una versión de Node
```bash
nvm install <version>
```

* Usar una versión de Node
```bash
nvm use <version>
```

* Versiones instaladas de Node
```bash
nvm list
```


