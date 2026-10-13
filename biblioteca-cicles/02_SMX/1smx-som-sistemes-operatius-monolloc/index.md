---
layout: default
title: "Sistemes Operatius Monolloc — 1r SMX · Grau Mitjà"
course_root: "."
badge: "1r SMX · Grau Mitjà"
---

# 💽 Sistemes Operatius Monolloc (SOM)

Benvinguts al mòdul professional de **Sistemes Operatius Monolloc**, integrat en el primer curs del Cicle Formatiu de Grau Mitjà en **Sistemes Microinformàtics i Xarxes (SMX)**.

Aquest mòdul capacita l'alumnat per instal·lar, configurar, personalitzar, mantenir i diagnosticar sistemes operatius propietaris (família Microsoft Windows) i lliures (distribucions GNU/Linux), tant en equips físics autònoms com en entorns virtualitzats avançats.

---

## 🗺️ Mapa Curricular del Mòdul

| Unitat Didàctica | Nom del Bloc Temàtic | Continguts Clau | Infografia Destacada | Accés Directe |
| :---: | :--- | :--- | :---: | :---: |
| **UD1** | **Presentació i Metodologia del Curs** | Criteris d'avaluació, eines de taller, prevenció de riscos i protocols de laboratori. | 📋 Guia Didàctica | [**📘 Entrar a la UD1 →**](./ut01/index.md) |
| **UD2** | **Introducció als Sistemes Informàtics** | Arquitectura del SO, modes d'execució (Ring 0 / Ring 3), cicle de vida de processos, gestió de fitxers i permisos POSIX. | 🖼️ [Arquitectura del SO i Processos](./ut02/index.md) | [**📘 Entrar a la UD2 →**](./ut02/index.md) |
| **UD3** | **Virtualització i Màquines Virtuals** | Hipervisors Tipus 1 vs Tipus 2, Oracle VirtualBox, modes de xarxa (NAT, Bridge, Internal, Host-Only) i Guest Additions. | 🖼️ [Hipervisors i Xarxes Virtuals](./ut03/index.md) | [**📘 Entrar a la UD3 →**](./ut03/index.md) |
| **UD4** | **Instal·lació de Sistemes Operatius** | MBR vs GPT, BIOS vs UEFI, partició ESP, càrrega de sistemes (GRUB 2, Windows BCD), memòria virtual i Dual Boot. | 🖼️ [Particionament i Seqüències de Boot](./ut04/index.md) | [**📘 Entrar a la UD4 →**](./ut04/index.md) |
| **UD5** | **Configuració, Administració i Automatització** | Interfície CLI (Bash / PowerShell), arbre FHS de Linux, permisos octals, gestors de paquets, tasques programades (cron). | 🖼️ [Arbre FHS i Permisos POSIX](./ut05/index.md) | [**📘 Entrar a la UD5 →**](./ut05/index.md) |

---

## 🎯 Resultats d'Aprenentatge (RAs) Oficials

1. **RA1:** Reconeix les característiques fonamentals dels sistemes informàtics, analitzant la relació entre components físics i lògics, així com l'estructura i funcions del sistema operatiu.
2. **RA2:** Instal·la sistemes operatius monolloc planificant el procés, configurant paràmetres d'arrencada i analitzant els requisits de maquinari i programari.
3. **RA3:** Configura sistemes operatius monolloc personalitzant l'entorn de treball, administrant usuaris i adaptant el rendiment segons les necessitats de l'usuari.
4. **RA4:** Realitza tasques bàsiques d'administració de fitxers i aplicacions utilitzant interfícies gràfiques (GUI) i d'ordres (CLI), establint permisos i polítiques d'accés.
5. **RA5:** Utilitza eines de virtualització instal·lant i configurant màquines virtuals per a entorns de prova i desplegament segur.
6. **RA6:** Assegura la continuïtat del sistema realitzant còpies de seguretat, punts de restauració i diagnòstic de fallades comunes.

---

## 💻 Entorns de Treball de Taller

Al llarg del curs es treballa de manera intensiva i pràctica amb:
- **Distribucions GNU/Linux:** Ubuntu Desktop 24.04 LTS / Debian 12 (entorn GNOME, terminal Bash, gestor `apt`).
- **Sistemes Microsoft Windows:** Windows 11 Pro / Windows 10 Pro (entorn gràfic, Consola CMD, PowerShell 7).
- **Entorn de Virtualització:** Oracle VM VirtualBox 7.x amb Extension Pack i Guest Additions.