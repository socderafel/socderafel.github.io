---
layout: default
title: "Sistemes Operatius Monolloc — 1r SMX · Grau Mitjà"
course_root: "."
badge: "1r SMX · Grau Mitjà · Mòdul SOM"
next_url: "ut01/index.md"
next_label: "Començar la UD1 ➡️"
---

<div class="interactive-progress-tracker" data-unit="SOM-GLOBAL" data-topic="portal" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:16px 20px;margin-bottom:1.8rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
  <div style="display:flex;align-items:center;gap:12px;">
    <span style="font-size:1.6rem;">💽</span>
    <div>
      <div style="font-weight:700;font-size:1.05rem;color:var(--text-main);">Sistemes Operatius Monolloc (SOM) — 1r Curs SMX</div>
      <div style="font-size:0.84rem;color:var(--text-muted);">5 Unitats Didàctiques · 25 Apartats Pràctics · 95 Reptes Interactius Gamificats (+500 XP)</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:6px 14px;border-radius:20px;font-size:0.85rem;font-weight:700;">Curs Complet Gamificat</span>
  </div>
</div>

# 💽 Sistemes Operatius Monolloc (SOM)

Benvinguts al portal docent del mòdul professional de **Sistemes Operatius Monolloc**, assignat al primer curs del Cicle Formatiu de Grau Mitjà en **Sistemes Microinformàtics i Xarxes (SMX)**.

Aquest mòdul capacita l'alumnat per instal·lar, configurar, personalitzar, mantenir i diagnosticar sistemes operatius propietaris (família Microsoft Windows) i lliures (distribucions GNU/Linux), tant en equips físics autònoms com en entorns virtualitzats avançats.

---

## 🗺️ Mapa Curricular del Mòdul (5 Unitats Didàctiques)

| Unitat Didàctica | Nom del Bloc Temàtic | Continguts Curriculars Clau | Reptes i Pràctica | Accés Directe |
| :---: | :--- | :--- | :---: | :---: |
| **UD1** | **Presentació del Curs i Arquitectura** | Protocols de taller, arquitectura Von Neumann, CPU, modes Ring 0/Ring 3, adreçament de memòria 32 vs 64 bits i auditoria de maquinari CLI. | 19 Reptes (+95 XP) · 6 Tasques Aules | [**📘 Entrar a la UD1 →**](./ut01/index.md) |
| **UD2** | **Estructura i Fonaments dels Sistemes Operatius** | Funcions del nucli (monolític vs micronucli), cicle de processos i fils, bloc PCB, algorismes de CPU (Round Robin), paginació de memòria i sistemes de fitxers (Inodes vs MFT). | 19 Reptes (+95 XP) · 6 Tasques Aules | [**📘 Entrar a la UD2 →**](./ut02/index.md) |
| **UD3** | **Virtualització i Entorns de Proves** | Hipervisors Tipus 1 vs Tipus 2, màquines virtuals a VirtualBox, assignació de CPU/RAM, discs VDI/VMDK, snapshots, xarxa (NAT, Pont, Host-Only) i Guest Additions. | 19 Reptes (+95 XP) · 6 Tasques Aules | [**📘 Entrar a la UD3 →**](./ut03/index.md) |
| **UD4** | **Instal·lació de Sistemes Operatius Propietaris i Lliures** | Firmware BIOS vs UEFI, Secure Boot, taules MBR vs GPT (límit 2,2 TB), partició ESP, instal·lació neta de Windows 11 Pro, Ubuntu Desktop i Dual Boot amb GRUB 2. | 19 Reptes (+95 XP) · 6 Tasques Aules | [**📘 Entrar a la UD4 →**](./ut04/index.md) |
| **UD5** | **Configuració, Administració i Manteniment del SO** | Arbre FHS de Linux vs Jerarquia Windows, usuaris i permisos POSIX octals/especials, administració amb PowerShell i ACLs, crontab i Task Scheduler, còpies 3-2-1 i Clonezilla. | 19 Reptes (+95 XP) · 6 Tasques Aules | [**📘 Entrar a la UD5 →**](./ut05/index.md) |

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
