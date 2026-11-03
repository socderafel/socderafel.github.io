---
layout: default
title: "UD6: Seguretat Digital, Privadesa i Pensament Crític — Ofimàtica i Arxiu de Documents"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD6"
---

# 🛡️ UD6: Seguretat Digital, Privadesa i Pensament Crític

Benvingut/da a la **Unitat Didàctica 6** d'**Ofimàtica i Arxiu de Documents (OAD)**. En una oficina moderna, la seguretat de la informació i la custòdia de les dades dels clients són una responsabilitat compartida per tot el personal. Un simple clic a un enllaç fraudulent pot paralitzar tota l'empresa. En aquesta unitat aprendràs a identificar atacs de pesca de credencials (*phishing*), protegiràs els teus comptes amb doble factor (2FA) i aplicaràs la normativa de protecció de dades (RGPD).

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD6: SEGURETAT DIGITAL, PRIVADESA I PENSAMENT CRÍTIC              │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ ☣️ AMENACES I MALWARE│ 🔑 CONTROLS D'ACCÉS│ 📜 PRIVADESA I CIVISME       │
│ • Virus i troians  │ • Claus fortes     │ • RGPD i taules netes        │
│ • Ransomware       │ • Gestors de claus │ • Destrucció documental     │
│ • Phishing i enganys│ • 2FA / MFA apps   │ • Fake news i línia INCIBE 017│
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Continguts de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **6.1** | **Principals amenaces: malware i ransomware** | Virus, cucs, troians, ransomware (segrest de fitxers) i programari espia (*spyware*). | [**Accedir al Tema 6.1 ➡️**](./ut0601.html) |
| **6.2** | **Enginyeria social i detecció de Phishing** | Correus fraudulents, suplantació de bancs/Correus, enllaços trampa i com verificar remitents. | [**Accedir al Tema 6.2 ➡️**](./ut0602.html) |
| **6.3** | **Contrasenyes robustes i Doble Factor (2FA)** | Longitud, caràcters variats, gestors de claus i autenticació en dos passos per app (MFA). | [**Accedir al Tema 6.3 ➡️**](./ut0603.html) |
| **6.4** | **Protecció de dades (RGPD) i lloc de treball** | Política de taules netes, bloqueig de sessió (`Win + L`) i trinxat segur de documentació en paper. | [**Accedir al Tema 6.4 ➡️**](./ut0604.html) |
| **6.5** | **Pensament crític, HTTPS i INCIBE 017** | Verificació de Fake News a Internet, candau de seguretat al navegador i atenció pública al 017. | [**Accedir al Tema 6.5 ➡️**](./ut0605.html) |

---

### 🧪 Taller Pràctic de la Unitat: Auditoria de Ciberseguretat del Puest de Treball

1. **Protocol d'absència:** Practica el bloqueig instantani del sistema amb la drecera `Windows + L` cada vegada que t'alces de la cadira.
2. **Anàlisi d'un correu sospitós:** Passa el cursor del ratolí per damunt d'un enllaç sense fer-hi clic per comprovar l'adreça web real de destinació a la barra d'estat inferior.
3. **Comprovació de robustesa de claus:** Genera una frase de pas segura combinant quatre paraules inconnexes, números i caràcters especials.
4. **Activació del 2FA:** Configura el doble factor d'autenticació mitjançant una aplicació de codis temporals (TOTP com Google Authenticator o Microsoft Authenticator) al teu compte de pràctiques.
5. **Simulacre de destrucció documental:** Identifica quins papers de la paperera contenen noms o DNI i han de ser dipositats obligatòriament al contenidor de trinxat segur.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Com s'anomena el malware que xifra tots els documents de l'oficina i demana un rescat econòmic?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_1" value="a"> Ransomware</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_1" value="b"> Adware</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_1" value="c"> Cookie</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_1" value="d"> Antivirus</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El ransomware xifra els fitxers amb una clau inaccessibles i extorsiona l'usuari demanant diners." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina drecera de teclat s'ha d'utilitzar SEMPRE en Windows abans d'alçar-se de la cadira per bloquejar la pantalla?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_2" value="a"> Windows + L</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_2" value="b"> Ctrl + Z</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_2" value="c"> Alt + Tab</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_2" value="d"> F5</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Win + L (Lock) bloqueja la sessió a l'instant protegint la confidencialitat de les dades en pantalla." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quin és el telèfon oficial gratuït i confidencial de l'INCIBE per resoldre dubtes i atacs de ciberseguretat a Espanya?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_3" value="a"> 017</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_3" value="b"> 112</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_3" value="c"> 091</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_3" value="d"> 900 000 000</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El 017 és la línia pública d'ajuda en ciberseguretat de l'Institut Nacional de Ciberseguretat per a empreses i ciutadans." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Si un correu diu ser del teu banc i et demana 'actualitzar la contrasenya urgentment o et cancel·larem el compte en 2 hores', què has de fer?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_4" value="a"> Fer clic immediatament i posar la clau ràpidament</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_4" value="b"> Desconfiar: és un cas clar de phishing; mai cap banc et demanarà claus per correu</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_4" value="c"> Reenviar el correu a tots els companys de la feina</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rg6_4" value="d"> Respondre donant el teu número de targeta de crèdit</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Molt bé! La urgència artificial i la petició de credencials són els dos patrons clàssics del frau per phishing." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #3b82f6; border-radius:8px; padding:16px; background:#eff6ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#1e40af;">📦 Lliurament del Quadern d'Aules (UD06)</h3>
  <p>Genera el document oficial de seguiment de la Unitat Didàctica 6 amb les teues respostes validades.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD06" data-module="OAD" style="padding:8px 16px; background:#1e40af; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
