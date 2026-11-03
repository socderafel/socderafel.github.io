---
layout: default
title: "UD3: Administració i Configuració del Sistema Operatiu Windows — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
---

# 🪟 UD3: Administració i Configuració del Sistema Operatiu Windows

Benvingut/da a la **Unitat Didàctica 3** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En aquesta unitat aprofundiràs en la configuració avançada del sistema operatiu Microsoft Windows, aprenent a gestionar controladors de maquinari (**Drivers**), administrar comptes d'usuari locals amb privilegis segurs (**UAC**), estructurar carpetes amb permisos NTFS i realitzar instal·lacions i desinstal·lacions netes de programari professional.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD3: ADMINISTRACIÓ I CONFIGURACIÓ DE WINDOWS                     │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ ⚙️ GESTIÓ I DRIVERS│ 👥 USUARIS I UAC   │ 📦 FITXERS I PROGRAMARI      │
│ • devmgmt.msc      │ • lusrmgr.msc      │ • Permisos NTFS bàsics       │
│ • Drivers .inf     │ • Estàndard vs Admin│ • EXE vs MSI vs Portables    │
│ • Signe groc '?'   │ • Polítiques claus │ • Neteja AppData i registre  │
│ • Resolució errors │ • Control UAC      │ • Aplicacions per defecte    │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **3.1** | **L'entorn gràfic de Windows: Escriptori, barra de tasques i configuració** | Panell de control clàssic vs Configuració moderna, dreceres ràpides (Win+R, Win+X) i ajustos de rendiment visual. | [**Accedir al Tema 3.1 ➡️**](./ut0301.html) |
| **3.2** | **Controladors de dispositius (*Drivers*) i Administrador de dispositius** | L'Administrador de dispositius (`devmgmt.msc`), símbols d'avaria, instal·lació manual d'arxius `.inf` i còpia de seguretat. | [**Accedir al Tema 3.2 ➡️**](./ut0302.html) |
| **3.3** | **Gestió de comptes d'usuari locals i control UAC** | Creació d'usuaris amb `lusrmgr.msc`, comptes estàndard vs administradors, polítiques de contrasenyes i control de comptes d'usuari (UAC). | [**Accedir al Tema 3.3 ➡️**](./ut0303.html) |
| **3.4** | **Gestió d'arxius, carpetes, atributs i cerca avançada** | Atributs (només lectura, ocult), permisos de seguretat NTFS d'herència i modificació, i indexació ràpida. | [**Accedir al Tema 3.4 ➡️**](./ut0304.html) |
| **3.5** | **Pràctica: Instal·lació i desinstal·lació neta d'aplicacions** | Formats EXE vs MSI vs programari portable, desinstal·lació profunda eliminant restes a `%appdata%` i registre. | [**Accedir al Tema 3.5 ➡️**](./ut0305.html) |

---

### 🧪 Taller Pràctic de Laboratori: Posada a Punt i Configuració Segura d'un Equip

1. **Diagnòstic de controladors:** Obre `devmgmt.msc` i verifica que no hi haja cap dispositiu desconegut amb advertència groga.
2. **Creació de perfils d'usuari:** Crea un compte d'usuari estàndard anomenat `treballador` i assigna-li una contrasenya robusta.
3. **Comprovació de l'UAC:** Inicia sessió com a `treballador` i intenta canviar l'hora del sistema o instal·lar un programa per comprovar com s'activa el diàleg d'elevació de l'UAC.
4. **Permisos de carpeta:** Crea una carpeta compartida a `C:\DadesComunes` i configura els permisos perquè el grup d'usuaris puga llegir però no eliminar arxius crítics.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quina comanda directa s'introdueix a la finestra Executar (Win + R) per obrir l'Administrador de Dispositius?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_1" value="a"> devmgmt.msc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_1" value="b"> diskmgmt.msc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_1" value="c"> taskmgr.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_1" value="d"> msconfig</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! 'devmgmt.msc' (Device Management) obre la consola MMC de controladors de maquinari." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Què significa la presència d'un triangle groc amb signe d'admiració sobre un dispositiu a devmgmt.msc?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_2" value="a"> Que el dispositiu està detectat pel maquinari però no té el controlador correcte o té un conflicte</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_2" value="b"> Que el dispositiu està trencat físicament i s'ha de tirar al fem</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_2" value="c"> Que el dispositiu funciona al doble de velocitat</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_2" value="d"> Que el dispositiu està desinfectat de virus</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El triangle groc indica incidència en el controlador (driver no compatible o no trobat)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Per quina raó de ciberseguretat els empleats d'una oficina han d'utilitzar comptes d'usuari estàndard en lloc d'administradors?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_3" value="a"> Perquè si un virus o ransomware s'executa, no tindrà permisos per modificar arxius del sistema ni instal·lar arrels malicioses</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_3" value="b"> Perquè els comptes d'administrador costen 50 euros al mes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_3" value="c"> Perquè l'ordinador gasta més bateria com a administrador</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_3" value="d"> Perquè Windows no permet crear més d'un compte</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El principi de menor privilegi (Least Privilege) és la primera línia de defensa en informàtica corporativa." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Què és una aplicació "portable" i en què es diferencia d'un programa instal·lat tradicionalment amb MSI/EXE?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_4" value="a"> S'executa directament des d'una carpeta o pendrive sense tocar el registre ni requerir drets d'administrador</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_4" value="b"> És un programa que només funciona en ordinadors portàtils</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_4" value="c"> És una aplicació que només funciona si l'ordinador no té connexió a la llum</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co3g_4" value="d"> És un programa de pagament obligatori</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! Les aplicacions portables no alteren el registre de Windows ni les carpetes del sistema." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD03)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD03" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
