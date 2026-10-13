---
layout: default
title: "UD9: Síntesi Pràctica del 2n Trimestre: Modelat i Disseny Estructural UML — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD9"
---

# UD9: Síntesi Pràctica del 2n Trimestre: Modelat i Disseny Estructural UML

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-str9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-uc9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-dyn9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-bench9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed9)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SÍNTESI PRÀCTICA 2N TRIMESTRE: MODELAT I DISSENY UML</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Integració de diagrames de classes, casos d'ús, seqüència i consistència semàntica interdiagrames</text>

  <!-- Bloc 1: Diagrames Estructurals -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-str9)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏛️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Estructura Estàtica</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Diagrames de Classes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Atributs, operacions i visibilitat</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Multiplicitats (1, 0..1, *)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Agregació vs Composició</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Herència &amp; Interfícies</text>
  </g>

  <!-- Bloc 2: Casos d'Ús -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-uc9)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">👤</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Vista Funcional</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Casos d'Ús</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Actors &amp; Límits del sistema</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Inclusions &lt;&lt;include&gt;&gt;</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Extensions &lt;&lt;extend&gt;&gt;</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Especificació de requisits</text>
  </g>

  <!-- Bloc 3: Comportament Dinàmic -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dyn9)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Vista Dinàmica</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Seqüència &amp; Flux</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Línies de vida &amp; Missatges</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Fragments alt, opt, loop</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Activitats &amp; Concurrència</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Consistència creuada</text>
  </g>

  <!-- Bloc 4: Banc de Síntesi -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-bench9)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🏆</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Banc de Síntesi</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Reptes Integrals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Supòsits complets 2n T</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• De requisits a codi Java</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rúbriques d'avaluació</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Simulacions d'examen</text>
  </g>
</svg>
</div>

Aquesta unitat de síntesi consolida i integra tots els coneixements i habilitats de **modelat i disseny orientat a objectes en UML** treballats durant el **segon trimestre**. L'objectiu és capacitar l'alumnat per a transformar especificacions narratives complexes en un conjunt harmònic i coherent de diagrames estructurals (classes) i de comportament (casos d'ús, seqüència i activitats), garantint la **consistència semàntica interdiagrames** i la traducció directa a classes Java.

---

## 9.1 Les diferents perspectives del modelat UML

Un disseny professional de programari requereix combinar diferents vistes complementàries per descriure el sistema:

```
                  ┌───────────────────────────────┐
                  │    Requisits de Negoci (SRS)  │
                  └──────────────┬────────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       [ Casos d'Ús (UD4) ]            [ Diagrama de Classes (UD3) ]
     "Què fa el sistema des          "Quines estructures i dades
      del punt de vista de l'usuari"   componen el sistema"
                 │                               │
                 └───────────────┬───────────────┘
                                 │
                                 ▼
                    [ Diagrama de Seqüència (UD4) ]
                  "Com col·laboren els objectes de les
                   classes per executar cada cas d'ús"
```

---

## 9.2 Regla d'Or: Consistència Semàntica Interdiagrames

Un dels errors més greus en els projectes d'enginyeria de programari és la manca de coherència entre diagrames:

1. **Correspondència Missatge $\leftrightarrow$ Mètode:** Si un diagrama de seqüència mostra que l'objecte `cistella` rep el missatge `afegirProducte(p, 2)` enviat pel controlador, la classe `Cistella` en el diagrama de classes **ha de tindre obligatòriament** l'operació pública `+ afegirProducte(p : Producte, quantitat : int) : void`.
2. **Correspondència Rols $\leftrightarrow$ Atributs:** Si la classe `Comanda` té una associació de composició $1 \rightarrow 1..*$ amb `LiniaComanda`, en el diagrama de classes ha d'existir una col·lecció privada de línies, i en el diagrama de seqüència les línies han de ser instanciades per la mateixa comanda.
3. **Correspondència Cas d'Ús $\leftrightarrow$ Seqüència:** Per a cada cas d'ús rellevant (Ex. `Processar Pagament`) hi ha d'haver com a mínim un diagrama de seqüència que detalli com s'executa el seu flux principal i les seues branques alternatives (`alt`).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Auditoria de Consistència Creuada entre Classes i Seqüència
Observa els següents dos diagrames descrits textualment:
- **Diagrama de Classes:**
  - Classe `Usuari`: `- id : int`, `- nom : String`, `+ getNom() : String`.
  - Classe `ServeiAutenticacio`: `+ verificar(id : int, clau : String) : boolean`.
- **Diagrama de Seqüència:**
  - El controlador `ControladorWeb` envia el missatge `login(email, clau)` a la instància de `ServeiAutenticacio`.
  - A continuació, `ServeiAutenticacio` envia el missatge `setUltimaConnexio(data)` a la instància d'`Usuari`.

1. Localitza les **2 incoherències semàntiques greus** entre el diagrama de seqüència i el diagrama de classes.
2. Com s'ha de modificar el diagrama de classes perquè el disseny siga $100\%$ consistent?

#### Exercici 2: Càlcul de Mètriques de Disseny Orientat a Objectes (Acoblament CBO)
En enginyeria de programari, la mètrica **CBO (*Coupling Between Objects*)** mesura el nombre de classes amb les quals una determinada classe està acoblada (mitjançant associació, herència, paràmetres o tipus de retorn):
- En un disseny A, la classe `GestorFactures` té associacions directes amb $14$ classes diferents (CBO = 14).
- En un disseny B, s'aplica el patró *Façade* i una interfície intermèdia, reduint el CBO de la classe principal a $3$.
1. Quin dels dos dissenys serà més fàcil de provar mitjançant proves unitàries aïllades?
2. Quin disseny té un risc molt més elevat d'efecte dominó (on un canvi en una classe trenca moltes altres)?

#### Exercici 3: Anàlisi de cardinalitat i mida de dades en un model educatiu
Un model UML per a un campus virtual té les següents regles:
- Cada `Alumne` es matricula en una mitjana de $6$ `Assignatures`.
- Cada `Assignatura` té $12$ `TasquesAvaluacio`.
- Per cada tasca, l'`Alumne` puja una `Entrega` amb una mida mitjana de fitxer de $450\text{ KB}$ emmagatzemada en disc i metadades de $200\text{ bytes}$ a la base de dades.
1. Si el campus té $1.500$ alumnes matriculats, calcula el nombre total d'instàncies d'`Entrega` que s'emmagatzemaran al final del curs.
2. Calcula l'espai d'emmagatzematge en disc (en Gigabytes) i a la base de dades (en Megabytes) que requerirà aquest volum.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Supòsit Integral: Sistema de Lloguer de Vehicles Elèctrics
- **Objectiu:** Dissenyar els tres diagrames clau (Casos d'Ús, Classes i Seqüència) per a una flota de patinets elèctrics.
- **Requisits de negoci:**
  1. Un `Usuari` pot `Localitzar Patinet`, `Desbloquejar Patinet` i `Finalitzar Viatge`.
  2. `Desbloquejar Patinet` **inclou** obligatòriament `Verificar Saldo Mínim`.
  3. `Finalitzar Viatge` **s'estén** amb `Aplicar Descompte per Aparcament en Zona Verda` només si el patinet es deixa en un punt recomanat.
  4. Modela la classe `Patinet` (amb `bateria`, `estat`, `coordenades`), `Viatge` (amb `inici`, `fi`, `cost`) i `Usuari`.
  5. Construeix el diagrama de seqüència per al procés complet de `Desbloquejar Patinet`.

#### Repte 2: Codi Mermaid consolidat del Sistema de Vehicles
- **Objectiu:** Escriure la definició textual Mermaid del model de classes del Repte 1:
  ```mermaid
  classDiagram
      class Usuari {
          -int id
          -String nom
          -double saldo
          +desbloquejar(patinet: Patinet) Viatge
      }
      class Patinet {
          -String codi
          -int nivellBateria
          -boolean disponible
          +activarMotor() void
          +bloquejar() void
      }
      class Viatge {
          -Date dataInici
          -Date dataFi
          -double costTotal
          +calcularCost() double
      }
      Usuari "1" --> "*" Viatge : realitza
      Viatge "*" --> "1" Patinet : utilitza
  ```

#### Repte 3: Simulació d'Examen Pràctic de Disseny UML del 2n Trimestre
- **Objectiu:** Resoldre en 50 minuts un supòsit d'examen que exigeix:
  1. Identificar actors i casos d'ús amb les seues relacions d'inclusió.
  2. Dibuixar el diagrama de classes amb tipat i multiplicitats.
  3. Dibuixar el diagrama de seqüència amb un fragment `alt` d'èxit i fallada.
  4. Comprovar que cap mètode utilitzat a la seqüència manca a la seua classe corresponent.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He verificat que tots els missatges del diagrama de seqüència existeixen com a mètodes en les classes corresponents.
- [ ] He garantit que els atributs privats compten amb mètodes d'accés (*getters/setters*) necessaris.
- [ ] He distingit adequadament associació, agregació, composició i herència en el model de dades.
- [ ] He emprat fragments combinats `alt` i `loop` per a reflectir la lògica de negoci a la seqüència.
- [ ] He utilitzat la sintaxi estàndard d'UML 2.5 sense afegir elements gràfics informals.
- [ ] He comprovat que la traçabilitat des dels casos d'ús fins a les classes és total.
- [ ] He generat la documentació gràfica utilitzant eines digitals (Mermaid / eines CASE).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Consistència Interdiagrames** | Consistència semàntica perfecta del 100% entre casos d'ús, classes i seqüència; cada missatge correspon a un mètode tipat. | Manté una bona consistència global amb errors menors en noms de paràmetres o retorns. | Hi ha desajustos evidents entre els mètodes de la seqüència i els declarats a les classes. | Els diagrames són completament independents i contradictoris entre si. |
| **Modelat de Classes Avançat** | Dissenya estructures elegants amb baix acoblament (CBO), alta cohesió i un ús precís de composició i herència. | Construeix diagrames de classes complets amb multiplicitats i visibilitats correctes. | Dissenya classes funcionals però amb cert sobreacoblament o dependències excessives. | Dissenya classes sense atributs, sense visibilitat o amb relacions conceptualment errònies. |
| **Modelat Dinàmic i Seqüència** | Domina els diagrames de seqüència amb línies de vida nítides, activacions correctes i fragments combinats (alt, loop). | Utilitza diagrames de seqüència funcionals que mostren la interacció temporal entre objectes. | Dibuixa missatges bàsics però té confusions amb els fragments estructurats alt o les fletxes de retorn. | Confon la seqüència amb un diagrama de flux o no reflecteix el pas del temps. |
| **Resolució de Supòsits Integrals** | Resol problemes empresarials complets de modelat complint tots els requisits i casos d'ús amb criteri professional. | Completa els supòsits d'examen amb dissenys estructurats i llegibles. | Resol parcialment el supòsit cobrint els casos típics però oblidant detalls d'arquitectura. | Incapaç de modelar un supòsit pràctic complet d'examen en el temps establert. |
