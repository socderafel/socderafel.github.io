# UT 04: Servidors de Transferència de Fitxers i Accés Remot Segur

<div class="interactive-progress-tracker" data-unit="ut04" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En l'ecosistema de desplegament d'aplicacions web, el trasllat d'actius digitals, codi font, plantilles, fitxers estàtics i còpies de seguretat entre els entorns de desenvolupament local, proves i producció requereix canals de comunicació fiables, autenticats i estrictament xifrats (Resultat d'Aprenentatge 4 - RA4).

En aquesta unitat didàctica aprofundiràs en el funcionament tècnic dels protocols de transferència de fitxers (**FTP clàssic, FTPS explícit/implícit sobre TLS i SFTP sobre el subsistema SSH**), diferenciant els modes de connexió actiu i passiu i el seu impacte en passarel·les NAT i tallafocs. Aprendràs a instal·lar i securitzar servidors de referència en Linux com **vsftpd** (*Very Secure FTP Daemon*) i **ProFTPD**, implementant aïllament d'usuaris mitjançant entorns enjaulats (*chroot jail*) i bases d'usuaris virtuals independents dels comptes del sistema operatiu. A més, dominaràs l'administració d'accés remot segur mitjançant el dimoni **OpenSSH**, el xifratge asimètric basat en parells de claus pública/privada (ED25519/RSA), la transferència diferencial eficient mitjançant **Rsync** sobre SSH i l'automatització no interactiva per a canonades de desplegament.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 04.01](ut0401.md)** | **Protocols de Transferència de Fitxers i Models de Connexió** | Arquitectura FTP (RFC 959), canals de control (port 21) i dades (port 20), mode actiu (PORT) vs mode passiu (PASV), FTPS i SFTP. | +75 XP |
| **[UT 04.02](ut0402.md)** | **Instal·lació i Configuració de Servidors FTP/FTPS Segurs** | Paràmetres crítics de vsftpd (`/etc/vsftpd.conf`) i ProFTPD, xifratge TLS forçat, configuració de rangs de ports passius i tallafocs. | +75 XP |
| **[UT 04.03](ut0403.md)** | **Seguretat, Autenticació, Usuaris Virtuals i Enjaulament (*Chroot*)** | Enjaulament d'usuaris (`chroot_local_user`), resolució de permisos d'escriptura, usuaris virtuals amb bases de dades Berkeley DB o PAM. | +75 XP |
| **[UT 04.04](ut0404.md)** | **Accés Remot Segur amb OpenSSH i Claus Criptogràfiques** | Configuració de `sshd_config`, generació de claus asimètriques (`ssh-keygen -t ed25519`), desactivació d'accés root i autenticació per contrasenya. | +75 XP |
| **[UT 04.05](ut0405.md)** | **Transferència Automatitzada de Fitxers amb Rsync i SCP** | Sincronització diferencial incremental (`rsync -avz --delete -e ssh`), automatització en scripts Bash i permisos de publicació web. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut04-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: Topologia de Canals i Modes en FTP</h4>
  </div>
  <p class="challenge-prompt">Per quina raó tècnica el mode FTP passiu (PASV) és l'estàndard universal recomanat per a clients que es troben darrere d'un encaminador domèstic o corporatiu amb NAT/tallafoc?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè en mode passiu el client obre el port 20 local i el servidor s'hi connecta per enviar dades.</button>
    <button class="btn-check" data-correct="true">Perquè tant la connexió de control com la de dades són iniciades pel client cap a ports oberts del servidor, evitant que el tallafoc del client bloquege connexions entrants imprevistes.</button>
    <button class="btn-check" data-correct="false">Perquè el mode passiu desactiva el protocol TCP i transmet paquets per UDP a màxima velocitat.</button>
    <button class="btn-check" data-correct="false">Perquè el mode passiu no requereix autenticació d'usuari i només s'utilitza per a descàrregues anònimes.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut04-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Enjaulament i Seguretat de vsftpd</h4>
  </div>
  <p class="challenge-prompt">Quan s'activa l'enjaulament d'usuaris locals a vsftpd amb `chroot_local_user=YES`, per quin motiu de seguretat el dimoni vsftpd rebutja la connexió si el directori arrel de l'usuari (`/home/usuari`) té permisos d'escriptura per al mateix usuari?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè el protocol FTP prohibeix que els usuaris puguen pujar fitxers nous al servidor.</button>
    <button class="btn-check" data-correct="true">Per evitar un atac d'escalada o evasió de la gàbia (chroot escape), obligant a fer l'arrel de la gàbia de només lectura o habilitant explícitament `allow_writeable_chroot=YES`.</button>
    <button class="btn-check" data-correct="false">Perquè el sistema de fitxers ext4 no permet muntar directoris sense permisos 777.</button>
    <button class="btn-check" data-correct="false">Perquè vsftpd exigeix que tots els fitxers pertanyen a l'usuari del sistema `www-data` de manera obligatòria.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut04-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Distinció Arquitectural entre FTPS i SFTP</h4>
  </div>
  <p class="challenge-prompt">Quina és la diferència estructural i de protocols fonamental entre FTPS i SFTP?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">FTPS utilitza el dimoni OpenSSH (port 22) mentre que SFTP utilitza el protocol FTP estàndard xifrat amb TLS.</button>
    <button class="btn-check" data-correct="true">FTPS és el protocol FTP tradicional protegit mitjançant capes TLS/SSL (canals de control i dades separats), mentre que SFTP és un subsistema completament diferent que s'executa a través d'una connexió SSH única (port 22).</button>
    <button class="btn-check" data-correct="false">FTPS només permet enviar fitxers de text pla, mentre que SFTP comprimeix imatges automàticament.</button>
    <button class="btn-check" data-correct="false">SFTP requereix instal·lar un certificat SSL emès per una autoritat de certificació comercial, mentre que FTPS és gratuït.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut04-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Desplegament Incremental amb Rsync sobre SSH</h4>
  </div>
  <p class="challenge-prompt">En una tasca de desplegament automàtic d'una aplicació web, quina comanda `rsync` sincronitza de manera recursiva el contingut del directori local `./dist/` al directori remot `/var/www/html/` d'un servidor, eliminant fitxers obsolets en la destinació i viatjant per un túnel SSH?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">`rsync -r ./dist /var/www/html/ --force`</button>
    <button class="btn-check" data-correct="true">`rsync -avz --delete -e ssh ./dist/ usuari@servidor:/var/www/html/`</button>
    <button class="btn-check" data-correct="false">`rsync --copy-all ./dist/ to usuari@servidor:80/var/www/html/`</button>
    <button class="btn-check" data-correct="false">`scp -r -delete ./dist/* usuari@servidor:/var/www/html/`</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 04 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut04')">Descarregar Informe d'Evidències (Aules)</button>
</div>
