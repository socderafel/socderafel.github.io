---
layout: default
title: "UD9: Seguretat Informàtica, Protecció i Projecte d'Explotació — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD9"
---

# 🛡️ UD9: Seguretat Informàtica, Protecció i Projecte d'Explotació

Benvingut/da a la **Unitat Didàctica 9** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. Aquesta unitat és el tancament i la integració de totes les competències adquirides al llarg del cicle formatiu. Comprendràs com identificar amenaces digitals (**malware, ransomware, phishing**), com configurar la protecció activa (**Windows Defender i Tallafocs**), com gestionar credencials segures (**2FA**) i posaràs en pràctica el **Projecte Integrador de Posada a Punt i Explotació** d'un equip informàtic per a la seua entrega professional a un usuari o empresa.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD9: SEGURETAT INFORMÀTICA I PROJECTE INTEGRADOR                  │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ ☣️ AMENACES DIGITALS│ 🛡️ DEFENSES ACTIVES│ 🚀 PROJECTE D'EXPLOTACIÓ     │
│ • Virus, Ransomware│ • Antivirus Defender│ • Auditoria física i neteja  │
│ • Phishing i engany│ • Tallafocs (Ports)│ • Particionament i SO net    │
│ • Atacs d'enginyeria│• Claus robustes 2FA│ • Controladors i programari  │
│ • Descàrregues fiabl│• Certificats HTTPS│ • Fitxa tècnica de lliurament│
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **9.1** | **Amenaces de seguretat: virus, ransomware i phishing** | Tipus de malware (cucs, troians, spyware, segrestadors de dades), enginyeria social i vectors d'atac. | [**Accedir al Tema 9.1 ➡️**](./ut0901.html) |
| **9.2** | **Protecció activa: l'antivirus Windows Defender i Tallafocs** | Anàlisi heurística, protecció en temps real, anàlisi fora de línia (Offline Scan) i filtrat de ports amb el tallafocs. | [**Accedir al Tema 9.2 ➡️**](./ut0902.html) |
| **9.3** | **Gestió de contrasenyes robustes i autenticació 2FA** | Longitud vs complexitat, atacs de diccionari, gestors de claus (KeePass) i doble factor d'autenticació (TOTP). | [**Accedir al Tema 9.3 ➡️**](./ut0903.html) |
| **9.4** | **Navegació segura, certificats web i descàrregues fiables** | Xifratge HTTPS, autoritats emissores (CA), signatures digitals d'arxius executables i ús de VirusTotal. | [**Accedir al Tema 9.4 ➡️**](./ut0904.html) |
| **9.5** | **Projecte integrador d'explotació i posada a punt** | Guió complet de posada a punt: preparació, instal·lació neta, paqueteria ofimàtica, seguretat i elaboració de fitxa tècnica. | [**Accedir al Tema 9.5 ➡️**](./ut0905.html) |

---

### 🧪 Projecte Integrador de Taller: Posada a Punt d'un Equip de Treball

Com a projecte de final de curs, rebràs un ordinador de taller que presenta un funcionament erroni o lent. Hauràs de completar els següents passos i documentar-los:
1. **Inspecció i neteja física:** Comprovació de ventiladors, retirada de pols i substitució de pasta tèrmica.
2. **Particionament i instal·lació:** Creació de taula GPT, partició de sistema i partició de dades.
3. **Instal·lació del sistema operatiu:** Desplegament net de Windows o LliureX amb compte local estàndard i compte d'administració de manteniment.
4. **Instal·lació de programari bàsic d'explotació:** Paquet ofimàtic (LibreOffice), navegador web segur, lector de PDF, eina de compressió (7-Zip) i suport remot (AnyDesk).
5. **Configuració de seguretat:** Verificació de l'antivirus, tallafocs activat i actualitzacions del sistema al dia.
6. **Lliurament del certificat tècnic:** Redacció de la fitxa tècnica amb números de sèrie, adreça MAC i lliurament del document per a Aules.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Com es reconeix un atac de Phishing que arriba per correu electrònic simulant ser el banc o Correus?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_1" value="a"> Missatge urgent alarmista, faltes ortogràfiques, adreça del remitent estranya i enllaços que no apunten al domini oficial</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_1" value="b"> Té una imatge de color blau</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_1" value="c"> Arriba sempre a les 12 del migdia</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_1" value="d"> Ocupa més de 100 Megabytes</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! L'enginyeria social utilitza la urgència i la por per enganyar la víctima perquè introduïsca la contrasenya." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Què aporta l'autenticació de doble factor (2FA) a un compte de correu o servei al núvol?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_2" value="a"> Impedeix que un atacant entre al compte encara que conega la contrasenya, ja que necessita el codi temporal del mòbil de la víctima</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_2" value="b"> Duplica la quantitat d'arxius que es poden enviar</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_2" value="c"> Fa que les fotos es vegen amb el doble de brillantor</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_2" value="d"> Desactiva el tallafocs</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El 2FA exigeix 'alguna cosa que saps' (contrasenya) més 'alguna cosa que tens' (mòbil/token físic)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Què fa el servei web VirusTotal abans d'executar un programa descarregat sospitós?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_3" value="a"> Escaneja l'arxiu en segons utilitzant més de 70 motors antivirus diferents en paral·lel al núvol</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_3" value="b"> Formateja l'ordinador</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_3" value="c"> Envia l'arxiu a la policia</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_3" value="d"> Repara les fallades físiques del disc dur</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! VirusTotal és una eina clau de diagnòstic per verificar si un executable és net abans d'obrir-lo." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Què és la Fitxa Tècnica de Lliurament en un projecte d'explotació i manteniment d'equips?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_4" value="a"> El document formal que recull el maquinari, configuració de xarxa, programari instal·lat i credencials lliurat al client</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_4" value="b"> La factura de compra de la botiga</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_4" value="c"> Una targeta de visita de cartó</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co9g_4" value="d"> La llicència de conduir del tècnic</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! La documentació tècnica de lliurament és el segell de qualitat i professionalitat del servei informàtic." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD09)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD09" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
