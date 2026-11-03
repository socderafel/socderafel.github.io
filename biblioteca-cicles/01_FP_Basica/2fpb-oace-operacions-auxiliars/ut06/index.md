---
layout: default
title: "UD6: Còpies de Seguretat, Imatges de Disc i Clonat — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD6"
---

# 💾 UD6: Còpies de Seguretat, Imatges de Disc i Clonat

Benvingut/da a la **Unitat Didàctica 6** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En el món laboral de la informàtica, el maquinari sempre es pot substituir, però **la informació perduda d'una empresa o client pot ser irrecuperable**. En aquest bloc temàtic aprendràs a aplicar la regla d'or professional del backup (**Regla 3-2-1**), distingiràs entre còpies **completes, incrementals i diferencials**, dominaràs els **punts de restauració** de Windows i aprendràs a crear imatges i clonar discs amb l'estàndard professional **Clonezilla**.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD6: CÒPIES DE SEGURETAT, IMATGES DE DISC I CLONAT                │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 🛡️ POLÍTIQUES      │ ⚙️ EINES WINDOWS   │ 💿 CLONAT PROFESSIONAL       │
│ • Regla 3-2-1      │ • Punts restauració│ • Concepte d'imatge sectorial│
│ • Completa / Full  │ • Consola rstrui   │ • Clonezilla Live            │
│ • Incremental (r)  │ • Historial arxius │ • savedisk a USB / xarxa     │
│ • Diferencial (t)  │ • Còpia d'imatge   │ • restoredisk en cas d'avaria│
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **6.1** | **La importància del backup: la regla 3-2-1 de seguretat** | Gestió de riscos, pèrdua per ransomware o avaria física, i la regla professional 3-2-1 (3 còpies, 2 suports, 1 fora). | [**Accedir al Tema 6.1 ➡️**](./ut0601.html) |
| **6.2** | **Tipus de còpies de seguretat: completa, incremental i diferencial** | Matriu comparativa de velocitat de còpia vs velocitat de restauració i planificació setmanal d'empresa. | [**Accedir al Tema 6.2 ➡️**](./ut0602.html) |
| **6.3** | **Punts de restauració del sistema en Windows** | La tecnologia Shadow Copy (VSS), creació manual d'un punt abans de tasques crítiques i reversió amb `rstrui.exe`. | [**Accedir al Tema 6.3 ➡️**](./ut0603.html) |
| **6.4** | **Concepte de clonat de disc i imatges de sistema** | Còpia a nivell de fitxer vs clonat a nivell de bloc, imatges `.img`/`.iso` i desplegament d'aules informàtiques. | [**Accedir al Tema 6.4 ➡️**](./ut0604.html) |
| **6.5** | **Pràctica de taller: Creació i restauració d'imatge amb Clonezilla** | Arrencada LiveUSB, assistent pas a pas, opcions `device-image`, `savedisk`, compressió `zstd` i desplegament `restoredisk`. | [**Accedir al Tema 6.5 ➡️**](./ut0605.html) |

---

### 🧪 Taller Pràctic de Laboratori: Clonat i Desplegament d'un Equip Model

1. **Creació d'un equip mestre (*Master Image*):** Configura un sistema Windows o LliureX amb totes les aplicacions necessàries de taller instal·lades de forma impecable.
2. **Generació d'imatge amb Clonezilla:** Connecta un disc dur extern USB de 1 TB, arrenca l'ordinador amb Clonezilla LiveUSB i fes una còpia completa `savedisk` anomenada `Master_Aula_2026`.
3. **Simulacre de catàstrofe:** Formateja accidentalment la unitat `C:` de la màquina virtual o esborra arxius de sistema.
4. **Restauració ràpida en 5 minuts:** Arrenca de nou Clonezilla i executa `restoredisk` per deixar l'ordinador exactament en l'estat original de fàbrica.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Què estableix la regla 3-2-1 de seguretat informàtica en còpies de seguretat?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_1" value="a"> Mantindre 3 còpies de les dades, en 2 suports físics diferents, amb 1 còpia fora de la ubicació o al núvol</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_1" value="b"> Fer còpies cada 3 hores, durant 2 dies, amb 1 persona</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_1" value="c"> Guardar 3 carpetes al mateix disc dur en 2 particions</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_1" value="d"> Comprar 3 ordinadors idèntics</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! La regla 3-2-1 protegeix contra avaries de disc, robatoris, incendis i atacs de ransomware." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina diferència hi ha entre una còpia de seguretat incremental i una diferencial?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_2" value="a"> La incremental guarda els canvis respecte a l'última còpia feta (sigui completa o incremental); la diferencial guarda els canvis respecte a l'última completa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_2" value="b"> La diferencial és més ràpida de fer que la incremental</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_2" value="c"> La incremental només guarda fotos</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_2" value="d"> Són exactament idèntiques sense cap diferència</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La incremental és més ràpida de gravar diàriament, però la diferencial és més ràpida i senzilla de restaurar." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quina comanda directa s'introdueix a la finestra Executar de Windows per llançar l'assistent de Restauració del Sistema?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_3" value="a"> rstrui.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_3" value="b"> backup.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_3" value="c"> restore.msc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_3" value="d"> recover.bat</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! 'rstrui.exe' (Restore UI) obre la pantalla per triar un punt de restauració anterior a la fallada." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quina opció de Clonezilla s'utilitza per guardar el contingut complet d'un disc dur en una carpeta d'imatge a un USB extern?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_4" value="a"> savedisk</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_4" value="b"> restoredisk</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_4" value="c"> formatdisk</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co6g_4" value="d"> cleandisk</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! 'savedisk' llegeix el disc sencer i el comprimeix en una imatge gestionable." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD06)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD06" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
