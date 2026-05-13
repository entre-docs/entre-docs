---
outline: deep
---


# Backend App

## Crear Secrets

Crear los archivos:

- `backend-secrets.yml`
- `backend.yml`

Aplicar primero los secrets:

```bash
kubectl apply -f backend-secrets.yml
```

Luego aplicar el deployment:

```bash
kubectl apply -f backend.yml
```



## Ver detalles del deployment

```bash
kubectl describe deployment.apps/backend-deployment
```


## Ver logs del backend

```bash
kubectl logs pod/backend-deployment-689c64d594-cswdq
```


## Reiniciar deployment

Si se cambia información sensible, como una contraseña en un Secret, se puede reiniciar el deployment:

```bash
kubectl rollout restart deployment backend-deployment
```



## Probar Backend

### Revisar servicios

```bash
kubectl get all
```

::: tip Buscar el servicio:

**service/backend-service**
:::


### Abrir servicio

```bash
minikube service backend-service
```


## Limpiar cluster

### Eliminar Minikube

```bash
minikube delete --all
```