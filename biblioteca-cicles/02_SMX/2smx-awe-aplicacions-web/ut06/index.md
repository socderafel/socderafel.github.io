---
layout: default
title: "UT 06: Seguretat, Còpies de Seguretat i Manteniment Web"
parent: "2n SMX · Aplicacions Web"
has_children: true
nav_order: 6
---

# 🛡️ Unitat Temàtica 06: Seguretat, Còpies de Seguretat i Manteniment Web

<div class="interactive-progress-tracker" data-module="AWE" data-unit="6" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 06** d'**Aplicacions Web (AWE)**. En aquesta darrera unitat consolidarem tots els coneixements del curs per assegurar, blindar i mantenir aplicacions web en entorns de producció reals: xifratge SSL/TLS, protecció contra atacs de l'OWASP Top 10, polítiques de còpies de seguretat 3-2-1, monitoratge de registres i plans de recuperació davant desastres (*Disaster Recovery*).

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA6)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 6 (RA6)**: *Aplica procediments de seguretat, còpia de seguretat i manteniment en aplicacions web, verificant la integritat del sistema*:

- **a)** S'han configurat certificats digitals SSL/TLS i s'ha forçat l'ús d'HTTPS mitjançant HSTS.
- **b)** S'ha aplicat l'enduriment (*Hardening*) de la pila LAMP i s'han afegit capçaleres HTTP de protecció.
- **c)** S'han mitigat vulnerabilitats freqüents (SQLi, XSS, CSRF) i desplegat tallafocs d'aplicació web (WAF).
- **d)** S'han programat còpies de seguretat de fitxers i bases de dades aplicant la regla 3-2-1 i xifratge GPG.
- **e)** S'han automatitzat tasques de manteniment i rotació de registres (*logs*) mitjançant el crontab del sistema.
- **f)** S'ha dissenyat i validat un pla de recuperació davant desastres (DRP) calculant les mètriques RTO i RPO.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **6.1** | [Certificats SSL/TLS i Connexions Segures HTTPS](ut0601.md) | Encaixada TLS, Let's Encrypt i Certbot, directives SSL a Apache, redirecció 301 i HSTS. | **75 XP** |
| **6.2** | [Hardening de Servidors Web i Protecció OWASP](ut0602.md) | Ocultació de versions (ServerTokens Prod), mitigació d'amenaces OWASP Top 10 i regles ModSecurity WAF. | **75 XP** |
| **6.3** | [Estratègies i Eines de Còpia de Seguretat](ut0603.md) | Regla 3-2-1, `mariadb-dump` consistent en calent, `tar` i sincronització remota amb `rsync` i xifratge GPG. | **75 XP** |
| **6.4** | [Automatització de Backups i Monitoratge de Logs](ut0604.md) | Scripts en Bash, execució periòdica amb crontab, comandes `tail -f`/`awk` per auditar `access.log` i rotació amb `logrotate`. | **75 XP** |
| **6.5** | [Plans de Recuperació davant Desastres (DRP)](ut0605.md) | Mètriques RTO i RPO, entorns de Staging, simulacres de restauració pas a pas sobre servidors nets. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Criptografia Web</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com s'anomena la capçalera de seguretat que obliga els navegadors a accedir exclusivament per HTTPS, ignorant fins i tot enllaços o intents d'accés en HTTP insegur?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Content-Security-Policy</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Strict-Transport-Security (HSTS)</label>
    <label><input type="radio" name="s1" value="2"> X-Powered-By</label>
    <label><input type="radio" name="s1" value="3"> ServerSignature</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Seguretat OWASP</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin tipus de tallafocs té la capacitat d'inspeccionar el trànsit HTTP a nivell d'aplicació per bloquejar atacs d'injecció SQL i XSS abans que arriben al CMS?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> Tallafocs de filtratge de paquets estàtic (iptables)</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> Tallafocs d'Aplicació Web (WAF) com ModSecurity</label>
    <label><input type="radio" name="s2" value="2"> Servidor DNS caché</label>
    <label><input type="radio" name="s2" value="3"> Servidor DHCP</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Còpies de Seguretat</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Per què és fonamental emprar l'opció <code>--single-transaction</code> en executar <code>mariadb-dump</code> sobre bases de dades InnoDB en producció?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Perquè només copia la primera taula</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Perquè garanteix una instantània consistent de les dades sense necessitat de bloquejar les taules ni aturar el servei web</label>
    <label><input type="radio" name="s3" value="2"> Perquè esborra els registres de més de 30 dies</label>
    <label><input type="radio" name="s3" value="3"> Perquè reinicia el servidor Apache</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Resiliència (DRP)</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina diferència defineix les mètriques RTO i RPO en un pla de recuperació davant desastres d'un servidor web?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> RTO mesura els diners i RPO mesura la memòria RAM</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> RPO mesura el volum de dades que podem perdre (temps des de l'últim backup), mentre que RTO mesura el temps que tardem a restablir el servei complet</label>
    <label><input type="radio" name="s4" value="2"> Són dos acrònims que signifiquen exactament el mateix</label>
    <label><input type="radio" name="s4" value="3"> RTO és per a Windows i RPO és per a Linux</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Final Aules: Manteniment, Blindatge i Pla de Disaster Recovery</h3>
      <p class="delivery-subtitle">Memòria tècnica final de seguretat, automatització de backups i simulacre de recuperació.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta el projecte tècnic final d'Aplicacions Web que integre l'esquema de seguretat complet: certificat HTTPS, hardening de capçaleres, script automatitzat de respatler al crontab i la documentació d'un assaig real de recuperació sobre una màquina neta amb càlcul d'RTO i RPO.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD06 (Qualificació Final del Mòdul)</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="AWE" data-unit="6" data-topic="0">📥 Descarrega Especificació del Projecte Final (PDF)</button>
</div>
