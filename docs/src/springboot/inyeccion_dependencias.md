---
outline: deep
---

# Inyección de Dependencias

La **Inyección de Dependencias** (Dependency Injection o DI) es un principio de diseño en el que un objeto no crea sus propias dependencias, sino que las recibe desde afuera. Spring Boot gestiona esto automáticamente a través de su contenedor de inversión de control (IoC Container).

En lugar de hacer esto:

```java
// ❌ Sin inyección de dependencias
public class TaskServiceImpl {
    private TaskRepository taskRepository = new TaskRepository();
}
```

Spring se encarga de crear y entregar la instancia:

```java
// ✅ Con inyección de dependencias
public class TaskServiceImpl {
    @Autowired
    private TaskRepository taskRepository; // Spring lo inyecta
}
```

## Bean

Un **Bean** es cualquier objeto que Spring crea y administra. Spring detecta los beans automáticamente gracias a las anotaciones. Las más comunes son:

| Anotación | Uso |
|-----------|-----|
| `@Component` | Clase genérica gestionada por Spring |
| `@Service` | Clase de lógica de negocio |
| `@Repository` | Clase de acceso a datos |
| `@Controller` / `@RestController` | Clase de controlador HTTP |

Todas estas anotaciones son variantes de `@Component`. Spring las escanea al iniciar la aplicación y registra los beans en su contenedor.

## @Autowired

`@Autowired` le indica a Spring que debe **inyectar automáticamente** una dependencia en ese campo, constructor o método. Spring busca en su contenedor un bean del tipo indicado y lo entrega.

### Inyección por campo

Es la forma más directa y común en proyectos pequeños:

```java
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired // [!code ++]
    private TaskRepository taskRepository;
}
```

### Inyección por constructor

Es el enfoque **recomendado** porque hace las dependencias explícitas y facilita las pruebas unitarias:

```java
@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Autowired // [!code ++]
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
}
```

::: tip Lombok + constructor
Con Lombok puedes reemplazar el constructor manual usando `@RequiredArgsConstructor`. Spring inyecta automáticamente los campos `final`:

```java
@Service
@RequiredArgsConstructor // [!code ++]
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository; // se inyecta automáticamente
}
```
:::

### Inyección por setter

Menos común, útil cuando la dependencia es opcional:

```java
@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    @Autowired // [!code ++]
    public void setTaskRepository(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
}
```

## Flujo completo en la arquitectura

Así es como Spring conecta las capas de un proyecto típico:

```
Spring IoC Container
       │
       ├── crea TaskRepository  (bean @Repository)
       ├── crea TaskServiceImpl (bean @Service)  ← inyecta TaskRepository
       └── crea TaskController  (bean @RestController) ← inyecta TaskService
```

```java
// Repository — creado por Spring
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {}

// Service — Spring inyecta el Repository
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;
}

// Controller — Spring inyecta el Service
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;
}
```

## ¿Cuándo falla @Autowired?

Spring construye todos los beans al arrancar la aplicación. Si en ese momento no puede resolver una dependencia, lanza un error **antes de que la app esté disponible**. Hay dos casos típicos:

---

### Caso 1: No encuentra ningún bean — `NoSuchBeanDefinitionException`

Ocurre cuando la clase que intentas inyectar **no está anotada** con `@Service`, `@Repository`, `@Component`, etc. Spring no la conoce porque nunca la registró.

```java
// ❌ Le falta @Service — Spring no sabe que existe
public class TaskServiceImpl implements TaskService {
    ...
}

// En el Controller, Spring no encuentra ningún bean de tipo TaskService
@Autowired
private TaskService taskService; // 💥 NoSuchBeanDefinitionException
```

**Solución:** agregar la anotación correspondiente.

```java
@Service // [!code ++]
public class TaskServiceImpl implements TaskService {
    ...
}
```

---

### Caso 2: Encuentra más de un bean — `NoUniqueBeanDefinitionException`

Ocurre cuando tienes **dos o más clases** que implementan la misma interfaz y ambas están anotadas. Spring no sabe cuál de las dos inyectar.

```java
@Service
public class TaskServiceImpl implements TaskService { ... }

@Service
public class TaskServiceV2 implements TaskService { ... }

// Spring tiene dos candidatos y no sabe cuál elegir
@Autowired
private TaskService taskService; // 💥 NoUniqueBeanDefinitionException
```

**Solución:** usar `@Qualifier` para indicarle a Spring exactamente cuál bean quieres:

```java
@Autowired
@Qualifier("taskServiceImpl") // [!code ++]
private TaskService taskService; // ahora Spring sabe cuál usar
```

::: tip
El nombre que se le pasa a `@Qualifier` es el nombre del bean, que por defecto es el nombre de la clase con la primera letra en minúscula. `TaskServiceImpl` → `"taskServiceImpl"`.
:::
