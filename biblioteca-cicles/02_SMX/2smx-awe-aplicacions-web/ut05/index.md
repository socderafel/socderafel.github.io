---
layout: default
course_root: ".."
title: "UT 05: Ofimàtica Col·laborativa i Comunicació Web"
parent: "2n SMX · Aplicacions Web"
has_children: true
nav_order: 5
---

# 🏢 Unitat Temàtica 05: Ofimàtica Col·laborativa i Comunicació Web

<div class="interactive-progress-tracker" data-module="AWE" data-unit="5" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 05** d'**Aplicacions Web (AWE)**. En aquesta unitat desplegarem i integrarem aplicacions web d'ofimàtica col·laborativa en temps real, gestió documental intel·ligent, correu electrònic corporatiu web i plataformes de comunicació instantània per a empreses i organitzacions educatives.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA5)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 5 (RA5)**: *Instal·la i gestiona aplicacions ofimàtiques i de comunicació en entorn web, verificant el seu funcionament col·laboratiu*:

- **a)** S'ha comprès l'arquitectura d'edició distribuïda mitjançant el protocol estàndard WOPI.
- **b)** S'ha desplegat un servidor de documents ONLYOFFICE aïllat amb Docker i protegit per secrets JWT.
- **c)** S'ha configurat el servidor web com a servidor intermediari invers (Reverse Proxy) amb suport per a WebSockets.
- **d)** S'han aplicat solucions de gestió documental (DMS) basades en OCR i classificació per metadades.
- **e)** S'ha desplegat un client de correu corporatiu Roundcube Webmail amb suport IMAP/SMTP i filtres Sieve.
- **f)** S'han configurat canals de comunicació instantània i notificacions de sistema automatitzades mitjançant Webhooks.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **5.1** | [Suites Ofimàtiques Web i Protocols WOPI](ut0501.md) | Protocols WOPI (GetFile/PutFile), renderització client vs servidor (ONLYOFFICE vs Collabora) i seguretat JWT. | **75 XP** |
| **5.2** | [Desplegament i Integració d'ONLYOFFICE Document Server](ut0502.md) | Desplegament Docker, proxy invers Apache amb `proxy_wstunnel` per a WebSockets i enllaç amb Nextcloud. | **75 XP** |
| **5.3** | [Gestió Documental (DMS) i Taulers Col·laboratius](ut0503.md) | Paperless-ngx, OCR Tesseract, organització per metadades i taulers àgils Kanban (Deck). | **75 XP** |
| **5.4** | [Correu Web Corporatiu i Webmail (Roundcube)](ut0504.md) | Connexions IMAP/SMTP sobre SSL/TLS, interfície Elastic de Roundcube i filtres autònoms Sieve a Dovecot. | **75 XP** |
| **5.5** | [Plataformes de Comunicació i Videoconferència Web](ut0505.md) | Missatgeria d'equip Mattermost, fils de conversa, automatització d'alertes via Webhooks i videotrucades WebRTC. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Protocols Ofimàtics</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com es comuniquen Nextcloud i ONLYOFFICE per sol·licitar un fitxer, obrir-lo a l'editor i desar les modificacions fetes pels usuaris?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Mitjançant consultes SQL directes</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Mitjançant peticions REST de l'estàndard WOPI protegides per tokens JWT</label>
    <label><input type="radio" name="s1" value="2"> Mitjançant correu electrònic POP3</label>
    <label><input type="radio" name="s1" value="3"> Mitjançant connexions SSH desateses</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Temps Real</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina tecnologia de comunicació bidireccional permet que dos usuaris que editen simultàniament un mateix document vegen a l'instant els caràcters teclejats per l'altre?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> Peticions HTTP GET periòdiques cada 5 segons</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> Canals WebSockets mantinguts pel mòdul proxy_wstunnel</label>
    <label><input type="radio" name="s2" value="2"> Respostes DNS TXT</label>
    <label><input type="radio" name="s2" value="3"> Paquets ICMP Ping</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · DMS</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com aconsegueix un sistema DMS com Paperless-ngx que puguem trobar una factura escanejada escrivint una paraula clau si el document original era només una imatge?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Demanant a l'usuari que transcriga tot el text a mà</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Processant la imatge amb un motor OCR (Optical Character Recognition) que extreu i indexa el text en una base de dades</label>
    <label><input type="radio" name="s3" value="2"> Assignant un número aleatori a l'arxiu</label>
    <label><input type="radio" name="s3" value="3"> Enviant la imatge a Google</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Automatització</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin mètode permet a un servidor Linux comunicar fallades de seguretat o caigudes de servei de manera immediata a un canal de xat corporatiu de Mattermost?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> Imprimir un full físic</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> Executar una petició cURL enviant un missatge JSON a un Incoming Webhook del canal</label>
    <label><input type="radio" name="s4" value="2"> Desconnectar el cable d'alimentació</label>
    <label><input type="radio" name="s4" value="3"> Canviar la data del rellotge de la BIOS</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de Suite Ofimàtica Col·laborativa</h3>
      <p class="delivery-subtitle">Memòria tècnica d'integració d'ONLYOFFICE amb Nextcloud i automatització de notificacions Webhook.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un document tècnic complet que descriga el desplegament d'ONLYOFFICE Document Server sota Docker, la seua protecció amb JWT, el proxy invers a Apache i una prova d'edició compartida simultània entre dos usuaris amb suport de notificacions per Webhook.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD05</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="AWE" data-unit="5" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
