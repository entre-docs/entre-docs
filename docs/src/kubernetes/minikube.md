---
outline: deep
---

# Minikube

Minikube permite ejecutar Kubernetes localmente.

Descargar Minikube [aquí](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fdebian+package)


## Instalación de kubectl

* Ubuntu / Debian

```bash
sudo snap install kubectl --classic
```

* Verificar instalación:

```bash
kubectl version --client
```



## Instalación de Minikube

### Ver arquitectura

```bash
uname -m
```


### Ver distribución Linux

```bash
cat /etc/os-release
```


### Descargar Minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
```

### Instalar

```bash
sudo dpkg -i minikube_latest_amd64.deb
```

### Verificar instalación

```bash
minikube version
```


### Iniciar cluster

```bash
minikube start --driver=docker
```


### Ver nodos

```bash
kubectl get nodes
```


### Eliminar cluster

```bash
minikube delete --all
```