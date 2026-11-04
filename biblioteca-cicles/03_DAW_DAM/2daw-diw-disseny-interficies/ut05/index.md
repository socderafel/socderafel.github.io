# UT 05: Accessibilitat Web (WAI-ARIA i WCAG)

<div class="interactive-progress-tracker" data-unit="ut05" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

L'accés a la informació i als serveis digitals és un dret fonamental universal. Una interfície web que excloga usuaris per raó de discapacitat visual, auditiva, motriu o cognitiva no només vulnera principis ètics de disseny inclusiu, sinó que incompleix estrictament la legislació vigent europea i estatal (Reial Decret 1112/2018 i norma EN 301 549) (Resultat d'Aprenentatge 5 - RA5).

En aquesta unitat didàctica aprofundiràs en la iniciativa **WAI (*Web Accessibility Initiative*)** del W3C i en les directrius internacionals d'accessibilitat **WCAG (*Web Content Accessibility Guidelines*) en les seues versions 2.1 i 2.2**. Dominaràs els **4 principis essencials (POUR: Perceptible, Operable, Comprensible i Robust)** i els criteris d'èxit dels nivells de conformitat **A, AA (obligatori per a administracions públiques i empreses)** i **AAA**. Aprendràs a resoldre desafiaments pràctics: ràtios matemàtiques de contrast cromàtic (mínim 4.5:1), escriptura d'alternatives textuals precises (`alt`), navegació completa mitjançant teclat amb indicadors de focus nítids (`:focus-visible`) i gestió d'elements interactius dinàmics mitjançant la suite **WAI-ARIA** (rols semàntics, estats `aria-expanded` i regions vives `aria-live`). Finalment, dominaràs la metodologia d'auditoria d'accessibilitat combinant eines d'inspecció automàtica (**axe DevTools, WAVE, Google Lighthouse**) amb auditories manuals de lectors de pantalla i proves amb usuaris reals.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 05.01](ut0501.md)** | **Fonaments de l'Accessibilitat Digital i Marc Normatiu** | Concepte d'accessibilitat digital, diversitat funcional (ceguesa, baixa visió, sordesa, motriu, cognitiva), directiva europea i RD 1112/2018. | +75 XP |
| **[UT 05.02](ut0502.md)** | **Els 4 Principis WCAG (POUR) i Nivells de Conformitat** | Principis Perceptible, Operable, Comprensible i Robust, diferències entre nivells A, AA i AAA, i novetats clau de WCAG 2.2. | +75 XP |
| **[UT 05.03](ut0503.md)** | **Bones Pràctiques d'Accessibilitat: Contrast, Textos i Teclat** | Càlcul de contrast cromàtic (4.5:1 / 3:1), redacció d'atributs `alt` funcionals, ordre de tabulació (`tabindex`) i estilització de focus visible. | +75 XP |
| **[UT 05.04](ut0504.md)** | **La Suite WAI-ARIA per a Components Web Dinàmics** | Quan usar ARIA (*First Rule of ARIA*), rols semàntics (`role="dialog"`, `role="tab"`), estats (`aria-expanded`, `aria-hidden`) i regions vives (`aria-live`). | +75 XP |
| **[UT 05.05](ut0505.md)** | **Eines d'Auditoria d'Accessibilitat i Validació Oficial** | Metodologia d'avaluació WCAG-EM, auditories automatitzades amb axe DevTools, WAVE i Lighthouse, i validació manual amb NVDA/VoiceOver. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut05-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: La Primera Regla d'Or de WAI-ARIA</h4>
  </div>
  <p class="challenge-prompt">Quina és la "Primera Regla de l'Ús d'ARIA" (*First Rule of ARIA use*) enunciada pel W3C?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Afegir atributs ARIA a totes les etiquetes HTML sense excepció.</button>
    <button class="btn-check" data-correct="true">Si pots utilitzar un element o atribut natiu d'HTML amb la semàntica i comportament requerits (com un `<button>` en lloc d'un `<div role="button">`), fes-ho sempre en comptes d'utilitzar ARIA.</button>
    <button class="btn-check" data-correct="false">No utilitzar mai cap full d'estil CSS.</button>
    <button class="btn-check" data-correct="false">ARIA només s'ha d'activar els dies que plou.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut05-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Ràtio de Contrast Cromàtic Nivell AA</h4>
  </div>
  <p class="challenge-prompt">Segons el criteri d'èxit 1.4.3 de WCAG 2.1 (Nivell AA), quina és la ràtio mínima de contrast de color exigida entre el text normal i el seu fons?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">1.5 a 1</button>
    <button class="btn-check" data-correct="true">Com a mínim 4.5 a 1 per a text normal (o 3:1 per a text gran de més de 18pt o 14pt en negreta)</button>
    <button class="btn-check" data-correct="false">21 a 1 obligatori en tots els casos</button>
    <button class="btn-check" data-correct="false">1 a 1 (colors idèntics)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut05-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Regions Vives amb aria-live</h4>
  </div>
  <p class="challenge-prompt">En una aplicació de comerç electrònic que mostra un missatge emergent dinàmic quan s'afegeix un producte a la cistella sense recarregar la pàgina, quin atribut assegura que el lector de pantalla llija immediatament el missatge a un usuari cec?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">`aria-hidden="true"`</button>
    <button class="btn-check" data-correct="true">`aria-live="polite"` o `aria-live="assertive"`</button>
    <button class="btn-check" data-correct="false">`role="presentation"`</button>
    <button class="btn-check" data-correct="false">`tabindex="-1"`</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="diw-ut05-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: L'Atribut alt en Imatges Purament Decoratives</h4>
  </div>
  <p class="challenge-prompt">Com s'ha de redactar l'atribut `alt` d'una imatge de fons que només té valor ornamental i cap significat informatiu (per exemple, una línia decorativa abstracta)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Ometent l'atribut `alt` completament.</button>
    <button class="btn-check" data-correct="true">Amb l'atribut buit explícit `alt=""` (o `aria-hidden="true"`), indicant al lector de pantalla que ha d'ignorar-la completament sense anunciar el nom del fitxer.</button>
    <button class="btn-check" data-correct="false">Escrivint `alt="Imatge decorativa que no cal que escoltes"`.</button>
    <button class="btn-check" data-correct="false">Posant-hi el nom del fitxer en majúscules.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 05 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut05')">Descarregar Informe d'Evidències (Aules)</button>
</div>
