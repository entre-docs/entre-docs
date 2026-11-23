---
outline: deep
---

# Clase Scanner

Permite la entrada de datos por teclado.

Si no se cierra un objeto Scanner en Java, puede causar una fuga de memoria.

``` java
public class GradeCalculator {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean repeat;

        do {
            System.out.println("Ingrese la edad:");
            int age = scanner.nextInt();

            System.out.println("Ingrese 3 calificaciones");
            int grade1 = scanner.nextInt();
            int grade2 = scanner.nextInt();
            int grade3 = scanner.nextInt();

            int sum = grade1 + grade2 + grade3;
            double average = sum/3.0;

            if (average >= 4){
                System.out.println("APROBADO " + "Edad: " + age);
            }
            else {
                System.out.println("NO APROBADO " + "Edad: " + age);
            }
            System.out.println("¿Desea ingresar nuevos datos? (1 para si, 0 para no)");
            int option = scanner.nextInt();
            repeat = option == 1;
        }
        while (repeat);

        System.out.println("Programa finalizado");
        scanner.close(); // si no se cierra un objeto Scanner, puede causar fuga de memoria
    }
}
```