---
title: "UT 05: Monitorització, Rendiment i Manteniment de SOX — SOX"
layout: "default"
course_root: ".."
badge: "2n SMX · Sistemes Operatius en Xarxa · UT05"
module: "SOX"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 05</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 05: Monitorització, Rendiment i Manteniment de Sistemes Operatius en Xarxa

Aquesta unitat proporciona les competències necessàries per a supervisar proactivament la salut dels servidors corporatius, optimitzar els recursos de maquinari (CPU, RAM, Disc i Xarxa), diagnosticar incidències greus mitjançant la lectura de registres (*Logs*), automatitzar tasques rutinàries de manteniment, gestionar cicles de parxejat i desplegar plataformes de monitorització centralitzada basades en **SNMP** i **Zabbix**.

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[5.1 Eines de Monitorització del Sistema i Mètriques Clau](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0501.html):** Mètriques dels 4 pilars (CPU, RAM, Disc I/O, Xarxa), ús de `resmon`, `perfmon.msc` i eines de consola Linux (`top`, `htop`, `vmstat`, `ss`).
- **[5.2 Registres d'Esdeveniments (Logs) i Diagnòstic d'Incidències](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0502.html):** Visualitzador d'esdeveniments (`eventvwr.msc`), codis Event ID (4624, 4625, 4740), `/var/log` i ús de `journalctl`.
- **[5.3 Automatització de Tasques i Programació](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0503.html):** Programador de tasques de Windows, compte SYSTEM, sintaxi dels 5 camps de `crontab` a Linux i temporitzadors de `systemd`.
- **[5.4 Gestió d'Actualitzacions i Pegats de Seguretat](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0504.html):** Estratègia corporativa amb WSUS (Grup pilot vs. Producció) i servei `unattended-upgrades` a Linux Server.
- **[5.5 Servidors de Monitorització Centralitzada (SNMP, Zabbix / Prometheus)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0505.html):** Protocol SNMP (MIBs, OIDs, traps), seguretat SNMPv3 i plataformes centralitzades Zabbix/Grafana.

---

## Reptes Globals de Síntesi de la Unitat 05

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Diagnòstic d'Atac de Força Bruta</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Al registre de Seguretat d'un controlador de domini es detecten més de 2.000 esdeveniments amb Event ID 4625 en menys de 3 minuts, provinents d'una mateixa IP interna. Què està succeint?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Una actualització habitual de Windows Update.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Un atac de força bruta o 'password spraying' automatitzat llançat per un equip compromès de la xarxa per intentar esbrinar contrasenyes d'usuaris.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Un error del monitor físic del servidor.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) La creació automàtica del perfil obligatori ntuser.man.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Automatització Nocturna</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com podem programar a un servidor Linux que execute un script de neteja d'arxius temporals cada nit a les 03:15 AM sense intervenció humana?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Deixant la pantalla del servidor encesa amb l'editor nano obert.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Afegint la línia '15 3 * * * /usr/local/bin/neteja.sh' al crontab del compte root amb crontab -e.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Executant ping 3.15.0.0 a la consola.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Desinstal·lant el paquet unattended-upgrades.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Estratègia de Parxejat</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per quin motiu és considerat una gravíssima negligència d'administració de xarxes aplicar actualitzacions majors de sistema directament a servidors de producció en horari laboral?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els ventiladors fan massa soroll per als empleats.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè pot forçar reinicis sobtats del servidor i tallar transaccions actives de bases de dades o arxius compartits, provocant aturada del negoci i possible corrupció de dades.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè els servidors de Microsoft tanquen a les 14:00 hores.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el protocol SNMPv3 només funciona a la nit.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Monitorització Centralitzada</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una empresa té 20 servidors distribuïts en 3 seus diferents. Quina arquitectura permet al departament de TI visualitzar l'estat de tots els servidors en un únic mapa web i rebre avisos a Telegram si cau un servei?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Obrir el Gestor de tasques a cada servidor individualment.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Desplegar un servidor NMS centralitzat (com Zabbix o Prometheus) que recopile mètriques mitjançant agents i SNMPv3, amb alertes automàtiques configurades.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Crear un grup de WhatsApp entre tots els empleats de l'empresa.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Connectar un cable VGA de 500 metres entre les tres seus.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 05 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 05, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 05 PDF
    </button>
  </div>
</div>
