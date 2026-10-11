---
layout: default
title: "UD5: Manteniment Preventiu, Rendiment i Actualitzacions — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD5"
next_url: "ut0501.md"
next_label: "5.1 ➡️"
---

# UD5: Manteniment Preventiu, Rendiment i Actualitzacions

Alliberament d'espai en disc i fitxers temporals, manteniment d'unitats SSD (TRIM) i HDD (desfragmentació), monitorització de recursos amb Administrador de tasques i htop, gestió d'aplicacions d'inici i Windows Update.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **5.1** | **Neteja i alliberament d'espai en disc** | [**Llegir apartat →**](./ut0501.md) |
| **5.2** | **Manteniment d'unitats SSD (TRIM) vs HDD (Desfragmentació)** | [**Llegir apartat →**](./ut0502.md) |
| **5.3** | **Monitorització de recursos: Administrador de tasques i htop** | [**Llegir apartat →**](./ut0503.md) |
| **5.4** | **Gestió d'aplicacions d'inici i serveis del sistema** | [**Llegir apartat →**](./ut0504.md) |
| **5.5** | **Gestió d'actualitzacions: Windows Update i pegats de seguretat** | [**Llegir apartat →**](./ut0505.md) |

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

