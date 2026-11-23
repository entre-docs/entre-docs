---
outline: deep
---

# Bloque static de Java


Es un bloque de código dentro de una clase que se ejecuta una única vez cuando la clase se carga en memoria **antes de que se cree cualquier objeto y antes de que se ejecute**.

Son útiles para poder inicializar varibales estlaticas y configurar recursos globales para la ejecución de la aplicación.

``` java
// Declaración de bloque estatico
public class Usuario {

    static {
        System.out.println("Se está cargando la clase Usuario");
    }

}
```
Cuando Java carga la clase Usuario, ejecuta automáticamente el bloque static.

## Ejecución bloque estático

```java
public class Usuario {

    static {
        System.out.println("1. Bloque static ejecutado");
    }

    public Usuario() {
        System.out.println("3. Constructor ejecutado");
    }

    public static void main(String[] args) {

        System.out.println("2. Método main ejecutado");

        Usuario usuario1 = new Usuario();
        Usuario usuario2 = new Usuario();
    }
}
```
Salida:
1. Bloque static ejecutado
2. Método main ejecutado
3. Constructor ejecutado
3. Constructor ejecutado


## Diferencias entre bloque static, método static y constructor

| Elemento | ¿Cuándo se ejecuta? |
|-----------------|--------------------------------|
| Bloque static | Cuando se inicializa la clase. |
| Método static | Cuando se invoca. |
| Constructor | Cada vez que se crea un objeto. |


 
::: tip Un Detalle Importante
Dentro de un bloque static se puede acceder directamente a atributos y métodos estáticos, pero no se puede acceder directamente a atributos o métodos de instancia, porque todavía no hay un objeto específico.
:::