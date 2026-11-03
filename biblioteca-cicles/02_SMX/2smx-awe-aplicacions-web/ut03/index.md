---
layout: default
title: "UT 03: Plataformes d'E-learning (LMS): Moodle"
parent: "2n SMX · Aplicacions Web"
has_children: true
nav_order: 3
---

# 🎓 Unitat Temàtica 03: Plataformes d'E-learning (LMS): Moodle

<div class="interactive-progress-tracker" data-module="AWE" data-unit="3" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvingut/da a la **Unitat Temàtica 03** d'**Aplicacions Web (AWE)**. En aquesta unitat ens endinsarem en el disseny, desplegament, seguretat i explotació del sistema de gestió d'aprenentatge més estès a les institucions acadèmiques i a la Conselleria d'Educació: **Moodle** (la base tecnològica d'Aules).

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació (RA3)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), aquesta unitat desenvolupa el **Resultat d'Aprenentatge 3 (RA3)**: *Instal·la i administra plataformes de formació a distància (LMS), configurant cursos, usuaris i eines col·laboratives*:

- **a)** S'ha verificat la idoneïtat de la infraestructura (separació de `moodledata`, permisos i MariaDB).
- **b)** S'ha instal·lat la plataforma utilitzant procediments d'automatització per terminal (CLI).
- **c)** S'ha configurat el dimoni `cron` del sistema per a la gestió autònoma de tasques de fons.
- **d)** S'han donat d'alta massivament usuaris mitjançant arxius CSV i s'han definit cohorts i rols contextuals.
- **e)** S'han estructurat les categories curriculars i creat espais de cursos segons el format de treball.
- **f)** S'han publicat recursos, activitats avaluables i qüestionaris amb protecció contra frau.
- **g)** S'ha configurat el llibre de qualificacions mitjançant ponderacions i rúbriques d'assoliment.

---

## 🗺️ Mapa de Continguts de la Unitat

| Subtema | Títol | Descripció i Objectius Clau | Punts XP |
| :---: | :--- | :--- | :---: |
| **3.1** | [Arquitectura de Moodle i Requeriments del Sistema](ut0301.md) | Separació de seguretat de `moodledata`, paràmetres de `php.ini` (`max_input_vars`, OPcache) i base de dades InnoDB `utf8mb4`. | **75 XP** |
| **3.2** | [Instal·lació, Automatització per CLI i Cron](ut0302.md) | Desplegament desatès amb `admin/cli/install.php`, VirtualHost a Apache i configuració de `cron.php` cada minut. | **75 XP** |
| **3.3** | [Gestió d'Usuaris, Rols i Mètodes de Matriculació](ut0303.md) | Sistema de rols per contextos, alta massiva CSV, sincronització de cohorts i claus d'autoinscripció. | **75 XP** |
| **3.4** | [Categories, Cursos i Còpies de Seguretat (.mbz)](ut0304.md) | Organització departamental, formats de curs (temes vs setmanal), paquetització `.mbz` i reinicialització de curs anual. | **75 XP** |
| **3.5** | [Recursos, Activitats, Llibre de Qualificacions i Avaluació](ut0305.md) | Gestió de recursos vs activitats, tasques amb rúbrica, banc de preguntes aleatòries i mitjanes ponderades al Gradebook. | **75 XP** |

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 1 · Seguretat de Dades</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Per quina raó de seguretat crítica el directori de dades privades `moodledata` no s'ha d'ubicar mai dins de la carpeta d'arrel pública del servidor web?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s1" value="0"> Perquè el servidor Apache consumiria el doble de memòria RAM</label>
    <label><input type="radio" name="s1" value="1" data-correct="true"> Perquè qualsevol usuari podria descarregar documents confidencials, exàmens o còpies de seguretat escrivint directament la URL al navegador sense cap mena d'autenticació</label>
    <label><input type="radio" name="s1" value="2"> Perquè el motor MariaDB no admet fitxers en rutes públiques</label>
    <label><input type="radio" name="s1" value="3"> Perquè el protocol SSL/TLS no funciona fora de la carpeta de dades</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 2 · Manteniment de Serveis</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin problema es produeix en un servidor Moodle si s'oblida configurar la tasca periòdica de cron (`admin/cli/cron.php`) al crontab del sistema operatiu?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s2" value="0"> El servidor Apache es bloqueja immediatament</label>
    <label><input type="radio" name="s2" value="1" data-correct="true"> No s'envien notificacions ni correus de fòrums, s'aturen els càlculs automàtics de notes de qüestionaris i s'acumulen fitxers temporals degradant el rendiment</label>
    <label><input type="radio" name="s2" value="2"> S'esborren tots els cursos automàticament</label>
    <label><input type="radio" name="s2" value="3"> No es pot accedir a la base de dades MariaDB</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 3 · Gestió d'Alumnat</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Com s'anomena l'agrupació d'usuaris a nivell de centre que permet matricular simultàniament tota una classe (per exemple '1r SMX') en tots els mòduls de primer amb un sol clic?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s3" value="0"> Grup d'activitat</label>
    <label><input type="radio" name="r2" value="1" data-correct="true"> Cohort (promoció) sincronitzada</label>
    <label><input type="radio" name="s3" value="2"> Rúbrica general</label>
    <label><input type="radio" name="s3" value="3"> Format setmanal</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div class="challenge-header">
    <span class="challenge-badge">Síntesi 4 · Portabilitat</span>
    <span class="points-val">+25 XP</span>
  </div>
  <p class="challenge-question">Quin tipus d'arxiu permet extreure un curs de Moodle amb tots els seus materials i qüestionaris per importar-lo fàcilment en un altre servidor Moodle distant (com la plataforma Aules oficial)?</p>
  <div class="challenge-options">
    <label><input type="radio" name="s4" value="0"> Un paquet <code>.deb</code> d'instal·lació</label>
    <label><input type="radio" name="s4" value="1" data-correct="true"> Una còpia de seguretat de curs en format <code>.mbz</code></label>
    <label><input type="radio" name="s4" value="2"> Un arxiu <code>.iso</code> d'arrencada</label>
    <label><input type="radio" name="s4" value="3"> Un document PDF exportat</label>
  </div>
  <button class="btn-check">Comprova</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="delivery-header">
    <span class="delivery-icon">📬</span>
    <div>
      <h3 class="delivery-title">Projecte de Síntesi Aules: Desplegament de la Plataforma d'E-learning Moodle</h3>
      <p class="delivery-subtitle">Presentació de la memòria de desplegament, càrrega d'usuaris per CSV i creació de curs amb activitats avaluables.</p>
    </div>
  </div>
  <div class="delivery-instructions">
    <p>Redacta una memòria completa del procés d'instal·lació desatesa per CLI de Moodle sobre la màquina virtual Debian. Documenta la configuració del directori <code>moodledata</code>, el crontab del sistema, la creació de la categoria de cicles, la càrrega de 5 estudiants per CSV i una tasca avaluada mitjançant rúbrica.</p>
    <div class="delivery-meta">
      <span class="badge-format">Format: PDF institucional complet</span>
      <span class="badge-deadline">Pes: Projecte Pràctic de la UD03</span>
    </div>
  </div>
  <button class="btn-aules-download" data-module="AWE" data-unit="3" data-topic="0">📥 Descarrega Especificació del Projecte (PDF)</button>
</div>
