# Conectar mútiples cuentas de GitHub con claves SSH - Windows

## 1. Iniciar el Servicio Open SSH Authentication Agent de Windows

<p align="center">
  <img src="/open-ssh-service.png" width="800" alt="ssh"/>
</p>


## 2. Generar claves SSH

::: info
Generar clave SSH pública y privada en ~/.ssh
:::

```bash
ssh-keygen -t rsa -b 4096 -C "githubuser"
```

::: info
- Ingresar directorio donde se guardará la clave.
- Se crearán 2 archivos: **personal_key** y **personal_key.pub**
:::

```bash
C:\Users\<nombre-usuario>/.ssh/personal_key
```
::: info
Registrar la clave SSH al agente
:::

```bash
ssh-add C:\Users\<nombre-usuario>\.ssh\personal_key
ssh-add C:\Users\<nombre-usuario>\.ssh\work_key
```

## 3. Configurar el archivo SSH Config

* Crear archivo config en la carpeta .ssh y agregar la siguiente configuración para múltiples cuentas:

::: code-group
```bash [config]
# Personal Github
Host personal
    Hostname github.com
    User git
    IdentityFile ~/.ssh/personal_key
    IdentitiesOnly yes

# Work Github
Host work
    Hostname github.com
    User git
    IdentityFile ~/.ssh/work_key
    IdentitiesOnly yes
```
:::

::: tip
Esto permite usar diferentes claves SSH para diferentes cuentas de GitHub.
:::

## 4. Registrar clave SSH pública en GitHub

<p align="center">
  <img src="/github-ssh.png" width="800" alt="github-ssh"/>
</p>


## 5. Verificar conexión SSH con servidores de GitHub

```bash
ssh -Tv <nombre-host>
```

## 6. Configurar archivos .gitconfig

* **.gitconfig**: agrega configuraciones globales y define reglas según directorio
* **.gitconfig-work**: define la configuración para los repositorios de trabajo
* **.gitconfig-personal**: define la configuración para los repositorios personales


::: code-group
```bash [.gitconfig]
[core]
    editor = \"C:\\Users\\<nombre-usuario>\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code\" --wait
    sshCommand = C:/Windows/System32/OpenSSH/ssh.exe

[user]
    name = Nombre de Usuario Personal
    email = personal@correo.com

[includeIf "gitdir:C:/Work/"]
    path = C:/Work/.gitconfig-work

[includeIf "gitdir:C:/Proyectos/"]
    path = C:/Proyectos/.gitconfig-personal
```
```bash [.gitconfig-work]
[user]
    name = Nombre de Usuario Work
    email = work@correo.com
    
[core]
    sshCommand = ssh -i ~/.ssh/work_key
```
```bash [.gitconfig-personal]
[user]
    name = Nombre de Usuario Personal
    email = personal@correo.com
    
[core]
    sshCommand = ssh -i ~/.ssh/personal_key
```
:::

## 7. Clonar repositorio mediante SSH

::: tip INFO
git clone nombre-Host-SSH:usuario-github/repositorio.git
:::

```bash
git clone personal:user-github/repository.git
```
