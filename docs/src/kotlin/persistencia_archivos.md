---
outline: deep
---

# Persistencia de datos en archivos

La persistencia en archivos se refiere a la capacidad de una aplicación para almacenar datos de manera duradera en el dispositivo de almacenamiento, como la memoria interna o la tarjeta SD. Esto permite que los datos persistan incluso después de cerrar la aplicación o reiniciar el dispositivo.

## Implementación

``` kotlin
import java.io.File
import java.io.FileOutputStream
import java.io.FileInputStream

class FileHelper {
    companion object {
        fun guardarDatosEnArchivo(datos: String, nombreArchivo: String) {
            val file = File("/ruta/del/directorio/", nombreArchivo)
            val stream = FileOutputStream(file)
            stream.write(datos.toByteArray())
            stream.close()
        }

        fun leerDatosDeArchivo(nombreArchivo: String): String {
            val file = File("/ruta/del/directorio/", nombreArchivo)
            val stream = FileInputStream(file)
            val resultad = stream.bufferedReader().use { it.readText() }
            stream.close()
            return resultad
        }
    }
}

/* Agregar permisos en el archivo AndroidManifest.xml */
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

/* Crear una clase de gestión de archivos en el archivo de Kotlin */
val datos = "Hola, mundo!"
val nombreArchivo = "mi_archivo.txt"
FileHelper.guardarDatosEnArchivo(datos, nombreArchivo)
val datosLeidos = FileHelper.leerDatosDeArchivo(nombreArchivo)
println("Datos leídos: $datosLeidos")
```