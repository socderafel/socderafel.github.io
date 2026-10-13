---
layout: default
title: "UD5: Estratègies i Tècniques de Proves de Programari — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD5"
---

# UD5: Estratègies i Tècniques de Proves de Programari

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-qa5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-levels5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-black5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-limit5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ESTRATÈGIES I TÈCNIQUES DE PROVES DE PROGRAMARI</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Fonaments del QA, cicle de vida de proves, proves de caixa negra: partició d'equivalència i valors límit</text>

  <!-- Bloc 1: Fonaments QA -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-qa5)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🎯</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fonaments QA</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Verificació &amp; Validació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Error, Defecte i Fallada</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Verificació vs Validació</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Proves estàtiques vs dinàmiques</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Proves de regressió</text>
  </g>

  <!-- Bloc 2: Nivells de Proves -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-levels5)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📶</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Nivells de Proves</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">El Model en V</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Proves unitàries (Unit)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Proves d'integració</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Proves de sistema</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Proves d'acceptació (UAT)</text>
  </g>

  <!-- Bloc 3: Caixa Negra -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-black5)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Caixa Negra</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Partició d'Equivalència</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Proves funcionals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Classes vàlides</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Classes invàlides</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Selecció de representants</text>
  </g>

  <!-- Bloc 4: Valors Límit -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-limit5)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📏</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Valors Límit</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Fronteres &amp; Taules</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Anàlisi de frontera (BVA)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Límits inferiors i superiors</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Errors d'off-by-one</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Taules de decisió</text>
  </g>
</svg>
</div>

El **Control de Qualitat del Programari (*Software Quality Assurance - SQA*)** és la disciplina dedicada a avaluar el programari per detectar defectes i garantir que compleix les especificacions requerides pel client. En aquesta unitat s'aborden els conceptes clau de verificació i validació, la cadena d'error-defecte-fallada, els diferents nivells de proves del model en V i el disseny sistemàtic de **proves de caixa negra (*Black-Box Testing*)** mitjançant la partició en classes d'equivalència i l'anàlisi de valors límit.

---

## 5.1 Fonaments de les Proves: Conceptes, Verificació i Validació

Cap procés de desenvolupament humà és infal·lible. Per garantir la qualitat, s'aplica una distinció clau:
- **Verificació (*Verification*):** Comprova si el producte en desenvolupament satisfà les condicions imposades en la fase anterior (*"Estem construint el producte correctament?"*). És un procés intern i objectiu.
- **Validació (*Validation*):** Comprova si el producte acabat satisfà les necessitats i expectatives reals de l'usuari final (*"Estem construint el producte correcte?"*).

### La cadena de l'error informàtic (IEEE Standard)
1. **Error humà (*Human Error*):** Una acció errònia o equivocació comesa per una persona (per exemple, un analista que redacta malament una fórmula o un programador que escriu `<` en lloc de `<=`).
2. **Defecte / Anomalia (*Fault / Bug*):** La manifestació física de l'error en el codi font o la documentació. Pot romandre latent en el fitxer durant anys sense causar cap dany visible.
3. **Fallada (*Failure*):** La desviació observable del funcionament del programari en temps d'execució respecte a l'esperat (el programa mostra un resultat erroni o es bloqueja).

---

## 5.2 Nivells de Proves i el Model en V

El **Model en V** relaciona cada fase del desenvolupament amb el seu nivell corresponent de proves:

```
[ Requisits d'Usuari ] ──────────────────────▶ [ Proves d'Acceptació (UAT) ]
        │                                              ▲
        ▼                                              │
[ Disseny d'Arquitectura ] ───────────────────▶ [ Proves de Sistema ]
        │                                              ▲
        ▼                                              │
[ Disseny de Detall / Mòduls ] ──────────────▶ [ Proves d'Integració ]
        │                                              ▲
        ▼                                              │
[ Codificació Font ] ─────────────────────────▶ [ Proves Unitàries ]
```

1. **Proves Unitàries (*Unit Tests*):** Verifiquen la unitat mínima de codi (un mètode, una funció o una classe aïllada). Se solen automatitzar amb eines com JUnit.
2. **Proves d'Integració (*Integration Tests*):** Verifiquen la correcta comunicació entre mòduls que col·laboren (per exemple, un servei de negoci connectant-se a la base de dades).
3. **Proves de Sistema (*System Tests*):** Verifiquen el sistema complet d'extrem a extrem, avaluant tant requisits funcionals com no funcionals (rendiment, seguretat, recuperació davant fallades).
4. **Proves d'Acceptació (*Acceptance Tests / UAT*):** Realitzades pels usuaris finals en entorns reals de preproducció per validar el lliurament formal del projecte.
5. **Proves de Regressió (*Regression Testing*):** Bateria de proves que es reexecuten automàticament cada cop que es modifica el codi per assegurar que els nous canvis no han trencat cap funcionalitat existent.

---

## 5.3 Proves de Caixa Negra (*Black-Box Testing*)

En les proves de caixa negra, el provador (*tester*) **no coneix ni inspecciona el codi font intern**. Es tracta el programa com una caixa tancada i opaca, avaluant exclusivament les respostes obtingudes a partir d'un conjunt d'entrades:

```
Entrades de Prova ──▶ ┌─────────────────────┐ ──▶ Eixida Obtinguda
                      │    CAIXA NEGRA      │            vs
                      │ (Codi no accessible)│      Eixida Esperada
                      └─────────────────────┘
```

### 1. Partició en Classes d'Equivalència (*Equivalence Partitioning*)
Com que és impossible provar totes les entrades possibles (proves exhaustives inviables), s'agrupen les entrades en conjunts o **classes d'equivalència**:
- **Classe d'Equivalència Vàlida:** Representa conjunts de dades correctes que el sistema ha d'acceptar.
- **Classe d'Equivalència Invàlida:** Representa dades incorrectes o fora de rang que el sistema ha de rebutjar generant un missatge d'error adequat.
> Regla d'or: S'escull **un sol valor representatiu** de cada classe. Si la prova passa per a aquest valor, s'assumeix que passarà per a tots els membres de la classe.

### 2. Anàlisi de Valors Límit (*Boundary Value Analysis - BVA*)
L'experiència en enginyeria de programari demostra que la majoria dels defectes es produeixen en les **fronteres dels rangs** a causa d'errors d'un pas (*off-by-one errors*, confusions entre `<` i `<=`).
- Per a un interval vàlid $[A, B]$:
  - Es proven els límits inferiors: $A-1$ (invàlid), $A$ (vàlid), $A+1$ (vàlid).
  - Es proven els límits superiors: $B-1$ (vàlid), $B$ (vàlid), $B+1$ (invàlid).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Disseny de Casos de Prova amb Partició d'Equivalència i Valors Límit
Un camp d'un formulari d'admissió a un cicle formatiu demana l'**edat de l'aspirant**:
- El reglament estableix que l'aspirant ha de tindre una edat compresa estrictament entre $16$ i $65\text{ anys}$ (ambdós inclosos).
- El camp només admet nombres enters positius.

1. Identifica totes les **classes d'equivalència (CE)**:
   - $CE_1$ (Vàlida): $\dots$
   - $CE_2$ (Invàlida per baix): $\dots$
   - $CE_3$ (Invàlida per dalt): $\dots$
   - $CE_4$ (Invàlida per tipus de dada): $\dots$
2. Aplica la tècnica d'**Anàlisi de Valors Límit (BVA)** sobre els extrems $16$ i $65$. Quins són exactament els 6 valors crítics de prova a testejar?
3. Construeix una taula formal de casos de prova amb columnes: `ID`, `Dada d'Entrada`, `Classe / Motiu`, `Resultat Esperat`.

#### Exercici 2: Disseny de Casos de Prova mitjançant Taula de Decisió
Un portal de venda d'entrades de cinema aplica descomptes automàtics segons les següents regles de negoci:
- Condició 1 ($C_1$): L'usuari és membre del Club Cine (`Sí / No`).
- Condició 2 ($C_2$): És el "Dia de l'Espectador" - dimecres (`Sí / No`).
- Condició 3 ($C_3$): Compra més de 4 entrades en la mateixa comanda (`Sí / No`).
- Regles de descompte:
  - Si és membre del Club i és dimecres: Rep un $30\%$ de descompte.
  - Si és membre del Club o és dimecres (però no ambdues coses): Rep un $15\%$ de descompte.
  - Si compra més de 4 entrades: Rep un $5\%$ addicional acumulable sobre qualsevol de les anteriors.
  - Si no compleix cap condició: Preu base ($0\%$ de descompte).

1. Quantes combinacions possibles ($2^k$) té la taula de decisió per a $k = 3$ condicions booleanes?
2. Dissenya la taula de decisió completa amb les $8$ regles ($R_1$ a $R_8$) indicant l'acció final (percentatge de descompte exacte aplicat).

#### Exercici 3: Càlcul de densitat de defectes i taxa d'eficiència de proves
Un departament de QA avalua una aplicació de gestió hospitalària de $40.000\text{ línies de codi (LOC)}$ ($40\text{ KLOC}$).
- S'han executat un total de $N = 650\text{ casos de prova}$.
- $598$ casos han passat amb èxit i $52$ han fallat, descobrint un total de $36\text{ defectes únics}$.
- Després de posar en producció l'aplicació, els usuaris van trobar $9\text{ defectes nous}$ que no havien estat detectats per les proves.

1. Calcula la **Taxa d'Èxit de Proves (*Pass Rate*)**:
   $$\text{Pass Rate (\%)} = \frac{\text{Casos Exitossos}}{N} \times 100$$
2. Calcula l'**Eficiència de Detecció de Defectes (*Defect Detection Efficiency - DDE*)**:
   $$DDE = \frac{\text{Defectes trobats en proves}}{\text{Defectes totals (proves + producció)}} \times 100$$
3. Calcula la **Densitat de Defectes en Producció** per cada $1.000\text{ línies de codi (KLOC)}$:
   $$\text{Densitat} = \frac{\text{Defectes de producció}}{\text{Mida en KLOC}}$$

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Especificació d'un Pla de Proves per a un Mòdul d'Autenticació
- **Objectiu:** Redactar la matriu de casos de prova de caixa negra per a una pantalla d'inici de sessió web.
- **Criteris a verificar:**
  1. Camp `usuari`: entre 4 i 20 caràcters alfanumèrics.
  2. Camp `clau`: mínim 8 caràcters, almenys una majúscula, un número i un símbol especial.
  3. Comportament de seguretat: després de 3 intents fallits consecutius, el compte queda blocat durant 15 minuts.
- **Lliurable:** Taula amb un mínim de 8 casos de prova cobrint casos vàlids, invàlids i el límit de bloqueig d'intents.

#### Repte 2: Proves de Validació de Dates de Naixement
- **Objectiu:** Identificar defectes de frontera en càlculs de calendaris.
- **Regla a provar:** Un mètode `esAnyDeTraspas(int any)` que determina si un any té 366 dies segons la regla gregoriana:
  > Un any és de traspàs si és divisible per 4, excepte si és divisible per 100, llevat que també siga divisible per 400.
- **Procediment:**
  1. Dissenya els casos de prova de caixa negra per a avaluar:
     - Anys no divisibles per 4 (Ex. 2023).
     - Anys ordinaris de traspàs (Ex. 2024).
     - Anys seculars no de traspàs (Ex. 1900, 2100).
     - Anys seculars de traspàs (Ex. 1600, 2000, 2400).
  2. Documenta per a cadascun l'entrada i l'eixida booleana esperada.

#### Repte 3: Matriu de Traçabilitat de Requisits (RTM)
- **Objectiu:** Garantir que no queda cap requisit del client sense el seu cas de prova associat.
- **Procediment de taller:**
  1. Pren 4 requisits funcionals (`RF-01` a `RF-04`) d'una botiga de lloguer de bicicletes.
  2. Construeix una matriu de traçabilitat en format Markdown que relacione cada requisit amb els seus casos de prova (`CP-01`, `CP-02`, etc.) i l'estat d'execució (`Pendent`, `Passat`, `Fallat`).
  3. Verifica que la cobertura de requisits és del $100\%$ (cap requisit sense associar).

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat clarament entre error humà, defecte en el codi i fallada observable.
- [ ] He distingit la verificació interna de la validació amb l'usuari final.
- [ ] He identificat els 4 nivells de proves del model en V (unitàries, integració, sistema, acceptació).
- [ ] He dissenyat proves de caixa negra sense dependre del codi font intern.
- [ ] He dividit dominis d'entrada en classes d'equivalència vàlides i invàlides.
- [ ] He seleccionat els valors frontera mitjançant l'anàlisi de valors límit (BVA).
- [ ] He calculat mètriques d'eficiència de proves i densitat de defectes.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Conceptes i Cicle de QA** | Domina la terminologia de l'estàndard IEEE (error, defecte, fallada) i el model en V amb precisió i rigor. | Distingeix verificació de validació i reconeix els diferents nivells de proves. | Reconeix els nivells de proves però confon defecte amb fallada o verificació amb validació. | Desconeix el propòsit de les proves o creu que només serveixen per provar que el codi compila. |
| **Partició d'Equivalència** | Identifica totes les classes d'equivalència vàlides i invàlides minimitzant casos redundants amb criteri professional. | Defineix classes vàlides i invàlides i escull representants adequats per a cadascuna. | Identifica classes vàlides però oblida contemplar les entrades no vàlides o fora de format. | Escull valors aleatoris sense cap mètode de partició ni agrupació lògica. |
| **Anàlisi de Valors Límit (BVA)** | Aplica sistemàticament la tècnica de frontera en tots els límits inferiors i superiors detectant fallades off-by-one. | Selecciona els valors immediatament anteriors, exactes i posteriors a les fronteres d'interval. | Prova els valors límit exactes però oblida testejar els valors que queden just a fora de la frontera. | No realitza proves en els extrems dels intervals, provant només valors centrals ordinaris. |
| **Taules de Decisió i Traçabilitat** | Construeix taules de decisió complexes amb múltiples condicions booleanes i garanteix una traçabilitat del 100% (RTM). | Dissenya taules de decisió coherents i associa casos de prova als requisits funcionals. | Elabora taules de decisió però oblida regles combinatòries o té llacunes de traçabilitat. | Incapaç de plantejar una taula de decisió o no vincula les proves amb els requisits del sistema. |
