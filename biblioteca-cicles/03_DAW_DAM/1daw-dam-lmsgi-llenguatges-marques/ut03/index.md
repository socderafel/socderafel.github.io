# UT 03: Fulls d'Estil en Cascada (CSS3) i Disseny Web Adaptatiu

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aprofundeix en el llenguatge de fulls d'estil estàndard de la web: **CSS3** (Cascading Style Sheets 3), coordinat pel W3C CSS Working Group. S'estudia la separació estricta entre estructura de continguts (HTML5) i presentació visual (CSS), aprofundint en els mecanismes interns del motor de renderitzat:
- **Resolució de la Cascada:** Origen de la regla, especificitat numèrica de selectors i ordre de declaració.
- **Model de Caixes (Box Model):** Dimensionament estàndard vs `box-sizing: border-box`.
- **Ecosistema de Selectors Moderns:** Pseudo-classes estructurals, pseudo-elements i variables natives de CSS (*Custom Properties*).
- **Sistemes de Maquetació Avançats:** CSS Flexible Box Layout (*Flexbox*) per a components unidimensionals i CSS Grid Layout per a estructures bidimensionals complexes.
- **Disseny Web Adaptatiu (Responsive Web Design):** Filosofia *Mobile First*, punts de ruptura (*breakpoints*), *Media Queries* i unitats relatives d'escalat (`rem`, `em`, `clamp()`, `vw`, `vh`).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA2 (DAW / DAM / ASIX):** Desenvolupa documents web utilitzant llenguatges de marques, analitzant la seua estructura i aplicant fulls d'estil.
  - **CA 2.c:** S'han aplicat fulls d'estil en cascada a documents web, garantint la separació entre contingut i disseny.
  - **CA 2.g:** S'ha comprovat l'accessibilitat i la interoperabilitat dels documents en diferents navegadors i dispositius (disseny adaptatiu).
  - **CA 2.h:** S'han utilitzat selectors avançats, models de caixes i tècniques modernes de maquetació (Flexbox i Grid).

---

## Estructura de la Unitat de Treball

1. [UT 03.01: Fonaments de CSS3, cascada, herència i especificitat de selectors](./ut0301.md)
2. [UT 03.02: Model de caixes (Box Model) i gestió de flux visual (box-sizing, display, overflow)](./ut0302.md)
3. [UT 03.03: Tipografia web, colors moderns i variables CSS (Custom Properties)](./ut0303.md)
4. [UT 03.04: Sistemes de maquetació: CSS Flexbox i CSS Grid Layout](./ut0304.md)
5. [UT 03.05: Disseny web adaptatiu (Responsive Design), Media Queries i enfocament Mobile First](./ut0305.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut03-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Algorisme d'Especificitat en la Cascada CSS</h4>
  </div>
  <p class="challenge-question">Donades les següents quatre regles CSS que apunten a un mateix botó d'enviament, quina s'aplicarà finalment per tindre major especificitat (sense considerar !important)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) form button.btn-principal { color: blue; }  (Especificitat: 0, 1, 2)</button>
    <button class="btn-check" data-correct="true">B) #formulari-login .btn-principal:hover { color: red; }  (Especificitat: 1, 2, 0)</button>
    <button class="btn-check" data-correct="false">C) body main section form button { color: green; }  (Especificitat: 0, 0, 5)</button>
    <button class="btn-check" data-correct="false">D) .contenidor .formulari .boto { color: yellow; }  (Especificitat: 0, 3, 0)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut03-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Comportament del Model de Caixes: box-sizing: border-box</h4>
  </div>
  <p class="challenge-question">Què fa exactament la declaració universal * { box-sizing: border-box; } en la configuració d'un full d'estil professional?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Fa que els marges externs (margin) es comptabilitzen dins de l'amplada i alçada de la caixa de l'element.</button>
    <button class="btn-check" data-correct="true">B) Fa que les propietats width i height incloguen el contingut, el farciment interior (padding) i la vora (border), evitant que la caixa cresca cap a fora i trenque la maquetació en afegir espaiat.</button>
    <button class="btn-check" data-correct="false">C) Elimina automàticament totes les vores i línies divisòries de les taules HTML.</button>
    <button class="btn-check" data-correct="false">D) Converteix tots els elements en línia com &lt;span&gt; en elements de bloc flotants.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut03-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Flexbox vs CSS Grid: Criteri de Selecció Arquitectònica</h4>
  </div>
  <p class="challenge-question">Quan és tècnicament recomanable emprar CSS Grid Layout en comptes de CSS Flexbox per a dissenyar una interfície web?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Únicament quan la pàgina web es visualitza en dispositius de pantalla xicoteta com smartphones.</button>
    <button class="btn-check" data-correct="false">B) Flexbox està obsolet i CSS Grid l'ha reemplaçat per a qualsevol classe de component.</button>
    <button class="btn-check" data-correct="true">C) Quan cal controlar simultàniament la disposició de la interfície en dues dimensions (files i columnes en una graella global), mentre que Flexbox és ideal per a distribucions en una sola dimensió (un eix principal o fila o columna).</button>
    <button class="btn-check" data-correct="false">D) Només quan es treballa amb formularis que contenen elements &lt;datalist&gt;.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut03-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Metodologia Mobile First i Punts de Ruptura (Breakpoints)</h4>
  </div>
  <p class="challenge-question">Quina estratègia defineix la metodologia de disseny «Mobile First» mitjançant Media Queries en CSS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Escriure primer els estils per a monitors d'escriptori 4K i després aplicar consultes @media (max-width: ...) per a anar restant components.</button>
    <button class="btn-check" data-correct="true">B) Escriure el CSS base sense consultes per a dispositius mòbils de pantalla reduïda i afegir complexitat progressiva mitjançant consultes @media (min-width: ...) a mesura que l'amplada de pantalla augmenta.</button>
    <button class="btn-check" data-correct="false">C) Crear dos dominis web separats físicament (com m.domini.com i www.domini.com) amb codis HTML diferents.</button>
    <button class="btn-check" data-correct="false">D) Desactivar completament les imatges i vídeos en pantalles amb amplada inferior a 768px.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 3 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 3</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
