---
title: "Serveis en Xarxa — 2n SMX (Codi 0227)"
module: "SEX"
layout: "default"
course_root: "."
badge: "2n SMX · Serveis en Xarxa"
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

# 🌐 Serveis en Xarxa — 2n CFGM SMX

Benvingut/da al portal docent del mòdul **Serveis en Xarxa (Codi 0227)** de **2n curs del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes (SMX)**, alineat íntegrament amb la programació didàctica oficial i els laboratoris pràctics sobre **Windows Server**, **Ubuntu Server** i **AWS Cloud**.

## 🗺️ Estructura d'Unitats de Treball i Resultats d'Aprenentatge (UT0 a UT8)

| Unitat | Resultat d'Aprenentatge (RA) | Continguts i Laboratoris Pràctics | Accés Directe |
| :--- | :--- | :--- | :--- |
| **UT0** | Introducció, Normativa de Tasques i Fonaments | Presentació del mòdul, normes de lliurament, arquitectura de xarxes i protocol TCP/IP | [📘 Obrir UT0](./ut00/index.html) |
| **UT1** | **RA6 (12,5%)** — Mètodes d'accés remot | SSH, Telnet, RDP, VNC, instàncies AWS Windows Server 2025 i Ubuntu 24.04, Remmina i PuTTY | [📘 Obrir UT1](./ut01/index.html) |
| **UT2** | **RA1 (25,0%)** — Configuració dinàmica (DHCP) | Procés DORA, àmbits, exclusions, reserves, Windows Server DHCP, Ubuntu KVM/libvirt i Wireshark | [📘 Obrir UT2](./ut02/index.html) |
| **UT3** | **RA2 (20,0%)** — Resolució de noms (DNS) | Espai de noms FQDN, consultes recursives/iteratives, zones directes/inverses, registres, AD DS i BIND9 | [📘 Obrir UT3](./ut03/index.html) |
| **UT4** | **RA8 (5,0%)** — Accés de xarxes locals a públiques | Passarel·les Dual-Homed, IP Forwarding, NAT/PAT, DNAT (Port Forwarding), Proxy Squid i VPN | [📘 Obrir UT4](./ut04/index.html) |
| **UT5** | **RA7 (2,5%)** — Xarxes sense fils segures (Wi-Fi) | Estàndards IEEE 802.11 (Wi-Fi 4/5/6/7), Punts d'Accés, Routers sense fils, WPA2/WPA3 i estudi de cobertura | [📘 Obrir UT5](./ut05/index.html) |
| **UT6** | **RA3 (10,0%)** — Transferència de fitxers (FTP/SFTP) | FTP actiu/passiu, IIS FTP + OpenSSH en Windows Server, `vsftpd` en Ubuntu, FTPS (TLS), SFTP/SCP i 27 evidències | [📘 Obrir UT6](./ut06/index.html) |
| **UT7** | **RA4 (10,0%)** — Servidors de correu electrònic | Arquitectura MUA/MTA/MDA, SMTP, POP3, IMAP, Postfix, Dovecot, àlies, TLS i antispam SPF/DKIM/DMARC | [📘 Obrir UT7](./ut07/index.html) |
| **UT8** | **RA5 (15,0%)** — Servidors Web (HTTP/HTTPS) | Protocol HTTP/HTTPS, Apache2, Nginx, IIS, Llocs Virtuals (VirtualHosts), autenticació i certificats SSL/TLS | [📘 Obrir UT8](./ut08/index.html) |

---

## 📑 Desglossament Complet d'Apartats i Tasques per Unitat

### [UT0 — Presentació i Fonaments TCP/IP](./ut00/index.html)
- [0.1 Presentació del Mòdul, RAs i Temporalització](./ut00/ut0001.html)
- [0.2 Normes per a la Presentació de Treballs Escirts i Tasques](./ut00/ut0002.html)
- [0.3 Fonaments dels Sistemes en Xarxa i Interconnexió](./ut00/ut0003.html)
- [0.4 El Protocol TCP/IP: Adreçament, Encaminament i Ports](./ut00/ut0004.html)

### [UT1 — Mètodes d'Accés i Administració Remota (RA6)](./ut01/index.html)
- [1.1 - Introducció](./ut01/ut0101.html)
- [1.2 - Conceptes i definició](./ut01/ut0102.html)
- [1.3 - Riscos i inconvenients associats al control extern](./ut01/ut0103.html)
- [1.4 - Bones pràctiques i mesures de seguretat](./ut01/ut0104.html)
- [1.5 - Tasca RA6-CEa - Mètodes d'accés i administració remota](./ut01/ut0105.html)
- [1.6 Tasca RA6-CEbcd-1 - Instal·lació i connexió remota a Windows Server 2025 en AWS](./ut01/ut0106.html)
- [1.7 Tasca RA6-CEbcd-2 - Instal·lació i connexió remota a Ubuntu Server 24.04 LTS en AWS](./ut01/ut0107.html)
- [1.8 - Tasca RA6-CEf-1 - Connexió remota des de Ubuntu Server 24.04 LTS a SO Windows](./ut01/ut0108.html)
- [1.9 - Administració remota segura amb SSH (Secure Shell)](./ut01/ut0109.html)

### [UT2 — Serveis de Configuració Dinàmica: Protocol DHCP (RA1)](./ut02/index.html)
- [2.1 - Introducció](./ut02/ut0201.html)
- [2.2 - DHCP (Dynamic Host Configuration Protocol)](./ut02/ut0202.html)
- [2.3 - Configuració de DHCP](./ut02/ut0203.html)
- [2.4 - Tasca RA1-CEab - Funcionament de DHCP](./ut02/ut0204.html)
- [2.5 - Tasca RA1-CEcd-1 - Instal·lació i configuració d'un DHCP amb Windows Server en AWS](./ut02/ut0205.html)
- [2.6 - Tasca RA1-CEcd-2 - Instal·lació i configuració d'un DHCP amb Ubuntu Server en AWS](./ut02/ut0206.html)
- [2.7 Tasca RA1-CEfgh-2 - Creació de VM amb Virtual Machine Manager (libvirt)](./ut02/ut0207.html)

### [UT3 — Serveis de Resolució de Noms: Protocol DNS (RA2)](./ut03/index.html)
- [3.1 - Introducció](./ut03/ut0301.html)
- [3.2 - Protocol DNS](./ut03/ut0302.html)
- [3.3 - Mecanismes de comunicació DNS](./ut03/ut0303.html)
- [3.4 - Servidors DNS](./ut03/ut0304.html)
- [3.5 - Consultes al DNS](./ut03/ut0305.html)
- [3.6 - Funcionament del servei DNS](./ut03/ut0306.html)
- [3.7 - Jerarquia de noms DNS](./ut03/ut0307.html)
- [3.8 - Servidors DNS públics i privats](./ut03/ut0308.html)
- [3.9 - Evolució del protocol DNS i seguretat](./ut03/ut0309.html)
- [3.10 - Registres DNS](./ut03/ut0310.html)
- [3.11 - Eines de diagnóstic tècnic de registres DNS](./ut03/ut0311.html)
- [3.12 - Tasca RA2-CEb-1 - Resolució manual d'un domini](./ut03/ut0312.html)
- [3.13 - Tasca RA2-CEb-2 - Resolució manual d'un domini](./ut03/ut0313.html)
- [3.14 - Tasca RA2-CEde-1 - Instal·lació i configuració d'un servidor DNS amb Windows Server 2025](./ut03/ut0314.html)

### [UT4 — Interconnexió LAN-WAN, NAT i Proxy (RA8)](./ut04/index.html)
- [4.1 Arquitectura de Passarel·les, Encaminament IP (IP Forwarding) i NAT/PAT](./ut04/ut0401.html)
- [4.2 Servidors Proxy i Memòria Cau amb Squid: Control d'Accés i Acceleració (RA8-CEb..g)](./ut04/ut0402.html)
- [4.3 Xarxes Privades Virtuals (VPN) i Interconnexió Segura de Sedes](./ut04/ut0403.html)
- [4.4 Tasca RA8-CE (a–j): Implementació de Passarel·la NAT, Proxy Squid i Port Forwarding](./ut04/ut0404.html)

### [UT5 — Xarxes Sense Fils Segures Wi-Fi (RA7)](./ut05/index.html)
- [5.1 Fonaments de Xarxes Sense Fils: Espectre Radioelèctric i Estàndards IEEE 802.11 (RA7-CEa, CEb)](./ut05/ut0501.html)
- [5.2 Punts d'Accés (AP), Modes d'Operació i Encaminadors Sense Fils (RA7-CEa, CEb, CEc, CEf)](./ut05/ut0502.html)
- [5.3 Seguretat en Comunicacions Sense Fils: WPA2, WPA3 i Autenticació 802.1X/RADIUS (RA7-CEd)](./ut05/ut0503.html)
- [5.4 Tasca RA7-CE (a–g): Configuració de Punt d'Accés, Router Sense Fils, Cobertura i Seguretat](./ut05/ut0504.html)

### [UT6 — Serveis de Transferència de Fitxers: FTP, FTPS, SSH i SFTP (RA3)](./ut06/index.html)
- [6.1 - Introducció i evolució dels serveis de transferència de fitxers](./ut06/ut0601.html)
- [6.2 - Arquitectura interna i funcionament del protocol FTP (RFC 959)](./ut06/ut0602.html)
- [6.3 - Seguretat, criptografía i comparativa de protocols de transferència i accés remoto](./ut06/ut0603.html)
- [6.4 - Gestió d'usuaris, aïllament, bastionado i auditoría](./ut06/ut0604.html)
- [6.5 - Tasca RA3-CEa - Mètodes i protocols de transferència de fitxers](./ut06/ut0605.html)
- [6.6 - [Windows Server] Instal·lació i configuració de IIS FTP i OpenSSH en AWS (RA3-CEb,c,d)](./ut06/ut0606.html)
- [6.7 - [Windows Server] Transferència de fitxers amb FileZilla i diagnóstic de mode pasivo (RA3-CEe)](./ut06/ut0607.html)
- [6.8 - [Windows Server] Aïllament d'usuaris (User Isolation), carpeta pública i permisos NTFS (RA3-CEd)](./ut06/ut0608.html)
- [6.9 - [Windows Server] Seguretat i cifrado amb FTPS (FTP sobre TLS/SSL) (RA3-CEf)](./ut06/ut0609.html)
- [6.10 - [Windows Server] Administració remota i bastionado de SSH amb PuTTY i PuTTYgen (RA3-CEf)](./ut06/ut0610.html)
- [6.11 - [Windows Server] Transferència segura amb SFTP/SCP i auditoría de Logs i Wireshark (RA3-CEe,f,g)](./ut06/ut0611.html)
- [6.12 - [Ubuntu Server] Instal·lació de vsftpd, mode pasivo, jaula chroot i pruebas en FileZilla (RA3-CEb,c,d,e)](./ut06/ut0612.html)
- [6.13 - [Ubuntu Server] Seguretat FTPS amb OpenSSL, claus SSH i auditoría de logs en Linux (RA3-CEf,g)](./ut06/ut0613.html)
- [6.14 - [Inter-Servidors] Pruebas cruzades bidireccionals en AWS Cloud (RA3-CEe,f)](./ut06/ut0614.html)
- [6.15 - Control de costos, parada de la infraestructura en AWS i lliurament final (RA3-CEh)](./ut06/ut0615.html)

### [UT7 — Servidors de Correu Electrònic (RA4)](./ut07/index.html)
- [7.1 Arquitectura del Correu Electrònic: MUA, MTA, MDA i Protocols (SMTP, POP3, IMAP)](./ut07/ut0701.html)
- [7.2 Servidor d'Enviament MTA amb Postfix: Configuració, Dominis i Àlies](./ut07/ut0702.html)
- [7.3 Servidor d'Accés MDA amb Dovecot: Bústies Maildir i Protocols IMAP/POP3](./ut07/ut0703.html)
- [7.4 Seguretat, Xifratge TLS i Antispam: SPF, DKIM i DMARC](./ut07/ut0704.html)
- [7.5 Clients de Correu (Thunderbird), Webmail (Roundcube) i Tasca Avaluable RA4-CE](./ut07/ut0705.html)

### [UT8 — Servidors Web HTTP/HTTPS (RA5)](./ut08/index.html)
- [8.1 El Protocol HTTP/HTTPS: Mètodes, Codis d'Estat, Capçaleres i Arquitectura Web](./ut08/ut0801.html)
- [8.2 Servidor Web Apache2 en Linux i IIS en Windows: Estructura, Mòduls i Llocs Virtuals (VirtualHosts)](./ut08/ut0802.html)
- [8.3 Servidor Web NGINX: Arquitectura d'Esdeveniments, Server Blocks i Proxy Invers](./ut08/ut0803.html)
- [8.4 Autenticació d'Usuaris, Certificats Digital SSL/TLS (HTTPS) i Tasca Avaluable RA5-CE](./ut08/ut0804.html)



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Serveis en Xarxa — Visió Global del Mòdul** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="D" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Segons les normes de presentació de treballs escrits i pràctiques del mòdul, què ha d'aparéixer obligatòriament en les captures de pantalla de terminal?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Només l'última línia d'eixida retallada sense mostrar l'ordre executada.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Un fons d'escriptori personalitzat sense consola.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) El prompt complet amb el nom d'usuari o nom de màquina de l'alumne que demostre l'autoria.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="C" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin paràmetre de configuració IP indica a un host a quina adreça ha d'enviar els paquets destinats fora de la seua pròpia subxarxa local?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) L'adreça de difusió (Broadcast).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) La porta d'enllaç predeterminada (Default Gateway).</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) L'adreça de loopback (127.0.0.1).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Els ports registrats en TCP/UDP comprenen el rang del 1024 al 49151, mentre que els ports ben coneguts (Well-Known Ports) van del 0 al 1023.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="abp" data-hint="Aprenentatge Basat en Problemes.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Com s'anomena la metodologia d'aprenentatge basada en resoldre problemes reals emprada en el mòdul (sigles de 3 lletres)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Serveis en Xarxa — Visió Global del Mòdul**):

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
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD00" data-activity="sex_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
