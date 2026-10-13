---
layout: default
title: "UD1 — Introducció i Instal·lació de Sistemes Operatius en Xarxa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UD1"
---

# 📘 UD1 — Introducció i Instal·lació de Sistemes Operatius en Xarxa (SOR)

La **Unitat Didàctica 1** estableix les diferències arquitectòniques entre un sistema operatiu d'estació de treball (monolloc com Windows 11 o Ubuntu Desktop) i un **Sistema Operatiu en Xarxa (SOR)** dissenyat per operar com a servidor permanent (com **Microsoft Windows Server 2022** o **Ubuntu Server 22.04/24.04 LTS**).

---

## 🏗️ Diferències Clau: Estació de Treball vs Servidor de Xarxa

| Característica | Sistema Operatiu Monolloc (Client) | Sistema Operatiu en Xarxa (Servidor) |
| :--- | :--- | :--- |
| **Objectiu Principal** | Productivitat d'un únic usuari local interactiu (ofimàtica, multimèdia, jocs). | Prestació de serveis ininterromputs a múltiples usuaris de xarxa concurrents. |
| **Interfície Gràfica** | GUI rica i pesada sempre activa per defecte. | Sovint sense GUI (*Server Core* a Windows, o consola pura a Linux) per estalviar RAM i reduir la superfície d'atac. |
| **Capacitat de Memòria RAM**| Limitada típicament a 128 GB o 2 TB de RAM. | Suport de fins a **24 TB o 48 TB de memòria RAM** i centenars de nuclis de CPU. |
| **Connexions de Xarxa** | Límit comercial de connexions entrants concurrents (ex: màxim 20 connexions SMB en Windows 11). | Connexions il·limitades gestionades per llicències d'accés de client (**CAL**). |
| **Tolerància a Fallades** | Suport bàsic d'emmagatzematge. | Suport natiu de fonts d'alimentació redundants, memòria ECC (*Error-Correcting Code*), discs en connexió calenta (*Hot-Swap*) i RAID per maquinari. |

---

## 🛠️ Desplegament de Servidors al Laboratori Virtual

En el nostre laboratori d'aprenentatge desplegarem dues màquines virtuals que faran el paper de servidors corporatius sobre Oracle VirtualBox:

```
[ AMFITRIÓ / HOST FÍSIC ]
   │
   ├── [ MV 1: Windows Server 2022 ] ──> IP Estàtica: 192.168.100.10/24 (Controlador de Domini DC1)
   │                                     DNS: 127.0.0.1 | Domini: smx.local
   │
   ├── [ MV 2: Ubuntu Server 24.04 ] ──> IP Estàtica: 192.168.100.20/24 (Servidor Samba / Linux)
   │
   └── [ MV 3: Windows 10/11 Client ] ─> IP Dinàmica per DHCP o 192.168.100.50/24
                                         DNS Primari: 192.168.100.10 (Apunta al DC1!)
```

> [!IMPORTANT]
> **Regla d'Or del Servidor de Domini:**
> Un servidor que haja d'actuar com a Controlador de Domini o servidor de serveis crítics **mai no pot tindre una adreça IP dinàmica**. Ha de tindre una **adreça IP estàtica fixa** perfectament documentada abans de promoure el servei!

---

## 📑 Continguts i Apartats de la Unitat

- [**1.3 Estudi de Compatibilitat i Requeriments de Maquinari**](./ut0103.md)
- [**1.4 Instal·lació de Windows Server 2022 (Pas a pas)**](./ut0104.md)
- [**1.5 Instal·lació d'Ubuntu Server 24.04 LTS (Pas a pas)**](./ut0105.md)
- [**1.6 Connectivitat i Verificació entre Servidor i Clients**](./ut0106.md)
