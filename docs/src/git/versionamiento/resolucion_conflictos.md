---
outline: deep
---

# Comandos para resolución de conflictos


## Cancelar una fusión en curso

Si ocurre un conflicto durante la fusión y decides no continuar, utiliza este comando:

```bash
git merge --abort
```

Este comando se utiliza para cancelar una fusión de ramas en curso si algo sale mal o si decides no continuar con la fusión.

Este comando solo funciona si no has hecho modificaciones en los archivos afectados después de iniciar la fusión. Si modificaste algo, es posible que Git no pueda abortar la fusión automáticamente.