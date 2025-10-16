---
outline: deep
---

# JetPack Compose


Android Studio es el entorno de desarrollo integrado (IDE) oficial para crear aplicaciones Android.
Ofrece herramientas completas para diseñar, programar, probar y depurar apps, integrando
compatibilidad con **Jetpack Compose**, un moderno kit de herramientas para construir interfaces
declarativas en Kotlin. Permite optimizar el flujo de trabajo y desarrollar proyectos eficientes y
atractivos para múltiples dispositivos.


| Método / Función | Descripción  |
| ---------------- | ------------ |
| `onCreate()`     | Método fundamental del ciclo de vida de una actividad en Android. Se ejecuta cuando la actividad se crea por primera vez y es el punto de inicio para inicializar componentes, definir la interfaz de usuario y configurar datos iniciales. En proyectos con Jetpack Compose, suele llamar a `setContent()` para renderizar la UI. |
| `setContent()`   | Función usada en proyectos con Jetpack Compose para definir la interfaz de usuario de manera declarativa. Se invoca dentro de `onCreate()` y recibe un bloque de código con funciones `@Composable` que describen qué y cómo se mostrará en pantalla, reemplazando el tradicional uso de archivos XML. |





## Actualizar el texto del proyecto

::: info
En los programas de Kotlin convencionales, la ejecución comienza en la función main().
En Android, este rol lo asume onCreate(), que pertenece al ciclo de vida de la actividad principal.
:::


<!-- <br>
<p align="center">
  <img src="/kotlin_actualizar_texto.png" width="800" alt="kt_actualizar_texto"/>
</p> -->


| **Función**     | **Descripción**    | **Anotación** | **Ubicación**    |
| --------------- | ------------------ | ------------- | ---------------- |
| `main()`     | Punto de inicio en los programas de Kotlin tradicionales. En Android, su rol lo cumple `onCreate()`.| — | Programas Kotlin estándar   |
| `onCreate()`   | Punto de entrada de la app Android. Inicializa la interfaz y llama a `setContent()`.| —   | `MainActivity.kt` |
| `setContent()` | Define el diseño de la interfaz mediante funciones *composables*.   | —   | Dentro de `onCreate()` |
| `Greeting()` | Genera un saludo personalizado en pantalla. | `@Composable` | Archivo principal o módulo UI  |
| `DefaultPreview()` | Permite previsualizar la interfaz sin compilar la app completa. | `@Preview`  | Archivo principal o de vista previa |



``` kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) { // [!code ++]
        super.onCreate(savedInstanceState) // [!code ++]
        setContent {
            GreetingCardTheme {
                // A surface container using the 'background' color 
                // from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String) { // [!code ++]
    Text(text = "Hi, my name is $name!")
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() { // [!code ++]
    GreetingCardTheme {
        Greeting("Meghan")
    }
}
```

## Actualizar el color de fondo

El contenedor Surface tiene un parámetro color.

```kotlin 
import androidx.compose.ui.graphics.Color


@Composable
fun Greeting(name: String) {
    Surface(color = Color.Blue) { // [!code ++]
        Text(text = "Hi, my name is $name!")
    }
}
```



## Agregar padding al proyecto

Se usa un **Modifier** para aumentar o decorar un elemento que admite composición. Un modificador que puedes usar es el modificador padding, que agrega espacio alrededor del elemento (en este caso, el texto). Esto se logra mediante la función Modifier.padding()


``` kotlin
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.padding

@Composable
fun Greeting(name: String) {
    Surface(color = Color.Magenta) {
        Text(
            text = "Hi, my name is $name!",
            modifier = Modifier.padding(24.dp) // [!code ++]
            )
    }
}
```