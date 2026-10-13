---
layout: default
title: "UD11: Proves d'Integració i Disseny de Plans de Proves — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD11"
---

# UD11: Proves d'Integració i Disseny de Plans de Proves

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-integ11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-stub11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-plan11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-bug11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed11)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">PROVES D'INTEGRACIÓ I DISSENY DE PLANS DE PROVES</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Estratègies d'integració (Top-Down, Bottom-Up), arnesos amb stubs i drivers, plans de proves IEEE 829 i gestió d'incidències</text>

  <!-- Bloc 1: Estratègies Integració -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-integ11)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🧩</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Estratègies</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Integració de Mòduls</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Big Bang (no incremental)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Top-Down (Descendent)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bottom-Up (Ascendent)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Model Mixt o Sandvitx</text>
  </g>

  <!-- Bloc 2: Stubs & Drivers -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-stub11)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🎭</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arnesos de Prova</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Components Ficticis</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Stubs (simulen subordinats)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Drivers (controladors cridadors)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Mocking i simulació de dades</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Aïllament de dependències</text>
  </g>

  <!-- Bloc 3: Pla IEEE 829 -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-plan11)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📋</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Pla de Proves</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Estàndard IEEE 829</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Abast &amp; Objectius de prova</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Criteris d'èxit i suspensió</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Entorns &amp; Responsabilitats</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Avaluació de riscos</text>
  </g>

  <!-- Bloc 4: Gestió d'Incidències -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-bug11)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🐛</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Gestió d'Incidències</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Bug Tracking</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Cicle de vida del defecte</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Severitat vs Prioritat</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Informes de reproducció</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Eines: Jira, GitHub Issues</text>
  </g>
</svg>
</div>

Un cop verificat que cada classe o funció individual funciona aïlladament mitjançant proves unitàries, és imprescindible comprovar com interactuen entre si quan es connecten. Les **Proves d'Integració (*Integration Testing*)** verifiquen el correcte acoblament de les interfícies i el flux de dades entre mòduls. En aquesta unitat s'estudien les estratègies d'integració incremental, l'ús d'arnesos de prova amb **stubs** i **drivers**, l'elaboració formal de **plans de proves segons l'estàndard IEEE 829** i el cicle de vida de gestió d'incidències i defectes.

---

## 11.1 Estratègies d'Integració de Mòduls

Quan s'integren múltiples components de programari, es poden seguir dues filosofies bàsiques:

### 1. Enfocament no incremental: "Big Bang"
Tots els mòduls del sistema es desenvolupen per separat i s'acoblen tots alhora en una sola operació:
- **Inconvenients greus:** Quan es produeix una fallada, és extremadament difícil esbrinar quin dels múltiples mòduls acoblats n'és el causant. Es generen col·lisions en cascada i la depuració esdevé caòtica.

### 2. Enfocaments incrementals
El sistema s'acobla i es prova progressivament afegint un component a la vegada:

- **Integració Descendent (*Top-Down*):**
  - Es comença provant el mòdul principal o d'alt nivell (ex. la interfície d'usuari o el controlador principal).
  - Com que els mòduls subordinats encara no estan programats, es substitueixen per **Stubs (*mòduls ficticis*)** que retornen dades simulades fixes.
  - Avantatge: Es verifica molt ràpidament el flux principal de l'aplicació i es poden ensenyar prototips funcionals d'alt nivell al client.

- **Integració Ascendent (*Bottom-Up*):**
  - Es comença provant els mòduls de la base (ex. utilitats de càlcul, comunicació amb el disc, entitats de dades).
  - Com que els mòduls cridadors encara no existeixen, es programen **Drivers (*controladors de prova*)** que invoquen aquests mòduls inferiors passant-los paràmetres de prova.
  - Avantatge: Garanteix que els fonaments del sistema són robustos abans de construir la lògica superior.

- **Integració Mixta o Sandvitx (*Sandwich Testing*):**
  - Combina Top-Down per als mòduls superiors i Bottom-Up per als mòduls inferiors, convergint a la capa de negoci intermèdia.

---

## 11.2 Arnesos de Prova: Stubs vs Drivers

| Component de Prova | Què és? | On s'utilitza? | Funció Principal |
| :--- | :--- | :--- | :--- |
| **Driver (Controlador)** | Programa o mètode que **crida** al mòdul que volem provar. | Integració **Bottom-Up** | Envia paràmetres d'entrada i recull els resultats per mostrar si el test ha passat. |
| **Stub (Xop / Fictici)** | Mòdul simulat que **és cridat** pel mòdul que volem provar. | Integració **Top-Down** | Simula el comportament d'un servei subordinat no disponible retornant dades predefinides. |

```java
// Exemple d'Stub per a simular una passarel·la de pagament bancària en proves d'integració:
public class PassarellaBancariaStub implements PassarellaPagament {
    @Override
    public boolean processarCobrament(String targeta, double importTotal) {
        // En lloc de connectar al banc real per Internet, retorna directament true:
        System.out.println("[STUB PROVA] Simulant pagament correcte de: " + importTotal + " €");
        return true;
    }
}
```

---

## 11.3 El Pla de Proves segons l'estàndard IEEE 829

Un **Pla de Proves (*Test Plan*)** és un document formal que estableix l'estratègia, els recursos i el calendari de les activitats de verificació d'un projecte de programari.

### Seccions essencials d'un Pla IEEE 829:
1. **Identificador i Introducció:** Objectiu del sistema i fites del projecte.
2. **Elements a provar (*Test Items*):** Versió exacta del programari, mòduls i binaris inclosos.
3. **Funcionalitats a provar (*Features to be Tested*):** Llista de requisits funcionals que seran avaluats.
4. **Funcionalitats que NO es provaran:** Exclusions expressades formalment (ex. sistemes externs fora d'abast).
5. **Estratègia i enfocament tècnic:** Tècniques emprades (caixa negra, caixa blanca, eines automàtiques).
6. **Criteris de superació i suspensió:** Llindar mínim (ex. $95\%$ de casos d'èxit sense cap defecte crític ovet).
7. **Entorn de proves (*Test Environment*):** Maquinari, xarxa, sistema operatiu i bases de dades de prova necessàries.
8. **Calendari i assignació de personal:** Qui executa cada prova i quan.
9. **Avaluació de riscos i contingències.**

---

## 11.4 Cicle de Vida d'un Defecte (*Bug Life Cycle*)

Quan un provador detecta una fallada, no s'avisa informalment per xat; es registra una **incidència formal** en una eina de seguiment (*Issue Tracker* com Jira, Bugzilla o GitHub Issues):

```
[ Nou / New ] ──▶ [ Assignat / Assigned ] ──▶ [ En Resolució / In Progress ]
                                                        │
                                                        ▼
[ Tancat / Closed ] ◀── [ Verificat / Verified ] ◀── [ Corregit / Resolved ]
         │                                              │
         └─────────────◀ (Reobert / Reopened) ──────────┘
```

- **Severitat (*Severity*):** Mesura l'impacte tècnic de la fallada sobre el sistema (Bloquejant, Greu, Menor, Trivial).
- **Prioritat (*Priority*):** Mesura la urgència amb què el negoci o el client exigeix la seua correcció (Immediata, Alta, Mitjana, Baixa).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi d'un arbre d'integració jeràrquic de mòduls
Un sistema de gestió logística està format per 6 mòduls connectats segons la següent jerarquia:
- Mòdul $M_1$ (Controlador d'Enviament) crida a $M_2$ (Gestor de Tarifes) i a $M_3$ (Gestor de Magatzem).
- $M_2$ crida a $M_4$ (Conversor de Divises).
- $M_3$ crida a $M_5$ (Control d'Estoc) i a $M_6$ (Impressor d'Etiquetes).

1. Si s'utilitza una estratègia d'**Integració Descendent (*Top-Down*)**:
   - Per a començar provant el mòdul $M_1$ en solitari, quants i quins *Stubs* és necessari programar?
   - Si s'afig $M_2$ en el següent pas, quins *Stubs* caldrà mantindre i quin es substitueix pel mòdul real?
2. Si s'utilitza una estratègia d'**Integració Ascendent (*Bottom-Up*)**:
   - Quins són els primers mòduls que es provaran?
   - Quants *Drivers* de prova serà necessari escriure per a testejar $M_4$, $M_5$ i $M_6$?

#### Exercici 2: Redacció d'un informe formal de defecte (Bug Report)
Observa la següent incidència detectada en una botiga web:
*"Quan un usuari compra 2 llibres i introdueix un codi postal de 4 xifres en lloc de 5, la pantalla es queda en blanc i el compte bancari rep el càrrec però no es genera cap comanda."*

- Redacta l'informe complet d'incidència formal completant els camps estàndard:
  - `ID`: BUG-2026-104
  - `Títol resum`: $\dots$
  - `Mòdul afectat`: $\dots$
  - `Classificació de Severitat` (Tria entre Bloquejant / Major / Menor / Trivial) amb justificació.
  - `Classificació de Prioritat` (Tria entre Immediata / Alta / Mitjana / Baixa) amb justificació.
  - `Passos detallats per a reproduir la fallada` (1, 2, 3...).
  - `Comportament observat`: $\dots$
  - `Comportament esperat`: $\dots$

#### Exercici 3: Càlcul de sobrecost d'integració Big Bang vs Integració Contínua
Un projecte de 8 mòduls requereix provar $28\text{ interfícies de comunicació}$ entre ells.
- Amb **Big Bang**: L'aïllament i depuració d'una fallada en el sistema complet triga una mitjana de $6\text{ hores de treball}$. Al llarg de la integració es produeixen $14\text{ fallades}$.
- Amb **Integració Incremental Contínua**: Com que cada mòdul s'afegeix un a un amb proves automàtiques, la causa de la fallada s'aïlla en només $45\text{ minuts}$ ($0,75\text{ hores}$).
1. Calcula les hores totals dedicades a la integració en cadascun dels dos enfocaments.
2. Si el cost per hora d'un enginyer de programari és de $40\text{ €/hora}$, calcula l'estalvi econòmic obtingut mitjançant la integració incremental contínua.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Desenvolupament d'un arnès de prova (Driver i Stub) en Java
- **Objectiu:** Provar la classe de negoci `ServeiReserves` aïllant-la de la base de dades i del servei extern d'enviament de correus.
- **Procediment de taller:**
  1. Crea la interfície `NotificadorEmail` amb el mètode `boolean enviar(String destinatari, String missatge)`.
  2. Implementa la classe real `ServeiReserves` que rep un `NotificadorEmail` en el seu constructor.
  3. Crea la classe `NotificadorEmailStub` que implementa la interfície retornant sempre `true` i guardant l'últim missatge enviat en una variable interna per a poder verificar-lo.
  4. Crea la classe executable `DriverTest` que instancie el servei amb l'stub, execute una reserva i comprove que el missatge enviat és correcte.

#### Repte 2: Disseny d'un Pla de Proves IEEE 829 per a una Aplicació Escolar
- **Objectiu:** Elaborar un document de Pla de Proves sintètic però complet per a un mòdul de gestió d'assistència escolar.
- **Seccions a completar:**
  1. Abast i identificador del pla (`TP-ASSISTENCIA-2026`).
  2. Llista de 3 funcionalitats clau a provar (marcar falta, justificar falta, informe mensual).
  3. Llista d'exclusions (la connexió amb la passarel·la SMS no serà provada en aquesta fase).
  4. Criteri de superació: zero defectes bloquejants i un mínim del $90\%$ de casos d'èxit.
  5. Matriu de riscos i pla de mitigació.

#### Repte 3: Gestió d'incidències a GitHub amb etiquetes i tancament per commit
- **Objectiu:** Experimentar el flux de gestió d'errors connectat al control de versions.
- **Procediment de taller:**
  1. Al teu repositori de GitHub, obre una nova incidència (*Issue*) titulada `bug: El càlcul de mitjana retorna NaN si la llista està buida`.
  2. Assigna l'etiqueta `bug` i `priority: high`.
  3. Al teu IDE, corregeix el codi afegint una comprovació prèvia `if (llista.isEmpty()) return 0;`.
  4. Fes el commit utilitzant la paraula clau de tancament automàtic de GitHub:
     ```bash
     git commit -m "fix: protegir el càlcul de mitjana contra llistes buides (Closes #1)"
     git push origin main
     ```
  5. Comprova a la web de GitHub com la incidència ha canviat automàticament el seu estat a `Closed`.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat les proves d'integració de les proves unitàries i de sistema.
- [ ] He comprès els riscos i ineficiències de la integració no incremental Big Bang.
- [ ] He distingit l'enfocament Top-Down (amb Stubs) de l'enfocament Bottom-Up (amb Drivers).
- [ ] He programat stubs per a simular serveis no disponibles en proves d'integració.
- [ ] He identificat les seccions principals d'un pla de proves segons l'estàndard IEEE 829.
- [ ] He documentat una fallada en un informe de defecte formal diferenciant severitat de prioritat.
- [ ] He seguit el cicle de vida d'un defecte en una eina d'Issue Tracking.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Estratègies d'Integració** | Compara críticament Big Bang, Top-Down i Bottom-Up, identificant amb precisió quants stubs i drivers calen en cada cas. | Reconeix els enfocaments d'integració i distingeix adequadament la direcció descendent de l'ascendent. | Identifica Top-Down i Bottom-Up però té dubtes sobre quan utilitzar un stub o un driver. | Creu que tots els mòduls s'han de provar sempre junts alhora (Big Bang). |
| **Implementació d'Arnesos (Stubs/Drivers)** | Desenvolupa stubs i drivers elegants mitjançant interfícies desacoblades per aïllar dependències externes. | Programa stubs funcionals que retornen dades simulades per permetre l'execució del test. | Crea proves bàsiques però acobla els mòduls directament sense emprar interfícies de simulació. | Incapaç de crear un component simulat o desconeix què és un stub de prova. |
| **Plans de Proves (IEEE 829)** | Redacta plans de proves rigorosos segons l'estàndard IEEE 829 amb criteris d'acceptació mesurables i avaluació de riscos. | Elabora plans de proves coherents detallant elements a provar, abast i entorn. | Redacta plans de proves senzills però omet criteris de suspensió o exclusions formals. | Desconeix l'estructura d'un pla de proves i redacta documents informals sense cap estàndard. |
| **Gestió de Defectes (Bug Tracking)** | Redacta informes de defecte impecables amb passos de reproducció precisos i distingeix severitat de prioritat. | Documenta incidències amb claredat en eines de seguiment assignant etiquetes i estats correctes. | Registra incidències però redacta passos de reproducció incomplets o confon severitat amb prioritat. | No sap documentar un error de programari de manera que puga ser reproduït per un altre desenvolupador. |
