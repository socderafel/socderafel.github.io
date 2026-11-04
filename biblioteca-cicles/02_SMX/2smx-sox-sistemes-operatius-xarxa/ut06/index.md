---
title: "UT 06: Integració i Interoperabilitat de Sistemes Lliures i Propietaris — SOX"
layout: "default"
course_root: ".."
badge: "2n SMX · Sistemes Operatius en Xarxa · UT06"
module: "SOX"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 06</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 06: Integració i Interoperabilitat de Sistemes Lliures i Propietaris

Aquesta unitat final del mòdul de Sistemes Operatius en Xarxa capacita l'alumnat per a trencar les barreres entre els sistemes operatius lliures (GNU/Linux) i propietaris (Microsoft Windows), fent possible la convivència harmònica, eficient i segura en xarxes corporatives reals.

S'aprén a implementar servidors d'arxius **Samba**, integrar servidors Linux com a membres d'un domini d'Active Directory amb Single Sign-On (**Kerberos / SSSD**), desplegar dominis complets basats en **Samba 4 AD DC** administrats amb eines RSAT, i gestionar infraestructures multiplataforma mitjançant **SSH**, **PowerShell Remoting (WinRM)** i consoles web modernes (**Windows Admin Center** i **Cockpit**).

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[6.1 Fonaments d'Interoperabilitat entre Windows i Linux](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0601.html):** Convivència heterogènia, diferències entre SIDs i UIDs/GIDs (idmap), i estàndards oberts (SMB, LDAP, Kerberos, DNS).
- **[6.2 Desplegament i Configuració d'un Servidor Samba en Linux](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0602.html):** Dimonis `smbd`/`nmbd`, fitxer `/etc/samba/smb.conf`, comanda `testparm` i gestió d'usuaris amb `smbpasswd`.
- **[6.3 Integració de Samba com a Servidor Membre d'un Domini Active Directory](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0603.html):** Unió amb `realmd`, mode `security = ADS`, autenticació transparent SSO i comprovació d'identitats amb `getent`.
- **[6.4 Samba com a Controlador de Domini AD (Samba 4 Active Directory Domain Controller)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0604.html):** Provisió de dominis amb `samba-tool`, dimoni `samba-ad-dc`, integració DNS i administració des de Windows amb RSAT.
- **[6.5 Accés Remot Segur i Administració Multiplataforma](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0605.html):** Autenticació SSH per parell de claus (Ed25519), PowerShell Remoting (`Enter-PSSession`, `Invoke-Command`) i consoles web (Windows Admin Center i Cockpit).

---

## Reptes Globals de Síntesi de la Unitat 06

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Arquitectura d'Autenticació Centralitzada</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una empresa té 100 equips Windows 11 i vol afegir un servidor d'arxius Linux de baix cost per allotjar 20 TB de projectes. Quina és la configuració més professional per a no haver de duplicar usuaris?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Crear els 100 usuaris a mà a Linux amb smbpasswd i demanar-los que canvien la contrasenya als dos llocs cada mes.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Unir el servidor Samba com a membre del domini Active Directory existent (security = ADS), permetent que els usuaris accedisquen transparentment amb les seues credencials corporatives.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Deixar la carpeta compartida com a pública (guest ok = yes) sense cap contrasenya.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Connectar un disc dur extern USB de butxaca a cadascun dels 100 ordinadors.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Substitució amb Samba 4 AD DC</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una organització sense ànim de lucre no pot pagar les llicències comercials de Windows Server, però necessita gestionar centralitzadament 50 estacions de treball amb directives de grup i usuaris de domini. Quina alternativa de codi obert cobreix aquesta necessitat al 100%?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Un servidor web Apache amb WordPress.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Un servidor Linux amb Samba 4 provisionat com a Controlador de Domini Active Directory (AD DC), administrat amb les eines gratuïtes RSAT des de Windows.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Una xarxa domèstica en grup de treball WORKGROUP.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Un full de càlcul compartit per correu electrònic amb les contrasenyes dels usuaris.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Seguretat en Gestió Remota</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per quina raó de ciberseguretat estricta s'ha de prohibir l'autenticació per contrasenya al servei SSH dels servidors d'infraestructura i exigir exclusivament l'ús de claus criptogràfiques asimètriques?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè les contrasenyes fan que els ventiladors del servidor s'acceleren.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè les claus asimètriques són immunes als atacs de força bruta i diccionari automatitzats, ja que la clau privada mai no viatja per la xarxa i està protegida amb xifratge d'alta longitud.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè el protocol SSH no admet lletres majúscules en les contrasenyes.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè les claus públiques bloquegen automàticament les connexions HTTP.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Administració Eficient per Web</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin avantatge té utilitzar Windows Admin Center o Cockpit per a gestionar servidors respecte a connectar-se per Escriptori Remot RDP convencional?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Que permet imprimir en impressores sense tinta.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Que consumeix moltíssims menys recursos al servidor (en no haver de carregar una sessió gràfica d'escriptori completa), funciona des de qualsevol dispositiu amb navegador web i permet gestionar fàcilment servidors Server Core o Linux sense interfície gràfica.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que desactiva la necessitat de tindre targetes de xarxa als clients.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Que converteix la xarxa local en una xarxa satel·lital privada.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 06 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 06, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 06 PDF
    </button>
  </div>
</div>
