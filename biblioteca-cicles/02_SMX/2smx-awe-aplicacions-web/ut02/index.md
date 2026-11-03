---
layout: default
title: "UT 02: Gestors de Continguts Web (CMS): WordPress"
parent: "2n SMX · Aplicacions Web"
has_children: true
nav_order: 2
---

# 📝 Unitat Temàtica 02: Gestors de Continguts Web (CMS): WordPress

<div class="interactive-progress-tracker" data-module="AWE" data-unit="2" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 02** d'**Aplicacions Web (AWE)**. En aquesta unitat aprofundirem en l'estudi, instal·lació, configuració, seguretat i administració de sistemes de gestió de continguts web mitjançant el CMS líder del sector: **WordPress**.

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA2)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 2 (RA2)**: *Instal·la gestors de continguts web, identificant els requeriments del sistema i aplicant procediments de configuració*:

- **a)** S'han seleccionat i comprovat els requeriments de programari (pila LAMP/WAMP) per al CMS.
- **b)** S'ha creat la base de dades i l'usuari dedicat amb permisos específics.
- **c)** S'ha configurat el servidor web mitjançant Virtual Hosts i mòduls de reescriptura.
- **d)** S'han assignat els permisos del sistema d'arxius adequats als directoris i fitxers del CMS.
- **e)** S'han definit i gestionat els rols d'usuari aplicant polítiques de seguretat.
- **f)** S'ha adaptat l'aparença visual mitjançant temes fills (*Child Themes*) i components.
- **g)** S'han administrat connectors i tasques de manteniment mitjançant eines de terminal (WP-CLI).

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **2.1** | [Arquitectura i Requeriments de WordPress](ut0201.md) | Pila LAMP necessària, anatomia del directori `/wp-content/`, estructura de taules i fitxer `wp-config.php`. | **75 XP** |
| **2.2** | [Instal·lació, Configuració de VirtualHost i Permisos](ut0202.md) | Desplegament de codi font, Apache VirtualHost, AllowOverride per a permalinks, base de dades MariaDB i permisos POSIX 755/644. | **75 XP** |
| **2.3** | [Gestió d'Usuaris, Rols i Polítiques de Seguretat](ut0203.md) | Jerarquia RBAC (Administrador a Subscriptor), principi de mínim privilegi, doble factor 2FA i limitació d'intents d'accés. | **75 XP** |
| **2.4** | [Continguts, Taxonomies, Temes i Child Themes](ut0204.md) | Entrades vs Pàgines, Categories i Etiquetes, blocs Gutenberg, jerarquia de plantilles i creació d'un Child Theme corporatiu. | **75 XP** |
| **2.5** | [Connectors Essencials i WP-CLI](ut0205.md) | Ecosistema de seguretat, còpies i memòria cau; administració per línia d'ordres amb `wp` i automatització mitjançant cron de Linux. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Arquitectura</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Si una petició a una entrada de WordPress retorna un error HTTP 404 en activar els enllaços permanents amigables tipus '/%postname%/', quin component del servidor cal revisar de manera prioritària?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> La memòria assignada en php.ini</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> La directiva <code>AllowOverride All</code> al Virtual Host i el mòdul <code>mod_rewrite</code> d'Apache</label>
    <label><input type="radio" name="s1" value="2"> La contrasenya de l'usuari MariaDB</label>
    <label><input type="radio" name="s1" value="3"> Els permisos del directori /wp-admin/</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Seguretat POSIX</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quins permisos d'accés s'han d'establir per al fitxer sensible <code>wp-config.php</code> en entorns Apache sobre Debian per evitar accessos no autoritzats d'altres usuaris del sistema?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> <code>777</code></label>
    <label><input type="radio" name="s2" value="1"> <code>666</code></label>
    <label><input type="radio" name="s2" value="2" data-correct="true"> <code>640</code> o <code>600</code> amb propietat <code>www-data:www-data</code></label>
    <label><input type="radio" name="s2" value="3"> <code>755</code> per a tothom</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Desenvolupament Web</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Per quina raó tècnica i de manteniment és obligatori crear un 'Child Theme' a l'hora de fer canvis visuals o de programació en un tema de WordPress?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Perquè WordPress impedeix activar un tema que no tinga un fill associat</label>
    <label><input type="radio" name="s3" value="1" data-correct="true"> Perquè en actualitzar el tema pare a una nova versió es perdríen irrevocablement totes les modificacions fetes als fitxers originals</label>
    <label><input type="radio" name="s3" value="2"> Perquè el Child Theme permet connectar el lloc amb la base de dades MariaDB</label>
    <label><input type="radio" name="s3" value="3"> Perquè redueix automàticament el pes de les imatges a la meitat</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Administració de Sistemes</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quina comanda de WP-CLI permet fer una exportació íntegra de la base de dades de WordPress a un fitxer .sql sense necessitat d'obrir phpMyAdmin ni entrar manualment a MariaDB?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> <code>wp core dump</code></label>
    <label><input type="radio" name="s4" value="1"> <code>wp backup create</code></label>
    <label><input type="radio" name="s4" value="2" data-correct="true"> <code>wp db export &lt;fitxer.sql&gt;</code></label>
    <label><input type="radio" name="s4" value="3"> <code>wp sql save</code></label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament Integral de Portal Corporatiu WordPress</h3>
      <p class="delivery-subtitle">Presentació de la memòria tècnica de desplegament, seguretat i gestió editorial.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Elabora un document tècnic complet que reculla el procés d'instal·lació del CMS, la creació del VirtualHost amb HTTPS o nom de domini local, la configuració dels 3 rols d'usuari corporatius, el tema fill activat i un script de còpia de seguretat automatitzada amb WP-CLI.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional + Enllaç al repositori</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD02</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="AWE" data-unit="2" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
