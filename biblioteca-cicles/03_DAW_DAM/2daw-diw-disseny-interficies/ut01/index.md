# UT 01: Planificació i Disseny d'Interfícies Web

<div class="interactive-progress-tracker" data-unit="ut01" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

El desenvolupament d'una aplicació web d'èxit comença molt abans d'escriure la primera línia de codi HTML o CSS. Requereix una comprensió profunda de les necessitats dels usuaris, la definició d'una arquitectura d'informació intuïtiva i la creació d'un llenguatge visual harmònic, coherent i accessible (Resultat d'Aprenentatge 1 - RA1).

En aquesta primera unitat didàctica exploraràs els fonaments de la **teoria visual** (el cercle cromàtic, contrastos, patrons de lectura occidentals en F i Z, i tipografia digital amb escales modulars). Dominaràs la distinció conceptual i metodològica entre **Experiència d'Usuari (UX)** i **Disseny d'Interfícies (UI)**, analitzant models mentals i lleis psicològiques de la percepció (lleis de la Gestalt, Llei de Fitts, Llei de Hick). Aprendràs a estructurar l'**arquitectura de la informació** mitjançant mapes de lloc (*sitemaps*) i diagrames de flux (*user flows*), per a posteriorment validar idees mitjançant **tècniques progressives de prototipatge**: des d'esbossos en paper (*sketches*) fins a esquemes funcionals de baixa i alta fidelitat (*wireframes* i *mockups*) amb eines líders com **Figma i Penpot**. Finalment, establiràs les bases de la consistència corporativa mitjançant **guies d'estil i Sistemes de Disseny (*Design Systems*)**.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 01.01](ut0101.md)** | **Principis de Disseny Visual: Color, Composició i Tipografia Digital** | Teoria del color (RGB/HSL, harmonies, psicologia), composició visual, ritme, espai en blanc (*whitespace*) i tipografia per a pantalla. | +75 XP |
| **[UT 01.02](ut0102.md)** | **Experiència d'Usuari (UX) i Disseny d'Interfícies (UI)** | Diferències UX/UI, investigació d'usuaris (*User Personas*), lleis de la Gestalt, Llei de Fitts, Llei de Hick i patrons de disseny. | +75 XP |
| **[UT 01.03](ut0103.md)** | **Arquitectura de la Informació i Fluxos d'Usuari** | Organització i etiquetatge de continguts, mapes de lloc (*sitemaps*), tècniques de *Card Sorting* i diagrames de navegació (*user flows*). | +75 XP |
| **[UT 01.04](ut0104.md)** | **Tècniques de Prototipatge: de l'Esbós al Prototip Interactiu** | Nivells de fidelitat (Sketch, Wireframe, Mockup, Prototip interactiu), maquetació amb Figma/Penpot, components i auto-layout. | +75 XP |
| **[UT 01.05](ut0105.md)** | **Guies d'Estil Corporatives i Sistemes de Disseny (*Design Systems*)** | Manuals d'identitat visual, fitxes de disseny (*Design Tokens*), llibreries d'elements reutilitzables (Atomic Design de Brad Frost). | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut01-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: La Llei de Fitts en Interfícies Web</h4>
  </div>
  <p class="challenge-prompt">Segons la Llei de Fitts, quin factor redueix el temps necessari perquè un usuari faça clic amb precisió sobre un botó d'acció principal (CTA)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Fer el botó el més petit possible per a no saturar la pantalla.</button>
    <button class="btn-check" data-correct="true">Augmentar la mida de l'àrea d'interacció del botó i reduir la distància física des d'on se sol trobar el cursor o el polze de l'usuari.</button>
    <button class="btn-check" data-correct="false">Canviar el color del botó a gris clar semitransparent.</button>
    <button class="btn-check" data-correct="false">Ocultar el botó dins d'un menú desplegable de tercer nivell.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut01-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Metodologia Atomic Design</h4>
  </div>
  <p class="challenge-prompt">En la metodologia de sistemes de disseny *Atomic Design* proposada per Brad Frost, com s'anomena l'element resultant de combinar diversos àtoms (com una etiqueta de text, un camp d'entrada i un botó de cerca)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Organisme</button>
    <button class="btn-check" data-correct="true">Molècula</button>
    <button class="btn-check" data-correct="false">Plantilla (*Template*)</button>
    <button class="btn-check" data-correct="false">Pàgina</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut01-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: La Llei de Hick en el Disseny de Formularis</h4>
  </div>
  <p class="challenge-prompt">Quin és el principi clau de la Llei de Hick i com s'aplica per a millorar la taxa de conversió en pantalles web?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Com més opcions i enllaços oferim a la vegada, més ràpid pren la decisió l'usuari.</button>
    <button class="btn-check" data-correct="true">El temps de presa de decisió s'incrementa logarítmicament amb el nombre i complexitat de les opcions; per tant, cal reduir i esglaonar les eleccions per a evitar la paràlisi per anàlisi.</button>
    <button class="btn-check" data-correct="false">Tots els formularis han de tindre obligatòriament més de 25 camps obligatoris.</button>
    <button class="btn-check" data-correct="false">La tipografia utilitzada ha de ser exclusivament d'estil gòtic o manuscrit.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut01-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Fidelitat en el Prototipatge</h4>
  </div>
  <p class="challenge-prompt">Per quina raó tècnica i metodològica és imprescindible començar el disseny d'una aplicació web amb esquemes de baixa fidelitat (*wireframes* en blanc i negre) abans de treballar amb maquetes interactives amb colors i imatges reals?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè les eines de disseny professional no admeten fitxers de color fins a pagar la subscripció.</button>
    <button class="btn-check" data-correct="true">Per a centrar el debat de l'equip i els clients en l'estructura, flux de navegació i jerarquia dels continguts, sense distreure's prematurament amb debats subjectius sobre colors, tipografies o detalls visuals.</button>
    <button class="btn-check" data-correct="false">Perquè els navegadors antics només poden renderitzar esquemes en escala de grisos.</button>
    <button class="btn-check" data-correct="false">Perquè els wireframes s'escriuen directament en llenguatge C++.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 01 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut01')">Descarregar Informe d'Evidències (Aules)</button>
</div>
