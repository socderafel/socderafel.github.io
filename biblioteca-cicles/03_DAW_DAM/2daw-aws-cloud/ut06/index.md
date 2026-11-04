# UT 06: Sistemes d'Emmagatzematge i Bases de Dades al Núvol (S3, EBS, EFS i RDS)

<div class="interactive-progress-tracker" data-unit="ut06" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En l'ecosistema de desenvolupament d'aplicacions web, les dades representen el valor més preuat de qualsevol organització. Triar el model d'emmagatzematge i el motor de base de dades adequat té un impacte directe en la latència, el cost, la durabilitat i la seguretat del producte final (Resultat d'Aprenentatge 4 - RA4).

En aquesta última unitat del mòdul de Cloud Computing i Desplegament en AWS analitzarem en profunditat els tres grans models d'emmagatzematge al núvol: l'emmagatzematge en blocs amb **Amazon EBS** per als discs locals dels servidors, l'emmagatzematge d'objectes infinitament escalable amb **Amazon S3** (inclòs l'allotjament web estàtic i la gestió del cicle de vida cap a Glacier) i els sistemes de fitxers de xarxa distribuïts amb **Amazon EFS**. Finalment, aprofundirem en les bases de dades relacionals gestionades amb **Amazon RDS**, dominant la seua arquitectura d'alta disponibilitat Multi-AZ i l'escalat de consultes mitjançant rèpliques de lectura (*Read Replicas*).

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 06.01](ut0601.md)** | **Emmagatzematge en Blocs: Amazon EBS i Instantànies (Snapshots)** | Tipus de volums (gp3, io2, st1), operacions d'adjunció i còpies incrementals a S3. | +75 XP |
| **[UT 06.02](ut0602.md)** | **Emmagatzematge d'Objectes: Amazon S3 i Allotjament Web Estàtic** | Estructura de buckets, claus d'objecte, control d'accés (Bucket Policies) i hosting estàtic. | +75 XP |
| **[UT 06.03](ut0603.md)** | **Classes d'Emmagatzematge a S3 i Polítiques de Cicle de Vida** | S3 Standard, S3 Intelligent-Tiering, Glacier Flexible/Deep Archive i regles de transició automàtica. | +75 XP |
| **[UT 06.04](ut0604.md)** | **Sistemes de Fitxers Compartits: Amazon EFS** | Protocol NFSv4, muntatge concurrent des de múltiples instàncies EC2 i accés Multi-AZ. | +75 XP |
| **[UT 06.05](ut0605.md)** | **Bases de Dades Relacionals Gestionades: Amazon RDS** | Desplegament Multi-AZ per a recuperació de desastres i rèpliques de lectura per a optimització de rendiment. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut06-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Durabilitat Extrema d'Amazon S3</h4>
  </div>
  <p class="challenge-question">Quina garantia formal de durabilitat anual ofereix Amazon S3 per a la classe d'emmagatzematge estàndard?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) 95% de durabilitat (un fitxer de cada 20 es perd a l'any).</button>
    <button class="btn-check" data-correct="true">B) 99,999999999% de durabilitat (els coneguts com a «11 nous»), la qual cosa significa que si emmagatzemes 10.000.000 de fitxers pots esperar perdre estadísticament un sol objecte cada 10.000 anys.</button>
    <button class="btn-check" data-correct="false">C) 50% de durabilitat.</button>
    <button class="btn-check" data-correct="false">D) Només garanteix durabilitat durant l'horari comercial.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut06-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Diferència entre Amazon EBS i Amazon S3</h4>
  </div>
  <p class="challenge-question">Quina diferència arquitectural fonamental separa Amazon EBS d'Amazon S3?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) EBS només admet fotos i S3 només admet fitxers de text.</button>
    <button class="btn-check" data-correct="true">B) Amazon EBS és un emmagatzematge en blocs que s'adjunta a una instància concreta d'una AZ com si fos un disc dur físic (apte per al sistema operatiu o fitxers de base de dades); Amazon S3 és un emmagatzematge d'objectes accessible directament per Internet via HTTP/HTTPS amb capacitat teòricament infinita.</button>
    <button class="btn-check" data-correct="false">C) EBS és gratuït i S3 cobra 10.000 euros per fitxer.</button>
    <button class="btn-check" data-correct="false">D) EBS només funciona amb màquines apagades.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut06-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Mecanisme de Rèpliques de Lectura en Amazon RDS</h4>
  </div>
  <p class="challenge-question">Per a quin propòsit específic es crea una «Rèplica de Lectura» (*Read Replica*) d'una base de dades Amazon RDS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Per fer còpies de seguretat en cintes magnètiques.</button>
    <button class="btn-check" data-correct="true">B) Per desviar les consultes de lectura pesades (`SELECT`) cap a les instàncies rèplica mitjançant replicació asíncrona, alliberant la instància primària per gestionar exclusivament les operacions d'escriptura (`INSERT`, `UPDATE`, `DELETE`).</button>
    <button class="btn-check" data-correct="false">C) Per traduir les dades a l'anglès automàticament.</button>
    <button class="btn-check" data-correct="false">D) Per bloquejar l'accés als usuaris anònims.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aws-ut06-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Arxiu a Llarg Termini amb Amazon S3 Glacier</h4>
  </div>
  <p class="challenge-question">Quin és el gran avantatge de transferir documents històrics i registres antics a la classe **S3 Glacier Deep Archive** mitjançant una política de cicle de vida?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que els fitxers es poden descarregar en menys d'un mil·lisegon.</button>
    <button class="btn-check" data-correct="true">B) Ofereix el cost d'emmagatzematge més baix de tot el núvol (aproximadament 1 dòlar per Terabyte al mes), ideal per a arxius legals que només s'han de consultar rarament i que admeten temps de recuperació de diverses hores.</button>
    <button class="btn-check" data-correct="false">C) Que les dades es borren cada dia.</button>
    <button class="btn-check" data-correct="false">D) Que no cal pagar electricitat.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 06: Hosting Web Estàtic a S3 i Base de Dades Gestionada RDS</h4>
  </div>
  <p>Crea un bucket a Amazon S3, habilita l'allotjament de llocs web estàtics (*Static Website Hosting*) i configura la política de bucket JSON necessària per permetre lectura pública dels fitxers HTML/CSS/JS. A continuació, desplega una instància Amazon RDS MySQL (db.t3.micro) en una subxarxa privada de la teua VPC amb l'opció Multi-AZ activada. Demostra la connexió satisfactòria des del teu backend i adjunta les captures i el pressupost d'ambdós serveis.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
