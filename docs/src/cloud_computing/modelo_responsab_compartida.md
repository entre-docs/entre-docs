---
outline: deep
---

# Modelo de Responsabilidad Compartida

En AWS, la seguridad y conformidad se basan en un modelo de responsabilidad compartida entre AWS y el cliente.


## Responsabilidad de AWS

AWS es responsable de:

* Operar, administrar y controlar los componentes del sistema operativo host.
* Gestionar la capa de virtualización.
* Asegurar la infraestructura física en la que funcionan los servicios (data centers, red, hardware, etc.).

Este enfoque permite aliviar la carga operativa del cliente, ya que AWS se encarga de gran parte de la infraestructura subyacente.


## Responsabilidad del cliente

El cliente es responsable de:

* Administrar el sistema operativo invitado (actualizaciones, parches de seguridad).
* Gestionar cualquier software de aplicaciones que instale.
* Configurar correctamente el firewall y los grupos de seguridad proporcionados por AWS.


## Consideraciones

Es importante que los clientes:

* Evalúen cuidadosamente los servicios que eligen.
* Comprendan que las responsabilidades varían según el tipo de servicio usado (IaaS, PaaS, SaaS).
* Tengan en cuenta la integración de estos servicios en su entorno de TI.
* Consideren las leyes y regulaciones que aplican a su industria o región.


<p align="center">
  <img src="/cloud_mod_respons_compartida.png" width="800" alt="modelo_responsabilidad_compartida"/>
</p>