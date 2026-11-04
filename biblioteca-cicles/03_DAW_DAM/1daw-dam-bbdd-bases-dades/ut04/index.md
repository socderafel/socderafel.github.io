---
layout: default
title: "UD4: Disseny Físic: SQL DDL i DCL — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3 Model Relacional"
next_url: "ut0401.html"
next_label: "Començar 4.1 ➡️"
---

# UD4: Disseny Físic: SQL DDL i DCL

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 4</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD4: Disseny Físic: SQL DDL i DCL** del mòdul professional de **Bases de Dades**.

Una vegada validat l'esquema lògic de taules normalitzades, arriba el moment de materialitzar-lo físicament a l'SGBD mitjançant el llenguatge **SQL (Structured Query Language)**. En aquesta unitat dominarem la definició d'estructures de dades (**DDL - Data Definition Language**), la implementació de restriccions d'integritat fermes, la creació d'índexs i vistes per optimitzar l'accés, i la gestió de permisos i seguretat d'usuaris (**DCL - Data Control Language**).

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA2)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA2:** Crea bases de dades definint la seua estructura i aplicant mecanismes per garantir la integritat i seguretat de les dades.
  - Distingir els subllenguatges d'SQL (DDL, DML, DQL, DCL, TCL).
  - Executar ordres DDL (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`) per gestionar taules i esquemes.
  - Triar el tipus de dada físic òptim en funció del domini requerit.
  - Definir restriccions d'integritat (`PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`, `DEFAULT`).
  - Configurar accions en cascada o restricció davant esborraments i modificacions.
  - Crear i gestionar índexs, seqüències auto-incrementables i vistes.
  - Implementar polítiques de seguretat d'usuaris, rols i privilegis amb `GRANT` i `REVOKE`.

---

## 📑 Apartats de la Unitat

1. **[4.1 Introducció al Llenguatge SQL i Subllenguatges](ut0401.html)**
   - Història, estàndards ANSI/ISO, taxonomia de subllenguatges i bones pràctiques de nomenclatura.
2. **[4.2 SQL DDL: Creació i Gestió de Taules](ut0402.html)**
   - Sintaxi `CREATE TABLE`, tipus de dades SQL (numèrics, cadenes, dates, JSON), modificacions amb `ALTER TABLE` i eliminació amb `DROP` / `TRUNCATE`.
3. **[4.3 Definició de Restriccions d'Integritat en DDL](ut0403.html)**
   - Claus primàries simples i compostes, claus foranes amb polítiques `ON DELETE` / `ON UPDATE`, `CHECK` de validació i valors `DEFAULT`.
4. **[4.4 Gestió d'Índexs, Vistes i Seqüències](ut0404.html)**
   - Creació d'índexs B-Tree i el seu cost en escriptura, definició de `VIEW` per a seguretat i abstracció, i camps identitat auto-incrementals.
5. **[4.5 SQL DCL: Seguretat, Usuaris, Rols i Permisos](ut0405.html)**
   - Creació d'usuaris (`CREATE USER`), agrupació de permisos en rols (`CREATE ROLE`), sentències `GRANT` i `REVOKE` segons el principi de mínim privilegi.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Posa a prova el teu domini d'SQL DDL i DCL amb aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: DROP vs. TRUNCATE</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la diferència clau entre executar 'DROP TABLE clients;' i 'TRUNCATE TABLE clients;'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) TRUNCATE esborra totes les files a alta velocitat mantenint l'estructura de la taula, mentre que DROP elimina tant les dades com l'estructura de la taula del catàleg.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) DROP només esborra les files parells i TRUNCATE les imparells.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) TRUNCATE requereix reiniciar el servidor físic per a fer efecte.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap diferència, són sinònims exactes en l'estàndard SQL.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Clàusula ON DELETE RESTRICT</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Si tenim una clau forana definida amb 'ON DELETE RESTRICT' i intentem esborrar un client que té 5 factures associades, què passarà?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) L'SGBD esborrarà el client i posarà el camp 'id_client' de les 5 factures a zero.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) L'SGBD avortarà immediatament l'operació d'esborrament impedint que el client s'elimine.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) S'esborraran les 5 factures juntament amb el client.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) S'enviarà un correu d'avís a l'adreça del client.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Cost dels Índexs</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Si bé els índexs acceleren exponencialment les consultes de lectura (SELECT), quin desavantatge provoquen si s'abusa d'ells?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Ralenteixen les operacions d'escriptura (INSERT, UPDATE, DELETE), ja que l'SGBD ha d'actualitzar l'arbre de l'índex a cada canvi, a més de consumir espai en disc.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Fan que el monitor consumisca el doble d'energia elèctrica.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Impedeixen que la base de dades es puga connectar per xarxa local.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Desactiven automàticament les restriccions NOT NULL.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Principi de Mínim Privilegi en DCL</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per què una aplicació web pública (ex: botiga online) hauria de connectar-se a la BD amb un usuari que només tinga permisos SELECT, INSERT i UPDATE, en lloc de l'usuari 'postgres' o 'root'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els usuaris root no poden connectar-se a través d'Internet.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè si l'aplicació pateix una injecció SQL, l'atacant no podrà executar DROP TABLE ni accedir a taules del sistema operatiu.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè l'SGBD cobra una quota mensual per cada sentència executada com a root.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el llenguatge PHP no suporta contrasenyes d'administrador.</button>
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
