# UT 04: Programació Estructurada i Disseny Modular en Java

<div class="interactive-progress-tracker" data-unit="ut04" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aborda la descomposició modular d'algorismes i l'arquitectura de funcions i subprogrames en Java. La programació modular constitueix el primer pilar cap a la mantenibilitat de sistemes de gran escala, aplicant el principi clàssic de «Divideix i Venceràs» (*Divide and Conquer*).

S'analitzen en profunditat:
- **Anatomia del Mètode:** Definició de capçaleres, modificadors d'accés, modificador `static`, tipus de retorn (`void` vs tipus primitius/objectes) i la sentència `return`.
- **El Model de Memòria de la Pila (Call Stack):** El cicle de vida dels marcs de pila (*Stack Frames*), la reserva de memòria local per a variables temporals i el desapilament automàtic en finalitzar la invocació.
- **El Gran Mite del Pas de Paràmetres:** La demostració tècnica que en Java **tot pas de paràmetres és estrictament i unívocament PER VALOR**. Es clarifica la diferència crucial entre passar una còpia d'un valor primitiu i passar una còpia d'una referència a un objecte en la memòria Heap.
- **Sobrecàrrega de Mètodes (Method Overloading):** Creació de múltiples mètodes amb el mateix nom diferenciats per la seua signatura (llista de paràmetres), resolució estàtica en temps de compilació i perills d'ambigüitat amb ampliacions numèriques automàtiques.
- **Paràmetres Variables (Varargs):** Sintaxi moderna amb elipsis (`double... notes`), tractament intern com a array i regles de posició.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA1 (DAW / DAM):** Reconeix l'estructura d'un programa informàtic, identificant i relacionant els elements propis del llenguatge de programació utilitzat.
  - **CA 1.a:** S'han identificat els blocs funcionals i mètodes que componen l'estructura d'un programa.
  - **CA 1.e:** S'han documentat les signatures dels mètodes utilitzant comentaris Javadoc amb @param i @return.
- **RA3 (DAW / DAM):** Escriu i depura codi, analitzant i utilitzant les estructures de control del llenguatge.
  - **CA 3.f:** S'han modularitzat programes dividint-los en mètodes independents d'alta cohesió.
  - **CA 3.g:** S'ha comprovat la integritat del pas de paràmetres i el control de l'àmbit de les variables.

---

## Estructura de la Unitat de Treball

1. [UT 04.01: Fonaments del disseny modular: mètodes, signatura, tipus de retorn i invocació](./ut0401.md)
2. [UT 04.02: Pas de paràmetres per valor en Java: primitius vs referències a objectes](./ut0402.md)
3. [UT 04.03: Sobrecàrrega de mètodes (Method Overloading) i resolució de signatures](./ut0403.md)
4. [UT 04.04: Àmbit de variables (Scope) i funcionament de la pila de crides (Call Stack)](./ut0404.md)
5. [UT 04.05: Mètodes amb nombre variable d'arguments (Varargs: Tipus... nom)](./ut0405.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut04-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>El Model de Pas de Paràmetres en Java</h4>
  </div>
  <p class="challenge-question">Com es transmeten els paràmetres als mètodes en el llenguatge de programació Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Els tipus primitius es passen per valor i els objectes es passen obligatòriament per referència nativa (com en C++ amb &).</button>
    <button class="btn-check" data-correct="true">B) TOTS els paràmetres en Java es transmeten estrictament i exclusivament PER VALOR: es crea sempre una còpia exacta del valor emmagatzemat a la pila (si és un tipus primitiu es copia el número; si és un objecte es copia la direcció de memòria de la referència).</button>
    <button class="btn-check" data-correct="false">C) Depèn de si el mètode és declarat com a public o private.</button>
    <button class="btn-check" data-correct="false">D) Tots els paràmetres es passen per referència per defecte.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut04-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Criteri de Sobrecàrrega de Mètodes (Overloading)</h4>
  </div>
  <p class="challenge-question">Quins dos elements defineixen de forma exclusiva la signatura d'un mètode a efectes de sobrecàrrega en Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El tipus de retorn i el modificador d'accés (public/private).</button>
    <button class="btn-check" data-correct="true">B) El nom del mètode i la llista ordenada de tipus dels seus paràmetres d'entrada (la signatura NO inclou el tipus de retorn).</button>
    <button class="btn-check" data-correct="false">C) El nom de les variables utilitzades en el cos.</button>
    <button class="btn-check" data-correct="false">D) El nombre de línies de codi.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut04-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Comportament de la Pila de Crides (Call Stack)</h4>
  </div>
  <p class="challenge-question">Què ocorre amb les variables locals declarades a l'interior d'un mètode quan aquest executa la seua sentència return final?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Es guarden permanentment al disc dur per a la propera execució.</button>
    <button class="btn-check" data-correct="true">B) El marc de pila (Stack Frame) del mètode es destrueix (es desapila) immediatament, alliberant de forma instantània la memòria que ocupaven totes les seues variables locals.</button>
    <button class="btn-check" data-correct="false">C) Es mouen a l'espai de memòria Heap fins que actue el Garbage Collector.</button>
    <button class="btn-check" data-correct="false">D) Es converteixen en variables globals de la classe.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut04-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Regles de Sintaxi per a Paràmetres Varargs</h4>
  </div>
  <p class="challenge-question">Quina restricció sintàctica imposa el compilador de Java quan declarem un mètode amb paràmetres variables Varargs (com public void imprimir(int codi, String... textos))?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Un mètode pot tindre fins a tres paràmetres Varargs diferents.</button>
    <button class="btn-check" data-correct="true">B) Només pot existir com a màxim un únic paràmetre Varargs per mètode i ha de ser obligatòriament l'últim argument de la llista de paràmetres.</button>
    <button class="btn-check" data-correct="false">C) El paràmetre Varargs ha de situar-se sempre en primer lloc abans dels paràmetres ordinaris.</button>
    <button class="btn-check" data-correct="false">D) Els mètodes amb Varargs no poden tindre tipus de retorn.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 4 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 4</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
