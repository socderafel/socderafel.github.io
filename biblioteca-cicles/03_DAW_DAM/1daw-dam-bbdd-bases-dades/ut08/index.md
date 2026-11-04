---
layout: default
title: "UD8: Bases de Dades NoSQL i Tendències: MongoDB — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD8"
prev_url: "../ut07/index.html"
prev_label: "⬅️ UD7 Programació Servidor"
next_url: "ut0801.html"
next_label: "Començar 8.1 ➡️"
---

# UD8: Bases de Dades NoSQL i Tendències: MongoDB

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 8</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD8: Bases de Dades NoSQL i Tendències: MongoDB** del mòdul professional de **Bases de Dades**.

Durant dècades, el model relacional va monopolitzar el panorama de la gestió de dades. No obstant això, l'explosió de la Web 2.0, les xarxes socials, els dispositius IoT i els volums immensos de dades desestructurades van impulsar l'aparició del moviment **NoSQL (Not Only SQL)**. En aquesta darrera unitat explorarem els fonaments teòrics dels sistemes distribuïts (**Teorema CAP**, consistència **BASE**) i ens endinsarem pràcticament en el motor documental líder del sector: **MongoDB**.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA7)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA7:** Reconeix les característiques de les bases de dades no relacionals i gestiona la informació en sistemes NoSQL orientats a documents.
  - Comprendre les limitacions dels sistemes relacionals en entorns d'escalabilitat horitzontal massiva.
  - Analitzar el Teorema CAP i el paradigma de consistència eventual BASE.
  - Classificar els tipus de bases de dades NoSQL (clau-valor, columnars, grafs i documentals).
  - Identificar l'estructura de dades de MongoDB (bases de dades, col·leccions, documents JSON/BSON, `ObjectId`).
  - Executar operacions CRUD bàsiques i avançades mitjançant la consola `mongosh`.
  - Aplicar operadors de consulta (`$gt`, `$in`, `$regex`) i modificació atòmica (`$set`, `$inc`, `$push`).
  - Construir canonades d'agregació (*pipelines*) amb `$match`, `$group`, `$project` i `$sort`.

---

## 📑 Apartats de la Unitat

1. **[8.1 El Paradigma NoSQL i el Teorema CAP](ut0801.html)**
   - Limitacions del model relacional per a Big Data. Teorema CAP de Brewer (Consistència, Disponibilitat, Tolerància a Particions) i filosofia BASE.
2. **[8.2 Famílies de Bases de Dades NoSQL](ut0802.html)**
   - Clau-valor (Redis), Columnars (Cassandra), Grafs (Neo4j) i Documentals (MongoDB). Casos d'ús recomanats.
3. **[8.3 MongoDB: Arquitectura i Model de Dades JSON/BSON](ut0803.html)**
   - Documents BSON, col·leccions, camps `_id` i disseny documental: embeure (*embedding*) vs. referenciar (*referencing*).
4. **[8.4 Operacions CRUD a MongoDB](ut0804.html)**
   - Ordres a `mongosh`: `insertOne`, `insertMany`, `find`, `updateOne`, `updateMany`, `deleteOne`, `deleteMany` i operadors de filtre.
5. **[8.5 Agregacions i Indexació a MongoDB](ut0805.html)**
   - El marc d'agregacions (*Aggregation Framework*), etapes de la canonada (`$match`, `$group`, `$project`), creació d'índexs i optimització.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Posa a prova la teua visió moderna sobre sistemes NoSQL resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: El Teorema CAP</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Segons el Teorema CAP d'Eric Brewer, en un sistema de base de dades distribuït a través d'una xarxa subjecta a fallades de comunicació (Partition Tolerance), quina elecció obligatòria s'ha de fer?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Es pot tindre Consistència estricta i Disponibilitat alhora sense cap sacrifici.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Cal triar entre Consistència (rebutjar lectures/escriptures si no es garanteix la dada exacta) o Disponibilitat (retornar sempre resposta encara que continga dades velles).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Cal canviar els discs durs per cintes magnètiques.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) S'eliminen totes les particions de xarxa mitjançant un commutador.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Filosofia BASE vs. ACID</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Què signifiquen les sigles de la filosofia BASE en sistemes NoSQL distribuïts?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Basically Available, Soft state, Eventual consistency.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Binary Access, Secure Encryption, Data Engine.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Backup Automated, System Error, Disk Controller.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Big Array, Storage Element, Database.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Disseny Embed vs. Reference a MongoDB</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En dissenyar una col·lecció de factures a MongoDB, quin és el motiu principal per embeure directament les línies de factura com un array de subdocuments dins de la pròpia factura?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Permet recuperar tota la factura i els seus articles en una única lectura ultra ràpida de disc sense necessitat de fer costosos joins.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè MongoDB prohibeix tenir més d'una col·lecció per base de dades.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè els arrays de JSON ocupen menys memòria RAM que els números.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el llenguatge JavaScript només sap llegir fitxers niats.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Pipeline d'Agregació</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la funció de l'etapa '$group' dins d'una canonada d'agregació (Aggregation Pipeline) a MongoDB?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Esborrar els usuaris que pertanyen al mateix departament.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Agrupar documents segons un camp clau (`_id`) i aplicar càlculs d'acumulació com `$sum` o `$avg` de manera anàloga al GROUP BY d'SQL.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Tancar la connexió amb el servidor MongoDB.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Ordenar els documents alfabèticament.</button>
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
