# UT 01: Fonaments del Cloud Computing i Economia del Núvol

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

En el context del desenvolupament web contemporani (DAW), el desplegament d'aplicacions ha abandonat definitivament els servidors físics locals dedicats (*on-premises*) per a adoptar de manera massiva arquitectures basades en el núvol (*Cloud Computing*). 

Aquesta primera unitat didàctica estableix els fonaments conceptuals, tècnics i econòmics que defineixen el paradigma del núvol segons els estàndards del NIST (*National Institute of Standards and Technology*) i les bones pràctiques d'Amazon Web Services (AWS). Comprendre la diferència entre serveis IaaS, PaaS i SaaS, interioritzar el Model de Responsabilitat Compartida i saber calcular i optimitzar costos mitjançant la calculadora oficial d'AWS són competències indispensables per a qualsevol arquitecte o desenvolupador web.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 01.01](ut0101.md)** | **Introducció al Cloud Computing: Característiques Essencials (NIST)** | Definició formal, evolució tecnològica i les 5 característiques bàsiques segons el NIST. | +75 XP |
| **[UT 01.02](ut0102.md)** | **Models de Servei al Núvol: IaaS, PaaS i SaaS** | Comparativa arquitectural, graus de control, flexibilitat i casos d'ús en desenvolupament web. | +75 XP |
| **[UT 01.03](ut0103.md)** | **Models de Desplegament: Públic, Privat, Híbrid i Multicloud** | Estratègies d'adopció del núvol, compliment normatiu, sobirania de dades i connexions VPN/Direct Connect. | +75 XP |
| **[UT 01.04](ut0104.md)** | **El Model de Responsabilitat Compartida d'AWS** | Seguretat DEL núvol (AWS) vs Seguretat EN el núvol (Client) aplicada a cadascun dels serveis. | +75 XP |
| **[UT 01.05](ut0105.md)** | **Economia del Núvol: CapEx vs OpEx, TCO i AWS Pricing Calculator** | Transformació financera, model de pagament per ús, anàlisi de cost total de propietat i estimació de pressupostos. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut01-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Característica d'Elasticitat Ràpida segons el NIST</h4>
  </div>
  <p class="challenge-question">Què significa la característica d'«Elasticitat Ràpida» (*Rapid Elasticity*) en Cloud Computing?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que els cables de xarxa del centre de dades estan fets de cautxú sintètic.</button>
    <button class="btn-check" data-correct="true">B) La capacitat d'aprovisionar i alliberar recursos de computació de forma dinàmica i automàtica segons la demanda, de manera que per a l'usuari els recursos semblen il·limitats.</button>
    <button class="btn-check" data-correct="false">C) Que el pagament de la quota mensual es pot ajornar fins a sis mesos sense penalització.</button>
    <button class="btn-check" data-correct="false">D) Que el disc dur s'esborra automàticament cada divendres a la nit.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut01-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Selecció de Model de Servei (PaaS)</h4>
  </div>
  <p class="challenge-question">Un equip de desenvolupadors web vol desplegar una aplicació en Node.js sense haver d'administrar el sistema operatiu, els parxes de seguretat del nucli ni la instal·lació de dependències del servidor. Quin model de servei s'ajusta exactament a aquesta necessitat?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) IaaS (Infrastructure as a Service)</button>
    <button class="btn-check" data-correct="true">B) PaaS (Platform as a Service, com AWS Elastic Beanstalk)</button>
    <button class="btn-check" data-correct="false">C) SaaS (Software as a Service, com Microsoft 365)</button>
    <button class="btn-check" data-correct="false">D) DaaS (Desktop as a Service)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut01-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Seguretat en el Model de Responsabilitat Compartida</h4>
  </div>
  <p class="challenge-question">Segons el Model de Responsabilitat Compartida d'AWS en una instància IaaS com Amazon EC2, qui és el responsable directe d'instal·lar les actualitzacions i pedaços de seguretat del sistema operatiu hoste (com Ubuntu Server)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) AWS de forma totalment automàtica i invisible.</button>
    <button class="btn-check" data-correct="true">B) El client (l'usuari/administrador del compte d'AWS).</button>
    <button class="btn-check" data-correct="false">C) El proveïdor d'accés a Internet (ISP).</button>
    <button class="btn-check" data-correct="false">D) L'organisme emissor del certificat SSL.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut01-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Transició Financera: CapEx vs OpEx</h4>
  </div>
  <p class="challenge-question">Quin gran canvi financer experimenta una empresa quan migra d'un centre de dades local tradicional a un model de Cloud Computing en AWS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Augmenta la inversió inicial de capital fix (CapEx) i s'elimina la despesa mensual.</button>
    <button class="btn-check" data-correct="true">B) Es substitueix una forta despesa de capital inicial anticipada (CapEx) per una despesa operativa variable i predictible (OpEx) basada en el consum real mesurat.</button>
    <button class="btn-check" data-correct="false">C) Els servidors passen a amortitzar-se legalment com a béns immobles.</button>
    <button class="btn-check" data-correct="false">D) Els costos són sempre fixos independentment del trànsit rebut.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 01: Estudi de Viabilitat i Estimació de Costos en AWS</h4>
  </div>
  <p>Utilitzant l'eina oficial **AWS Pricing Calculator**, dissenya una estimació econòmica detallada per al desplegament d'una aplicació web de comerç electrònic durant 12 mesos a la regió d'Europa (Irlanda o Espanya). La infraestructura ha d'incloure 2 instàncies EC2 (t3.medium), un volum d'emmagatzematge EBS de 100 GB, una base de dades Amazon RDS MySQL (db.t3.small) en Multi-AZ i un bucket S3 de 250 GB. Exporta el resum en PDF i afegeix una memòria justificativa dels costos OpEx resultants.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
