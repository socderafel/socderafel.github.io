---
title: "UT6 — Serveis de Transferència de Fitxers: FTP, FTPS, SSH i SFTP (RA3)"
unit: "6"
module: "SEX"
layout: "default"
course_root: ".."
badge: "2n SMX · Serveis en Xarxa · UT06"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# 📘 UT6 — Serveis de Transferència de Fitxers: FTP, FTPS, SSH i SFTP (RA3)

> **📌 Resultat d'Aprenentatge i Objectius:** RA3. Instal·la serveis de transferència de fitxers descrivint les seues característiques (mode actiu/passiu, IIS FTP i OpenSSH en Windows Server, vsftpd en Ubuntu Server, FTPS, SFTP i Wireshark).

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **6.1** | **6.1 - Introducció i evolució dels serveis de transferència de fitxers** | [Obrir apartat ➡️](./ut0601.html) |
| **6.2** | **6.2 - Arquitectura interna i funcionament del protocol FTP (RFC 959)** | [Obrir apartat ➡️](./ut0602.html) |
| **6.3** | **6.3 - Seguretat, criptografía i comparativa de protocols de transferència i accés remoto** | [Obrir apartat ➡️](./ut0603.html) |
| **6.4** | **6.4 - Gestió d'usuaris, aïllament, bastionado i auditoría** | [Obrir apartat ➡️](./ut0604.html) |
| **6.5** | **6.5 - Tasca RA3-CEa - Mètodes i protocols de transferència de fitxers** | [Obrir apartat ➡️](./ut0605.html) |
| **6.6** | **6.6 - [Windows Server] Instal·lació i configuració de IIS FTP i OpenSSH en AWS (RA3-CEb,c,d)** | [Obrir apartat ➡️](./ut0606.html) |
| **6.7** | **6.7 - [Windows Server] Transferència de fitxers amb FileZilla i diagnóstic de mode pasivo (RA3-CEe)** | [Obrir apartat ➡️](./ut0607.html) |
| **6.8** | **6.8 - [Windows Server] Aïllament d'usuaris (User Isolation), carpeta pública i permisos NTFS (RA3-CEd)** | [Obrir apartat ➡️](./ut0608.html) |
| **6.9** | **6.9 - [Windows Server] Seguretat i cifrado amb FTPS (FTP sobre TLS/SSL) (RA3-CEf)** | [Obrir apartat ➡️](./ut0609.html) |
| **6.10** | **6.10 - [Windows Server] Administració remota i bastionado de SSH amb PuTTY i PuTTYgen (RA3-CEf)** | [Obrir apartat ➡️](./ut0610.html) |
| **6.11** | **6.11 - [Windows Server] Transferència segura amb SFTP/SCP i auditoría de Logs i Wireshark (RA3-CEe,f,g)** | [Obrir apartat ➡️](./ut0611.html) |
| **6.12** | **6.12 - [Ubuntu Server] Instal·lació de vsftpd, mode pasivo, jaula chroot i pruebas en FileZilla (RA3-CEb,c,d,e)** | [Obrir apartat ➡️](./ut0612.html) |
| **6.13** | **6.13 - [Ubuntu Server] Seguretat FTPS amb OpenSSL, claus SSH i auditoría de logs en Linux (RA3-CEf,g)** | [Obrir apartat ➡️](./ut0613.html) |
| **6.14** | **6.14 - [Inter-Servidors] Pruebas cruzades bidireccionals en AWS Cloud (RA3-CEe,f)** | [Obrir apartat ➡️](./ut0614.html) |
| **6.15** | **6.15 - Control de costos, parada de la infraestructura en AWS i lliurament final (RA3-CEh)** | [Obrir apartat ➡️](./ut0615.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT6 — Serveis de Transferència de Fitxers: FTP, FTPS, SSH i SFTP (RA3)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="D" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En Windows Server amb IIS FTP, quina opció de 'FTP User Isolation' permet que cada usuari entre directament a la seua carpeta LocalUser\&lt;usuari&gt; però puga accedir a carpetes virtuals si coneix la ruta?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Do not isolate users. Start users in FTP root directory.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Isolate users using Active Directory only.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) User name directory (disable global virtual directories).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="C" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quan comparem amb Wireshark una sessió FTP tradicional amb una sessió FTPS o SFTP, què observem en capturar el trànsit de xarxa?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Wireshark no pot capturar paquets TCP del port 21.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) En FTP tradicional les ordres USER i PASS es veuen en text clar, mentre que en FTPS (TLS) i SFTP (SSH) el contingut viatja completament xifrat.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) En tots tres protocols la contrasenya viatja en text clar.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Per a bastionar un servidor OpenSSH i impedir atacs de força bruta per contrasenya una vegada configurada la clau pública, s'estableix PasswordAuthentication no en sshd_config.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="550" data-hint="És el famós error 550.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin codi d'error numèric de 3 xifres retorna un servidor FTP quan es denega una acció sobre un fitxer per falta de permisos NTFS o POSIX (Permission denied)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT6 — Serveis de Transferència de Fitxers: FTP, FTPS, SSH i SFTP (RA3)**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD06" data-activity="ut06_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
