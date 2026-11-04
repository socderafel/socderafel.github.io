# UT 02: Entrada i Eixida de Dades, Tipus Primitius i Operadors en Java

<div class="interactive-progress-tracker" data-unit="ut02" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aprofundeix en la manipulació de dades a baix nivell i la interacció amb l'usuari a través de la consola estàndard del sistema. En Java, el sistema de tipus és fort i estàtic, exigint una comprensió rigorosa del rang i precisió de cadascun dels tipus de dades primitius i de la gestió de memòria Stack:
- **Els 8 Tipus Primitius de Java:** Enters (`byte`, `short`, `int`, `long`), coma flotant IEEE 754 (`float`, `double`), caràcter Unicode UTF-16 (`char`) i lògic (`boolean`), juntament amb la inferència de tipus local mitjançant la paraula clau `var` (introduïda en Java 10).
- **Operadors i Precedència:** Expressions aritmètiques, operadors relacionals, operadors lògics de curtcircuit (`&&`, `||`, `!`) i l'operador condicional ternari.
- **Conversions de Tipus (Càsting):** Promoció automàtica (*widening*) vs càsting explícit estret (*narrowing*) i riscs de desbordament (*overflow/underflow*).
- **Entrada Estàndard d'Informació:** Ús avançat de `java.util.Scanner`, gestió del caràcter de retorn de carro pendents en el buffer de teclat (`nextLine()`) i adaptació a configuracions regionals (*Locale.US* vs *Locale.GERMAN*).
- **Formatatge Professional d'Eixida:** Impressió formatada mitjançant `System.out.printf()`, especificadors de conversió, delimitació de decimals i estilització de la consola amb codis d'escapament **ANSI**.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA1 (DAW / DAM):** Reconeix l'estructura d'un programa informàtic, identificant i relacionant els elements propis del llenguatge de programació utilitzat.
  - **CA 1.f:** S'han utilitzat els diferents tipus de dades i s'han definit constants i variables.
  - **CA 1.g:** S'han emprat operadors per a la construcció d'expressions d'acord amb la seua precedència.
  - **CA 1.h:** S'han realitzat conversions de tipus de dades tant implícites com explícites.
  - **CA 1.i:** S'han utilitzat operacions d'entrada i sortida per consola amb el format requerit.

---

## Estructura de la Unitat de Treball

1. [UT 02.01: Tipus de dades primitius, literals i inferència de tipus local (var)](./ut0201.md)
2. [UT 02.02: Operadors aritmètics, relacionals, lògics de curtcircuit i operador ternari](./ut0202.md)
3. [UT 02.03: Conversió de tipus (Càsting implícit i explícit) i control de desbordament](./ut0203.md)
4. [UT 02.04: Captura de dades per teclat amb java.util.Scanner i gestió del buffer](./ut0204.md)
5. [UT 02.05: Format d'eixida professional amb System.out.printf i colors ANSI](./ut0205.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut02-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Rangs Numèrics i Desbordament en Tipus Primitius</h4>
  </div>
  <p class="challenge-question">En Java, quin valor exacte s'emmagatzema en la variable resultat si executem: byte valor = 127; valor++; ?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) 128 (es produeix una conversió automàtica a int)</button>
    <button class="btn-check" data-correct="true">B) -128 (es produeix un desbordament cíclic o overflow per la representació en complement a dos de 8 bits: el rang és de -128 a 127)</button>
    <button class="btn-check" data-correct="false">C) 0</button>
    <button class="btn-check" data-correct="false">D) Es llança una excepció de tipus ArithmeticException.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut02-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Inferència de Tipus Local (var): Regles i Àmbits</h4>
  </div>
  <p class="challenge-question">Quina de les següents declaracions amb la paraula clau var és vàlida en Java modern (Java 10+)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) public var edatGlobal = 25;  (Com a atribut de classe)</button>
    <button class="btn-check" data-correct="false">B) var dades; dades = "Hola";  (Sense inicialitzador immediat)</button>
    <button class="btn-check" data-correct="true">C) var scanner = new Scanner(System.in);  (Com a variable local dins d'un mètode amb inicialitzador explícit)</button>
    <button class="btn-check" data-correct="false">D) public void proces(var dada) { }  (Com a tipus de paràmetre de mètode)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut02-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>El Problema del Salt de Línia en el Buffer de Scanner</h4>
  </div>
  <p class="challenge-question">Què ocorre si executem int edat = scanner.nextInt(); i immediatament després fem String nom = scanner.nextLine(); sense haver netejat el buffer de teclat?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El programa demana el nom de forma normal.</button>
    <button class="btn-check" data-correct="true">B) nextLine() consumeix immediatament el caràcter de salt de línia (
) que havia quedat residual en el buffer després de llegir l'enter, assignant una cadena buida "" a nom sense donar oportunitat a l'usuari d'escriure res.</button>
    <button class="btn-check" data-correct="false">C) El teclat es bloqueja físicament.</button>
    <button class="btn-check" data-correct="false">D) Es genera un error de tipus InputMismatchException.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut02-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Formatat de Dades: System.out.printf</h4>
  </div>
  <p class="challenge-question">Què imprimirà exactament per consola la línia: System.out.printf("Total: %06.2f EUR%n", 7.5); ?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Total: 7.50 EUR</button>
    <button class="btn-check" data-correct="true">B) Total: 007,50 EUR (o 007.50 segons Locale), ocupant un mínim de 6 caràcters complets amb zeros a l'esquerra i 2 decimals, seguit d'un salt de línia independent del SO (%n).</button>
    <button class="btn-check" data-correct="false">C) Total: 7 EUR</button>
    <button class="btn-check" data-correct="false">D) Total: %06.2f EUR</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 2 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 2</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
