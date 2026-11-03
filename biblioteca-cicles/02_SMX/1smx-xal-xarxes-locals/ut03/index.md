---
layout: default
title: "UD3: Interconnexió de Xarxes, Adreçament IPv4 i Subnetting — Xarxes Locals"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
prev_url: "../ut02/index.md"
prev_label: "◀ UD2 Arquitectura i Cablejat"
next_url: "../ut04/index.md"
next_label: "UD4 Equips, Wi-Fi i VLANs ▶"
---

<div class="interactive-progress-tracker" data-unit="XAL-UD03" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">🌐</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat Didàctica 3: Interconnexió de Xarxes, Adreçament IPv4 i Subnetting</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General i Reptes Globals de Síntesi · 5 Apartats Formatius</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP globals</span>
  </div>
</div>

# Unitat Didàctica 3: Interconnexió de Xarxes, Adreçament IPv4 i Subnetting

L'adreçament IP i la subdivisió en subxarxes és el nucli matemàtic i operatiu del mòdul de **Xarxes Locals**. En aquesta unitat s'aprèn a gestionar l'espai d'adreces IPv4: des de la seua estructura de 32 bits i classes històriques, passant per la normativa d'adreces privades **RFC 1918**, la notació **CIDR**, les fórmules de càlcul de subxarxes i hosts útils, fins a les tècniques avançades de **VLSM** i les comandes CLI de diagnòstic.

---

## 🗺️ Mapa Curricular de la Unitat 3

A continuació es detallen els 5 blocs de continguts que conformen la Unitat 3:

| Apartat | Títol del Bloc Formatiu | Conceptes i Tecnologies Clau | Puntuació |
| :--- | :--- | :--- | :---: |
| [**3.1**](ut0301.md) | **Adreçament IPv4 i Classes** | Estructura 32 bits, octets, Net ID vs Host ID, Classes A, B, C, D i E. | `+75 XP` |
| [**3.2**](ut0302.md) | **Adreces Privades RFC 1918** | Rangs privats (10.x, 172.16.x, 192.168.x), Loopback 127.0.0.1 i APIPA 169.254.x. | `+75 XP` |
| [**3.3**](ut0303.md) | **Matemàtiques de Subnetting** | Notació CIDR (/24 a /30), fórmules $2^s$ subxarxes i $2^h - 2$ hosts útils. | `+75 XP` |
| [**3.4**](ut0304.md) | **Càlculs Pràctics Pas a Pas** | Mètode del salt de xarxa ($256 - 	ext{octet}$), adreça de xarxa, broadcast i rang útil. | `+75 XP` |
| [**3.5**](ut0305.md) | **VLSM i Diagnòstic CLI** | Màscares de longitud variable, comandes `ipconfig`, `ip a`, `ping` i `traceroute`. | `+75 XP` |

---

## 📊 Infografia d'Anatomia d'un Octet i Subnetting

```
                          ANATOMIA DE L'OCTET CRÍTIC
 ┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
 │ Bit 7   │ Bit 6   │ Bit 5   │ Bit 4   │ Bit 3   │ Bit 2   │ Bit 1   │ Bit 0   │
 │ Pes 128 │ Pes 64  │ Pes 32  │ Pes 16  │ Pes 8   │ Pes 4   │ Pes 2   │ Pes 1   │
 └─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
      │         │         │         │         │         │         │         │
     /25       /26       /27       /28       /29       /30       /31       /32
    .128      .192      .224      .240      .248      .252      .254      .255
  Salt 128   Salt 64   Salt 32   Salt 16   Salt 8    Salt 4    Salt 2    Salt 1
  126 hosts  62 hosts  30 hosts  14 hosts  6 hosts   2 hosts     -         -
```

---

## Reptes Globals de Síntesi de la Unitat 3 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 1: Diagnòstic d'error d'adreçament a l'aula</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Dos equips de la mateixa aula estan connectats al mateix switch. L'equip A té la IP <code>192.168.1.50/24</code> i l'equip B té la IP <code>192.168.2.50/24</code>. Poden comunicar-se directament sense passar per un router?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q1" value="0"> No, perquè tenen porcions de xarxa diferents (192.168.1.0 vs 192.168.2.0); necessiten obligatòriament un router que encamine el tràfic entre ambdues xarxes.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q1" value="1"> Sí, perquè estan connectats físicament al mateix switch i la IP és indiferent.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q1" value="2"> Sí, perquè ambdós tenen el número 50 al final.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q1" value="3"> Només si el cable és de fibra òptica.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 2: Càlcul ràpid de xarxa i broadcast</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un ordinador té la IP <code>172.16.20.80/27</code>. Quina és la primera IP útil i quina és l'adreça de difusió d'aquesta subxarxa (salt 32)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q2" value="0"> Primera útil: 172.16.20.65; Broadcast: 172.16.20.95 (la subxarxa és la .64).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q2" value="1"> Primera útil: 172.16.20.1; Broadcast: 172.16.20.255.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q2" value="2"> Primera útil: 172.16.20.81; Broadcast: 172.16.20.100.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q2" value="3"> Primera útil: 172.16.20.0; Broadcast: 172.16.20.128.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 3: Motiu de la reserva de dues adreces per subxarxa</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Per quina raó tècnica no es pot assignar l'adreça <code>192.168.10.127</code> a una impressora si la màscara és <code>255.255.255.128</code> (/25)?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q3" value="0"> Perquè amb salt 128, la .127 és l'adreça de difusió (broadcast) de la primera subxarxa (tots els bits de host a 1).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q3" value="1"> Perquè el número 127 està prohibit per llei en impressores.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q3" value="2"> Perquè és una adreça de la NASA.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q3" value="3"> Perquè només es permeten números menors de 100.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 4: Economia d'adreces amb VLSM</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Quin és el benefici primordial d'implementar VLSM en una xarxa corporativa que conté subxarxes d'usuaris i diversos enllaços WAN punt a punt?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q4" value="0"> Evitar el malbaratament d'adreces IP assignant a cada segment una màscara a mida (per exemple /30 per a enllaços de 2 routers en compte de malgastar una /24 de 254 hosts).
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q4" value="1"> Fer que els cables de xarxa funcionen al doble de velocitat física.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q4" value="2"> Eliminar la necessitat de comprar switches.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="cx3g_q4" value="3"> Permetre que els equips naveguen sense necessitat de router.
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
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Projecte Global a Aules — UD3 Projecte de Subnetting</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Xarxes Locals (XAL) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Dissenya el pla d'adreçament IP complet mitjançant VLSM per a la xarxa d'un centre de formació professional a partir del bloc <code>172.20.0.0/16</code>. Es requereixen 4 subxarxes: Aula 1 (100 equips), Aula 2 (50 equips), Departaments (20 equips) i Gestió/Direcció (10 equips), a més de 2 enllaços punt a punt entre routers. Descarrega el model oficial en PDF, elabora la memòria de càlculs i puja-la a Aules.
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
