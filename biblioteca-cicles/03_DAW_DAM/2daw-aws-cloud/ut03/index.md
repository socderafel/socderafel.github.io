# UT 03: Xarxes Virtuals al Núvol: Amazon VPC i Seguretat Perimetral

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

Cap recurs de computació o base de dades pot funcionar de manera aïllada i segura sense una infraestructura de xarxa perfectament dissenyada. A Amazon Web Services, el servei fonamental sobre el qual s'assenten totes les aplicacions és **Amazon Virtual Private Cloud (Amazon VPC)** (Resultat d'Aprenentatge 2 - RA2).

En aquesta unitat didàctica aprendràs a dissenyar el teu propi centre de dades virtual aïllat lògicament al núvol. Configuraràs blocs d'adreçament IP mitjançant notació CIDR, segmentaràs la xarxa en subxarxes públiques i privades repartides en múltiples Zones de Disponibilitat, establiràs rutes de sortida a Internet mitjançant Internet Gateways i dispositius NAT, i dominaràs la defensa en profunditat combinant Grups de Seguretat amb estat (*stateful*) i NACLs sense estat (*stateless*), fins a la gestió segura de servidors interns mitjançant Bastion Hosts i AWS Systems Manager.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 03.01](ut0301.md)** | **Amazon Virtual Private Cloud (VPC): Fonaments i Blocs CIDR** | Aïllament lògic, espai d'adreces RFC 1918, màscares CIDR i adreces IP reservades per AWS. | +75 XP |
| **[UT 03.02](ut0302.md)** | **Subxarxes Públiques i Privades en Múltiples AZ** | Segmentació de capes web/frontend i backend/base de dades per a resiliència i seguretat. | +75 XP |
| **[UT 03.03](ut0303.md)** | **Taules d'Encaminament, Internet Gateways (IGW) i NAT Gateways** | Flux de trànsit IPv4, passarel·les a Internet per a instàncies públiques i sortida segura per a privades. | +75 XP |
| **[UT 03.04](ut0304.md)** | **Seguretat a la Xarxa: Security Groups vs Network ACLs (NACLs)** | Comparativa crucial: nivell d'instància vs nivell de subxarxa, comportament amb estat vs sense estat. | +75 XP |
| **[UT 03.05](ut0305.md)** | **Arquitectura d'Accés Remot Segur: Bastion Hosts i AWS SSM** | Connexions SSH/RDP segures a xarxes privades, gestió de salts i connexió sense ports oberts amb SSM. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut03-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Adreces IP Reservades en una Subxarxa d'AWS</h4>
  </div>
  <p class="challenge-question">Quantes adreces IP reserva automàticament AWS en qualsevol subxarxa creada i per a quins propòsits s'utilitzen?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) No en reserva cap, totes les 256 adreces estan disponibles per a instàncies.</button>
    <button class="btn-check" data-correct="true">B) Reserva exactament 5 adreces IP: xarxa (.0), router de la VPC (.1), DNS d'AWS (.2), ús futur (.3) i difusió/broadcast (.255).</button>
    <button class="btn-check" data-correct="false">C) Reserva la meitat de les adreces per a la policia informàtica.</button>
    <button class="btn-check" data-correct="false">D) Reserva només l'adreça .100 per al panell web.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut03-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Diferència entre Internet Gateway i NAT Gateway</h4>
  </div>
  <p class="challenge-question">Quina diferència fonamental existeix entre un Internet Gateway (IGW) i un NAT Gateway a una VPC d'AWS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) L'Internet Gateway només funciona amb fibra òptica i el NAT amb Wi-Fi.</button>
    <button class="btn-check" data-correct="true">B) L'Internet Gateway permet comunicació bidireccional (entrada i sortida) entre instàncies públiques i Internet; el NAT Gateway permet que instàncies privades accedeixin a Internet (per actualitzar-se) però impedeix totalment que ningú des d'Internet iniciï una connexió cap a elles.</button>
    <button class="btn-check" data-correct="false">C) El NAT Gateway és un dispositiu que es col·loca a la taula del professor.</button>
    <button class="btn-check" data-correct="false">D) Són idèntics i es poden intercanviar sense canvis de configuració.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut03-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Comportament Stateful dels Grups de Seguretat</h4>
  </div>
  <p class="challenge-question">Què significa tècnicament que un Grup de Seguretat (*Security Group*) tingui estat (*stateful*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que guarda el nom de l'usuari en un fitxer de text.</button>
    <button class="btn-check" data-correct="true">B) Que si es permet el trànsit d'entrada per un port (com el port 80 HTTP), el trànsit de resposta de sortida es permet automàticament sense necessitat de crear cap regla explícita de sortida.</button>
    <button class="btn-check" data-correct="false">C) Que cal reiniciar la màquina cada vegada que s'afegeix una regla nova.</button>
    <button class="btn-check" data-correct="false">D) Que només funciona en països amb govern reconegut.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut03-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Funció d'un Host Bastió (*Bastion Host*)</h4>
  </div>
  <p class="challenge-question">Per quina raó s'ubica un «Host Bastió» a una subxarxa pública en lloc de posar les instàncies de base de dades directament a la subxarxa pública?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè les bases de dades no admeten connexions per cable.</button>
    <button class="btn-check" data-correct="true">B) Perquè actua com a únic punt d'entrada fortificat i auditat (*salt*) per a connexions administratives SSH/RDP, mantenint les bases de dades en subxarxes privades completament inaccessibles i invisibles des d'Internet públic.</button>
    <button class="btn-check" data-correct="false">C) Perquè augmenta el consum d'energia del centre de dades.</button>
    <button class="btn-check" data-correct="false">D) Perquè el bastió tradueix les consultes SQL a llenguatge HTML.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 03: Desplegament d'una VPC Segura de Dues Capes Multi-AZ</h4>
  </div>
  <p>Dissenya i desplega a la consola d'AWS (o mitjançant script d'AWS CLI / CloudFormation) una VPC amb rang `10.0.0.0/16`. Crea dues subxarxes públiques (`10.0.1.0/24` a AZ-a i `10.0.2.0/24` a AZ-b) i dues subxarxes privades (`10.0.11.0/24` a AZ-a i `10.0.12.0/24` a AZ-b). Configura l'Internet Gateway, les taules d'encaminament associades, un NAT Gateway a la subxarxa pública i redacta els Grups de Seguretat per permetre trànsit HTTP al frontend i connexions MySQL exclusives des del frontend cap a la subxarxa privada.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
