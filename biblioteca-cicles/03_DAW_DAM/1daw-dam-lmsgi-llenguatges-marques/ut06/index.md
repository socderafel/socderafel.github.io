# UT 06: Sistemes Empresarials de Gestió d'Informació i Continguts (CMS)

<div class="interactive-progress-tracker" data-unit="ut06" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en la selecció, implantació, personalització i administració de **Sistemes de Gestió de Continguts** (*Content Management Systems* - CMS) en entorns corporatius. Els CMS constitueixen la infraestructura sobre la qual descansa més del 60% dels llocs web i portals empresarials mundials.

S'analitzen en profunditat:
- **Models Arquitectònics:** Des de l'enfocament monolític acoblat (com WordPress o Drupal en una pila LAMP/LEMP) fins als moderns paradigmes **Headless CMS** i arquitectures desacoblades JAMstack (JavaScript, APIs, Markup).
- **Desplegament i Configuració de Servidor:** Infraestructura d'execució (Apache/Nginx, PHP, MariaDB/MySQL), permisos del sistema de fitxers i connexió amb motors de bases de dades.
- **Govern de la Informació:** Control d'accés basat en rols (**RBAC** - Role-Based Access Control), moderació editorial, taxonomies i sindicació automatitzada.
- **Desenvolupament i Extensibilitat:** Creació i adaptació de plantilles visuals (*themes*) combinant HTML5, CSS3 i llenguatges de plantilla (com Blade o Twig), hooks i desenvolupament de connectors (*plugins*).
- **Manteniment Tècnic:** Estratègies d'optimització de rendiment web (**WPO** - Web Performance Optimization), sistemes de memòria cau (*caching*), seguretat defensiva (mitigació d'injeccions SQL i atacs de força bruta) i integració de mòduls d'e-Commerce corporatiu.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA6 (DAW / DAM / ASIX):** Gestiona informació en sistemes empresarials utilitzant sistemes de gestió de continguts i eines de gestió empresarial.
  - **CA 6.a:** S'han identificat els components i funcionalitats dels sistemes de gestió d'informació empresarial.
  - **CA 6.b:** S'han instal·lat i configurat gestors de continguts en entorns de servidor locals o remots.
  - **CA 6.c:** S'han establit mecanismes de seguretat, gestió d'usuaris, rols i perfils d'accés.
  - **CA 6.d:** S'han personalitzat aspectes visuals i funcionals adaptant plantilles i instal·lant extensions o mòduls.
  - **CA 6.e:** S'han definit estratègies de còpia de seguretat, restauració i migració de continguts.
  - **CA 6.f:** S'han integrat mecanismes de publicació, catalogació i comerç electrònic.

---

## Estructura de la Unitat de Treball

1. [UT 06.01: Fonaments i arquitectura dels CMS: models monolítics vs Headless CMS](./ut0601.md)
2. [UT 06.02: Instal·lació, desplegament i configuració de servidors (LAMP/LEMP, BD i permisos)](./ut0602.md)
3. [UT 06.03: Gestió d'usuaris, rols, permisos (RBAC) i cicle de publicació de continguts](./ut0603.md)
4. [UT 06.04: Personalització avançada: plantilles (Themes), connectors (Plugins) i taxonomies](./ut0604.md)
5. [UT 06.05: Seguretat, optimització WPO, còpies de seguretat i integració de comerç electrònic](./ut0605.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut06-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Arquitectura Monolítica vs Headless CMS</h4>
  </div>
  <p class="challenge-question">Quina és la diferència arquitectònica essencial entre un CMS monolític clàssic (com WordPress estàndard) i un Headless CMS (com Strapi o Contentful)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El Headless CMS no disposa de base de dades i emmagatzema tot en fitxers plans TXT.</button>
    <button class="btn-check" data-correct="true">B) El CMS monolític manté acoblats estretament el panell de gestió de continguts (backend) i la capa de presentació visual (frontend), mentre que un Headless CMS desacobla per complet la presentació i exposa els continguts exclusivament mitjançant una API REST o GraphQL per a ser consumits per qualsevol client (web, mòbil, IoT).</button>
    <button class="btn-check" data-correct="false">C) El CMS monolític només s'executa en sistemes Windows Server.</button>
    <button class="btn-check" data-correct="false">D) El Headless CMS impedeix la creació de rols d'usuari.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut06-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Permisos de Fitxers en Servidors Web (Linux POSIX)</h4>
  </div>
  <p class="challenge-question">Per quina raó tècnica de seguretat s'ha d'evitar taxativament assignar el permís 777 (rwxrwxrwx) als directoris arrel d'un CMS en un servidor de producció?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè impedeix que els visitants de la web puguen llegir les imatges PNG.</button>
    <button class="btn-check" data-correct="true">B) Perquè atorga privilegis universals d'escriptura i execució a qualsevol usuari del sistema, permetent que si un atacant descobreix una vulnerabilitat de pujada de fitxers puga executar scripts maliciosos de shell inversa i prendre el control complet del servidor.</button>
    <button class="btn-check" data-correct="false">C) Perquè augmenta el consum d'energia elèctrica de la CPU.</button>
    <button class="btn-check" data-correct="false">D) Perquè el motor MariaDB bloqueja les consultes SELECT en carpetes amb permís 777.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut06-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Control d'Accés Basat en Rols (RBAC)</h4>
  </div>
  <p class="challenge-question">En l'administració d'un gestor de continguts corporatiu, quin principi de seguretat exigeix assignar el rol d'«Editor» o «Autor» en comptes d'«Administrador» a les persones encarregades de redactar notícies?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El principi d'amplitud funcional.</button>
    <button class="btn-check" data-correct="true">B) El principi del Mínim Privilegi (Least Privilege), que garanteix que cada perfil només dispose dels drets estrictament necessaris per a desenvolupar la seua tasca, protegint la configuració de connectors, base de dades i actualitzacions de seguretat.</button>
    <button class="btn-check" data-correct="false">C) El principi de paritat dev/prod.</button>
    <button class="btn-check" data-correct="false">D) El principi de compatibilitat de versions.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut06-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Estratègies d'Optimització WPO: Memòria Cau de Pàgina</h4>
  </div>
  <p class="challenge-question">Com redueix la càrrega del servidor d'un CMS la implementació d'un sistema de memòria cau de pàgina completa (*Full Page Caching*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Eliminant la base de dades i obligant els usuaris a descarregar el codi font en format ZIP.</button>
    <button class="btn-check" data-correct="true">B) Generant una còpia estàtica en HTML pla de les pàgines visitades amb freqüència, servint-la directament al client sense haver d'executar el runtime de PHP ni realitzar desenes de consultes SQL a la base de dades en cada petició.</button>
    <button class="btn-check" data-correct="false">C) Reduint la resolució de pantalla dels clients connectats.</button>
    <button class="btn-check" data-correct="false">D) Desactivant el xifratge TLS/HTTPS.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 6 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 6</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
