# UT 04: Fonaments i Sintaxi de JavaScript en el Costat Client

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

Aquesta unitat formativa introdueix el llenguatge de programació estàndard que governa el comportament dinàmic en la web: **JavaScript** (estandarditzat sota l'especificació oficial **ECMAScript** per ECMA International TC39). Després d'haver dominat l'estructura semàntica (HTML5) i el disseny visual (CSS3), s'aborda la tercera capa fonamental del client web:
- **Cicle de Vida d'Execució:** El motor JavaScript V8 / SpiderMonkey, el procés d'anàlisi de codi HTML i la càrrega no bloquejant mitjançant atributs `async` i `defer`.
- **Ecosistema ECMAScript Modern (ES6+):** Gestió estricta de memòria i àmbits de bloc amb `let` i `const`, superant el comportament imprecís de `var` i el fenomen d'elevació (*hoisting*).
- **Tipus de Dades i Coerció:** Comparacions estrictes (`===` vs `==`) i sistemes de tipatge dinàmic feble.
- **Paradigma Funcional i Funcions de Primera Classe:** Funcions fletxa (*arrow functions*), àmbit lèxic de `this` i funcions d'ordre superior.
- **Estructures de Dades Compostes:** Manipulació immutable d'arrays amb mètodes funcionals (`map`, `filter`, `reduce`), objectes literals i desestructuració avançada (*destructuring assignment*).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA3 (DAW / DAM / ASIX):** Desenvolupa documents web interactius utilitzant llenguatges de guió (scripts) de client, analitzant la seua estructura i sintaxi.
  - **CA 3.a:** S'han identificat les capacitats i àmbits d'aplicació dels llenguatges de guió en el client web.
  - **CA 3.b:** S'han inserit scripts en documents web utilitzant mecanismes eficients de càrrega.
  - **CA 3.c:** S'han utilitzat les estructures de control, tipus de dades i operadors propis del llenguatge.
  - **CA 3.d:** S'han definit i invocat funcions gestionant el pas de paràmetres i el retorn de valors.
  - **CA 3.e:** S'han manipulat estructures de dades compostes (llistes, vectors i objectes).

---

## Estructura de la Unitat de Treball

1. [UT 04.01: Integració de JavaScript en la web: càrrega no bloquejant (async, defer) i depuració en consola](./ut0401.md)
2. [UT 04.02: Variables, àmbits de bloc i tipus de dades (let, const, hoisting, typeof)](./ut0402.md)
3. [UT 04.03: Operadors, coerció de tipus i estructures de control de flux iteratives i condicionals](./ut0403.md)
4. [UT 04.04: Funcions en JavaScript: declaracions, expressions, funcions fletxa i pas de paràmetres](./ut0404.md)
5. [UT 04.05: Arrays moderns (map, filter, reduce), objectes literals i desestructuració](./ut0405.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut04-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Càrrega de Scripts: async vs defer</h4>
  </div>
  <p class="challenge-question">Per quina raó tècnica s'utilitza l'atribut defer en la càrrega d'un fitxer JavaScript situat en la capçalera (&lt;script defer src="app.js"&gt;) quan el codi depèn d'elements de l'arbre DOM de la pàgina?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè comprimeix el codi JavaScript en format binari abans d'executar-lo.</button>
    <button class="btn-check" data-correct="true">B) Perquè descarrega el fitxer de guió en paral·lel en segon pla sense aturar l'analitzador HTML del navegador i en posposa l'execució fins que el document HTML s'ha analitzat completament (respectant a més l'ordre de declaració).</button>
    <button class="btn-check" data-correct="false">C) Perquè impedeix que altres dominis externs puguen llegir les variables globals del script.</button>
    <button class="btn-check" data-correct="false">D) Perquè converteix automàticament tot el codi asíncron en codi síncron bloquejant.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut04-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Diferències d'Àmbit: let vs const vs var</h4>
  </div>
  <p class="challenge-question">Quina de les següents afirmacions sobre la gestió de variables en ECMAScript modern és estrictament correcta?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Les variables declarades amb var tenen àmbit de bloc delimitat per claus { }.</button>
    <button class="btn-check" data-correct="true">B) let i const tenen àmbit de bloc (block scope) i romanen en la «Zona Morta Temporal» (TDZ) abans de la seua inicialització, impedint el seu ús previ i evitant errors silenciosos per elevació (hoisting).</button>
    <button class="btn-check" data-correct="false">C) const congela completament les propietats internes d'un objecte, fent-lo 100% immutable sense possibilitat de canviar cap camp.</button>
    <button class="btn-check" data-correct="false">D) let permet tornar a redeclarar la mateixa variable amb el mateix nom dins del mateix bloc de codi.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut04-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Coerció de Tipus i Operador d'Igualtat Estricta</h4>
  </div>
  <p class="challenge-question">Quin és el resultat d'avaluar les expressions: 5 == "5" i 5 === "5" en el motor de JavaScript, i quina és la recomanació estàndard de desenvolupament?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Ambdues retornen true, i es recomana usar sempre == per flexibilitat de tipus.</button>
    <button class="btn-check" data-correct="false">B) Ambdues retornen false, perquè una és enter i l'altra és cadena.</button>
    <button class="btn-check" data-correct="true">C) 5 == "5" avalua a true per coerció implícita de tipus, mentre que 5 === "5" avalua a false; es recomana emprar sempre === per a garantir integritat estricta de valor i tipus.</button>
    <button class="btn-check" data-correct="false">D) La segona llança una excepció de tipus TypeError en consola.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut04-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Programació Funcional amb Arrays: map, filter, reduce</h4>
  </div>
  <p class="challenge-question">Donat l'array const notes = [4, 7, 8, 3, 9, 5];, quina cadena de mètodes d'array obté la mitjana exacta només dels alumnes que han aprovat (nota &gt;= 5)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) notes.forEach(n => n >= 5).sum() / notes.length</button>
    <button class="btn-check" data-correct="true">B) const aprovats = notes.filter(n => n >= 5); const mitjana = aprovats.reduce((acc, curr) => acc + curr, 0) / aprovats.length;</button>
    <button class="btn-check" data-correct="false">C) notes.map(n => n >= 5 ? n : null).reduce((a, b) => a + b)</button>
    <button class="btn-check" data-correct="false">D) notes.find(n => n >= 5).calculateAverage()</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 4 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 4</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
