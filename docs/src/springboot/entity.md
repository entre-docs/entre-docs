---
outline: deep
---

# Entity

Las entidades representan objetos de datos persistentes en la base de datos. Son anotadas con **@Entity** y se utilizan para mapear objetos Java a tablas en la base de datos.

```java
package cl.albania.todolist.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity // [!code ++]
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @Column(nullable = false)
    private boolean completed;

}
```