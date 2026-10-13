---
layout: default
title: "UD6: Optimització de Codi, Refactorització, Control de Versions (Git/GitHub) i Eines CASE — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD6"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5: Proves de Programari i JUnit 5"
---

# UD6: Optimització de Codi, Refactorització, Control de Versions (Git/GitHub) i Eines CASE

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-ref6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-doc6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-git6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-case6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed6)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ENGINYERIA DE PROGRAMARI: QUALITAT, GIT, REFACTORING I EINES CASE</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Deute tècnic · Code Smells &amp; Fowler · Javadoc · Control de versions distribuït Git · Enginyeria inversa</text>

  <!-- Bloc 1: Refactorització -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ref6)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🛠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Refactorització</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Neteja de Codi</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Deute tècnic i costos</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Code Smells (Long Method)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Extract Method &amp; Class</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Proves de no-regressió</text>
  </g>

  <!-- Bloc 2: Documentació Javadoc -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-doc6)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📖</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Javadoc</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Documentació de l'API</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Etiquetes @param, @return</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Excepcions amb @throws</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Generació HTML del javadoc</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Integració amb Maven/IDE</text>
  </g>

  <!-- Bloc 3: Control Git -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-git6)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌿</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Git &amp; GitHub</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Control de Versions</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Els 3 estats de Git</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Branques (checkout -b)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Commits atòmics (feat, fix)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Merge i resolució conflictes</text>
  </g>

  <!-- Bloc 4: Eines CASE -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-case6)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Eines CASE</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Modelat &amp; Codi</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Enginyeria Directa (UML➔Codi)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Enginyeria Inversa (Codi➔UML)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• PlantUML i eines de disseny</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Sincronització bidireccional</text>
  </g>
</svg>
</div>

---

## 6.1 Optimització de Codi, Deute Tècnic i Detecció de Code Smells

El **deute tècnic (*Technical Debt*)** representa el cost futur implícit d'escollir una solució ràpida i deficient en lloc d'un disseny net i mantensible. Com més deute acumula un projecte, més lent i car resulta afegir noves funcionalitats o corregir errors.

### Què és un *Code Smell*?
Un *code smell* (pudor de codi) no és un error de compilació ni un bug que impedeixi l'execució del programa; és un **símptoma en el codi font que indica un disseny deficient o una violació dels principis de bona arquitectura**:

```
+-----------------------------------------------------------------------------------+
|                        CATÀLEG DELS PRINCIPALS CODE SMELLS                        |
+----------------------+------------------------------------+-----------------------+
| CODE SMELL           | DESCRIPCIÓ DEL PROBLEMA            | SOLUCIÓ DE REFACTORING|
+----------------------+------------------------------------+-----------------------+
| Mètode Llarg         | Mètode de desenes de línies amb    | Extract Method        |
| (Long Method)        | múltiples responsabilitats         |                       |
+----------------------+------------------------------------+-----------------------+
| Codi Duplicat        | El mateix fragment de lògica       | Extract Method /      |
| (Duplicated Code)    | repetit en diversos llocs          | Pull Up Method        |
+----------------------+------------------------------------+-----------------------+
| Classe Massa Gran    | Classe "Déu" (God Object) que fa   | Extract Class         |
| (Large Class)        | de tot violant el principi SRP     |                       |
+----------------------+------------------------------------+-----------------------+
| Obsessió Primitiva   | Ús de tipus simples (String, int)  | Replace Data Value    |
| (Primitive Obsession)| per modelar conceptes complexos    | with Object           |
+----------------------+------------------------------------+-----------------------+
| Enveja de Funcions   | Un mètode utilitza més dades d'una | Move Method           |
| (Feature Envy)       | altra classe que de la seua pròpia |                       |
+----------------------+------------------------------------+-----------------------+
```

---

## 6.2 Patrons de Refactorització de Martin Fowler

La **refactorització** és el procés de reestructurar el codi intern d'un programa per fer-lo més senzill, net i mantensible **sense alterar el seu comportament observable extern**.

> [!IMPORTANT]
> **Regla d'or de la refactorització:** Mai s'ha de refactoritzar sense una **suite de proves unitàries automatitzades** prèvia. Els tests garanteixen que cap canvi estructural introdueix regressions funcionals.

### Principals Tècniques de Refactorització
1. **Extract Method (Extracció de mètode):** Converteix un fragment de codi amb entitat pròpia dins d'un mètode llarg en un mètode privat independent amb un nom autoexplicatiu.
2. **Inline Method:** Si un mètode és tan simple que el seu cos és tan clar com el seu nom, s'elimina la crida i es col·loca el contingut directament.
3. **Extract Class:** Quan una classe té massa atributs i mètodes que s'agrupen de manera natural (ex: `carrer`, `ciutat`, `codiPostal`), s'extreuen en una nova classe `Adreca`.
4. **Rename Symbol:** Canviar el nom d'una variable, mètode o classe a un terme que descrigui fidelment la seua intenció de negoci.

---

## 6.3 Documentació Tècnica del Codi amb Javadoc

**Javadoc** és l'eina estàndard que genera documentació HTML de l'API a partir de comentaris estructurats en el codi font Java (`/** ... */`).

### Sintaxi Estàndard d'Etiquetes Javadoc
```java
package es.ies.facturacio;

/**
 * Representa una factura comercial generada pel sistema de vendes.
 * Permet calcular totals amb impostos i gestionar línies de detall.
 *
 * @author Equip de Desenvolupament DAW/DAM
 * @version 2.1
 * @since 1.0
 */
public class Factura {

    /**
     * Calcula l'import total de la factura aplicant el tipus impositiu (IVA).
     *
     * @param percentatgeIVA El tipus impositiu a aplicar en tant per cent (ex: 21.0 per al 21%).
     * @return El total final en euros calculat amb impostos inclosos.
     * @throws IllegalArgumentException Si el tipus d'IVA és negatiu o supera el 100%.
     */
    public double calcularTotalAmbIVA(double percentatgeIVA) throws IllegalArgumentException {
        if (percentatgeIVA < 0.0 || percentatgeIVA > 100.0) {
            throw new IllegalArgumentException("El tipus d'IVA és invàlid: " + percentatgeIVA);
        }
        // Lògica de càlcul...
        return 0.0;
    }
}
```

---

## 6.4 Control de Versions Distribuït amb Git i GitHub

**Git** és un sistema de control de versions distribuït (DVCS) creat per Linus Torvalds en 2005. A diferència dels sistemes centralitzats, cada desenvolupador disposa d'un clon local complet de tot l'historial del projecte.

```
+-----------------------------------------------------------------------------------+
|                           ELS 3 ESTATS D'UN FITXER EN GIT                         |
+-----------------------------------------------------------------------------------+
|  1. Working Directory  ➔  2. Staging Area (Index)  ➔  3. Repository (.git)        |
|  (Fitxers editats)        (Canvis preparats)          (Commits permanents)        |
|            |                        |                           |                 |
|            +--- git add fitxer ---->+                           |                 |
|                                     +---- git commit -m "..." ->+                 |
+-----------------------------------------------------------------------------------+
```

### Flux de Treball amb Branques (*Feature Branching*)
```bash
# 1. Crear una branca de funcionalitat i situar-s'hi
git checkout -b feature/login-jwt

# 2. Treballar i registrar canvis amb Conventional Commits
git add src/main/java/AuthService.java
git commit -m "feat(auth): afegir generacio de tokens JWT"

# 3. Canviar a la branca principal i actualitzar-la
git checkout main
git pull origin main

# 4. Fusionar la branca preservant l'historial
git merge --no-ff feature/login-jwt

# 5. Esborrar la branca local fusionada
git branch -d feature/login-jwt
```

### Resolució de Conflictes de Fusió
Quan dues branques modifiquen les mateixes línies d'un arxiu de manera diferent, Git atura el merge i genera marcadors de conflicte:
```text
<<<<<<< HEAD (branca main actual)
double taxa = 0.21;
=======
double taxa = 0.15; // branca feature
>>>>>>> feature/nova-taxa
```
El desenvolupador ha d'editar manualment l'arxiu, triar la solució correcta, eliminar els marcadors, executar `git add` i completar el commit amb `git commit`.

---

## 6.5 Eines CASE i Enginyeria del Programari (Directa i Inversa)

Les **eines CASE (*Computer-Aided Software Engineering*)** donen suport automatitzat a les diferents activitats del cicle de vida:
- **Enginyeria Directa (*Forward Engineering*):** Generació automàtica d'esquelets de classes, interfícies i atributs en Java a partir d'un diagrama de classes UML.
- **Enginyeria Inversa (*Reverse Engineering*):** Anàlisi estàtica de codi font Java compilat o fitxers `.java` per reconstruir automàticament diagrames UML de classes i relacions.
- **Sincronització Bidireccional (*Round-trip Engineering*):** Capacitat de l'eina CASE de mantenir sincronitzats en temps real el model UML i el codi font davant canvis en qualsevol dels dos sentits.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Mètriques de Qualitat

#### Exercici 6.1: Càlcul de l'Índex de Mantenibilitat (MI)
L'**Índex de Mantenibilitat (*Maintainability Index*, MI)** de Paul Oman i Jack Hagemeister és una mètrica clàssica utilitzada per analitzadors estàtics de codi (com SonarQube o Visual Studio):

$$MI = 171 - 5.2 \times \ln(V) - 0.23 \times V(G) - 16.2 \times \ln(\text{LOC})$$

On:
- $V$ és el Volum de Halstead del programa.
- $V(G)$ és la Complexitat Ciclomàtica de McCabe.
- $\text{LOC}$ és el nombre de línies de codi font efectives (*Lines of Code*).

Un mètode llegat d'un mòdul de nòmines té els següents valors:
- $V = 1.250$
- $V(G) = 18$
- $\text{LOC} = 120$

1. Calculeu l'Índex de Mantenibilitat $MI$ utilitzant logaritmes neperians.
2. Avalueu el resultat segons els llindars estàndard:
   - $MI \ge 85$: Mantenibilitat alta (verd).
   - $65 \le MI < 85$: Mantenibilitat moderada (groc).
   - $MI < 65$: Mantenibilitat deficient, alt risc (roig).

#### Exercici 6.2: Mètriques d'Acoblament CBO i Cohesió LCOM
En un disseny orientat a objectes s'avalua la qualitat d'una classe `GestorComandes`:
- La classe invoca mètodes i utilitza tipus de 12 classes diferents de l'aplicació ($\text{CBO} = 12$).
- Dels seus 10 mètodes públics, 7 mètodes no comparteixen cap atribut d'instància comú amb els altres 3 ($\text{LCOM}$ elevat).

1. Expliqueu per què un alt acoblament ($\text{CBO}$) i una baixa cohesió augmenten el cost de manteniment i la probabilitat d'introduir regressions.
2. Proposeu una estratègia de refactorització mitjançant **Extract Class** per dividir la classe en components amb alta cohesió i baix acoblament.

#### Exercici 6.3: Càlcul de Densitat de Defectes
Una auditoria descobreix 14 *code smells* crítics i 2 bugs en un paquet Java de $2.400$ línies de codi font:
1. Calculeu la densitat de defectes per cada 1.000 línies de codi ($\text{KLOC}$):
   $$\text{Densitat} = \frac{16}{2.4} \approx 6.67 \text{ defectes/KLOC}$$
2. Si després d'una sessió de refactorització s'eliminen 12 d'aqueixos defectes, quina és la nova densitat assolida?

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 6.1: Refactorització Guiada per Proves amb l'IDE
1. Preneu una classe `CalculadoraImpostos` que conté un mètode de 80 línies amb nombrosos blocs `if-else` imbricats i variables amb noms d'una sola lletra (`a`, `b`, `t`).
2. Creeu primer una suite de proves completa amb JUnit 5 que valide tots els casos d'ús actuals per blindar el comportament existent.
3. Apliqueu les eines automàtiques de refactoring de l'IDE (IntelliJ IDEA o Eclipse):
   - **Extract Method:** Separeu el càlcul de retencions a la font i les deduccions familiars en mètodes privats autoexplicatius.
   - **Rename Symbol:** Reanomeneu totes les variables a noms de domini expressius.
4. Executeu novament els tests i comproveu que tots es mantenen en verd (sense regressions).

#### Repte 6.2: Generació de la Documentació Javadoc
1. Documenteu totes les classes, constructors i mètodes públics del paquet `es.ies.vehicles` utilitzant els comentaris Javadoc reglamentaris.
2. Afegiu les etiquetes `@param`, `@return` i `@throws`.
3. Genereu la documentació HTML executant en el terminal:
```bash
javadoc -d docs/api -sourcepath src/main/java -subpackages es.ies.vehicles
```
4. Obriu l'arxiu `docs/api/index.html` en un navegador web i verifiqueu que tots els enllaços, resums de mètodes i jerarquies de classes es mostren de forma professional.

#### Repte 6.3: Taller de Gestió de Branques i Conflictes en Git
1. Inicialitzeu un dipòsit Git i creeu el fitxer `Configuracio.java` a la branca `main`:
```java
public class Configuracio {
    public static final String URL_API = "https://api.produccio.es";
}
```
2. Feu un commit: `git commit -am "chore: afegir url de produccio"`.
3. Creeu dues branques: `feature/canvi-proves` i `feature/canvi-local`.
4. A la primera branca, canvieu la URL per `"https://api.test.es"` i feu commit.
5. A la segona branca, canvieu la mateixa línia per `"http://localhost:8080"` i feu commit.
6. A la branca `main`, fusioneu la primera branca amb `git merge feature/canvi-proves`.
7. Intenteu fusionar la segona branca i observeu com Git genera el conflicte. Resoleu-lo manualment deixant una lectura des de fitxer de propietats, executeu `git add` i finalitzeu el commit de merge.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] Puc identificar els principals *code smells* (Long Method, God Class, Primitive Obsession) en un projecte Java.
- [ ] Sé aplicar tècniques de refactorització com Extract Method i Extract Class sense modificar el comportament extern.
- [ ] Reconec la necessitat d'una bateria prèvia de proves unitàries abans de dur a terme qualsevol refactoring.
- [ ] Sóc capaç de documentar una API Java utilitzant Javadoc amb `@param`, `@return` i `@throws`.
- [ ] Puc generar la documentació HTML de Javadoc mitjançant el terminal o l'IDE.
- [ ] Domine el funcionament dels 3 estats de Git i l'ús de branques per al desenvolupament aïllat de funcionalitats.
- [ ] Sé resoldre conflictes de fusió (*merge conflicts*) en Git manualment de forma neta i rigorosa.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Refactorització de Codi (RA6)** | Identifica code smells amb solvència i aplica refactoritzacions netes protegides per proves unitàries. | Aplica refactoritzacions habituals (Extract Method) millorant la qualitat del codi. | Reconeix codi millorable però fa canvis manuals que introdueixen riscos. | Modifica codi sense criteri introduint errors o trencant funcionalitats existents. |
| **Documentació Javadoc (RA6)** | Documenta l'API de forma exhaustiva i genera la documentació HTML amb javadoc o Maven sense avisos. | Documenta classes i mètodes públics amb comentaris Javadoc correctes. | Utilitza Javadoc de forma bàsica ometent paràmetres o excepcions. | No documenta el codi o utilitza comentaris informals no estàndard. |
| **Control de Versions Git (RA6)** | Utilitza branques de funcionalitat, commits atòmics semàntics i resol conflictes de merge amb mestria. | Gestiona branques i fusions en Git correctament amb pocs errors menors. | Utilitza comandes bàsiques de Git però té por de les branques o conflictes. | Incapaç d'utilitzar Git o provoca pèrdues de canvis en intentar fusionar. |
| **Eines CASE (RA6)** | Utilitza eines CASE per generar codi i diagrames en ambdós sentits (directa i inversa) amb fluïdesa. | Utilitza eines CASE per a enginyeria directa o inversa de forma guiada. | Reconeix la funció de les eines CASE però té dificultats per integrar-les a l'IDE. | Desconeix el propòsit de les eines CASE i l'enginyeria del programari. |
