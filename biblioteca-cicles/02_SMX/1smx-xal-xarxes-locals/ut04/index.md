---
layout: default
title: "UD4: Equips de Xarxa, Seguretat Wi-Fi i VLANs — Xarxes Locals"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD4"
prev_url: "../ut03/index.md"
prev_label: "◀ UD3 Interconnexió i Subnetting"
next_url: "../index.md"
next_label: "Mòdul XAL Índex General ▶"
---

<div class="interactive-progress-tracker" data-unit="XAL-UD04" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">🛡️</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat Didàctica 4: Equips de Xarxa, Seguretat Wi-Fi i VLANs</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General i Reptes Globals de Síntesi · 5 Apartats Formatius</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP globals</span>
  </div>
</div>

# Unitat Didàctica 4: Equips de Xarxa, Seguretat Wi-Fi i VLANs

La quarta unitat completa el conjunt competencial de **Xarxes Locals** abordant la configuració avançada dels equips d'interconnexió, les tecnologies sense fil (**WLAN 802.11**), els mecanismes de xifratge moderns (**WPA2/WPA3**), la segmentació professional de xarxes corporatives mitjançant **VLANs (IEEE 802.1Q)** i les tècniques d'auditoria i resolució d'incidències amb eines CLI i **Wireshark**.

---

## 🗺️ Mapa Curricular de la Unitat 4

A continuació es detallen els 5 blocs de continguts que conformen la Unitat 4:

| Apartat | Títol del Bloc Formatiu | Conceptes i Tecnologies Clau | Puntuació |
| :--- | :--- | :--- | :---: |
| [**4.1**](ut0401.md) | **Routers Domèstics i SOHO** | Encaminament Capa 3, Default Gateway, NAT/PAT, Port Forwarding i TTL. | `+75 XP` |
| [**4.2**](ut0402.md) | **Xarxes Sense Fil WLAN** | IEEE 802.11, Punts d'Accés, BSS/ESS, Roaming, Bandes 2,4 GHz, 5 GHz i 6 GHz. | `+75 XP` |
| [**4.3**](ut0403.md) | **Seguretat Wi-Fi WPA2/WPA3**| De WEP a AES-CCMP, WPA3-SAE (Dragonfly), Personal (PSK) vs Enterprise 802.1X. | `+75 XP` |
| [**4.4**](ut0404.md) | **Segmentació amb VLANs** | Aïllament, etiqueta IEEE 802.1Q (VID 12 bits), Ports Access vs Ports Trunk. | `+75 XP` |
| [**4.5**](ut0405.md) | **Diagnòstic CLI i Wireshark**| `tracert`, `nslookup`, `netstat`, captura de paquets, filtre DORA i Nmap. | `+75 XP` |

---

## 📊 Infografia d'Interconnexió, VLANs i Seguretat

```
                     ┌───────────────────────────────────────────────┐
                     │          ROUTER GATEWAY AMB NAT / PAT          │
                     │          IP Pública: 80.25.10.14              │
                     └───────────────────────┬───────────────────────┘
                                             │
                            Enllaç Troncal   │ (Trunk 802.1Q: Tagged)
                                             ▼
                     ┌───────────────────────────────────────────────┐
                     │          SWITCH GESTIONABLE DE CAPA 2         │
                     └───────┬───────────────────────────────┬───────┘
                             │                               │
        Port d'Accés (Untag) │          Port d'Accés (Untag) │
        VLAN 10: Alumnes     │          VLAN 20: Professors  │
                             ▼                               ▼
                 ┌──────────────────────┐        ┌──────────────────────┐
                 │ PC Aula d'Informàtica│        │ Servidor de Gestió   │
                 │ 192.168.10.15/24     │        │ 192.168.20.5/24      │
                 └──────────────────────┘        └──────────────────────┘
                 [ Aïllament Lògic Total: No es veuen sense Router ]
```

---

## Reptes Globals de Síntesi de la Unitat 4 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 1: Seguretat en el desplegament Wi-Fi escolar</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En la instal·lació d'una xarxa Wi-Fi per a 800 alumnes i 100 docents en un institut, per quina raó tècnica és imprescindible utilitzar WPA2/WPA3-Enterprise amb RADIUS en lloc de WPA2-Personal (PSK)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q1" value="0"> Perquè amb PSK una sola contrasenya compartida seria coneguda per centenars de persones i filtrada a l'exterior immediatament; amb Enterprise cada usuari utilitza les seues pròpies credencials i se li pot donar de baixa sense canviar la clau a ningú més.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q1" value="1"> Perquè WPA2-Personal només admet un màxim de 5 ordinadors connectats.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q1" value="2"> Perquè el protocol Enterprise fa que els ordinadors funcionen sense bateria.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q1" value="3"> Perquè ho prohibeix el protocol DHCP.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 2: Enllaç troncal entre armaris de planta</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un cable de fibra òptica uneix el switch del soterrani (MDF) amb el switch de la segona planta (IDF). Quin mode d'enllaç han de tenir configurat els ports dels dos extrems d'aquest cable?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q2" value="0"> Mode Troncal (Trunk IEEE 802.1Q) per poder transportar les trames de totes les VLANs degudament etiquetades entre ambdues plantes.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q2" value="1"> Mode Accés exclusivament a la VLAN 1.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q2" value="2"> Mode Ad-Hoc sense fils.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q2" value="3"> Mode bucle tancat amb terminador BNC.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 3: Resolució de problema d'accés a servidor web</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un tècnic instal·la un servidor web a la IP privada <code>192.168.1.80</code> escoltant al port 80. Des de dins de l'oficina es veu perfectament, però des de casa els clients no poden obrir la pàgina posant la IP pública de l'empresa. Què s'ha oblidat de configurar?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q3" value="0"> La regla de Port Forwarding (redireccionament de ports) al router per obrir el port 80 cap a la IP 192.168.1.80.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q3" value="1"> El botó d'encesa del monitor del servidor.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q3" value="2"> La connexió Bluetooth del ratolí.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q3" value="3"> Desinstal·lar el navegador web.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 4: Interpretació de captura Wireshark</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">En una captura de Wireshark veiem repetidament paquets amb IP d'origen <code>0.0.0.0</code> i IP de destí <code>255.255.255.255</code> al port UDP 67. Quin missatge de xarxa estem observant?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q4" value="0"> Un missatge DHCP Discover emès en difusió per un client que s'acaba d'engegar i demana una adreça IP a la xarxa.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q4" value="1"> Un atac cibernètic que intenta apagar el router.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q4" value="2"> Una impressió d'un document PDF en color.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx4g_q4" value="3"> Una sincronització de fitxers de Google Drive.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

---

<div class="aules-delivery-card" data-module="XAL" style="background:var(--bg-card);border:1.5px solid #0284c7;border-radius:10px;padding:20px;margin-top:2rem;">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
    <span style="font-size:1.6rem;">📋</span>
    <div>
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Projecte Global a Aules — UD4 Projecte Final de Xarxes Locals</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Xarxes Locals (XAL) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Dissenya el projecte integral de xarxa per a un institut amb dues plantes: Cablejat estructurat, rack de 19", xarxes Wi-Fi amb punts d'accés dual-band (2,4 GHz canals 1, 6, 11 i 5 GHz), segmentació en 3 VLANs (Alumnes, Professors i Administració) interconnectades amb enllaç troncal 802.1Q i encaminades mitjançant Router SOHO amb NAT i Port Forwarding. Descarrega el model de memòria en PDF i puja el teu projecte final a Aules.
  </p>
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <button class="btn-aules-download" data-format="pdf" style="background:#0284c7;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
      <span>📥</span> Descarregar Guia de Projecte Final en PDF
    </button>
    <a href="https://aules.edu.gva.es" target="_blank" rel="noopener noreferrer" style="background:var(--border);color:var(--text-main);padding:8px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
      <span>🌐</span> Obre Aules GVA
    </a>
  </div>
</div>
