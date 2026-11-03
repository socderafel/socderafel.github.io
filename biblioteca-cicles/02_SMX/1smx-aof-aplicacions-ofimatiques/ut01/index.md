---
layout: default
title: "UD1: Implantació de Suites Ofimàtiques i Llicenciament — Aplicacions Ofimàtiques"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
prev_url: "../index.md"
prev_label: "◀ Mòdul AOF Inici"
next_url: "../ut02/index.md"
next_label: "UD2 Processadors de Text ▶"
---

<div class="interactive-progress-tracker" data-unit="AOF-UD01" data-topic="index" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:1.3rem;">📊</span>
    <div>
      <div style="font-weight:700;font-size:0.92rem;color:var(--text-main);">Unitat Didàctica 1: Implantació de Suites Ofimàtiques i Llicenciament</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">Índex General i Reptes Globals de Síntesi · 5 Apartats Formatius</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <span class="badge-som-xp" style="background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:20px;font-size:0.8rem;font-weight:700;">+100 XP globals</span>
  </div>
</div>

# Unitat Didàctica 1: Implantació de Suites Ofimàtiques i Llicenciament

Benvinguts al mòdul d'**Aplicacions Ofimàtiques**. En aquesta primera unitat establirem els fonaments de la implantació de programari ofimàtic a l'empresa: des de la comparativa entre suites lliures (**LibreOffice**) i propietàries (**Microsoft 365**), passant pels models de llicenciament legal (GPL, OEM, SaaS), els mètodes de desplegament corporatiu desatès, l'anatomia interna dels formats de fitxer estàndard (**ODF** i **OOXML**), fins a les polítiques de seguretat de macros i còpies de seguretat **3-2-1**.

---

## 🗺️ Mapa Curricular de la Unitat 1

A continuació es detallen els 5 blocs de continguts que componen aquesta unitat:

| Apartat | Títol del Bloc Formatiu | Conceptes i Tecnologies Clau | Puntuació |
| :--- | :--- | :--- | :---: |
| [**1.1**](ut0101.md) | **Suites Lliures i Propietàries** | Ecosistema ofimàtic, LibreOffice vs M365, components i criteris de selecció TCO. | `+75 XP` |
| [**1.2**](ut0102.md) | **Llicenciament i Distribució** | FSF 4 llibertats, Copyleft (GPL/MPL), EULA, llicències OEM vs Retail, núvol SaaS. | `+75 XP` |
| [**1.3**](ut0103.md) | **Instal·lació i Desplegament** | Requisits maquinari, JRE, instal·lació silenciosa MSI (`/qn`), APT i Flatpak. | `+75 XP` |
| [**1.4**](ut0104.md) | **Formats Estàndard: ODF i OOXML**| Contenidor ZIP i XML, ODT/ODS/ODP vs DOCX/XLSX/PPTX, preservació PDF/A. | `+75 XP` |
| [**1.5**](ut0105.md) | **Personalització i Seguretat** | Rutes de fitxers, seguretat de macros, autoguardat i regla 3-2-1 de còpies. | `+75 XP` |

---

## 📊 Infografia d'Arquitectura i Formats de Fitxer

```
                        ANATOMIA D'UN DOCUMENT ODF (.ODT)
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │ Fitxer ZIP Contenidor (Renombrable a .zip per inspecció amb descompressor)  │
 ├──────────────────────────┬──────────────────────────────────────────────────┤
 │ content.xml              │ El contingut textual íntegre del document        │
 │ styles.xml               │ Estils de paràgraf, fonts, colors i taules       │
 │ meta.xml                 │ Metadades d'autoria, dates de revisió i temps    │
 │ settings.xml             │ Configuració de la vista i posició del cursor    │
 │ mimetype                 │ Tipus MIME del document ("application/vnd.oasis")│
 │ Pictures/                │ Subcarpeta amb totes les imatges originals       │
 └──────────────────────────┴──────────────────────────────────────────────────┘
```

---

## Reptes Globals de Síntesi de la Unitat 1 (+100 XP)

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 1: Elecció de suite segons normativa pública</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un ajuntament necessita garantir que qualsevol ciutadà puga tramitar i consultar documents administratius sense estar obligat a comprar una llicència comercial privada. Quin format i tipus de programari han d'adoptar?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q1" value="0"> Formats estàndard oberts com ODF (.odt) i PDF/A, juntament amb suites lliures d'accés universal com LibreOffice.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q1" value="1"> Formats binaris antics xifrats amb clau privada.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q1" value="2"> Únicament documents en paper manuscrit.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q1" value="3"> Fitxers de base de dades executables.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 2: Desplegament massiu en una xarxa d'aules</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un tècnic de SMX ha d'instal·lar LibreOffice a 150 equips d'un centre educatiu amb Windows. Quina és la millor estratègia tècnica per executar la tasca ràpidament?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q2" value="0"> Desplegar el paquet MSI des d'un servidor Active Directory mitjançant una directiva de grup (GPO) o executar un script automatitzat amb <code>msiexec /i ... /qn</code>.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q2" value="1"> Passar ordinador per ordinador fent clic manualment a "Següent, Següent, Acceptar".
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q2" value="2"> Demanar als alumnes que s'instal·len cadascun el programa que vulga.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q2" value="3"> Desinstal·lar el sistema operatiu.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 3: Protecció davant atacs per macro</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">Un empleat rep un correu electrònic amb un fitxer de càlcul adjunt d'un remitent desconegut. En obrir-lo, apareix un avís de seguretat que diu: «Habilite les macros per veure la factura». Quina instrucció ha de donar el tècnic de suport?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q3" value="0"> Mai no habilitar les macros d'arxius externs o desconeguts; és un mètode clàssic d'enginyeria social per executar codi maliciós i descarregar ransomware a l'equip.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q3" value="1"> Habilitar-les immediatament per poder pagar la factura.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q3" value="2"> Reenviar el correu a tots els companys de departament.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q3" value="3"> Desconnectar el ratolí de l'ordinador.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:18px 22px;margin:1.4rem 0;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <strong style="color:var(--text-main);font-size:1.02rem;">Repte Global 4: Recuperació de documents després d'una caiguda</strong>
    <span class="badge-points" style="background:rgba(59,130,246,0.12);color:#2563eb;padding:3px 9px;border-radius:12px;font-size:0.75rem;font-weight:700;">+25 XP</span>
  </div>
  <p style="margin:0 0 12px 0;font-size:0.92rem;color:var(--text-main);">S'ha produït un tall sobtat de corrent elèctric mentre un administratiu treballava en una memòria de 40 pàgines. Com ajuda la configuració de desat automàtic de LibreOffice en reiniciar el sistema?</p>
  <div class="challenge-options" style="display:flex;flex-direction:column;gap:8px;">
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q4" value="0"> En obrir de nou LibreOffice apareix automàticament l'assistent de recuperació de documents que restaura l'estat del fitxer fins a l'últim autoguardat periòdic.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q4" value="1"> Tot el disc dur queda inutilitzat i s'ha de formatar.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q4" value="2"> El document es transforma en una foto de baixa qualitat.
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.88rem;">
      <input type="radio" name="ca1g_q4" value="3"> La pantalla no torna a encendre's mai més.
    </label>
  </div>
  <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
    <button class="btn-check" data-correct="0" style="background:#2563eb;color:#fff;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;">Comprova la Resposta</button>
    <span class="feedback-msg" style="font-size:0.85rem;font-weight:600;"></span>
  </div>
</div>

---

<div class="aules-delivery-card" data-module="AOF" style="background:var(--bg-card);border:1.5px solid #0284c7;border-radius:10px;padding:20px;margin-top:2rem;">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
    <span style="font-size:1.6rem;">📋</span>
    <div>
      <h3 style="margin:0;color:var(--text-main);font-size:1.1rem;">Lliurament de Projecte Global a Aules — UD1 Projecte d'Implantació</h3>
      <p style="margin:2px 0 0 0;font-size:0.84rem;color:var(--text-muted);">Mòdul: Aplicacions Ofimàtiques (AOF) · Cicle: 1r SMX</p>
    </div>
  </div>
  <p style="font-size:0.88rem;color:var(--text-main);margin:0 0 14px 0;">
    Dissenya el pla d'implantació ofimàtica complet per a una nova empresa de serveis de 30 llocs de treball. Especifica la suite triada, el model de llicenciament, el procediment de desplegament desatès, l'estratègia de formats de fitxer corporatius (ODF/PDF-A) i el pla de còpies de seguretat 3-2-1. Descarrega el model oficial en PDF i puja la memòria final a Aules.
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
