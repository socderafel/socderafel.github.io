[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT5 Completa](../ut5-herencia-polimorfisme.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut05/ut05ac_exam_8f3KxP9zQ2.html)

---

# UT5 - Examen


<details markdown="1">
<summary><strong>💻 Criterios de Evaluación</strong></summary>

En este examen, se evaluaran los CE:

- **4h**: Se han definido y utilizado interfaces.
- **6c**: Se han utilizado listas para almacenar y procesar información.
- **7b**: Se han utilizado modificadores para bloquear y forzar la herencia de clases y métodos.
- **7c**: Se ha reconocido la incidencia de los constructores en la herencia.
- **7d**: Se han creado clases heredadas que sobrescriben la implementación de métodos de la superclase.
- **7e**: Se han diseñado y aplicado jerarquías de clases.
- **7g**: Se han realizado programas que implementan y utilizan jerarquías de clases.
- **7i**: Se han identificado y evaluado los escenarios de utilización de la herencia y la composición.

</details>


### **Sistema de Gestión de Héroes y Villanos de Marvel**

1. Crear una clase abstracta `PersonajeMarvel` que represente cualquier personaje del universo Marvel.
    - Sus atributos son: `nombre`, `edad`, `estado` (activo, retirado, desaparecido o fallecido), `fechaAparicion` y `nivelPoder` (del 1 al 100).
    - Los métodos: 
          - `void mostrar()` → devuelve por pantalla todos los datos del personaje.
          - `void cumplirAnios()` → incrementa la edad en 1.
          - `void morir()` → cambia el estado del personaje.
          - `abstract void hablar()`
          - `abstract int calcularNivelDeAmenaza()`
2. Implementa una interfaz `Combatiente`, que contendrá los métodos `void atacar()` y `void defender()`.
3. Crea la clase abstracta `SerVolador`, que hereda de `PersonajeMarvel` para representar a aquellos que pueden volar. 
    - Como atributos tiene: altura máxima de vuelo (en metros) y si usa o no tecnologia para volar.
    - Como métodos: `abstract void volar()` y `abstract int tiempoMaxVuelo()`.

---

**Clases que heredan de `PersonajeMarvel` e implementan `Combatiente`:**

1. Crea la clase `Hulk` con:

    - Atributos: el nivel de fuerza (del 1 al 100), si está o no enfadado.
    - Métodos:  
          - `void hablar()` → Imprime el texto *'¡HULK APLASTA!'*.
          - `int calcularNivelDeAmenaza()` → Si está enfadado devuelve 10, y si no devuelve 7.
          - `void atacar()` → Imprime *'Hulk golpea con fuerza X'*.
          - `void defender()` → Imprime *'Hulk bloquea con su cuerpo'*.
          - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado de los métodos `atacar()` y `defender()`.
2. Crea la clase `BlackWidow` con:

    - Atributos: nivel de espionaje y sigilo (del 1 al 100).
    - Métodos:
          - `void hablar()` → Imprime el texto *'Misión encubierta en progreso'*.
          - `int calcularNivelDeAmenaza()` → Devuelve el nivel de sigilo / 10.
          - `void atacar()` → Imprime *'Ataque sigiloso con gadgets'*.
          - `void defender()` → Imprime *'Esquivado con agilidad'*.
          - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado de los métodos `atacar()` y `defender()`.

---

**Clases que heredan de `SerVolador` e implementan `Combatiente`:**

1. Crea la clase `IronMan` con:

    - Atributos: modelo del armadura y energia del reactor (del 1 al 100).
    - Métodos: 
          - `void hablar()` → Imprime el texto *'Yo soy IronMan'*.
          - `void volar()` → Imprime el texto *'Volando con propulsores'*.
          - `int tiempoMaximoVuelo()` → Devuelve energiaReactor * 2
          - `int calcularNivelDeAmenaza()` → Devuelve 8 si el nivel de energía es superior a 50, 6 sino.
          - `void atacar()` → Imprime *'Disparando rayos repulsores'*.
          - `void defender()` → Imprime *'Escudo de la armadura activado'*.
          - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado de los métodos `volar()`, `tiempoMaximoVuelo()`, `atacar()` y `defender()`.
2. Crea la clase `Falcon` con:

    - Atributos: si tiene o no alas mécanicas y la velocidad de vuelo.
    - Métodos:
          - `void hablar()` → Imprime el texto *'Listo para la misión'*.
          - `void volar()` → Imprime el texto *'Peleando con mis alas'*.
          - `int tiempoMaximoVuelo()` → Devuelve velocidadVuelo * 2
          - `int calcularNivelDeAmenaza()` → Devuelve siempre 6.
          - `void atacar()` → Imprime *'Ataque aéreo sorpresa'*.
          - `void defender()` → Imprime *'Maniobra evasiva en el aire'*.
          - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado de los métodos `volar()`, `tiempoMaximoVuelo()`, `atacar()` y `defender()`.

---

**Clase `Test`**

1. Crear un ArrayList de personajes de Marvel y añadir un objeto de cada tipo.
2. Recorrer la lista y llamar a los métodos `mostrar()`, `hablar()` y `calcularNivelDeAmenaza()` de cada objeto.

---

**El diagrama UML sería:**

![Diagrama Marvel](../img/ut05/plantuml.svg)


> ⚠️ **OJO!**
>
> No olvides crear los constructores, getters y setters necesarios en cada clase.


---

[📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut05/ut05ac_exam_8f3KxP9zQ2.html)
