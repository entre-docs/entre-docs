---
outline: deep
---

# Despliegue de PostgreSQL y pgAdmin


## Crear Secrets

Una vez creados los archivos:

- `pg-admin.yml`
- `pg-admin-secrets.yml`

Primero se deben aplicar los secrets:

```bash
kubectl apply -f pg-admin-secrets.yml
```

Luego aplicar el deployment:

```bash
kubectl apply -f pg-admin.yml
```



## Revisar recursos del cluster

```bash
kubectl get all
```

Ejemplo de salida:

```txt
NAME                                       READY   STATUS    RESTARTS        AGE
pod/pg-admin-deployment-65ff48jy45-tyhj2   1/1     Running   6 (3m12s ago)   11m
pod/postgres-deployment-987mjk4sw4-4jugt   1/1     Running   0               51m

NAME                       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/kubernetes         ClusterIP   10.65.0.3        <none>        443/TCP        3h23m
service/pg-admin-service   NodePort    10.160.178.456   <none>        80:30200/TCP   2m59s
service/postgres-service   ClusterIP   10.160.700.586   <none>        5432/TCP       51m

NAME                                  READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/pg-admin-deployment   1/1     1            1           11m
deployment.apps/postgres-deployment   1/1     1            1           51m

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/pg-admin-deployment-65gh78gh44   1         1         1       11m
replicaset.apps/postgres-deployment-621ghn3vb5   1         1         1       51m
```



## Ver detalles del deployment

```bash
kubectl describe deployment.apps/pg-admin-deployment
```



## Ver logs

```bash
kubectl logs pod/pg-admin-deployment-65ff48jy45-tyhj2
```



## Reaplicar cambios

Si se modifica un archivo `.yml`, se debe volver a aplicar:

```bash
kubectl apply -f pg-admin-secrets.yml
```



## Abrir pgAdmin

```bash
minikube service pg-admin-service
```