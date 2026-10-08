[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT3 Completa](../ut3-tipus-avancats.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut03/ut03retos.html)

[⬅️ Anterior: Actividades prácticas UT3](../ut03/ut03actividades.md) | [➡️ Següent: 4.0 RA y Criterios de Evaluación](../ut04/ut04ras.md)

---

# Retos


> 💻 **Empaquetar retos**
>
> Empaqueta los retos, dentro de la carpeta **`ut03`**, en la carpeta **`retos`**.
>
> Las actividades programadas en esta sección **Retos** no son obligatorias.


---

## Bloque 3.0 - Arrays

### Reto 01 `AnalisisTemperaturas`

Una estación meteorológica almacena las temperaturas máximas registradas durante 30 días en un array de `double`.

Desarrolla un programa que:

1. Genere automáticamente las temperaturas entre `-5.0` y `42.0`.
2. Muestre todas las temperaturas con el formato `Día X: temperatura`.
3. Calcule la temperatura media.
4. Indique el día más caluroso y el día más frío.
5. Muestre cuántos días estuvieron por encima de la media.
6. Genere un segundo array con las anomalías térmicas, es decir, la diferencia entre cada temperatura y la media.

Implementa, como mínimo, métodos para calcular la media, buscar máximos y mínimos, contar valores por encima de un umbral y generar el array de anomalías.

---

### Reto 02 `MezclaOrdenada`

Escribe un programa que trabaje con dos arrays de enteros ya ordenados de forma ascendente.

El programa debe crear un tercer array que contenga todos los valores de los dos arrays originales, también en orden ascendente, sin usar `Arrays.sort()` sobre el array final.

Ejemplo:

```java
int[] a = {1, 4, 7, 12};
int[] b = {2, 3, 8, 9, 20};
```

Resultado:

```java
1 2 3 4 7 8 9 12 20
```

Ten en cuenta que los arrays pueden tener longitudes distintas.

---

### Reto 03 `CompresionRLE`

Implementa una versión sencilla de compresión por repeticiones para un array de enteros.

Dado un array como:

```java
int[] datos = {4, 4, 4, 7, 7, 2, 2, 2, 2, 9};
```

El programa debe mostrar:

```java
4 x 3
7 x 2
2 x 4
9 x 1
```

Además, crea dos arrays:

- `valores`, con cada valor distinto consecutivo.
- `repeticiones`, con el número de veces que aparece consecutivamente.

Para el ejemplo anterior:

```java
valores = {4, 7, 2, 9}
repeticiones = {3, 2, 4, 1}
```

---

### Reto 04 `TableroBuscaminas`

Crea un programa que genere un tablero de buscaminas usando una matriz de enteros.

1. El usuario indicará el número de filas, columnas y minas.
2. El programa colocará las minas aleatoriamente. Puedes representar una mina con el valor `-1`.
3. Las casillas sin mina deben contener el número de minas que tienen alrededor.
4. Muestra el tablero por pantalla usando `*` para las minas y el número correspondiente para el resto.

Ejemplo:

```java
1 * 1 0
1 1 2 1
0 0 1 *
```

Controla que no se coloquen dos minas en la misma casilla.

---

### Reto 05 `SudokuMini`

Crea un validador para un sudoku reducido de tamaño `4x4`.

El tablero contendrá números del `1` al `4`. El programa debe comprobar:

1. Que todas las filas contienen los números del `1` al `4` sin repetir.
2. Que todas las columnas contienen los números del `1` al `4` sin repetir.
3. Que cada subcuadrícula `2x2` contiene los números del `1` al `4` sin repetir.

Ejemplo de tablero válido:

```java
int[][] tablero = {
    {1, 2, 3, 4},
    {3, 4, 1, 2},
    {2, 1, 4, 3},
    {4, 3, 2, 1}
};
```

El programa debe indicar si el tablero es válido y, si no lo es, dónde se ha encontrado el primer error.

---

## Bloque 3.1 - La librería Arrays

### Reto 06 `RankingTiempos`

Un club de atletismo registra los tiempos de una carrera en un array de `double`.

Desarrolla un programa que:

1. Genere 20 tiempos aleatorios entre `9.50` y `20.00` segundos.
2. Muestre los tiempos originales.
3. Cree una copia ordenada de menor a mayor usando `Arrays.copyOf()` y `Arrays.sort()`.
4. Muestre el podio con los tres mejores tiempos.
5. Calcule la mediana.
6. Indique cuántos corredores han quedado a menos de 1 segundo del mejor tiempo.

El array original no debe modificarse.

---

### Reto 07 `ControlDuplicados`

Crea un programa que genere un array de 30 números aleatorios entre `1` y `15`.

Después debe:

1. Mostrar el array original.
2. Crear una copia ordenada.
3. Mostrar los valores que aparecen repetidos y cuántas veces aparece cada uno.
4. Crear un nuevo array con los valores únicos, sin repeticiones.
5. Comprobar con `Arrays.binarySearch()` si un número introducido por el usuario aparece entre los valores únicos.

No se debe mostrar el mismo valor repetido más de una vez en el informe de duplicados.

---

## Bloque 3.2 - La librería ArrayList

### Reto 08 `ListaCompraInteligente`

Crea un gestor de lista de la compra usando `ArrayList<String>`.

El programa tendrá un menú con las siguientes opciones:

1. Añadir producto.
2. Eliminar producto.
3. Marcar producto como comprado.
4. Mostrar productos pendientes.
5. Mostrar productos comprados.
6. Buscar producto.
7. Salir.

Para resolverlo puedes usar dos listas:

- Una lista de productos pendientes.
- Una lista de productos comprados.

El programa no debe permitir añadir el mismo producto dos veces, aunque esté escrito con mayúsculas o minúsculas diferentes.

---

### Reto 09 `HistorialPuntuaciones`

Un videojuego almacena las puntuaciones obtenidas por un jugador en un `ArrayList<Integer>`.

Crea un programa que permita:

1. Añadir nuevas puntuaciones.
2. Eliminar una puntuación concreta.
3. Mostrar las puntuaciones ordenadas de mayor a menor.
4. Mostrar la mejor puntuación, la peor y la media.
5. Mostrar las puntuaciones superiores a la media.
6. Mantener solo las 10 mejores puntuaciones.

Implementa métodos separados para cada operación importante.

---

### Reto 10 `FusionListas`

Crea dos `ArrayList<String>` con nombres de estudiantes de dos grupos distintos.

El programa debe generar:

1. Una lista con todos los estudiantes sin duplicados.
2. Una lista con los estudiantes que aparecen en ambos grupos.
3. Una lista con los estudiantes que solo aparecen en el primer grupo.
4. Una lista con los estudiantes que solo aparecen en el segundo grupo.

Después muestra todas las listas ordenadas alfabéticamente.

No uses arrays para resolver el reto: trabaja con `ArrayList` y sus métodos.

---

## Bloque 3.3 - Cadenas de texto

### Reto 11 `NormalizadorTexto`

Crea un programa que reciba una frase y la normalice para poder analizarla.

El programa debe:

1. Convertir la frase a minúsculas.
2. Eliminar espacios repetidos.
3. Eliminar signos de puntuación básicos: `.`, `,`, `;`, `:`, `¿`, `?`, `¡`, `!`.
4. Contar cuántas palabras tiene.
5. Mostrar la palabra más larga.
6. Indicar si la frase normalizada es un palíndromo ignorando espacios.

Ejemplo:

```java
Entrada: Ana, la tacaña catalana.
Normalizada: ana la tacaña catalana
Palíndromo: true
```

---

### Reto 12 `FrecuenciaLetras`

Escribe un programa que analice la frecuencia de letras de una frase.

Debe crear un array de 26 posiciones, una por cada letra de la `a` a la `z`, y contar cuántas veces aparece cada una.

El programa debe ignorar:

- Espacios.
- Signos de puntuación.
- Diferencias entre mayúsculas y minúsculas.

Al final muestra:

1. La frecuencia de cada letra que aparezca al menos una vez.
2. La letra más repetida.
3. Si la frase es un pangrama, es decir, si contiene todas las letras de la `a` a la `z` al menos una vez.

---

## Bloque 3.4 - Mapas

### Reto 13 `InventarioAvanzado`

Crea un sistema de inventario usando un `HashMap<String, Integer>`, donde la clave sea el código del producto y el valor sea su stock.

El programa tendrá un menú para:

1. Dar de alta un producto.
2. Añadir unidades a un producto.
3. Retirar unidades de un producto.
4. Consultar el stock de un producto.
5. Mostrar productos sin stock.
6. Mostrar productos con stock bajo, menor de 5 unidades.
7. Mostrar el inventario completo.
8. Salir.

El programa debe impedir que el stock de un producto quede por debajo de 0.

---

### Reto 14 `NotasConEstadisticas`

Crea un sistema de notas usando `HashMap<String, ArrayList<Double>>`.

La clave será el nombre del estudiante y el valor será su lista de notas.

El programa debe permitir:

1. Añadir estudiantes.
2. Añadir notas a un estudiante.
3. Eliminar una nota concreta de un estudiante.
4. Mostrar la media de un estudiante.
5. Mostrar el estudiante con mejor media.
6. Mostrar el estudiante con peor media.
7. Mostrar todos los estudiantes ordenados alfabéticamente junto con sus notas y media.

Controla que las notas estén entre `0` y `10`.

---

### Reto 15 `AnalizadorVotaciones`

En una votación, cada persona puede votar una sola vez.

Usa:

- Un `HashMap<String, String>` para guardar qué ha votado cada persona. La clave será el DNI y el valor será la opción votada.
- Otro `HashMap<String, Integer>` para contar los votos de cada opción.

El programa debe:

1. Permitir registrar un voto.
2. Rechazar el voto si ese DNI ya ha votado.
3. Mostrar el recuento completo.
4. Mostrar la opción ganadora.
5. Mostrar el porcentaje de votos de cada opción.
6. Permitir consultar qué opción votó un DNI concreto.

Prepara el programa para que las opciones válidas sean configurables al inicio.

---

### Reto 16 `DiccionarioSinonimos`

Crea un pequeño diccionario de sinónimos usando `HashMap<String, ArrayList<String>>`.

La clave será una palabra y el valor será una lista de sinónimos.

El programa debe permitir:

1. Añadir una palabra nueva.
2. Añadir un sinónimo a una palabra existente.
3. Eliminar un sinónimo.
4. Buscar los sinónimos de una palabra.
5. Mostrar todas las palabras del diccionario.
6. Mostrar la palabra que tiene más sinónimos.

No se deben permitir sinónimos repetidos para una misma palabra.

---

### Reto 17 `ClasificacionLiga`

Crea un programa que gestione una clasificación deportiva usando `HashMap<String, Integer>`, donde la clave sea el nombre del equipo y el valor sean sus puntos.

El menú debe permitir:

1. Añadir equipos.
2. Registrar un partido indicando equipo local, equipo visitante y resultado.
3. Sumar 3 puntos al ganador o 1 punto a cada equipo en caso de empate.
4. Mostrar la clasificación ordenada de mayor a menor puntuación.
5. Mostrar los equipos empatados a puntos.
6. Mostrar el líder de la liga.

Para ordenar la clasificación puedes convertir las entradas del mapa a una lista auxiliar.

---

[⬅️ Anterior: Actividades prácticas UT3](../ut03/ut03actividades.md) | [➡️ Següent: 4.0 RA y Criterios de Evaluación](../ut04/ut04ras.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut03/ut03retos.html)
