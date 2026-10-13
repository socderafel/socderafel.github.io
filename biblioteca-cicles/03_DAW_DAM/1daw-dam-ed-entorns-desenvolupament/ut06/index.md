---
layout: default
title: "UD6: Proves de Caixa Blanca i Mesura de Cobertura de Codi — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD6"
---

# UD6: Proves de Caixa Blanca i Mesura de Cobertura de Codi

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-wb6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cfg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mccabe6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cov6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed6)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">PROVES DE CAIXA BLANCA I MESURA DE COBERTURA DE CODI</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Grafs de flux de control (CFG), camins bàsics independents, complexitat ciclomàtica de McCabe i criteris de cobertura</text>

  <!-- Bloc 1: Caixa Blanca -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-wb6)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔍</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Caixa Blanca</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Proves Estructurals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Anàlisi del codi font intern</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Camins d'execució lògica</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Condicions i bucles</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Detecció de codi inassolible</text>
  </g>

  <!-- Bloc 2: Graf de Flux (CFG) -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cfg6)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🕸️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Graf de Flux (CFG)</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Nodes i Arestes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nodes seqüencials (N)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Arestes de transició (E)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Nodes predicat (if, while)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Regions del pla (R)</text>
  </g>

  <!-- Bloc 3: Mètrica de McCabe -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mccabe6)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Complexitat V(G)</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Ciclomàtica</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• V(G) = E - N + 2</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• V(G) = Predicats + 1</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Camins bàsics independents</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Llindar límit recomanat &lt;= 10</text>
  </g>

  <!-- Bloc 4: Cobertura de Codi -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cov6)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cobertura de Codi</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Criteris de Mesura</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Cobertura de sentències</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cobertura de branques (Branch)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Condicions múltiples (MCC)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Eines de cobertura (JaCoCo)</text>
  </g>
</svg>
</div>

Mentre que les proves de caixa negra avaluen el sistema des de l'exterior sense mirar el codi, les **Proves de Caixa Blanca (*White-Box Testing*)** inspeccionen directament l'estructura lògica del codi font. Mitjançant la construcció de **Grafs de Flux de Control (CFG)**, el càlcul de la **Complexitat Ciclomàtica de McCabe** i la mesura de la **cobertura de codi**, els enginyers de programari garanteixen que cada branca, decisió i camí d'execució ha estat provat almenys una vegada.

---

## 6.1 Fonaments de les Proves de Caixa Blanca

Les proves estructurals es basen en la premissa que no es pot considerar provat un programa si determinades línies, branques o bucles no s'han executat mai durant la bateria de proves.

### Objectius de la Caixa Blanca:
1. Garantir que **totes les instruccions independents** d'un mòdul s'executen com a mínim un cop.
2. Exercitar totes les **decisions lògiques** en les seues dues variants: vertadera (`true`) i falsa (`false`).
3. Executar tots els **bucles** en els seus límits operatius (zero iteracions, una iteració i màxim nombre d'iteracions).
4. Detectar **codi inassolible (*dead code*)** i variables no inicialitzades abans del seu ús.

---

## 6.2 El Graf de Flux de Control (*Control Flow Graph - CFG*)

Un CFG és una representació gràfica de tots els camins que pot seguir l'execució d'un mètode:
- **Node ($N$):** Representa una sentència o un bloc seqüencial d'instruccions que s'executen sense cap salt condicional intern.
- **Aresta ($E$):** Fletxa dirigida que indica la transferència del fil d'execució d'un node a un altre.
- **Node Predicat:** Node que conté una condició lògica (`if`, `while`, `for`, `case`) i del qual ixen **dues o més arestes alternatives**.

### Representació de les estructures bàsiques:
```
1. Seqüència:         (A) ──▶ (B)
2. Decisió (if):      (Condició) ──[true]──▶ (Bloc True) ──▶ (Fi If)
                           │                                   ▲
                           └───────────[false]─────────────────┘
3. Bucle (while):     (Condició) ──[true]──▶ (Cos Bucle) ──┐
                           │   ▲                           │
                           │   └───────────────────────────┘
                           └───────────[false]──▶ (Següent)
```

---

## 6.3 La Mètrica de Complexitat Ciclomàtica de McCabe

Proposada per Thomas McCabe en 1976, la **Complexitat Ciclomàtica $V(G)$** mesura la quantitat de lògica condicional d'un programa i determina el nombre mínim de casos de prova necessaris per a cobrir tots els seus **camins bàsics independents**.

### Fórmules de càlcul:
Per a un graf connectat amb un sol punt d'entrada i un sol punt d'eixida ($P = 1$):

1. **Fórmula d'Arestes i Nodes:**
   $$V(G) = E - N + 2$$
   on $E$ és el nombre d'arestes i $N$ el nombre de nodes.

2. **Fórmula dels Nodes Predicat:**
   $$V(G) = P_{\text{redicats}} + 1$$
   on $P_{\text{redicats}}$ és el nombre de condicions booleanes simples del mètode (`if`, `while`, `for`, `case`). Si una condició conté operadors compostos (`&&` o `||`), cadascun compta com un predicat addicional.

3. **Fórmula de Regions del Pla:**
   $$V(G) = R$$
   on $R$ és el nombre de regions tancades formades pel graf més 1 (la regió infinita exterior).

### Interpretació del llindar de complexitat:
| Valor $V(G)$ | Nivell de Complexitat | Risc de Manteniment | Testabilitat |
| :---: | :--- | :--- | :--- |
| **$1 - 10$** | Programa senzill i modular | Molt baix | Fàcil de provar exhaustivament |
| **$11 - 20$** | Complexitat moderada | Mitjà | Requereix una suite de proves rigorosa |
| **$21 - 50$** | Programa d'alta complexitat | Alt | Molt difícil de provar; **candidat a refactoritzar** |
| **$> 50$** | Programa caòtic (*Codi Espagueti*) | Inadmissible | Pràcticament intestejable |

---

## 6.4 El Mètode dels Camins Bàsics Independents

Un **camí independent** és qualsevol recorregut pel graf des del node inicial fins al node final que incorpora almenys una aresta nova que no s'havia recorregut en cap altre camí anterior.

> [!IMPORTANT]
> El nombre exacte de camins bàsics independents coincideix matemàticament amb la **Complexitat Ciclomàtica $V(G)$**. Dissenyar un cas de prova per a cadascun d'aquests camins garanteix que cada línia i cada branca del codi s'ha executat almenys una vegada.

---

## 6.5 Criteris de Cobertura de Codi (*Code Coverage*)

1. **Cobertura de Sentències (*Statement Coverage*):**
   $$\text{Cobertura Sentències (\%)} = \frac{\text{Línies executades}}{\text{Total línies de codi}} \times 100$$
   És el criteri més dèbil. Un $100\%$ de cobertura de sentències pot deixar branques booleanes senceres sense provar.

2. **Cobertura de Branques o Decisions (*Branch Coverage*):**
   $$\text{Cobertura Branques (\%)} = \frac{\text{Branques (true/false) avaluades}}{\text{Total branques possibles}} \times 100$$
   Exigeix que cada decisió s'haja avaluat tant a `true` com a `false`. És el criteri estàndard recomanat en la indústria.

3. **Cobertura de Condicions Múltiples (*Multiple Condition Coverage - MCC*):**
   Per a decisions amb operadors lògics (Ex. `if (A && B)`), exigeix avaluar totes les combinacions de la taula de veritat ($TT, TF, FT, FF$).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Càlcul de Complexitat Ciclomàtica d'un mètode de Facturació
Analitza el següent mètode en Java:

```java
public double calcularTarifa(int edat, boolean esSoci, double base) {
    double tarifa = base;
    if (edat < 18) {                     // Predicat 1
        tarifa = base * 0.50;
    } else if (edat >= 65) {             // Predicat 2
        tarifa = base * 0.70;
    }
    if (esSoci) {                        // Predicat 3
        tarifa = tarifa - 5.0;
    }
    if (tarifa < 0) {                    // Predicat 4
        tarifa = 0;
    }
    return tarifa;
}
```

1. Dibuixa el **Graf de Flux de Control (CFG)** identificant cadascun dels nodes i arestes.
2. Calcula la **Complexitat Ciclomàtica $V(G)$** aplicant les dues fórmules:
   - Fórmula $V(G) = E - N + 2$.
   - Fórmula $V(G) = P + 1$.
3. Quin és el nombre mínim de casos de prova necessaris per a garantir la cobertura de tots els camins bàsics independents?

#### Exercici 2: Demostració de la debilitat de la Cobertura de Sentències
Considera el següent fragment de codi:

```java
public int dividir(int numerador, int denominador) {
    int resultat = 0;
    if (denominador != 0) {
        resultat = numerador / denominador;
    }
    return resultat;
}
```

1. Si es dissenya un únic cas de prova amb `numerador = 10` i `denominador = 2`:
   - Quantes sentències s'executen del mètode? Quin percentatge de **Cobertura de Sentències** s'assoleix?
   - S'ha provat la branca en què `denominador == 0`?
2. Quina és la **Cobertura de Branques** assolida amb aquest únic cas de prova? Què demostra aquest exemple respecte a la suficiència de la cobertura de sentències?

#### Exercici 3: Anàlisi d'impacte d'operadors compostos `&&` i `||`
Considera la següent sentència condicional:
```java
if (saldo >= import && compteActiu && !esFestiu) {
    processarTransferencia();
}
```
1. Quants predicats independents genera aquesta condició composta a nivell de codi màquina i graf de flux?
2. Calcula la complexitat ciclomàtica d'aquest mètode sabent que cadascun dels operadors `&&` avalua en curtcircuit (*Short-circuit evaluation*).
3. Quants casos de prova es requereixen per a complir la Cobertura de Condicions Múltiples (MCC)?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Especificació de Camins Bàsics Independents
- **Objectiu:** Extreure la base de camins independents del mètode `calcularTarifa` de l'Exercici 1.
- **Procediment de taller:**
  1. Identifica el Camí 1 (camí directe o línia de base).
  2. Genera els camins següents modificant progressivament cadascuna de les decisions.
  3. Per a cadascun dels camins resultants, defineix valors concrets d'entrada (`edat`, `esSoci`, `base`) i el resultat esperat que forcen la CPU a travessar eixe camí exacte.

#### Repte 2: Mesura de Cobertura amb l'eina JaCoCo en un IDE
- **Objectiu:** Configurar i analitzar un informe visual de cobertura en Java.
- **Procediment de taller:**
  1. Obre un projecte amb un mètode condicional i la seua classe de test en IntelliJ IDEA o Eclipse.
  2. Executa la bateria de proves amb l'opció **"Run with Coverage"**.
  3. Inspecciona els colors de la barra lateral de l'editor de codi:
     - **Verd:** Línia completament coberta per les proves.
     - **Groc:** Branca parcialment coberta (només s'ha provat el `true` o el `false`).
     - **Roig:** Línia mai executada en cap test (*dead code* o manca de prova).
  4. Afig un nou cas de prova per convertir les línies grogues en verdes assolint el $100\%$ de cobertura de branques.

#### Repte 3: Refactorització d'un mètode amb $V(G) > 15$
- **Objectiu:** Reduir la complexitat ciclomàtica d'un mètode complex dividint-lo en mètodes auxiliars més simples (*Extract Method*).
- **Procediment de taller:**
  1. Pren un mètode amb múltiples `if` niats i bucles que sumen $V(G) = 16$.
  2. Extreu la lògica de validació i de càlcul d'impostos en dos mètodes privats independents.
  3. Recalcula el $V(G)$ de cadascun dels nous mètodes i comprova que cap d'ells supera el llindar recomanat de $10$.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat la perspectiva de caixa blanca de la de caixa negra.
- [ ] He dibuixat el Graf de Flux de Control (CFG) a partir d'un fragment de codi font.
- [ ] He calculat la Complexitat Ciclomàtica $V(G)$ utilitzant les fórmules de McCabe.
- [ ] He identificat el conjunt de camins bàsics independents del graf.
- [ ] He dissenyat casos de prova específics per a recórrer cadascun dels camins.
- [ ] He comprès per què la cobertura de branques és superior a la de sentències.
- [ ] He utilitzat eines de mesura de cobertura (JaCoCo) per identificar codi no provat.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Construcció del Graf (CFG)** | Dibuixa grafs de flux impecables identificant amb precisió nodes de sentència, predicats i arestes en bucles i decisions. | Construeix el graf de flux correctament reflectint l'estructura lògica del mètode. | Dibuixa un graf senzill però confon sentències seqüencials amb punts de decisió. | Incapaç de traslladar les estructures de control a un graf dirigit. |
| **Càlcul de McCabe V(G)** | Aplica ambdues fórmules de McCabe amb èxit, descompon predicats compostos i avalua el risc de mantenibilitat. | Calcula la complexitat ciclomàtica correctament emprant la fórmula d'arestes i nodes o predicats. | Calcula la mètrica però oblida que els operadors lògics (&&, \|\|) generen predicats addicionals. | Aplica les fórmules de forma errònia o desconeix què mesura la complexitat ciclomàtica. |
| **Camins Independents** | Identifica la base completa de camins bàsics independents i dissenya jocs de proves que els recorren al 100%. | Defineix els camins independents principals i assigna dades de prova representatives. | Identifica camins redundants que no aporten arestes noves a la base de proves. | No sap identificar els camins d'execució del graf. |
| **Criteris de Cobertura de Codi** | Analitza i distingeix críticament cobertura de sentències, branques i condicions múltiples utilitzant eines mètriques. | Comprèn la importància de la cobertura de branques i utilitza informes de JaCoCo. | Reconeix la cobertura de sentències però té dificultats per entendre la cobertura de branques. | Creu que provar una línia equival a provar totes les combinacions lògiques possibles. |
