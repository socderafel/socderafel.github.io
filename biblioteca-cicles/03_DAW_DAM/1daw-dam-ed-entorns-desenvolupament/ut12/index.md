---
layout: default
title: "UD12: Síntesi Pràctica del 3r Trimestre: Proves Automatitzades i Qualitat — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD12"
---

# UD12: Síntesi Pràctica del 3r Trimestre: Proves Automatitzades i Qualitat

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-unit12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-pyr12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tdd12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-bench12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed12)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SÍNTESI PRÀCTICA 3R TRIMESTRE: PROVES AUTOMATITZADES I QUALITAT</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Integració de proves amb JUnit 5, cobertura amb JaCoCo, cicle TDD, refactorització i documentació Javadoc</text>

  <!-- Bloc 1: Proves Unitàries -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-unit12)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🧪</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">JUnit &amp; Asseveracions</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Proves Unitàries</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• JUnit 5 Jupiter</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• assertEquals, assertTrue</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• assertThrows (Excepcions)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Proves parametritzades</text>
  </g>

  <!-- Bloc 2: Piràmide de Proves -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-pyr12)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔺</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Piràmide de Proves</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Estratègia de Mike Cohn</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Base: Proves unitàries (70%)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Centre: Integració (20%)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Cúspide: E2E / UI (10%)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Antipatró Ice Cream Cone</text>
  </g>

  <!-- Bloc 3: TDD & Refactorització -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-tdd12)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">TDD &amp; Codi Net</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Red - Green - Refactor</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Red: Test falla primer</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Green: Codi mínim que passa</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Refactor: Neteja sense trencar</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Eliminació de Code Smells</text>
  </g>

  <!-- Bloc 4: Banc de Síntesi -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-bench12)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🏆</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Banc de Síntesi</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Reptes Integrals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Supòsits complets 3r T</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cobertura amb JaCoCo</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rúbriques de qualitat</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Simulacions de prova tècnica</text>
  </g>
</svg>
</div>

Aquesta unitat de síntesi consolida i integra tots els coneixements i habilitats tècniques del **tercer trimestre** del mòdul d'Entorns de Desenvolupament. S'hi unifiquen les proves unitàries automatitzades amb **JUnit 5**, l'avaluació de la cobertura de codi amb **JaCoCo**, la filosofia de desenvolupament guiat per proves (**TDD**), l'eliminació de males olors de codi mitjançant **refactorització** i la generació de documentació estàndard amb **Javadoc**.

---

## 12.1 La Piràmide de Proves de Mike Cohn

En la indústria del programari professional, la distribució de les proves segueix la **Piràmide de Proves**:

```
           / \
          / E2E \         <-- 10%: Proves d'extrem a extrem / UI (Lentes, cares, fràgils)
         /───────\
        / Integ.  \       <-- 20%: Proves d'integració entre mòduls / serveis
       /───────────\
      /  Unitàries  \     <-- 70%: Proves unitàries aïllades amb JUnit (Ràpides, barates, fiables)
     /───────────────\
```

- **L'antipatró del Con de Gelat (*Ice Cream Cone*):** Es produeix quan un equip inverteix quasi tot el seu temps en proves manuals o E2E lentes en el navegador i té una base pobra de proves unitàries. El resultat és que la suite de proves triga hores a executar-se i no indica on està l'arrel de les fallades.

---

## 12.2 El Cicle TDD: Red $\rightarrow$ Green $\rightarrow$ Refactor

El **Desenvolupament Guiat per Proves (*Test-Driven Development - TDD*)** inverteix l'ordre tradicional de treball:

1. **Fase Roja (*Red*):** S'escriu primer una prova unitària que descriu la nova funcionalitat abans que existisca el codi. S'executa la prova i ha de **fallar** (subratllat en vermell).
2. **Fase Verda (*Green*):** S'escriu el codi de producció estrictament necessari perquè la prova passe amb èxit (barra verda). No importa si el codi és senzill o millorable.
3. **Fase de Refactorització (*Refactor*):** Es neteja i optimitza el codi eliminant duplicitats i millorant l'arquitectura, assegurant que **tots els tests continuen passant en verd** en tot moment.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi de Rendiment de la Piràmide de Proves
Un sistema corporatiu compta amb una suite de proves formada per:
- $3.500\text{ proves unitàries JUnit}$. Cadascuna triga una mitjana de $1,5\text{ ms}$ a executar-se en memòria RAM.
- $180\text{ proves d'integració}$ que accedeixen a la base de dades local. Cadascuna triga una mitjana de $85\text{ ms}$.
- $30\text{ proves E2E}$ amb Selenium que obren el navegador real. Cadascuna triga una mitjana de $18\text{ segons}$.

1. Calcula el temps total d'execució en segons per a cadascun dels tres nivells de proves.
2. Quant de temps total triga a executar-se tota la suite completa?
3. Si un equip aplica integració contínua i executa les proves a cada commit, quin nivell de proves es pot executar instantàniament en l'equip local del programador i quin s'ha de delegar al servidor d'integració contínua?

#### Exercici 2: Càlcul de Ràtio de Deute Tècnic (*Technical Debt Ratio - TDR*)
Segons el model de qualitat SQALE:
- Un projecte té un cost total estimat de desenvolupament de $C_D = 180.000\text{ €}$.
- Una anàlisi estàtica de codi detecta 120 incidències de males olors i falta de proves, amb un temps estimat de correcció de $45\text{ dies d'un enginyer}$ a raó de $300\text{ €/dia}$ (Cost de Remeiat $C_R = 13.500\text{ €}$).
- La fórmula del **Ràtio de Deute Tècnic**:
  $$\text{TDR (\%)} = \frac{C_R}{C_D} \times 100$$
1. Calcula el percentatge de deute tècnic del projecte.
2. Si el barem de qualitat estableix que un projecte amb $\text{TDR} \le 5\%$ té una qualificació A, $\le 10\%$ una B i $> 10\%$ una C, quina qualificació obté l'aplicació?

#### Exercici 3: Avaluació d'impacte del cicle TDD
Un equip comença a utilitzar TDD:
- Abans de TDD: La densitat de defectes en producció era de $12\text{ defectes/KLOC}$.
- Després de 6 mesos amb TDD: La densitat es redueix a $2,4\text{ defectes/KLOC}$, amb un increment inicial del $15\%$ en el temps de desenvolupament de la primera versió.
- Si corregir un defecte en producció costa $800\text{ €}$, calcula l'estalvi net per a un projecte de $20\text{ KLOC}$ considerant el sobrecost inicial de codificació de $12.000\text{ €}$.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Refactorització d'un servei amb Suite de Proves de Seguretat
- **Objectiu:** Optimitzar un mètode amb $V(G) = 14$ garantint que cap funcionalitat es trenca gràcies a JUnit 5.
- **Procediment de taller:**
  1. Escriu una classe `CalculadoraTarifesTest` amb 6 proves unitàries que cobreixin totes les branques del mètode antic.
  2. Executa els tests i comprova que tots passen en verd.
  3. Refactoritza el mètode de negoci aplicant *Extract Method* per reduir la complexitat ciclomàtica per sota de 6.
  4. Torna a executar els tests: si romanen en verd, la refactorització ha estat un èxit total.

#### Repte 2: Cicle TDD pas a pas: Conversor de Números Romans
- **Objectiu:** Implementar la funció `convertirARoma(int n)` seguint estrictament el cicle Red-Green-Refactor.
- **Passos a seguir:**
  1. Pas 1 (Red): Escriu el test `testConvertir1()` que espera `"I"`. El test falla perquè la funció no existeix o retorna `""`.
  2. Pas 2 (Green): Escriu el codi mínim `return "I";`. El test passa en verd.
  3. Pas 3 (Red): Escriu el test per a $2$ (`"II"`) i $3$ (`"III"`). Falla.
  4. Pas 4 (Green): Escriu un bucle senzill per a nombres de l'1 al 3.
  5. Pas 5 (Refactor): Neteja el codi i afegeix el cas per a $4$ (`"IV"`). Continua fins al 10.

#### Repte 3: Simulació d'Examen Pràctic Integral del 3r Trimestre
- **Objectiu:** Resoldre en 50 minuts un supòsit integral que exigeix:
  1. Analitzar una classe amb dos Code Smells.
  2. Construir la classe de test JUnit 5 amb asseveracions d'excepcions (`assertThrows`).
  3. Aconseguir una cobertura de branques del $100\%$ amb JaCoCo.
  4. Generar la documentació HTML amb Javadoc i verificar que no hi ha advertències.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He entès la distribució de la Piràmide de Proves prioritzant les proves unitàries.
- [ ] He dominat el cicle TDD (Red -> Green -> Refactor).
- [ ] He utilitzat JUnit 5 per validar tant resultats esperats com el llançament d'excepcions.
- [ ] He analitzat la cobertura de codi amb JaCoCo identificant branques no cobertes.
- [ ] He aplicat refactoritzacions netes reduint la complexitat ciclomàtica de McCabe.
- [ ] He documentat el codi amb comentaris Javadoc estàndard.
- [ ] He resolt els exercicis de síntesi de qualitat amb autonomia professional.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Piràmide de Proves i TDD** | Domina la piràmide de proves i aplica el cicle Red-Green-Refactor amb disciplina, entenent el seu valor en el disseny. | Aplica TDD en exercicis guiats i comprèn per què les proves unitàries han de ser majoritàries. | Coneix el cicle TDD però tendeix a escriure el codi abans que els tests. | Desconeix TDD i depèn exclusivament de proves manuals en el navegador. |
| **Proves Unitàries amb JUnit 5** | Construeix suites de prova completes amb asseveracions d'excepció, proves parametritzades i cicle de vida. | Escriu tests JUnit funcionals amb assertEquals i assertTrue que validen el codi correctament. | Escriu tests senzills però oblida provar casos excepcionals o dades límit. | No sap escriure una classe de test ni utilitzar asseveracions de JUnit. |
| **Cobertura i Refactorització** | Assoleix cobertures de branques superiors al 95% i refactoritza codi complex reduint la complexitat ciclomàtica. | Mesura la cobertura amb JaCoCo i millora el codi eliminant duplicitats evidents. | Mesura la cobertura però no sap interpretar les branques grogues d'un informe. | No utilitza eines de cobertura i refactoritza sense xarxa de seguretat de proves. |
| **Resolució de Supòsits de Qualitat** | Resol supòsits pràctics del 3r trimestre amb codi impecable, 100% testejat i documentat amb Javadoc. | Completa els exercicis de síntesi satisfactòriament complint els requisits centrals. | Resol parcialment els supòsits deixant tests pendents o documentació incompleta. | Incapaç de resoldre un exercici d'avaluació de qualitat en el temps establert. |
