# UT 02: Infraestructura Global d'AWS, Comptes i Seguretat IAM

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

La base de qualsevol arquitectura al núvol comença per entendre com està distribuïda físicament la xarxa mundial de centres de dades d'Amazon Web Services i com s'articula el control d'accés absolutament segur a la consola, els serveis i les dades (Resultat d'Aprenentatge 1 i 2).

En aquesta unitat analitzem la topologia geogràfica d'AWS —desglossada en Regions, Zones de Disponibilitat (*Availability Zones* - AZ) i Punts de Presència (*Edge Locations*) per a xarxes CDN—. Així mateix, aprofundim en el servei troncal de seguretat **AWS Identity and Access Management (IAM)**: creació d'usuaris, grups, rols d'assumpció, escriptura de polítiques d'autorització en format JSON sota el principi del menor privilegi (*Least Privilege*) i la governança multcompte mitjançant AWS Organizations.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 02.01](ut0201.md)** | **La Infraestructura Global d'AWS: Regions, Zones de Disponibilitat i Edge Locations** | Distribució geogràfica, criteris de tria de regió, aïllament d'AZs i xarxa perimetral CloudFront. | +75 XP |
| **[UT 02.02](ut0202.md)** | **Gestió d'Identitat i Accessos (AWS IAM): Usuaris, Grups i Rols** | Arquitectura IAM, identitats humanes vs identitats de màquines, credencials de consola i Access Keys. | +75 XP |
| **[UT 02.03](ut0203.md)** | **Polítiques de Seguretat IAM (Documents JSON) i Menor Privilegi** | Sintaxi de polítiques (Effect, Action, Resource, Condition), avaluació de permisos i polítiques gestionades. | +75 XP |
| **[UT 02.04](ut0204.md)** | **Seguretat del Compte Root, Autenticació Multifactor (MFA) i Credencials Temporals** | Blindatge del compte arrel, configuració d'aplicacions MFA virtuals i generació de tokens amb AWS STS. | +75 XP |
| **[UT 02.05](ut0205.md)** | **Governança de Comptes Múltiples: AWS Organizations i Polítiques SCP** | Consolidació de facturació, jerarquia d'Unitats Organitzatives (OU) i barreres de protecció amb Service Control Policies. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut02-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Definició de Zona de Disponibilitat (AZ)</h4>
  </div>
  <p class="challenge-question">Què constitueix exactament una «Zona de Disponibilitat» (*Availability Zone* o AZ) dins d'una regió d'AWS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Una sola sala amb servidors ubicada al soterrani d'una botiga Amazon.</button>
    <button class="btn-check" data-correct="true">B) Un o més centres de dades físics discrets, cadascun amb subministrament elèctric redundant, xarxes independents i refrigeració aïllada, interconnectats mitjançant fibra de latència ultra baixa.</button>
    <button class="btn-check" data-correct="false">C) Un país sencer com Alemanya o Espanya.</button>
    <button class="btn-check" data-correct="false">D) Un satèl·lit de telecomunicacions en òrbita.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut02-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Diferència entre Usuaris IAM i Rols IAM</h4>
  </div>
  <p class="challenge-question">Quan és obligatori utilitzar un **Rol IAM** en lloc d'un usuari IAM amb claus estàtiques?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Quan volem iniciar sessió amb contrasenya des d'un navegador web.</button>
    <button class="btn-check" data-correct="true">B) Quan necessitem concedir permisos a una instància EC2 o servei d'AWS perquè accedeixi a un recurs (com un bucket S3) mitjançant credencials temporals que es roten automàticament sense codificar claus secretes.</button>
    <button class="btn-check" data-correct="false">C) Només quan es paga la subscripció prèmium d'AWS.</button>
    <button class="btn-check" data-correct="false">D) Quan l'empresa acomiada el responsable d'informàtica.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut02-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Precedència en les Polítiques IAM</h4>
  </div>
  <p class="challenge-question">Si una política IAM conté un `Effect: "Allow"` per a una acció sobre un recurs, però una altra política adjunta té un `Effect: "Deny"` per a la mateixa acció, quin és el resultat final?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) L'acció es permet perquè l'Allow sempre té prioritat.</button>
    <button class="btn-check" data-correct="true">B) L'acció es denega categòricament, ja que en AWS un «Deny» explícit anul·la i guanya sempre a qualsevol «Allow».</button>
    <button class="btn-check" data-correct="false">C) El sistema envia un correu electrònic a l'administrador per decidir.</button>
    <button class="btn-check" data-correct="false">D) L'acció s'executa només al 50% de la seua capacitat.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut02-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Bona Pràctica del Compte Root</h4>
  </div>
  <p class="challenge-question">Quina és la recomanació oficial d'AWS respecte a l'ús de les credencials del compte arrel (*Root User*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Compartir la contrasenya del compte arrel amb tots els programadors de l'empresa.</button>
    <button class="btn-check" data-correct="true">B) Activar immediatament l'autenticació MFA, no generar claus d'accés API i no utilitzar mai el compte arrel per a tasques d'administració diàries, creant usuaris IAM dedicats.</button>
    <button class="btn-check" data-correct="false">C) Deixar la contrasenya per defecte sense canviar.</button>
    <button class="btn-check" data-correct="false">D) Desactivar el compte arrel esborrant el compte de correu associat.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 02: Disseny d'una Jerarquia de Seguretat IAM Corporativa</h4>
  </div>
  <p>Dissenya l'estructura completa d'accessos IAM per a una empresa de desenvolupament web. Crea tres grups: `Grup_DevOps` (accés administratiu complet a EC2 i VPC), `Grup_Developers` (accés de només lectura a CloudWatch i control sobre S3) i `Grup_Auditors` (accés de només lectura global SecurityAudit). Redacta en format JSON la política IAM per al grup de desenvolupadors aplicant el principi del menor privilegi i documenta la configuració de MFA obligatori.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
