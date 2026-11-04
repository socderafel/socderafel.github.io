---
layout: default
title: "UD1: Introducció als Llenguatges de Marques i XML — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · LMSGI · UD1"
prev_url: "../index.html"
prev_label: "⬅️ Portada del Mòdul"
next_url: "ut0101.html"
next_label: "Començar 1.1 ➡️"
---

# UD1: Introducció als Llenguatges de Marques i XML

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 1</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD1: Introducció als Llenguatges de Marques i Tecnologies XML** del mòdul professional de **Llenguatges de Marques i Sistemes de Gestió d'Informació (LMSGI)** per a 1r DAW, 1r DAM i 1r ASIX.

En el món digital, la informació no només ha de ser llegida per persones humanes, sinó que ha de ser transmesa, processada i emmagatzemada per màquines i sistemes heterogenis (Windows, Linux, mòbils, servidors bancaris) sense cap barrera tecnològica. Els **llenguatges de marques** van nàixer per estructurar i dotar de significat (semàntica) a les dades. En aquesta unitat dominarem l'estàndard **XML (Extensible Markup Language)**, el metallenguatge universal que va establir les bases de la interoperabilitat en Internet.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA1)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA1:** Reconeix les característiques de llenguatges de marques analitzant la seua estructura i aplicant-ne les normes sintàctiques en l'emmagatzematge i transmissió d'informació.
  - Distingir entre marques de presentació, marques de procediment i marques semàntiques/descriptives.
  - Comprendre l'evolució històrica des de SGML cap a HTML i XML.
  - Aplicar estrictament les regles sintàctiques per a la construcció de documents XML "ben formats".
  - Diferenciar entre l'ús d'elements, atributs i entitats especials.
  - Utilitzar seccions CDATA per incloure text pla sense parsejar.
  - Resoldre conflictes d'homonímia mitjançant Espais de Noms XML (*Namespaces*).
  - Reconèixer la diferència entre un document "ben format" i un document "vàlid".

---

## 📑 Apartats de la Unitat

1. **[1.1 Concepte i Evolució dels Llenguatges de Marques](ut0101.html)**
   - Què és una marca, orígens en les arts gràfiques, SGML, HTML, XML i formats moderns (JSON, YAML, Markdown).
2. **[1.2 Sintaxi i Estructura Bàsica d'un Document XML](ut0102.html)**
   - El pròleg XML (`<?xml version="1.0" encoding="UTF-8"?>`), l'element arrel únic, etiquetes tancades i sensibilitat a majúscules.
3. **[1.3 Elements, Atributs i Entitats en XML](ut0103.html)**
   - Quan usar elements vs. atributs, entitats predefinides (`&lt;`, `&gt;`, `&amp;`), i blocs de text literal `<![CDATA[ ... ]]>`.
4. **[1.4 Espais de Noms en XML (Namespaces)](ut0104.html)**
   - Col·lisions de noms en entorns B2B, la sintaxi `xmlns:prefix="URI"`, espai de noms per defecte i l'àmbit d'aplicació.
5. **[1.5 Documents Ben Formats vs. Documents Vàlids](ut0105.html)**
   - Regles universals de bon format (*Well-Formed XML*), eines de validació sintàctica i representació en arbre jeràrquic.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua precisió sintàctica en tecnologies XML resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Regla de l'Element Arrel Únic</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin dels següents fragments de codi XML és estrictament 'Ben Format' segons la normativa del W3C?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) <llibre><titol>Java</titol></llibre><llibre><titol>SQL</titol></llibre></button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) <?xml version="1.0" encoding="UTF-8"?><biblioteca><llibre><titol>Java</titol></llibre></biblioteca></button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) <llibre><titol>Java</llibre></titol></button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) <?xml version="1.0"?><arrel>Dada sense tancar</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Entitat Predefinida per al Símbol '&'</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com s'ha d'escriure el símbol '&' (ampersand) dins del contingut de text d'un document XML per no provocar un error d'anàlisi sintàctica?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Simplement teclejant el caràcter & sol.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Mitjançant l'entitat predefinida '&amp;'.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Escrivint '\and'.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Escrivint '&and;'.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Propòsit dels Espais de Noms (Namespaces)</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin problema crític resol l'ús d'Espais de Noms (xmlns) en combinar documents XML de diferents organitzacions?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Redueix el consum elèctric del servidor web.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Evita conflictes de col·lisió de noms quan dos vocabularis diferents utilitzen la mateixa etiqueta amb significats diferents (com 'taula' de mobles vs. 'taula' de dades).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Fa que el fitxer XML es convertisca en codi binari irreversible.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Permet ignorar la regla de tancar les etiquetes.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Document Ben Format vs. Vàlid</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la diferència exacta entre un document XML 'Ben Format' i un document XML 'Vàlid'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Són exactament la mateixa cosa.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) 'Ben format' compleix les regles sintàctiques universals d'XML; 'Vàlid' és un document ben format que, a més, compleix l'estructura i tipus de dades especificats en un esquema DTD o XSD.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) 'Ben format' només funciona a Windows i 'Vàlid' a Linux.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) 'Vàlid' significa que s'ha compilat amb Java.</button>
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
