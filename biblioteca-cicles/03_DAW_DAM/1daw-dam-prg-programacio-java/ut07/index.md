# UT 07: Fonaments de la Programació Orientada a Objectes (POO) en Java

<div class="interactive-progress-tracker" data-unit="ut07" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa endinsa l'alumnat en el pilar fonamental de l'enginyeria de programari en Java: el **Paradigma Orientat a Objectes (POO)**. Es transcendeix la programació procedimental i estructurada prèvia per a modelar problemes del món real mitjançant abstraccions elegants, modulars i altament reutilitzables:
- **Classes i Instanciació:** Definició de classes com a motles o plantilles que encapsulen **estat** (camps o atributs) i **comportament** (mètodes d'instància), creació d'objectes a la memòria dinàmica (Heap) amb l'operador `new`.
- **Constructors i Inicialització:** Mecanismes de construcció d'objectes, garantia d'estat vàlid inicial, sobrecàrrega de constructors i ús de la paraula clau `this` per a desambiguar atributs i encadenar crides amb `this(...)`.
- **Encapsulament i Nivells de Visibilitat:** Principi d'ocultació d'informació (*Information Hiding*), modificadors d'accés (`private`, `public`, *package-private*, `protected`), i exposició controlada mitjançant mètodes d'accés (*getters*) i mutació (*setters*) amb validacions de domini.
- **Membres Estàtics:** Diferenciació estricta entre dades d'instància i dades globals de classe amb la paraula clau `static`, mètodes d'utilitat, constants `public static final` i el disseny bàsic del patró Singleton.
- **Cicle de Vida i Gestió de Memòria:** Contrast entre la pila d'execució (Stack) i l'emmagatzematge d'objectes (Heap), pas de referències per valor, eliminació automàtica per part del Garbage Collector (GC), i redefinició del mètode fonamental `toString()`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA2 (DAW / DAM):** Reconeix l'estructura d'un programa informàtic, identificant els elements propis del llenguatge de programació orientat a objectes.
  - **CA 2.e:** S'han definit classes i creat instàncies d'aquestes garantint la seua correcta inicialització.
  - **CA 2.f:** S'han utilitzat constructors per a fixar l'estat inicial dels objectes.
- **RA4 (DAW / DAM):** Desenvolupa programes organitzats en classes analitzant i aplicant els principis de la programació orientada a objectes.
  - **CA 4.a:** S'han dissenyat classes que representen elements de la realitat aplicant el principi d'encapsulament.
  - **CA 4.b:** S'han utilitzat modificadors per a establir la visibilitat de classes, atributs i mètodes.
  - **CA 4.c:** S'han definit i invocat mètodes amb diferents tipus de paràmetres i valors de retorn.
  - **CA 4.d:** S'han utilitzat membres estàtics per a representar dades i serveis compartits per totes les instàncies d'una classe.

---

## Estructura de la Unitat de Treball

1. [UT 07.01: El paradigma orientat a objectes: classes, objectes, atributs i mètodes](./ut0701.md)
2. [UT 07.02: Constructors d'objectes, inicialització, sobrecàrrega i la paraula clau this](./ut0702.md)
3. [UT 07.03: Encapsulament, ocultació d'informació i modificadors d'accés (getters i setters)](./ut0703.md)
4. [UT 07.04: Membres de classe estàtics (static): variables, mètodes i constants](./ut0704.md)
5. [UT 07.05: Cicle de vida dels objectes, memòria Stack vs Heap i el mètode toString()](./ut0705.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut07-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Diferència Fonamental entre Classe i Objecte</h4>
  </div>
  <p class="challenge-question">Quina és la definició tècnica precisa que distingeix una classe d'un objecte en Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Una classe és un fitxer .class compilat i l'objecte és el fitxer de text .java que escriu el desenvolupador.</button>
    <button class="btn-check" data-correct="true">B) La classe és el model, plantilla o pla abstracte que defineix l'estructura d'atributs i el comportament de mètodes; l'objecte és una instància concreta i tangible d'aquesta classe materialitzada a la memòria Heap amb un estat propi.</button>
    <button class="btn-check" data-correct="false">C) La classe només conté mètodes estàtics i l'objecte només conté cadenes de text.</button>
    <button class="btn-check" data-correct="false">D) Un objecte és una col·lecció de vectors mentre que una classe és una matriu bidimensional.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut07-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>El Principi d'Encapsulament</h4>
  </div>
  <p class="challenge-question">Per què és una mala pràctica d'enginyeria declarar els atributs d'una classe com a `public` en lloc d'aplicar encapsulament?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els atributs públics ocupen el doble de memòria a la màquina virtual.</button>
    <button class="btn-check" data-correct="true">B) Perquè qualsevol codi extern podria modificar l'estat intern lliurement sense passar per filtres ni regles de validació, violant la integritat i coresponsabilitat de l'objecte.</button>
    <button class="btn-check" data-correct="false">C) Perquè Java prohibeix compilar qualsevol atribut públic que no siga de tipus enter.</button>
    <button class="btn-check" data-correct="false">D) Perquè obliga a reiniciar el sistema operatiu en cada canvi de valor.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut07-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Comportament de la Paraula Clau `static`</h4>
  </div>
  <p class="challenge-question">Si una classe `Comptador` té una variable `public static int total = 0;` i es creen 50 objectes d'aquesta classe, quantes variables `total` existeixen a la memòria?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) S'han creat 50 còpies independents de la variable, una dins de cada objecte a la memòria Heap.</button>
    <button class="btn-check" data-correct="true">B) Existeix exactament una única variable compartida per tota la classe a la memòria de metadades (Metaspace/Heap), accessible per totes les instàncies o directament a través de Comptador.total.</button>
    <button class="btn-check" data-correct="false">C) Depèn del nombre de fils del processador.</button>
    <button class="btn-check" data-correct="false">D) Zero, perquè static elimina la variable després d'executar el constructor.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut07-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>El Pas de Paràmetres d'Objectes en Java</h4>
  </div>
  <p class="challenge-question">Quan passem un objecte com a argument a un mètode en Java, quin comportament exacte té la gestió de memòria?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Java clona físicament l'objecte i en crea una còpia idèntica i aïllada.</button>
    <button class="btn-check" data-correct="true">B) Java passa sempre per valor la referència al punter de l'objecte. Si modifiquem els atributs de l'objecte a través d'aquesta referència, els canvis persisteixen; però si reassignem el paràmetre a una nova instància amb `new`, la referència del programa original no es veu alterada.</button>
    <button class="btn-check" data-correct="false">C) Java passa els objectes per referència directa estil punter C++, reassignant la variable original automàticament.</button>
    <button class="btn-check" data-correct="false">D) Els objectes no es poden passar mai com a argument a cap mètode.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Modelat de Domini POO i Encapsulament</h4>
  </div>
  <p>Dissenya i implementa un paquet Java `com.empresa.gestio` amb una classe de domini robusta (per exemple `CompteBancari` o `Empleat`) amb constructors sobrecarregats, validacions estrictes en setters, mètodes de negoci, membres estàtics per a autoincrement d'IDs únics i sobreescriptura completa del mètode `toString()`. Adjunta l'arxiu ZIP o repositori Git a la tasca d'Aules.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
