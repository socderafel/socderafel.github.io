---
layout: default
title: "UD4: Instal·lació de Sistemes Operatius Propietaris i Lliures — Sistemes Operatius Monolloc"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD4"
next_url: "ut0401.md"
next_label: "4.1 Firmware del Sistema (BIOS vs UEFI) ➡️"
---

<div class="interactive-progress-tracker" data-unit="SOM-UD04" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">⚡</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat 4: Instal·lació de Sistemes Operatius Propietaris i Lliures</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General, Mapa d'Aprenentatge i Reptes Globals de Síntesi</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP disponibles</span>
  </div>
</div>

# UD4: Instal·lació de Sistemes Operatius Propietaris i Lliures

Benvinguts a la **Unitat Didàctica 4** del mòdul professional de **Sistemes Operatius Monolloc (SOM)** del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes.

El propòsit d'aquesta unitat és capacitar l'alumnat per planificar, preparar i executar el desplegament complet de sistemes operatius moderns sobre maquinari físic real i estacions de treball, cobrint des del microprogramari de baix nivell de la placa base fins a la configuració avançada d'escenaris de doble arrencada (Dual Boot Windows + GNU/Linux).

---

## 🗺️ Mapa de Continguts de la Unitat (5 Seccions Estructurades)

| Apartat | Títol Curricular | Conceptes i Procediments Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **4.1** | **Firmware del Sistema: BIOS Heretada vs UEFI Modern i Secure Boot** | POST, Mode real vs 64 bits, Cadena de confiança (PK, KEK, db, dbx), Mòdul CSM. | [Començar 4.1 ➡️](./ut0401.md) |
| **4.2** | **Esquemes de Particionament: MBR vs GPT** | Sector 0 MBR (446B + 64B), Límit 2,2 TB, Protective MBR, GUIDs de 128 bits, Redundància CRC32, `diskpart`, `mbr2gpt`. | [Estudiar 4.2 ➡️](./ut0402.md) |
| **4.3** | **La Seqüència d'Arrancada (Boot Process), Partició ESP i Gestors** | Partició ESP (FAT32), `bootmgfw.efi`, Magatzem BCD, GRUB 2 (`/etc/default/grub`), `efibootmgr`. | [Estudiar 4.3 ➡️](./ut0403.md) |
| **4.4** | **Preparació de Mitjans i Instal·lació de Windows 11 Pro** | Rufus vs Ventoy, Requisits (TPM 2.0, Secure Boot), Particions GPT neta, OOBE i bypass de compte en línia. | [Estudiar 4.4 ➡️](./ut0404.md) |
| **4.5** | **Instal·lació de GNU/Linux i Doble Arrancada (Dual Boot)** | Ordre d'instal·lació, Desactivació de Fast Startup, Shrink volume NTFS, Compartició de l'ESP, Menú GRUB 2. | [Estudiar 4.5 ➡️](./ut0405.md) |

---

## 📊 Arquitectura d'Instal·lació i Particionament Dual Boot (UEFI / GPT)

Aquest diagrama sintetitza l'estructura física i lògica d'un disc configurat en GPT que conviu amb Windows 11 Pro i Ubuntu Desktop mitjançant una única partició de sistema ESP:

```
DISC FÍSIC NVMe / SSD (Taula GPT amb Protective MBR i redundància CRC32):
┌───────────┬──────────────┬─────────────┬────────────────┬────────────────┬──────────────┐
│  ESP FAT32│  MSR (Win)   │  Windows C: │ Partició WinRE │  Ubuntu /      │ Swap (opc)   │
│  (100 MB) │  (16 MB)     │  (NTFS)     │ (NTFS 600 MB)  │  (ext4 60 GB)  │ (4 GB / fitx)│
└───────────┴──────────────┴─────────────┴────────────────┴────────────────┴──────────────┘
      │
      ├──> /EFI/Microsoft/Boot/bootmgfw.efi (Windows Boot Manager)
      └──> /EFI/ubuntu/shimx64.efi -> grubx64.efi (Gestor GRUB 2 multiversió)
```

---

## 🎯 Reptes Globals de Síntesi de la Unitat 4 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 1: Cadena d'arrencada UEFI</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En una màquina amb arquitectura UEFI pura, on localitza el microprogramari el codi d'arrancada del sistema operatiu?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn1" value="0"> En els primers 446 bytes del sector 0 físic del disc dur primari.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn1" value="1"> En fitxers executables amb extensió .efi emmagatzemats dins del sistema de fitxers FAT32 d'una partició ESP dedicada, segons indiquen les variables NVRAM.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn1" value="2"> Directament a la memòria cau L3 del microprocessador.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn1" value="3"> En un servidor d'Internet que es descarrega en cada arrencada mitjançant Wi-Fi.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 2: Capacitat de disc en MBR</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un client porta al taller un disc SSD de 4 TB inicialitzat en MBR i es queixa que només pot crear particions fins a 2,2 TB. Quina és la solució professional?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn2" value="0"> Dir-li al client que el disc està defectuós de fàbrica i s'ha de tirar al reciclatge.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn2" value="1"> Convertir l'esquema de particions del disc de MBR a GPT (amb eines com diskpart o mbr2gpt) per aprofitar els camps LBA de 64 bits.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn2" value="2"> Formatar el disc en FAT16 per duplicar la densitat dels sectors.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn2" value="3"> Canviar el cable de corrent per un de color groc.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 3: Prevenció de corrupció en Dual Boot</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Quin ajust de Windows és estrictament necessari aplicar abans de permetre que un sistema Linux puga muntar particions NTFS en un escenari Dual Boot?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn3" value="0"> Desactivar la funció d'Inici Ràpid (Fast Startup) o hibernació mitjançant l'ordre 'powercfg -h off'.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn3" value="1"> Desinstal·lar el navegador Microsoft Edge de forma permanent.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn3" value="2"> Xifrar la unitat amb BitLocker sense guardar la clau de recuperació.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn3" value="3"> Posar el rellotge de Windows 5 hores per davant del temps UTC.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 4: Eina de taller Ventoy</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Quin és el principal avantatge tècnic d'utilitzar Ventoy enfront d'eines tradicionals com Rufus al taller de SMX?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn4" value="0"> Permet copiar múltiples arxius ISO de diferents sistemes operatius directament a la unitat sense necessitat de tornar a formatar ni cremar el pendrive cada vegada.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn4" value="1"> Augmenta la capacitat física del pendrive de 32 GB a 2 TB mitjançant màgia de firmware.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn4" value="2"> Només funciona amb pantalles CRT antigues.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="c4_syn4" value="3"> Evita que l'ordinador necessite connectar-se al corrent elèctric durant la instal·lació.
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
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Tasca Oficial a Aules — Portfoli Global de la Unitat 4</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Sistemes Operatius Monolloc (SOM) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Elabora la memòria tècnica completa de la Unitat 4 que incloga: 1) Comparativa de firmwares (BIOS vs UEFI); 2) Verificació de taules de particions MBR vs GPT; 3) Procediment d'instal·lació neta de Windows 11 Pro; 4) Procediment de redimensionament de volum i instal·lació d'Ubuntu Desktop en Dual Boot amb menú GRUB 2. Exporta el document en format PDF i lliura'l a la tasca corresponent d'Aules.
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
