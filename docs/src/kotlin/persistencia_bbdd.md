---
outline: deep
---

# Persistencia de datos en base de datos

La persistencia en base de datos permite almacenar datos de forma permanente, asegurando que la información se mantenga tras cerrar la aplicación o apagar el sistema. En Android con Kotlin, es esencial para preservar el estado y manejar datos relevantes.

La Persistencia en Base de Datos garantiza:

* Integridad de los datos
* Conservación del estado entre sesiones
* Recuperación tras reinicios o cierres inesperados
* Gestión efectiva de grandes volúmenes de datos


## Implementación con SQLite

SQLite es una base de datos relacional ligera que **se integra directamente en la aplicación Android**. Su usabilidad permite almacenar datos estructurados de manera eficiente y operaciones de consulta avanzadas.


1. Definir las dependencias en archivo `build.gradle.kts`
2. Crear una carpeta `data` que contendrá los archivos `Usuario.kt`, `UsuarioDao.kt`, `AppDatabase.kt` y `RegistroDbHelper.kt`
3. Definir persistencia con SQLite (clased/entidad)  archivo `Usuario.kt`
4. Definir clase DAO (Data Access Object) para manejar SQLite con Room Library. archivo `UsuarioDao.kt`
5. Configurar una base de datos con Room (crear archivo `AppDatabase.kt`)
6. Crear archivo helper que se conectará con la base de datos (`RegistroDbHelper.kt`)


::: code-group
``` kotlin [build.gradle.kts]
    // Room
    implementation("androidx.room:room-runtime:2.8.0") // runtime obligatorio
    kapt("androidx.room:room-compiler:2.8.0")     // genera AppDatabase_Impl
    implementation("androidx.room:room-ktx:2.8.0")   // corrutinas y helpers
```

``` kotlin [Usuario.kt]
package com.example.taller1v1.data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "usuarios")
data class Usuario(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val nombre: String,
    val correo: String,
    val password: String,
    val pais: String,
    val recibeNoticias: Boolean,
    val recibeOfertas: Boolean
)
```

``` kotlin [UsuarioDao.kt]
package com.example.taller1v1.data

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query

@Dao
interface UsuarioDao {
    // para registrar un usuario
    @Insert
    suspend fun insertar(usuario: Usuario)

    // para iniciar sesión
    @Query("SELECT * FROM usuarios WHERE correo = :correo LIMIT 1")
    suspend fun buscarPorCorreo(correo: String): Usuario?
}
```

``` kotlin [AppDatabase.kt]
package com.example.taller1v1.data

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

// Base de datos local con Room (concepto: persistencia de datos a largo plazo)

@Database(entities = [Usuario::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun usuarioDao(): UsuarioDao

    companion object {
        @Volatile private var INSTANCE: AppDatabase? = null

        // Función getDatabase para poder conectarse a la bbdd - Context se refiere a toda la aplicación
        fun getDatabase(context: Context): AppDatabase {

            // retornará una instancia de bbdd que se almacenará localmente
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_db"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}
```

``` kotlin [RegistroDbHelper.kt]
package com.example.taller1v1.data

import android.content.Context
import android.util.Patterns
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext


object RegistroDbHelper {

    data class ValidationResult(
        val ok: Boolean,
        val errores: List<String> = emptyList()
    )

    data class LoginResult(
        val ok: Boolean,
        val mensaje: String? = null,
        val usuario: Usuario? = null
    )


    // 🔹 Validar datos antes de guardar
    fun validarRegistro(
        context: Context,
        nombre: String,
        correo: String,
        password: String,
        pais: String,
        callback: (ValidationResult) -> Unit
    ) {
        val errores = mutableListOf<String>()

        if (nombre.isBlank()) errores += "El nombre es obligatorio."

        if (correo.isBlank()) {
            errores += "El correo es obligatorio."
        } else if (!Patterns.EMAIL_ADDRESS.matcher(correo).matches()) {
            errores += "El correo no tiene un formato válido."
        }

        if (password.isBlank()) {
            errores += "La contraseña es obligatoria."
        } else if (password.length < 6) {
            errores += "La contraseña debe tener al menos 6 caracteres."
        }

        if (pais.isBlank()) errores += "Selecciona un país."

        // 🔹 Validar correo único en la base de datos (consulta en Room)
        if (errores.isEmpty()) {
            val db = AppDatabase.getDatabase(context)
            CoroutineScope(Dispatchers.IO).launch {
                val usuarioExistente = db.usuarioDao().buscarPorCorreo(correo)
                if (usuarioExistente != null) {
                    callback(ValidationResult(false, listOf("El correo ya está registrado.")))
                } else {
                    callback(ValidationResult(true))
                }
            }
        } else {
            callback(ValidationResult(false, errores))
        }
    }

    // 🔹 Guardar registro solo si pasa validaciones
    fun guardarRegistro(
        context: Context,
        nombre: String,
        correo: String,
        password: String,
        pais: String,
        noticias: Boolean,
        ofertas: Boolean,
        callback: (ValidationResult) -> Unit
    ) {
        // Validación con funcion lambda para crear un usuario
        validarRegistro(context, nombre, correo, password, pais) { validacion ->
            if (!validacion.ok) {
                callback(validacion)
                return@validarRegistro
            }

            val usuario = Usuario(
                nombre = nombre,
                correo = correo,
                password = password,
                pais = pais,
                recibeNoticias = noticias,
                recibeOfertas = ofertas
            )

            // CONECTARSE A LA BASE DE DATOS
            val db = AppDatabase.getDatabase(context)
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    db.usuarioDao().insertar(usuario)

                    // 👇 Cambio a hilo principal para el callback
                    withContext(Dispatchers.Main) {
                        callback(ValidationResult(true))
                    }

                } catch (e: Exception) {
                    e.printStackTrace()
                    withContext(Dispatchers.Main) {
                        callback(ValidationResult(false, listOf("Error BD: ${e.message}")))
                    }
                }
            }
        }
    }


    // Autenticar contra la base de datos
    fun autenticar(
        context: Context,
        correo: String,
        password: String,
        callback: (LoginResult) -> Unit
    ) {
        val correoNorm = correo.trim().lowercase()
        val db = AppDatabase.getDatabase(context)

        CoroutineScope(Dispatchers.IO).launch {
            val usuario = db.usuarioDao().buscarPorCorreo(correoNorm)

            if (usuario == null) {
                withContext(Dispatchers.Main) {
                    callback(LoginResult(false, "Correo no existe"))
                }
            } else if (usuario.password != password) {
                withContext(Dispatchers.Main) {
                    callback(LoginResult(false, "Contraseña incorrecta"))
                }
            } else {
                // ✅ Guardar sesión en SharedPreferences
                val prefs = context.getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
                prefs.edit()
                    .putBoolean("isLogged", true)
                    .putString("correo", usuario.correo)
                    .putString("nombre", usuario.nombre)
                    .apply()
                
                //estas 3 variables (o cualquier otra) pueden ser usuadas en cualquier vista de la aplicación (isLogged, correo, nombre)

                withContext(Dispatchers.Main) {
                    callback(LoginResult(true, usuario = usuario))
                }
            }
        }
    }
}
```

:::