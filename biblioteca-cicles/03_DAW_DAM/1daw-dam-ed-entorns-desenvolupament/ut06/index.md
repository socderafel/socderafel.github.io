---
layout: default
title: "UD6: Optimització, Refactorització i Control de Versions (Git) — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD6"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5 Proves de Programari"
next_url: "ut0601.html"
next_label: "Començar 6.1 ➡️"
---

# UD6: Optimització, Refactorització i Control de Versions (Git)

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 6</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD6: Optimització de Codi, Refactorització, Control de Versions (Git/GitHub) i Eines CASE** del mòdul professional d'**Entorns de Desenvolupament**.

El cicle de vida d'una aplicació no acaba quan el codi compila i passa els tests. En un entorn de producció professional, el codi s'ha de mantenir net, llegible i eficient mitjançant tècniques de **refactorització sistemàtica**, supervisat per eines d'anàlisi estàtica de qualitat. A més, el desenvolupament modern és intrínsecament col·laboratiu: conèixer en profunditat el sistema de control de versions distribuït **Git** i plataformes com **GitHub** és el requisit tècnic número u per integrar-se en qualsevol equip professional de programari.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA4)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA4:** Optimitza codi font emprant tècniques de refactorització i eines de control de versions.
  - Identificar problemes de rendiment i "males olors" de codi (*code smells*).
  - Utilitzar eines d'anàlisi estàtica de codi (SonarQube, PMD, Checkstyle) per detectar vulnerabilitats i deute tècnic.
  - Aplicar patrons de refactorització estructurats (Extract Method, Rename, Encapsulate Field) amb el suport de proves unitàries.
  - Dominar l'arquitectura de tres àrees de Git (Working Directory, Staging Area, Repositori Local).
  - Gestionar el cicle complet de canvis amb Git (`init`, `status`, `add`, `commit`, `log`, `diff`).
  - Crear, fusionar i resoldre conflictes entre branques de desenvolupament (`branch`, `merge`).
  - Col·laborar en repositoris remots de GitHub mitjançant clonacions, enviament de canvis (`push`), actualitzacions (`pull`) i Pull Requests.
  - Reconèixer les funcions de les eines CASE i la Integració Contínua (CI/CD).

---

## 📑 Apartats de la Unitat

1. **[6.1 Optimització i Anàlisi Estàtica de Codi](ut0601.html)**
   - Eficiència algorítmica, eines d'anàlisi estàtica (SonarQube, PMD, SpotBugs) i el catàleg de *code smells*.
2. **[6.2 Refactorització de Programari (Refactoring)](ut0602.html)**
   - Què és refactoritzar segons Martin Fowler, la xarxa de seguretat dels tests i el catàleg de refactoritzacions a l'IDE.
3. **[6.3 Control de Versions amb Git: Fonaments i Àrees de Treball](ut0603.html)**
   - Sistemes centralitzats vs. distribuïts, les tres àrees (Working Directory, Staging Area, Commits) i comandes essencials.
4. **[6.4 Gestió de Branques i Treball Col·laboratiu amb Git i GitHub](ut0604.html)**
   - Branques (`branch`, `switch`), fusions (`merge`), resolució de conflictes, repositoris remots (`push`, `pull`) i Pull Requests.
5. **[6.5 Eines CASE i Integració Contínua (CI/CD)](ut0605.html)**
   - Classificació d'eines CASE (Upper, Lower, I-CASE) i automatització de construccions amb GitHub Actions.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua expertesa en codi net i control de versions resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Concepte de Refactorització</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la regla fonamental que defineix una Refactorització segons Martin Fowler?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Afegir cinc noves pantalles a l'aplicació per sorprendre el client.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Modificar l'estructura interna del codi per fer-lo més net, llegible i fàcil de mantenir, SENSE alterar en absolut el seu comportament extern observable.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Canviar el llenguatge Java per Python.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Esborrar la base de dades per alliberar memòria.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Les Tres Àrees de Git</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">On resideixen els fitxers modificats que hem afegit amb 'git add' però sobre els quals encara no hem executat 'git commit'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Al servidor remot de GitHub.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) A la Staging Area (o Índex de preparació).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Al directori de fitxers temporals de Windows.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Al repositori d'un altre company d'equip.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Resolució de Conflictes a Git</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quan es produeix un conflicte de fusió (Merge Conflict) durant un 'git merge'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Quan la targeta de xarxa es queda sense cable.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Quan dos desenvolupadors han modificat les mateixes línies d'un mateix fitxer en branques diferents i Git no pot decidir automàticament quina versió conservar.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Quan el disc dur està ple.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Quan el commit conté més de deu fitxers.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Integració Contínua (CI)</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin és el benefici clau d'un flux d'Integració Contínua (com GitHub Actions) en un equip de desenvolupament?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Automatitza la compilació i l'execució de tota la bateria de proves unitàries a cada 'push', detectant errors d'integració en minuts.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Paga la factura elèctrica de l'empresa.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Emet una trucada telefònica a cada usuari registrat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Elimina la necessitat d'utilitzar Git.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament d'Activitats a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En acabar de resoldre els reptes interactius d'aquest apartat, descarrega el justificant en PDF i puja'l a la tasca corresponent d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Justificant PDF
    </button>
  </div>
</div>
