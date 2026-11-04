---
title: "Reptes de programació UT3"
unit: "3"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT03"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# Reptes de programació UT3

> **📌 Empaquetar reptes**
> 

> Empaqueta els reptes, dins de la carpeta **`ut03`**, en la carpeta **`retos`**.

> Les activitats programades en aquesta secció **Reptes** no són obligatòries.

## Bloc 3.0 - Arrays

### Repte 01 `AnalisisTemperaturas`

Una estació meteorológica emmagatzema les temperaturas màximes registrades durant 30 dies en un array de `double`.

Desenvolupa un programa que:

1. Genere automàticament les temperaturas entre `-5.0` i `42.0`.

1. Mostre totes les temperaturas amb el format `Día X: temperatura`.

1. Calcule la temperatura mitjana.

1. Indique el dia més caluroso i el dia més frío.

1. Mostre quants dies estuvieron per damunt de la mitjana.

1. Genere un segon array amb les anomalías térmiques, és a dir, la diferència entre cada temperatura i la mitjana.

Implementa, com a mínim, mètodes per a calcular la mitjana, cercar màxims i mínims, comptar valors per damunt d'un llindar i generar l'array d'anomalías.

### Repte 02 `MezclaOrdenada`

Escriu un programa que trabatge amb dos arrays d'enters ja ordenats de forma ascendent.

El programa ha de crear un tercer array que continga tots els valors dels dos arrays originals, també en ordre ascendent, sense usar `Arrays.sort()` sobre l'array final.

Exemple:

```java
int[] a = {1, 4, 7, 12};
int[] b = {2, 3, 8, 9, 20};
```

Resultat:

```java
1 2 3 4 7 8 9 12 20
```

Tingues en compte que els arrays poden tindre longituds distintes.

### Repte 03 `CompresionRLE`

Implementa una versió senzilla de compresió per repeticions per a un array d'enters.

Donat un array com:

```java
int[] datos = {4, 4, 4, 7, 7, 2, 2, 2, 2, 9};
```

El programa ha de mostrar:

```java
4 x 3
7 x 2
2 x 4
9 x 1
```

A més, crea dos arrays:

- `valores`, amb cada valor distint consecutivo.

- `repeticiones`, amb el número de vegades que apareix consecutivament.

Per a l'exemple anterior:

```java
valores = {4, 7, 2, 9}
repeticiones = {3, 2, 4, 1}
```

### Repte 04 `TableroBuscaminas`

Crea un programa que genere un tablero de buscaminas usant una matriu d'enters.

1. L'usuari indicará el número de files, columnes i minas.

1. El programa colocará les minas aleatoriament. Pots representar una mina amb el valor `-1`.

1. Les caselles sense mina han de contindre el número de minas que tenen alrededor.

1. Mostra el tablero per pantalla usant `*` per a les minas i el número corresponent per al resta.

Exemple:

```java
1 * 1 0
1 1 2 1
0 0 1 *
```

Controla que no es coloquen dos minas en la mateixa casella.

### Repte 05 `SudokuMini`

Crea un validador per a un sudoku reducido de mida `4x4`.

El tablero contendrá números del `1` al `4`. El programa ha de comprovar:

1. Que totes les files contenen els números del `1` al `4` sense repetir.

1. Que totes les columnes contenen els números del `1` al `4` sense repetir.

1. Que cada subcuadrícula `2x2` conté els números del `1` al `4` sense repetir.

Exemple de tablero vàlid:

```java
int[][] tablero = {
    {1, 2, 3, 4},
    {3, 4, 1, 2},
    {2, 1, 4, 3},
    {4, 3, 2, 1}
};
```

El programa ha d'indicar si el tablero és vàlid i, si no l'és, on es ha encontrado el primer error.

## Bloc 3.1 - La llibreria Arrays

### Repte 06 `RankingTiempos`

Un club d'atletismo registra els temps d'una carrera en un array de `double`.

Desenvolupa un programa que:

1. Genere 20 temps aleatorios entre `9.50` i `20.00` segons.

1. Mostre els temps originals.

1. Creu una còpia ordenada de menor a major usant `Arrays.copyOf()` i `Arrays.sort()`.

1. Mostre el podio amb els tres millors temps.

1. Calcule la mediana.

1. Indique quants corredors han quedado a menys de 1 segon del millor temps.

L'array original no ha de modificar-se.

### Repte 07 `ControlDuplicados`

Crea un programa que genere un array de 30 números aleatorios entre `1` i `15`.

Després ha de:

1. Mostrar l'array original.

1. Crear una còpia ordenada.

1. Mostrar els valors que apareixen repetits i quantes vegades apareix cada un.

1. Crear un nou array amb els valors únics, sense repeticions.

1. Comprovar amb `Arrays.binarySearch()` si un número introduït pel usuari apareix entre els valors únics.

No s'ha de mostrar el mateix valor repetido més d'una vegada en l'informe de duplicats.

## Bloc 3.2 - La llibreria ArrayList

### Repte 08 `ListaCompraInteligente`

Crea un gestor de llista de la compra usant `ArrayList<String>`.

El programa tindrà un menú amb les següents opcions:

1. Afegir producte.

1. Eliminar producte.

1. Marcar producte com comprat.

1. Mostrar productes pendientes.

1. Mostrar productes comprats.

1. Cercar producte.

1. Eixir.

Per a resolver-lo pots usar dos llistes:

- Una llista de productes pendientes.

- Una llista de productes comprats.

El programa no ha de permetre afegir el mateix producte dos vegades, encara que estiga escrit amb majúscules o minúscules diferents.

### Repte 09 `HistorialPuntuaciones`

Un videojuego emmagatzema les puntuacions obtenides per un jugador en un `ArrayList<Integer>`.

Crea un programa que permeta:

1. Afegir noves puntuacions.

1. Eliminar una puntuació concreta.

1. Mostrar les puntuacions ordenades de major a menor.

1. Mostrar la millor puntuació, la pitjor i la mitjana.

1. Mostrar les puntuacions superiors a la mitjana.

1. Mantindre només les 10 millors puntuacions.

Implementa mètodes separats per a cada operació important.

### Repte 10 `FusionListas`

Crea dos `ArrayList<String>` amb noms d'estudiants de dos grups distints.

El programa ha de generar:

1. Una llista amb tots els estudiants sense duplicats.

1. Una llista amb els estudiants que apareixen en tots dos grups.

1. Una llista amb els estudiants que només apareixen en el primer grup.

1. Una llista amb els estudiants que només apareixen en el segon grup.

Després mostra totes les llistes ordenades alfabéticament.

No uses arrays per a resoldre el repte: treballa amb `ArrayList` i els seus mètodes.

## Bloc 3.3 - Cadenes de text

### Repte 11 `NormalizadorTexto`

Crea un programa que reba una frase i la normalice per a poder analizar-la.

El programa ha de:

1. Convertir la frase a minúscules.

1. Eliminar espais repetits.

1. Eliminar signes de puntuació bàsics: `.`, `,`, `;`, `:`, `¿`, `?`, `¡`, `!`.

1. Comptar quantes paraules té.

1. Mostrar la paraula més llarga.

1. Indicar si la frase normalitzada és un palíndromo ignorant espais.

Exemple:

```java
Entrada: Ana, la tacaña catalana.
Normalizada: ana la tacaña catalana
Palíndromo: true
```

### Repte 12 `FrecuenciaLetras`

Escriu un programa que analice la freqüència de lletres d'una frase.

Ha de crear un array de 26 posicions, una per cada lletra de la `a` a la `z`, i comptar quantes vegades apareix cada una.

El programa ha d'ignorar:

- Espais.

- Signes de puntuació.

- Diferències entre majúscules i minúscules.

Al final mostra:

1. La freqüència de cada lletra que aparega almenys una vegada.

1. La lletra més repetida.

1. Si la frase és un pangrama, és a dir, si conté totes les lletres de la `a` a la `z` almenys una vegada.

## Bloc 3.4 - Mapes

### Repte 13 `InventarioAvanzado`

Crea un sistema d'inventari usant un `HashMap<String, Integer>`, on la clau siga el codi del producte i el valor siga el seu stock.

El programa tindrà un menú per a:

1. Donar d'alta un producte.

1. Afegir unitats a un producte.

1. Retirar unitats d'un producte.

1. Consultar el stock d'un producte.

1. Mostrar productes sense stock.

1. Mostrar productes amb stock sota, menor de 5 unitats.

1. Mostrar l'inventari complet.

1. Eixir.

El programa ha d'impedir que el stock d'un producte quede per davall de 0.

### Repte 14 `NotasConEstadisticas`

Crea un sistema de notes usant `HashMap<String, ArrayList<Double>>`.

La clau serà el nom de l'estudiant i el valor serà la seua llista de notes.

El programa ha de permetre:

1. Afegir estudiants.

1. Afegir notes a un estudiant.

1. Eliminar una nota concreta d'un estudiant.

1. Mostrar la mitjana d'un estudiant.

1. Mostrar l'estudiant amb millor mitjana.

1. Mostrar l'estudiant amb pitjor mitjana.

1. Mostrar tots els estudiants ordenats alfabéticament juntament amb les seues notes i mitjana.

Controla que les notes estiguen entre `0` i `10`.

### Repte 15 `AnalizadorVotaciones`

En una votació, cada persona pot votar una sola vegada.

Usa:

- Un `HashMap<String, String>` per a guardar què ha votado cada persona. La clau serà el DNI i el valor serà l'opció votada.

- Un altre `HashMap<String, Integer>` per a comptar els votos de cada opció.

El programa ha de:

1. Permetre registrar un voto.

1. Rechazar el voto si eixe DNI ja ha votado.

1. Mostrar el recuento complet.

1. Mostrar l'opció ganadora.

1. Mostrar el percentatge de votos de cada opció.

1. Permetre consultar què opció votó un DNI concret.

Prepara el programa perquè les opcions vàlides siguen configurables a l'inici.

### Repte 16 `DiccionarioSinonimos`

Crea un xicotet diccionari de sinónimos usant `HashMap<String, ArrayList<String>>`.

La clau serà una paraula i el valor serà una llista de sinónimos.

El programa ha de permetre:

1. Afegir una paraula nova.

1. Afegir un sinónimo a una paraula existent.

1. Eliminar un sinónimo.

1. Cercar els sinónimos d'una paraula.

1. Mostrar totes les paraules del diccionari.

1. Mostrar la paraula que té més sinónimos.

No s'han de permetre sinónimos repetits per a una mateixa paraula.

### Repte 17 `ClasificacionLiga`

Crea un programa que gestione una classificació deportiva usant `HashMap<String, Integer>`, on la clau siga el nom de l'equip i el valor siguen els seus punts.

El menú ha de permetre:

1. Afegir equips.

1. Registrar un partit indicant equip local, equip visitante i resultat.

1. Sumar 3 punts al ganador o 1 punt a cada equip en cas d'empate.

1. Mostrar la classificació ordenada de major a menor puntuació.

1. Mostrar els equips empatats a punts.

1. Mostrar el líder de la liga.

Per a ordenar la classificació pots convertir les entrades del mapa a una llista auxiliar.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Reptes de programació UT3** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Si declarem un array 'int[] notes = new int[5];' en Java, quins són els índexs vàlids del primer i de l'últim element?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El primer element és notes[0] i l'últim és notes[4].</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El primer element és notes[1] i l'últim és notes[5].</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Els índexs comencen en -1.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina col·lecció del Java Collections Framework (JCF) permet emmagatzemar parelles clau-valor (Key-Value) amb cerca ràpida per clau única?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) ArrayList&lt;E&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) HashSet&lt;E&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) HashMap&lt;K, V&gt;</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Tot mètode recursiu ha de tindre com a mínim un cas base que detinga les crides recursives per a evitar un error StackOverflowError.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="length" data-hint="Longitud en anglès (6 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina propietat (sense parèntesis) s'utilitza en Java per a obtindre la grandària d'un array primitiu (p. ex. notes.___)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Reptes de programació UT3**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD03" data-activity="ut03retos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

