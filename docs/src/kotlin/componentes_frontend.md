---
outline: deep
---

# Componentes Frontend en Kotlin

| Componente | Descripción   | Uso en Jetpack Compose    | Ejemplo   |
|------------|---------------|---------------------------|-----------|
| **Fragment** | Componente modular que representa una porción de UI dentro de una Activity. | Se integra con `ComposeView` para usar composables en lugar de XML. | `@Composable fun MyFragmentContent() { Text("Fragment en Compose") }` |
| **View** | Elemento básico de UI, como botones o etiquetas, en el sistema de vistas XML. | Reemplazado por composables como `Text`, `Button`, o `Image`. | `@Composable fun SimpleText() { Text("Hello, Android!") }` |
| **ViewGroups** | Contenedores que organizan Views u otros ViewGroups en layouts XML. | Reemplazado por composables como `Column`, `Row`, o `Box`. | `@Composable fun SimpleLayout() { Column { Text("Hello"); Button(...) } }`|
| **Content Providers** | Gestiona acceso a datos estructurados, compartiéndolos entre aplicaciones. | No es un componente de UI; se usa con Compose para mostrar datos obtenidos. | `contentResolver.query(CONTENT_URI, ...)` en una Activity con Compose. |
| **Widget**  | Componente interactivo en la pantalla de inicio que muestra información. | Configurable con Compose mediante `AppWidgetProvider` y `ComposeView`. | `@Composable fun WidgetContent() { Text("Widget en Compose") }` |
| **Palettes** | Extrae colores de imágenes para personalizar la UI (Palette Texts/Widgets).  | Usado con la biblioteca Palette para aplicar colores a composables como `Text`. | `@Composable fun PaletteText() { Text("Text", color = Color(0xFFFF5722)) }` |
| **Buttons** | Elementos interactivos que ejecutan acciones al hacer clic. | Implementado con el composable `Button` en Compose. | `@Composable fun SimpleButton() { Button(onClick = { ... }) { Text("Click") } }` |
| **Events** | Acciones del usuario (clics, toques) que añaden interactividad.| Manejado con modificadores como `clickable` en Compose.| `@Composable fun ClickableText() { Text("Click", modifier = Modifier.clickable { ... }) }` |



## Ejemplo de implementación

Código correspondiente a ListadoCaloriasScreen.kt

``` kotlin
@Composable
fun ListadoCaloriasScreen(onBack: () -> Unit = {}, onNavigateToLogin: () -> Unit = {}) {
    // POO → uso de data class con propiedades
    data class Alimento(val nombre: String, val kcal: Int, val porcion: String)

    // Colecciones mutables (mutableStateListOf)
    val lista = remember {
        mutableStateListOf(
            Alimento("Manzana", 95, "1 unidad"),
            Alimento("Arroz", 200, "100g"),
            Alimento("Pollo", 250, "150g"),
            Alimento("Ensalada", 80, "1 taza")
        )
    }

    // Lambda con colecciones → maxByOrNull
    val maxKcal = lista.maxByOrNull { it.kcal }?.nombre ?: "N/A"

    Scaffold(
        topBar = {
            SimpleTopBar(
                title = "Listado de Calorías",
                showBack = true,
                onBack = onBack,
                onNavigateToLogin = onNavigateToLogin
            )
        }
    ) { padding ->
        Column(modifier = Modifier
            .padding(padding)
            .padding(16.dp)) {
            Text("Alimentos registrados:", style = MaterialTheme.typography.titleMedium)

            // recorrer colecciones con LazyColumn
            LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                items(lista.size) { index ->
                    val item = lista[index]
                    ElevatedCard(modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(12.dp)) {
                            Text("${item.nombre} - ${item.kcal} kcal")
                            Text("Porción: ${item.porcion}")
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.heightIn(16.dp))

            // uso de if y when para clasificar resultados
            val promedio = if (lista.isNotEmpty()) lista.sumOf { it.kcal } / lista.size else 0
            val categoria = when {
                promedio < 100 -> "Bajo"
                promedio in 100..200 -> "Medio"
                else -> "Alto"
            }

            Text("Promedio: $promedio kcal → Categoría: $categoria") // Condicional + when
            Text("Más calórico: $maxKcal") // resultado de lambda


            Spacer(modifier = Modifier.heightIn(16.dp))

            TemasSemana6()
        }
    }
}



@Composable
fun TemasSemana6() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFE0F2F1))
            .padding(12.dp)
    )
    {
    LazyColumn(
        modifier = Modifier
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {


        // -------- Buttons y Events --------
        item {
            Text("Buttons y Events", fontSize = 18.sp, color = Color(0xFFD32F2F))
            Spacer(modifier = Modifier.height(6.dp))
            ExampleButtonEvent()
            Text(
                text = "Ejemplo: botón que incrementa un contador en respuesta al evento click.",
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.padding(bottom = 20.dp)
            )
        }


        // -------- Palette Texts y Widgets -------- 
        item {
            Text("Palette Texts y Widgets", fontSize = 18.sp, color = Color(0xFFAD1457))
            Spacer(modifier = Modifier.height(6.dp))
            ExamplePalette()
            Text(
                text = "Ejemplo: se extrae color de una imagen simulada y se aplica al fondo.",
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.padding(bottom = 20.dp)
            )
        }

        // -------- Widgets --------
        item {
            Text("Widgets", fontSize = 18.sp, color = Color(0xFF283593))
            Spacer(modifier = Modifier.height(6.dp))
            ExampleWidget()
            Text(
                text = "Ejemplo: un contador simple como widget interactivo en Compose.",
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.padding(bottom = 20.dp)
            )
        }

       // -------- Fragments, Views y ViewGroups --------
        item {
            Text("Fragments, Views y ViewGroups", fontSize = 18.sp, color = Color(0xFF00695C))
            Spacer(modifier = Modifier.height(6.dp))
            ExampleFragmentViewGroup()
            Text(
                text = "Ejemplo: Un contenedor Column (ViewGroup) que organiza varias Views (Text, Button).",
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.padding(bottom = 20.dp)
            )
        }

        // -------- Content Providers (ejemplo simulado con lista de datos) --------
        item {
            Text("Content Providers", fontSize = 18.sp, color = Color(0xFF6A1B9A))
            Spacer(modifier = Modifier.height(6.dp))
            ExampleContentProvider()
            Text(
                text = "Ejemplo: mostramos datos simulados que vendrían de un Content Provider.",
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.padding(bottom = 20.dp)
            )
        }
    }
    }
}


@Composable
fun ExampleFragmentViewGroup() { // [!code ++]
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFE0F2F1))
            .padding(12.dp)
    ) {
        Text("Soy una View (Text)", fontSize = 16.sp)
        Button(
            onClick = { /* Acción simulada */ },
            modifier = Modifier.padding(top = 8.dp)
        ) {
            Text("Soy un Button dentro de un ViewGroup")
        }
    }
}


// Content Providers (simulado con lista de datos)
@Composable
fun ExampleContentProvider() { // [!code ++]
    val fakeData = listOf("Contacto: Ana", "Contacto: Luis", "Contacto: Pedro")
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFF3E5F5))
            .padding(12.dp)
    ) {
        fakeData.forEach { item ->
            Text(item, fontSize = 14.sp)
        }
    }
}

// Widgets
@Composable
fun ExampleWidget() { // [!code ++]
    var counter by remember { mutableStateOf(0) }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFE8EAF6))
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Contador: $counter", fontSize = 16.sp)
        Button(onClick = { counter++ }, modifier = Modifier.padding(top = 8.dp)) {
            Text("Incrementar")
        }
    }
}


// Palette Texts y Widgets (simulación de extracción de color)
@Composable
fun ExamplePalette() { // [!code ++]
    var bgColor by remember { mutableStateOf(Color.LightGray) }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(bgColor)
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Texto con fondo dinámico", fontSize = 16.sp, color = Color.White)
        Spacer(modifier = Modifier.height(8.dp))
        Image(
            painter = ColorPainter(Color.Magenta),
            contentDescription = "Imagen simulada",
            modifier = Modifier
                .size(60.dp)
                .clickable {
                    // Al hacer click, simulamos extracción de color de la "imagen"
                    bgColor = Color.Magenta
                }
        )
    }
}


// Buttons y Events
@Composable
fun ExampleButtonEvent() { // [!code ++]
    var clicks by remember { mutableStateOf(0) }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFFFEBEE))
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Has hecho clic $clicks veces", fontSize = 16.sp)
        Button(
            onClick = { clicks++ },
            modifier = Modifier.padding(top = 8.dp)
        ) {
            Text("Haz clic aquí")
        }
    }
}



// Vista previa para la nueva actividad
@Preview(showBackground = true)
@Composable
fun PreviewListadoCalorias() {
    MaterialTheme {
        // Llamamos directamente a la pantalla con navegación vacía
        ListadoCaloriasScreen(
            onBack = {},          // Acción de volver (sin lógica en preview)
            onNavigateToLogin = {} // Acción de login (sin lógica en preview)
        )
    }
}
```