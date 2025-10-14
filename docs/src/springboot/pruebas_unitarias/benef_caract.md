---
outline: deep
---

# Beneficios y características de las pruebas en Springboot

Las pruebas unitarias son una práctica de programación que implica verificar cada unidad individual de código para asegurar que funciona correctamente. Una unidad puede ser un método, una clase o incluso un módulo.


## Beneficios de las pruebas

- Detección temprana de errores
- Facilitan el mantenimiento del código
- Sirven como documentación adicional



## Características de JUnit

JUnit es el **marco de pruebas más utilizado en Java**, diseñado para facilitar la creación, organización y ejecución de pruebas unitarias.

Está compuesto por **tres módulos principales**:

| 🧩 Módulo | 💡 Descripción |
|-----------|----------------|
| **JUnit Platform** | Define la base sobre la cual se ejecutan las pruebas y los motores de test. |
| **JUnit Jupiter** | Proporciona la nueva API y las anotaciones modernas de JUnit 5. |
| **JUnit Vintage** | Permite ejecutar pruebas escritas en versiones anteriores (JUnit 3 y 4). |

---

::: info 🧭 **Anotaciones principales en JUnit**
Las anotaciones permiten controlar el ciclo de vida de las pruebas.
:::

| 🏷️ Anotación | 📝 Descripción |
|---------------|----------------|
| **`@Test`** | Indica que el método es una prueba unitaria. |
| **`@BeforeEach` / `@AfterEach`** | Se ejecutan antes y después de **cada** prueba. |
| **`@BeforeAll` / `@AfterAll`** | Se ejecutan una sola vez, antes y después de **todas** las pruebas de la clase. |
| **`@DisplayName`** | Permite asignar un nombre descriptivo y legible a la prueba. |

---

::: tip ✅ **Assertions más comunes**
Las *assertions* permiten verificar los resultados esperados durante la ejecución de las pruebas.
:::

| 🧪 Assertion | 🧠 Propósito |
|---------------|--------------|
| **`assertEquals(a, b)`** | Verifica que dos valores sean iguales. |
| **`assertTrue(condición)` / `assertFalse(condición)`** | Comprueba si una condición es verdadera o falsa. |
| **`assertNull(obj)` / `assertNotNull(obj)`** | Verifica si un objeto es nulo o no nulo. |
| **`assertThrows(Exception.class, ...)`** | Comprueba que se lance una excepción específica. |

---

📘 *En conjunto, JUnit permite escribir pruebas más legibles, organizadas y confiables para asegurar la calidad del código en proyectos Java.*
