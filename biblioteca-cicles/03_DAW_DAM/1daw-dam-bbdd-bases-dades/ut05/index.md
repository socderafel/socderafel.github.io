---
layout: default
title: "UD5: Manipulació de Dades: SQL DML i Transaccions TCL — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4 SQL DDL i DCL"
next_url: "ut0501.html"
next_label: "Començar 5.1 ➡️"
---

# UD5: Manipulació de Dades: SQL DML i Transaccions TCL

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 5</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD5: Manipulació de Dades: SQL DML i Transaccions TCL** del mòdul professional de **Bases de Dades**.

Un cop creades les estructures físiques de taules i restriccions, el dia a dia de qualsevol aplicació consisteix a alimentar, actualitzar i purgar informació mitjançant el subllenguatge **DML (Data Manipulation Language)**. A més, en un entorn multiusuari amb centenars d'operacions per segon, cal garantir la integritat absoluta de les dades mitjançant el mecanisme de les **transaccions** i les propietats **ACID**, controlades pel subllenguatge **TCL (Transaction Control Language)**.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA4)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA4:** Modifica la informació emmagatzemada en la base de dades utilitzant sentències DML i assegurant la integritat transaccional.
  - Executar insercions individuals, massives i basades en subconsultes (`INSERT INTO`).
  - Aplicar estratègies UPSERT per gestionar conflictes de claus primàries o úniques.
  - Modificar dades de forma precisa utilitzant `UPDATE` amb condicions de filtratge.
  - Eliminar informació amb seguretat mitjançant `DELETE` i distingir entre esborrament físic i lògic (soft delete).
  - Comprendre els principis de les transaccions i les 4 propietats ACID (Atomicitat, Consistència, Aïllament, Durabilitat).
  - Controlar l'execució transaccional mitjançant `COMMIT`, `ROLLBACK` i `SAVEPOINT`.
  - Configurar els nivells d'aïllament transaccional per prevenir lectures brutes, no repetibles o fantasma.

---

## 📑 Apartats de la Unitat

1. **[5.1 SQL DML: Inserció de Dades](ut0501.html)**
   - Sintaxi `INSERT INTO`, insercions múltiples, inserció des de consultes (`INSERT ... SELECT`), i gestió de col·lisions (UPSERT / `ON CONFLICT`).
2. **[5.2 SQL DML: Modificació i Actualització de Registres](ut0502.html)**
   - Sintaxi `UPDATE`, clàusula `WHERE`, càlculs aritmètics en línia i actualitzacions basades en joins o subconsultes.
3. **[5.3 SQL DML: Esborrament de Dades](ut0503.html)**
   - Sentència `DELETE FROM`, filtratge estricte, patró d'esborrament lògic (*Soft Delete*) i comparativa definitiva DELETE vs. TRUNCATE.
4. **[5.4 Concepte de Transacció i Propietats ACID](ut0504.html)**
   - Què és una transacció lògica de negoci. Anàlisi detallada d'Atomicitat, Consistència, Aïllament i Durabilitat. El fitxer WAL.
5. **[5.5 SQL TCL: Control de Transaccions i Nivells d'Aïllament](ut0505.html)**
   - Delimitació de transaccions amb `BEGIN`, `COMMIT`, `ROLLBACK` i `SAVEPOINT`. Fenòmens de concurrència i els 4 nivells d'aïllament ANSI SQL.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua capacitat transaccional i de manipulació de dades amb aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Transferència Bancària i Atomicitat</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En una transferència bancària de 200 € del compte A al compte B, es resten 200 € d'A però abans de sumar-los a B es talla el corrent elèctric del servidor. Quina propietat ACID garanteix que els diners no desapareguen?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Durabilitat.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Atomicitat (o es completa tota la transacció o es reverteix completament com si mai haguera ocorregut).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Aïllament no repetible.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Indexació B-Tree.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Risc d'UPDATE sense WHERE</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina conseqüència catastròfica té executar 'UPDATE empleats SET salari = 3000;' sense incloure una clàusula WHERE?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) L'SGBD dóna un error de sintaxi i no fa res.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Absolutament tots els empleats de la taula passaran a cobrar 3.000 €, sobreescrivint irreversibilitat els seus salaris anteriors si no hi ha transacció oberta.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Només s'actualitza el primer empleat de la taula.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) S'esborra la taula empleats del disc.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Lectura Bruta (Dirty Read)</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Què és el fenomen de concurrència conegut com a 'Lectura Bruta' (Dirty Read)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Quan un monitor d'ordinador té pols a la pantalla.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Quan una transacció T1 llegeix dades modificades per una altra transacció T2 que encara NO ha fet COMMIT, i que després podria fer ROLLBACK.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Quan es llegeix un registre que conté caràcters xinesos o japonesos.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Quan un atacant intercepta el trànsit de xarxa per cable Ethernet.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Patró Soft Delete</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin és el motiu principal pel qual les empreses prefereixen implementar 'Soft Delete' (marcar un camp actiu=false o data_esborrat=NOW()) en lloc d'executar un DELETE real?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els discs durs actuals no tenen prou potència per esborrar dades físiques.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Per motius d'auditoria, compliment legal, integritat històrica i possibilitat de recuperar informació esborrada per error.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè la sentència DELETE és il·legal a la Unió Europea.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el llenguatge SQL no permet usar claus foranes amb DELETE.</button>
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
