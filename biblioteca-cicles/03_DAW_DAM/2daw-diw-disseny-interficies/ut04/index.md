# UT 04: Integració d'Elements Multimèdia i Animacions Web

<div class="interactive-progress-tracker" data-unit="ut04" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En una interfície web moderna, els continguts multimèdia i el dinamisme visual no són mers guarniments estètics; són eines essencials de comunicació interactiva, comprensió de dades i connexió emocional amb els usuaris (Resultat d'Aprenentatge 4 - RA4).

En aquesta unitat didàctica aprofundiràs en el món dels **formats gràfics digitals per a la web**, distingint els models de mapa de bits clàssics (JPEG, PNG, GIF) dels formats moderns d'alta compressió com **WebP i AVIF**, i dominant la selecció dinàmica d'imatges segons resolució i amplada mitjançant els atributs `srcset`, `sizes` i l'element semàntic `<picture>`. Dominaràs l'ús dels **Gràfics Vectorials Escalables (*Scalable Vector Graphics* - SVG)**, la seua naturalesa basada en XML, la manipulació directa del DOM vectorial amb CSS i la creació de sistemes d'iconografia lleugers. Així mateix, aprendràs a integrar **àudio i vídeo natiu amb HTML5** (`<video>`, `<audio>`), gestionant còdecs lliures (H.264, VP9, AV1), pistes de subtítols accessibles en format WebVTT i reproductors multimèdia personalitzats. Finalment, dominaràs la cinemàtica web mitjançant **transicions CSS3, transformacions 2D/3D i animacions complexes basades en fotogrames clau (*@keyframes*)**, dissenyant microinteraccions que enriqueixen l'experiència d'usuari sense degradar el rendiment gràfic del navegador.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 04.01](ut0401.md)** | **Formats d'Imatge Web i Imatges Responsives** | Mapa de bits vs vectorial, comparativa JPEG/PNG/WebP/AVIF, atributs `srcset`, `sizes` i l'element `<picture>`. | +75 XP |
| **[UT 04.02](ut0402.md)** | **Gràfics Vectorials Escalables (SVG) i Iconografia** | Estructura XML d'un SVG, viewBox, elements geomètrics bàsics, iconografia integrada (*inline SVG*) i estilització interactiva amb CSS. | +75 XP |
| **[UT 04.03](ut0403.md)** | **Àudio i Vídeo Natiu amb HTML5 i Accessibilitat** | Etiquetes `<video>` i `<audio>`, atributs de control, còdecs de compressió (H.264, VP9, AV1), subtítols WebVTT i API JavaScript de mitjans. | +75 XP |
| **[UT 04.04](ut0404.md)** | **Transicions i Transformacions 2D i 3D en CSS3** | Propietat `transition`, funcions de temporització (*timing functions*), transformacions geomètriques (`translate`, `scale`, `rotate`, `skew`) i perspectiva 3D. | +75 XP |
| **[UT 04.05](ut0405.md)** | **Animacions Avançades amb @keyframes i Microinteraccions** | Declaració `@keyframes`, propietats `animation-*`, optimització de rendiment per GPU (`transform`, `opacity`) i disseny de microinteraccions UI. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut04-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: Format d'Imatge d'Última Generació</h4>
  </div>
  <p class="challenge-prompt">Quin format d'imatge web basat en el còdec de vídeo obert AV1 ofereix actualment la major taxa de compressió mantenint suport complet per a transparència alfa i colors de 10/12 bits?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">BMP clàssic</button>
    <button class="btn-check" data-correct="true">AVIF (*AV1 Image File Format*)</button>
    <button class="btn-check" data-correct="false">GIF animat</button>
    <button class="btn-check" data-correct="false">TIFF sense comprimir</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut04-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Direcció d'Art amb l'Element Picture</h4>
  </div>
  <p class="challenge-prompt">Per quina raó tècnica s'utilitza l'element `<picture>` en comptes d'un simple `<img>` amb `srcset` quan cal aplicar *Art Direction* (Direcció d'Art)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè `<picture>` permet canviar el volum de l'àudio del vídeo.</button>
    <button class="btn-check" data-correct="true">Perquè permet servir imatges amb enquadraments i relacions d'aspecte completament diferents (per exemple, un primer pla quadrat retallat per a mòbils i una vista panoràmica ampla per a escriptori) mitjançant condicions `media` explícites.</button>
    <button class="btn-check" data-correct="false">Perquè `<picture>` converteix les imatges en text pla.</button>
    <button class="btn-check" data-correct="false">Perquè només funciona en navegadors de televisió.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut04-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Propietats Òptimes per a Animacions Fluides (60 fps)</h4>
  </div>
  <p class="challenge-prompt">Quines dues propietats CSS són les úniques recomanades per a animar elements a 60 fps perquè s'executen directament en la capa de composició de la GPU sense provocar reflow (repintat estructural del document)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">`width` i `height`</button>
    <button class="btn-check" data-correct="true">`transform` i `opacity`</button>
    <button class="btn-check" data-correct="false">`top` i `left`</button>
    <button class="btn-check" data-correct="false">`margin` i `padding`</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut04-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: L'Atribut viewBox a SVG</h4>
  </div>
  <p class="challenge-prompt">Quina funció compleix l'atribut `viewBox="0 0 100 100"` en un fitxer vectorial SVG?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Indica quantes vegades s'ha de repetir la imatge a la pantalla.</button>
    <button class="btn-check" data-correct="true">Defineix el sistema intern de coordenades lògiques relatives i la relació d'aspecte del gràfic, permetent que s'escale a qualsevol mida física sense distorsió.</button>
    <button class="btn-check" data-correct="false">Xifra les dades del gràfic amb clau pública RSA.</button>
    <button class="btn-check" data-correct="false">Fixa la velocitat màxima d'animació del vídeo.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 04 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut04')">Descarregar Informe d'Evidències (Aules)</button>
</div>
