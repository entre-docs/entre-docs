---
outline: deep
---

# Scaffold en Jetpack Compose

Scaffold define la estructura esquelética de una pantalla típica en Android, con slots para elementos como barras de navegación y botones flotantes.


## Componentes del Scaffold

|Componente|Descripción|Uso Típico|
|----------|-----------|----------|
|`topBar` | Barra superior (e.g., TopAppBar) | Navegación, título, acciones. |
|`bottomBar` | Barra inferior (e.g., BottomAppBar) | Navegación persistente. |
|`floatingActionButton` | Botón flotante (FAB) | Acciones principales. |
|`drawerContent` | Drawer lateral (ModalDrawer) | Menús de navegación. |
|`content` | Área principal de la pantalla | Contenido dinámico. |


``` kotlin
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.FloatingActionButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.foundation.layout.padding

@Composable
fun MyScaffold() {
    Scaffold(   // [!code ++]
        topBar = {  // [!code ++]
            TopAppBar(title = { Text("Mi App") })
        },
        floatingActionButton = {  // [!code ++]
            FloatingActionButton(onClick = { /* Acción */ }) {
                Text("+")
            }
        }
    ) { innerPadding ->
        Text(
            text = "Contenido de la pantalla",
            modifier = Modifier.padding(innerPadding)
        )
    }
}

@Preview(showBackground = true)
@Composable
fun ScaffoldPreview() {
    GreetingCardTheme {
        MyScaffold()
    }
}
```


::: tip @Preview
Anotación en Jetpack Compose que permite previsualizar la interfaz de usuario definida en una función composable dentro del entorno de desarrollo (Android Studio), sin necesidad de ejecutar la aplicación.
:::
