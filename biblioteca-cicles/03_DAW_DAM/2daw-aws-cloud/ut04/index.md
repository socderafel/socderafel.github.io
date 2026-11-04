# UT 04: Computació Elàstica: Amazon EC2 i Automatització de Servidors

<div class="interactive-progress-tracker" data-unit="ut04" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

El cor de qualsevol arquitectura IaaS a Amazon Web Services és la computació elàstica proporcionada per **Amazon Elastic Compute Cloud (Amazon EC2)** (Resultat d'Aprenentatge 3 - RA3). Aquest servei permet instanciar servidors virtuals al núvol en qüestió de segons, triant entre centenars de configuracions de maquinari optimitzades per a diferents perfils d'aplicació web.

Al llarg d'aquesta unitat aprendràs a analitzar el cicle de vida complet d'una instància EC2, seleccionar la família de màquina adequada (ús general, computació intensiva o memòria), optimitzar costos financers combinant instàncies sota demanda (*On-Demand*), reservades i *Spot*, gestionar connexions remotes segures mitjançant parells de claus asimètriques SSH i el modern servei IMDSv2, i automatitzar el desplegament d'aplicacions des de l'arrencada amb scripts d'usuari (*User Data*) i empaquetat d'imatges d'origen (*Amazon Machine Images* - AMI).

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 04.01](ut0401.md)** | **Amazon EC2: Arquitectura, Cicle de Vida i Imatges AMI** | Estats d'instància (pending, running, stopped, terminated), hipervisors Nitro i AMIs públiques/privades. | +75 XP |
| **[UT 04.02](ut0402.md)** | **Tipus i Famílies d'Instàncies EC2** | Famílies T/M (general), C (computació), R (memòria) i I/D (emmagatzematge), i processadors Graviton (ARM). | +75 XP |
| **[UT 04.03](ut0403.md)** | **Models de Compra i Facturació: On-Demand, Savings Plans, Reserved i Spot** | Estratègies d'optimització de costos, compromisos a 1/3 anys i aprofitament de capacitat sobrant amb Spot. | +75 XP |
| **[UT 04.04](ut0404.md)** | **Connexió Segura, Claus SSH (KeyPair) i Metadades d'Instància (IMDSv2)** | Autenticació RSA/ED25519, permisos del fitxer `.pem` (chmod 400) i protecció contra atacs SSRF amb IMDSv2. | +75 XP |
| **[UT 04.05](ut0405.md)** | **Automatització de l'Aprovisionament: User Data i AMIs Personalitzades** | *Bootstrap scripts* en Bash per a Apache/PHP/Node.js i creació d'imatges d'origen daurades (*Golden AMIs*). | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut04-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Diferència entre Aturar (*Stop*) i Terminar (*Terminate*) una Instància</h4>
  </div>
  <p class="challenge-question">Què ocorre amb les dades i la facturació quan atures (*Stop*) una instància EC2 amb volum arrel EBS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) La instància i totes les seues dades s'esborren per sempre i no es poden recuperar.</button>
    <button class="btn-check" data-correct="true">B) Es deixa de facturar per l'ús de CPU i memòria RAM de la instància, però les dades del disc EBS es conserven intactes (continuant facturant l'espai d'emmagatzematge de disc utilitzat), i la màquina pot tornar-se a arrencar en qualsevol moment.</button>
    <button class="btn-check" data-correct="false">C) AWS cobra una penalització del 50% per haver aturat el servidor.</button>
    <button class="btn-check" data-correct="false">D) La instància canvia automàticament de sistema operatiu a Windows.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut04-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Ús de les Instàncies Spot d'AWS</h4>
  </div>
  <p class="challenge-question">Quin tipus de càrrega de treball és ideal per a aprofitar els descomptes de fins al 90% de les **Instàncies Spot**?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) La base de dades transaccional principal d'un banc que no pot tolerar cap segon d'aturada.</button>
    <button class="btn-check" data-correct="true">B) Feines de processament per lots (*batch processing*), renderitzat de vídeo 3D o anàlisi de grans volums de dades que toleren interrupcions sobtades si AWS necessita recuperar la capacitat.</button>
    <button class="btn-check" data-correct="false">C) El servidor de correu electrònic corporatiu d'urgències.</button>
    <button class="btn-check" data-correct="false">D) Un sistema de marcapassos connectat per Internet.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut04-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Execució de Scripts d'Usuari (*User Data*)</h4>
  </div>
  <p class="challenge-question">Quan i amb quins privilegis s'executa l'script definit al camp **User Data** durant el cicle de vida d'una instància EC2 de Linux?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) S'executa cada vegada que un usuari inicia sessió per SSH amb el seu compte personal.</button>
    <button class="btn-check" data-correct="true">B) S'executa automàticament només durant el primer cicle d'arrencada (*boot*) de la instància i ho fa amb els màxims privilegis d'administrador (`root`).</button>
    <button class="btn-check" data-correct="false">C) S'executa cada 5 minuts de forma periòdica com una tasca de cron.</button>
    <button class="btn-check" data-correct="false">D) Només s'executa si l'administrador prem manualment el botó F8 del teclat.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut04-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Seguretat del Servei de Metadades (IMDSv2)</h4>
  </div>
  <p class="challenge-question">Quina millora de seguretat fonamental aporta **IMDSv2** respecte a la versió anterior IMDSv1 per protegir les instàncies EC2?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) IMDSv2 xifra el teclat del client.</button>
    <button class="btn-check" data-correct="true">B) Requereix una petició prèvia de sessió orientada a token (`PUT`) amb encapçalat personalitzat, protegint la instància contra atacs de falsificació de peticions del costat del servidor (SSRF) i filtracions de credencials de rol.</button>
    <button class="btn-check" data-correct="false">C) Duplica la velocitat de connexió de la targeta de xarxa.</button>
    <button class="btn-check" data-correct="false">D) Permet instal·lar jocs d'ordinador sense autorització.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 04: Aprovisionament Desatès d'un Servidor Web LAMP amb Golden AMI</h4>
  </div>
  <p>Crea una instància EC2 (t3.micro) utilitzant un script *User Data* en Bash que actualitzi el sistema, instal·le Apache, PHP i el client MariaDB, clone un repositori d'aplicació web des de GitHub i active el servei automàticament. Comprova que el servidor respon a la seua IP pública amb un *Hello World* personalitzat. A continuació, genera una AMI personalitzada de la instància i llança una segona màquina a partir d'aquesta AMI demostrant que arrenca en pocs segons amb tota l'aplicació preinstal·lada.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
