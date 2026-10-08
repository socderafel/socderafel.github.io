[⬅️ Tornar a l'índex de Programació](./) | [🏠 Portal Principal](../) | [📘 UT1 Completa](./ut1-estructura-programes.md) | [🎨 **Obrir Guia Interactiva Material**](./guia-completa/ut01/)

# UT1 - Introducció a Java i Format d'Eixida

## 1. Estructura d'un programa bàsic en Java

Recorda que el nom de la `public class` ha de coincidir exactament amb el nom del fitxer `.java` (usant **PascalCase**), i el `package` ha de reflectir la carpeta on es troba dins de `src/`.

```java
package ut1;

import java.util.Scanner;

public class ExempleFormat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("------------------------------------------");
        System.out.printf("%-10s | %-10s | %-10s%n", "A", "B", "A || B");
        System.out.println("------------------------------------------");

        boolean a = true;
        boolean b = false;
        boolean resultat = a || b;

        System.out.printf("%-10b | %-10b | %-10b%n", a, b, resultat);
        System.out.println("------------------------------------------");

        sc.close();
    }
}
```

---

## 2. Resum ràpid d'especificadors per a `System.out.printf`

| Especificador | Tipus de dada | Exemple | Resultat |
| :---: | :--- | :--- | :--- |
| `%d` | Enter (`int`, `long`) | `printf("%04d", 25)` | `0025` |
| `%f` | Decimal (`double`, `float`) | `printf("%.2f", 12.3456)` | `12,35` |
| `%s` | Text (`String`) | `printf("%-10s", "Hola")` | `Hola      ` |
| `%b` | Booleà (`boolean`) | `printf("%-10b", true)` | `true      ` |
| `%n` | Salt de línia | `printf("Línia 1%n")` | *(Salta de línia)* |
