---
outline: deep
---

# Comandos Básicos


## Ver recursos del cluster

```bash
kubectl get all
```


## Aplicar configuración YAML

```bash
kubectl apply -f archivo.yml
```


## Ver detalles de un recurso

```bash
kubectl describe deployment.apps/mi-deployment
```


## Ver logs de un Pod

```bash
kubectl logs pod/nombre-del-pod
```


## Reiniciar deployment

```bash
kubectl rollout restart deployment mi-deployment
```


## Crear valor en Base64

Ejemplo:

```bash
echo -n postgres | base64
```