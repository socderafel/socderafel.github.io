---
layout: default
title: "UT 01: Serveis de Xarxa i Assignació Dinàmica d'Adreces (DHCP)"
parent: "2n SMX · Serveis en Xarxa"
has_children: true
nav_order: 1
---

# 🌐 Unitat Temàtica 01: Serveis de Xarxa i Assignació Dinàmica d'Adreces (DHCP)

<div class="interactive-progress-tracker" data-module="SEX" data-unit="1" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 01** de **Serveis en Xarxa (SEX)**. En aquesta primera unitat establirem els fonaments de l'arquitectura client-servidor i dominarem l'estudi, desplegament, gestió i diagnosi del servei d'assignació dinàmica d'adreces IP mitjançant el protocol **DHCP** tant a entorns Linux (ISC-DHCP Server) com a servidors Windows Server 2022.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA1)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 1 (RA1)**: *Instal·la serveis de configuració dinàmica d'adreces, descrivint les seues característiques i verificant l'assignació correcta de paràmetres de xarxa a clients heterogenis*:

- **a)** S'han identificat els avantatges de la configuració automàtica d'adreces enfront de la manual.
- **b)** S'ha descrit el funcionament del protocol DHCP i el cicle de negociació DORA mitjançant ports UDP 67 i 68.
- **c)** S'ha instal·lat i configurat un servidor DHCP a Linux definint rangs, exclusions, opcions de xarxa i temps de concessió.
- **d)** S'han assignat reserves d'adreces IP estàtiques vinculades a l'adreça física MAC.
- **e)** S'ha desplegat el rol DHCP a Windows Server 2022 i gestionat la seua autorització a l'Active Directory.
- **f)** S'ha descrit la necessitat d'agents de retransmissió (DHCP Relay) en xarxes segmentades en múltiples subxarxes o VLANs.
- **g)** S'han aplicat comandes de diagnosi i analitzat concessions mitjançant eines de xarxa i Wireshark.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **1.1** | [Arquitectura Client-Servidor i el Protocol DHCP](ut0101.md) | Adreçament estàtic vs dinàmic, ports UDP 67/68, cicle DORA (Discover, Offer, Request, ACK) i temporitzadors T1/T2. | **75 XP** |
| **1.2** | [Instal·lació i Configuració del Servidor DHCP a Linux](ut0102.md) | ISC-DHCP Server, IP estàtica prèvia, sintaxi de `dhcpd.conf`, directives `subnet`, `range`, `option routers` i `domain-name-servers`. | **75 XP** |
| **1.3** | [Reserves d'IP per MAC i Gestió de Concessions](ut0103.md) | Blocs `host` amb `hardware ethernet` i `fixed-address`, registre de concessions `dhcpd.leases` i eina `dhcp-lease-list`. | **75 XP** |
| **1.4** | [Servidor DHCP a Windows Server 2022](ut0104.md) | Rol DHCP, autorització a Active Directory, àmbits IPv4, exclusions, opcions de servidor vs àmbit i cmdlets de PowerShell. | **75 XP** |
| **1.5** | [Diagnosi, DHCP Relay i Alta Disponibilitat (Failover)](ut0105.md) | Dominis de difusió, agent DHCP Relay (ip helper-address), models de Failover (Load Balancing vs Hot Standby) i comandes `dhclient`/`ipconfig`. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Comunicació DORA</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina adreça IP utilitza un client DHCP com a IP d'origen en el paquet inicial DHCPDISCOVER quan encara no té assignada cap adreça de xarxa?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> <code>127.0.0.1</code></label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> <code>0.0.0.0</code></label>
    <label><input type="radio" name="s2" value="2"> <code>255.255.255.255</code></label>
    <label><input type="radio" name="s3" value="3"> <code>192.168.1.1</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Linux isc-dhcp</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina directiva de configuració s'ha d'afegir a `/etc/default/isc-dhcp-server` per indicar que el servei només responga a les peticions que entren per la targeta 'eth1'?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> <code>LISTEN_PORT="eth1"</code></label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> <code>INTERFACESv4="eth1"</code></label>
    <label><input type="radio" name="s2" value="2"> <code>BIND_DEVICE="eth1"</code></label>
    <label><input type="radio" name="s2" value="3"> <code>CARD="eth1"</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Segmentació</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Si una empresa té tres plantes cadascuna amb la seua pròpia VLAN i un únic servidor DHCP centralitzat a la sala de servidors, quin servei cal habilitar a l'encaminador de cada planta?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Un servidor FTP</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Un agent de retransmissió DHCP (DHCP Relay Agent / ip helper-address)</label>
    <label><input type="radio" name="s3" value="2"> Un certificat SSL</label>
    <label><input type="radio" name="s3" value="3"> Un servidor Web Apache</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Resiliència</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com es denomina la tecnologia que permet que dos servidors DHCP sincronitzen les seues concessions perquè la xarxa no caiga si un d'ells s'apaga?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> DHCP Tunneling</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> DHCP Failover</label>
    <label><input type="radio" name="s4" value="2"> DHCP Snooping</label>
    <label><input type="radio" name="s4" value="3"> DHCP Poisoning</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament Integral de Servidor DHCP Multiplataforma</h3>
      <p class="delivery-subtitle">Memòria tècnica de disseny d'àmbits, reserves per a servidors i anàlisi de concessions.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un document tècnic complet sobre la implementació d'un servei DHCP per a una pime fictícia de 50 equips: defineix l'esquema d'adreçament, les exclusions d'adreces per a routers, 2 reserves per a impressores departamentals, la configuració del temps de concessió i una captura d'un client obtenint tots els paràmetres de xarxa.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD01</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="SEX" data-unit="1" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
