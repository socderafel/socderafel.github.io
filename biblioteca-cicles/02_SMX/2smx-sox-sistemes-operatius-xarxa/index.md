---
layout: default
title: "Sistemes Operatius en Xarxa — 2n SMX · Grau Mitjà"
course_root: "."
badge: "2n SMX · Grau Mitjà"
---

# 🌐 Sistemes Operatius en Xarxa (SOX)

Benvinguts al mòdul professional de **Sistemes Operatius en Xarxa**, matèria troncal del segon curs del Cicle Formatiu de Grau Mitjà en **Sistemes Microinformàtics i Xarxes (SMX)**.

Aquest mòdul capacita l'alumnat per administrar serveis de xarxa en entorns corporatius centralitzats, desplegant dominis amb **Microsoft Windows Server 2022 (Active Directory)** i servidors **GNU/Linux (Ubuntu Server / Debian / Samba / OpenLDAP)**, gestionant usuaris, grups, polítiques de seguretat (GPO), recursos compartits, servidors d'impressió i redundància d'emmagatzematge en xarxa (RAID).

---

## 🗺️ Mapa Curricular del Mòdul

| Unitat Didàctica | Nom del Bloc Temàtic | Continguts Clau | Diagrames i Pràctiques Clau | Accés Directe |
| :---: | :--- | :--- | :---: | :---: |
| **UD1** | **Introducció i Instal·lació de SOR** | Requeriments de servidor, Windows Server 2022 vs Ubuntu Server, connectivitat i adaptadors. | 🖥️ Desplegament de Servidors | [**📘 Entrar a la UD1 →**](./ut01/index.md) |
| **UD2** | **Administració i Gestió de Dominis** | Serveis de directori (AD DS i OpenLDAP), controladors de domini (DC), arbres, boscos i unió de clients. | 📊 [Arquitectura de Domini Active Directory](./ut02/index.md) | [**📘 Entrar a la UD2 →**](./ut02/index.md) |
| **UD3** | **Gestió d'Usuaris, Grups i Perfils** | Comptes d'usuari i equip, àmbits de grups (Globals, Universals, Domini Local), perfils mòbils i scripts d'inici. | 👥 [Administració PowerShell i Bash](./ut03/index.md) | [**📘 Entrar a la UD3 →**](./ut03/index.md) |
| **UD4** | **Protecció de Recursos Compartits** | Carpetes compartides SMB/CIFS, permisos de recurs compartit vs permisos NTFS, servidors Samba i cues d'impressió. | 🔒 [Matriu de Permisos Efectius](./ut04/index.md) | [**📘 Entrar a la UD4 →**](./ut04/index.md) |
| **UD5** | **Monitorització i Rendiment de SOR** | Visor d'esdeveniments, registres syslog, subsistemes d'emmagatzematge tolerant a fallades (RAID 0, 1, 5, 10). | 💽 [Arquitectura de Nivells RAID](./ut05/index.md) | [**📘 Entrar a la UD5 →**](./ut05/index.md) |
| **UD6** | **Integració de Sistemes Lliures i Propietaris** | Interoperabilitat heterogènia, client Linux en domini Windows (SSSD / Realmd), i compartició creuada Samba/NFS. | 🔄 [Integració Heterogènia](./ut06/index.md) | [**📘 Entrar a la UD6 →**](./ut06/index.md) |

---

## 🎯 Resultats d'Aprenentatge (RAs) Oficials

1. **RA1:** Instal·la sistemes operatius en xarxa analitzant els requisits d'arquitectura del servidor i verificant la comunicació amb els clients.
2. **RA2:** Administra comptes d'usuari i equip en un entorn de xarxa, configurant perfils d'usuari, plantilles i polítiques de contrasenyes.
3. **RA3:** Gestiona serveis de directori creant dominis, unitats organitzatives i aplicant directrius de seguretat centralitzades (GPO).
4. **RA4:** Gestiona recursos compartits a la xarxa establint permisos d'accés, quotes de disc i serveis d'impressió en xarxa.
5. **RA5:** Monitoritza el rendiment del sistema operatiu en xarxa analitzant el consum de recursos, registres d'auditoria i implementant emmagatzematge RAID.
6. **RA6:** Integra sistemes operatius de diferents fabricants garantint la interoperabilitat i l'autenticació creuada entre entorns Windows i Linux.