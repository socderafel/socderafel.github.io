---
layout: default
title: "UD7: Programari d'Utilitat, Eines de Suport i Assistència Remota — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD7"
next_url: "ut0701.html"
next_label: "7.1 ➡️"
---

# UD7: Programari d'Utilitat, Eines de Suport i Assistència Remota

Compressió i descompressió de fitxers amb 7-Zip, gestió de documents PDF, eines d'informació de maquinari (CPU-Z, CrystalDiskInfo), eines d'assistència remota (AnyDesk, Escriptori Remot) i pràctica de suport remot.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **7.1** | **Compressió i protecció de fitxers amb 7-Zip** | [**Llegir apartat →**](./ut0701.html) |
| **7.2** | **Gestió de documents PDF: visors, lectors i impressió virtual** | [**Llegir apartat →**](./ut0702.html) |
| **7.3** | **Eines d'inventari i informació de maquinari (CPU-Z, HWMonitor)** | [**Llegir apartat →**](./ut0703.html) |
| **7.4** | **Eines d'assistència i control remot: RDP, AnyDesk i TeamViewer** | [**Llegir apartat →**](./ut0704.html) |
| **7.5** | **Pràctica: Sessió de suport tècnic remot entre equips d'aula** | [**Llegir apartat →**](./ut0705.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 7.1 Compressió i protecció de fitxers amb 7-Zip

Enviar desenes de fitxers solts per correu electrònic o guardar còpies de seguretat ocupa molt d'espai i resulta caòtic. Els **programes de compressió de fitxers** resolen aquest problema agrupant múltiples arxius i carpetes dins d'un únic fitxer comprimit anomenat **arxiu contenidor** (*Archive*).

### Què és la compressió sense pèrdua (*Lossless*)?
Els compressors d'arxius com **7-Zip** o **WinRAR** utilitzen algorismes matemàtics que detecten patrons i cadenes de text repetides dins dels fitxers i les substitueixen per codis més curts. Quan es descomprimeix l'arxiu, **la informació es recupera exactament al 100% idèntica a l'original**, sense perdre ni un sol bit.

---

### Formats de compressió més habituals
- **`.zip`:** És el format més universal del món. Windows, Linux i macOS el poden obrir i crear de forma nativa sense necessitat d'instal·lar cap programa addicional.
- **`.7z`:** El format nadiu de 7-Zip. Ofereix una de les **taxes de compressió més altes del mercat** (els fitxers queden molt més xicotets que en ZIP) i suporta fitxers de fins a 16 milions de Terabytes.
- **`.rar`:** Format propietari de WinRAR. Molt popular però requereix llicència comercial per crear arxius.
- **`.tar.gz`:** Estàndard en sistemes Linux i servidors; combina l'empaquetador `tar` amb la compressió `gzip`.

---

### Protecció d'arxius mitjançant xifratge de contrasenya (AES-256)
7-Zip permet protegir qualsevol arxiu comprimit amb contrasenya utilitzant el xifratge militar **AES de 256 bits**:
- A més de demanar contrasenya per descomprimir, permet marcar la casella **"Xifra els noms dels fitxers"**: d'aquesta manera, ningú podrà ni tan sols veure com es diuen els arxius de dins sense saber la clau!

---

## 7.2 Gestió de documents PDF: visors, lectors i impressió virtual

El format **PDF** (*Portable Document Format*), creat originalment per Adobe i reconegut com a estàndard internacional obert (ISO 32000), és el format universal per excel·lència per a la difusió de documents oficials, factures, manuals tècnics i contractes.

### Per què el format PDF és un estàndard universal?
- **Fidelitat absoluta de visualització:** Un document en format Word (`.docx`) pot canviar de tipografia, desquadrar taules o moure imatges si s'obre en un altre ordinador amb una versió diferent d'Office. En canvi, **un PDF es veu i s'imprimeix exactament igual en qualsevol pantalla, sistema operatiu o impressora del món**.
- **Inalterabilitat relativa:** Està dissenyat principalment per a lectura i impressió final, evitant modificacions accidentals del text.
- **Suport de signatures digitals:** Permet signar documents electrònicament amb certificat digital oficial (DNIe, FNMT, Cl@ve).

---

### Eines per treballar amb documents PDF

1. **Navegadors web moderns (Edge, Chrome, Firefox):**
   - Incorporen un visor de PDF nadiu molt ràpid que permet llegir documents, rotar pàgines i omplir formularis bàsics sense necessitat d'instal·lar res més.
2. **Lectors especialitzats gratuïts:**
   - **Adobe Acrobat Reader DC:** El lector de referència oficial; inclou suport avançat per a formularis interactius i comprovació de signatures digitals.
3. **La Impressora Virtual de PDF (*Microsoft Print to PDF*):**
   - En Windows, podem convertir **qualsevol document, pàgina web o imatge a fitxer PDF** sense cap programa especial:
   - N'hi ha prou d'anar a *Fitxer* $\rightarrow$ *Imprimeix* (`Ctrl + P`), triar com a impressora **"Microsoft Print to PDF"** i fer clic a Imprimeix. El sistema ens demanarà el nom i la carpeta on guardar el nou arxiu PDF.

---

## 7.3 Eines d'inventari i informació de maquinari (CPU-Z, HWMonitor)

Quan un client ens porta un ordinador al taller d'informàtica perquè l'ampliem o el reparem, obrir la caixa metàl·lica amb tornavisos per mirar el model de cada xip és lent i poc pràctic. Els tècnics utilitzen **utilitats d'auditoria i inventari de maquinari**.

### 1. CPU-Z (Auditoria del cor de l'equip)
Programa gratuït i portable de referència mundial per conèixer els detalls exactes de:
- **Processador (CPU):** Nom comercial exacte, nom en clau de l'arquitectura, sòcol (*Socket*), voltatge de treball, número de nuclis físics i fils (*threads*), i freqüència de rellotge en temps real.
- **Placa base (*Mainboard*):** Fabricant (Asus, Gigabyte, MSI, HP), model exacte i versió de la BIOS instal·lada.
- **Memòria RAM:** Quantitat total, tipus de tecnologia (DDR3, DDR4, DDR5), freqüència de treball i canals actius (*Dual Channel*).
- **Pestanya SPD:** Mostra slot a slot quin mòdul de memòria hi ha punxat a cada ranura de la placa base (molt útil per saber si queden ranures buides per ampliar la RAM d'un client sense obrir la torre).

---

### 2. HWMonitor (Monitorització de temperatures i voltatges)
- Mostra en temps real la **temperatura de cada nucli del processador**, de la targeta gràfica i dels discs durs.
- Mostra les revolucions per minut (**RPM**) dels ventiladors de la torre i els voltatges lliurats per la font d'alimentació (+12V, +5V, +3.3V).
- **Ús en diagnòstic:** Si la CPU supera els 85-90°C en repòs, és un símptoma clar que la pasta tèrmica s'ha assecat o que el ventilador del dissipador està encallat de pols.

---

### 3. CrystalDiskInfo (Estat de salut S.M.A.R.T. dels discs)
- Detecta la salut de discs HDD i unitats SSD: hores totals d'encesa, número de vegades que s'ha engegat i si hi ha sectors danyats reassignats.

---

## 7.4 Eines d'assistència i control remot: RDP, AnyDesk i TeamViewer

En el món professional actual de suport tècnic (*Helpdesk* / Suport a l'usuari), desplaçar-se físicament en cotxe fins al despatx de cada client per solucionar un xicotet problema de configuració d'impressora o de correu electrònic és inviable. La majoria d'incidències es resolen mitjançant **assistència tècnica remota**.

### Què és el control remot d'equips?
És una tecnologia que permet a un tècnic informàtic **veure en la seua pròpia pantalla l'escriptori de l'ordinador remot del client i controlar el seu ratolí i teclat en temps real** a través d'una connexió d'Internet o de xarxa local.

---

### Principals eines de connexió remota

#### 1. Escriptori Remot de Windows (RDP - *Remote Desktop Protocol*)
- Eina nativa integrada a les edicions Professionals de Windows (`mstsc.exe`).
- **Avantatges:** Màxima rapidesa i rendiment, excel·lent integració amb la xarxa local de l'empresa.
- **Limitacions:** Requereix configurar ports i tallafocs per connectar-se fora de l'oficina a través d'Internet.

#### 2. AnyDesk
- Aplicació ultra-lleugera (l'executable ocupa només uns pocs megabytes i no cal instal·lar-lo).
- **Funcionament:** Cada equip rep un codi numèric de 9 dígits (el seu "número de telèfon AnyDesk"). El client dóna el seu número al tècnic per telèfon, el tècnic demana connexió i el client fa clic al botó verd d'acceptar.
- Travessa routers i tallafocs domèstics automàticament sense necessitat d'obrir ports.

#### 3. TeamViewer
- Una de les plataformes pioneres més conegudes del mercat comercial.
- Ofereix control remot, transferència directa de fitxers entre ordinadors, xat de text i trucada de veu integrada durant la sessió de suport.

---

## 7.5 Pràctica: Sessió de suport tècnic remot entre equips d'aula

### Objectiu de la Pràctica
Realitzar una sessió real de suport tècnic remot entre dos companys de l'aula de taller: un farà el paper de "Client amb una incidència" i l'altre el paper de "Tècnic de suport d'FPB".

### Materials Necessaris
- Dos ordinadors de classe connectats a la xarxa d'aula (**PC Client** i **PC Tècnic**).
- Programa d'assistència remota (AnyDesk portable o Escriptori Remot de Windows).

---

### Procediment Pas a Pas

#### Pas 1: Preparació de la incidència simulada al PC Client
1. L'alumne que fa de client crea a la seua màquina un problema senzill: per exemple, una carpeta amb un fitxer de text bloquejat o un canvi de resolució de pantalla erroni.
2. Obre l'aplicació AnyDesk:
   - A la pantalla d'AnyDesk apareix en gran el codi de 9 xifres: `El vostre lloc de treball: XXX XXX XXX`.
3. El client comunica aquest codi al seu company tècnic.

#### Pas 2: Petició de connexió per part del Tècnic
1. L'alumne tècnic obre AnyDesk al seu ordinador.
2. Al camp superior de cerca escriu el codi de 9 xifres del seu company i fa clic a **Connecta**.

#### Pas 3: Autorització i presa de control
1. A la pantalla del PC Client apareix immediatament una finestra d'alerta amb dues opcions:
   - Botó verd: **Accepta**.
   - Botó roig: **Rebutja**.
2. El client fa clic a **Accepta** (concedint permisos de control de ratolí i teclat).
3. A la pantalla del tècnic s'obre una finestra que mostra exactament l'escriptori del client en temps real.

#### Pas 4: Resolució de la incidència
1. El tècnic manipula el ratolí i el teclat des del seu lloc de treball.
2. Obre la carpeta del client, resol la incidència i verifica que tot funciona correctament.
3. El tècnic obre la finestra de xat integrada d'AnyDesk i escriu: *"La incidència ha quedat resolta amb èxit. Procedisc a tancar la sessió"*.
4. El tècnic o el client fan clic al botó de **Desconnecta**. La sessió es tanca de forma segura.

---

