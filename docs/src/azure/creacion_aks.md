---
outline: deep
---

# Creación y despliegue de un clúster AKS

## 1. Acceso a Azure Portal
- Ingresar a [Azure Portal](https://aka.ms/azureportal).
- Crear un **nuevo grupo de recursos** para AKS.


## 2. Creación del Clúster AKS


1. **Iniciar la Creación**:
   - En el menú o búsqueda de Azure Portal, localizar el `Servicio de Kubernetes (AKS)`.
   - Hacer clic en `Crear clúster de Kubernetes`.

----------------------------------

2. **Configuración Básica**:
   - **Suscripción**: Seleccionar `Azure for Students`.
   - **Grupo de recursos**: Elegir el grupo de recursos creado previamente.
   - **Nombre del clúster**: Asignar un nombre único para el clúster AKS.
   - **Región**: Seleccionar `East US 2` como región.
   - **Otros ajustes**: Dejar los valores predeterminados y hacer click en `Siguiente`.

----------------------------------

3. **Configuración de Grupos de Nodos**:
   - **Agentpool Predeterminado**:
     - Seleccionar el `agentpool` predeterminado.
     - Hacer clic en `Cambiar tamaño de nodo`.
     - Configurar:
       - **Recuento mínimo de nodos**: **1**.
       - **Recuento máximo de nodos**: **2**.
     - Dejar el resto por defecto y hacer clic en `Actualizar`. ✅
     ---------------
   - **Agregar Nuevo Grupo de Nodos**:
     - Hacer click en `Agregar grupo de nodos`.
     - Configurar los siguientes parámetros:
       - **Nombre**: `nplinux`. 🐧
       - **Modo**: `Usuario`.
       - **Sistema operativo**: `Ubuntu Linux`. 🐧
       - **Recuento mínimo de nodos**: **1**.
       - **Recuento máximo de nodos**: **2**.
       - **Tamaño del nodo**: Seleccionar **D2s_v3** en `Elegir un tamaño` y hacer click en `Seleccionar`.
     - Hacer click en **Agregar** para crear el grupo de nodos `nplinux`.
   - Dejar los demás parámetros por defecto y seleccionar **Revisar y Crear**.

----------------------------------

4. **Finalizar Creación**:
   - 📝 Revisar todos los detalles en la pantalla de resumen.
   - 🟢 Hacer click en **Crear** para iniciar la creación del clúster.
   - 🏁 Una vez creado, seleccionar `Ir al recurso` para verificar la creación. 🎉


## 3. Conexión al Clúster

- Abrir **Cloud Shell** desde el ícono en la barra superior derecha del Azure Portal.
- Comando para `descargar las credenciales` y configurar la CLI de Kubernetes. 
  ```
  az aks get-credentials --resource-group <nombre-grupo-recursos> --name <nombre-clúster-aks>
  ```

- Comando para `verificar la conexión al clúster` y mostrar la lista de nodos del clúster. 
  ```
  kubectl get nodes
  ```


## 4. Despliegue de la Aplicación

- Usar un archivo de manifiesto (`aks-store-quickstart.yaml`) para desplegar la aplicación AKS Store.
- Guardar el archivo `aks-store-quickstart.yaml` en el disco local.
- En Cloud Shell, seleccionar `Administrar Archivos` > `Cargar` y elegir el archivo `aks-store-quickstart.yaml`.
- Verificar que se haya cargado correctamente.

- Comando para `desplegar la aplicación` usando el manifiesto YAML  
  ```
  kubectl apply -f aks-store-quickstart.yaml
  ```


## 5. Prueba de la Aplicación

- Comando para `comprobar el estado` de los pods
  ```
  kubectl get pods
  ```
  Asegurarse de que todos los pods estén en estado **Running** antes de continuar.

- Comando para obtener la `IP externa` 
  ```
  kubectl get service store-front --watch
  ```
  Copiar la **IP externa** y abrir en un navegador web para ver la aplicación AKS Store en acción.


## 6. Eliminación del Clúster

- Para evitar cargos innecesarios en Azure:
  1. En Azure Portal, ir al grupo de recursos del clúster AKS.
  2. Seleccionar **Eliminar grupo de recursos**.
  3. Ingresar el nombre del grupo de recursos y confirmae la eliminación seleccionando **Eliminar**.



### Instrucciones para Creación de un AKS

Consultar esta guía: <a href="https://drive.google.com/file/d/1AlMQk3TVGIMAR775CRV-8vrmO_2iVCgB/view?usp=drive_link" target="_blank">Creación de AKS</a> 