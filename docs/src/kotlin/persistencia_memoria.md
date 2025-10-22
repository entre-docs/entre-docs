---
outline: deep
---

# Persistencia de datos en memoria

La persistencia en memoria se refiere a la capacidad de una aplicación para **almacenar datos de manera temporal o permanente** en la memoria del dispositivo.


## Implementación

La persistencia en memoria se implementa a través del uso de **SharedPreferences**.

SharedPreferences ofrece un método ligero para persistir datos en el dispositivo. Es ideal para:

* Almacenar configuraciones de la aplicación.
* Guardar preferencias del usuario (ej. temas, notificaciones).
* Mantener datos pequeños y accesibles rápidamente.


|Acción|Descripción|Ejemplo de Uso|
|------|-----------|--------------|
|Obtener Referencia|Accede al archivo de preferencias.|`getSharedPreferences("MiAppPrefs", Context.MODE_PRIVATE)`|
|Guardar Valor|Almacena un par clave-valor.|`editor.putString("clave", "valor")`|
|Aplicar Cambios|Confirma los cambios en SharedPreferences.|`editor.apply()`|
|Recuperar Valor|Obtiene un valor con un valor predeterminado si no existe.|`getString("clave", "valor_predeterminado")`|
|Usar con ViewModel|Administra datos relacionados con la UI.|Integración con `ViewModel`.|
|Implementar Caché|Almacena datos temporalmente en memoria.|Uso de `MutableMap<String, Any?>`|


``` kotlin
import android.content.Context
import androidx.lifecycle.ViewModel

// Obtener referencia a SharedPreferences
val sharedPreferences = getSharedPreferences("MiAppPrefs", Context.MODE_PRIVATE)

// Guardar un valor
val editor = sharedPreferences.edit()
editor.putString("clave", "valor")
editor.apply()

// Obtener un valor
val valor = sharedPreferences.getString("clave", "valor_predeterminado")

class MiViewModel : ViewModel() {
    var data: String = ""
}

// Crear una caché en memoria
val cache: MutableMap<String, Any?> = HashMap()

// Almacenar datos en caché
cache["clave"] = valor

// Obtener datos de la caché
val valorRecuperado = cache["clave"] as String
```