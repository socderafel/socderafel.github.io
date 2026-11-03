---
layout: default
title: "UD2: Arquitectura de Xarxa, Models OSI i TCP/IP, i Cablejat Estructurat — Xarxes Locals"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
prev_url: "../ut01/index.md"
prev_label: "◀ UD1 Introducció a les Xarxes"
next_url: "../ut03/index.md"
next_label: "UD3 Interconnexió i Subnetting ▶"
---

<div class="interactive-progress-tracker" data-unit="XAL-UD02" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">📶</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat Didàctica 2: Arquitectura de Xarxa, Models OSI/TCP-IP i Cablejat</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General i Reptes Globals de Síntesi · 5 Apartats Formatius</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP globals</span>
  </div>
</div>

# Unitat Didàctica 2: Arquitectura de Xarxa, Models OSI i TCP/IP, i Cablejat Estructurat

Benvinguts a la segona unitat del mòdul de **Xarxes Locals**. En aquesta unitat s'estableixen els fonaments estructurals de la comunicació de dades: des dels models conceptuals de referència per capes (**OSI de 7 capes** i **TCP/IP de 4 capes**) fins a les normes industrials de desplegament físic d'instal·lacions de telecomunicacions (**ANSI/TIA-568** i racks de 19 polzades).

---

## 🗺️ Mapa Curricular de la Unitat 2

A continuació es detallen els 5 blocs de continguts que componen aquesta unitat:

| Apartat | Títol del Bloc Formatiu | Conceptes i Tecnologies Clau | Puntuació |
| :--- | :--- | :--- | :---: |
| [**2.1**](ut0201.md) | **Models per Capes: OSI vs TCP/IP** | Estratificació, independència de nivells, 7 capes ISO i 4 capes Internet. | `+75 XP` |
| [**2.2**](ut0202.md) | **Capes d'Usuari i Transport** | HTTP, DNS, DHCP, SSH, TCP (Handshake 3 vies) vs UDP, Ports i Sòcols. | `+75 XP` |
| [**2.3**](ut0203.md) | **Encapsulament de PDUs i Flux** | Dades -> Segment -> Paquet -> Trama -> Bits. Capçaleres i cua FCS/CRC. | `+75 XP` |
| [**2.4**](ut0204.md) | **Cablejat Estructurat EIA/TIA** | Els 6 subsistemes (EF, MDF, IDF, Backbone, WA), Racks 19" (U) i Patch Panels. | `+75 XP` |
| [**2.5**](ut0205.md) | **Equips d'Interconnexió i Dominis**| Hubs (Capa 1) vs Switches (Capa 2, Taula MAC), Dominis de Col·lisió i Difusió. | `+75 XP` |

---

## 📊 Infografia d'Arquitectura per Capes i Encapsulament

```
 +-------------------------------------------------------------------------+
 |                      CAPA D'APLICACIÓ (HTTP, DNS, SSH)                   |
 |  [ Dades d'Usuari: "GET /index.html HTTP/1.1" ]                         |
 +-------------------------------------------------------------------------+
                                    │
                                    ▼ (Encapsulament a Transport)
 +-------------------------------------------------------------------------+
 |                      CAPA DE TRANSPORT (TCP / UDP)                      |
 |  [ Capçalera TCP (Port Orig: 51234, Port Destí: 443, SEQ, ACK) | Dades ]|
 +-------------------------------------------------------------------------+
                                    │
                                    ▼ (Encapsulament a Xarxa / Internet)
 +-------------------------------------------------------------------------+
 |                      CAPA DE XARXA / INTERNET (IPv4 / IPv6)             |
 |  [ Capçalera IP (IP Orig: 192.168.1.15, IP Destí: 8.8.8.8) | TCP | Dades]|
 +-------------------------------------------------------------------------+
                                    │
                                    ▼ (Encapsulament a Enllaç de Dades)
 +-------------------------------------------------------------------------+
 |                      CAPA D'ENLLAÇ DE DADES (Ethernet 802.3)             |
 |  [ MAC Destí | MAC Origen | Tipus 0x0800 | Paquet IP | Cua FCS/CRC 32b ]|
 +-------------------------------------------------------------------------+
                                    │
                                    ▼ (Transmissió Física)
                     01101001 01101110 01110100 01100101 ...
                     [ Medi Físic: Cable UTP / Fibra Òptica / Aire Wi-Fi ]
```

---

## Reptes Globals de Síntesi de la Unitat 2 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 1: Resolució sistemàtica d'incidències per capes</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un usuari de l'oficina no pot navegar per Internet. El tècnic de SMX comprova primer si el cable de xarxa està connectat i si el LED verd de la targeta està encès; després fa un <code>ping 127.0.0.1</code> i a continuació comprova la IP amb <code>ipconfig</code>. Quin enfocament de diagnòstic està aplicant?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q1" value="0"> Enfocament descendent (Top-down) començant per l'aplicació web.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q1" value="1"> Enfocament ascendent (Bottom-up) començant per la Capa 1 (Física) i pujant progressivament cap a Enllaç i Xarxa.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q1" value="2"> Enfocament purament aleatori sense cap base tècnica.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q1" value="3"> Diagnòstic exclusiu de bases de dades SQL.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 2: Identificació de camps de la PDU Ethernet</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En una captura de paquets amb Wireshark es visualitza una trama Ethernet II amb codi EtherType <code>0x0800</code>. Quin protocol s'està transportant directament a l'interior d'aquesta trama?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q2" value="0"> Protocol IPv4.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q2" value="1"> Protocol ARP (que utilitza 0x0806).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q2" value="2"> Protocol IPv6 (que utilitza 0x86DD).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q2" value="3"> Un flux de vídeo analògic sense comprimir.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 3: Disseny d'espais de telecomunicacions</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En el projecte de cablejat estructurat d'un hospital de 4 plantes, quina infraestructura s'ha d'utilitzar per interconnectar les sales de telecomunicacions (IDF) de cada pis amb la sala d'equips principal (MDF)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q3" value="0"> Cablejat de distribució vertical o tronc (Backbone), habitualment executat amb fibra òptica multimode protegida per tubs canalitzats antiincendis.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q3" value="1"> Cablejat horitzontal amb latiguillos ordinaris de 2 metres penjats per la façana.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q3" value="2"> Enllaços d'infrarojos de baixa potència entre finestres.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q3" value="3"> Únicament connexió per parell telefònic bàsic de dos fils.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 4: Optimització de dominis en xarxes d'alt rendiment</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Per quina raó tècnica és crític evitar la proliferació de dominis de difusió excessivament grans (amb més de 500 equips en un mateix domini de broadcast de switch)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q4" value="0"> Perquè el consum elèctric dels endolls de paret augmentaria de forma perillosa.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q4" value="1"> Perquè cada paquet de broadcast (com sol·licituds ARP o anuncis DHCP) ha de ser processat per les CPUs de tots els ordinadors connectats, degradant el rendiment de la xarxa i exposant-la a tempestes de difusió (broadcast storms).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q4" value="2"> Perquè els cables UTP no poden transportar més de 100 paquets per segon.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx2g_q4" value="3"> Perquè les adreces MAC només permeten identificar un màxim de 255 equips.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

---

<div class="aules-delivery-card" data-module="XAL" style="background:var(--bg-card);border:1.5px solid #0284c7;border-radius:10px;padding:20px;margin-top:2rem;">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
    <span style="font-size:1.6rem;">📋</span>
    <div>
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Projecte Global a Aules — UD2 Projecte d'Arquitectura</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Xarxes Locals (XAL) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Elabora la memòria tècnica d'un projecte de cablejat estructurat per a una petita empresa de 2 plantes amb 40 llocs de treball. Especifica la distribució del MDF i IDF, l'alçada dels racks en unitats U, el tipus de cablejat horitzontal (Cat 6/6A) i vertical (fibra), i la ubicació dels switches de Capa 2. Descarrega el formulari complet de memòria en PDF i puja el document final a la plataforma Aules.
  </p>
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <button class="btn-aules-download" data-format="pdf" style="background:#0284c7;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
      <span>📥</span> Descarregar Guia de Projecte en PDF
    </button>
    <a href="https://aules.edu.gva.es" target="_blank" rel="noopener noreferrer" style="background:var(--border);color:var(--text-main);padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
      <span>🌐</span> Obre Aules GVA
    </a>
  </div>
</div>
