---
outline: deep
---

# Listas

## ul / li

Lista desordenada.

``` html
<ul>
  <li>Manzana</li>
  <li>Pera</li>
</ul>
```


## ol / li

Lista ordenada.

``` html
<ol>
  <li>Paso 1</li>
  <li>Paso 2</li>
</ol>
```


## Tablas

Las tablas permiten organizar información en filas y columnas.


### table, tr, th, td

|elemento|descripción|
|--------|-----------|
|`table`|Define una tabla|
|`tr`|Representa una fila dentro de la tabla|
|`th`|Define una celda de encabezado|
|`td`|Define una celda de datos|



``` html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>22</td>
  </tr>
</table>
```

<html>
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>22</td>
  </tr>
</table>
</html>


## Formularios

Los formularios permiten ingresar y enviar información del usuario.



### form

Contenedor principal del formulario.

``` html
<form>
    <!-- AQUI VA EL FORMULARIO -->
</form>
```


### label

Etiqueta descriptiva para un campo.

``` html
<label for="nombre">Nombre:</label>
```


### input

Campo para ingresar datos.


``` html
<input type="text" id="nombre">
```


### textarea

Área de texto de múltiples líneas.

``` html
<textarea></textarea>
```

### button

Botón para enviar acciones o formularios.


``` html
<button>Enviar</button>
```

### Formulario completo

``` html
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre">

  <br><br>

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje"></textarea>

  <br><br>

  <button type="submit">Enviar</button>
</form>
```

