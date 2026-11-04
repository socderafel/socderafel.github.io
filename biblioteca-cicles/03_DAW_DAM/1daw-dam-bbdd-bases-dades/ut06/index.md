---
layout: default
title: "UD6: Consultes a Bases de Dades: SQL DQL — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD6"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5 SQL DML i TCL"
next_url: "ut0601.html"
next_label: "Començar 6.1 ➡️"
---

# UD6: Consultes a Bases de Dades: SQL DQL

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 6</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD6: Consultes a Bases de Dades: SQL DQL** del mòdul professional de **Bases de Dades**.

L'extracció precisa de dades és l'operació més freqüent en qualsevol sistema d'informació, representant més del 80% de les consultes en aplicacions web i mòbils. El subllenguatge **DQL (Data Query Language)**, articulat al voltant de la poderosa sentència **`SELECT`**, permet des de filtratges senzills fins a anàlisis estadístiques complexes, combinacions multidimensionals de taules (`JOIN`), subconsultes correlacionades i optimització de plans d'execució.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA3)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA3:** Consulta la informació emmagatzemada en una base de dades utilitzant assistents i llenguatges de consulta (DQL).
  - Escriure consultes bàsiques amb clàusules de selecció, projecció, ordenació i paginació.
  - Aplicar funcions d'agregació (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) i la clàusula `GROUP BY`.
  - Diferenciar amb exactitud entre el filtratge de files (`WHERE`) i el filtratge d'agrupacions (`HAVING`).
  - Dominar la combinació de dades entre múltiples taules mitjançant `INNER JOIN` i `OUTER JOIN` (LEFT, RIGHT, FULL).
  - Resoldre problemes complexos mitjançant subconsultes i expressions de taula comunes (CTEs amb `WITH`).
  - Combinar resultats amb operadors de conjunts (`UNION`, `INTERSECT`, `EXCEPT`).
  - Analitzar el rendiment de consultes mitjançant `EXPLAIN ANALYZE`.

---

## 📑 Apartats de la Unitat

1. **[6.1 Estructura Bàsica de Consultes SQL DQL](ut0601.html)**
   - Sintaxi `SELECT ... FROM ... WHERE`, àlies de camps, operadors relacionals, `LIKE`, `IN`, `BETWEEN`, `IS NULL`, `ORDER BY` i paginació amb `LIMIT` i `OFFSET`.
2. **[6.2 Funcions d'Agregació i Agrupament de Dades](ut0602.html)**
   - Resums estadístics (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`), clàusula `GROUP BY`, i filtratge d'agregacions mitjançant `HAVING`.
3. **[6.3 Combinació de Taules: Joins Relacionals](ut0603.html)**
   - Àlgebra relacional a la pràctica: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`, `CROSS JOIN` i autoreferències (*self-join*).
4. **[6.4 Subconsultes i Expressions de Taula Comunes (CTEs)](ut0604.html)**
   - Subconsultes escalars, correlacionades, predicats `EXISTS` / `NOT EXISTS`, i modularització amb `WITH` (CTEs).
5. **[6.5 Operadors de Conjunts i Optimització de Consultes](ut0605.html)**
   - `UNION` vs. `UNION ALL`, `INTERSECT`, `EXCEPT`. Lectura i interpretació de plans d'execució amb `EXPLAIN ANALYZE`.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua destresa analítica en consultes SQL resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: WHERE vs. HAVING</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin és el criteri exacte per utilitzar HAVING en lloc de WHERE en una consulta SQL?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) WHERE s'utilitza només per a lletres i HAVING per a números.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) WHERE filtra files individuals abans d'agrupar, mentre que HAVING filtra els grups resultants després d'aplicar GROUP BY i les funcions d'agregació.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) HAVING és una paraula obsoleta que ja no funciona en PostgreSQL.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap diferència, són completament intercanviables.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Comportament de LEFT JOIN</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Si fem un LEFT JOIN entre 'clients' (taula esquerra) i 'comandes' (taula dreta), què obtindrem per a aquells clients que mai han comprat res?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Eixos clients no apareixeran en el resultat de la consulta.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Apareixeran les dades del client amb les columnes de la comanda plenes de valors NULL.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) L'SGBD donarà un error de clau forana buida.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) S'inventarà una comanda amb preu zero.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Subconsultes amb EXISTS</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin avantatge té utilitzar 'WHERE EXISTS (SELECT 1 FROM ...)' enfront de 'WHERE col IN (SELECT col FROM ...)' en taules molt grans?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) EXISTS s'atura tan prompte com troba la primera coincidència (avaluació de curtcircuit), resultant generalment molt més ràpid.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) EXISTS permet canviar la contrasenya de l'administrador.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) IN només admet números negatius.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) EXISTS ocupa menys espai a la memòria cau del disc rígid.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Plans d'Execució EXPLAIN</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En la sortida de la comanda 'EXPLAIN SELECT...', quin tipus d'accés indica que l'SGBD ha hagut de llegir totes les pàgines de la taula una a una perquè no ha trobat un índex adequat?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Index Scan.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Sequential Scan (Seq Scan / Full Table Scan).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Hash Join.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Bitmap Index Scan.</button>
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
