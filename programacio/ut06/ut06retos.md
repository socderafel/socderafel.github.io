---
title: "Reptes de programació UT6"
unit: "6"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT06"
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

# Reptes de programació UT6

> **📌 Empaquetar reptes**
> 

> Empaqueta les activitats, dins de la carpeta **`ut06`**, en la carpeta **`retos`**.

> Les activitats programades en aquesta secció **Reptes** no són obligatòries.

### Repte 01

Repte **`R01_leeNombre`**

Escriure un programa que solicite a l'usuari el seu nom i, utilitzant directament `System.in`, el lea de teclat i mostre per pantalla un missatge de l'estil "*El seu nom és Miguel*".  Recorda que `System.in` és un objecte de tipus `InputStream`. La classe `InputStream` permet **llegir bytes** utilitzant el mètode `read()`. Serà tasca la nostra anar construyendo un `String` a partir dels bytes leídos. Prova el programa de manera que l'usuari incloga en el seu nom algun caràcter “extraño”, per exemple el símbol "€" *Funciona bé el programa*? *Per què*?

### Repte 02

Repte **`R02_leerNombre`**

Repeteix la *Activitat 01* utilitzant un `BufferedReader` associat a l'entrada estàndard. La classe `BufferedReader`, està orientada a llegir caràcters en lloc de bytes. Què ocorre ara si l'usuari introdueix un caràcter "extraño" en el seu nom?

### Repte 03

Repte **`R03_sumarEdades`**

Escriure mètode `void sumaEdades()` que lea de teclat les edades d'una sèrie de persones i mostre quant suman.  El mètode finalizará quan l'usuari introduzca una edat negativa.

Escriure un mètode `main` que anomene al mètode anterior per a probar-lo.

- Modificar el mètode `main` de forma que, abans d'anomenar al mètode `sumaEdades`, es cambie l'entrada estàndard perquè tome les dades del fitxer `edades.txt` en lloc de leerlos de teclat.

### Repte 04

Repte **`R04_leerByte`**

`System.in` (`InputStream`) està orientat a lectura de  bytes. Escriu un programa que lea un byte de teclat i mostre el seu valor (int) per pantalla. Pruébalo amb un caràcter “extraño”, per exemple ‘€’.

### Repte 05

Repte **`R05_leerCaracter`**

`InputStreamReader` (`StreamReader`) està orientat a caràcters. Escriu un programa que lea un caràcter de teclat usant un `InputStreamReader` i mostre el seu valor (`int`) per pantalla. Pruébalo amb un caràcter “extraño”, per exemple ‘€’. S'obté el mateix resultat que en el repte anterior?

### Repte 06

Repte **`R06_concatenar1`**

Escriu un programa que donats dos fitxers de text `f1` i `f2` confeccione un tercer fitxer `f3` del qual contingut siga el de `f1` i a continuació el de `f2`.

### Repte 07

Repte **`R07_nombreApellidos`**

Implementa un programa que genere aleatoriament noms de persona (combinant noms i cognoms de `usa_nombres.txt` i `usa_apellidos.txt`). Es li pedirá a l'usuari quants noms de persona desitja generar i a què fitxer **añadirlos** (per exemple `usa_personas.txt`).

### Repte 08

Repte **`R08_signoZodiaco`**

Programar un Servidor que reba una data (prèviament validada pel client) i ens diga qual és el nostre signe del zodíaco occidental i l'animal que correspon en el zodíaco oriental (animals).

### Repte 09

Repte **`R09_cuentaLineas`**

Escriu un programa que, sense utilitzar la classe `Scanner`, mostre el número de línies que conté un fitxer de text. El nom del fitxer es solicitará a l'usuari al començament de l'ejecució. 

### Repte 10

Repte **`R10_diccionario`**

Implementa un programa que creu la carpeta `Diccionario` amb tants fitxers com lletres de l'abecedario (`A.txt`, `B.txt`… `Z.txt`). Introducirá en cada fitxer les paraules de `diccionario.txt` que comiencen per aquesta lletra.

### Repte 11

Repte  **`R11_cuentaPalabras`**

Escriu un programa que, sense utilitzar la classe `Scanner`, mostre el número de paraules que conté un fitxer de text. El nom del fitxer es solicitará a l'usuari al començament de l'ejecució. 

> **📌 Sugerencia**
> 

> Llegix el fitxer, línia a línia i utilitza la classe `StringTokenizer` o bé el mètode `split` de la classe `String` per a averiguar el nº de paraules.

### Repte 12

Repte **`R12_busquedaEnPi`**

Implementa un programa que demane a l'usuari un número de qualsevol longitud, com per exemple "1234", i li diga a l'usuari si aquest número apareix en el primer milió de decimals del nº pi (estan en el fitxer `pi-million.txt`). No està permitido utilitzar cap llibreria ni classe ni mètode que realitze la cerca. Has d'implementar l'algoritme de cerca tu.

### Repte 13

Repte **`R13__censura`**

Escriure un programa que sustituya per altres, certes paraules d'un fitxer de text. Per a això, es desarrollará i llamará al mètode `void aplicaCensura(String entrada, String censura, String salida)`, que llegix d'un fitxer d'entrada i mitjançant un fitxer de censura, crea el corresponent fitxer modificat. Per exemple:

Fitxer d'entrada:

```java
En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero
```

Fitxer de censura:

```java
lugar sitio
quiero debo
hidalgo noble
```

Fitxer d'eixida:

```java
En un sitio de la Mancha, de cuyo nombre no debo acordarme, no ha mucho tiempo que vivía un noble de los de lanza en astillero
```

**Sugerencia**:  Valora la possibilitat de carregar el fitxer de censura en un mapa o parell clau, valor.

### Repte 14

Repte **`R14_concatenar2`**

Escriu un programa que donats dos fitxers de text `f1` i `f2`, afegisca al final de `f1` el contingut de `f2`. És a dir, com la Activitat 06, però sense produir un nou fitxer.

### Repte 15

Repte **`R15_iguales`**

Escriure un programa que comprove si el contingut de dos fitxers és idéntic. Ja que no sabem de què tipus de fitxers es tracta, (de text, binaris, …) caldrà fer una comparació byte per byte.

### Repte 16

Repte **`R16_calculosPersonas`**

Realitzar un programa que lea la informació del fitxer `personas.dat` i mostre per pantalla l'estatura que tenen de mitjana les persones de la qual edat està entre 20 i 30 anys.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Reptes de programació UT6** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina classe de Java I/O s'utilitza habitualment per a llegir fitxers de text línia per línia de forma eficient mitjançant un buffer?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) BufferedReader (embolicant un FileReader).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) ObjectOutputStream.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) ServerSocket.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina interfície ha d'implementar una classe en Java perquè els seus objectes es puguen convertir en una seqüència de bytes i guardar-se en un fitxer binari amb ObjectOutputStream?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) java.lang.Runnable</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) java.util.Comparator</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) java.io.Serializable</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En la comunicació per xarxa amb Sockets TCP en Java, el servidor espera connexions amb ServerSocket.accept() i el client s'hi connecta amb la classe Socket.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="transient" data-hint="Comença per 'trans' i acaba en 'ient'.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin modificador s'aplica a un atribut d'una classe Serializable si NO volem que eixe atribut es guarde durant la serialització?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Reptes de programació UT6**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD06" data-activity="ut06retos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

