---
outline: deep
---

# Comandos avanzados en Linux

Comandos básicos en vi

## Ingresar datos al archivo

```bash
vi miarchivo.txt

## sudo vi miarchivo.txt
```

## Entrar en modo inserción

Para escribir o editar texto.

```bash
i
```

### Salir del modo inserción

```bash
Esc
```

### Guardar cambios y salir

```bash
:wq
```

### Salir sin guardar

```bash
:q!
```

### Borrar linea actual

Una vez salido del modo insertar presionando Esc

```bash
dd
```

### Copiar linea actual

Una vez salido del modo insertar presionando Esc

```bash
yy
```

### Pegar el texto copiado

Una vez salido del modo insertar presionando Esc

```bash
p
```

## Mostrar contenido de un archivo

```bash
cat miarchivo.txt
```

## Buscar archivos

Busca archivos con extensión txt

```bash
find . -name "*.txt"
```

## Buscar patrones de texto

```bash
grep "error" miarchivo.txt
```

## Procesar y filtrar datos

* Imprimir la segunda columna de un archivo CSV

```csv
Juan 25 estudiante
Ana 30 ingeniera
```

```bash
awk -F',' '{print $2}' archivo.csv

# Juan
# Ana
```

* Imprimir múltiples columnas

```bash
awk '{print $1, $3}' archivo.txt

# Juan estudiante
# Ana ingeniera
```

## Reemplazar palabras

```bash
sed 's/estudiante/doctor/g' archivo.txt

# Juan doctor
# Ana ingeniera
```

## Ordenar los registros

```bash
sort archivo.txt
```

## Mostrar los primeros registros

```bash
head -n 2 archivo.txt

# Muestra los primeros 2 registros
```

## Mostrar los últimos registros

```bash
tail -n 3 archivo.txt

# Muestra los último 3 registros
```


## Comprimir archivos

```bash
tar -czvf archivo.tar.gz mi_directorio/
```

## Ordenar la información

```bash
sort archivo.txt

# Ordena alfabética o numéricamente el contenido de un archivo
```