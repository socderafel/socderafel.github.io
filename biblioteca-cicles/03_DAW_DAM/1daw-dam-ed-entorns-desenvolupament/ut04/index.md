---
layout: default
title: "UD4: Modelat de Comportament amb Diagrames UML — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3: Diagrames de Classes UML"
next_url: "../ut05/index.html"
next_label: "UD5: Proves de Programari i JUnit 5 ➡️"
---

# UD4: Modelat de Comportament amb Diagrames UML

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-uc4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-seq4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-act4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-state4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed4)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">MODELAT DE COMPORTAMENT AMB DIAGRAMES UML</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Casos d'ús (include/extend), diagrames de seqüència amb fragments combinats, activitats i màquines d'estats</text>

  <!-- Bloc 1: Casos d'Ús -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-uc4)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">👤</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Casos d'Ús</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Requisits &amp; Actors</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Actors humans i sistemes</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• El·lipse de cas d'ús</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Inclusió: &lt;&lt;include&gt;&gt;</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Extensió: &lt;&lt;extend&gt;&gt;</text>
  </g>

  <!-- Bloc 2: Seqüència -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-seq4)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⏱️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seqüència</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Interacció Temporal</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Línies de vida (Lifelines)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Missatges síncrons/retorn</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Activació &amp; Destrucció</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Fragments: alt, opt, loop</text>
  </g>

  <!-- Bloc 3: Activitats -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-act4)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Activitats</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Flux de Treball</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nodes d'acció &amp; flux</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bifurcacions &amp; Decisions</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Concurrència: Fork &amp; Join</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Carrils (Swimlanes)</text>
  </g>

  <!-- Bloc 4: Màquines d'Estats -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-state4)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Màquines d'Estats</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Cicle de Vida d'Objecte</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Estats &amp; Pseudoestats</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Transicions disparades</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Condicions de guarda [g]</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Accions entry / exit / do</text>
  </g>
</svg>
</div>

Mentre que els diagrames de classes capturen l'estructura immòbil d'un sistema, els **Diagrames de Comportament d'UML** descriuen la seua dimensió dinàmica: com interactuen els usuaris amb el programari, com es comuniquen els objectes mitjançant missatges en el temps, com circulen els fluxos de treball i com transiten els objectes a través de diferents estats durant el seu cicle de vida.

---

## 4.1 Diagrames de Casos d'Ús (*Use Case Diagrams*)

Un diagrama de casos d'ús descriu **què** fa el sistema des de la perspectiva dels usuaris externs, sense entrar en detalls d'implementació interna.

### Elements gràfics fonamentals
- **Actor (Figura humana):** Entitat externa que interactua amb el sistema. Pot ser un usuari humà (Client, Administrador), un maquinari (Sensor) o un altre sistema informàtic extern (Passarel·la de Pagament, Servidor LDAP).
- **Cas d'Ús (El·lipse):** Conjunt d'accions realitzades pel sistema que produeixen un resultat observable de valor per a l'actor.
- **Límit del Sistema (*System Boundary* - Rectangle):** Separa el que està dins del sistema informàtic del món exterior on se situen els actors.

### Relacions essencials entre casos d'ús
1. **Inclusió (`<<include>>`):** Relació de dependència **obligatòria**. El cas d'ús base **sempre** requereix l'execució del cas d'ús inclòs per a completar-se amb èxit:
   ```
   ( Realitzar Comanda ) ──────<<include>>──────> ( Validar Estoc )
   ```
   > La fletxa apunta cap al cas d'ús inclòs.

2. **Extensió (`<<extend>>`):** Relació de comportament **opcional o condicional**. El cas d'ús que estén només s'executa si es compleix una condició concreta en un determinat *punt d'extensió*:
   ```
   ( Sol·licitar Targeta Daurada ) ──────<<extend>>──────> ( Obrir Compte Bancari )
   ```
   > La fletxa apunta des del cas que estén cap al cas d'ús base.

3. **Generalització d'Actors:** Un actor fill hereta tots els casos d'ús de l'actor pare (Ex. `Administrador` és un `UsuariRegistrat`).

---

## 4.2 Diagrames de Seqüència (*Sequence Diagrams*)

El diagrama de seqüència modela la **interacció dinàmica** entre objectes al llarg de l'eix del temps (que flueix verticalment de dalt a baix).

### Notació principal
- **Línia de vida (*Lifeline*):** Línia vertical discontínua que descriu l'existència de l'objecte en el temps.
- **Barra d'activació (*Focus of Control*):** Rectangle estret sobre la línia de vida que indica que l'objecte està executant una operació en la CPU.
- **Tipus de missatges:**
  - **Síncron (`──▶` massís):** L'emissor crida a un mètode i queda bloquejat esperant la resposta.
  - **Asíncron (`──>` obert):** L'emissor envia el missatge (ex. un esdeveniment o tasca en segon pla) i continua executant immediatament.
  - **Retorn / Resposta (`- - - >` discontinu):** Torna el resultat de l'operació al cridador.

### Fragments combinats moderns (UML 2.x)
Permeten representar lògica de control directament a la seqüència:
- `alt` (*Alternative*): Equivalent a un bloc `if / else`. Dividit per una línia discontínua en dues branques excloents.
- `opt` (*Optional*): S'executa només si es compleix la condició de guarda `[condicio]`.
- `loop` (*Iteration*): Representa un bucle `for` o `while` repetint el conjunt de missatges interiors.

```
+-- alt [saldo >= preu] ----------------------------+
|  caixer -> compte: retirar(preu)                  |
|  compte --> caixer: ok                            |
|-- else -------------------------------------------|
|  caixer -> pantalla: mostrarError("Saldo insuf")  |
+---------------------------------------------------+
```

---

## 4.3 Diagrames d'Activitats i Màquines d'Estats

### 1. Diagrames d'Activitats
Representen el flux de control pas a pas entre activitats o passos d'un algorisme:
- **Node Inicial (Cercle negre)** i **Node Final (Cercle amb anell)**.
- **Node d'Acció (Rectangle amb cantons arrodonits)**.
- **Decisió i Fusió (Rombe):** Avalua condicions de guarda mútuament excloents.
- **Bifurcació i Sincronització (*Fork & Join* - Barra massissa):** Divideix un flux seqüencial en múltiples fluxos concurrents o en paral·lel (*Fork*), o espera que tots acaben abans de continuar (*Join*).
- **Carrils de Natació (*Swimlanes*):** Agrupen les activitats segons el departament o classe responsable d'executar-les.

### 2. Diagrames de Màquines d'Estats
Modelen els estats pels quals passa **una única instància d'objecte** al llarg de la seua vida en resposta a estímuls externs:
- **Estat (Rectangle arrodonit):** Conté opcionalment accions internes:
  - `entry / accioAlEntrar`
  - `do / accioMentreDura`
  - `exit / accioAlEixir`
- **Transició (`──>`):** Canvi d'un estat a un altre provocat per un esdeveniment:
  $$\text{Esdeveniment} \ [\text{Condició de Guarda}] \ / \ \text{Acció Resultant}$$

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi d'Inclusions vs Extensions en un Caixer Automàtic
Un equip d'analistes defineix els següents requisits d'un caixer:
1. `Identificar Usuari` (demana targeta i PIN).
2. `Retirar Efectiu`.
3. `Consultar Saldo`.
4. `Imprimir Rebut en Paper`.
5. `Bloquejar Targeta`.

- **Preguntes a resoldre:**
  1. Per als casos d'ús `Retirar Efectiu` i `Consultar Saldo`, com es relaciona cadascun amb `Identificar Usuari`: mitjançant `<<include>>` o mitjançant `<<extend>>`? Justifica la direcció exacta de la fletxa.
  2. L'acció `Imprimir Rebut en Paper` només es realitza si l'usuari prem el botó corresponent quan el caixer ho pregunta. És un `<<include>>` o un `<<extend>>` de `Retirar Efectiu`?
  3. L'acció `Bloquejar Targeta` només s'executa si l'usuari introdueix 3 vegades un PIN incorrecte. Com s'ha de modelar?

#### Exercici 2: Recompte de missatges i complexitat en un Diagrama de Seqüència
En un sistema distribuït de comerç electrònic:
- Un client inicia la compra d'una cistella de $N = 10\text{ productes}$.
- El controlador fa una crida inicial a `validarClient()`.
- A continuació, un fragment combinat `loop [per cada producte]` envia un missatge `comprovarEstoc(prodId)` al repositori i rep la resposta.
- Després, s'avalua un fragment `alt [estoc complet]`:
  - Branca d'èxit: envia $1$ missatge a la passarel·la de pagament i $1$ missatge al servei de correu electrònic.
  - Branca de fallada: envia $1$ missatge al servei d'avisos.

1. Si tots els missatges síncrons tenen el seu missatge de retorn corresponent, calcula el nombre total de missatges (crides + retorns) transmesos per la xarxa en l'escenari d'èxit.
2. Si la latència de xarxa mitjana per missatge és de $15\text{ ms}$ i el processament intern és d'$1\text{ ms}$, calcula el temps total de resposta percebut pel client per a processar la compra.

#### Exercici 3: Anàlisi de camins concurrents en Diagrames d'Activitats (Fork & Join)
Un procés d'alta d'un nou empleat en una empresa tecnològica realitza un *Fork* simultani de 3 tasques:
- Branca A: Configuració del compte de correu ($t_A = 12\text{ min}$).
- Branca B: Preparació i instal·lació del portàtil ($t_B = 45\text{ min}$).
- Branca C: Tràmits de contracte i alta en seguretat social ($t_C = 30\text{ min}$).
Les tres branques conflueixen en una barra de sincronització *Join* abans de l'activitat final `Lliurament de Credencials a l'Empleat` ($t_F = 5\text{ min}$).

1. Quin és el camí crític del diagrama d'activitats? Quant de temps mínim total trigarà tot el procés des de l'inici fins al final?
2. Quant de temps d'inactivitat (*idle time*) passarà la Branca A esperant a la barra *Join* que finalitzen les branques restants?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Diagrama de Casos d'Ús d'un Portal Mèdic
- **Objectiu:** Dissenyar els casos d'ús d'un sistema de cites d'un hospital amb múltiples actors.
- **Requisits:**
  - Actors: `Pacient`, `Metge`, `Administratiu` i `Sistema SMS Extern`.
  - Casos d'ús: `Demanar Cita`, `Cancel·lar Cita`, `Consultar Historial Mèdic`, `Prescriure Medicament`, `Enviar Recordatori SMS`.
  - Regles: `Demanar Cita` **inclou** obligatòriament `Verificar Targeta Sanitària`.
  - `Demanar Cita` **s'estén** amb `Sol·licitar Transport en Ambulància` només si el pacient té mobilitat reduïda.

#### Repte 2: Diagrama de Seqüència en sintaxi Mermaid
- **Objectiu:** Escriure el codi d'un diagrama de seqüència amb fragments `alt` i missatges de resposta.
- **Codi Mermaid a generar:**
  ```mermaid
  sequenceDiagram
      actor Usuari
      participant Web as Front-end Web
      participant Auth as Servidor Auth
      participant BD as Base de Dades

      Usuari->>Web: Introdueix usuari i contrasenya
      Web->>Auth: login(usuari, clau)
      Auth->>BD: consultarCredencials(usuari)
      BD-->>Auth: hashGuardat
      alt Credencials vàlides
          Auth-->>Web: tokenJWT (200 OK)
          Web-->>Usuari: Redirigeix al Panell de Control
      else Contrasenya incorrecta
          Auth-->>Web: Error 401 Unauthorized
          Web-->>Usuari: Mostra missatge d'error
      end
  ```

#### Repte 3: Màquina d'Estats del Cicle de Vida d'un Tiquet de Suport
- **Objectiu:** Modelar els estats pels quals transita una incidència d'ajuda informàtica.
- **Instruccions:**
  1. Estats a incloure: `Nou`, `Assignat`, `En Progrés`, `Pendent de l'Usuari`, `Resolt` i `Tancat`.
  2. Defineix les transicions que porten d'un estat a un altre indicant l'esdeveniment disparador (Ex. `assignarTecnic()`, `demanarInfo()`, `solucionar()`, `confirmarUsuari()`).
  3. Afig una condició de guarda: des de `Pendent de l'Usuari` transita a `Tancat` si es compleix `[tempsInactivitat > 15 dies]`.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat la perspectiva funcional (casos d'ús) de la interacció temporal (seqüència).
- [ ] He utilitzat la relació `<<include>>` per a funcionalitats obligatòries compartides.
- [ ] He utilitzat la relació `<<extend>>` per a passos opcionals amb condicions de guarda.
- [ ] He dibuixat línies de vida i barres d'activació en diagrames de seqüència.
- [ ] He aplicat fragments combinats `alt`, `opt` i `loop` en interaccions de seqüència.
- [ ] He modelat concurrència mitjançant barres de *Fork* i *Join* en activitats.
- [ ] He definit transicions amb esdeveniments, guardes i accions en màquines d'estats.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Diagrames de Casos d'Ús** | Modela sistemes complexos distingint amb precisió extrema `<<include>>` d'`<<extend>>` i orientant les fletxes correctament. | Identifica actors i casos d'ús rellevants aplicant relacions d'inclusió i extensió bàsiques. | Dibuixa casos d'ús senzills però inverteix les fletxes o confon include amb extend. | Connecta casos d'ús entre si com si fóra un diagrama de flux sense semàntica UML. |
| **Diagrames de Seqüència** | Dissenya interaccions detallades amb línies de vida, missatges síncrons/asíncrons i fragments estructurats (alt, loop). | Utilitza la notació de seqüència correctament mostrant la col·laboració entre objectes. | Dibuixa missatges entre objectes però omet barres d'activació o fletxes de retorn. | Confon l'ordre temporal o dibuixa missatges bidireccionals impossibles en un sol pas. |
| **Diagrames d'Activitats** | Modela processos concurrents amb carrils (swimlanes), bifurcacions de decisió i sincronitzacions Fork/Join sense errors. | Dissenya fluxos d'activitat fluids amb nodes de decisió i condicions de guarda. | Dibuixa activitats simples però confon els rombes de decisió amb les barres de sincronització paral·lela. | No empra la notació d'activitats i dibuixa esquemes lliures sense regles formals. |
| **Màquines d'Estats** | Modela el cicle de vida d'objectes crítics amb esdeveniments disparadors, condicions de guarda i accions entry/exit. | Identifica els estats d'un objecte i defineix transicions vàlides entre ells. | Reconeix els estats principals però confon els estats (substantius/adjectius) amb accions (verbs). | Dibuixa màquines d'estats sense nodes inicials/finals o amb transicions sense esdeveniment. |
