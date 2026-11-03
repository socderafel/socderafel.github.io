---
layout: default
title: "UT 03: Serveis de Transferència de Fitxers (FTP, FTPS, SFTP)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 3
---

# 📁 Unitat Temàtica 03: Serveis de Transferència de Fitxers (FTP, FTPS, SFTP)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="3" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 03** de **Serveis en Xarxa (SEX)**. En aquesta unitat abordarem la teoria, implementació, seguretat i administració de serveis de transferència de fitxers en xarxa: l'arquitectura de doble canal FTP, els modes actiu i passiu, el desplegament d'un servidor segur **vsftpd** a Linux, el confinament d'usuaris mitjançant gàbies **chroot**, el xifratge **FTPS** i **SFTP** i el rol IIS FTP a Windows Server 2022.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA3)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 3 (RA3)**: *Gestiona serveis de transferència de fitxers, descrivint la seua arquitectura, configurant permisos d'accés, aïllament d'usuaris i canals xifrats*:

- **a)** S'ha descrit l'arquitectura de doble canal del protocol FTP (control port 21 i dades) i diferenciat entre els modes actiu i passiu.
- **b)** S'ha instal·lat i configurat el servei `vsftpd` a Linux habilitant usuaris locals i definint el rang de ports passius.
- **c)** S'ha implementat el confinament d'usuaris (`chroot`) protegint el sistema contra fugides de directori.
- **d)** S'ha resolt la incidència d'arrel d'escriptura mitjançant directrius de seguretat o estructures de subdirectori.
- **e)** S'ha protegit la transferència contra intercepció de credencials mitjançant certificats TLS (FTPS) i comparat amb SFTP (SSH).
- **f)** S'ha desplegat el rol de servidor FTP sota IIS a Windows Server 2022 configurant aïllament d'usuaris.
- **g)** S'han emprat clients gràfics (FileZilla) per a verificar la transferència de fitxers i auditar permisos.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **3.1** | [Arquitectura del Protocol FTP: Modes Actiu i Passiu](ut0301.md) | Doble canal (Port 21 control vs dades), mode Actiu PORT vs mode Passiu PASV, impacte de tallafocs i NAT. | **75 XP** |
| **3.2** | [Desplegament de vsftpd a Linux](ut0302.md) | Instal·lació de `vsftpd`, usuaris anònims vs locals, directives `write_enable`, màscara `local_umask` i ports UFW. | **75 XP** |
| **3.3** | [Confinament d'Usuaris (Chroot) i Seguretat](ut0303.md) | Gàbia `chroot_local_user`, llistes d'excepcions `chroot_list`, error 500 OOPS i solucions amb `allow_writeable_chroot`. | **75 XP** |
| **3.4** | [Xifratge: FTPS vs SFTP (SSH Subsystem)](ut0304.md) | Vulnerabilitat de text pla, FTPS explícit amb certificats OpenSSL a vsftpd, comparativa amb SFTP sobre port 22. | **75 XP** |
| **3.5** | [Servidor FTP a Windows Server (IIS) i Clients](ut0305.md) | Rol FTP a IIS, aïllament d'usuaris a Windows, permisos NTFS i administració de connexions amb FileZilla Client. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Canals</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina funció té el canal de control sobre el port TCP 21 en una sessió FTP?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Descarregar els blocs binaris dels fitxers</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Enviar comandes de text d'autenticació, navegació i peticions de transferència</label>
    <label><input type="radio" name="s2" value="2"> Xifrar el correu electrònic</label>
    <label><input type="radio" name="s3" value="3"> Assignar adreces IP dinàmiques</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Confinament</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Què evita la configuració de 'chroot' en un servidor FTP corporatiu?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> Que els usuaris puguen apagar el router</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> Que els usuaris puguen escapar del seu directori personal i explorar arxius del sistema operatiu o d'altres companys</label>
    <label><input type="radio" name="s2" value="2"> Que s'utilitzen navegadors web</label>
    <label><input type="radio" name="s3" value="3"> Que el servidor es quede sense memòria RAM</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Criptografia</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin port de xarxa utilitza el protocol segur SFTP basat en el servei OpenSSH?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Port 21</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Port 22</label>
    <label><input type="radio" name="s3" value="2"> Port 80</label>
    <label><input type="radio" name="s3" value="3"> Port 443</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · NAT i Tallafocs</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Per què una connexió FTP en mode Passiu requereix obrir un rang de ports efímers al tallafocs del servidor?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> Perquè el port 21 s'espatlla si s'usa molt</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> Perquè el servidor assigna un port diferent d'eixe interval a cada client que sol·licita obrir un canal de dades entrant</label>
    <label><input type="radio" name="s4" value="2"> Perquè el sistema operatiu només admet 1 usuari per port</label>
    <label><input type="radio" name="s4" value="3"> Perquè el protocol TCP no admet difusió</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de Servidor de Fitxers Xifrat (FTPS/SFTP)</h3>
      <p class="delivery-subtitle">Memòria tècnica d'instal·lació, gàbies chroot i transferència segura amb FileZilla.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un document tècnic complet sobre la posada en marxa d'un servei de transferència de fitxers segur a Linux o Windows: configuració de chroot per a dos comptes d'alumnat, certificat TLS per a FTPS o aïllament amb SFTP, i captures de pantalla verificant la connexió xifrada des de FileZilla.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD03</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="3" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
