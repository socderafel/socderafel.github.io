---
layout: default
title: "UD3: Disseny Orientat a Objectes i Diagrames de Classes UML — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD3"
prev_url: "../ut02/index.html"
prev_label: "⬅️ UD2 IDEs i Depuració"
next_url: "ut0301.html"
next_label: "Començar 3.1 ➡️"
---

# UD3: Disseny Orientat a Objectes i Diagrames de Classes UML

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 3</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD3: Disseny Orientat a Objectes i Diagrames de Classes UML** del mòdul professional d'**Entorns de Desenvolupament**.

El llenguatge **UML (Unified Modeling Language)** és l'estàndard gràfic universal utilitzat a la indústria del programari per visualitzar, especificar, construir i documentar els artefactes d'un sistema orientat a objectes. Dins d'UML, el **Diagrama de Classes** és el diagrama estructural per excel·lència: mostra les classes del sistema, els seus atributs, les seues operacions i les relacions estàtiques que existeixen entre elles (associacions, dependències, agregacions, composicions i jerarquies d'herència).

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA5)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA5:** Dissenya i representa l'estructura estàtica d'aplicacions orientades a objectes utilitzant diagrames de classes UML.
  - Conèixer l'origen, propòsit i classificació dels diagrames UML de l'OMG.
  - Dibuixar classes amb la seua estructura de tres compartiments i visibilitats (`+`, `-`, `#`, `~`).
  - Representar relacions d'associació amb rols i multiplicitats.
  - Distingir entre agregació feble (rombe buit) i composició forta (rombe ple).
  - Modelar l'herència, classes abstractes i interfícies.
  - Transformar sistemàticament diagrames de classes a codi font Java i viceversa (enginyeria directa i inversa).

---

## 📑 Apartats de la Unitat

1. **[3.1 Fonaments d'UML (Unified Modeling Language)](ut0301.html)**
   - Història, l'Object Management Group (OMG) i la classificació en diagrames estructurals i de comportament.
2. **[3.2 Elements del Diagrama de Classes](ut0302.html)**
   - Representació de classes, atributs, mètodes, modificadors d'accés i sintaxi formal de tipus.
3. **[3.3 Relacions entre Classes: Associació, Agregació i Composició](ut0303.html)**
   - Navegabilitat, multiplicitats, agregació (tot-part feble) vs. composició (vida dependent forta).
4. **[3.4 Herència, Generalització i Interfícies](ut0304.html)**
   - Fletxa de generalització, classes i mètodes abstractes, estereotips d'interfícies i polimorfisme.
5. **[3.5 Traducció d'UML a Codi Java i Enginyeria Inversa](ut0305.html)**
   - Correspondència amb camps, col·leccions `List<T>`, generació de codi i eines CASE integrades a l'IDE.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Posa a prova el teu rigor en modelat de classes UML resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Agregació vs. Composició</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la diferència semàntica clau entre una relació d'Agregació (rombe buit) i una de Composició (rombe ple)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) L'agregació és per a números i la composició per a text.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) En la composició, les parts tenen un cicle de vida totalment dependent del tot: si es destrueix l'objecte contenidor, es destrueixen automàticament les parts; en l'agregació, les parts tenen vida independent.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) L'agregació requereix utilitzar memòria RAM i la composició disc SSD.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap diferència semàntica.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Símbol de Visibilitat Protegida</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En la notació estàndard d'UML, quin caràcter s'utilitza abans del nom d'un atribut per indicar que té visibilitat Protegida (Protected)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) +</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) -</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) #</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) ~</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Classes Abstractes en UML</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com es representa visualment que una classe és Abstracta (no instanciable directament) en un diagrama de classes UML?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Escrivint el seu nom en lletra cursiva (itàlica) o utilitzant la propietat {{abstract}}.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Dibuixant la caixa en color vermell fluorescent.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Subratllant el nom de la classe amb tres línies.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Dibuixant un cercle en lloc d'un rectangle.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Multiplicitat 0..*</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com es tradueix a codi Java una relació d'associació cap a una classe 'Article' que té una multiplicitat de '0..*'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Com un camp primitiu simple 'Article a;'.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Com una estructura de col·lecció (ex: 'List<Article> articles = new ArrayList<>();').</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Com un comentari d'una sola línia.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Com una classe abstracta estretament acoblada.</button>
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
