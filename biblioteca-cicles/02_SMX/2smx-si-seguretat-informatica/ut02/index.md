---
layout: default
title: "Seguretat Informàtica — UT02 Principis de Seguretat i Gestió de Riscos"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT02"
---

# UT02 — Principis de Seguretat i Gestió de Riscos

La seguretat informàtica no és un estat binari de «segur o insegur», sinó un **procés continu de gestió del risc**. En aquesta unitat s'estudien els pilars fonamentals de la seguretat de la informació, els tipus d'amenaces que assetgen els sistemes i com avaluar matemàticament l'exposició d'una organització.

---

## 📌 1. La Tríada CIA i els Pilars de la Ciberseguretat

El model canònic de seguretat de la informació es basa en tres principis indissolubles coneguts com la **Tríada CIA** (*Confidentiality, Integrity, Availability*):

```mermaid
graph TD
    subgraph "🏛️ TRÍADA CIA & PILARS DE SEGURETAT"
        C["🔒 Confidencialitat<br/>(Només personal autoritzat)"]
        I["🛡️ Integritat<br/>(Dades no alterades ni corrompudes)"]
        A["⚡ Disponibilitat<br/>(Accessibles quan calgui)"]
    end
    C --- I
    I --- A
    A --- C

    subgraph "✨ Pilars Complementaris"
        AU["👤 Autenticitat: Verificar qui diu que és"]
        NR["✍️ No-repudi: Impossibilitat de negar l'autoria"]
        TR["📋 Traçabilitat / Audibilitat: Registre temporal dels fets"]
    end
```

### Definició detallada dels principis:
1. **Confidencialitat (C):** Garanteix que la informació només és accessible a persones, processos o sistemes autoritzats. Es protegeix mitjançant:
   - Xifratge de dades en repòs (*at rest*) i en trànsit (*in transit*).
   - Llistes de control d'accés (ACL) i autenticació robusta.
2. **Integritat (I):** Assegura que la informació i els mètodes de processament són exactes, complets i no han estat modificats sense autorització. Es protegeix mitjançant:
   - Funcions resum criptogràfiques (Hash: SHA-256).
   - Signatures digitals i sistemes de control de versions.
3. **Disponibilitat (A):** Assegura que els usuaris autoritzats tenen accés a la informació i als serveis associats quan ho necessiten. Es protegeix mitjançant:
   - Redundància de maquinari (RAID, fonts d'alimentació redundants).
   - Sistemes d'alimentació ininterrompuda (SAI) i còpies de seguretat.
   - Equilibradors de càrrega i protecció contra atacs de denegació de servei (DDoS).

| Principi | Amenaça Típica | Mecanisme de Defensa |
| :--- | :--- | :--- |
| **Confidencialitat** | Sniffing, fugues de dades, espionatge industrial | Xifratge AES/TLS, permisos NTFS/POSIX |
| **Integritat** | Modificació de bases de dades per injecció SQL, malware | Hashing SHA-256, signatures digitals, backups WORM |
| **Disponibilitat** | Inundacions, atacs DoS/DDoS, fallades elèctriques, Ransomware | SAIs, rèpliques al núvol, clústers en alta disponibilitat (HA) |
| **No-repudi** | Negació d'una transacció de comerç electrònic | Certificats digitals X.509 de signatura electrònica |

---

## 📌 2. Amenaces, Vulnerabilitats i Vectors d'Atac

Per a defensar eficaçment un sistema cal distingir entre el concepte d'amenaça i el de vulnerabilitat:

- **Actiu (Asset):** Tot recurs de valor per a l'empresa que cal protegir (bases de dades de clients, servidors de producció, personal, imatge de marca).
- **Vulnerabilitat (Vulnerability):** Feblesa o defecte en el disseny, implementació o configuració d'un sistema que pot ser aprofitat per un atacant (per exemple, un port SSH amb contrasenya per defecte o un sistema operatiu sense pedaçar).
- **Amenaça (Threat):** Qualsevol esdeveniment que pot causar dany als actius de l'organització mitjançant l'explotació d'una vulnerabilitat.
- **Impacte (Impact):** Mesura del dany o pèrdua produïda a l'organització si l'amenaça es materialitza.

```mermaid
flowchart LR
    A["👤 Atacant / Amenaça"] -->|Explota| V["🕳️ Vulnerabilitat (Fallada de programari)"]
    V -->|Compromet| AC["💾 Actiu (Base de dades)"]
    AC -->|Genera| I["💥 Impacte Negatiu (Econòmic / Reputacional)"]
```

### Classificació de les Amenaces segons l'Origen:
1. **Humanes involuntàries (accidents):** Errors de configuració per part de l'administrador, esborrats accidentals de dades o pèrdua de dispositius portàtils no xifrats. Representen més del 60% dels incidents!
2. **Humanes intencionades (atacs):** 
   - Atacs interns (*Insider threats*): Empleats descontents o subornats que utilitzen els seus privilegis legítims per a robar o sabotejar dades.
   - Atacs externs: Ciberdelinqüents, bandes de ransomware, espionatge d'alt nivell.
3. **Amenaces ambientals i naturals:** Incendis en el CPD, terratrèmols, inundacions per canonades d'aigua superiors, llamps i sobretensions atmosfèriques.
4. **Fallades tècniques:** Avaries de discs durs, sobreescalfament del processador, degradació de bateries o talls del subministrament elèctric de la xarxa pública.

---

## 📌 3. Anàlisi i Gestió de Riscos: Metodologia Quantitativa

El risc és la probabilitat que una amenaça concreta exploti una vulnerabilitat existent i provoqui un impacte mesurable sobre l'organització:

$$Risc = Probabilitat \times Impacte$$

### La Matriu de Riscos $3 \times 3$:
Classifiquem la **Probabilitat** (Baixa = 1, Mitjana = 2, Alta = 3) i l'**Impacte** (Baix = 1, Mitjà = 2, Alt = 3) per obtenir el Nivell de Risc resultant:

| Probabilitat \ Impacte | Impacte Baix (1) | Impacte Mitjà (2) | Impacte Alt (3) |
| :---: | :---: | :---: | :---: |
| **Alta (3)** | Risc Mitjà (3) | 🟡 **Risc Alt (6)** | 🔴 **Risc Crític (9)** |
| **Mitjana (2)** | Risc Baix (2) | Risc Mitjà (4) | 🟡 **Risc Alt (6)** |
| **Baixa (1)** | 🟢 **Risc Negligible (1)** | Risc Baix (2) | Risc Mitjà (3) |

```mermaid
flowchart TD
    subgraph "🔄 Cicle de Vida de la Gestió de Riscos (MAGERIT / ISO 27005)"
        P1["1. Identificació d'Actius i Amenaces"] --> P2["2. Avaluació de Vulnerabilitats i Probabilitat"]
        P2 --> P3["3. Càlcul del Nivell de Risc Inherent"]
        P3 --> P4["4. Selecció i Aplicació de Controls de Seguretat"]
        P4 --> P5["5. Avaluació del Risc Residual"]
        P5 -->|Monitorització Contínua| P1
    end
```

### Estratègies de Tractament del Risc:
Davant d'un risc calculat, la direcció pot optar per 4 estratègies:
- **Mitigar / Reduir:** Aplicar salvaguardes (p. ex., instal·lar un tallafoc, configurar un SAI) per a reduir la probabilitat o l'impacte a un nivell tolerable.
- **Transferir:** Desplaçar el cost financer de l'impacte a un tercer mitjançant assegurances de ciberseguretat o contractant serveis al núvol amb SLA (Acord de Nivell de Servei).
- **Evitar:** Eliminar l'activitat que genera el risc (p. ex., donar de baixa un servidor obsolet que ja no rep actualitzacions).
- **Acceptar:** Assumir el **risc residual** quan el cost de la salvaguarda supera amb escreix el valor de l'actiu protegit.

---

## 📌 4. Exercici Pràctic d'Aula: Avaluació d'un Servidor Web

**Supòsit:** Una empresa comercial disposa d'un servidor web local on els clients consulten catàlegs i fan comandes. No disposa de SAI i la contrasenya del panell d'administració és `admin123`.

1. **Actius implicats:** Servidor físic, base de dades de clients, reputació de l'empresa.
2. **Vulnerabilitats identificades:** Contrasenya dèbil per defecte; absència de protecció contra talls elèctrics.
3. **Amenaces:** Atac de força bruta per Internet (Probabilitat Alta, Impacte Alt = Risc 9); Tall de subministrament elèctric (Probabilitat Mitjana, Impacte Mitjà = Risc 4).
4. **Pla de mitigació:** 
   - Canviar la contrasenya per una clau de 16 caràcters amb autenticació de doble factor (MFA).
   - Instal·lar un SAI On-line de 1500 VA amb connexió USB de gestió automàtica d'apagada.

---

## 🎨 Infografia Tècnica: La Tríada CIA

<div style="text-align: center; margin: 25px 0;">
<svg viewBox="0 0 840 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="max-width: 840px; border-radius: 16px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); font-family: system-ui, sans-serif;">
  <defs>
    <linearGradient id="gradCIA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="cardConf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="cardInteg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="cardDisp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>
  <rect width="840" height="260" rx="16" fill="url(#gradCIA)" />
  <text x="420" y="38" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" letter-spacing="1">🏛️ LA TRÍADA CIA EN SEGURETAT INFORMÀTICA</text>
  <text x="420" y="60" text-anchor="middle" fill="#94a3b8" font-size="13">Els tres pilars essencials per a la gestió de riscos i la protecció d'actius TIC</text>

  <!-- Card 1: Confidencialitat -->
  <g transform="translate(30, 80)">
    <rect width="240" height="150" rx="12" fill="url(#cardConf)" fill-opacity="0.2" stroke="#3b82f6" stroke-width="2" />
    <circle cx="120" cy="35" r="22" fill="#3b82f6" />
    <text x="120" y="42" text-anchor="middle" font-size="20" fill="#ffffff">🔒</text>
    <text x="120" y="75" text-anchor="middle" fill="#60a5fa" font-size="16" font-weight="bold">CONFIDENCIALITAT</text>
    <text x="120" y="98" text-anchor="middle" fill="#e2e8f0" font-size="12">Només personal autoritzat</text>
    <text x="120" y="118" text-anchor="middle" fill="#94a3b8" font-size="11">Xifratge AES-256 · TLS 1.3</text>
    <text x="120" y="134" text-anchor="middle" fill="#94a3b8" font-size="11">Control d'Accés · ACLs</text>
  </g>

  <!-- Card 2: Integritat -->
  <g transform="translate(300, 80)">
    <rect width="240" height="150" rx="12" fill="url(#cardInteg)" fill-opacity="0.2" stroke="#10b981" stroke-width="2" />
    <circle cx="120" cy="35" r="22" fill="#10b981" />
    <text x="120" y="42" text-anchor="middle" font-size="20" fill="#ffffff">🛡️</text>
    <text x="120" y="75" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">INTEGRITAT</text>
    <text x="120" y="98" text-anchor="middle" fill="#e2e8f0" font-size="12">Dades exactes sense alteració</text>
    <text x="120" y="118" text-anchor="middle" fill="#94a3b8" font-size="11">Funcions Hash SHA-256</text>
    <text x="120" y="134" text-anchor="middle" fill="#94a3b8" font-size="11">Signatures Digitals X.509</text>
  </g>

  <!-- Card 3: Disponibilitat -->
  <g transform="translate(570, 80)">
    <rect width="240" height="150" rx="12" fill="url(#cardDisp)" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2" />
    <circle cx="120" cy="35" r="22" fill="#f59e0b" />
    <text x="120" y="42" text-anchor="middle" font-size="20" fill="#ffffff">⚡</text>
    <text x="120" y="75" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">DISPONIBILITAT</text>
    <text x="120" y="98" text-anchor="middle" fill="#e2e8f0" font-size="12">Accés garantit quan calgui</text>
    <text x="120" y="118" text-anchor="middle" fill="#94a3b8" font-size="11">Redundància RAID · SAIs</text>
    <text x="120" y="134" text-anchor="middle" fill="#94a3b8" font-size="11">Clústers HA · Còpies 3-2-1</text>
  </g>
</svg>
</div>

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Qüestions de Comprensió i Fonaments
1. **Diferenciació de conceptes:** Explica amb un exemple de la vida real d'un taller informàtic la diferència entre un **actiu**, una **amenaça**, una **vulnerabilitat** i un **impacte**.
2. **La paradoxa de la disponibilitat:** Per què augmentar la seguretat de vegades pot perjudicar la disponibilitat o usabilitat del sistema per als usuaris? Com pot un administrador trobar el punt d'equilibri?
3. **Càlcul de Matriu de Riscos:** Un hospital té un servidor d'historials mèdics amb la vulnerabilitat que no està protegit contra ransomware. La probabilitat d'infecció és Alta (3) i l'impacte en la salut dels pacients és Alt (3).
   - Quin és el nivell de risc inicial segons la fórmula $Risc = P \times I$?
   - Si s'aplica una política de còpies de seguretat diàries aïllades en fred (*air-gapped*), com canvia l'impacte i el risc residual?

### Bloc B: Repte Pràctic de Taller — Auditoria d'una Pime
Una gestoria amb 8 ordinadors i 1 servidor local de dades et demana fer una avaluació de riscos bàsica:
- Identifica **5 vulnerabilitats típiques** que solen trobar-se en aquests entorns (ex: contrasenyes en post-its, ús de comptes amb permisos d'administrador, sistemes operatius sense actualitzar, falta de còpies de seguretat fora de l'oficina, ús de xarxa Wi-Fi oberta sense segmentar).
- Dissenya una taula d'actius, probabilitat, impacte i proposa **3 mesures de mitigació immediates a cost zero o molt baix**.

### Bloc C: Llista d'Autoavaluació de l'Alumnat
- [ ] Sé identificar quin pilar de la tríada CIA es veu afectat davant d'un incident concret.
- [ ] Sé utilitzar la matriu de risc $3 \times 3$ per a calcular i prioritzar amenaces.
- [ ] Sé redactar un pla d'acció amb mesures preventives de mitigació.
