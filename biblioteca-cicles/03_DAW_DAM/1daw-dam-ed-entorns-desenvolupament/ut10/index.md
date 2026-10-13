---
layout: default
title: "UD10: Sistemes de Control de Versions Distribuïts: Git i GitHub — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD10"
---

# UD10: Sistemes de Control de Versions Distribuïts: Git i GitHub

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-arch10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-flow10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-branch10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-remote10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed10)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SISTEMES DE CONTROL DE VERSIONS DISTRIBUÏTS: GIT I GITHUB</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura interna de Git, els 3 estats de treball, gestió de branques, fusions i col·laboració amb GitHub</text>

  <!-- Bloc 1: Arquitectura Git -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arch10)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏛️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arquitectura Git</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Model Distribuït</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Centralitzat vs Distribuït</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Working Tree (Àrea treball)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Staging Area (Index)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Repositori Local (.git)</text>
  </g>

  <!-- Bloc 2: Cicle de Canvis -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-flow10)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cicle de Canvis</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Comandes Clau</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• git init &amp; git clone</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• git add &amp; git commit</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• git status &amp; git diff</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Hash SHA &amp; arbre de commits</text>
  </g>

  <!-- Bloc 3: Branques & Fusions -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-branch10)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌿</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Branques &amp; Merge</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Desenvolupament Paral·lel</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• git branch &amp; switch/checkout</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Fast-Forward vs 3-Way Merge</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Resolució de conflictes</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• El punter HEAD mòbil</text>
  </g>

  <!-- Bloc 4: Plataformes Remotes -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-remote10)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Remot &amp; GitHub</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Col·laboració en Equip</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• git remote, push &amp; pull</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• git fetch vs git pull</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Pull Requests &amp; Code Review</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Fitxer .gitignore &amp; claus SSH</text>
  </g>
</svg>
</div>

Un **Sistema de Control de Versions (*Version Control System - VCS*)** és una eina indispensable per a registrar l'historial de canvis realitzats en el codi font d'un projecte al llarg del temps. Creat per Linus Torvalds en 2005 per al nucli de Linux, **Git** és el sistema distribuït estàndard de la indústria del programari. En aquesta unitat s'explora l'arquitectura interna de Git, els tres estats del cicle de treball local, la gestió de branques, la resolució de conflictes de fusió i la col·laboració en equip mitjançant repositoris remots a **GitHub**.

---

## 10.1 Què és un VCS i per què Git és el rei indiscutible?

Abans dels sistemes de control de versions, els equips guardaven carpetes manuals com `Projecte_v1`, `Projecte_v2_final`, `Projecte_v2_final_DEF`. Aquest mètode és propens a errors catastròfics, pèrdues de codi i impossibilita saber qui va fer un canvi o per què.

### Evolució dels sistemes:
1. **Sistemes Locals (RCS):** Guardaven les diferències en una base de dades local. Si el disc fallava, es perdia tot.
2. **Sistemes Centralitzats (CVS, Subversion/SVN):** Un únic servidor central emmagatzema tot l'historial. Si el servidor caia o no hi havia connexió a Internet, ningú podia fer commits ni treballar amb l'historial.
3. **Sistemes Distribuïts (Git, Mercurial):** Cada desenvolupador disposa d'un **clon complet i autònom de tot el repositori i de tot el seu historial** al seu propi equip local. Es pot treballar, consultar l'historial, crear branques i fer commits a gran velocitat sense connexió de xarxa.

---

## 10.2 L'arquitectura interna de Git i els 3 estats locals

Git no guarda el codi com a llistes de diferències de fitxers (com feia SVN), sinó com una seqüència d'**instantànies completes (*Snapshots*)** de tot el projecte en el temps.

### Les tres zones d'un repositori local:
```
[ Directori de Treball ] ──git add──▶ [ Àrea de Preparació ] ──git commit──▶ [ Repositori Local ]
  (Working Directory)                   (Staging Area / Index)                  (.git directory)
   Fitxers modificats                     Instantània preparada                 Commits permanents
   sense confirmar                        per al proper commit                  a la base de dades
```

1. **Directori de Treball (*Working Directory*):** Els fitxers reals que veus i edites a l'explorador o IDE. Els canvis ací tenen l'estat `Modified` o `Untracked`.
2. **Àrea de Preparació (*Staging Area / Index*):** Fitxer binari a `.git/index` que emmagatzema la llista exacta de fitxers i canvis que formaran part del pròxim commit. S'hi afegeixen amb `git add`.
3. **Directori de Git (*Repository / .git*):** La base de dades interna d'objectes on Git guarda els commits immutables identificats per un **resum criptogràfic SHA** de 40 caràcters hexadecimals (Ex. `d670460b4b4ae99aaf4e17...`).

---

## 10.3 Comandes fonamentals del cicle de treball

```bash
# 1. Inicialitzar un nou repositori local
git init

# 2. Configurar la identitat obligatòria de l'autor
git config --global user.name "Marc Soler"
git config --global user.email "msoler@centre.edu"

# 3. Comprovar l'estat actual dels fitxers
git status

# 4. Afegir fitxers a la Staging Area
git add Fitxer.java       # Un sol fitxer
git add .                 # Tots els canvis del directori actual

# 5. Confirmar els canvis amb un missatge descriptiu
git commit -m "feat: implementar el càlcul d'impostos de la factura"

# 6. Consultar l'historial de canvis
git log --oneline --graph --all

# 7. Comparar diferències
git diff                  # Working directory vs Staging area
git diff --staged         # Staging area vs últim commit
```

### El fitxer `.gitignore`
Permet indicar a Git quins fitxers i directoris **mai s'han de pujar al control de versions** (binaris compilats, claus d'accés, dependències externes o configuracions privades de l'IDE):
```gitignore
# Binaris i sortida de compilació Java
*.class
/bin/
/target/
/out/

# Metadades privades d'IDEs
.idea/
*.iml
.vscode/

# Fitxers de sistema operatiu
.DS_Store
Thumbs.db
```

---

## 10.4 Gestió de branques (*Branching*) i fusions (*Merging*)

Una branca en Git és simplement un **punter mòbil lleuger** que apunta a l'últim commit d'una línia temporal de desenvolupament. Crear o canviar de branca és una operació instantània de cost $O(1)$.

- **El punter `HEAD`:** Punter especial que indica sobre quina branca i commit estem situats en aquest moment.

```bash
# Crear una nova branca de funcionalitat
git branch feature/autenticacio

# Canviar a la branca (o modernament: git switch feature/autenticacio)
git checkout feature/autenticacio

# Drecera: Crear i canviar en una sola comanda
git checkout -b feature/autenticacio
```

### Tipus de fusions (*Merge*):
1. **Fusió Fast-Forward:** Es produeix quan la branca destí no ha rebut cap commit nou des que es va crear la branca filla. Git només avança el punter de la branca principal cap endavant sense crear cap commit nou.
2. **Fusió de Tres Vies (*3-Way Merge*):** Es produeix quan ambdues branques han divergit amb commits independents. Git compara el commit comú ancestre amb els dos extrems i crea un nou **commit de fusió (*Merge Commit*)** amb dos pares.
3. **Conflictes de fusió (*Merge Conflicts*):** Ocorren quan dos desenvolupadors han modificat les mateixes línies del mateix fitxer en branques diferents. Git atura el procés i marca el conflicte directament al fitxer per a la seua resolució manual:
   ```java
   <<<<<<< HEAD (la teua branca actual)
   double iva = 0.21;
   =======
   double iva = 0.10; // Reduït per decret
   >>>>>>> feature/nova-tarifa
   ```

---

## 10.5 Col·laboració remota amb GitHub / GitLab

```bash
# Vincular el repositori local amb un repositori remot
git remote add origin https://github.com/usuari/el-meu-projecte.git

# Enviar la branca principal al repositori remot per primera vegada
git push -u origin main

# Descarregar canvis remots sense aplicar-los a la branca actual
git fetch origin

# Descarregar i fusionar els canvis remots directament
git pull origin main
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi del graf d'historial de commits i punters
Considera la següent seqüència de comandes executades en un repositori buit:
```bash
git init
echo "A" > f.txt && git add . && git commit -m "C1"
echo "B" >> f.txt && git add . && git commit -m "C2"
git checkout -b dev
echo "C" >> f.txt && git add . && git commit -m "C3"
git checkout main
echo "D" >> f.txt && git add . && git commit -m "C4"
```

1. Dibuixa el graf d'arbres de commits resultant indicant a quin commit apunta la branca `main`, a quin apunta la branca `dev` i on apunta el punter `HEAD`.
2. Si ara s'executa `git merge dev` estant situats a `main`:
   - Serà una fusió Fast-Forward o una fusió de 3 vies (*3-Way Merge*)? Per què?
   - Quants pares tindrà el nou commit resultant $C5$?
   - Es produirà un conflicte de fusió en el fitxer `f.txt`? Justifica la resposta.

#### Exercici 2: Eficiència d'emmagatzematge en Git: Blobs immutables vs Còpies completes
Un projecte de programari té $500\text{ fitxers de codi}$ amb una mida mitjana de $10\text{ KB}$ per fitxer ($5.000\text{ KB} = 5\text{ MB}$ totals).
- Un desenvolupador fa $100\text{ versions històriques}$ del projecte:
  - **Mètode Tradicional (Còpies manuals de carpeta):** Cada versió és una còpia completa de la carpeta de $5\text{ MB}$.
  - **Mètode Git:** En cada commit només es modifiquen una mitjana de $3\text{ fitxers}$ (la resta de 497 fitxers no canvien). Git només crea 3 nous objectes blob de $10\text{ KB}$ per commit, comprimits internament amb zlib a una mitjana de $3\text{ KB}$ per fitxer.

1. Calcula la mida total ocupada en disc pel Mètode Tradicional després de les 100 versions en Megabytes ($\text{MB}$).
2. Calcula l'espai d'emmagatzematge de la base de dades d'objectes de Git (`.git/objects`) per als 100 commits.
3. Quin és el percentatge d'estalvi d'espai en disc que assoleix Git gràcies a la seua arquitectura de contingut immutable deduplicat?

#### Exercici 3: Resolució matemàtica i sintàctica d'un conflicte de fusió
En una aplicació bancària, dues branques han modificat la funció `calcularComissio(double saldo)`:
```java
<<<<<<< HEAD
    public static double calcularComissio(double saldo) {
        return saldo * 0.02; // Comissió estàndard 2%
    }
=======
    public static double calcularComissio(double saldo) {
        if (saldo > 10000) return 0.0; // Bonificació gran compte
        return saldo * 0.015;
    }
>>>>>>> feature/tarifes-vip
```
1. Explica exactament què significa el marcador `<<<<<<< HEAD`, `=======` i `>>>>>>> feature/tarifes-vip`.
2. Escriu el codi final fusionat que combine ambdues millores de negoci: bonificació a 0 per a saldos $> 10.000$ i comissió de l'$1.5\%$ per a la resta.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'un repositori complet i configuració de `.gitignore`
- **Objectiu:** Inicialitzar un repositori professional evitant la pujada d'artefactes no desitjats.
- **Procediment de taller:**
  1. Crea una carpeta `ProjecteBancari` i inicialitza Git:
     ```bash
     mkdir ProjecteBancari && cd ProjecteBancari
     git init
     ```
  2. Crea un fitxer `.gitignore` que ignore fitxers `*.class`, la carpeta `/target/` i les carpetes `.idea/`.
  3. Crea un fitxer `App.java` i un fitxer binari de prova `App.class`.
  4. Executa `git status` i comprova que `App.class` **no apareix en absolut** gràcies al `.gitignore`.
  5. Fes el primer commit:
     ```bash
     git add .
     git commit -m "chore: inicialitzar repositori i regles de gitignore"
     ```

#### Repte 2: Gestió de Branques i Resolució d'un Conflicte de Fusió
- **Objectiu:** Experimentar el flux complet de divergència i resolució manual de conflictes.
- **Procediment de taller:**
  1. Crea una branca `feature/descompte` i canvia a ella:
     ```bash
     git checkout -b feature/descompte
     ```
  2. Modifica la línia 5 d'`App.java` afegint `double descompte = 0.10;`. Fes un commit.
  3. Torna a la branca `main`:
     ```bash
     git checkout main
     ```
  4. Modifica la mateixa línia 5 d'`App.java` afegint `double descompte = 0.20;`. Fes un commit a `main`.
  5. Intenta fusionar la branca:
     ```bash
     git merge feature/descompte
     ```
  6. Git avisarà d'un conflicte: obre el fitxer, elimina els marcadors de conflicte manualment, decideix el valor final, afegeix amb `git add App.java` i tanca la fusió amb `git commit`.

#### Repte 3: Sincronització amb GitHub mitjançant claus SSH
- **Objectiu:** Configurar l'autenticació segura per clau asimètrica i publicar un repositori.
- **Procediment de taller:**
  1. Comprova si disposes d'una clau SSH:
     ```bash
     ls -la ~/.ssh
     ```
  2. Si no en tens, genera un parell de claus Ed25519:
     ```bash
     ssh-keygen -t ed25519 -C "elmeu.correu@centre.edu"
     ```
  3. Copia la clau pública (`cat ~/.ssh/id_ed25519.pub`) i afegeix-la a la configuració del teu compte de GitHub (*Settings -> SSH and GPG keys*).
  4. Enllaça el teu repositori local i puja els canvis:
     ```bash
     git remote add origin git@github.com:elTeuUsuari/ProjecteBancari.git
     git push -u origin main
     ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He configurat la identitat d'usuari global de Git (`user.name` i `user.email`).
- [ ] He comprès la diferència entre el directori de treball, la Staging Area i el repositori local.
- [ ] He creat i configurat el fitxer `.gitignore` adequat per a projectes Java.
- [ ] He creat, llistat i canviat de branques mitjançant `git branch` i `git checkout / switch`.
- [ ] He fusionat branques amb `git merge` identificant fusions Fast-Forward i 3-Way.
- [ ] He resolt satisfactòriament un conflicte de fusió manualment.
- [ ] He sincronitzat el repositori local amb un remot a GitHub mitjançant `push` i `pull`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura i Cicle de Canvis** | Domina la interacció entre les 3 zones de Git, els hashes immutables i el funcionament intern de l'àrea Staging. | Utilitza `git status`, `add` i `commit` amb solvència escrivint missatges de commit semàntics. | Fa commits bàsics però té confusions sobre què fa `git add` o oblida utilitzar `.gitignore`. | No comprèn el cicle de canvis o puja binaris i fitxers privats al repositori sense control. |
| **Gestió de Branques (Branching)** | Utilitza branques per a aïllar funcionalitats de forma natural, comprenent el moviment del punter `HEAD`. | Crea i canvia de branques amb facilitat per a desenvolupar tasques paral·leles. | Utilitza branques però oblida canviar a la branca correcta abans de començar a codificar. | Treballa directament sempre a la branca `main` sense crear cap branca de funcionalitat. |
| **Fusions i Resolució de Conflictes** | Identifica el tipus de fusió (FF vs 3-Way), interpreta marcadors de conflicte i resol divergències amb criteri tècnic. | Fusiona branques i resol conflictes senzills eliminant les marques de Git adequadament. | Sap fusionar branques netes però es bloqueja quan apareix un conflicte de fusió. | Avorta el procés o esborra fitxers manuals per no saber gestionar un conflicte de merge. |
| **Col·laboració Remota amb GitHub** | Gestiona remots, sincronització amb SSH, Pull Requests i fluxos de treball àgils (GitHub Flow) amb autonomia. | Vincula repositoris remots, puja canvis amb `push` i actualitza amb `pull` satisfactòriament. | Treballa amb repositoris remots però té problemes freqüents d'autenticació o desajustos de branca. | Incapaç de connectar el repositori local amb una plataforma remota com GitHub. |
