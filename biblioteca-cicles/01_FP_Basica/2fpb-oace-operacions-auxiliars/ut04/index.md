---
layout: default
title: "UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX) — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
---

# 🐧 UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX)

Benvingut/da a la **Unitat Didàctica 4** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En aquest bloc temàtic t'endinsaràs en el sistema operatiu lliure **GNU/Linux** (especialment les distribucions **Ubuntu** i **LliureX**, el sistema educatiu valencià). Comprendràs la jerarquia de directoris única de Linux, dominaràs la **terminal d'ordres bash**, aprendràs la gestió de **permisos POSIX** (`chmod`, `chown`) i administraràs aplicacions amb el gestor de paquets **APT**.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD4: LINUX, TERMINAL BASH I GESTIÓ DEL SISTEMA                   │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 📂 ESTRUCTURA FHS  │ 💻 TERMINAL BASH   │ 🔒 PERMISOS I PAQUETS        │
│ • Arrel única /    │ • Prompt usuari@pc │ • Permisos rwx (755, 644)    │
│ • /home, /etc, /var│ • pwd, ls, cd, cp  │ • Propietari i grup (chown)  │
│ • Nautilus / MATE  │ • rm -rf, nano, cat│ • Superusuari: sudo          │
│ • Punts de muntatge│ • Autocompletat Tab│ • Gestor APT (update/install)│
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **4.1** | **L'entorn gràfic en Linux (GNOME/MATE) i l'arbre de directoris FHS** | Escriptori, explorador Nautilus, l'arrel única `/`, `/home`, `/etc` i diferències amb Windows (`C:\`). | [**Accedir al Tema 4.1 ➡️**](./ut0401.html) |
| **4.2** | **La consola de terminal: per què és tan potent?** | El prompt `usuari@màquina:camí$`, tilde `~`, símbol `#` de root, autocompletat amb `Tab` i historial. | [**Accedir al Tema 4.2 ➡️**](./ut0402.html) |
| **4.3** | **Comandes bàsiques de navegació i gestió de fitxers** | Ordres essencials: `pwd`, `ls -la`, `cd`, `mkdir -p`, `cp -r`, `mv`, `rm -rf`, `cat` i editor `nano`. | [**Accedir al Tema 4.3 ➡️**](./ut0403.html) |
| **4.4** | **Usuaris, permisos (chmod/chown) i el comandament sudo** | Matriu de permisos `rwx`, càlcul octal (`755`, `644`), canvi de propietari i elevació temporal de privilegis amb `sudo`. | [**Accedir al Tema 4.4 ➡️**](./ut0404.html) |
| **4.5** | **Pràctica: Gestió de paquets i programari amb apt** | Repositoris oficials, `apt update`, `apt upgrade`, instal·lació i eliminació completa de programari (`--purge`). | [**Accedir al Tema 4.5 ➡️**](./ut0405.html) |

---

### 🧪 Taller Pràctic de Laboratori: Administració de Servidor Web amb Terminal

1. **Creació d'un espai de treball:** Obre la terminal (`Ctrl + Alt + T`) i crea l'estructura `~/projecte/web` amb una sola comanda (`mkdir -p`).
2. **Creació d'un document:** Utilitza `nano` per redactar un fitxer `index.html` amb una salutació de taller.
3. **Assignació de permisos:** Configura el fitxer perquè el propietari tinga lectura i escriptura, i la resta d'usuaris només lectura (`chmod 644 index.html`).
4. **Instal·lació de programari:** Actualitza els repositoris amb `sudo apt update` i instal·la el servidor web lleuger `nginx` o l'eina de diagnòstic `htop`.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: A quin directori del sistema FHS de Linux es guarden els fitxers de configuració de tots els programes?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_1" value="a"> /etc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_1" value="b"> /home</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_1" value="c"> /tmp</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_1" value="d"> /bin</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! '/etc' (Editable Text Configurations) és la seu de configuració de tot el sistema Linux." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina comanda de terminal de Linux s'utilitza per esborrar una carpeta sencera que conté fitxers a dins?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_2" value="a"> rm -rf [nom_carpeta]</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_2" value="b"> deltree [nom_carpeta]</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_2" value="c"> rmdir [nom_carpeta]</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_2" value="d"> erase [nom_carpeta]</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! 'rm -r' (recursiu) i '-f' (forçat) elimina el directori amb tot el seu contingut." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Si un fitxer té els permisos octals 755 (rwxr-xr-x), què té permès fer el propietari i la resta d'usuaris?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_3" value="a"> El propietari té lectura, escriptura i execució (7); els altres només lectura i execució (5)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_3" value="b"> Ningú pot obrir el fitxer</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_3" value="c"> Tothom pot esborrar el fitxer lliurement</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_3" value="d"> El fitxer està bloquejat per virus</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! 7 = 4+2+1 (rwx) i 5 = 4+1 (r-x). És el permís clàssic per a scripts i programes executables." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Què fa exactament l'ordre 'sudo apt update' abans d'instal·lar cap programa nou?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_4" value="a"> Descarrega la llista actualitzada de versions i paquets disponibles des dels repositoris d'Internet</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_4" value="b"> Instal·la tots els programes de cop</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_4" value="c"> Esborra l'usuari actual</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co4g_4" value="d"> Apaga el router de l'aula</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! 'apt update' sincronitza l'índex local amb els servidors d'Ubuntu/LliureX." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD04)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD04" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
