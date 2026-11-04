---
layout: default
title: "Desplegament d'Aplicacions Web (2n DAW) | Biblioteca de Cicles"
course_root: "."
badge: "2n DAW · Grau Superior · FP Informàtica i Comunicacions"
next_url: "./ut01/index.md"
next_label: "Començar UT 01: Implantació d'Arquitectures Web →"
---

# Desplegament d'Aplicacions Web (2n DAW)

Temari oficial complet, material didàctic interactiu i reptes d'aprenentatge del mòdul de **Desplegament d'Aplicacions Web (MP0614)** per al cicle formatiu de grau superior de **Desenvolupament d'Aplicacions Web (DAW)**.

<div class="interactive-progress-tracker" data-unit="daw-global" data-total-points="2850">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Puntuació Global del Mòdul: <strong class="points-earned">0</strong> / 2.850 XP</span>
    <span>Reptes Interactius Totals: <strong class="challenges-completed">0</strong> / 114</span>
  </div>
</div>

---

## Marc Curricular i Alineació Professional

Aquest mòdul professional capacita en la preparació, implantació, publicació i manteniment operatiu d'aplicacions web en entorns reals de producció, seguint les directrius del **Reial Decret 686/2010** i el currículum de la Comunitat Valenciana:
- **Codi del mòdul:** MP0614 (DAW).
- **Hores lectives de referència:** 80 hores.
- **Perfil Professional:** Administrador de servidors web i d'aplicacions, enginyer de desplegament junior, especialista en integració i desplegament continu (CI/CD) i operacions DevOps per a aplicacions web modernes sobre plataformes Linux.

---

## Taula Resum de les 6 Unitats Didàctiques (UD1 a UD6)

| Unitat | Resultat d'Aprenentatge | Continguts Principals | Apartats | Reptes i XP | Accés Directe |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **UT 01** | **RA1** | Implantació d'arquitectures web client-servidor, multicapa, protocols HTTP/HTTPS, rendiment i entorns de desplegament | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 01](./ut01/index.md) |
| **UT 02** | **RA2** | Administració de servidors web Apache i Nginx, Virtual Hosts, blocs server, seguretat i xifratge TLS amb Let's Encrypt | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 02](./ut02/index.md) |
| **UT 03** | **RA3** | Administració de servidors d'aplicacions: PHP-FPM, Apache Tomcat (Java), Node.js amb PM2 i entorns Python WSGI/ASGI | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 03](./ut03/index.md) |
| **UT 04** | **RA4** | Servidors de transferència de fitxers (FTP, FTPS sobre TLS, SFTP), vsftpd, enjaulament chroot, SSH i sincronització Rsync | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 04](./ut04/index.md) |
| **UT 05** | **RA5** | Serveis de xarxa per al desplegament: DNS amb BIND9, zones directes/inverses, proxies inversos Nginx/HAProxy i balanceig de càrrega | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 05](./ut05/index.md) |
| **UT 06** | **RA6** | Control de versions amb Git, estratègies Blue-Green/Canary, canonades CI/CD (GitHub Actions), Docker Compose i observabilitat | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 06](./ut06/index.md) |

---

## Navegació Ràpida per Unitats de Treball

### [UT 01: Implantació d'Arquitectures Web](./ut01/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA1`
- Models client-servidor, monòlits, arquitectures orientades a serveis (SOA) i microserveis.
- Servidors web, servidors d'aplicacions i gestors de bases de dades relacionals/NoSQL.
- El protocol HTTP: mètodes (GET, POST, PUT, DELETE, PATCH), capçaleres, codis d'estat (1xx-5xx) i HTTP/2 / HTTP/3 (QUIC).
- Paràmetres clau: concurrència, temps de resposta, amplada de banda, latència i SLA.
- Entorns: Desenvolupament (local), Proves/Staging i Producció amb aïllament de dades.

### [UT 02: Administració i Configuració de Servidors Web](./ut02/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA2`
- Servidor Apache: models de multiprocessament MPM (Prefork, Worker, Event), estructura `/etc/apache2` i `a2enmod`.
- Amfitrions virtuals (*Virtual Hosts*) en Apache per FQDN, IP i port (`a2ensite`).
- Servidor Nginx: arquitectura asíncrona per bucle d'esdeveniments, blocs `server` i directives `location`.
- Seguretat, autenticació bàsica HTTP (`htpasswd`), directives `.htaccess` i ocultació de capçaleres de versió.
- Xifratge TLS 1.3 i automatització de certificats gratuïts de Let's Encrypt mitjançant Certbot.

### [UT 03: Administració de Servidors d'Aplicacions Web](./ut03/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA3`
- Rols dels servidors d'aplicacions en arquitectures multicapa i patrons de comunicació.
- Execució de PHP mitjançant PHP-FPM integrat amb Nginx i Apache (`proxy_fcgi`).
- Servidors Java amb Apache Tomcat: estructura de carpetes, desplegament d'arxius `.war` i `catalina.out`.
- Execució d'aplicacions Node.js en producció amb el gestor de processos PM2 (clúster, reinicis automàtics).
- Aplicacions Python en producció: estàndards WSGI i ASGI, servidors d'aplicacions Gunicorn i Uvicorn.

### [UT 04: Servidors de Transferència de Fitxers i Accés Remot Segur](./ut04/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA4`
- Protocols de transferència: FTP clàssic (canals de control i dades), mode actiu (`PORT`) vs mode passiu (`PASV`), FTPS i SFTP.
- Servidor vsftpd: paràmetres crítics a `/etc/vsftpd.conf`, rangs de ports passius i tallafoc.
- Seguretat i enjaulament (*chroot jail*), resolució de l'error *writable root* i usuaris virtuals PAM/DB.
- Accés remot segur amb OpenSSH: generació de claus asimètriques ED25519, `authorized_keys` i bloqueig de contrasenyes.
- Sincronització diferencial d'arxius web amb `rsync -avz --delete -e ssh` i scripts de desplegament.

### [UT 05: Serveis de Xarxa i Infraestructura per al Desplegament Web](./ut05/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA5`
- El Sistema de Noms de Domini (DNS): espai de noms jeràrquic, servidors arrel, TLDs, servidors autoritatius i resolució recursiva.
- Instal·lació i configuració de BIND9 (`named`): zones mestres directes, registres SOA, NS, A, CNAME, MX i TXT.
- Zones inverses (`.in-addr.arpa`), registres PTR, reenviadors (*forwarders*) i diagnòstic amb `dig`, `host` i `nslookup`.
- Proxies inversos (*Reverse Proxies*) amb Nginx i HAProxy: terminació TLS, preservació de capçaleres (`X-Forwarded-*`).
- Balanceig de càrrega: grups `upstream`, algorismes (Round-Robin, least_conn, ip_hash), alta disponibilitat i memòria cau.

### [UT 06: Control de Versions, Integració Contínua i Desplegament Web (CI/CD)](./ut06/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA6`
- Control de versions distribuït amb Git: branques, models de col·laboració GitFlow vs Trunk-Based Development i SemVer.
- Estratègies de llançament sense caiguda: Recreate, Rolling Updates, Blue-Green Deployments i Canary Releases.
- Automatització de canonades de CI/CD amb GitHub Actions i GitLab CI: YAML de fluxos, tests automàtics i desplegament desatès.
- Contenització d'aplicacions web amb Docker: imatges mínimes *multi-stage* i composició de serveis amb Docker Compose.
- Observabilitat i producció: mètriques (Prometheus/Grafana), logs centralitzats (Loki), monitoratge d'uptime i auditories.

---

### Metodologia Didàctica i Avaluació Formativa

El mòdul està dissenyat seguint els principis d'avaluació contínua, aprenentatge basat en la pràctica (*Learning by Doing*) i ludificació competencial:
- **Reptes Interactius Immediats:** Cada apartat conté 3 reptes de reflexió tècnica (+25 XP cadascun) que ofereixen retroacció explicativa instantània per a consolidar conceptes.
- **Reptes Globals de Síntesi:** Cada unitat conclou amb 4 reptes avançats de presa de decisions arquitecturals (+100 XP totals per unitat).
- **Seguiment i Informes Aules:** Tots els documents incorporen un panell de progrés viu i el generador automàtic d'informes d'evidències oficials per a la plataforma docent Aules de la Generalitat Valenciana.
