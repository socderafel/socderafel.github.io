---
title: "Sistemes Operatius en Xarxa — 2n Curs SMX"
layout: "default"
course_root: "."
badge: "2n SMX · Sistemes Operatius en Xarxa"
module: "SOX"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global del Mòdul: Sistemes Operatius en Xarxa</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 114 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 2.850 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# Mòdul Professional: Sistemes Operatius en Xarxa (SOX)

Benvinguts al mòdul professional de **Sistemes Operatius en Xarxa**, assignatura troncal de segon curs del cicle formatiu de grau mitjà de **Sistemes Microinformàtics i Xarxes (SMX)**, d'acord amb el Reial Decret 1691/2007 i l'Ordre de desplegament curricular de la Generalitat Valenciana (140 hores lectives anuals).

Aquest mòdul capacita l'alumnat per a planificar, instal·lar, configurar i administrar servidors corporatius en entorns de xarxa basats en **Microsoft Windows Server** i **GNU/Linux Server**. S'aborden des dels fonaments de l'arquitectura client-servidor i la creació de dominis centralitzats amb **Active Directory** i **LDAP**, fins a la gestió d'usuaris amb la metodologia **AGDLP**, el desplegament de directives **GPO**, la compartició de fitxers amb **SMB** i **NFS**, la monitorització proactiva i la interoperabilitat heterogènia amb **Samba**.

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:15px; margin:25px 0;">
  <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:15px; text-align:center;">
    <div style="font-size:1.8rem; font-weight:800; color:var(--primary);">6</div>
    <div style="font-size:0.9rem; color:var(--text-muted);">Unitats de Treball</div>
  </div>
  <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:15px; text-align:center;">
    <div style="font-size:1.8rem; font-weight:800; color:var(--primary);">30</div>
    <div style="font-size:0.9rem; color:var(--text-muted);">Lliçons Tècniques</div>
  </div>
  <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:15px; text-align:center;">
    <div style="font-size:1.8rem; font-weight:800; color:var(--primary);">114</div>
    <div style="font-size:0.9rem; color:var(--text-muted);">Reptes Pràctics</div>
  </div>
  <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:15px; text-align:center;">
    <div style="font-size:1.8rem; font-weight:800; color:var(--primary);">2.850</div>
    <div style="font-size:0.9rem; color:var(--text-muted);">Punts XP Totals</div>
  </div>
</div>

---

## Estructura Curricular del Mòdul

El temari s'estructura en 6 Unitats de Treball seqüencials i interconnectades:

### [UT 01: Introducció i Instal·lació de Sistemes Operatius en Xarxa](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/index.html)
- [1.1 Arquitectura Client-Servidor i Sistemes Operatius en Xarxa (NOS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0101.html)
- [1.2 Planificació de la Instal·lació i Requisits de Maquinari](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0102.html)
- [1.3 Instal·lació de Windows Server: Interfície Gràfica vs. Server Core](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0103.html)
- [1.4 Instal·lació i Configuració Base de Linux Server (Ubuntu/Debian)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0104.html)
- [1.5 Virtualització de Servidors i Rols Bàsics en Laboratori](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0105.html)

### [UT 02: Administració i Gestió de Dominis (Active Directory i LDAP)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/index.html)
- [2.1 Conceptes de Directori i Arquitectura d'Active Directory Domain Services (AD DS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0201.html)
- [2.2 Promoció d'un Servidor a Controlador de Domini (DC) a Windows Server](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0202.html)
- [2.3 Gestió d'Unitats Organitzatives (OU) i Estructuració del Domini](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0203.html)
- [2.4 Vinculació d'Equips Client al Domini (Windows 10/11 i Linux)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0204.html)
- [2.5 Replicació de Dominis, Controladors Secundaris i Rols FSMO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0205.html)

### [UT 03: Administració d'Usuaris, Grups i Polítiques de Seguretat (GPO)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/index.html)
- [3.1 Gestió de Comptes d'Usuari en Sistemes en Xarxa](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0301.html)
- [3.2 Estratègia i Administració de Grups (Metodologia AGDLP)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0302.html)
- [3.3 Introducció i Arquitectura dels Objectes de Directiva de Grup (GPO)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0303.html)
- [3.4 Desplegament de Polítiques Corporatives amb GPO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0304.html)
- [3.5 Administració d'Usuaris i Grups en Linux Server (OpenLDAP / FreeIPA)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut03/ut0305.html)

### [UT 04: Gestió i Protecció de Recursos Compartits en Xarxa](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/index.html)
- [4.1 Sistemes d'Arxius de Xarxa i Protocols de Compartició (SMB/CIFS i NFS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0401.html)
- [4.2 Permisos de Recursos Compartits vs. Permisos de Sistema de Fitxers (NTFS / POSIX)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0402.html)
- [4.3 Carpetes Personals d'Usuari (Home Folders) i Redirecció de Carpetes per GPO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0403.html)
- [4.4 Quotes de Disc i Filtració de Fitxers amb FSRM (File Server Resource Manager)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0404.html)
- [4.5 Servidor d'Arxius en Linux: Servidors NFS i Exportació de Directoris](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut04/ut0405.html)

### [UT 05: Monitorització, Rendiment i Manteniment de Sistemes Operatius en Xarxa](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/index.html)
- [5.1 Eines de Monitorització del Sistema i Mètriques Clau](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0501.html)
- [5.2 Registres d'Esdeveniments (Logs) i Diagnòstic d'Incidències](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0502.html)
- [5.3 Automatització de Tasques i Programació](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0503.html)
- [5.4 Gestió d'Actualitzacions i Pegats de Seguretat](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0504.html)
- [5.5 Servidors de Monitorització Centralitzada (SNMP, Zabbix / Prometheus)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut05/ut0505.html)

### [UT 06: Integració i Interoperabilitat de Sistemes Lliures i Propietaris](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/index.html)
- [6.1 Fonaments d'Interoperabilitat entre Windows i Linux](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0601.html)
- [6.2 Desplegament i Configuració d'un Servidor Samba en Linux](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0602.html)
- [6.3 Integració de Samba com a Servidor Membre d'un Domini Active Directory](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0603.html)
- [6.4 Samba com a Controlador de Domini AD (Samba 4 Active Directory Domain Controller)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0604.html)
- [6.5 Accés Remot Segur i Administració Multiplataforma](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut06/ut0605.html)

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Portafolis de Sistemes Operatius en Xarxa — Curs Complet</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        Genera l'informe global de progrés i resolució de reptes del mòdul de Sistemes Operatius en Xarxa per al teu registre acadèmic d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Portafolis PDF
    </button>
  </div>
</div>
