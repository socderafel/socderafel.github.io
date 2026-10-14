---
layout: default
title: "UD2: Unitats Funcionals de l'Ordinador — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD2"
---

# 🧠 UD2: Unitats Funcionals de l'Ordinador (Arquitectura de Sistemes)

Benvingut/da a la **Unitat Didàctica 2** de MMSCI. En aquest bloc temàtic aprofundirem en l'arquitectura de Von Neumann, coneixerem la composició de la CPU (Unitat de Control, ALU i registres), aprendrem com s'organitza la piràmide de memòria (des de la memòria cau fins als discs) i analitzarem com viatja la informació a través dels busos de dades, adreces i control.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-cpu" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mem" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-bus" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cicle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ARQUITECTURA DE SISTEMES: MODEL VON NEUMANN I SUBSISTEMES DEL PC</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Processament d'instruccions, jerarquia de memòria i busos de comunicació interna</text>

  <!-- Bloc 1: CPU (UC + ALU) -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cpu)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">CPU (Processador)</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Nucli de Computació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• UC: Descodifica ordres</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ALU: Càlculs i lògica</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Registres: PC, IR, ACC</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Rellotge: Freqüència (GHz)</text>
  </g>

  <!-- Bloc 2: Jerarquia de Memòria -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mem)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Jerarquia Memòria</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Piràmide de Rendiment</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1. Registres CPU (0,5 ns)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2. Cau L1 / L2 / L3 (SRAM)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3. Memòria RAM (DRAM)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 4. Emmagatzematge (SSD/HDD)</text>
  </g>

  <!-- Bloc 3: Busos del Sistema -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-bus)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🚌</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Busos de Sistema</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Línies de Comunicació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Dades: Bidireccional (bits)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Adreces: Unidireccional</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Control: Senyals R/W, IRQ</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Amplada de banda (GB/s)</text>
  </g>

  <!-- Bloc 4: Cicle d'Instrucció -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cicle)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cicle d'Instrucció</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Execució de Codi</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1. Fetch: Captació des de RAM</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2. Decode: Descodificació UC</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3. Execute: Càlcul ALU</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 4. Writeback: Registre destí</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **2.1** | Model i arquitectura de Von Neumann | [**📘 Llegir Apartat 2.1 →**](./ut0201.html) |
| **2.2** | La Unitat Central de Processament (CPU): UC, ALU i registres | [**📘 Llegir Apartat 2.2 →**](./ut0202.html) |
| **2.3** | La jerarquia de memòria de l'ordinador (Registres, Cau L1/L2/L3, RAM i ROM) | [**📘 Llegir Apartat 2.3 →**](./ut0203.html) |
| **2.4** | El subsistema d'entrada/eixida i els busos de comunicació (Dades, adreces i control) | [**📘 Llegir Apartat 2.4 →**](./ut0204.html) |
| **2.5** | El cicle d'execució d'una instrucció (Fetch, Decode, Execute) | [**📘 Llegir Apartat 2.5 →**](./ut0205.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 1:** Selecciona els components i elements que configuren els equips microinformàtics, descrivint les seues característiques i relacions de compatibilitat.
  - *CE a:* S'han descrit els blocs funcionals d'un ordinador segons el model de Von Neumann.
  - *CE c:* S'ha diferenciat el paper de la CPU, la memòria principal i el subsistema d'E/S.
  - *CE e:* S'ha explicat la jerarquia de memòria i la necessitat de la memòria cau.

---

## 📊 Matriu Comparativa de la Jerarquia de Memòria i Paràmetres Tècnics

| Nivell de Memòria | Tipus de Tecnologia | Capacitat Típica | Temps d'Accés (Latència) | Taxa de Transferència | Ubicació Física | Volatilitat |
| :--- | :---: | :---: | :---: | :---: | :--- | :---: |
| **Registres de CPU** | Flip-Flops d'alta velocitat | 1 a 4 KB | 0,2 – 0,5 ns | > 1.000 GB/s | Integrats directament als nuclis de la CPU | Volàtil (es perd sense corrent) |
| **Memòria Cau L1** | SRAM (Static RAM) | 32 – 64 KB per nucli | 1 – 1,5 ns | ~ 500 – 800 GB/s | Interna a cada nucli del silici | Volàtil |
| **Memòria Cau L2** | SRAM (Static RAM) | 512 KB – 2 MB per nucli | 3 – 5 ns | ~ 300 – 450 GB/s | Dedicada o compartida per parella de nuclis | Volàtil |
| **Memòria Cau L3** | SRAM d'alta densitat | 16 – 96 MB | 10 – 15 ns | ~ 150 – 250 GB/s | Compartida per tots els nuclis de la CPU | Volàtil |
| **Memòria Principal (RAM)** | DRAM (DDR4 / DDR5) | 8 – 64 GB | 50 – 70 ns | 25 – 60 GB/s | Mòduls DIMM a les ranures de la placa base | Volàtil |
| **Emmagatzematge NVMe (SSD)** | Memòria Flash NAND 3D | 500 GB – 4 TB | 20 – 100 $\mu\text{s}$ | 3,5 – 7,5 GB/s | Connectat a la ranura M.2 PCIe | **No volàtil** (permanent) |
| **Disc Dur Mecànic (HDD)** | Plats magnètics giratoris | 1 – 16 TB | 10 – 15 $\text{ms}$ | 120 – 220 MB/s | Badia de 3,5" connectat per cable SATA | **No volàtil** (permanent) |

---

## 📌 Resum Didàctic de la Unitat

1. **Model de Von Neumann:** Programa i dades emmagatzemats en una mateixa memòria física. Es compon de 4 blocs fonamentals: CPU, Memòria principal, Subsistema d'Entrada/Eixida i Busos de comunicació.
2. **Components de la CPU:** 
   - **UC (Unitat de Control):** Coordina, descodifica i sincronitza totes les instruccions.
   - **ALU (Unitat Aritmeticològica):** Realitza operacions matemàtiques bàsiques (+, -, *, /) i comparacions booleanes (AND, OR, NOT).
   - **Registres:** Memòria ultra-ràpida interna de la CPU (Comptador de Programa PC, Registre d'Instrucció IR, Acumulador ACC).
3. **Jerarquia de Memòria:** Com més propera i ràpida és una memòria a la CPU, més cara és de fabricar i menor capacitat té (Registres > Cau L1 > L2 > L3 > RAM > SSD/HDD).
4. **Busos de Comunicació:** 
   - **Bus de Dades:** Bidireccional (transporta la informació i operands de càlcul).
   - **Bus d'Adreces:** Unidireccional des de la CPU (indica la posició física de memòria que es vol llegir o escriure).
   - **Bus de Control:** Bidireccional (senyals de lectura/escriptura, rellotge i interrupcions IRQ).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul d'Amplada de Banda del Bus de Dades
L'amplada de banda o velocitat màxima de transferència d'un bus de comunicació ($BW$) es calcula multiplicant l'amplada de bus en bytes per la seua freqüència de treball efectiva:
$$BW = \frac{\text{Amplada del bus (bits)}}{8} \times \text{Freqüència efectiva (Hz)}$$
1. Un ordinador antic utilitza un bus frontal de 32 bits que funciona a una freqüència de $100\text{ MHz}$ ($100.000.000\text{ Hz}$). Quina és la seua amplada de banda màxima en Megabytes per segon (MB/s)?
2. Un equip modern compta amb memòria RAM DDR4 que opera amb un bus de 64 bits a una freqüència efectiva de $3200\text{ MHz}$. Calcula la seua amplada de banda en Megabytes per segon i converteix el resultat a Gigabytes per segon (GB/s).
3. Si aquest equip s'amplia amb un segon mòdul de memòria per activar el mode **Dual Channel** (amplada efectiva combinada de 128 bits), quina amplada de banda total assolirà? Compara aquest valor amb la memòria en Single Channel.

#### Exercici 2: Límit de Direccionament de Memòria RAM pel Bus d'Adreces
La capacitat màxima de memòria RAM que un processador pot gestionar directament ve determinada pel nombre de línies físiques del seu bus d'adreces ($n$):
$$\text{Adreces possibles} = 2^n \text{ posicions de memòria (bytes)}$$
1. Si un microprocessador clàssic té un bus d'adreces de 16 bits, quantes posicions de memòria pot adreçar? Expressa el resultat en Kilobytes (KB), tenint en compte que $1\text{ KB} = 1024\text{ bytes}$.
2. Un processador amb arquitectura de 32 bits disposa d'un bus d'adreces de 32 línies físiques ($n = 32$). Demostra matemàticament per què un sistema operatiu de 32 bits no pot aprofitar més de $4\text{ GB}$ de memòria RAM encara que s'instal·len mòduls físics de major capacitat.
3. Un processador actual de 64 bits té un bus d'adreces físic de 48 línies actives ($2^{48}$ bytes). Quina capacitat de memòria RAM màxima en Terabytes (TB) pot arribar a gestionar teòricament?

#### Exercici 3: Descomposició del Cicle d'Instrucció (Fetch, Decode, Execute)
Analitza pas a pas què fa la CPU quan executa la instrucció senzilla en llenguatge màquina `ADD 25, R1` (Sumar el valor de la posició 25 al registre de treball R1):
1. **Fase 1 (Fetch - Captació):** Què fa el Comptador de Programa (PC)? On viatja l'adreça de la instrucció i a través de quin bus? On s'emmagatzema la instrucció dins de la CPU un cop captada?
2. **Fase 2 (Decode - Descodificació):** Quin component intern de la CPU interpreta el codi d'operació? Com sap si es tracta d'una suma, una resta o una lectura?
3. **Fase 3 (Execute - Execució):** Quin bloc funcional s'encarrega de fer la suma matemàtica? Quins registres intervenen en el càlcul?
4. **Fase 4 (Writeback - Escriptura del resultat):** On es desa el resultat final i com s'actualitza el comptador de programa per a la següent instrucció?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Auditoria de Processador i Memòria Cau amb CPU-Z o Comandes CLI
- **Objectiu:** Identificar les característiques tècniques reals del processador i comprovar la mida exacta de cada nivell de memòria cau.
- **Eines necessàries:** Ordinador de taller amb Windows o Linux, aplicació gratuïta CPU-Z (o comanda `lscpu` a la consola de Linux / PowerShell `Get-CimInstance Win32_Processor`).
- **Passos d'execució:**
  1. Obre l'aplicació CPU-Z o executa a la consola PowerShell:
     ```powershell
     Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors, MaxClockSpeed, L2CacheSize, L3CacheSize
     ```
  2. Localitza a la pestanya **CPU**:
     - Model complet de processador i socket associat.
     - Nombre de nuclis físics (*Cores*) i nombre de fils d'execució (*Threads*).
     - Freqüència de rellotge actual i freqüència màxima turbo.
  3. Comprova a la secció **Caches**:
     - Mida de la memòria cau L1 de dades (L1 Data) i d'instruccions (L1 Inst).
     - Mida de la memòria cau L2 i si és per nucli o compartida.
     - Mida de la memòria cau L3 compartida.
  4. Redacta una fitxa tècnica en format Markdown amb aquestes dades per al quadern d'equip.

#### Repte 2: Diagnòstic de Latència i Rendiment de Memòria al Gestor de Tasques
- **Objectiu:** Comprovar com interactua el subsistema de memòria amb la CPU i analitzar la memòria cau del sistema operatiu en temps real.
- **Eines necessàries:** Sistema operatiu Windows 10/11 o distribució Linux de taller.
- **Passos d'execució:**
  1. Prem `Ctrl + Shift + Esc` per obrir el **Gestor de Tasques** de Windows i fes clic a la pestanya **Rendiment**.
  2. Selecciona la secció **CPU**:
     - Observa la gràfica d'ús en temps real. Fes clic dret sobre la gràfica i canvia la vista a *Processadors lògics*. Quants gràfics individuals apareixen?
     - Comprova la xifra de *Velocitat*, *Processos actius* i *Fils*.
  3. Selecciona la secció **Memòria**:
     - Comprova la quantitat de memòria total instal·lada, la memòria en ús i la memòria disponible.
     - Localitza la línia **A la memòria cau** (*Cached memory*). Explica per què el sistema operatiu utilitza la memòria RAM sobrant com a cau de disc.
     - Comprova la velocitat de la memòria RAM en MHz i el nombre de ranures utilitzades (per exemple, "2 de 4").
  4. Obre 5 pestanyes de navegador web i una aplicació ofimàtica. Registra l'increment de consum de memòria RAM i analitza si s'ha requerit l'ús de memòria virtual de paginació.

#### Repte 3: Comparativa de Latència entre Memòria RAM i Disc d'Emmagatzematge
- **Objectiu:** Experimentar la diferència dràstica de velocitat entre la memòria principal (DRAM) i la memòria massiva secundària (SSD/HDD).
- **Eines necessàries:** Eina CrystalDiskMark (per a disc) i AIDA64 o UserBenchmark (per a memòria RAM).
- **Passos d'execució:**
  1. Executa una prova de velocitat del disc principal de l'equip amb CrystalDiskMark (Lectura seqüencial i lectura aleatòria 4K).
  2. Registra la velocitat màxima en MB/s obtinguda pel disc.
  3. Consulta la velocitat de transferència teòrica de la memòria RAM de l'equip calculada al Bloc A (per exemple, 25.600 MB/s per a DDR4-3200).
  4. Calcula la ràtio de velocitat: quantes vegades és més ràpida la memòria RAM que el disc SSD de l'equip?
  5. Justifica per què quan un equip es queda sense memòria RAM lliure i comença a fer paginació al disc (*swap*), el sistema operatiu es torna extremadament lent i no respon amb fluïdesa.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació d'Arquitectura i Sistemes
- [ ] S'ha identificat correctament el model de Von Neumann i els seus 4 blocs funcionals.
- [ ] S'ha diferenciat la missió de la Unitat de Control (UC), la Unitat Aritmeticològica (ALU) i els registres interns.
- [ ] S'ha ordenat la jerarquia de memòria de més ràpida a més lenta sense confondre capacitats ni latències.
- [ ] S'han aplicat les fórmules de càlcul d'amplada de banda i adreçament de memòria amb unitats correctes.
- [ ] S'han extret les dades reals de CPU i memòries cau amb el programari de diagnòstic de laboratori.
- [ ] S'ha documentat la diferència entre memòria física volàtil (RAM) i memòria d'emmagatzematge permanent (SSD/HDD).

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD2)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificació de Blocs Funcionals i CPU** | Descriu amb exactitud l'arquitectura de Von Neumann, la funció de la UC, ALU, registres i les fases del cicle d'instrucció. | Identifica els blocs de la CPU i explica el cicle d'execució amb petites imprecisions en els registres. | Reconeix la CPU com a nucli de processament i diferencia la UC de l'ALU amb suport del resum. | No sap identificar els components d'una CPU ni explicar com processa les ordres bàsiques. |
| **Jerarquia de Memòria i Busos** | Classifica tots els nivells de memòria segons latència, cost i capacitat, i explica la funció dels 3 tipus de busos. | Ordena correctament la piràmide de memòria i distingeix el bus de dades del bus d'adreces. | Distingeix entre memòria RAM volàtil i disc permanent, però dubta amb els nivells de cau L1/L2/L3. | Confon la memòria RAM amb el disc dur o no comprèn per què calen memòries cau ràpides. |
| **Càlculs Tècnics de Rendiment** | Resol amb precisió els càlculs d'amplada de banda ($BW$) i límit d'adreçament ($2^n$) indicant les unitats adients. | Aplica les fórmules amb correcció i comet només errors menors d'arrodoniment o conversió d'unitats. | Realitza els càlculs bàsics amb ajut del model matemàtic guiat. | Incapaç d'aplicar les fórmules o no comprèn la relació entre bits d'adreça i capacitat en GB. |
| **Auditoria Pràctica de Maquinari** | Executa les eines d'auditoria (CPU-Z/CLI/Gestor de Tasques), extreu tots els paràmetres tècnics i redacta la fitxa tècnica. | Utilitza les eines de monitoratge i obté les dades fonamentals de nuclis i memòria del sistema. | Obre les eines de diagnòstic i localitza la CPU i la RAM amb indicacions del docent. | No sap utilitzar el gestor de tasques ni les eines de diagnòstic per comprovar el maquinari. |
