---
layout: default
title: "UT 05: Servidors Web (HTTP/HTTPS) i Servidors Intermediaris (Proxy)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 5
---

# 🌐 Unitat Temàtica 05: Servidors Web (HTTP/HTTPS) i Servidors Intermediaris (Proxy)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="5" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 05** de **Serveis en Xarxa (SEX)**. En aquesta unitat desplegarem i assegurarem la infraestructura web corporativa: arquitectura comparada d'**Apache2 i Nginx**, publicació de múltiples portals mitjançant **Llocs Virtuals (*Virtual Hosts*)**, xifratge criptogràfic **SSL/TLS (HTTPS)** i acceleració i control de la navegació mitjançant servidors intermediaris **Squid Proxy** amb llistes de control d'accés (ACL).

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA5)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 5 (RA5)**: *Instal·la servidors web (HTTP/HTTPS) i servidors intermediaris (Proxy/Caché), configurant llocs virtuals (Virtual Hosts), certificats TLS i auditories d'accés*:

- **a)** S'ha descrit l'arquitectura del protocol HTTP/HTTPS, els mètodes GET/POST i les famílies de codis d'estat de resposta.
- **b)** S'han comparat els models de concurrència d'Apache2 (processos/fils) i Nginx (asíncron per esdeveniments).
- **c)** S'han creat i administrat Virtual Hosts basats en nom i port mitjançant comandes d'Apache2 (`a2ensite`, `a2enmod`).
- **d)** S'ha implementat el canal segur HTTPS mitjançant certificats digitals TLS i s'ha forçat la redirecció 301 des del port 80.
- **e)** S'ha instal·lat el servidor intermediari Squid diferenciant entre la modalitat tradicional i transparent.
- **f)** S'ha optimitzat l'ús d'ample de banda configurant la memòria cau d'objectes al disc i a la memòria RAM.
- **g)** S'han definit polítiques d'ús acceptable mitjançant ACLs (dominis prohibits, horaris, tipus d'arxius) i analitzat `access.log`.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **5.1** | [Arquitectura de Servidors Web: Apache2 i Nginx](ut0501.md) | Protocols HTTP/HTTPS, mètodes GET/POST/HEAD, codis 2xx/3xx/4xx/5xx i models MPM vs Event-driven. | **75 XP** |
| **5.2** | [Desplegament de Virtual Hosts a Apache2](ut0502.md) | Virtual Hosts basats en nom (Host:), directori `/etc/apache2/sites-available/`, comandes `a2ensite`, `a2enmod` i `Options -Indexes`. | **75 XP** |
| **5.3** | [Seguretat Web i Certificats SSL/TLS (HTTPS)](ut0503.md) | Xifratge asimètric a la web, Certbot Let's Encrypt, directives `SSLEngine`, port 443 i redirecció 301 permanent. | **75 XP** |
| **5.4** | [Servidors Intermediaris de Memòria Cau: Squid](ut0504.md) | Funcionament de cau web (Hit vs Miss), proxy explícit (port 3128) vs transparent, directiva `cache_dir` a `squid.conf`. | **75 XP** |
| **5.5** | [Filtratge de Continguts, ACLs i Auditories](ut0505.md) | Llistes de control d'accés (src, dstdomain, time), regla d'ordre estricte d'`http_access` i auditoria d'`access.log`. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Virtual Hosts</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina directiva dins d'un fitxer de Virtual Host a Apache2 indica la carpeta física del disc on estan desats els fitxers HTML del web?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> <code>ServerName</code></label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> <code>DocumentRoot</code></label>
    <label><input type="radio" name="s2" value="2"> <code>DirectoryIndex</code></label>
    <label><input type="radio" name="s3" value="3"> <code>HomePath</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Criptografia Web</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com s'anomena el protocol automàtic gratuït desenvolupat per la EFF i Let's Encrypt per emetre i renovar certificats SSL?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> Kerberos</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> Certbot / Protocol ACME</label>
    <label><input type="radio" name="s2" value="2"> FileZilla</label>
    <label><input type="radio" name="s3" value="3"> PuTTY</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Memòria Cau</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin avantatge directe té per a un centre educatiu l'ús de la memòria cau web d'un servidor Squid Proxy?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Que millora el so dels altaveus</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Redueix dràsticament el consum d'ample de banda d'Internet i accelera la navegació en lliurar arxius comuns des de la xarxa local</label>
    <label><input type="radio" name="s2" value="2"> Que fa innecessari tenir routers</label>
    <label><input type="radio" name="s3" value="3"> Que el programari mai té errors</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Filtratge Proxy</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Per què és fonamental situar les regles 'http_access deny' abans de la regla 'http_access allow' al fitxer squid.conf?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> Perquè Squid només llegeix la darrera línia</label>
    <label><input type="radio" name="r2" value="1" data-correct="true"> Perquè les regles s'avaluen en ordre seqüencial descendent; si es permet primer la xarxa, els llocs prohibits posteriors mai arribaran a bloquejar-se</label>
    <label><input type="radio" name="s4" value="2"> Perquè la memòria cau s'esborraria</label>
    <label><input type="radio" name="s4" value="3"> Perquè el port 3128 es tancaria</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de Web Segura (HTTPS) i Proxy Intermediari</h3>
      <p class="delivery-subtitle">Memòria tècnica de llocs virtuals amb xifratge TLS i control de navegació amb Squid.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un document tècnic complet sobre la implementació d'un servidor web segur amb Virtual Host i redirecció 301, integrat amb un servei Squid Proxy que aplique una política de bloqueig de xarxes socials i una franja horària lectiva per a una aula d'informàtica.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD05</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="5" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
