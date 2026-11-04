---
layout: default
title: "UT 04: Gestió i Protecció de Recursos Compartits en Xarxa — SOX"
permalink: /02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/index.html
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 04</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 04: Gestió i Protecció de Recursos Compartits en Xarxa

Aquesta unitat tracta sobre la prestació i el govern dels serveis d'arxius compartits en entorns de xarxa locals mitjançant els protocols **SMB/CIFS** (Windows/Samba) i **NFS** (Linux).

S'aprén a calcular el permís efectiu entre les capes de Compartició i seguretat NTFS, implementar carpetes personals automatitzades i redirecció de perfils per GPO amb suport sense connexió, establir quotes rígides/toves i filtració de malware amb **FSRM**, i desplegar exportacions NFS segures amb protecció `root_squash`.

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[4.1 Sistemes d'Arxius de Xarxa i Protocols de Compartició (SMB/CIFS i NFS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0401.html):** Protocols de compartició, ports TCP 445/2049, creació de recursos, carpetes ocultes ($) i sintaxi UNC.
- **[4.2 Permisos de Recursos Compartits vs. Permisos de Sistema de Fitxers (NTFS / POSIX)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0402.html):** Avaluació del permís efectiu més restrictiu, bones pràctiques i herència de permisos.
- **[4.3 Carpetes Personals d'Usuari (Home Folders) i Redirecció de Carpetes per GPO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0403.html):** Unitats `H:`, variable `%username%`, redirecció transparent de Documents/Escriptori i Fitxers sense connexió (CSC).
- **[4.4 Quotes de Disc i Filtració de Fitxers amb FSRM (File Server Resource Manager)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0404.html):** Quotes rígides vs. toves, plantilles de quota, filtració activa contra multimèdia i defensa contra ransomware.
- **[4.5 Servidor d'Arxius en Linux: Servidors NFS i Exportació de Directoris](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0405.html):** Configuració de `/etc/exports`, seguretat `root_squash`, comanda `exportfs` i muntatge persistent a `/etc/fstab` amb `_netdev`.

---

## Reptes Globals de Síntesi de la Unitat 04

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Avaluació de Permisos</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una carpeta compartida té configurat a la pestanya 'Compartir' Control Total per al grup 'Usuaris autenticats'. A la pestanya 'Seguretat NTFS', el grup 'DL_Vendes_Lectura' només té marcat 'Lectura'. Quin permís real tindrà un venedor en connectar-se per xarxa?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Control Total, perquè la compartició mana sobre la xarxa.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Només Lectura, perquè la combinació de les dues barreres sempre atorga el permís més restrictiu.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Podrà esborrar carpetes però no fitxers.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) La carpeta no apareixerà visible.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Continuïtat de Treball</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per quin motiu és fonamental combinar la Redirecció de Carpetes per GPO amb la tecnologia de Fitxers sense connexió (Offline Files) en empreses amb personal mòbil?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els portàtils no poden connectar-se a xarxes WiFi sense eixa opció.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè si els treballadors s'emporten el portàtil a casa o a un viatge sense connexió al servidor de l'empresa, poden continuar obrint i desant els seus documents localment i sincronitzar-los en tornar.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè augmenta la duració de la bateria en un 80%.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè converteix automàticament el format dels fitxers a PDF.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Control d'Emmagatzematge</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">A un centre educatiu amb 1.000 alumnes, com pot un administrador assegurar-se que cap alumne consumisca més de 2 GB a la seua carpeta personal i que tampoc puga desar fitxers .exe?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Revisant manualment els discs cada divendres a la vesprada.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Desplegant el rol FSRM i aplicant una Quota Rígida de 2 GB juntament amb una regla de Filtració de Fitxers activa sobre el grup d'arxius executables.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Prohibint l'accés a l'aula d'informàtica.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Desinstal·lant el ratolí de tots els ordinadors.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Integració NFS</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per què un administrador de servidors Linux MAI hauria de configurar l'opció 'no_root_squash' en una exportació NFS a menys que siga estrictament imprescindible en un entorn completament aïllat?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè redueix la velocitat de transferència a 10 Mbps.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè permet que qualsevol persona que aconseguisca permisos de root a qualsevol ordinador client puga crear binaris amb bit SUID o esborrar fitxers crítics del servidor com a superusuari.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè inutilitza el paquet nfs-kernel-server.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el fitxer /etc/exports només admet un màxim de 4 caràcters per línia.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 04 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 04, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 04 PDF
    </button>
  </div>
</div>
