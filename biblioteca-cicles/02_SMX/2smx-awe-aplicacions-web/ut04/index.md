---
layout: default
course_root: ".."
title: "UT 04: Serveis de Núvol Privat i Gestió d'Arxius: Nextcloud"
parent: "2n SMX · Aplicacions Web"
has_children: true
nav_order: 4
---

# ☁️ Unitat Temàtica 04: Serveis de Núvol Privat i Gestió d'Arxius: Nextcloud

<div class="interactive-progress-tracker" data-module="AWE" data-unit="4" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 04** d'**Aplicacions Web (AWE)**. En aquesta unitat aprendrem a dissenyar, desplegar, assegurar i administrar una infraestructura integral d'emmagatzematge i col·laboració al núvol privat mitjançant **Nextcloud Hub**, garantint la total sobirania de dades i el compliment del RGPD en entorns corporatius i educatius.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA4)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 4 (RA4)**: *Instal·la i gestiona servidors d'arxius i aplicacions de treball col·laboratiu al núvol privat*:

- **a)** S'han comparat els models de núvol públic i privat en relació amb la privacitat i la legislació europea.
- **b)** S'ha desplegat la plataforma sobre una pila LAMP d'alt rendiment amb acceleració de memòria en RAM mitjançant Redis.
- **c)** S'han configurat directius d'Apache (Virtual Host, WebDAV i mòduls d'encapçalaments).
- **d)** S'han assignat quotes d'emmagatzematge i organitzat els usuaris en grups de treball i carpetes d'equip.
- **e)** S'ha implementat la sincronització multidispositiu i mecanismes de compartició segura (bústies anònimes).
- **f)** S'ha integrat l'ecosistema d'aplicacions modulars (Deck, Calendar) i administrat el sistema mitjançant la comanda de consola `occ`.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **4.1** | [Núvol Privat vs Núvol Públic i Sobirania de Dades](ut0401.md) | Models IaaS/PaaS/SaaS, RGPD, Llei CLOUD nord-americana i components de Nextcloud Hub. | **75 XP** |
| **4.2** | [Desplegament en Pila LAMP i Memòria Cau Redis](ut0402.md) | Requeriments PHP 8.x, base de dades MariaDB, directori `/var/nextcloud-data`, directiva `Dav off` i bloqueig transaccional Redis. | **75 XP** |
| **4.3** | [Gestió d'Usuaris, Grups i Quotes d'Emmagatzematge](ut0403.md) | Quotes per defecte i per grup, Group Folders, comportament davant límit d'espai i integració LDAP corporativa. | **75 XP** |
| **4.4** | [Sincronització Multidispositiu i Compartició Segura](ut0404.md) | Protocol WebDAV, client d'escriptori, enllaços protegits amb contrasenya i bústia de càrrega anònima (File Drop). | **75 XP** |
| **4.5** | [Ecosistema d'Aplicacions i Administració amb 'occ'](ut0405.md) | Gestor de projectes Deck, Calendar, comandes `occ` clau (`files:scan`, `maintenance:mode`) i crontab de Linux. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Sobirania</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina és la raó jurídica principal per la qual una administració educativa europea prefereix un núvol privat on-premise com Nextcloud abans que emmagatzemar dades en servidors nord-americans?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Perquè el programari americà no admet caràcters en valencià</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Per garantir la sobirania digital i complir el RGPD evitant la Llei CLOUD que permet a autoritats externes accedir a la informació</label>
    <label><input type="radio" name="s1" value="2"> Perquè els servidors locals mai necessiten actualitzacions</label>
    <label><input type="radio" name="s1" value="3"> Perquè la fibra òptica només connecta amb Europa</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Rendiment</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin servei s'encarrega d'evitar condicions de carrera i corrupció quan dos usuaris sincronitzen alhora el mateix fitxer a Nextcloud?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> El servidor DHCP</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> El servidor Redis mitjançant el bloqueig transaccional de fitxers (File Locking)</label>
    <label><input type="radio" name="s2" value="2"> El certificat SSL d'Apache</label>
    <label><input type="radio" name="s2" value="3"> El controlador gràfic del servidor</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Compartició</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com s'anomena la modalitat de compartició d'enllaç de Nextcloud que permet a estudiants dipositar els seus exàmens sense poder veure ni esborrar els fitxers lliurats pels altres?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Enllaç directe</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Bústia de càrrega anònima / Només càrrega (File Drop)</label>
    <label><input type="radio" name="s3" value="2"> Àrea de text públic</label>
    <label><input type="radio" name="s3" value="3"> Fòrum obert</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Terminal OCC</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina comanda de consola s'ha d'executar per forçar Nextcloud a reescanejar el sistema de fitxers i registrar documents que un administrador ha copiat directament al disc per terminal?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> <code>occ disk:format</code></label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> <code>sudo -u www-data php occ files:scan --all</code></label>
    <label><input type="radio" name="s4" value="2"> <code>occ system:reboot</code></label>
    <label><input type="radio" name="s4" value="3"> <code>occ clean:trash</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de Servidor de Núvol Privat Nextcloud</h3>
      <p class="delivery-subtitle">Memòria tècnica de posada en marxa, configuració de quotes, Redis i connexió multidispositiu.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Presenta un informe tècnic complet sobre la instal·lació de Nextcloud en Debian. Inclou la configuració del Virtual Host amb <code>Dav off</code>, el rendiment amb Redis, l'estructura de dos grups amb quotes limitades, la creació d'un tauler a l'aplicació Deck i una connexió WebDAV des d'un ordinador client.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF individual complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD04</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="AWE" data-unit="4" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
