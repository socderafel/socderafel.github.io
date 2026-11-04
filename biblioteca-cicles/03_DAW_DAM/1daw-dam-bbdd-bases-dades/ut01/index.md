---
layout: default
title: "UD1: Sistemes d'Emmagatzematge i SGBD — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD1"
prev_url: "../index.html"
prev_label: "⬅️ Portada del Mòdul"
next_url: "ut0101.html"
next_label: "Començar 1.1 ➡️"
---

# UD1: Sistemes d'Emmagatzematge i SGBD

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 1</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD1: Sistemes d'Emmagatzematge i SGBD** del mòdul professional de **Bases de Dades** (comú als cicles formatius de Grau Superior en Desenvolupament d'Aplicacions Web, Desenvolupament d'Aplicacions Multiplataforma i Administració de Sistemes Informàtics en Xarxa).

En aquesta unitat analitzarem com la informació ha passat dels arxius físics en paper i fitxers plans informàtics als moderns **Sistemes de Gestió de Bases de Dades (SGBD)**. Comprendrem els problemes crítics de redundància, dependència i inconsistència, i explorarem l'arquitectura ANSI-SPARC que fa possible la independència física i lògica de les dades.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA1)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA1:** Reconeix els sistemes d'emmagatzematge d'informació analitzant-ne les característiques i valorant la seua utilitat per al tractament de la informació.
  - Diferenciar entre el sistema de gestió d'arxius d'un sistema operatiu i un SGBD.
  - Identificar els components fonamentals d'un SGBD (motor d'emmagatzematge, catàleg, gestor de concurrència i transaccions).
  - Comprendre els tres nivells de l'arquitectura ANSI-SPARC (intern, conceptual i extern).
  - Classificar els SGBD segons el model de dades (jeràrquic, xarxa, relacional, orientat a objectes, NoSQL).
  - Instal·lar i verificar el funcionament bàsic d'un SGBD corporatiu (PostgreSQL / MariaDB).

---

## 📑 Apartats de la Unitat

1. **[1.1 Evolució de l'emmagatzematge: Fitxers tradicionals vs. Bases de Dades](ut0101.html)**
   - Limitacions dels sistemes de fitxers convencionals: redundància, inconsistència, aïllament i dependència de programes.
2. **[1.2 El Sistema de Gestió de Bases de Dades (SGBD) i components arquitecturals](ut0102.html)**
   - Concepte d'SGBD, funcions, usuaris (DBA, desenvolupadors, usuaris finals) i mòduls del motor.
3. **[1.3 Arquitectura ANSI-SPARC de tres nivells i independència de dades](ut0103.html)**
   - Nivell físic/intern, conceptual i extern (vistes). Independència física i lògica de dades.
4. **[1.4 Classificació i models de bases de dades](ut0104.html)**
   - Models clàssics (jeràrquic, xarxa), relacional (Codd), orientat a objectes i família NoSQL.
5. **[1.5 Instal·lació, configuració i administració bàsica d'un SGBD](ut0105.html)**
   - Desplegament de serveis de bases de dades, ports TCP estàndard, connexió mitjançant eines de terminal (psql, mysql) i interfícies gràfiques (DBeaver, pgAdmin).

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua visió global sobre l'arquitectura i el propòsit dels SGBD resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: SGBD vs. Sistema de Fitxers</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un desenvolupador argumenta que guardar dades en fitxers JSON al disc dur és suficient per a una aplicació bancària amb 500 caixers automàtics actius alhora. Quin inconvenient crític dels fitxers tradicionals fa inviable aquesta proposta?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Els fitxers JSON no permeten emmagatzemar dades de tipus enter ni dates.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) La falta de control de concurrència i transaccions ACID provocaria sobreescriptures de saldos i inconsistències greus.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Els fitxers JSON requereixen pagar llicències de programari privatiu a cada lectura.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) El disc rígid no pot albergar més de deu arxius de text de manera simultània.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Independència Lògica</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En l'arquitectura ANSI-SPARC, què significa aconseguir la 'independència lògica de dades'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Modificar el tipus d'emmagatzematge en disc (per exemple, de HDD a SSD NVMe) sense canviar l'esquema relacional.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Canviar l'esquema conceptual (afegir una nova taula o columna) sense haver de modificar les aplicacions externes que no utilitzen eixa dada.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que la base de dades puga funcionar sense cap sistema operatiu ni maquinari subjacent.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Poder programar en qualsevol llenguatge sense necessitat de compilar el codi font.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Catàleg i Diccionari de Dades</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin component de l'SGBD emmagatzema les metadades (estructures de taules, restriccions, permisos i tipus de dades)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) El fitxer temporal d'intercanvi de memòria swap del sistema operatiu.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) El diccionari de dades o catàleg del sistema (com information_schema en SQL).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) El registre MBR/GPT del sector zero del disc físic.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) L'arxiu de regles del tallafoc de xarxa.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Models de Dades</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin model de bases de dades es basa en el rigor de la teoria matemàtica de conjunts i de predicats de primer ordre ideat per Edgar F. Codd?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) El model documental NoSQL basat en documents BSON.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) El model de xarxa CODASYL amb punters de memòria manuals.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) El model Relacional basat en taules (relacions), tuples i atributs.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) El model jeràrquic basat en arbres binaris d'índexs invertits.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament d'Activitats a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En acabar de resoldre els reptes interactius d'aquest apartat, descarrega el justificant en PDF i puja'l a la tasca corresponent d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Justificant PDF
    </button>
  </div>
</div>
