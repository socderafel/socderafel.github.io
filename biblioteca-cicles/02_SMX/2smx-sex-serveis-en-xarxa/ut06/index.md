---
layout: default
title: "UT 06: Mètodes d'Accés i Administració Remota (SSH, RDP, VNC)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 6
---

# 🖥️ Unitat Temàtica 06: Mètodes d'Accés i Administració Remota (SSH, RDP, VNC)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="6" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 06** de **Serveis en Xarxa (SEX)**. En aquesta unitat dominarem les eines i protocols d'administració i accés remot a servidors corporatius: des de la consola de comandes amb **OpenSSH**, passant per l'autenticació criptogràfica per **parells de claus asimètriques**, la creació de **túnels i proxies SOCKS**, els entorns gràfics remots amb **RDP** i **XRDP**, fins al blindatge integral (*Hardening*) amb **Fail2ban**.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA6)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 6 (RA6)**: *Desplega serveis d'accés i administració remota (SSH, RDP, VNC), assegurant el tràfic mitjançant claus públiques, bastionat de ports i túnels xifrats*:

- **a)** S'ha descrit el funcionament d'OpenSSH diferenciant-lo de protocols insegurs com Telnet.
- **b)** S'ha configurat el fitxer `sshd_config` i verificat el reconeixement d'empremtes d'amfitrió a `known_hosts`.
- **c)** S'ha implementat l'autenticació per claus asimètriques (Ed25519) desactivant l'accés per contrasenya.
- **d)** S'han creat túnels de redirecció de ports locals (`ssh -L`) i dinàmics SOCKS5 (`ssh -D`).
- **e)** S'han transferit arxius de manera eficient mitjançant comandes `scp` i el protocol `sftp`.
- **f)** S'ha desplegat el servei d'escriptori remot a Windows (RDP) i la seua integració a Linux amb XRDP.
- **g)** S'han aplicat tècniques d'enduriment de seguretat i bloqueig automàtic d'intrusos amb Fail2ban.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **6.1** | [Accés per Terminal Segura amb OpenSSH](ut0601.md) | Xifratge SSH vs text pla de Telnet, port 22, dimoni `sshd`, empremtes digitals i el fitxer `~/.ssh/known_hosts`. | **75 XP** |
| **6.2** | [Autenticació per Claus Asimètriques](ut0602.md) | Algorismes Ed25519 vs RSA, `ssh-keygen`, eina `ssh-copy-id`, `authorized_keys` i blindatge `PasswordAuthentication no`. | **75 XP** |
| **6.3** | [Túnels SSH, Redirecció de Ports i SCP/SFTP](ut0603.md) | Redirecció local `ssh -L`, proxy dinàmic SOCKS5 `ssh -D`, còpia ràpida amb `scp -r` i subsistema `sftp`. | **75 XP** |
| **6.4** | [Escriptori Remot a Windows (RDP) i Linux (XRDP)](ut0604.md) | Protocol RDP port 3389, client `mstsc`, redirecció de recursos, servidors VNC i desplegament d'XRDP amb XFCE a Debian. | **75 XP** |
| **6.5** | [Enduriment d'Accés Remot i Fail2ban](ut0605.md) | Canvi de port, `PermitRootLogin no`, llistes d'usuaris `AllowUsers`, bloqueig automàtic per iptables i gàbia sshd a Fail2ban. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Criptografia Asimètrica</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">On s'ha de col·locar la clau pública (amb extensió .pub) quan configurem autenticació per claus SSH?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> S'ha d'esborrar del sistema</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> S'ha d'instal·lar al fitxer ~/.ssh/authorized_keys del compte d'usuari del servidor remot</label>
    <label><input type="radio" name="s2" value="2"> S'ha d'enviar per correu a tothom</label>
    <label><input type="radio" name="s3" value="3"> A la carpeta d'inici de Windows</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Túnels SSH</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina comanda permet encapsular de manera xifrada el trànsit d'un port local de la nostra màquina cap a un servei intern del servidor remot?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> <code>ssh -T</code></label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> <code>ssh -L [port_local]:[desti]:[port_remot] usuari@servidor</code></label>
    <label><input type="radio" name="s2" value="2"> <code>ssh --open-port</code></label>
    <label><input type="radio" name="s3" value="3"> <code>ping -L</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Escriptori Remot</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin avantatge arquitectònic té el protocol RDP de Microsoft enfront de sistemes com VNC quan es treballa amb connexions lentes?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Que RDP no permet moure el ratolí</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Que RDP transmet primitives i instruccions gràfiques de dibuix en lloc de transferir successions pesades d'imatges de mapa de bits comprimides</label>
    <label><input type="radio" name="s2" value="2"> Que VNC només funciona sense fils</label>
    <label><input type="radio" name="s3" value="3"> Que RDP requereix una línia RDSI</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Fail2ban</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina comanda de terminal permet a l'administrador consultar l'estat d'una gàbia de Fail2ban i veure la llista d'adreces IP bloquejades?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> <code>cat /etc/hosts.deny</code></label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> <code>sudo fail2ban-client status &lt;nom_gàbia&gt;</code></label>
    <label><input type="radio" name="s2" value="2"> <code>ipconfig /all</code></label>
    <label><input type="radio" name="s3" value="3"> <code>service iptables stop</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament d'Administració Remota Segura (SSH + XRDP + Fail2ban)</h3>
      <p class="delivery-subtitle">Memòria tècnica d'accés per terminal amb claus asimètriques, escriptori gràfic i blindatge contra atacs.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un projecte tècnic complet sobre l'administració remota d'un servidor corporatiu: configuració d'autenticació per claus Ed25519 amb eliminació de contrasenyes, un túnel de redirecció de ports local, servidor gràfic XRDP accessible per RDP i la instal·lació de Fail2ban amb bloqueig verificat després de 3 intents fallits.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD06</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="6" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
