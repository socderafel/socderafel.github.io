---
layout: default
title: "UT 02: Resolució de Noms de Domini (DNS)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 2
---

# 🌐 Unitat Temàtica 02: Resolució de Noms de Domini (DNS)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="2" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 02** de **Serveis en Xarxa (SEX)**. En aquesta unitat aprofundirem en el funcionament, arquitectura, desplegament i manteniment del servei de resolució de noms de domini (**DNS**), implementant zones directes i inverses amb el programari lliure **Bind9** a Linux i analitzant la seua integració a Windows Server 2022.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA2)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 2 (RA2)**: *Instal·la serveis de resolució de noms (DNS), descrivint l'estructura jeràrquica de l'espai de noms i verificant el funcionament de les consultes directes i inverses*:

- **a)** S'ha descrit l'arbre jeràrquic d'Internet (Root, TLD, dominis de segon nivell, FQDN).
- **b)** S'ha distingit entre consultes recursives i iteratives i analitzat l'ús dels ports UDP/TCP 53.
- **c)** S'ha instal·lat i configurat el servidor Bind9 creant zones directes amb registres SOA i NS.
- **d)** S'han definit registres A, AAAA, àlies CNAME, registres de correu MX amb prioritat i registres TXT (SPF).
- **e)** S'han creat zones inverses utilitzant el domini especial `.in-addr.arpa` i registres de punter PTR.
- **f)** S'ha configurat un servidor DNS secundari (esclau) i autoritzat transferències de zona AXFR.
- **g)** S'han aplicat eines avançades de diagnosi (`dig`, `nslookup`, `host`) i buidat de memòria cau local.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **2.1** | [L'Espai de Noms Jeràrquic d'Internet i el Protocol DNS](ut0201.md) | Arbre de noms, TLDs gTLD/ccTLD, tipus de servidors (Mestre, Esclau, Memòria cau), consultes recursives vs iteratives i ports UDP/TCP 53. | **75 XP** |
| **2.2** | [Desplegament de Bind9 i Zones Directes a Linux](ut0202.md) | Fitxers de Bind9 (`named.conf.*`), reenviadors forwarders, registre SOA (Serial, Refresh, TTL), importància del punt final i `named-checkzone`. | **75 XP** |
| **2.3** | [Tipus de Registres DNS Fonamentals](ut0203.md) | Registres A/AAAA, gestió d'àlies CNAME, prioritat de servidors de correu MX i cadenes de seguretat antispam TXT (SPF). | **75 XP** |
| **2.4** | [Zones de Resolució Inversa i Servidors Secundaris](ut0204.md) | Domini invers `.in-addr.arpa`, registres PTR, servidors esclaus (`type slave`), notificacions DNS NOTIFY i transferències AXFR. | **75 XP** |
| **2.5** | [DNS a Windows Server 2022 i Diagnosi](ut0205.md) | Zones integrades a Active Directory, resolució multimestre, bateria de diagnosi amb `dig`, `nslookup`, `host` i `ipconfig /flushdns`. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Jerarquia DNS</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">A quina categoria de dominis de primer nivell pertanyen les extensions territorials d'estat com .es, .fr o .de?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> gTLD (Genèrics)</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> ccTLD (Country Code Top Level Domain)</label>
    <label><input type="radio" name="s2" value="2"> FQDN arrel</label>
    <label><input type="radio" name="s3" value="3"> TLD d'infraestructura</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Mestre i Esclau</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com s'anomena el procés mitjançant el qual un servidor DNS esclau descarrega una còpia completa de la base de dades d'una zona des del servidor mestre?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> Descàrrega HTTP GET</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> Transferència de zona (Zone Transfer - AXFR)</label>
    <label><input type="radio" name="s2" value="2"> Sincronització DHCP DORA</label>
    <label><input type="radio" name="s2" value="3"> Túnel SSH</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Registres</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Si volem que l'adreça 'ftp.iesrafael.local' apunte automàticament a la mateixa màquina que 'server.iesrafael.local' sense haver de reescriure l'adreça IP, quin registre hem de crear?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Un registre MX</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Un registre CNAME (Canonical Name)</label>
    <label><input type="radio" name="s3" value="2"> Un registre PTR</label>
    <label><input type="radio" name="s3" value="3"> Un registre SOA</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Resolució Inversa</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin tipus de registre DNS és l'únic que s'utilitza dins d'una zona inversa per traduir una adreça IP al seu nom d'amfitrió FQDN?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> Registre A</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> Registre PTR (Pointer)</label>
    <label><input type="radio" name="s4" value="2"> Registre AAAA</label>
    <label><input type="radio" name="s4" value="3"> Registre SRV</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de Servidor DNS Redundant (Mestre/Esclau)</h3>
      <p class="delivery-subtitle">Memòria tècnica de disseny de zones directes, inverses i replicació amb Bind9.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un projecte tècnic complet on desplegues una arquitectura DNS redundant amb Bind9: servidor mestre amb zona directa i inversa per a la teua xarxa local, configuració del servidor esclau amb recepció de notificacions NOTIFY i transferències AXFR, i captures de comprovació de resolució amb la comanda <code>dig</code>.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD02</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="2" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
