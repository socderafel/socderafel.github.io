---
layout: default
title: "UD8: Pensament Computacional i Automatització Bàsica — Ofimàtica i Arxiu de Documents"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD8"
---

# 🤖 UD8: Pensament Computacional i Automatització Bàsica

Benvingut/da a la **Unitat Didàctica 8** d'**Ofimàtica i Arxiu de Documents (OAD)**. El pensament computacional no és només per a enginyers de programari; és la capacitat lògica de resoldre problemes complexos descomponent-los en passos senzills. En aquesta unitat aprendràs a crear algoritmes, programaràs jocs i aplicacions interactives amb blocs a **Scratch** i descobriràs la robòtica física amb la placa educativa **BBC micro:bit**.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│     UD8: PENSAMENT COMPUTACIONAL I AUTOMATITZACIÓ BÀSICA               │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 🧠 FONAMENTS LÒGICS │ 🧩 PROGRAMACIÓ BLOCS│ 📟 ROBÒTICA I MICRO:BIT      │
│ • Algoritmes pas a pas│ • Escenari i sprites│ • Matriu 5x5 LEDs        │
│ • Descomposició    │ • Bucles repetir/sempre│ • Botons A i B           │
│ • Patrons d'oficina│ • Condicions SI/SINÓ │ • Sensors de temperatura   │
│ • Abstracció       │ • Variables i marcadors│ • Entorn MakeCode        │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Continguts de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **8.1** | **Fonaments del pensament computacional** | Descomposició, patrons, abstracció i disseny d'algoritmes lògics pas a pas. | [**Accedir al Tema 8.1 ➡️**](./ut0801.html) |
| **8.2** | **Introducció a Scratch i espai de treball** | L'escenari, personatges (*sprites*), disfresses i sistema de coordenades X/Y. | [**Accedir al Tema 8.2 ➡️**](./ut0802.html) |
| **8.3** | **Estructures de control: bucles i condicionals** | Seqüències lineals, bucles d'iteració (`repetir`, `per sempre`) i bifurcacions `si... sinó`. | [**Accedir al Tema 8.3 ➡️**](./ut0803.html) |
| **8.4** | **Variables, marcadors i esdeveniments** | Creació de variables per a comptadors i punts, sensors de teclat/ratolí i missatges. | [**Accedir al Tema 8.4 ➡️**](./ut0804.html) |
| **8.5** | **Robòtica física i programació amb micro:bit** | Entorn MakeCode, pantalla de 5x5 LEDs, botons interactius i lectura de sensors. | [**Accedir al Tema 8.5 ➡️**](./ut0805.html) |

---

### 🧪 Taller Pràctic de la Unitat: Comptador d'Aforament Intel·ligent

1. **Definició de l'algoritme:** Dibuixa en un full el flux lògic per controlar l'aforament màxim d'una botiga (límit: 15 persones).
2. **Creació de la variable:** A Scratch o MakeCode, crea una variable anomenada `persones_dins` inicialitzada a zero.
3. **Control d'entrades i eixides:**
   - Quan es prem la fletxa Amunt (o el botó A de micro:bit), suma 1 a la variable.
   - Quan es prem la fletxa Avall (o el botó B de micro:bit), resta 1 a la variable (sense baixar de 0!).
4. **Condició d'alerta:** Utilitza un bloc `si persones_dins >= 15`:
   - Si és cert: Mostra un missatge d'avís en roig *"Aforament Complet"* i reprodueix un so d'alerta.
   - Si no: Mostra una icona verda de *"Lliure"*.
5. **Comprovació interactiva:** Prova el simulador afegint persones fins a disparar l'avís d'alerta.

---

## 🏆 Avaluació Global de la Unitat (+100 punts)

<div class="interactive-progress-tracker">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
    <span class="tracker-count">0 de 4 reptes superats (0%)</span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div style="background:rgba(0,0,0,0.1); height:8px; border-radius:4px; overflow:hidden;">
    <div class="tracker-bar" style="background:#2563eb; height:100%; width:0%; transition:width 0.3s ease;"></div>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Què és un algoritme en informàtica?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_1" value="a"> Una seqüència ordenada i finita d'instruccions per resoldre un problema</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_1" value="b"> Un cable per connectar pantalles</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_1" value="c"> Un tipus de virus informàtic</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_1" value="d"> La memòria RAM de l'equip</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! Com una recepta de cuina, un algoritme especifica amb precisió els passos exactes per aconseguir un objectiu." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quines coordenades té el centre exacte de l'escenari a Scratch?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_2" value="a"> X: 0, Y: 0</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_2" value="b"> X: 100, Y: 100</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_2" value="c"> X: -240, Y: 180</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_2" value="d"> X: 50, Y: 0</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El punt d'origen (0,0) del pla cartesià de Scratch se situa al centre geomètric de la pantalla." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quin bloc d'estructura de control cal utilitzar perquè una instrucció s'execute de forma contínua sense parar mai?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_3" value="a"> Repeteix 1 vegada</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_3" value="b"> Per sempre (*forever*)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_3" value="c"> Espera 1 segon</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_3" value="d"> Atura tots els programes</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Exacte! El bucle 'per sempre' crea una iteració infinita que s'executa contínuament fins que es prem el botó roig d'aturada." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quants LEDs componen la pantalla integrada de la placa programable BBC micro:bit?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_4" value="a"> 25 LEDs (matriu de 5 files per 5 columnes)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_4" value="b"> 2 LEDs</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_4" value="c"> 100 LEDs</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg8_4" value="d"> 1 sol LED gran</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La matriu de 5x5 (25 LEDs) permet mostrar icones, números i textos en desplaçament." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #3b82f6; border-radius:8px; padding:16px; background:#eff6ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#1e40af;">📦 Lliurament del Quadern d'Aules (UD08)</h3>
  <p>Genera el document oficial de seguiment de la Unitat Didàctica 8 amb les teues respostes validades.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD08" data-module="OAD" style="padding:8px 16px; background:#1e40af; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
