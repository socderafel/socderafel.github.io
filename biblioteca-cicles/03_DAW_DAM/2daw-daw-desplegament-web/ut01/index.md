# UT 01: Implantació d'Arquitectures Web

<div class="interactive-progress-tracker" data-unit="ut01" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

El desenvolupament d'una aplicació web no finalitza quan s'escriu l'última línia de codi font; comença aleshores una fase crítica i transcendent: la seua **implantació i desplegament en entorns de producció reals** (Resultat d'Aprenentatge 1 - RA1).

Aquesta primera unitat didàctica estableix els fonaments estructurals de les arquitectures web modernes: des de l'evolució del model clàssic client-servidor fins a les arquitectures desacoblades multicapa (N-capes), la transició de sistemes monolítics cap a microserveis empaquetats en contenidors Docker, l'eliminació de punts únics de fallada mitjançant clústers d'alta disponibilitat i balanceig de càrrega, i el disseny de zones perimetrals desmilitaritzades (DMZ) protegides per proxies inversos i xifratge TLS d'extrem a extrem.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 01.01](ut0101.md)** | **Evolució i Fonaments de les Arquitectures Web Client-Servidor** | El protocol HTTP/HTTPS, comunicació asíncrona, navegadors web i cicle petició-resposta. | +75 XP |
| **[UT 01.02](ut0102.md)** | **Arquitectures per Capes: Dues Capes, Tres Capes i N-Capes** | Desacoblament de presentació (frontend), lògica de negoci (backend) i persistència (BBDD). | +75 XP |
| **[UT 01.03](ut0103.md)** | **Monòlits vs Microserveis i Contenidors de Programari (Docker)** | Avantatges i costos del desacoblament de serveis, APIs RESTful i aïllament amb contenidors. | +75 XP |
| **[UT 01.04](ut0104.md)** | **Alta Disponibilitat, Tolerància a Fallades i Balanceig de Càrrega Web** | Mètriques RTO/RPO, clústers actiu-actiu i actiu-passiu, i algorismes de balanceig (Round Robin). | +75 XP |
| **[UT 01.05](ut0105.md)** | **Seguretat en Arquitectures Web: DMZ, Proxies Inversos i Certificats TLS** | Zones perimetrals DMZ, filtratge per tallafocs, terminació SSL/TLS i proxies inversos. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut01-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Arquitectura Clàssica de Tres Capes</h4>
  </div>
  <p class="challenge-question">Quins són els tres nivells clarament diferenciats en una arquitectura web estàndard de tres capes?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Capa de Maquinari, Capa de Teclat i Capa de Ratolí.</button>
    <button class="btn-check" data-correct="true">B) Capa de Presentació (Frontend / Navegador), Capa de Lògica de Negoci (Backend / Servidor d'Aplicacions) i Capa de Dades (Gestor de Base de Dades Relacional o NoSQL).</button>
    <button class="btn-check" data-correct="false">C) Capa de Correu, Capa de Vídeo i Capa de Xat.</button>
    <button class="btn-check" data-correct="false">D) Capa Windows, Capa Linux i Capa macOS.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut01-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Diferència entre Monòlit i Microserveis</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge operatiu aporta una arquitectura de microserveis enfront d'un monòlit clàssic quan cal actualitzar una funcionalitat?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que els microserveis no necessiten xarxa per comunicar-se.</button>
    <button class="btn-check" data-correct="true">B) Permet desplegar, actualitzar o escalar exclusivament el servei afectat (per exemple, el mòdul de facturació) de forma independent sense haver de recompilar, aturar ni desplegar de nou tota l'aplicació sencera.</button>
    <button class="btn-check" data-correct="false">C) Que elimina totalment la base de dades.</button>
    <button class="btn-check" data-correct="false">D) Que redueix el consum elèctric del client un 80%.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut01-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Funció d'una Zona Desmilitaritzada (DMZ)</h4>
  </div>
  <p class="challenge-question">Per quina raó de seguretat s'ubiquen els servidors web públics en una subxarxa DMZ aïllada per dos tallafocs?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els servidors d'Internet tinguin més cobertura Wi-Fi.</button>
    <button class="btn-check" data-correct="true">B) Perquè si un atacant aconsegueix comprometre el servidor web accessible des d'Internet, quede atrapat a la DMZ sense poder accedir directament a la xarxa corporativa interna ni a les bases de dades crítiques.</button>
    <button class="btn-check" data-correct="false">C) Perquè els servidors privats s'apaguen automàticament.</button>
    <button class="btn-check" data-correct="false">D) Perquè el reglament militar ho exigeix en temps de pau.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut01-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Mecanisme de Proxy Invers</h4>
  </div>
  <p class="challenge-question">Com actua un Proxy Invers (com Nginx o HAProxy) situat davant dels servidors d'aplicacions web?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Tradueix les pàgines web a l'esperanto en temps real.</button>
    <button class="btn-check" data-correct="true">B) Rep les peticions dels clients externs com si fos el servidor final, gestiona la seguretat i la terminació SSL/TLS, i les reenvia de forma optimitzada als servidors interns ocults, tornant la resposta al client.</button>
    <button class="btn-check" data-correct="false">C) Bloqueja totes les descàrregues de fitxers PDF.</button>
    <button class="btn-check" data-correct="false">D) Emmagatzema les contrasenyes dels usuaris en fitxers CSV públics.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 01: Disseny d'una Arquitectura Web de Comerç Electrònic Segura</h4>
  </div>
  <p>Dissenya l'esquema d'arquitectura complet per a una aplicació web de comerç electrònic d'alt trànsit. Representa gràficament la separació en tres capes: 1) Capa perimetral pública (DMZ amb balancejador de càrrega i proxies inversos amb TLS), 2) Capa d'aplicacions privada (clúster de servidors PHP-FPM o Node.js amb escalabilitat horitzontal) i 3) Capa de persistència aïllada (base de dades primària amb rèplica en clúster i memòria cau Redis). Redacta una memòria tècnica justificant la tolerància a fallades i la protecció de dades.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
