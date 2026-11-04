# UT 02: Maquetació Avançada amb HTML5 Semàntic i CSS3

<div class="interactive-progress-tracker" data-unit="ut02" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

La transformació d'un disseny visual en una interfície web real requereix un domini precís dels dos llenguatges bàsics del desenvolupament del costat client: **HTML5** per a l'estructuració del significat i **CSS3** per a la representació espacial, estilització i maquetació (Resultat d'Aprenentatge 2 - RA2).

En aquesta unitat didàctica aprofundiràs en la **semàntica HTML5**, abandonant definitivament l'ús indiscriminat de contenidors genèrics (`div`) en favor d'etiquetes estructurals que atorguen valor als motors de cerca (SEO) i als lectors de pantalla per a usuaris amb discapacitat visual. Dominaràs el funcionament íntim del **Model de Caixa (*Box Model*)**, la diferència entre el càlcul clàssic `content-box` i l'estàndard professional `border-box`, així com els esquemes de posicionament i el càlcul matemàtic de l'**especificitat dels selectors CSS**. Finalment, dominaràs els dos pilars revolucionaris de la maquetació moderna del W3C: **Flexbox** (per a distribucions unidimensionals d'elements) i **CSS Grid** (per a reixetes bidimensionals complexes de files i columnes), complementats amb l'ús avançat de **propietats personalitzades natives (*Custom Properties*)** i funcions matemàtiques fluides com `clamp()`.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 02.01](ut0201.md)** | **Estructura Semàntica amb HTML5** | Rols d'etiquetes estructurals: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` i bones pràctiques d'accessibilitat nativa. | +75 XP |
| **[UT 02.02](ut0202.md)** | **El Model de Caixa (*Box Model*), Posicionament i Especificitat** | Marges, vores, farciment, `box-sizing: border-box`, flux normal, esquemes de posicionament (`relative`, `absolute`, `fixed`, `sticky`) i especificitat CSS. | +75 XP |
| **[UT 02.03](ut0203.md)** | **Maquetació Unidimensional amb CSS Flexible Box (Flexbox)** | Contenidor flexible (`display: flex`), eixos principal/creuat (`flex-direction`), alineació (`justify-content`, `align-items`) i elements flexibles (`flex-grow`, `shrink`). | +75 XP |
| **[UT 02.04](ut0204.md)** | **Maquetació Bidimensional amb CSS Grid** | Reixeta (`display: grid`), definició de columnes/files (`grid-template-columns`, unitat `fr`), àrees nominades (`grid-template-areas`) i buits (`gap`). | +75 XP |
| **[UT 02.05](ut0205.md)** | **Variables Natives CSS (*Custom Properties*) i Funcions Matemàtiques** | Declaració i herència (`:root`, `var()`), disseny tipogràfic fluid amb `clamp()`, `min()`, `max()` i fulls d'estil per a impressió (`@media print`). | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut02-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: Significat Semàntic de l'Etiqueta Article</h4>
  </div>
  <p class="challenge-prompt">Segons l'especificació oficial HTML5 del W3C/WHATWG, quan és obligatori utilitzar l'etiqueta `<article>` en comptes de `<section>`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Només quan el text tinga més de 1.000 paraules.</button>
    <button class="btn-check" data-correct="true">Quan el contingut represente una composició completa, autònoma i independent que puga ser distribuïda o reutilitzada per separat (com un post de blog, un comentari o una targeta de producte).</button>
    <button class="btn-check" data-correct="false">Únicament a la barra lateral dreta de la pàgina web.</button>
    <button class="btn-check" data-correct="false">Quan el contingut estiga escrit exclusivament en anglès.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut02-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Càlcul de Mida amb border-box</h4>
  </div>
  <p class="challenge-prompt">Si un element té declarat `width: 300px; padding: 20px; border: 5px solid black; box-sizing: border-box;`, quina serà l'amplada física total que ocuparà a la pantalla?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">350 píxels (300 + 40 de padding + 10 de vores)</button>
    <button class="btn-check" data-correct="true">Exactament 300 píxels (el padding i les vores es resten de l'interior del contingut)</button>
    <button class="btn-check" data-correct="false">325 píxels</button>
    <button class="btn-check" data-correct="false">Depèn de la resolució del monitor</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut02-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Elecció entre Flexbox i CSS Grid</h4>
  </div>
  <p class="challenge-prompt">Quina regla d'or de decisió s'aplica per a triar entre Flexbox i CSS Grid en un component d'interfície web?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Flexbox és per a dispositius mòbils i CSS Grid només per a pantalles de televisió.</button>
    <button class="btn-check" data-correct="true">Flexbox s'orienta a maquetacions unidimensionals (elements alineats en una sola fila o columna, com una barra d'eines), mentre que CSS Grid és per a estructures bidimensionals (control simultani de files i columnes alineades).</button>
    <button class="btn-check" data-correct="false">CSS Grid ha quedat obsolet i el W3C recomana usar només taules HTML.</button>
    <button class="btn-check" data-correct="false">Flexbox només admet elements de tipus botó.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut02-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Tipografia Fluida amb clamp()</h4>
  </div>
  <p class="challenge-prompt">Com actua la funció nativa CSS `font-size: clamp(1rem, 2.5vw, 2rem);` en el disseny d'un titular?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Afegeix una ombra de color blau al text.</button>
    <button class="btn-check" data-correct="true">Calcula una mida dinàmica que escala de manera fluida amb el 2.5% de l'amplada de la pantalla (`2.5vw`), però sense reduir-se mai per sota de `1rem` (mínim) ni superar mai `2rem` (màxim).</button>
    <button class="btn-check" data-correct="false">Bloqueja el text perquè no puga ser seleccionat amb el ratolí.</button>
    <button class="btn-check" data-correct="false">Obliga a carregar la tipografia des de Google Fonts per connexió segura.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 02 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut02')">Descarregar Informe d'Evidències (Aules)</button>
</div>
