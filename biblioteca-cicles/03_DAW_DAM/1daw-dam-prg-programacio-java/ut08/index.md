# UT 08: Programació Orientada a Objectes Avançada: Herència, Polimorfisme i Interfícies

<div class="interactive-progress-tracker" data-unit="ut08" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aprofundeix en els mecanismes més potents de la POO per a la creació d'arquitectures de programari escalables, desacoblades i extensibles mitjançant el llenguatge Java:
- **Mecanisme d'Herència:** Extensió de classes amb `extends`, relacions "és-un" (*is-a*), reutilització de lògica, propagació de constructors mitjançant `super(...)` i sobreescriptura segura amb l'anotació `@Override`.
- **Abstracció i Classes Abstractes:** Declaració de classes base i plantilles de disseny mitjançant `abstract`, definició de mètodes sense implementació que obliguen les subclasses a proporcionar la seua lògica de negoci concreta.
- **Interfícies i Contractes:** El pilar del desacoblament arquitectònic; ús de la paraula clau `interface`, herència múltiple de tipus (*multiple typing*), mètodes abstractes clàssics i noves capacitats modernes de Java: mètodes `default` i `static` en interfícies.
- **Polimorfisme Dinàmic:** El principi fonamental que permet tractar objectes de diferents subclasses a través d'una referència comuna de la superclasse o interfície, resolució dinàmica de mètodes (*dynamic method dispatch* o *late binding*), comprovació segura de tipus amb `instanceof` (incloent Pattern Matching) i càstings descendents (*downcasting*).
- **La Classe Arrel `Object` i Comparacions:** Dominar el contracte fonamental dels mètodes `equals()`, `hashCode()` i `clone()`, així com els mecanismes d'ordenació natural (`Comparable<T>`) i criteris d'ordenació personalitzats (`Comparator<T>`).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA4 (DAW / DAM):** Desenvolupa programes organitzats en classes analitzant i aplicant els principis de la programació orientada a objectes.
  - **CA 4.e:** S'ha utilitzat la jerarquia d'herència per a reutilitzar codi i establir relacions de generalització/especialització.
  - **CA 4.f:** S'han definit i utilitzat classes i mètodes abstractes per a establir plantilles de comportament.
  - **CA 4.g:** S'han definit i implementat interfícies per a desacoblar components i establir contractes de servei.
  - **CA 4.h:** S'ha aplicat el polimorfisme d'assignació i s'ha verificat la resolució dinàmica de mètodes en temps d'execució.
  - **CA 4.i:** S'han implementat mecanismes de comparació d'objectes mitjançant Comparable i Comparator.

---

## Estructura de la Unitat de Treball

1. [UT 08.01: Herència en Java: reutilització de codi amb extends, super i @Override](./ut0801.md)
2. [UT 08.02: Classes i mètodes abstractes: la paraula clau abstract i jerarquies](./ut0802.md)
3. [UT 08.03: Interfícies (interface): contractes de disseny, mètodes default i static](./ut0803.md)
4. [UT 08.04: Polimorfisme dinàmic, late binding, càstings i pattern matching amb instanceof](./ut0804.md)
5. [UT 08.05: La classe arrel Object: equals(), hashCode() i ordenació amb Comparable i Comparator](./ut0805.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut08-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>El Paper de la Paraula Clau `super`</h4>
  </div>
  <p class="challenge-question">Quina és la funció de la invocació `super(arg1, arg2);` en la primera línia del constructor d'una subclasse?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Converteix la subclasse en una interfície gràfica.</button>
    <button class="btn-check" data-correct="true">B) Invoca el constructor de la superclasse directa per a garantir que la part heretada de l'objecte s'inicialitza correctament amb els seus propis paràmetres i regles d'estat.</button>
    <button class="btn-check" data-correct="false">C) Atura l'execució del programa per motius de depuració.</button>
    <button class="btn-check" data-correct="false">D) Multiplica la velocitat de processament del mètode.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut08-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Instanciació de Classes Abstractes</h4>
  </div>
  <p class="challenge-question">Per què el compilador de Java rebutja terminantment una instrucció com `Figura f = new Figura();` si la classe `Figura` ha sigut declarada amb `abstract`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè Figura necessita tindre exactament 100 atributs per a ser vàlida.</button>
    <button class="btn-check" data-correct="true">B) Perquè una classe abstracta és un concepte incomplet o una plantilla que pot contindre mètodes abstractes sense cos ({}); per tant, la JVM prohibeix crear instàncies directes d'aquesta.</button>
    <button class="btn-check" data-correct="false">C) Perquè les classes abstractes només es poden fer servir en entorns Windows.</button>
    <button class="btn-check" data-correct="false">D) Perquè abstract és una paraula reservada obsoleta des de Java 8.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut08-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Polimorfisme i Resolució Dinàmica (*Late Binding*)</h4>
  </div>
  <p class="challenge-question">Si tenim una referència `Animal a = new Gos();` i cridem a `a.emetreSo()`, quin mètode s'executa?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El mètode definit en Animal, perquè el tipus de la variable és Animal.</button>
    <button class="btn-check" data-correct="true">B) El mètode sobreescrit en Gos, perquè la JVM resol en temps d'execució (late binding) la implementació concreta de l'objecte real resident al Heap.</button>
    <button class="btn-check" data-correct="false">C) Cap mètode; es llança una excepció de tipus ClassCastException.</button>
    <button class="btn-check" data-correct="false">D) S'executen els dos mètodes al mateix temps de manera concurrent.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut08-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>El Contracte `equals()` i `hashCode()`</h4>
  </div>
  <p class="challenge-question">Quin requisit estricte estableix l'especificació oficial de Java respecte a `equals()` i `hashCode()`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que dos objectes diferents han de tindre obligatòriament el mateix hashCode.</button>
    <button class="btn-check" data-correct="true">B) Si dos objectes són considerats iguals segons el mètode equals(), és obligatori que ambdós retornen exactament el mateix valor enter en invocar hashCode().</button>
    <button class="btn-check" data-correct="false">C) Que hashCode() ha de retornar un número negatiu sempre.</button>
    <button class="btn-check" data-correct="false">D) Que mai no s'han de sobreescriure aquests mètodes en classes que s'emmagatzemen en col·leccions.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Jerarquia Polimòrfica i Interfícies de Negoci</h4>
  </div>
  <p>Dissenya una arquitectura de pagament electrònic mitjançant una interfície `MetodePagament` (amb mètodes `processarPagament` i mètodes `default` per a auditoria), implementada per `TargetaCredit`, `PayPal` i `TransferenciaBancaria`. Crea un servei `Passarel-laPagament` que processe una llista polimòrfica d'operacions sense conéixer les classes concretes.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
