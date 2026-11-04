# UT 03: Disseny Web Adaptatiu, Preprocessadors i Frameworks

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En l'actualitat, més del 60% del trànsit web mundial es genera des de telèfons intel·ligents i tauletes de diverses mides, relacions d'aspecte i orientacions. Construir una interfície web que s'adapte amb fluïdesa i elegància a qualsevol pantalla sense perdre usabilitat és un requisit ineludible de la professió (Resultat d'Aprenentatge 3 - RA3).

En aquesta unitat didàctica dominaràs els fonaments del **Disseny Web Adaptatiu (*Responsive Web Design* - RWD)** ideat per Ethan Marcotte, la importància crítica de la metaetiqueta `viewport` i la filosofia de disseny **Mobile First**. Aprofundiràs en l'escriptura avançada de **consultes de mitjans (@media queries)** i punts de ruptura (*breakpoints*). A més, aprendràs a industrialitzar el desenvolupament d'estils mitjançant el preprocessador més potent del mercat, **Sass/SCSS** (variables, niat, mixins, funcions, directrius `@use` i estructures modulars 7-1). Finalment, compararàs i dominaràs els dos grans paradigmes de biblioteques d'estil: els **frameworks basats en components com Bootstrap 5** (amb el seu sistema de reixeta de 12 columnes) i els **frameworks utilitaris d'última generació com Tailwind CSS**, comprenent com aceleren la maquetació en equips de desenvolupament àgil.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 03.01](ut0301.md)** | **Principis del Responsive Web Design i la Filosofia Mobile First** | Reixetes fluides, imatges flexibles, la metaetiqueta viewport (`width=device-width`), millora progressiva vs degradació gràcil. | +75 XP |
| **[UT 03.02](ut0302.md)** | **Consultes de Mitjans (*@media queries*) i Punts de Ruptura** | Sintaxi `@media`, tipus de mitjans, característiques (`min-width`, `orientation`, `resolution`), punts de ruptura estàndards i contenidors fluid. | +75 XP |
| **[UT 03.03](ut0303.md)** | **Preprocessadors CSS: Arquitectura Modular amb Sass/SCSS** | Sintaxi SCSS, compilació, variables, niat de regles, mixins (`@mixin`, `@include`), herència (`@extend`), funcions i el sistema de mòduls `@use`. | +75 XP |
| **[UT 03.04](ut0304.md)** | **Frameworks CSS Basats en Components: Bootstrap 5** | Arquitectura de Bootstrap, sistema de reixeta de 12 columnes (`container`, `row`, `col-*`), classes utilitàries i components interactius (navbar, modals, cards). | +75 XP |
| **[UT 03.05](ut0305.md)** | **Frameworks Utilitaris Moderns: Desenvolupament Àgil amb Tailwind CSS** | Concepte de *Utility-First*, flux de compilació Just-in-Time (JIT), classes d'espaiat, color, tipografia, estats pseudo-classe i variants responsives. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut03-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: La Filosofia Mobile First</h4>
  </div>
  <p class="challenge-prompt">Per quina raó tècnica d'optimització de codi CSS l'estratègia *Mobile First* utilitza consultes de mitjans amb `min-width` en comptes de `max-width`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè els dispositius mòbils no admeten la paraula `max`.</button>
    <button class="btn-check" data-correct="true">Perquè s'escriuen primer els estils més senzills i lleugers com a base universal (per a mòbils), i només es van afegint complexitats de layout progressivament a mesura que la pantalla creix (`min-width`).</button>
    <button class="btn-check" data-correct="false">Perquè el codi escrit amb `min-width` no es descarrega de la xarxa.</button>
    <button class="btn-check" data-correct="false">Perquè ho exigeix el compilador de Java.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut03-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: La Metaetiqueta Viewport</h4>
  </div>
  <p class="challenge-prompt">Què passa en un telèfon mòbil intel·ligent si oblidem incloure l'etiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` a la capçalera HTML?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">El telèfon es bloqueja completament per un error del sistema operatiu.</button>
    <button class="btn-check" data-correct="true">El navegador mòbil assumeix que la pàgina és d'escriptori clàssica (normalment 980px d'ample) i l'allunya amb un zoom minúscul obligant l'usuari a fer zoom manual amb els dits.</button>
    <button class="btn-check" data-correct="false">La pàgina es mostra automàticament en blanc i negre.</button>
    <button class="btn-check" data-correct="false">Totes les imatges s'esborren del servidor.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut03-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Mixins a Sass/SCSS</h4>
  </div>
  <p class="challenge-prompt">En quin cas d'ús és aconsellable emprar un `@mixin` amb paràmetres a SCSS en comptes d'una classe estàndard?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Només quan volem connectar a una base de dades SQL.</button>
    <button class="btn-check" data-correct="true">Quan volem reutilitzar un bloc de regles CSS complexes que necessiten rebre arguments variables (com dimensions dinàmiques, colors de fons o prefixes) en cada invocació.</button>
    <button class="btn-check" data-correct="false">Perquè els mixins eviten haver d'escriure codi HTML.</button>
    <button class="btn-check" data-correct="false">Perquè els mixins només funcionen en dies festius.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut03-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Paradigma Utility-First de Tailwind CSS</h4>
  </div>
  <p class="challenge-prompt">Quin és el tret distintiu fonamental de treballar amb un framework *Utility-First* com Tailwind CSS respecte a Bootstrap?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Tailwind no permet utilitzar colors ni marges.</button>
    <button class="btn-check" data-correct="true">En comptes d'oferir components visuals predissenyats rígids (`.btn`, `.card`), ofereix petites classes atòmiques d'utilitat directa (`flex`, `pt-4`, `text-center`, `bg-blue-600`) que es combinen lliurement a l'HTML sense escriure CSS personalitzat.</button>
    <button class="btn-check" data-correct="false">Tailwind requereix escriure tots els estils en codi binari.</button>
    <button class="btn-check" data-correct="false">Tailwind només funciona en navegadors de consola de text.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 03 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut03')">Descarregar Informe d'Evidències (Aules)</button>
</div>
