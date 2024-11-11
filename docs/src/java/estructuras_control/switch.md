---
outline: deep
---

# Sentencias Condicionales o de Decisión

## Switch

El switch en Java es una estructura de control que se utiliza para seleccionar una de entre múltiples opciones posibles. Es útil cuando tienes múltiples condiciones para evaluar basadas en el valor de una variable. En lugar de utilizar una serie de sentencias if-else if, puedes emplear switch para simplificar y mejorar la legibilidad del código.

```java
public class EjemploSwitch {
    public static void main(String[] args) {
        int dia = 3;
        String nombreDia;

        switch (dia) {
            case 1:
                nombreDia = "Lunes";
                break;
            case 2:
                nombreDia = "Martes";
                break;
            case 3:
                nombreDia = "Miércoles";
                break;
            case 4:
                nombreDia = "Jueves";
                break;
            case 5:
                nombreDia = "Viernes";
                break;
            case 6:
                nombreDia = "Sábado";
                break;
            case 7:
                nombreDia = "Domingo";
                break;
            default:
                nombreDia = "Día inválido";
        }

        System.out.println("El día seleccionado es: " + nombreDia);
    }
}
```