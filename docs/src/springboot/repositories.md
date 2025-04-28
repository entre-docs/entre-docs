---
outline: deep
---

# Repositories

Los repositorios son interfaces que se utilizan para **interactuar con la base de datos** de manera sencilla y abstraída.

Estos extienden **JpaRepository** u otra interfaz específica de Spring Data.

```java
package cl.albania.todolist.repositories;

import cl.albania.todolist.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // [!code ++]
public interface TaskRepositories extends JpaRepository<Task,Long> {}
```