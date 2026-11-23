---
outline: deep
---

# Tipo de Datos

<p align="center">
  <img src="/java_tipo_datos.png" width="800" alt="java_tipo_datos"/>
</p>


## Datos primitivos

Son tipos de datos que contienen un solo valor.


### Variables Primitivas


``` java
public class PracticaConstante {
    public static void main(String[] args) {

        // variable
        int workDays = 10;
        workDays = 20;
        workDays = 30;


        // constante
        final double TAX_RATE = 0.10;
        int grossSalary = 3000;  // sueldo bruto
        double netSalary = grossSalary * (1 - TAX_RATE);
        System.out.println("netSalary = " + netSalary);
    }
}
```