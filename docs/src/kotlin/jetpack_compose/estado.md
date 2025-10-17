---
outline: deep
---

# Manejo de estado en Jetpack Compose

El estado (state) controla cómo se actualiza la UI en Jetpack Compose.

## remember, mutableStateOf()

* `mutableStateOf`: crea un estado observable que dispara recomposiciones.
* `remember`: retiene el estado durante recomposiciones.

``` kotlin
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue

@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }  // [!code ++]

    Button(onClick = { count++ }) {
        Text("Contador: $count")
    }
}
```

::: tip
Usar remember para estados locales simples.
:::



## ViewModel

* `ViewModel`: almacena el estado de forma **persistente**, sobreviviendo a cambios de configuración.


``` kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.material3.Button
import androidx.compose.material3.Text

class CounterViewModel : ViewModel() {  // [!code ++]
    var count by mutableStateOf(0)
        private set

    fun increment() {
        count++
    }
}

@Composable
fun CounterWithViewModel(viewModel: CounterViewModel = viewModel()) {
    Button(onClick = { viewModel.increment() }) {
        Text("Contador: ${viewModel.count}")
    }
}
```

::: tip
Usar ViewModel para lógica compleja o datos persistentes
:::



## Effects (LaunchedEffect)

* `LaunchedEffect`: ejecuta efectos secundarios (como tareas asincrónicas) cuando cambian ciertas claves.

``` kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.material3.Text
import kotlinx.coroutines.delay

@Composable
fun Timer() {
    var time by remember { mutableStateOf(0) }
    LaunchedEffect(Unit) {  // [!code ++]
        while (true) {
            delay(1000)
            time++
        }
    }
    Text("Tiempo: $time segundos")
}
```


::: tip
LaunchedEffect es ideal para tareas asíncronas
:::