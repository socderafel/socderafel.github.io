# UT 06: Control de Versions, Integració Contínua i Desplegament Web (CI/CD)

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

En el desenvolupament professional modern d'aplicacions web, els processos manuals de copiar fitxers per FTP han quedat completament superats per metodologies àgils DevOps. La posada en producció fiable, repetible i sense interrupció del servei (*zero-downtime*) es fonamenta en la integració contínua, el lliurament continu i la contenització d'infraestructura (Resultat d'Aprenentatge 6 - RA6).

En aquesta unitat didàctica dominaràs l'ús avançat del sistema de control de versions **Git** i els patrons de col·laboració en equip (**GitFlow** i **Trunk-Based Development**). Estudiaràs les principals **estratègies de desplegament d'aplicacions web** (com *Blue-Green Deployments*, desplegaments canari *Canary* i actualitzacions progressives *Rolling Updates*). Aprendràs a dissenyar i automatitzar canonades completes de **CI/CD mitjançant GitHub Actions i GitLab CI**, integrant anàlisi estàtica de codi, bateries de proves unitàries/e2e i publicació desatesa. Així mateix, aprofundiràs en la **contenització d'aplicacions web amb Docker i Docker Compose**, i en la implantació de solucions de **monitoratge, registre centralitzat de logs (pila ELK/Loki) i auditories de seguretat** per a garantir l'estabilitat contínua del servei en entorns de producció.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 06.01](ut0601.md)** | **Control de Versions amb Git i Models de Flux de Treball** | Branques, etiquetatge (*tags*), resolució de conflictes, models de col·laboració GitFlow vs Trunk-Based Development. | +75 XP |
| **[UT 06.02](ut0602.md)** | **Estratègies de Desplegament i Llançament sense Caiguda** | Patrons Recreate, Rolling Updates, Blue-Green Deployments, Canary Releases i tècniques de rollback immediat. | +75 XP |
| **[UT 06.03](ut0603.md)** | **Automatització CI/CD amb GitHub Actions i GitLab CI** | Sintaxi YAML de fluxos de treball, disparadors (*triggers*), secrets xifrats, execució de tests automatitzats i desplegament automàtic a producció. | +75 XP |
| **[UT 06.04](ut0604.md)** | **Contenització d'Arquitectures Web amb Docker i Compose** | Imatges lleugeres multi-stage, `Dockerfile` per a frontend/backend, orquestració d'aplicacions multicontenidor amb `docker-compose.yml`. | +75 XP |
| **[UT 06.05](ut0605.md)** | **Monitoratge, Agregació de Logs i Seguretat en Producció** | Mètriques de servidor (Prometheus/Grafana), logs centralitzats (Loki/Fluentd), monitoratge de disponibilitat (Uptime Kuma) i auditories. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut06-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: Models de Flux de Branques Git</h4>
  </div>
  <p class="challenge-prompt">En el model de desenvolupament `Trunk-Based Development`, com treballen els desenvolupadors per a minimitzar conflictes greus d'integració en comparació amb GitFlow clàssic?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Mantenint branques aïllades durant mesos abans de fusionar-les el dia del llançament.</button>
    <button class="btn-check" data-correct="true">Fent commits freqüents en branques de molt curta durada (menys d'1 o 2 dies) i fusionant-les directament a la branca principal mitjançant Pull Requests ràpids i proves automatitzades.</button>
    <button class="btn-check" data-correct="false">Evitant l'ús de Git i programant directament al servidor de producció.</button>
    <button class="btn-check" data-correct="false">Fent que només una persona puga escriure codi a tot el projecte.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut06-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Desplegament Blue-Green</h4>
  </div>
  <p class="challenge-prompt">Com garanteix l'estratègia de desplegament Blue-Green l'eliminació total del temps d'inactivitat (*zero-downtime*) i la possibilitat de rollback instantani davant fallades?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Apagant el servidor de producció a les 3 de la matinada durant 4 hores.</button>
    <button class="btn-check" data-correct="true">Mantenint dos entorns de producció idèntics (Blue actiu i Green en reserva); el nou codi es desplega i valida completament a Green, i el commutador/enrutador canvia el trànsit d'un a l'altre instantàniament.</button>
    <button class="btn-check" data-correct="false">Eliminant la base de dades i restaurant-la des d'una cinta magnètica.</button>
    <button class="btn-check" data-correct="false">Mostrant un missatge d'error 503 als visitants mentre es copien els fitxers.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut06-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Gestió de Secrets a Canonades CI/CD</h4>
  </div>
  <p class="challenge-prompt">On s'han d'emmagatzemar de manera segura les claus privades SSH i credencials de base de dades utilitzades en una acció de desplegament de GitHub Actions?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Dins del codi font al fitxer `README.md` del repositori.</button>
    <button class="btn-check" data-correct="true">A la secció xifrada de Secrets del repositori (Repository Secrets) i injectades al flux de treball mitjançant `${{ secrets.NOM_SECRET }}`.</button>
    <button class="btn-check" data-correct="false">En un comentari públic al fitxer `.github/workflows/deploy.yml`.</button>
    <button class="btn-check" data-correct="false">En una cookie al navegador de l'administrador.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut06-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Imatges Multi-Stage a Docker</h4>
  </div>
  <p class="challenge-prompt">Quin és el gran avantatge d'utilitzar construccions de múltiples etapes (*Multi-Stage Builds*) en el `Dockerfile` d'una aplicació web moderna?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Que el contenidor s'executa automàticament en tres sistemes operatius diferents alhora.</button>
    <button class="btn-check" data-correct="true">Permet compilar l'aplicació en una etapa inicial amb totes les eines de desenvolupament (pesades) i copiar exclusivament els binaris/artefactes finals a una imatge mínima de producció molt més lleugera i segura.</button>
    <button class="btn-check" data-correct="false">Que no cal escriure fitxers de configuració de Nginx.</button>
    <button class="btn-check" data-correct="false">Que permet executar Docker sense tindre el dimoni docker instal·lat.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 06 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut06')">Descarregar Informe d'Evidències (Aules)</button>
</div>
