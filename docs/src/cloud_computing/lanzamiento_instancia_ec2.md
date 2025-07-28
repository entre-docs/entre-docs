---
outline: deep
---

# Instancia EC2

## Lanzamiento de instancia EC2

<p align="center">
  <img src="/ec2/aws_1_pagina_inicio_consola_aws.png" width="800"  alt="ec2 1 - página inicio" />
</p>


1. Página de inicio de la consola de AWS

<br>

<p align="center">
  <img src="/ec2/aws_2_panel_principal_ec2.png" width="800"  alt="ec2 2 - panel principal" />
</p>

2. Menú principal de EC2. Seleccionar "Lanzar la instancia"

<br>

<p align="center">
  <img src="/ec2/aws_3_lanzar_instancia.png" width="800"  alt="ec2 3 - lanzar instancia" />
</p>

3. Dar nombre a la instancia, seleccionar la imagen del sistema operativo

<br>

<p align="center">
  <img src="/ec2/aws_4_tipo_instancia_par_de_claves_config_red.png" width="800"  alt="ec2 4 - nombre y SO" />
</p>

4. Seleccionar el tipo de instancia, par de claves y Configuración de red

<br>


<p align="center">
  <img src="/ec2/aws_5_configuraciones_de_red.png" width="800"  alt="ec2 5 - configuraciones de red" />
</p>

5. Configuración de red previa a lanzar la instancia. Se debe seleccionar la subred **us-east-1a**

<br>


<p align="center">
  <img src="/ec2/aws_6_lanzamiento_de_instancia_correcto.png" width="800"  alt="ec2 6 - lanzamiento correcto" />
</p>

6. Lanzamiento de la instancia correcto

<br>


<p align="center">
  <img src="/ec2/aws_10_grupo_de_seguridad.png" width="800"  alt="ec2 7 - grupo de seguridad" />
</p>

7. Detalle de la instancia: Sección "Seguridad". Al hacer click en el grupo de seguridad, se pueden editar las reglas de entrada.


## Conectar la instancia EC2

Estando en la pantalla "Instancias", se debe hacer click al botón **CONECTAR** para conectarse a la instancia EC2.

<p align="center">
  <img src="/ec2/aws_13_conectar_maquina_ec2.png" width="800"  alt="ec2 8 - conectar máquina ec2" />
</p>

8. Conectando a la instancia EC2

<p align="center">
  <img src="/ec2/aws_14_ingresando_a_consola.png" width="800"  alt="ec2 9 - ingresando a consola" />
</p>

9. Ingresando a la consola


## Instalación de Git

<p align="center">
  <img src="/ec2/aws_15_instalacion_git_parte_1.png" width="800"  alt="ec2 10 - instalación de git 1"/>
</p>

10. Instalación de git. Con los comandos **sudo yum list git** y **sudo yum install git**

<br>

<p align="center">
  <img src="/ec2/aws_16_instalacion_git_parte_2.png" width="800"  alt="ec2 11 - instalación de git 2"/>
</p>

<br>

<p align="center">
  <img src="/ec2/aws_17_instancia_detenida.png" width="800"  alt="ec2 12 - instancia detenida"/>
</p>


11. Instancia detenida. En el botón **Estado de la instancia**, seleccionar "Detener". La IP pública se borra, por lo que al momento de subir nuevamente la instancia, la ip pública será otra.


## IP elástica

Una IP elástica es una dirección IP pública estática que se puede asociar a las instancias EC2.

|Característica   | IP Pública Normal         | IP Elástica                       |
|-----------------|---------------------------|-----------------------------------|
|Asignación       | Automática al iniciar EC2 | Manual, por el usuario            |
|Persisntencia    | Se pierde al detener EC2  | Se mantiene incluso al detener EC2|
|Transferibilidad | No se puede transferir    | Se puede mover entre instancias   |
|Costo            | Gratis                    | Gratis sólo si está en uso        |


<br>

<p align="center">
  <img src="/ec2/aws_18_ip_elastica.png" width="800"  alt="ec2 13 - ip elástica"/>
</p>

12. Creando una IP elástica. En el sidebar "Red y Seguridad", ingresar a "Direcciones IP elásticas" y hacer click al botón **Asignar dirección IP elástica**.


<br>

<p align="center">
  <img src="/ec2/aws_19_asignar_ip_elastica.png" width="800"  alt="ec2 14 - asignar ip elástica"/>
</p>

13. Asignar una dirección IP elástica. Sólo presionar el botón "Asignar".

<br>

<p align="center">
  <img src="/ec2/aws_20_asociar_ip_elastica.png" width="800"  alt="ec2 15 - asociar ip elástica"/>
</p>

14. Asociar la IP elástica.

<br>

<p align="center">
  <img src="/ec2/aws_21_seleccionar_ip_elastica_para_asociar.png" width="800"  alt="ec2 15 - seleccionar ip elástica"/>
</p>

15. Seleccionar IP elástica para asociar. En el botón "Acciones", seleccionar la opción "Dirección IP elástica asociada".

<br>

<p align="center">
  <img src="/ec2/aws_22_direccion_ip_elastica_asociada.png" width="800"  alt="ec2 16 - dirección ip elástica asociada"/>
</p>

16. Dirección IP elástica asociada.

<br>

<p align="center">
  <img src="/ec2/aws_23_ip_elastica_en_ejecucion.png" width="800"  alt="ec2 17 - ip elástica en ejecución"/>
</p>

17. IP elástica en ejecución. Al volver a las instancias, si ésta se detiene, se puede ver que la dirección IPv4 pública se mantiene al refrescar la página.

<br>

<p align="center">
  <img src="/ec2/aws_24_conexion_de_ip_publica.png" width="800"  alt="ec2 17 - conexión de ip"/>
</p>

18. Demostración de la conexión de IP elástica.

<br>

<p align="center">
  <img src="/ec2/aws_25_consola_ip_publica.png" width="800"  alt="ec2 18 - consola con IP elástica"/>
</p>

19. Consola con la IP elástica.