---
outline: deep
---

# Navegación en Jetpack Compose

Jetpack Compose usa la biblioteca **Navigation** para gestionar pantallas.


## NavHost

Es el contenedor que gestiona los destinos de navegación.

Se debe agregar la siguiente dependencia en el archivo `build.gradle`:

``` kotlin
implementation "androidx.navigation:navigation-compose:2.7.0"
```
<br>

``` kotlin
import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.compose.material3.Text

@Composable
fun Navigation() {
    val navController = rememberNavController()
    NavHost(navController, startDestination = "home") { // [!code ++]
        composable("home") {
            Text("Pantalla Principal")
            // navController.navigate("details/123")
        }
        composable(
            route = "details/{id}",
            arguments = listOf(navArgument("id") { type = NavType.StringType })
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id")
            Text("Detalles del ID: $id")
        }
    }
}
```


## Arguments

Pasa datos entre pantallas usando argumentos en la ruta.


``` kotlin
import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.NavType
import androidx.navigation.navArgument
import androidx.compose.material3.Text

@Composable
fun NavigationWithArgs() {
    val navController = rememberNavController()
    NavHost(navController, startDestination = "home") {
        composable("home") {
            Text("Home")
            // Navegar: navController.navigate("details/123")
        }
        composable(
            route = "details/{id}",
            arguments = listOf(navArgument("id") { type = NavType.StringType })  // [!code ++]
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id")
            Text("Detalles del ID: $id")
        }
    }
}
```