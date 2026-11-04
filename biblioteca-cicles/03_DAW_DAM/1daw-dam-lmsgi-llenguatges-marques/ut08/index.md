# UT 08: Transformació i Consulta de Documents XML (XPath, XSLT i XQuery)

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

Aquesta unitat formativa tanca el cicle de tractament avançat de la informació en format XML abordant les tres tecnologies troncals d'extracció, navegació, consulta i transformació recomanades pel W3C: **XPath**, **XSLT** i **XQuery**.

En un entorn empresarial connectat, les dades persisteixen o viatgen en estructures XML molt denses que necessiten ser:
1. **Navegades i filtrades amb precisió quirúrgica:** Mitjançant **XPath** (XML Path Language), utilitzant rutes d'ubicació, eixos de parentesc i predicats condicionals.
2. **Transformades en altres formats de sortida:** Mitjançant **XSLT** (Extensible Stylesheet Language Transformations), transformant documents XML purs en pàgines HTML5 interactives, documents de text pla CSV, fitxers JSON o dialectes XML alternatius sense alterar l'arbre font original.
3. **Consultades com si foren una base de dades relacional:** Mitjançant **XQuery**, aplicant el paradigma funcional d'expressions **FLWOR** (*For, Let, Where, Order by, Return*) per a creuar, agrupar i projectar col·leccions documentals massives.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA5 (DAW / DAM / ASIX):** Converteix i publica informació continguda en documents XML utilitzant eines de transformació i tecnologies de consulta (XPath, XSLT, XQuery).
  - **CA 5.a:** S'han identificat les capacitats i àmbits d'aplicació dels llenguatges de consulta i transformació XML.
  - **CA 5.b:** S'han utilitzat expressions i eixos de navegació XPath per a localitzar nodes i extreure informació de documents XML.
  - **CA 5.c:** S'han creat fulls d'estil de transformació XSLT utilitzant plantilles, estructures de control, bucles i ordenació.
  - **CA 5.d:** S'han aplicat transformacions XSLT per a generar diferents formats d'eixida (HTML, XML, text pla/CSV).
  - **CA 5.e:** S'han dissenyat i executat consultes XQuery emprant expressions FLWOR per a explotar col·leccions de dades XML.

---

## Estructura de la Unitat de Treball

1. [UT 08.01: Fonaments de XPath: model de nodes, rutes d'ubicació, eixos i predicats](./ut0801.md)
2. [UT 08.02: Funcions estàndard i operadors avançats en XPath (cadenes, números, seqüències)](./ut0802.md)
3. [UT 08.03: Arquitectura de transformació amb XSLT: processadors, plantilles i arbre resultat](./ut0803.md)
4. [UT 08.04: Regles i elements clau en XSLT: template, apply-templates, value-of, for-each, if/choose](./ut0804.md)
5. [UT 08.05: Introducció a XQuery: el llenguatge de consulta per a XML i expressions FLWOR](./ut0805.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut08-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Navegació amb Eixos XPath: // vs /</h4>
  </div>
  <p class="challenge-question">Quina diferència d'abast de cerca existeix entre l'expressió XPath /biblioteca/llibre i l'expressió //llibre?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Són exactament idèntiques en qualsevol document.</button>
    <button class="btn-check" data-correct="true">B) /biblioteca/llibre només selecciona els elements llibre que siguen fills directes immediats de l'arrel biblioteca, mentre que //llibre cerca recursivament i selecciona tots els elements llibre de tot el document sense importar el seu nivell d'aniuament en l'arbre.</button>
    <button class="btn-check" data-correct="false">C) //llibre només cerca en fitxers externs al document.</button>
    <button class="btn-check" data-correct="false">D) /biblioteca/llibre elimina els llibres trobats.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut08-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>El Model de Processament de XSLT: Declaratiu basat en Patrons</h4>
  </div>
  <p class="challenge-question">Quin paradigma de programació governa el funcionament d'un processador XSLT quan aplica un full d'estil de transformació sobre un arbre font XML?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Paradigma imperatiu seqüencial estrictament procedimental basat en instruccions GOTO.</button>
    <button class="btn-check" data-correct="true">B) Paradigma declaratiu i funcional orientat a patrons (Template-Driven / Pattern Matching), on el processador recorre els nodes del document font i dispara automàticament les plantilles (&lt;xsl:template match="..."&gt;) que coincideixen amb els nodes trobats.</button>
    <button class="btn-check" data-correct="false">C) Programació reactiva basada exclusivament en l'objecte window del navegador.</button>
    <button class="btn-check" data-correct="false">D) Programació lògica en Prolog.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut08-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>xsl:apply-templates vs xsl:for-each</h4>
  </div>
  <p class="challenge-question">Per què en disseny de fulls d'estil XSLT complexos es recomana l'ús de xsl:apply-templates en comptes d'abusar de bucles rígids xsl:for-each?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè xsl:for-each no admet més de 10 iteracions.</button>
    <button class="btn-check" data-correct="true">B) Perquè xsl:apply-templates fomenta el desacoblament modular i el polimorfisme de transformació, permetent gestionar elements aniuats de forma recursiva i adaptar-se a canvis en l'estructura del document font sense haver de reescriure bucles manuals.</button>
    <button class="btn-check" data-correct="false">C) Perquè xsl:apply-templates només genera fitxers binaris.</button>
    <button class="btn-check" data-correct="false">D) Perquè xsl:for-each és una directiva exclusiva de CSS3.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut08-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>L'Estructura de la Clàusula FLWOR en XQuery</h4>
  </div>
  <p class="challenge-question">Quina funció compleix la clàusula let en una expressió FLWOR de XQuery?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Itera un a un sobre cadascun dels ítems d'una seqüència (equivalent a un for).</button>
    <button class="btn-check" data-correct="true">B) Associa un valor calculat o una seqüència completa a una variable local d'una sola vegada (sense iterar), facilitant el càlcul d'agregacions, sumes o estructures intermediàries.</button>
    <button class="btn-check" data-correct="false">C) Filtra els resultats segons una condició booleana.</button>
    <button class="btn-check" data-correct="false">D) Ordena els nodes en sentit descendent.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 8 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 8</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
