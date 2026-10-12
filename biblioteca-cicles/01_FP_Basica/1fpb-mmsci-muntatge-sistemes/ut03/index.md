---
layout: default
title: "UD3: La Placa Base de l'Ordinador — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD3"
---

# 🗄️ UD3: La Placa Base de l'Ordinador (Motherboard)

Benvingut/da a la **Unitat Didàctica 3** de MMSCI. La placa base és la columna vertebral de qualsevol equip informàtic. En aquesta unitat coneixeràs els seus factors de forma físics, els tipus de sòcols de processador (LGA i PGA), el paper del chipset i les fases VRM, la disposició de ranures de memòria RAM i busos PCIe/M.2, i aprendràs a configurar i resoldre fallades amb la BIOS/UEFI i la memòria CMOS.

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **3.1** | Funció, estructura i factors de forma (ATX, Micro-ATX, Mini-ITX) | [**📘 Llegir Apartat 3.1 →**](./ut0301.html) |
| **3.2** | El sòcol del microprocessador (Sockets LGA, PGA i BGA) i compatibilitat | [**📘 Llegir Apartat 3.2 →**](./ut0302.html) |
| **3.3** | El chipset i controladors integrats (PCH i fases d'alimentació VRM) | [**📘 Llegir Apartat 3.3 →**](./ut0303.html) |
| **3.4** | Zòcols de memòria RAM (DIMM) i ranures d'expansió (PCIe x16, x1 i M.2) | [**📘 Llegir Apartat 3.4 →**](./ut0304.html) |
| **3.5** | El firmware del sistema: BIOS, UEFI, memòria CMOS i la pila CR2032 | [**📘 Llegir Apartat 3.5 →**](./ut0305.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 1:** Selecciona els components i elements que configuren els equips microinformàtics, descrivint les seues característiques i relacions de compatibilitat.
  - *CE g:* S'han identificat els components integrats a la placa base i els seus factors de forma.
  - *CE h:* S'han descrit els diferents tipus de ranures d'expansió, sockets i connectors de memòria.
  - *CE i:* S'han manipulat els paràmetres bàsics de configuració de la BIOS/UEFI i l'ordre d'arrencada (*Boot sequence*).

---

## 📌 Resum Didàctic de la Unitat
1. **Factors de forma:** ATX (305x244 mm, estàndard gran), Micro-ATX (244x244 mm, el més comú en oficina), Mini-ITX (170x170 mm, ultracompacte).
2. **Sockets de CPU:**
   - **LGA:** Pins a la placa base (Intel i AMD AM5). S'ha d'anar amb molta cura de no doblegar els pins.
   - **PGA:** Pins al processador (AMD AM4 històric). Palanca ZIF sense forçar.
   - **BGA:** Soldat directament a la placa en portàtils.
3. **Chipset / PCH:** Gestiona les comunicacions secundàries (USB, SATA, PCIe secundari, xarxa).
4. **Ranures:** PCIe x16 (targetes gràfiques dedicades), PCIe x1 (targetes Wi-Fi/so), M.2 (discs SSD NVMe d'alta velocitat).
5. **Firmware:** UEFI substitueix la clàssica BIOS aportant mode gràfic amb ratolí, suport GPT i Secure Boot. La configuració es guarda a la CMOS gràcies a la pila de liti **CR2032** de 3 V.
