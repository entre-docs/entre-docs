---
outline: deep
---

# Comandos Cron y Rsync

## Programar tareas automáticas

cron es un sistema para programar tareas automáticas en Linux, ejecutando comandos o scripts en momentos específicos (por ejemplo, cada hora, día, etc.). Las tareas se definen en un archivo llamado crontab.

```bash
cron [opciones]
```

|Opciones|Resultado|
|--------|---------|
|-e      |Edita el archivo crontab del usuario actual.|
|-l      |Lista las tareas programadas.|
|-r      |Elimina el crontab del usuario.|


* Formato de una entrada en crontab:
```txt
* * * * * /ruta/al/script.sh
```

Los cinco asteriscos representan: minuto, hora, día del mes, mes, día de la semana. Un asterisco (*) significa "cada".


### Ejemplo

1. Ejecutar un script cada día a las 2 a.m.

```bash
crontab -e
```

* Añadir al archivo crontab:
```txt
0 2 * * * /home/usuario/backup.sh
```


2. Ejecutar un comando cada 5 minutos

* Escribe "Hola" en log.txt cada 5 minutos
```bash
*/5 * * * * /usr/bin/echo "Hola" >> /home/usuario/log.txt

```


3. Listar tareas programadas

* Muestra el contenido del crontab del usuario actual
```bash
crontab -l
```


4. Programar una tarea para un usuario específico

* Edita el crontab del usuario 'juan'
```bash
sudo crontab -u juan -e
```

ELIMINAR EL CRON ????????


## Sincronizar archivos y directorios

rsync es una herramienta para sincronizar archivos y directorios entre dos ubicaciones (locales o remotas), optimizando la transferencia al copiar solo las diferencias.

```bash
rsync [opciones] origen destino
```

|Opciones   |Resultado  |
|-----------|-----------|
|-a         |Modo archivo (preserva permisos, propietarios, enlaces, etc.).|
|-v         |Modo detallado (muestra el progreso).|
|-r         |Copia recursiva (incluye subdirectorios).|
|-z         |Comprime datos durante la transferencia.|
|--delete   |Elimina archivos en el destino que no están en el origen.|
|-e         |Especifica el protocolo remoto (por ejemplo, SSH).|


### Ejemplos

1. Sincronizar un directorio localmente

* Copia el contenido de /home/usuario/fotos a /backups/fotos, preservando permisos y mostrando detalles.

```bash
rsync -av /home/usuario/fotos /backups/fotos
```


2. Sincronizar con un servidor remoto vía SSH

* Sincroniza documentos con un servidor remoto, usando compresión (-z) y SSH.

```bash
rsync -avz -e ssh /home/usuario/documentos usuario@servidor:/ruta/remota
```


3. Sincronizar eliminando archivos obsoletos

* Sincroniza proyectos y elimina en /backups/proyectos cualquier archivo que no esté en el origen.

```bash
rsync -av --delete /home/usuario/proyectos /backups/proyectos
```


4. Excluir archivos o directorios

* Sincroniza todo menos los archivos con extensión .log

```bash
rsync -av --exclude '*.log' /home/usuario /backups
```


5. Sincronización en seco (prueba sin cambios reales)

* Muestra qué se sincronizaría sin realizar cambios.

```bash
rsync -av --dry-run /home/usuario /backups
```

### Datos sobre rsync

* Es ideal para copias de seguridad o sincronización entre servidores.
* Usa SSH para transferencias seguras a servidores remotos.
* Verifica los permisos en el destino para evitar errores.