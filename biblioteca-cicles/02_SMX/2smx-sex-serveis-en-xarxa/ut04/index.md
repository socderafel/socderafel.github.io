---
layout: default
title: "UT 04: Servidors de Correu Electrònic (SMTP, IMAP, POP3)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 4
---

# ✉️ Unitat Temàtica 04: Servidors de Correu Electrònic (SMTP, IMAP, POP3)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="4" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 04** de **Serveis en Xarxa (SEX)**. En aquesta unitat dominarem la infraestructura completa de correu electrònic en servidors Linux: arquitectura de quatre agents (MUA, MTA, MDA, MS), transport amb **Postfix**, bústies **Maildir** amb **Dovecot** (IMAP/POP3), prevenció de frau amb **SPF, DKIM i DMARC** i resolució manual de comandes SMTP per terminal.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA4)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 4 (RA4)**: *Gestiona servidors de correu electrònic (SMTP, IMAP, POP3), descrivint el flux de missatgeria, configurant bústies, àlies i registres de seguretat antispam*:

- **a)** S'ha descrit l'arquitectura de correu (MUA, MTA, MDA, MS) i el flux complet d'un missatge mitjançant registres DNS MX.
- **b)** S'ha instal·lat i configurat el servidor de transport Postfix protegint el servei contra relé obert (*Open Relay*).
- **c)** S'ha configurat el servidor de bústies Dovecot aplicant el format segur i concurrent `Maildir/`.
- **d)** S'ha implementat el xifratge criptogràfic TLS per a connexions segures SMTP (587) i IMAPS (993).
- **e)** S'han publicat regles de seguretat d'autenticació antispam (SPF, signatura DKIM i alineació DMARC).
- **f)** S'han creat àlies de correu i llistes de distribució locals compilades amb `newaliases`.
- **g)** S'han realitzat proves manuals de negociació de comandes SMTP (`HELO`, `MAIL FROM`, `RCPT TO`, `DATA`) mitjançant terminal.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **4.1** | [Arquitectura del Correu i Flux de Missatgeria](ut0401.md) | MUA/MTA/MDA/MS, ports SMTP/IMAP/POP3, comparativa POP3 vs IMAP i resolució de registres DNS MX. | **75 XP** |
| **4.2** | [Desplegament de Servidor SMTP amb Postfix](ut0402.md) | Instal·lació de Postfix, paràmetres de `main.cf`, prevenció de relé obert (mynetworks) i monitoratge de `mail.log`. | **75 XP** |
| **4.3** | [Desplegament d'IMAP/POP3 amb Dovecot](ut0403.md) | Dovecot IMAP/POP3, bústies Maildir (cur/new/tmp) vs mbox, xifratge SSL i connexió amb Mozilla Thunderbird. | **75 XP** |
| **4.4** | [Seguretat Antispam: SPF, DKIM i DMARC](ut0404.md) | Prevenció de Mail Spoofing, registres DNS TXT per a SPF, signatures OpenDKIM i polítiques d'alineació DMARC. | **75 XP** |
| **4.5** | [Gestió d'Àlies i Diagnosi per Terminal](ut0405.md) | Fitxer `/etc/aliases`, comanda `newaliases`, diàleg manual SMTP amb Telnet i connexions TLS amb `openssl s_client`. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Transport vs Bústies</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quins dos servidors s'instal·len habitualment de manera combinada a Linux per cobrir el transport SMTP i l'accés a bústies IMAP respectivament?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Apache i MariaDB</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Postfix (MTA per a SMTP) i Dovecot (MDA per a IMAP/POP3)</label>
    <label><input type="radio" name="s2" value="2"> Bind9 i ISC-DHCP</label>
    <label><input type="radio" name="s3" value="3"> Vsftpd i Squid</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Format Maildir</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina directiva s'ha de configurar a `/etc/postfix/main.cf` per indicar que els missatges s'emmagatzemen com a fitxers individuals dins de la carpeta personal de l'usuari?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> <code>format = mbox</code></label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> <code>home_mailbox = Maildir/</code></label>
    <label><input type="radio" name="s2" value="2"> <code>mail_spool = /tmp</code></label>
    <label><input type="radio" name="s3" value="3"> <code>user_storage = mysql</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Antispam</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin mecanisme de seguretat s'encarrega d'indicar als servidors destinataris què han de fer (quarantine o reject) amb un correu que no ha superat les validacions SPF o DKIM?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> DNSSEC</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> DMARC (Domain-based Message Authentication)</label>
    <label><input type="radio" name="s2" value="2"> DHCP Snooping</label>
    <label><input type="radio" name="s3" value="3"> Certbot</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Protocol SMTP</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina comanda SMTP s'utilitza durant una connexió manual per indicar qui és el destinatari que rebrà el missatge?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> <code>SEND TO</code></label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> <code>RCPT TO:&lt;adreça&gt;</code></label>
    <label><input type="radio" name="s2" value="2"> <code>DESTINATION</code></label>
    <label><input type="radio" name="s3" value="3"> <code>DELIVER</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de la Pila de Correu Postfix + Dovecot</h3>
      <p class="delivery-subtitle">Memòria tècnica de transport, bústies Maildir, client Thunderbird i proves de seguretat.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un projecte tècnic complet sobre la posada en marxa d'un servidor de correu corporatiu a Linux: integració de Postfix amb Dovecot, estructura de bústies Maildir, configuració de dos comptes d'usuari locals connectats amb Mozilla Thunderbird mitjançant IMAPS i certificat TLS, i una prova d'enviament i recepció satisfactòria documentada amb <code>mail.log</code>.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD04</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="4" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
