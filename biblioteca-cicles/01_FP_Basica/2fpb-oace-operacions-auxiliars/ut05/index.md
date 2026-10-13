---
layout: default
title: "UD5: Manteniment Preventiu, Rendiment i Actualitzacions — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD5"
next_url: "ut0501.html"
next_label: "5.1 ➡️"
---

# UD5: Manteniment Preventiu, Rendiment i Actualitzacions

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-cln" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-trm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-upd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">MANTENIMENT PREVENTIU, RENDIMENT I ACTUALITZACIONS</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Optimització de disc, comanda TRIM, telemetria de recursos i gestió de pegats de seguretat</text>

  <!-- Bloc 1: Neteja de Disc -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cln)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🧹</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Neteja de Disc</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Alliberament Residus</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• cleanmgr.exe: Temporals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Sensor d'emmagatzematge</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• %temp% & Paperera</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Purgat SoftwareDistribution</text>
  </g>

  <!-- Bloc 2: SSD TRIM vs HDD -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-trm)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">SSD TRIM vs HDD</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Salut d'Unitats</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• HDD: Desfragmentació mecànica</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• SSD: TRIM (MAI desfragmentar!)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Diagnòstic S.M.A.R.T.</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• CrystalDiskInfo: Estat bo/risc</text>
  </g>

  <!-- Bloc 3: Monitoratge -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mon)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Monitoratge</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Telemetria & Tasques</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• taskmgr: Ctrl+Maj+Esc</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• CPU, RAM, Disc & Xarxa %</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• htop a consola Linux</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Finalització de tasques bloquejades</text>
  </g>

  <!-- Bloc 4: Inici & Windows Update -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-upd)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Inici & Pegats</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Optimització d'Arrencada</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Deshabilita apps d'impacte alt</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• services.msc: Cua Spooler</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patch Tuesday de seguretat</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Resolució d'errors WU</text>
  </g>
</svg>
</div>

Alliberament d'espai en disc i fitxers temporals, manteniment d'unitats SSD (TRIM) i HDD (desfragmentació), monitorització de recursos amb Administrador de tasques i htop, gestió d'aplicacions d'inici i Windows Update.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **5.1** | **Neteja i alliberament d'espai en disc** | [**Llegir apartat →**](./ut0501.html) |
| **5.2** | **Manteniment d'unitats SSD (TRIM) vs HDD (Desfragmentació)** | [**Llegir apartat →**](./ut0502.html) |
| **5.3** | **Monitorització de recursos: Administrador de tasques i htop** | [**Llegir apartat →**](./ut0503.html) |
| **5.4** | **Gestió d'aplicacions d'inici i serveis del sistema** | [**Llegir apartat →**](./ut0504.html) |
| **5.5** | **Gestió d'actualitzacions: Windows Update i pegats de seguretat** | [**Llegir apartat →**](./ut0505.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 5.1 Neteja i alliberament d'espai en disc

Amb el pas dels mesos d'ús continuat, qualsevol ordinador d'oficina o taller acumula gigabytes de fitxers temporals, memòries cau de navegadors web, informes d'errors i restes d'instal·lacions antigues que alenteixen el sistema i omplin el disc dur inútilment.

### Principals fonts de residus digitals
1. **Fitxers temporals d'usuari i de sistema:** Guardats a les carpetes `C:\Windows\Temp` i `%temp%` (`C:\Users\Usuari\AppData\Local\Temp`).
2. **Memòries cau de navegació web:** Imatges i elements descarregats per Chrome, Edge o Firefox per carregar més ràpid, que poden ocupar fàcilment diversos gigabytes.
3. **Restes d'actualitzacions antigues de Windows:** Fitxers de versions prèvies guardats a la carpeta `Windows.old` o a la memòria cau de Windows Update (`SoftwareDistribution`).
4. **La Paperera de reciclatge:** Molts usuaris obliden buidar-la periòdicament.

---

### Eines d'alliberament integrades en Windows

#### 1. L'Eina clàssica d'Alliberament d'espai en disc (`cleanmgr.exe`)
- Prem `Windows + R`, escriu `cleanmgr` i prem *Intro*.
- Selecciona la unitat `C:`.
- Fes clic al botó **Neteja els fitxers del sistema** (perquè busque també actualitzacions antigues).
- Marca les caselles de *Fitxers temporals d'Internet*, *Paperera de reciclatge*, *Miniatures* i *Neteja de Windows Update*.
- Fes clic a D'acord per esborrar-los de forma segura.

#### 2. El Sensor d'emmagatzematge (*Storage Sense*)
- A Windows 10 i 11 (`Configuració` $\rightarrow$ `Sistema` $\rightarrow$ `Emmagatzematge`), podem activar el **Sensor d'emmagatzematge**:
  - S'executa automàticament en segon pla quan l'espai en disc és baix.
  - Esborra fitxers temporals i buida la paperera si els arxius porten més de 30 dies sense utilitzar-se.

---

## 5.2 Manteniment d'unitats SSD (TRIM) vs HDD (Desfragmentació)

El manteniment que requereix una unitat d'emmagatzematge depèn totalment de la seua tecnologia constructiva física: si és un **disc dur mecànic magnètic (HDD)** o una **unitat d'estat sòlid basada en xips de memòria flash (SSD)**.

### Discs durs magnètics (HDD) i la Desfragmentació
- **Com funcionen:** Guarden la informació en plats metàl·lics giratoris mitjançant un capçal magnètic físic que es mou sobre la superfície.
- **La Fragmentació:** Quan es guarden i s'esborren molts fitxers, un mateix arxiu gran queda repartit en xicotets trossos dispersos per diferents zones del plat. El capçal ha de fer desenes de viatges per llegir un sol fitxer, alentint dràsticament l'ordinador.
- **Manteniment recomanat:** **Desfragmentació periòdica** (un cop al mes): un programa reordena tots els sectors dispersos perquè cada fitxer quede en una seqüència contigua.

---

### Unitats d'estat sòlid (SSD) i la Comanda TRIM

> [!WARNING]
> **MAI desfragmentis una unitat SSD!**
> Els discs SSD no tenen plats giratoris ni capçals mòbils: l'accés a qualsevol cel·la de memòria flash és instantani. Desfragmentar un SSD no augmenta la velocitat i, el que és pitjor, **esgota inútilment els cicles d'escriptura dels xips de memòria escurçant greument la seua vida útil**.

- **La Comanda TRIM:**
  - En lloc de desfragmentar, els SSD utilitzen la comanda **TRIM** (optimització d'unitat).
  - Quan un usuari esborra un fitxer, TRIM avisa al controlador del SSD de quins blocs de memòria han quedat buits perquè els puga netejar prèviament en segon pla, assegurant que les futures escriptures siguen a màxima velocitat.

---

### Comprovació de la salut del disc: Sistema S.M.A.R.T.
Els discs moderns incorporen la tecnologia **S.M.A.R.T.** (*Self-Monitoring, Analysis and Reporting Technology*), que mesura contínuament paràmetres crítics (temperatura, hores d'ús, sectors defectuosos reassignats).
- Amb programes gratuïts de diagnòstic com **CrystalDiskInfo**, el tècnic pot veure l'estat de salut del disc en un segon:
  - **Blau / Bo:** El disc està en perfecte estat.
  - **Groc / Risc:** Hi ha sectors danyats; cal fer una còpia de seguretat immediata de les dades abans que el disc muira!
  - **Roig / Malament:** Fallada imminent.

---

## 5.3 Monitorització de recursos: Administrador de tasques i htop

Quan un usuari ens diu *"l'ordinador va molt lent i el ventilador fa molt de soroll"*, el primer que ha de fer el tècnic és monitoritzar en temps real quin component està saturat al 100%: és la CPU? la memòria RAM? el disc dur? o la xarxa?

### L'Administrador de tasques de Windows (`taskmgr`)
Es pot obrir prement la combinació de tecles **`Ctrl + Maj + Esc`** (o `Ctrl + Alt + Supr` $\rightarrow$ *Administrador de tasques*).

#### Pestanyes essencials:
1. **Pestanya Processos:**
   - Mostra la llista de totes les aplicacions obertes i serveis de fons, amb columnes percentuals de consum de **CPU**, **Memòria RAM**, **Disc** i **Xarxa**.
   - Fent clic a la capçalera de la columna (per exemple *CPU*), la llista s'ordena de major a menor consum.
   - Si un programa s'ha bloquejat ("No respon") i té la CPU al 100%, podem seleccionar-lo i fer clic al botó **Finalitza la tasca (*End task*)** per tancar-lo de forma forçada.
2. **Pestanya Rendiment:**
   - Mostra gràfics en temps real de l'activitat del processador, velocitat en GHz, memòria RAM ocupada, velocitat de lectura/escriptura dels discs i gràfica de trànsit de la targeta de xarxa.

---

### Monitorització en Linux amb `htop`
A la consola de Linux, l'ordre `htop` ofereix un panell visual interactiu excepcional en colors:
- Barres superiors que mostren el percentatge de càrrega de cada nucli del processador (CPU1, CPU2...).
- Barra de memòria RAM física i memòria d'intercanvi (*Swap*).
- Llista de processos ordenats per PID (identificador de procés), usuari i percentatge de memòria.
- Tecles d'acció ràpida: prem `F9` per matar (*kill*) un procés bloquejat, o `F6` per canviar el criteri d'ordenació.

---

## 5.4 Gestió d'aplicacions d'inici i serveis del sistema

Un dels motius més freqüents pels quals un ordinador triga diversos minuts a arrencar des que es prem el botó d'engegada és que **moltes aplicacions s'autonomenen per carregar-se soles a l'inici de la sessió** (Spotify, Discord, Steam, actualitzadors d'impressores, Skype, OneDrive, etc.).

Cada aplicació que s'inicia amb l'equip consumeix un tros de memòria RAM i fa que el disc dur treballe el doble durant l'arrencada.

---

### Desactivar aplicacions d'inici innecessàries en Windows

1. Obre l'**Administrador de tasques** (`Ctrl + Maj + Esc`).
2. Fes clic a la pestanya o icona lateral **Aplicacions d'inici (*Startup apps*)**.
3. Observa la columna **Impacte a l'inici (*Startup impact*)**:
   - *Alt (*High*):* Retarda greument l'arrencada de l'equip.
   - *Mitjà / Baix:* Retard lleu.
4. Per a qualsevol programa que no siga essencial des del primer segon (per exemple programes de xat o jocs):
   - Fes clic amb el botó dret i selecciona **Deshabilita (*Disable*)**.
   > [!TIP]
   > Deshabilitar-lo a l'inici **no esborra el programa**: l'usuari el podrà continuar obrint manualment quan vulga fent doble clic a la seua icona; simplement ja no carregarà sol al començament.

---

### Serveis de sistema en segon pla (`services.msc`)
Els **serveis** són processos de baix nivell que s'executen en silenci sense finestra visible per donar suport a funcions del sistema (com el servei de cua d'impressió *Spooler*, o el servei de xarxa).
- Prem `Windows + R`, escriu `services.msc` i prem *Intro*.
- Permet veure l'estat de cada servei (En execució, Aturat) i el tipus d'inici (Automàtic, Manual, Deshabilitat).
- Si un servei falla (per exemple la impressora no imprimeix perquè la cua ha quedat encallada), podem fer clic dret $\rightarrow$ **Reinicia** per restablir-lo ràpidament.

---

## 5.5 Gestió d'actualitzacions: Windows Update i pegats de seguretat

Cap sistema operatiu és perfecte: contínuament es descobreixen nous forats de seguretat (*vulnerabilitats*) i errades de programari (*bugs*) que els ciberdelinqüents poden aprofitar per atacar equips no protegits. Per això, el manteniment de les actualitzacions és una tasca crítica.

### Tipus d'actualitzacions en Windows
1. **Actualitzacions de qualitat i seguretat (Pegats cumulatius):**
   - Es publiquen mensualment (conegut com a *Patch Tuesday*, el segon dimarts de cada mes).
   - Tanquen vulnerabilitats conegudes, milloren l'estabilitat i corregeixen errors de funcionament.
2. **Actualitzacions de característiques (*Feature Updates*):**
   - Es publiquen un cop a l'any (com ara Windows 11 versió 23H2 o 24H2).
   - Introdueixen noves funcions, redissenys visuals i millores estructurals.

---

### Com gestionar Windows Update com a tècnic

1. Obre **Configuració** (`Windows + I`) $\rightarrow$ **Windows Update**.
2. Fes clic a **Comprova si hi ha actualitzacions**.
3. El sistema descarregarà i instal·larà els pegats pendents.
4. Si demana reiniciar, programa el reinici fora de les hores d'ús laboral de l'equip (*Hores actives*).

---

### Resolució de problemes quan Windows Update falla
De vegades una actualització queda encallada ("Error 0x80070002" o bucle infinit al 20%):
- **Eina de resolució de problemes:** A *Configuració* $\rightarrow$ *Sistema* $\rightarrow$ *Resolució de problemes*, executa la utilitat automàtica de Windows Update.
- **Neteja de la carpeta de descàrregues:**
  1. Obre la consola com a administrador i atura el servei: `net stop wuauserv`
  2. Esborra els fitxers de la carpeta `C:\Windows\SoftwareDistribution\Download`
  3. Torna a iniciar el servei: `net start wuauserv`
  4. Torna a buscar actualitzacions.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de desgast de disc SSD i vida útil en TBW (*Total Bytes Written*)
La vida útil dels xips de memòria flash NAND d'una unitat SSD es mesura en terabytes totals escrits (**TBW**). Un cop superada aquesta xifra, les cel·les perden la capacitat de retindre càrrega elèctrica:
$$\text{Vida Útil (Dies)} = \frac{\text{TBW} \times 10^{12} \text{ bytes}}{\text{Escriptures Diàries (Bytes/dia)}} = \frac{\text{TBW} \times 1.000\text{ GB}}{\text{Consum Diari (GB/dia)}}$$
1. En un equip de sobretaula s'instal·la un disc SSD NVMe de $1\text{ TB}$ amb una garantia del fabricant de **$600\text{ TBW}$**.
   - Si un usuari d'oficina escriu una mitjana de $20\text{ GB per dia}$ (navegació, documents, temporals), quants dies i anys trigarà a esgotar el límit de garantia?
   - Si l'equip s'utilitza com a servidor de bases de dades escrivint intensivament $150\text{ GB per dia}$, a quants anys es redueix la seua vida útil?
2. Explica per què desfragmentar periòdicament un SSD com si fora un disc dur mecànic HDD consumeix inútilment gigabytes d'escriptura accelerant el desgast de les cel·les sense aportar cap millora de velocitat.
3. Quina funció realitza la comanda **TRIM** del sistema operatiu i com s'activa automàticament a Windows (`fsutil behavior query DisableDeleteNotify` $\rightarrow$ un valor de $0$ indica que TRIM està actiu)?

#### Exercici 2: Anàlisi d'impacte en temps d'arrencada i consum de memòria RAM
En auditar un ordinador d'un departament de gestió, el tècnic comprova que triga $1\text{ minut i } 45\text{ segons}$ ($105\text{ s}$) a arrencar completament fins a mostrar l'escriptori operatiu. A la pestanya *Aplicacions d'inici* de l'Administrador de tasques es detecten els següents programes habilitats:

| Aplicació a l'Inici | Impacte Registrat | Consum RAM en Repòs | Funció de l'Aplicació |
| :--- | :---: | :---: | :--- |
| **Microsoft OneDrive** | Alt ($12\text{ s}$) | $180\text{ MB}$ | Sincronització de núvol laboral |
| **Spotify** | Alt ($10\text{ s}$) | $240\text{ MB}$ | Reproductor de música personal |
| **Discord** | Alt ($9\text{ s}$) | $320\text{ MB}$ | Xat de veu |
| **Steam Client Bootstrapper** | Alt ($14\text{ s}$) | $290\text{ MB}$ | Plataforma de videojocs |
| **Actualitzador d'impressores** | Baix ($2\text{ s}$) | $45\text{ MB}$ | Cerca de nous drivers |

1. Calcula el retard total en segons afegit a l'arrencada exclusivament per les aplicacions no laborals (Spotify, Discord i Steam).
2. Quanta memòria RAM resident sumen en conjunt aquestes tres aplicacions d'oci executant-se en silenci?
3. Si es deshabiliten a l'inici aquestes 3 aplicacions, quin serà el nou temps estimat d'arrencada de l'equip i quin percentatge de reducció temporal s'haurà aconseguit?

#### Exercici 3: Diagnòstic de telemetria S.M.A.R.T. mitjançant PowerShell
1. Obre PowerShell com a administrador i executa les següents consultes per obtenir dades de fiabilitat física del disc:
   ```powershell
   Get-PhysicalDisk | Select-Object DeviceId, FriendlyName, MediaType, HealthStatus, OperationalStatus
   Get-StorageReliabilityCounter | Select-Object DeviceId, Temperature, ReadErrorsTotal, WriteErrorsTotal, Wear
   ```
2. Analitza la sortida de la comanda:
   - Quin valor mostra la columna `MediaType` (`SSD` o `HDD`)?
   - Quina temperatura actual en graus Celsius registra la unitat? A partir de quina temperatura ($>60\text{ °C}$) comença a degradar-se el rendiment tèrmic d'un SSD NVMe (*Thermal Throttling*)?
   - Si la columna `Wear` (percentatge de desgast) marca un $15\%$, quin percentatge de vida útil roman disponible a la unitat?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Protocol integral de neteja preventiva de disc en Windows
- **Objectiu:** Executar un procediment metòdic de manteniment recuperant el màxim espai de disc possible.
- **Procediment de taller:**
  1. Consulta l'espai lliure inicial de la unitat `C:` (`df` o explorador) i anota'l a la fitxa tècnica.
  2. Executa el netejador oficial avançat de Windows:
     - Prem `Windows + R`, escriu `cleanmgr` i selecciona la unitat `C:`.
     - Fes clic a **Neteja els fitxers del sistema** i marca totes les opcions (especialment *Neteja de Windows Update* i *Fitxers temporals*). Executa la neteja.
  3. Purga manualment els fitxers temporals volàtils d'usuari:
     - Prem `Windows + R`, escriu `%temp%` i prem *Intro*.
     - Selecciona tots els arxius (`Ctrl + E`) i prem `Maj + Supr` per esborrar-los de forma permanent (omet els que el sistema indique que estan en ús per programes oberts).
  4. Configura el **Sensor d'emmagatzematge** a *Configuració* $\rightarrow$ *Emmagatzematge*: activa la neteja automàtica setmanal i la supressió de la paperera després de 14 dies.
  5. Anota l'espai lliure final i calcula quants gigabytes s'han recuperat amb el protocol.

#### Repte 2: Resolució d'incidència d'embús a la cua d'impressió (*Print Spooler*)
- **Objectiu:** Solucionar una de les avaries més freqüents en entorns administratius utilitzant la consola de serveis.
- **Situació:** En enviar un document de 100 pàgines, la impressora s'encalla i cap ordinador de la xarxa pot imprimir perquè la cua de treballs ha quedat congelada en estat *"S'està suprimint..."*:
  1. Obre la consola de símbol del sistema (`cmd.exe`) com a administrador.
  2. Atura el servei de cua d'impressió teclejant:
     ```cmd
     net stop spooler
     ```
  3. Navega fins a la carpeta del sistema on Windows emmagatzema els treballs d'impressió pendents en format temporal:
     ```cmd
     del /Q /F C:\Windows\System32\spool\PRINTERS\*.*
     ```
  4. Torna a iniciar el servei de cua d'impressió:
     ```cmd
     net start spooler
     ```
  5. Obre la cua de la impressora (`control printers`) i comprova que apareix completament neta i llesta per rebre nous documents de treball.

#### Repte 3: Script automatitzat de restabliment de Windows Update
- **Objectiu:** Crear una eina tècnica en fitxer `.bat` per resoldre fallades d'actualitzacions bloquejades.
- **Procediment tècnic:**
  1. Obre el Bloc de notes i redacta el següent script de manteniment:
     ```bat
     @echo off
     echo ============================================
     echo RESTABLIMENT DE WINDOWS UPDATE - TALLER FPB
     echo ============================================
     echo 1. Aturant serveis d'actualitzacio...
     net stop wuauserv
     net stop bits
     net stop cryptsvc

     echo 2. Purgant memoria cau de descarregues...
     rmdir /s /q C:\Windows\SoftwareDistribution\Download
     mkdir C:\Windows\SoftwareDistribution\Download

     echo 3. Reiniciant serveis...
     net start cryptsvc
     net start bits
     net start wuauserv

     echo ============================================
     echo Protocol completat. Comprova actualitzacions!
     pause
     ```
  2. Guarda l'arxiu a l'escriptori amb el nom `Repara_Update.bat` (triant tipus *Tots els fitxers*).
  3. Executa l'script fent clic dret $\rightarrow$ *Executa com a administrador*.
  4. Obre Windows Update i comprova com torna a descarregar la llista de pegats des de zero sense l'error anterior.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He alliberat espai en disc mitjançant `cleanmgr.exe`, buidat de `%temp%` i configurat el Sensor d'emmagatzematge.
- [ ] He explicat per què s'ha de desfragmentar un disc mecànic HDD i per què MAI s'ha de desfragmentar un disc SSD.
- [ ] He descrit la funció de la comanda TRIM per a la recollida de residus en xips de memòria flash.
- [ ] He interpretat els paràmetres de salut S.M.A.R.T. (temperatura, hores d'ús, sectors reassignats i TBW).
- [ ] He utilitzat l'Administrador de tasques (`taskmgr`) i `htop` per identificar processos que saturen la CPU o la RAM.
- [ ] He deshabilitat aplicacions d'impacte alt a l'inici per reduir el temps d'arrencada de l'equip.
- [ ] He gestionat serveis de sistema (`services.msc`, `net stop/start spooler`) i resolt errors de Windows Update.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Alliberament d'espai en disc** | Executa neteges profundes de fitxers de sistema, temporals d'usuari i configura el Sensor d'emmagatzematge amb criteri. | Utilitza `cleanmgr` i buida la carpeta `%temp%` de forma autònoma recuperant gigabytes d'espai. | Buida la paperera de reciclatge però oblida els fitxers temporals de sistema o actualitzacions. | Desconeix com alliberar espai o intenta esborrar carpetes protegides del sistema per guanyar espai. |
| **Manteniment SSD (TRIM) vs HDD** | Justifica el funcionament de TRIM, la desfragmentació mecànica i calcula la vida útil d'un SSD en TBW amb rigor matemàtic. | Comprèn per què no s'ha de desfragmentar un SSD i sap interpretar l'estat S.M.A.R.T. | Recorda que els SSD no es desfragmenten però no sap explicar per què ni què és TRIM. | Desfragmenta unitats SSD de forma reiterada o confon HDD amb SSD. |
| **Telemetria de rendiment (CPU/RAM)** | Identifica a l'acte colls d'ampolla en CPU, RAM o disc a `taskmgr` i `htop`, finalitzant tasques bloquejades amb seguretat. | Utilitza l'Administrador de tasques per detectar processos amb consum alt i sap ordenar columnes. | Obre l'Administrador de tasques però li costa interpretar els percentatges de CPU i memòria. | No sap com esbrinar per què l'ordinador va lent o tanca processos del sistema crítics. |
| **Optimització d'arrencada i serveis** | Audita aplicacions d'inici reduint temps de càrrega i resol problemes de serveis en segon pla (Spooler) per consola. | Deshabilita programes d'impacte alt a l'inici i sap reiniciar un servei encallat des de `services.msc`. | Deshabilita aplicacions però no sap diferenciar si una aplicació és necessària per al sistema. | Deshabilita l'antivirus a l'inici o és incapaç de localitzar la pestanya d'inici. |
| **Windows Update i pegats de seguretat** | Diferencia pegats de seguretat d'actualitzacions de característiques i repara errors de descàrrega mitjançant scripts de consola. | Cerca i instal·la actualitzacions des de Windows Update i programa reinicis en hores no actives. | Actualitza el sistema des de la interfície bàsica però s'encalla quan apareix un codi d'error. | Desactiva completament les actualitzacions deixant l'equip exposat a forats de seguretat. |


