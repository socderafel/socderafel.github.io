---
layout: default
title: "UD5: Configuració, Administració i Manteniment del Sistema Operatiu — Sistemes Operatius Monolloc"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD5"
next_url: "ut0501.md"
next_label: "5.1 Estructura de Directoris (FHS vs Windows) ➡️"
---

<div class="interactive-progress-tracker" data-unit="SOM-UD05" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">⚡</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat 5: Configuració, Administració i Manteniment del Sistema Operatiu</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General, Mapa d'Aprenentatge i Reptes Globals de Síntesi</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP disponibles</span>
  </div>
</div>

# UD5: Configuració, Administració i Manteniment del Sistema Operatiu

Benvinguts a la **Unitat Didàctica 5** del mòdul professional de **Sistemes Operatius Monolloc (SOM)** del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes.

Aquesta unitat culmina l'aprenentatge del mòdul dotant l'alumnat de les competències d'administració diària i manteniment avançat sobre sistemes Linux i Windows: des del control d'arbres de fitxers i permisos d'accés, passant per l'administració de serveis i automatització de processos, fins al desplegament d'imatges amb Clonezilla i la resolució d'avaries crítiques d'arrencada.

---

## 🗺️ Mapa de Continguts de la Unitat (5 Seccions Estructurades)

| Apartat | Títol Curricular | Conceptes i Procediments Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **5.1** | **Estructura de Directoris i Jerarquia de Fitxers (FHS de Linux vs Windows)** | Arbre FHS (`/`, `/etc`, `/var/log`, `/proc`), Jerarquia Windows (`System32`, `SysWOW64`, `Users`, `%APPDATA%`), Rutes absolutes vs relatives. | [Començar 5.1 ➡️](./ut0501.md) |
| **5.2** | **Gestió d'Usuaris, Grups i Permisos POSIX en GNU/Linux** | UIDs/GIDs, `/etc/passwd`, `/etc/shadow`, Triplet UGO, Notació octal (755, 644, 700), Permisos especials (SUID, SGID, Sticky Bit a `/tmp`). | [Estudiar 5.2 ➡️](./ut0502.md) |
| **5.3** | **Administració de Windows: PowerShell, Serveis i Permisos NTFS (ACL)** | Usuaris locals (`lusrmgr.msc`), Serveis (`services.msc`), PowerShell `Verb-Nom`, Permisos NTFS i eina `icacls`. | [Estudiar 5.3 ➡️](./ut0503.md) |
| **5.4** | **Automatització de Tasques: Crontab en Linux i Programador de Windows** | Dimoni cron, Sintaxi dels 5 camps (`* * * * *`), Programador de tasques (Desencadenadors, Accions, Execució desatesa). | [Estudiar 5.4 ➡️](./ut0504.md) |
| **5.5** | **Manteniment, Còpies de Seguretat (3-2-1), Imatges i Resolució d'Avaries** | Estratègia 3-2-1, Completa/Incremental/Diferencial, `tar`, `rsync`, Imatges amb Clonezilla, Reparació BCD (`bootrec`) i GRUB 2 amb `chroot`. | [Estudiar 5.5 ➡️](./ut0505.md) |

---

## 📊 Arquitectura d'Administració, Seguretat i Resiliència

Aquest esquema sintetitza els quatre pilars fonamentals de l'administració de sistemes monolloc:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   ADMINISTRACIÓ DE SISTEMES MONOLLOC                        │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ 1. SEGURETAT D'ACCÉS │ 2. AUTOMATITZACIÓ    │ 3. PROTECCIÓ I RESILIÈNCIA    │
├──────────────────────┼──────────────────────┼───────────────────────────────┤
│ • POSIX UGO (Linux)  │ • Dimoni cron        │ • Estratègia 3-2-1 (Backup)   │
│ • SUID / SGID / Stk  │ • Crontab (5 camps)  │ • Sincronització rsync / tar  │
│ • NTFS ACLs (Windows)│ • Task Scheduler     │ • Imatges Clonezilla          │
│ • Eina icacls        │ • Mòdul PowerShell   │ • Rescat BCD / GRUB (chroot)  │
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

---

## 🎯 Reptes Globals de Síntesi de la Unitat 5 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 1: Permisos segurs per a fitxers web o d'usuari</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Quin valor octal de chmod s'aplica típicament a un fitxer de configuració de sistema o document perquè només el propietari puga modificar-lo (rw) i la resta només llegir-lo (r)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn1" value="0"> 777 (Control total per a tothom)
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn1" value="1"> 644 (Propietari rw- [6], Grup r-- [4], Altres r-- [4])
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn1" value="2"> 000
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn1" value="3"> 111
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 2: Automatització nocturna periòdica</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Com s'expressa a la taula crontab de Linux que un procés s'ha d'executar cada dia exactament a les 02:30 de la matinada?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn2" value="0"> 30 2 * * *
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn2" value="1"> 2 30 * * *
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn2" value="2"> * * 2 30 *
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn2" value="3"> 02:30 * * *
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 3: Estratègia de còpies incrementals</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un administrador fa una còpia completa el diumenge i còpies incrementals de dilluns a divendres. Si el disc s'espatlla el dijous a la vesprada, quines còpies cal restaurar?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn3" value="0"> Només la còpia incremental del dijous.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn3" value="1"> La còpia completa del diumenge i totes les incrementals successives (dilluns, dimarts, dimecres i dijous) en estricte ordre cronològic.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn3" value="2"> Cap, les dades es recuperen soles si l'equip es deixa refredar.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn3" value="3"> Només la còpia completa del diumenge.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 4: Reparació d'avaria de GRUB amb chroot</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Per què cal utilitzar 'chroot /mnt' des d'un Live USB abans d'executar 'grub-install' per recuperar l'arrancada de Linux?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn4" value="0"> Perquè chroot canvia el directori arrel del procés al disc intern de la màquina, permetent que grub-install trobe els nuclis i fitxers de configuració reals instal·lats en comptes dels del Live USB.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn4" value="1"> Perquè chroot augmenta els gigabytes de la memòria cau L2.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn4" value="2"> Perquè chroot és un comandament que desactiva el teclat per seguretat.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c5_syn4" value="3"> Perquè sense chroot no és possible navegar per Internet amb Firefox.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

---

<div class="aules-delivery-card" data-module="SOM" style="background:var(--bg-card);border:1.5px solid #0284c7;border-radius:10px;padding:20px;margin-top:2rem;">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
    <span style="font-size:1.6rem;">📋</span>
    <div>
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Tasca Oficial a Aules — Portfoli Global de la Unitat 5</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Sistemes Operatius Monolloc (SOM) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Elabora la memòria tècnica final del mòdul recopilant: 1) Estudi de l'arbre FHS i jerarquia de Windows; 2) Matriu de gestió d'usuaris i permisos POSIX octals i especials; 3) Script de PowerShell d'administració de serveis i ACLs; 4) Programació de tasques amb crontab i Task Scheduler; 5) Disseny del pla de còpies de seguretat seguint la regla 3-2-1 amb Clonezilla i rsync. Exporta a PDF i puja el document a Aules.
  </p>
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <button class="btn-aules-download" data-format="pdf" style="background:#0284c7;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
      <span>📥</span> Descarregar Guia de Tasca en PDF
    </button>
    <a href="https://aules.edu.gva.es" target="_blank" rel="noopener noreferrer" style="background:var(--border);color:var(--text-main);padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
      <span>🌐</span> Obre Aules GVA
    </a>
  </div>
</div>
