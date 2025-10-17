---
outline: deep
---

# Componentes UI en Jetpack Compose

Jetpack Compose ofrece componentes básicos para construir interfaces modernas.


## Text

Muestra texto en pantalla, personalizable con estilos, colores, y tipografías.

### Color de fondo

El contenedor `Surface` tiene un parámetro `color` para personalizar el fondo.

``` kotlin
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.graphics.Color
import androidx.compose.material3.Surface

@Composable
fun MyText() {
    Surface(color = Color.Magenta) { // [!code ++]
        Text(
            text = "Hi, my name is Android!",
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(24.dp)
        )
    }
}
```

### Padding

Se usa un **Modifier** para decorar elementos composables. El modificador `padding` agrega espacio alrededor del elemento.

``` kotlin
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.graphics.Color
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun Greeting(name: String) {
    Surface(color = Color.Magenta) {
        Text(
            text = "Hi, my name is $name!",
            modifier = Modifier.padding(24.dp)  // [!code ++]
        )
    }
}
```


## Button

Un componente interactivo que responde a clics.

``` kotlin
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun MyButton() {
    Button(onClick = { /* Acción */ }) {  // [!code ++]
        Text("Haz Clic")
    }
}
```

## Image

Muestra imágenes desde recursos, URLs, o bitmaps.

``` kotlin
import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.painterResource
import com.example.myapp.R

@Composable
fun MyImage() {
    Image(  // [!code ++]
        painter = painterResource(id = R.drawable.my_image),
        contentDescription = "Logo de la app"
    )
}
```

## Layout

### Column

Organiza eventos verticalmente.

``` kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun MyColumn() {
    Column {
        Text("Elemento 1")
        Text("Elemento 2")
    }
}
```


### Row

Organiza elementos horizontalmente.

``` kotlin
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun MyRow() {
    Row {
        Text("Izquierda")
        Text("Derecha")
    }
}
```

## List y LazyColumn

### LazyColumn

Renderiza sólo los elementos visibles, ideal para listas largas.

``` kotlin
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun MyList() {
    val items = listOf("Item 1", "Item 2", "Item 3")
    LazyColumn {
        items(items) { item ->
            Text(item)
        }
    }
}
```

::: tip Consejos
- Usa Modifier.padding() para agregar espaciado.
- Combina Surface con colores para personalizar el fondo.
- Usa LazyColumn para listas grandes en lugar de Column.
:::