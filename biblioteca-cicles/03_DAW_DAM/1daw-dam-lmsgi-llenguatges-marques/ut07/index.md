# UT 07: Definició i Validació d'Estructures XML (DTD i XML Schema / XSD)

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

Aquesta unitat formativa aprofundeix en els mecanismes formals de definició d'estructures i garantia d'integritat per a documents XML. En l'intercanvi de dades corporatives (B2B, sistemes financers, facturació electrònica com Facturae o missatgeria d'assegurances), no n'hi ha prou amb el fet que un document siga «ben format» des del punt de vista sintàctic; cal que complisca un contracte de dades estricte o **esquema formal**.

S'estudien en profunditat:
- **Validació Semàntica:** La distinció fonamental entre *Well-Formed XML* (document ben format) i *Valid XML* (document vàlid segons esquema).
- **Definició de Tipus de Document (DTD):** L'estàndard clàssic heretat de SGML, analitzant la declaració d'elements, operadors de cardinalitat (`?`, `*`, `+`), tipus d'atributs (`CDATA`, `ID`, `IDREF`, `#REQUIRED`, `#IMPLIED`) i entitats generals i de paràmetre.
- **XML Schema Definition (XSD / W3C XML Schema):** L'estàndard modern basat en la mateixa sintaxi XML, espais de noms (*XML Namespaces*), tipus de dades forts i extensibilitat orientada a objectes.
- **Tipus Simples i Facetes de Restricció:** Creació de tipus de dades personalitzats mitjançant expressions regulars (`pattern`), intervals numèrics (`minInclusive`, `maxInclusive`), enumeracions i llistes.
- **Tipus Complexos i Control d'Ocurrències:** Maquetació de nodes compostos amb `xs:sequence`, `xs:choice`, `xs:all` i límits d'aparició amb `minOccurs` i `maxOccurs`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA4 (DAW / DAM / ASIX):** Defineix i valida l'estructura de documents XML utilitzant DTD i esquemes XML (XSD).
  - **CA 4.a:** S'han establit les diferències entre documents XML ben formats i documents vàlids.
  - **CA 4.b:** S'han identificat les capacitats, limitacions i camps d'aplicació dels DTD i dels esquemes XML.
  - **CA 4.c:** S'han creat definicions de tipus de document (DTD) internes i externes.
  - **CA 4.d:** S'han definit elements, atributs i entitats en esquemes DTD.
  - **CA 4.e:** S'han creat esquemes XML (XSD) utilitzant espais de noms.
  - **CA 4.f:** S'han definit tipus simples i complexos en esquemes XSD aplicant restriccions i facetes.
  - **CA 4.g:** S'han validat documents XML respecte als seus corresponents DTDs i esquemes XSD.

---

## Estructura de la Unitat de Treball

1. [UT 07.01: Fonaments de validació XML: documents ben formats vs documents vàlids](./ut0701.md)
2. [UT 07.02: Definició de Tipus de Document (DTD): elements, atributs, entitats i cardinalitat](./ut0702.md)
3. [UT 07.03: Introducció a XML Schema (XSD): espais de noms (Namespaces) i arquitectura W3C](./ut0703.md)
4. [UT 07.04: Tipus simples en XSD: tipus predefinits, restriccions, facetes i patrons RegEx](./ut0704.md)
5. [UT 07.05: Tipus complexos en XSD: sequence, choice, all, ocurrències i atributs](./ut0705.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut07-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Document Ben Format vs Document Vàlid</h4>
  </div>
  <p class="challenge-question">Quina diferència conceptual existeix entre un document XML «ben format» (Well-Formed) i un document XML «vàlid» (Valid)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Són termes sinònims que descriuen exactament la mateixa propietat en XML.</button>
    <button class="btn-check" data-correct="true">B) Un document ben format compleix únicament les regles sintàctiques generals d'XML (un sol element arrel, etiquetes correctament tancades i aniuades, caràcters escapats), mentre que un document vàlid a més compleix fidelment les regles estructurals, tipus de dades i restriccions declarades en el seu DTD o XML Schema associat.</button>
    <button class="btn-check" data-correct="false">C) Un document ben format està xifrat amb HTTPS mentre que el document vàlid està signat amb certificat digital.</button>
    <button class="btn-check" data-correct="false">D) Un document vàlid no pot contindre atributs.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut07-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Integritat Referencial en DTD: Atributs ID i IDREF</h4>
  </div>
  <p class="challenge-question">Quina regla d'integritat garanteix un analitzador XML quan un atribut es defineix com a tipus ID en un DTD?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que el valor de l'atribut siga obligatòriament un nombre enter positiu.</button>
    <button class="btn-check" data-correct="true">B) Que el valor de l'atribut siga un identificador únic en tot el document (no pot repetir-se en cap altre element) i que comence obligatòriament per una lletra o guió baix.</button>
    <button class="btn-check" data-correct="false">C) Que el valor de l'atribut s'emmagatzeme en un fitxer de text separat.</button>
    <button class="btn-check" data-correct="false">D) Que l'element continga com a mínim tres fills directes.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut07-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Limitacions de DTD que van motivar el Desenvolupament de XSD</h4>
  </div>
  <p class="challenge-question">Quins dos motius tècnics fonamentals van dur al W3C a desenvolupar XML Schema (XSD) per a superar les mancances de DTD?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) DTD era massa ràpid de processar i consumia massa poca memòria RAM.</button>
    <button class="btn-check" data-correct="true">B) DTD utilitza una sintaxi pròpia no basada en XML (requerint analitzadors específics) i manca d'un sistema ric de tipus de dades forts (no pot validar si un camp és un enter, una data o compleix una expressió regular, admetent pràcticament només text pla CDATA/#PCDATA).</button>
    <button class="btn-check" data-correct="false">C) DTD no permet documents de més de 10 línies de text.</button>
    <button class="btn-check" data-correct="false">D) DTD va ser comprat per una empresa privada que en va prohibir l'ús lliure.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut07-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Indicadors d'Ordre en XSD: xs:sequence vs xs:choice vs xs:all</h4>
  </div>
  <p class="challenge-question">Quina diferència d'ordenació estableix l'indicador xs:sequence respecte a xs:all en un tipus complex d'XML Schema?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) xs:sequence permet que els elements fills apareguen en qualsevol ordre arbitrari.</button>
    <button class="btn-check" data-correct="true">B) xs:sequence exigeix que els elements fills apareguen exactament en el mateix ordre estricte en què han estat declarats en l'esquema, mentre que xs:all permet que els elements fills declarats apareguen en qualsevol ordre (amb ocurrència màxima d'1).</button>
    <button class="btn-check" data-correct="false">C) xs:all obliga a duplicar cadascun dels elements fills.</button>
    <button class="btn-check" data-correct="false">D) xs:choice només permet carregar arxius binaris.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 7 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 7</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
