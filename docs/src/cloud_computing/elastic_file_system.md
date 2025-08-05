---
outline: deep
---

# Amazon Elastic File System (EFS)

Amazon EFS proporciona **almacenamiento de archivos escalable** para su uso con Amazon EC2. Puede crear un sistema de archivos de EFS y configurar las instancias para montar el sistema de archivos. Puede usar un sistema de archivos de EFS como un origen de datos común para aplicaciones y cargas de trabajo que se ejecutan en varias instancias.


## Instancias EC2

<p align="center">
  <img src="/efs/efs_1.png" width="800"  alt="efs 1" />
</p>

1. Lanzamiento de instancia EC2-A. Sección "Detalle".

<br>

<p align="center">
  <img src="/efs/efs_2.png" width="800"  alt="efs 2" />
</p>

2. Lanzamiento de instancia EC2-B. Sección "Detalle".

<br>

<p align="center">
  <img src="/efs/efs_3.png" width="800"  alt="efs 3" />
</p>

3. Conexión a máquina EC2-A.

<br>

<p align="center">
  <img src="/efs/efs_4.png" width="800"  alt="efs 4" />
</p>

4. Conexión a máquina EC2-B.


## Crear un grupo de seguridad

<br>

<p align="center">
  <img src="/efs/efs_5.png" width="800"  alt="efs 5" />
</p>

5. Crear grupo de seguridad. En el ítem “Red y seguridad”, se selecciona el botón “Crear grupo de seguridad”. Se le asigna un nombre, en este caso My-SG-EFS y la VPC por defecto.


<br>

<p align="center">
  <img src="/efs/efs_6.png" width="800"  alt="efs 6" />
</p>


6. Se le asigna “Reglas de entrada” donde el tipo es NFS, el origen “Personalizado” el cual va a ser el grupo de seguridad creado anteriormente.



## Creación de Sistema de archivos EFS

<br>

<p align="center">
  <img src="/efs/efs_7.png" width="800"  alt="efs 7" />
</p>


7. En la página principal buscar “Elastic File System” y hacer click en el botón “Crear un sistema de archivos”.


<br>

<p align="center">
  <img src="/efs/efs_8.png" width="800"  alt="efs 8" />
</p>


8. Agregar un nombre. Se debe seleccionar la VPC predeterminada y hacer click en el botón “Personalizar”.


<br>

<p align="center">
  <img src="/efs/efs_9.png" width="800"  alt="efs 9" />
</p>


9. Se debe quitar el check a “Permitir copias de seguridad automáticas”. En la sección “Administración del ciclo de vida” se debe seleccionar la opción “Ninguno” en “Transición a infrequent Access” y “Transición a archivo”.


<br>

<p align="center">
  <img src="/efs/efs_10.png" width="800"  alt="efs 10" />
</p>

10. Se puede crear una etiqueta indicando en el campo “Clave de la etiqueta” un nombre y en el campo “Valor de la etiqueta” el valor, en este caso “efsprueba”. Luego seleccionar “Siguiente”.


<br>

<p align="center">
  <img src="/efs/efs_11.png" width="800"  alt="efs 11" />
</p>

11. Entrar al ítem “Grupos de seguridad”. Seleccionar el grupo de seguridad y se puede ver el detalle. Si se hace click en el botón “Editar reglas de seguridad” se puede crear un grupo de seguridad sólo para el EFS que permita la entrada de las EC2.

<br>

<p align="center">
  <img src="/efs/efs_12.png" width="800"  alt="efs 12" />
</p>

12. Creación del grupo de seguridad. Se le asigna el nombre “My-SG-EFS”. La VPC seleccionada es predeterminada y las reglas de entrada se escoge el tipo “NFS”, su origen “Personalizada” y se selecciona el default. Luego se hace click al botón “Crear grupo de seguridad”.

<br>

<p align="center">
  <img src="/efs/efs_13.png" width="800"  alt="efs 13" />
</p>

13. Si se regresa a la lista de grupo de seguridad, se muestra el grupo. Entonces si se regresa a la pestaña EFS, se puede seleccionar el grupo de seguridad que se creó (My-SG-EFS) a ambas zonas de disponibilidad (us-east-1a y us-east-1b). Por último seleccionar el botón siguiente.


<br>

<p align="center">
  <img src="/efs/efs_14.png" width="800"  alt="efs 14" />
</p>


14. El paso “Política de sistema de archivo” no se debe editar, sólo seleccionar “siguiente”. Luego se mostrará un resumen de lo realizado y se hace click al botón “Crear”.



## Montar el EFS en instancias EC2

<p align="center">
  <img src="/efs/efs_15.png" width="800"  alt="efs 15" />
</p>

15. Si se selecciona el nombre del EFS muestra el detalle del EFS creado. El punto de acceso es el que se llama “Nombre de DNS” que está disponible para copiar. Luego se selecciona el botón “Asociar”.


<br>

<p align="center">
  <img src="/efs/efs_16.png" width="800"  alt="efs 16" />
</p>


16. Se abre una ventana donde aparece el comando que se debe ejecutar dentro de la máquina EC2 para que monte el directorio, mediante el cliente de NFS.


<br>

<p align="center">
  <img src="/efs/efs_17.png" width="800"  alt="efs 17" />
</p>

17. Entonces al regresar a las instancias EC2 y seleccionar una, se debe dar click a “Conectar”. De este modo, se abrirá la consola.


<br>

<p align="center">
  <img src="/efs/efs_18.png" width="800"  alt="efs 18" />
</p>


18. En la consola del EC2-A, se debe crear el directorio **efs** mediante el comando **mkdir efs**, se puede chequear que está instalado el efs-utils mediante el comando **sudo yum list nfs-utils**.


<br>

<p align="center">
  <img src="/efs/efs_19.png" width="800"  alt="efs 19" />
</p>


19. En la consola del EC2-B, también se debe crear el directorio **efs** mediante el comando **mkdir efs**


<br>

<p align="center">
  <img src="/efs/efs_20.png" width="800"  alt="efs 20" />
</p>


20. Al regresar a la pantalla de EFS, se copia el comando para montar el sistema de archivo EFS mediante el cliente de NFS.


<br>

<p align="center">
  <img src="/efs/efs_21.png" width="800"  alt="efs 21" />
</p>


21. En la instancia EC2-A, una vez montado el EFS instalamos los nfs-utils mediante el comando **sudo yum list nfs-utils**


<br>

<p align="center">
  <img src="/efs/efs_22.png" width="800"  alt="efs 22" />
</p>


22. Se monta el EFS mediante el comando **sudo mount -t …. / efs** que se copió anteriormente.

- Se ejecuta el comando **cd efs/** para ingresar a la carpeta efs.
- Se ejecuta el comando **pwd** para saber en qué directorio se encuentra posicionado.
- Se ejecuta el comando **df -hT .** para ver la información del sistema de archivo donde se está ubicado, y se puede ver que está el punto de montaje.


## Pruebas de acceso compartido

<p align="center">
  <img src="/efs/efs_23.png" width="800"  alt="efs 23" />
</p>

23. En máquina EC2-A, dentro del directorio efs, se crean los archivos archivo1.txt y archivo2.txt mediante el comando **sudo touch archivo1.txt** y **sudo touch archivo2.txt**. Se muestran que ya están creados mediante el comando **ls -ltr**

<br>

<p align="center">
  <img src="/efs/efs_24.png" width="800"  alt="efs 24" />
</p>


24. Luego, en la máquina EC2-B, se crea el directorio efs mediante el comando mkdir efs y con el comando ls -ltr se verifica que ya está creado el efs. Entonces se ejecuta el comando sudo mount… efs


<br>

<p align="center">
  <img src="/efs/efs_25.png" width="800"  alt="efs 25" />
</p>


25. Una vez ejecutado el comando sudo mount en la máquina EC2-B, se procede a listar los archivos con el comando ls -ltr donde se puede ver el directorio efs creado. Luego se ingresa a esta carpeta usando el comando cd efs/ y estando dentro de efs se ejecuta el comando ls -ltr donde se puede ver los archivos compartidos que fueron creados en la instancia EC2-A.



## Persistencia

Para prevenir y que la máquina, en caso de un reinicio o apagado, siempre levante un punto de montaje, lo ideal es que la máquina vuelva a estar disponible con la misma data persistente y se pueda ver los mismos archivos que contenga para leerlos o editarlos. Para eso, se debe dejar fijo en un archivo de configuración que se llama **fstab** donde se encuentran todos los puntos de montaje de la máquina linux.


<p align="center">
  <img src="/efs/efs_26.png" width="800"  alt="efs 26" />
</p>


26. Mediante el comando **sudo vim /etc/fstab** se ingresa al archivo de configuración.

<br>

<p align="center">
  <img src="/efs/efs_27.png" width="800"  alt="efs 27" />
</p>


27. Copiar el Nombre de DNS del EFS.


<br>

<p align="center">
  <img src="/efs/efs_28.png" width="800"  alt="efs 28" />
</p>

28. Dentro de la consola de la EC2-B se agrega esta línea (con la letra **a** se ingresa a modo de edición). Se debe tener en cuenta que la primera línea de color celeste corresponde al nombre de DNS del EFS. Luego se digita **Esc** + **:wq!** para salir del modo edición.


<br>

<p align="center">
  <img src="/efs/efs_29.png" width="800"  alt="efs 29" />
</p>

29. Se verifica que el archivo está editado con el comando df -hT . , luego se regresa un directorio con el comando cd .. para salir de la carpeta efs, por último, se ejecuta el comando sudo umount /home/ec2-user/efs para desmontar el efs.

<br>

<p align="center">
  <img src="/efs/efs_30.png" width="800"  alt="efs 30" />
</p>

30. Si se vuelve a ingresar al directorio efs (**cd efs/**) y se ejecuta nuevamente el comando **df -hT .** , se puede ver que ya no está montado.

<br>

<p align="center">
  <img src="/efs/efs_31.png" width="800"  alt="efs 31" />
</p>

31. En la máquina EC2-B, se regresa un directorio (cd ..) y se ejecuta el comando sudo reboot con el fin de no ejecutar el comando mount nuevamente, ya que solo por defecto, al editar el archivo fstab queda por defecto dentro de los sistemas de arranque.

<br>

<p align="center">
  <img src="/efs/efs_32.png" width="800"  alt="efs 32" />
</p>

32. Mientras tanto,  en la máquina EC2-A se comprueba que está montado con el comando **df -hT .** y se pueden ver los archivos con el comando **ls -ltr**

<br>

<p align="center">
  <img src="/efs/efs_33.png" width="800"  alt="efs 33" />
</p>


33. Se regresa un directorio con el comando **cd ..** y se ejecuta el comando **sudo umount /home/ec2-user/efs** para desmontar el efs.


<br>

<p align="center">
  <img src="/efs/efs_34.png" width="800"  alt="efs 34" />
</p>

34. Se monta el EFS en la EC2-A


<br>

<p align="center">
  <img src="/efs/efs_35.png" width="800"  alt="efs 35" />
</p>

35. Se monta el EFS en la EC2-B


<br>

<p align="center">
  <img src="/efs/efs_36.png" width="800"  alt="efs 36" />
</p>


36. En el EC2-A, dentro de la carpeta efs/ con el comando **ls -ltrh** se muestran los archivos creados


<br>

<p align="center">
  <img src="/efs/efs_37.png" width="800"  alt="efs 37" />
</p>


36. En el EC2-B, dentro de la carpeta efs/ con el comando **ls -ltrh** se muestran los archivos creados