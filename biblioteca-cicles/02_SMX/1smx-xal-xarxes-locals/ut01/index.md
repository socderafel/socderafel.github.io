---
layout: default
title: "UD1: Introducció a les Xarxes Locals, Topologies i Mitjans de Transmissió — Xarxes Locals"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
next_url: "ut0101.md"
next_label: "1.1 Fonaments de Xarxes i Models d'Arquitectura ➡️"
---

<div class="interactive-progress-tracker" data-unit="XAL-UD01" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">⚡</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat 1: Introducció a les Xarxes Locals, Topologies i Mitjans de Transmissió</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General, Mapa d'Aprenentatge i Reptes Globals de Síntesi</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP disponibles</span>
  </div>
</div>

# UD1: Introducció a les Xarxes Locals, Topologies i Mitjans de Transmissió

Benvinguts a la **Unitat Didàctica 1** del mòdul professional de **Xarxes Locals (XAL)** del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes.

Aquesta primera unitat estableix els fonaments de la comunicació digital de dades. Analitzarem des dels elements bàsics que intervenen en qualsevol transmissió (emissor, receptor, mitjà, protocol) i els models d'arquitectura (Client-Servidor vs P2P), passant per la classificació geogràfica de xarxes (PAN, LAN, CAN, MAN, WAN), els organismes internacionals de normalització (IEEE, IETF, ISO, TIA/EIA), fins a l'estudi pràctic de les topologies de xarxa i els mitjans físics de transmissió (coure de parell trenat UTP/STP, fibra òptica multimode/monomode i ràdio Wi-Fi).

---

## 🗺️ Mapa de Continguts de la Unitat (5 Seccions Estructurades)

| Apartat | Títol Curricular | Conceptes i Procediments Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **1.1** | **Fonaments de Xarxes de Dades, Elements Clau i Models d'Arquitectura** | Emissor, Receptor, Mitjà, Missatge, Protocol. Models Client-Servidor vs Punt a Punt (P2P), recursos compartits (NAS). | [Començar 1.1 ➡️](./ut0101.md) |
| **1.2** | **Classificació de les Xarxes segons l'Abast Geogràfic i la Titularitat** | PAN (Bluetooth), LAN (Ethernet/Wi-Fi), CAN (Campus), MAN (Metropolitana), WAN (Internet). Xarxes privades, públiques i túnels VPN. | [Estudiar 1.2 ➡️](./ut0102.md) |
| **1.3** | **Organitzacions d'Estandardització i Normalització de Xarxes** | Interoperabilitat universal. IEEE (802.3 Ethernet, 802.11 Wi-Fi, 802.1Q), IETF (documents RFC), TIA/EIA-568, ISO i ITU-T. | [Estudiar 1.3 ➡️](./ut0103.md) |
| **1.4** | **Topologies de Xarxa Físiques i Lògiques** | Topologies en Bus, Estrella, Anell i Malla. Topologia física vs lògica (Hub en bus vs Switch en estrella). Mètodes d'accés CSMA/CD vs CSMA/CA. | [Estudiar 1.4 ➡️](./ut0104.md) |
| **1.5** | **Mitjans de Transmissió Físics: Parell Trenat, Fibra Òptica i Sense Fil** | Coure UTP/FTP/STP (Cat 5e/6/6A, límit 100 m), crimpat RJ-45, fibra Multimode (MMF) vs Monomode (SMF), connectors LC/SC i bandes Wi-Fi (2,4 / 5 GHz). | [Estudiar 1.5 ➡️](./ut0105.md) |

---

## 📊 Arquitectura de Mitjans i Topologies de Xarxa

Aquest esquema sintetitza la relació entre les topologies físiques habituals i els mitjans de transmissió del taller:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     TOPOLOGIES I MITJANS DE TRANSMISSIÓ                     │
├─────────────────────────────┬───────────────────────────────────────────────┤
│ TOPOLOGIES FÍSIQUES         │ MITJANS DE TRANSMISSIÓ FÍSICS                 │
├─────────────────────────────┼───────────────────────────────────────────────┤
│ • ESTRELLA (Dominant LAN)   │ • PARELL TRENAT: UTP/STP Cat 6/6A (Màx 100 m) │
│ • BUS (Coaxial 50 Ω amb T)  │ • FIBRA MULTIMODE (MMF 50 µm / Fins a 550 m)  │
│ • ANELL (Token Ring / FDDI) │ • FIBRA MONOMODE (SMF 9 µm / Fins a 80 km)    │
│ • MALLA (Data Centers/WAN)  │ • SENSE FIL: Wi-Fi 2,4 GHz / 5 GHz / 6 GHz    │
└─────────────────────────────┴───────────────────────────────────────────────┘
```

---

## 🎯 Reptes Globals de Síntesi de la Unitat 1 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 1: Connexió entre edificis en un Campus</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un institut vol interconnectar dos edificis separats per 300 metres de pati exterior. Quin mitjà de transmissió és el més recomanat per normativa?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn1" value="0"> Cable de parell trenat UTP Categoria 5e.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn1" value="1"> Cable de fibra òptica multimode (MMF), ja que supera el límit de 100 metres del coure i proporciona aïllament elèctric total enfront de diferències de potencial i llamps.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn1" value="2"> Cable coaxial de televisió amb connectors BNC.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn1" value="3"> Un cable d'àudio minijack de 3,5 mm.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 2: Comportament d'un Switch en una topologia en estrella</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">A diferència d'un concentrador (Hub) antic, com gestiona un commutador (Switch) el trànsit de dades entre dos ordinadors connectats a la mateixa xarxa en estrella?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn2" value="0"> Repeteix el senyal elèctric per tots els ports sense mirar a qui va dirigit.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn2" value="1"> Examina la seua taula d'adreces MAC (taula CAM) i reexpedeix la trama únicament i exclusiva pel port on està connectat el destinatari, evitant col·lisions.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn2" value="2"> Converteix tots els paquets en arxius d'imatge PNG abans de transmetre'ls.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn2" value="3"> Tanca el port si detecta que el cable mesura menys de 2 metres.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="1" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 3: L'organisme IETF i els protocols d'Internet</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Quin organisme s'encarrega d'estandarditzar els protocols fonamentals d'Internet mitjançant la sèrie de documents RFC?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn3" value="0"> IETF (Internet Engineering Task Force)
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn3" value="1"> NATO
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn3" value="2"> NASA
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn3" value="3"> Consorci Unicode
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte de Síntesi 4: Mitjà d'alta immunitat en indústries</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En una nau industrial on funcionen grans motors elèctrics i transformadors que generen forts camps electromagnètics, quin tipus de cable de coure s'ha d'instal·lar per evitar errors de transmissió?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn4" value="0"> Cable UTP sense cap mena de blindatge.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn4" value="1"> Cable de parell trenat blindat S/FTP (amb pantalla d'alumini individual per parell i malla metàl·lica exterior) degudament connectat a terra.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn4" value="2"> Cable de telèfon pla de 2 fils.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx1_syn4" value="3"> Cable d'antena de ràdio FM de 75 ohms.
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
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Tasca Oficial a Aules — Portfoli Global de la Unitat 1</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Xarxes Locals (XAL) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Elabora la memòria tècnica completa de la Unitat 1 que incloga: 1) Esquema d'elements clau i models Client-Servidor vs P2P; 2) Taula de classificació per abast (PAN/LAN/CAN/MAN/WAN) i règim d'accés; 3) Resum d'estàndards IEEE 802, IETF i TIA/EIA; 4) Anàlisi de topologies físiques i lògiques; 5) Comparativa detallada de mitjans guiats (UTP/STP i fibra MMF/SMF) i sense fil. Exporta el document en PDF i puja'l a la tasca corresponent d'Aules.
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
