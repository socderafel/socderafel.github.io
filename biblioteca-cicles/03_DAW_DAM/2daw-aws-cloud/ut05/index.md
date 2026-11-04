# UT 05: Alta Disponibilitat: Elastic Load Balancing (ALB) i Auto Scaling

<div class="interactive-progress-tracker" data-unit="ut05" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En l'entorn de producció d'aplicacions web modernes, cap servidor individual hauria de ser un punt únic de fallada (*Single Point of Failure* - SPOF). Si un servidor cau o la seua càrrega de CPU arriba al 100%, l'arquitectura al núvol ha d'estar dissenyada per resistir i adaptar-se sense que cap usuari final perceba cap interrupció (Resultat d'Aprenentatge 3 i 5 - RA3/RA5).

Aquesta unitat didàctica aprofundeix en el binomi clau que fa possible l'escalabilitat horitzontal i l'alta disponibilitat a AWS: el servei de balanceig elàstic **Elastic Load Balancing (ELB)** —centrat en l'Application Load Balancer (ALB) de capa 7— i els grups d'escalabilitat automàtica **Amazon EC2 Auto Scaling (ASG)**. Aprendràs a configurar Target Groups, definir comprovacions d'estat de salut (*Health Checks*), crear plantilles de llançament (*Launch Templates*) i establir polítiques d'escalat dinàmic intel·ligent (*Target Tracking*) basades en mètriques de rendiment.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 05.01](ut0501.md)** | **Fonaments d'Alta Disponibilitat (HA) i Tolerància a Fallades** | El principi "Design for Failure", RTO i RPO, arquitectures desacoblades i eliminació de SPOFs. | +75 XP |
| **[UT 05.02](ut0502.md)** | **Tipus de Balancejadors d'AWS: ALB vs NLB** | Comparativa Capa 7 (HTTP/HTTPS) vs Capa 4 (TCP/UDP), latència ultra baixa i terminació SSL/TLS. | +75 XP |
| **[UT 05.03](ut0503.md)** | **Target Groups, Health Checks i Encaminament Basat en Ruta** | Comprovació periòdica de servidors sans (*Healthy*), regles avançades per `/api` o host i sessions apegaloses (*Sticky Sessions*). | +75 XP |
| **[UT 05.04](ut0504.md)** | **Amazon EC2 Auto Scaling: Launch Templates i Grups d'Auto Scaling** | Plantilles de llançament versionades, definició de capacitat mínima, desitjada i màxima en múltiples AZs. | +75 XP |
| **[UT 05.05](ut0505.md)** | **Polítiques d'Escalat Dinàmic i Mètriques de CloudWatch** | Target Tracking (mantenir CPU al 50%), polítiques de passos (*Step Scaling*) i temps de refredament (*Cooldown*). | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut05-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Diferència entre Escalabilitat Vertical i Horitzontal</h4>
  </div>
  <p class="challenge-question">Per què les arquitectures elàstiques al núvol prefereixen l'escalabilitat horitzontal (*Scale Out*) abans que la vertical (*Scale Up*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els servidors més grans tenen menys memòria RAM.</button>
    <button class="btn-check" data-correct="true">B) Perquè l'escalat vertical té un límit físic de maquinari i requereix aturar la màquina per redimensionar-la; mentre que l'escalat horitzontal afegeix o treu instàncies en paral·lel de forma dinàmica sense cap segon d'aturada de l'aplicació.</button>
    <button class="btn-check" data-correct="false">C) Perquè l'escalat horitzontal només funciona amb màquines apagades.</button>
    <button class="btn-check" data-correct="false">D) Perquè AWS prohibeix comprar instàncies amb més de 4 GB de RAM.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut05-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Mecanisme dels Health Checks en un Balancejador</h4>
  </div>
  <p class="challenge-question">Què fa automàticament un Application Load Balancer (ALB) si un dels servidors web del seu Target Group deixa de respondre satisfactòriament als Health Checks periòdics?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Envia un SMS a tots els clients que visitaven la web.</button>
    <button class="btn-check" data-correct="true">B) Marca la instància com a `Unhealthy` i deixa d'enviar-li trànsit d'usuaris immediatament, redirigint totes les noves peticions exclusivament cap a les altres instàncies sanes del clúster.</button>
    <button class="btn-check" data-correct="false">C) Reinicia el router físic del centre de dades.</button>
    <button class="btn-check" data-correct="false">D) Tanca el compte d'AWS de l'empresa.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut05-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Capacitat Desitjada en un Auto Scaling Group (ASG)</h4>
  </div>
  <p class="challenge-question">En un grup d'Auto Scaling amb Capacitat Mínima = 2, Màxima = 10 i Desitjada = 4, què ocorre si una de les 4 instàncies en execució es congela i mor de manera sobtada?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El grup es queda permanentment amb 3 màquines per estalviar costos.</button>
    <button class="btn-check" data-correct="true">B) L'Auto Scaling Group detecta que la instància ha caigut, la finalitza i llança automàticament una nova instància sana per restablir de forma immediata la capacitat desitjada de 4 servidors.</button>
    <button class="btn-check" data-correct="false">C) El grup s'atura completament i cal tornar a crear-lo manualment.</button>
    <button class="btn-check" data-correct="false">D) El sistema apaga la base de dades.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut05-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Funció del Període de Refredament (*Cooldown*)</h4>
  </div>
  <p class="challenge-question">Per quina raó tècnica és crític configurar un període de refredament (*Cooldown Period*, per exemple de 300 segons) en una política d'escalat d'Auto Scaling?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els ventiladors físics del servidor necessiten baixar de temperatura.</button>
    <button class="btn-check" data-correct="true">B) Per donar temps a la nova instància que s'acaba de llançar a arrencar, inicialitzar els serveis i començar a atendre càrrega abans que el sistema avaluï novament les mètriques, evitant llançar instàncies innecessàries en cadena.</button>
    <button class="btn-check" data-correct="false">C) Perquè els programadors puguin fer un descans.</button>
    <button class="btn-check" data-correct="false">D) Perquè el sistema de fitxers Linux es desconnecta durant 5 minuts.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 05: Arquitectura d'Alta Disponibilitat Elàstica amb ALB i Auto Scaling</h4>
  </div>
  <p>Crea una plantilla de llançament (*Launch Template*) amb un script User Data que mostre la IP privada de cada màquina. Configura un Auto Scaling Group amb capacitat mínima 2 i màxima 6 distribuït en dues Zones de Disponibilitat diferents vinculat a un Application Load Balancer públic. Comprova que en refrescar la URL del balancejador el trànsit s'alterna entre els dos servidors. Llança una prova d'estrès de CPU (`stress-ng`) sobre una màquina i documenta com l'Auto Scaling afig una tercera màquina automàticament.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
