---
title: "UT 03: Administració d'Usuaris, Grups i Directives GPO — SOX"
layout: "default"
course_root: ".."
badge: "2n SMX · Sistemes Operatius en Xarxa · UT03"
module: "SOX"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 03</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 03: Administració d'Usuaris, Grups i Polítiques de Seguretat (GPO)

L'administració eficient d'un sistema operatiu en xarxa requereix dominar la gestió del cicle de vida dels usuaris corporatius, implementar estratègies de grups escalables i auditable mitjançant la metodologia **AGDLP**, i desplegar polítiques de seguretat centralitzades mitjançant **Objectes de Directiva de Grup (GPOs)** a Windows Server o mecanismes equivalents en servidors Linux.

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[3.1 Gestió de Comptes d'Usuari en Sistemes en Xarxa](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0301.html):** Usuaris locals vs. domini, UPN, SAMAccountName, SIDs únics, perfils (locals, mòbils i obligatoris) i automatització per PowerShell.
- **[3.2 Estratègia i Administració de Grups (Metodologia AGDLP)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0302.html):** Grups de seguretat vs. distribució, àmbits (Global, Local de Domini) i arquitectura escalable AGDLP.
- **[3.3 Introducció i Arquitectura dels Objectes de Directiva de Grup (GPO)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0303.html):** GPC vs. GPT a SYSVOL, jerarquia d'aplicació LSDOU, configuració d'equip vs. usuari i eines `gpupdate`/`gpresult`.
- **[3.4 Desplegament de Polítiques Corporatives amb GPO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0304.html):** Polítiques de contrasenyes, llindar de bloqueig, restricció d'USB, tapís d'escriptori corporatiu i scripts d'inici de sessió.
- **[3.5 Administració d'Usuaris i Grups en Linux Server (OpenLDAP / FreeIPA)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0305.html):** `/etc/passwd`, `/etc/shadow`, comandes de gestió, delegació de privilegis amb `visudo` i serveis OpenLDAP / FreeIPA.

---

## Reptes Globals de Síntesi de la Unitat 03

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Resolució de Conflictes GPO</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un usuari pertany a la Unitat Organitzativa 'Alumnat'. Al nivell de Domini hi ha una GPO que permet l'accés a l'indicador d'ordres (cmd.exe), però a l'OU 'Alumnat' hi ha una GPO que el bloqueja explícitament. Podrà obrir cmd.exe l'alumne?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Sí, perquè les directives del Domini prevalen sempre per damunt de les OUs.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) No, perquè segons l'ordre de processament LSDOU, les directives de les OUs s'apliquen més tard i sobreescriuen les polítiques del domini.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Només si obri l'indicador d'ordres amb botó dret 'Executar com a administrador'.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) La directiva es bloquejarà i l'equip s'apagarà immediatament.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Aplicació d'AGDLP</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">A una empresa amb 50 treballadors al departament de Recursos Humans, cal donar accés de Modificació a la carpeta compartida '\\servidor\Nomines'. Com s'aplica correctament la regla AGDLP?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Afegir els 50 comptes d'usuari directament a la llista d'accessos de la carpeta.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Usuaris -> s'afegeixen a GG_RRHH -> GG_RRHH s'afegeix a DL_Nomines_RW -> DL_Nomines_RW rep el permís de Modificació sobre la carpeta.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Assignar el permís al grup 'Tothom' (Everyone) per comoditat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Donar la contrasenya del compte d'Administrador del Domini a tots els empleats de RRHH.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Auditoria de Seguretat</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin avantatge operatiu té utilitzar 'sudo' amb visudo a Linux respecte a compartir la contrasenya de root entre múltiples tècnics del departament de sistemes?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Que els tècnics no necessiten escriure mai cap ordre per consola.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Que cada tècnic s'autentica amb el seu compte personal i totes les comandes privilegiades queden registrades amb nom i data als fitxers de registre (traçabilitat).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que les comandes s'executen al doble de velocitat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Que els scripts de bash s'interpreten automàticament en valencià.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Prevenció de Ciberatacs</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per quina raó una política de seguretat estricta ha de combinar una longitud mínima de 12 caràcters amb un llindar de bloqueig de 5 intents fallits?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Per evitar que els usuaris puguen jugar a videojocs a les hores de feina.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè una contrasenya llarga resisteix atacs de diccionari fora de línia, i el bloqueig per intents immobilitza atacs de força bruta automatitzats en línia.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè els discs durs mecànics no admeten més de 5 intents de lectura.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el reglament RGPD exigeix que totes les contrasenyes continguen la paraula 'RGPD'.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 03 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 03, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 03 PDF
    </button>
  </div>
</div>
