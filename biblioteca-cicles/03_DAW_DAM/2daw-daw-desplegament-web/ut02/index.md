# UT 02: Administració i Configuració de Servidors Web

<div class="interactive-progress-tracker" data-unit="ut02" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

El programari de servidor web és la peça d'infraestructura central encarregada de rebre les connexions HTTP/HTTPS dels usuaris d'Internet, servir els recursos estàtics a velocitats màximes i delegar el processament dinàmic als intèrprets d'aplicació corresponents (Resultat d'Aprenentatge 2 - RA2).

En aquesta unitat didàctica dominaràs la instal·lació, administració avançada, optimització i securització dels dos servidors web hegemònics del panorama mundial: **Apache HTTP Server** (amb els seus models MPM de multiprocessament, mòduls dinàmics i amfitrions virtuals) i **Nginx** (amb la seua arquitectura asíncrona i no bloquejant basada en bucle d'esdeveniments, directrius `server` i `location`). Així mateix, aprofundiràs en el control d'accés, directrius descentralitzades `.htaccess`, i la implantació automatitzada de certificats criptogràfics TLS gratuïts emesos per **Let's Encrypt** mitjançant el protocol ACME i l'eina Certbot.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 02.01](ut0201.md)** | **El Servidor Web Apache: Arquitectura MPM i Configuració Base** | Models Prefork, Worker i Event, estructura `/etc/apache2`, directives principals i gestió de mòduls (`a2enmod`). | +75 XP |
| **[UT 02.02](ut0202.md)** | **Amfitrions Virtuals (*Virtual Hosts*) en Apache** | Allotjament múltiple basat en nom (FQDN), IP i port, ServerName, DocumentRoot i gestió de llocs (`a2ensite`). | +75 XP |
| **[UT 02.03](ut0203.md)** | **El Servidor Web Nginx: Arquitectura Asíncrona i Blocs `server`** | Processos mestre i treballadors (*workers*), bucle d'esdeveniments epoll, blocs `server` i directives `location`. | +75 XP |
| **[UT 02.04](ut0204.md)** | **Seguretat en Servidors Web: Autenticació, Control d'Accés i `.htaccess`** | Autenticació bàsica HTTP (`htpasswd`), directives `AllowOverride`, ocultació de versions (*ServerTokens*) i permisos. | +75 XP |
| **[UT 02.05](ut0205.md)** | **Desplegament Segur amb HTTPS, Let's Encrypt i Certbot** | Xifratge TLS 1.3, protocol ACME, instal·lació i renovació automàtica de certificats amb Certbot i CRON. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut02-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Diferència entre els Models MPM d'Apache</h4>
  </div>
  <p class="challenge-question">Quina diferència fonamental separa el model clàssic `mpm_prefork` del modern `mpm_event` a Apache HTTP Server?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Prefork només funciona a Windows i Event només a Linux.</button>
    <button class="btn-check" data-correct="true">B) Prefork crea un procés complet independent per a cada connexió (segur però molt pesat en RAM i no apte per a concurrència massiva); Event utilitza fils lleugers i un fil dedicat per gestionar les connexions Keep-Alive, oferint escalabilitat superior.</button>
    <button class="btn-check" data-correct="false">C) Prefork no admet fitxers HTML.</button>
    <button class="btn-check" data-correct="false">D) Event apaga el servidor cada 10 peticions.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut02-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Resolució de Virtual Hosts Basats en Nom</h4>
  </div>
  <p class="challenge-question">Com sap el servidor Apache quin lloc web servir si comparteix una única adreça IP pública per a dos Virtual Hosts diferents (`www.botiga.com` i `www.bloc.com`)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Pregunta a l'administrador per consola en temps real.</button>
    <button class="btn-check" data-correct="true">B) Inspecciona la capçalera obligatòria `Host:` de la petició HTTP enviada pel navegador i la compara amb la directiva `ServerName` o `ServerAlias` dels seus Virtual Hosts configurats.</button>
    <button class="btn-check" data-correct="false">C) Envia una moneda a l'aire i tria a l'atzar.</button>
    <button class="btn-check" data-correct="false">D) Serveix sempre el fitxer amb mida més gran.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut02-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Arquitectura d'Esdeveniments de Nginx</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de rendiment té Nginx respecte als servidors web clàssics basats en fils (*thread-per-connection*) sota allaus de trànsit massiu?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que Nginx no utilitza la targeta de xarxa.</button>
    <button class="btn-check" data-correct="true">B) Utilitza una arquitectura asíncrona no bloquejant conduïda per esdeveniments (utilitzant `epoll` a Linux), on un sol procés treballador pot gestionar desenes de milers de connexions concurrents amb un consum mínim i constant de memòria RAM.</button>
    <button class="btn-check" data-correct="false">C) Que converteix el codi PHP en codi màquina al vol.</button>
    <button class="btn-check" data-correct="false">D) Que està subvencionat pel ministeri d'energia.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut02-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Funcionament de Let's Encrypt i Certbot</h4>
  </div>
  <p class="challenge-question">Com valida Let's Encrypt mitjançant el protocol ACME que ets l'amo legítim d'un domini web abans d'emetre el certificat gratuït?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Trucant per telèfon a la policia local.</button>
    <button class="btn-check" data-correct="true">B) Mitjançant un desafiament HTTP-01 (on Certbot col·loca un fitxer secret a `/.well-known/acme-challenge/` que el servidor de Let's Encrypt llegeix per comprovar que controles el servidor web) o mitjançant un desafiament DNS-01 afegint un registre TXT.</button>
    <button class="btn-check" data-correct="false">C) Enviant una carta firmada per correu ordinari.</button>
    <button class="btn-check" data-correct="false">D) Escanejant el codi de barres del servidor.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 02: Desplegament de Servidor Web amb Múltiples Virtual Hosts i HTTPS</h4>
  </div>
  <p>Instal·la i configura un servidor Apache o Nginx en una màquina Linux (Debian/Ubuntu). Configura dos llocs web independents: `app1.local` i `app2.local` amb directoris arrel diferenciats. Habilita el mòdul de reescriptura, configura una directiva d'ocultació de versions de programari (`ServerTokens Prod`), crea una àrea protegida amb autenticació HTTP bàsica (`.htpasswd`) i activa HTTPS mitjançant un certificat digital. Adjunta els fitxers de configuració dels Virtual Hosts i les captures del navegador.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
