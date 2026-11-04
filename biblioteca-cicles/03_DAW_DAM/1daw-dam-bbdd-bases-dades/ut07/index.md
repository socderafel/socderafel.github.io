---
layout: default
title: "UD7: Programació en Servidor: Procediments, Triggers i Cursors — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD7"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6 SQL DQL Consultes"
next_url: "ut0701.html"
next_label: "Començar 7.1 ➡️"
---

# UD7: Programació en Servidor: Procediments, Triggers i Cursors

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 7</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD7: Programació en Servidor: Procediments, Triggers i Cursors** del mòdul professional de **Bases de Dades**.

Fins ara hem utilitzat SQL com un llenguatge purament declaratiu. No obstant això, moltes regles de negoci corporatives exigeixen una lògica algorítmica imperativa (bucles, condicions, tractament d'excepcions) executada directament dins del propi motor de la base de dades. Els llenguatges procedurals com **PL/pgSQL** (PostgreSQL) o les rutines SQL de MySQL permeten implementar **funcions**, **procediments emmagatzemats**, **cursors** i **disparadors (triggers)** que reaccionen automàticament davant canvis en les dades.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA5)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA5:** Desenvolupa procediments emmagatzemats, funcions, disparadors i cursors aplicant les estructures de control del llenguatge procedural de l'SGBD.
  - Comprendre l'arquitectura d'execució de lògica en el servidor de base de dades.
  - Escriure blocs de codi amb declaració de variables, condicions (`IF / CASE`) i bucles (`LOOP / WHILE / FOR`).
  - Crear funcions emmagatzemades que retornen valors escalars o taules completes.
  - Crear procediments emmagatzemats per encapsular transaccions complexes executades amb `CALL`.
  - Dissenyar triggers (`BEFORE`, `AFTER`) per a auditories automàtiques i aplicació de regles d'integritat complexes.
  - Utilitzar les variables especials `OLD` i `NEW` en operacions DML sobre files.
  - Processar conjunts de dades registre a registre mitjançant cursors quan el SQL pur no siga suficient.

---

## 📑 Apartats de la Unitat

1. **[7.1 Introducció a la Programació en SGBD](ut0701.html)**
   - Lògica client vs. lògica en servidor. Blocs de codi anònims (`DO`), declaració de variables i control de flux (`IF-THEN-ELSE`).
2. **[7.2 Funcions Emmagatzemades](ut0702.html)**
   - Sintaxi `CREATE FUNCTION`, paràmetres (`IN`, `OUT`), tipus de retorn escalar i taula (`RETURNS TABLE`), i ús en consultes SQL.
3. **[7.3 Procediments Emmagatzemats](ut0703.html)**
   - Sintaxi `CREATE PROCEDURE`, crida amb `CALL`, i gestió interna de transaccions (`COMMIT` / `ROLLBACK`).
4. **[7.4 Disparadors o Triggers](ut0704.html)**
   - Esdeveniments DML, moments `BEFORE` i `AFTER`, registres `OLD` i `NEW`, i implementació pràctica d'auditoria de seguretat.
5. **[7.5 Cursors i Tractament de Conjunts Fila a Fila](ut0705.html)**
   - Declaració, obertura (`OPEN`), lectura (`FETCH`), tancament (`CLOSE`) de cursors i alternatives conjuntistes d'alt rendiment.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua perícia en programació procedural en servidor resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Lògica en Servidor vs. Client</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin és el benefici principal d'executar un càlcul complex de nòmines dins d'un procediment emmagatzemat a l'SGBD en lloc de fer-ho en el servidor web (Node.js o Java)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Evita haver de transferir milions de files per la xarxa cap a l'aplicació web, executant el processament directament on resideixen les dades a memòria local.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Elimina completament l'ús de disc rígid del servidor.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Fa que el codi web siga cent per cent compatible amb el sistema operatiu Android.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No té cap benefici, sempre és pitjor programar en l'SGBD.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Diferència entre Funció i Procediment</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la distinció tècnica fonamental entre una Funció (FUNCTION) i un Procediment (PROCEDURE) en PostgreSQL modern?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Les funcions han de retornar obligatòriament un valor i es poden invocar dins d'un SELECT, mentre que els procediments s'invoquen amb CALL i poden controlar transaccions (COMMIT/ROLLBACK).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Les funcions només es poden programar en C i els procediments en HTML.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Els procediments només admeten caràcters en majúscules.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap diferència, són sinònims exactes.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Registres OLD i NEW en Triggers</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En un trigger disparat per una sentència UPDATE sobre una taula d'usuaris, què contenen respectivament les variables OLD i NEW?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) OLD conté els valors de la fila abans de la modificació, i NEW conté els nous valors que s'estan intentant desar.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) OLD conté la contrasenya del root i NEW la nova contrasenya del tallafoc.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) OLD conté les dades de l'any passat i NEW les de l'any vinent.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Són variables buides que cal inicialitzar amb un bucle FOR.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Cursors vs. SQL Conjuntista</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per què la majoria d'experts en bases de dades aconsellen evitar els cursors sempre que siga possible?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els cursors processen les dades fila a fila de manera imperativa, resultant ordres de magnitud més lents que les sentències conjuntistes optimitzades pel motor SQL.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè els cursors fan que el ratolí de l'ordinador es bloquege.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè els cursors estan prohibits per la normativa europea de protecció de dades.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè cap SGBD comercial admet cursors des de l'any 2000.</button>
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
