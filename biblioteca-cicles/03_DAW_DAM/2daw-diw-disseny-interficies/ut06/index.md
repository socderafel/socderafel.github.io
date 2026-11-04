# UT 06: Usabilitat, Rendiment Web i Proves entre Navegadors

<div class="interactive-progress-tracker" data-unit="ut06" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

L'èxit definitiu d'una aplicació web no només depèn de la seua estètica visual o de la seua accessibilitat normativa; requereix que la interfície siga intuïtiva d'utilitzar, extremadament ràpida en qualsevol xarxa mòbil i 100% compatible i resilient en tots els navegadors del mercat (Resultat d'Aprenentatge 6 - RA6).

En aquesta última unitat didàctica dominaràs les metodologies professionals d'**avaluació de la usabilitat**, aprofundint en les **10 heurístiques d'usabilitat de Jakob Nielsen** per a inspeccions expertes i en el disseny i execució de **tests amb usuaris reals mitjançant el protocol de pensament en veu alta (*Think-Aloud Protocol*)**. Estudiaràs en detall la disciplina de l'**Optimització del Rendiment Web (*Web Performance Optimization* - WPO)** i les noves mètriques oficials de Google: les **Core Web Vitals (LCP, INP, CLS)**, comprenent el seu impacte directe en el posicionament SEO i en les taxes de conversió. Aprendràs tècniques avançades de descàrrega: minificació de codi font, compressió moderna amb **Brotli**, càrrega mandrosa (*lazy loading*), preconnexió i memòria cau eficient mitjançant capçaleres HTTP. Finalment, abordaràs les **proves de compatibilitat entre navegadors (*Cross-Browser Testing*)**, l'ús de *polyfills* i la inspecció avançada amb les **eines de desenvolupador (DevTools)** de Google Chrome i Mozilla Firefox per a analitzar el consum de memòria, la cascada de xarxa (*waterfall*) i les fuites de rendiment en el renderitzat.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 06.01](ut0601.md)** | **Metodologies d'Avaluació de la Usabilitat** | Concepte d'usabilitat (ISO 9241-11), les 10 heurístiques de Nielsen, inspecció d'experts vs proves amb usuaris (*Think-Aloud*). | +75 XP |
| **[UT 06.02](ut0602.md)** | **Rendiment Web (WPO) i Mètriques Google Core Web Vitals** | Importància del rendiment, mètriques LCP (*Largest Contentful Paint*), INP (*Interaction to Next Paint*) i CLS (*Cumulative Layout Shift*). | +75 XP |
| **[UT 06.03](ut0603.md)** | **Tècniques d'Optimització de Càrrega i Renderitzat** | Minificació (CSS/JS), compressió GZIP/Brotli, optimització del camí crític de renderitzat (CRP), `defer`/`async` i memòria cau HTTP. | +75 XP |
| **[UT 06.04](ut0604.md)** | **Proves de Compatibilitat entre Navegadors (*Cross-Browser*)** | Diferències entre motors de renderització (Blink, Gecko, WebKit), ús del servei *Can I Use*, prefixos de fabricants (*Autoprefixer*) i polifills (*polyfills*). | +75 XP |
| **[UT 06.05](ut0605.md)** | **Eines de Depuració en Navegadors (DevTools)** | Dominar els panells Elements, Network (anàlisi del waterfall), Performance (gravació de frames i colls d'ampolla) i auditories amb Lighthouse. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut06-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: La Mètrica INP (Interaction to Next Paint)</h4>
  </div>
  <p class="challenge-prompt">Què mesura la mètrica oficial de Google Core Web Vitals anomenada INP (*Interaction to Next Paint*), introduïda per a substituir l'antiga FID?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">La quantitat de tinta que gasta la impressora en imprimir la pàgina.</button>
    <button class="btn-check" data-correct="true">La capacitat de resposta global de la pàgina davant totes les interaccions de l'usuari (clics, tocs tàctils, pulsacions de teclat) durant tota la sessió, mesurant el temps que tarda la interfície a presentar el següent fotograma visual.</button>
    <button class="btn-check" data-correct="false">El temps de resolució del servidor DNS en mil·lisegons.</button>
    <button class="btn-check" data-correct="false">El nombre total d'imatges amb format PNG.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut06-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Desplaçament Acumulat del Disseny (CLS)</h4>
  </div>
  <p class="challenge-prompt">Quina acció de disseny i maquetació web és la principal causant d'una mala puntuació en la mètrica CLS (*Cumulative Layout Shift*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Utilitzar colors amb alt contrast.</button>
    <button class="btn-check" data-correct="true">Inserir imatges, anuncis o iframes sense atributs d'amplada i alçada (`width` i `height`), la qual cosa provoca que la pàgina es moga sobtadament cap avall quan la imatge s'acaba de descarregar mentre l'usuari està llegint.</button>
    <button class="btn-check" data-correct="false">Utilitzar fitxers SVG per al logotip.</button>
    <button class="btn-check" data-correct="false">Escrivint codi HTML semàntic amb l'etiqueta `<main>`.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut06-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Diferència entre defer i async a Scripts</h4>
  </div>
  <p class="challenge-prompt">Per què l'atribut `defer` és el més recomanat per a carregar fitxers JavaScript d'interfície en comparació amb `async`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè `defer` elimina el codi JavaScript del navegador.</button>
    <button class="btn-check" data-correct="true">Perquè `defer` descarrega el fitxer en paral·lel sense bloquejar la construcció del document HTML i garanteix que s'executarà respectant l'ordre exacte de declaració un cop finalitzat el parseig complet del DOM.</button>
    <button class="btn-check" data-correct="false">Perquè `async` només funciona a telèfons intel·ligents de gamma alta.</button>
    <button class="btn-check" data-correct="false">Perquè `defer` tradueix el codi a llenguatge C.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut06-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: La Primera Heurística d'Usabilitat de Nielsen</h4>
  </div>
  <p class="challenge-prompt">Què estableix la primera heurística d'usabilitat de Jakob Nielsen: "Visibilitat de l'estat del sistema"?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Que el sistema operatiu ha de mostrar la seua llicència de pagament a la portada.</button>
    <button class="btn-check" data-correct="true">El sistema ha de mantindre sempre informats els usuaris sobre el que està succeint, proporcionant retroacció visual o informativa adequada i oportuna en un temps raonable (com barres de progrés en pujar un fitxer o missatges de confirmació).</button>
    <button class="btn-check" data-correct="false">Que la pantalla no es pot apagar mai.</button>
    <button class="btn-check" data-correct="false">Que cal mostrar la llista de tots els processos de Linux que corren al servidor.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 06 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut06')">Descarregar Informe d'Evidències (Aules)</button>
</div>
