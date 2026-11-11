---
layout: default
title: "Cuaderno Completo de Actividades — UD3 — Instalación y Mantenimiento de Redes para Transmisión de Datos (Networking Essentials)"
course_root: ".."
badge: "2º FPB · Instalación y Mantenimiento de Redes (IMX / NE) · UD3"
prev_url: "ficha302.html"
prev_label: "⬅️ 🛠️ Fitxa 3.2 · Identificació de Fibra "
next_url: "../ut04/index.html"
next_label: "Siguiente Unidad (UD4) ➡️"
---

# Cuaderno Práctico de Actividades — UD3: Mitjans de Transmissió — Parell Trenat (UTP/STP), Coaxial, Fibra Òptica i Sense Fil

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En esta sección tienes acceso directo a todas las actividades prácticas, fichas de trabajo y retos evaluables de esta unidad didáctica. Puedes acceder a cada actividad individualmente o consultar la recopilación completa a continuación:

## 🗂️ Índice de Actividades de la Unidad

- **[🛠️ Fitxa 3.1 · Comparativa de Mitjans de Transmissió Guiats i No Guiats](ficha301.html)**
- **[🛠️ Fitxa 3.2 · Identificació de Fibra Òptica i Tecnologies Sense Fil](ficha302.html)**

---

## Fitxa 3.1 · Comparativa de Mitjans de Transmissió Guiats i No Guiats

👉 *[Obrir aquesta activitat en pàgina individual](ficha301.html)*

# Fitxa 3.1 · Comparativa de Mitjans de Transmissió Guiats i No Guiats

## 1 · Quadre comparatiu de mitjans de transmissió

Completa la taula següent comparant els tres mitjans guiats principals utilitzats en instal·lacions de xarxes locals:

| Característica | Parell Trenat (UTP/STP) | Cable Coaxial | Fibra Òptica (MMF/SMF) |
| --- | --- | --- | --- |
| **Tipus de senyal transmès** | Senyal elèctric | Senyal elèctric | Polsos de llum (òptic) |
| **Material del nucli** | Fils de coure trenats | Un conductor central de coure | Fil de fibra de vidre o plàstic |
| **Immunitat a interferències (EMI)** | Mitjana (UTP) / Alta (STP/FTP) | Mitjana-Alta (malla metàl·lica) | Total (100% immune a EMI) |
| **Connectors habituals** | RJ-45 (8P8C) | BNC / Connector F | SC, LC, ST |

## 2 · Categories de cablejat de parell trenat i apantallament

1. Explica la diferència entre un cable **UTP** (sense apantallar) i un cable **FTP / STP** (amb pantalla d'alumini o malla trenada).
2. Indica la velocitat màxima i l'amplada de banda de les categories **Cat 5e**, **Cat 6** i **Cat 6A** per a enllaços de 100 metres.

<details markdown="1">
<summary>💡 Mostrar / Amagar el Solucionari de la Fitxa 3.1</summary>

- **UTP vs FTP/STP:** El cable **UTP** (*Unshielded Twisted Pair*) confia únicament en el trenat dels 4 parells per a reduir la diafonia, sent més flexible i econòmic. Els cables **FTP/STP** incorporen una làmina d'alumini global o per parell i malla metàl·lica que exigeix connexió a presa de terra per a protegir de soroll industrial o motors elèctrics.
- **Categories:**
  - **Cat 5e:** Fins a **1 Gbps** (100 MHz).
  - **Cat 6:** Fins a **1 Gbps** a 100 m i **10 Gbps** fins a 55 m (250 MHz), amb separador o creueta central de plàstic.
  - **Cat 6A:** Fins a **10 Gbps** als 100 m complets (500 MHz).

</details>

---

## Fitxa 3.2 · Identificació de Fibra Òptica i Tecnologies Sense Fil

👉 *[Obrir aquesta activitat en pàgina individual](ficha302.html)*

# Fitxa 3.2 · Identificació de Fibra Òptica i Tecnologies Sense Fil

## 1 · Fibra Monomode (SMF) vs. Fibra Multimode (MMF)

Analitza l'estructura d'un cable de fibra òptica (nucli, revestiment o *cladding* i recobriment o *buffer*) i respon:

| Aspecte | Fibra Multimode (MMF) | Fibra Monomode (SMF) |
| --- | --- | --- |
| **Diàmetre del nucli** | 50 µm o 62,5 µm | 9 µm |
| **Font d'emissió de llum** | Díode LED o VCSEL | Làser d'alta precisió |
| **Abast i ús típic** | Curt-mitjà (edificis i campus, fins a 550 m - 2 km) | Llarg abast (WAN, operadors, desenes de km) |

## 2 · Tecnologies Sense Fil (Wi-Fi, Bluetooth, Infrarojos i Microones)

Relaciona cada tecnologia sense fil amb el seu àmbit d'aplicació real en l'oficina o taller:
- **Bluetooth (WPAN):** Connexió de perifèrics personals a curta distància (auriculars, teclats, ratolins).
- **Wi-Fi IEEE 802.11 (WLAN):** Connexió de portàtils, tauletes i mòbils al punt d'accés de l'aula en bandes de 2,4 GHz i 5/6 GHz.


---


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Cuaderno Completo de Actividades — UD3** superant aquests 4 reptes gamificats (+25 puntos cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="El trenat cancel·la el soroll electromagnètic i evita l'acoblament de senyal entre parells.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Per què es trenen per parells els fils de coure dins d'un cable de parell trenat (UTP / STP)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Perquè ocupe més espai dins de la canaleta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Per a reduir les interferències electromagnètiques externes i la diafonia (crosstalk) entre parells veïns.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Per a transformar el coure en fibra de vidre.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Només per motius decoratius.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="La fibra òptica guia polsos de llum confinats per reflexió interna total i no pateix soroll elèctric.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin mitjà de transmissió guiat transmet la informació mitjançant polsos de llum a través d'un nucli de vidre o plàstic i és totalment immune a les interferències electromagnètiques?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El cable coaxial RG-59.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) La fibra òptica (monomode o multimode).</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) El cable de parell trenat Cat 5e.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) El Bluetooth d'un ratolí.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="El connector RJ-45 (8P8C) té 8 posicions i 8 contactes per als 4 parells del cable UTP/STP.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El connector estàndard utilitzat per a terminar cables de xarxa de parell trenat de 4 parells (8 fils) en xarxes Ethernet és l'RJ-45.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="rj45|rj-45" data-hint="És el connector RJ-45.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Com s'anomena el connector de 8 contactes utilitzat habitualment en els latiguillos de xarxa Ethernet de coure (escriu RJ45 o RJ-45)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD3**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de código i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 puntos XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 puntos · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="IMX" data-unit="UD03" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
