---
outline: deep
---

# Conceptos básicos

Jetpack Compose es un kit de herramientas moderno para construir interfaces declarativas en Kotlin, optimizando el desarrollo de apps Android eficientes y atractivas.


## Main Activity

Una Activity en Android es responsable de manejar la interacción del usuario en una pantalla específica, como mostrar un formulario, un menú o una lista.

En el contexto de Jetpack Compose, la Activity principal (como MainActivity) inicializa la UI mediante setContent(), que define los elementos visuales usando funciones composables.

Las Activities tienen un ciclo de vida que incluye métodos como onCreate(), onStart(), onResume(), onPause(), onStop(), y onDestroy(), que controlan su comportamiento desde la creación hasta la destrucción.



## Composable Functions

Las Composable Functions son funciones marcadas con `@Composable` que definen elementos de la UI. Son la base de la programación declarativa en Compose.



### Ciclo de Vida y Entrada

En Android, el punto de entrada de una app es `onCreate()`, que inicializa la actividad y llama a `setContent()` para definir la UI.



| **Función**     | **Descripción**    | **Anotación** | **Ubicación**    |
| --------------- | ------------------ | ------------- | ---------------- |
| `main()`     | Punto de inicio en los programas de Kotlin tradicionales. En Android, su rol lo cumple `onCreate()`.| — | Programas Kotlin estándar   |
| `onCreate()`   | Punto de entrada de la app Android. Inicializa la interfaz y llama a `setContent()`.| —   | `MainActivity.kt` |
| `setContent()` | Define el diseño de la interfaz mediante funciones *composables*.   | —   | Dentro de `onCreate()` |
| `Greeting()` | Genera un saludo personalizado en pantalla. | `@Composable` | Archivo principal o módulo UI  |
| `DefaultPreview()` | Permite previsualizar la interfaz sin compilar la app completa. | `@Preview`  | Archivo principal o de vista previa |



::: info main() vs. onCreate()
En programas Kotlin tradicionales, la ejecución comienza en `main()`. En Android, `onCreate()` cumple este rol.
:::

``` kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.Modifier


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState) // [!code ++]
        setContent { // [!code ++]
            GreetingCardTheme {
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

@Composable // [!code ++]
fun Greeting(name: String) {
    Text(text = "Hi, my name is $name!")
}

@Preview(showBackground = true)  // [!code ++]
@Composable
fun DefaultPreview() {
    GreetingCardTheme {
        Greeting("Meghan")
    }
}
```

::: tip @Composable
La anotación @Composable indica que una función genera UI. Estas funciones son reactivas y se recomponen al cambiar estados.
:::

::: tip @Preview
La anotación @Preview permite visualizar la UI en Android Studio sin ejecutar la app.
:::