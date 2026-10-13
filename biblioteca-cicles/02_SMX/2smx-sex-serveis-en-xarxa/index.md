---
layout: default
title: "Serveis en Xarxa — 2n SMX · Grau Mitjà"
course_root: "."
badge: "2n SMX · Grau Mitjà"
---

# 🌐 Serveis en Xarxa (2SMX)

Benvingut/da al curs complet de **Serveis en Xarxa (Codi Oficial: 0227)** del cicle formatiu de grau mitjà **Sistemes Microinformàtics i Xarxes (SMX)**.

Aquest mòdul professional capacita l'alumnat per a instal·lar, configurar i administrar els serveis bàsics d'infraestructura en xarxes d'àrea local i Internet, assegurant la interoperabilitat entre servidors Linux i Windows en entorns corporatius.

---

## 🎯 Resultats d'Aprenentatge Oficials (RAs)

D'acord amb el currículum oficial (Reial Decret 1691/2007 i Decret 81/2010 CV), el mòdul aborda els següents Resultats d'Aprenentatge:

- **RA 1:** Instal·la serveis d'**assignació dinàmica d'adreces (DHCP)**, descrivint les seues característiques i verificant l'assignació correcta de paràmetres de xarxa a clients heterogenis.
- **RA 2:** Instal·la serveis de **resolució de noms (DNS)**, descrivint l'estructura jeràrquica de l'espai de noms i verificant el funcionament de les consultes directes i inverses.
- **RA 3:** Gestiona serveis de **transferència de fitxers (FTP, FTPS, SFTP)**, descrivint la seua arquitectura, configurant permisos d'accés, aïllament d'usuaris i canals xifrats.
- **RA 4:** Gestiona servidors de **correu electrònic (SMTP, IMAP, POP3)**, descrivint el flux de missatgeria, configurant bústies, àlies i registres de seguretat antispam.
- **RA 5:** Instal·la **servidors web (HTTP/HTTPS)** i servidors intermediaris (**Proxy/Caché**), configurant llocs virtuals (*Virtual Hosts*), certificats TLS i auditories d'accés.
- **RA 6:** Desplega serveis d'**accés i administració remota (SSH, RDP, VPN)**, assegurant el tràfic mitjançant claus públiques, bastionat de ports i túnels xifrats.
- **RA 7:** Instal·la i configura serveis de **veu sobre IP (VoIP)** i missatgeria multimèdia en xarxa, descrivint la transmissió de fluxos de veu en temps real.

---

## 📚 Mapa Didàctic del Curs

El curs s'estructura en **9 Unitats de Treball (UT)** progressives amb fonamentació teòrica, procediments tècnics d'instal·lació, fitxers de configuració reals i captures de funcionament:

| Unitat Didàctica | Títol del Bloc Temàtic | Resultats d'Aprenentatge | Accés Directe |
| :---: | :--- | :---: | :---: |
| **UT 01** | Introducció als Serveis en Xarxa i Model Client-Servidor | RA1 – RA7 | [**📘 Entrar a la Unitat →**](./ut01/index.md) |
| **UT 02** | Servei de Resolució de Noms de Domini (DNS) | RA2 | [**📘 Entrar a la Unitat →**](./ut02/index.md) |
| **UT 03** | Servei d'Assignació Dinàmica d'Adreces (DHCP) | RA1 | [**📘 Entrar a la Unitat →**](./ut03/index.md) |
| **UT 04** | Servei Web (HTTP/HTTPS) i Servidors Intermediaris (Proxy) | RA5 | [**📘 Entrar a la Unitat →**](./ut04/index.md) |
| **UT 05** | Mètodes d'Accés i Administració Remota (SSH, RDP, VPN) | RA6 | [**📘 Entrar a la Unitat →**](./ut05/index.md) |
| **UT 06** | Serveis de Transferència de Fitxers (FTP, FTPS, SFTP) | RA3 | [**📘 Entrar a la Unitat →**](./ut06/index.md) |
| **UT 07** | Serveis de Correu Electrònic (SMTP, IMAP, POP3) | RA4 | [**📘 Entrar a la Unitat →**](./ut07/index.md) |
| **UT 08** | Serveis de Veu sobre IP (VoIP) i Telefonia IP | RA7 | [**📘 Entrar a la Unitat →**](./ut08/index.md) |
| **UT 09** | Projecte Integrador d'Infraestructura i Auditoria de Xarxa | RA1 – RA7 | [**📘 Entrar a la Unitat →**](./ut09/index.md) |

---

## 🛠️ Tecnologies i Laboratori Pràctic

- **Servidors de Xarxa:** Ubuntu Server 24.04 LTS i Windows Server 2022.
- **Paquets i Serveis:** Bind9, ISC-DHCP / Kea, Apache2, Nginx, Squid Proxy, OpenSSH, vsftpd, IIS FTP, Postfix, Dovecot, Asterisk/FreePBX, WireGuard.
- **Eines d'Administració i Test:** Wireshark, dig, nslookup, FileZilla, PuTTY, curl, nmap, WinSCP.