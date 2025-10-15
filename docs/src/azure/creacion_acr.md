---
outline: deep
---

# Creación de un ACR

## Validación de máquina virtual creada y grupo de recursos en Azure Portal

1. Validar que se esté ejecutando la máquina virtual en Azure Portal
2. Si no está en ejecución se debe desplegar nuevamente a través del pipeline de despliegue de infraestructura
3. Confirmar la IP pública de la máquina virtual
4. Contar con un grupo de recursos creado, ideal mismo donde reside la máquina virtual.

## Creación de imagen Docker y subir a ACR

1. Creación de Registro de contenedor (ACR).
2. Creación de imagen Docker (Dockerfile) “ej. Imagen nginx” y sus archivos de
configuración default.conf y index.html.
3. Creación de código pipeline en yaml para subir imagen Dockerfile a ACR.
4. Subir archivos a GitHub: Dockerfile, default.conf, index.html en una estructura de
directorio.
5. Subir archivo código pipeline a GitHub para subir imagen Dockerfile hacia ACR.
6. Crear Service Connections Docker Registry de tipo Azure Container Registry.

7. Creación y Ejecución de Azure Pipeline con código YAML desde repositorio GitHub
para subir imagen Dockerfile.
8. Evidencias de la ejecución del pipeline en Azure Portal sección Registros de
contenedor y validar que este la imagen subida.

## Preparar ambiente y ejecución del Pipeline

1. Crear Service Connections con Azure Resource Manager y el grupo de recurso.
2. Crear un entorno en Azure pipeline para registrar la máquina virtual y dar permisos al
repositorio pipeline.
3. Creación de código pipeline en yaml para instalar Docker, azure cli y hacer pull y run
de imagen en ACR.
4. Subir archivo código pipeline a GitHub para posterior ejecución en Azure Pipeline.
5. Creación y Ejecución de Azure Pipeline con código YAML desde repositorio GitHub
para instalar y ejecutar Docker con la imagen nginx y página de bienvenida.
6. Revisión de la ejecución del job del pipeline.
7. Ejecutar IP publica de la máquina virtual en navegador web.
8. Evidencias de la ejecución del pipeline desde máquina virtual como ejecución de
Docker ps.



### Instrucciones para Configuración y Optimización de Contenedores

Consulta esta guía: <a href="https://drive.google.com/file/d/1yh1iA30x4eDQad0yutha0ApkOH9fK6VI/view?usp=drive_link" target="_blank">Máquina Virtual y ACR</a>