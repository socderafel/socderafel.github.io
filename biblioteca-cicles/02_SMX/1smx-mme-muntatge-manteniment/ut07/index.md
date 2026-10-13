---
layout: default
title: "Muntatge i Manteniment d'Equips — UD7 Desplegament de Programari amb Imatges de Disc"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD7"
---

# UT7 - Desplegament de Programari mitjançant Imatges de Disc

Aquesta unitat tracta la instal·lació i desplegament massiu de sistemes operatius i programari en entorns corporatius i aules d'informàtica mitjançant la creació de mitjans d'arrencada amb Ventoy/Rufus, la generalització del sistema amb Microsoft Sysprep per evitar col·lisions d'identificadors de seguretat (SID) i la clonació ràpida amb Clonezilla o DISM.

---

## 💿 Flux de Treball de Desplegament Massiu i Clonació

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Cicle de Vida d'una Imatge Mestra (Golden Master)</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Equip patró, generalització del Machine SID amb Sysprep, captura i restauració multicast</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="imgMasterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="imgSysprepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="imgCloneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="imgDeployGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Equip Patró -->
    <rect x="20" y="20" width="185" height="210" rx="8" fill="url(#imgMasterGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="112" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🖥️ 1. EQUIP PATRÓ</text>
    <text x="112" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Golden Image Reference</text>
    <line x1="30" y1="73" x2="195" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• SO net instal·lat</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• Controladors de maquinari</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• Programari d'aula instal·lat</text>
    <text x="32" y="153" fill="#cbd5e1" font-size="9.5">• Actualitzacions de seguretat</text>
    <text x="32" y="173" fill="#34d399" font-size="9.5">• Perfil d'usuari configurat</text>
    <text x="112" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Model Base Únic</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 205 115 L 230 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Sysprep Generalize -->
    <rect x="235" y="20" width="195" height="210" rx="8" fill="url(#imgSysprepGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="332" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🛡️ 2. MICROSOFT SYSPREP</text>
    <text x="332" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Generalització del Sistema</text>
    <line x1="245" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="248" y="93" fill="#ef4444" font-size="9.5" font-weight="bold">• Elimina Machine SID:</text>
    <text x="258" y="108" fill="#94a3b8" font-size="9">Evita conflictes de xarxa</text>
    <text x="248" y="128" fill="#cbd5e1" font-size="9.5">• Esborra GUIDs i logs</text>
    <text x="248" y="148" fill="#cbd5e1" font-size="9.5">• Paràmetres clau:</text>
    <text x="258" y="165" fill="#38bdf8" font-size="8.5" font-family="monospace">/generalize /oobe /shutdown</text>
    <text x="248" y="188" fill="#34d399" font-size="9.5">• Prepara mode OOBE</text>
    <text x="332" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Despersonalització</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Clonació amb Clonezilla -->
    <rect x="460" y="20" width="195" height="210" rx="8" fill="url(#imgCloneGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="557" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">💾 3. CLONEZILLA / DISM</text>
    <text x="557" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Captura de la Imatge</text>
    <line x1="470" y1="73" x2="645" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• Arrencada per USB (Ventoy)</text>
    <text x="472" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Partclone:</tspan> Només copia</text>
    <text x="482" y="128" fill="#94a3b8" font-size="9">els blocs ocupats (estalvi 80%)</text>
    <text x="472" y="148" fill="#cbd5e1" font-size="9.5">• Compressió gzip / zstd</text>
    <text x="472" y="168" fill="#cbd5e1" font-size="9.5">• Desat en xarxa: <tspan fill="#f59e0b">Samba / SSH</tspan></text>
    <text x="472" y="188" fill="#cbd5e1" font-size="9.5">• Mode: <tspan fill="#38bdf8">savedisk</tspan></text>
    <text x="557" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Còpia Sectorial Intel·ligent</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 655 115 L 680 115" stroke="#f59e0b" stroke-width="2"/>

    <!-- Bloc 4: Desplegament Multicast -->
    <rect x="685" y="20" width="155" height="210" rx="8" fill="url(#imgDeployGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="762" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🚀 4. DESPLEGAMENT</text>
    <text x="762" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Restauració en Massa</text>
    <line x1="695" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="697" y="93" fill="#cbd5e1" font-size="9.5">• Multicast per xarxa</text>
    <text x="697" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">30 PCs a l'hora</tspan></text>
    <text x="707" y="128" fill="#94a3b8" font-size="9">Temps: 15 minuts</text>
    <text x="697" y="148" fill="#cbd5e1" font-size="9.5">• Primer arrencament:</text>
    <text x="707" y="163" fill="#f59e0b" font-size="9">Genera nou SID únic</text>
    <text x="697" y="183" fill="#38bdf8" font-size="9.5">• Unió a domini OK</text>
    <text x="762" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Aula 100% Homogènia</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Desplegament: <tspan fill="#ef4444" font-weight="bold">MAI clonar un Windows sense passar Sysprep prèviament.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Els ordinadors clonats sense Sysprep compartiran el mateix Machine SID provocant fallades crítiques d'autenticació en xarxa.</text>
  </svg>
</div>

---

## 📊 Comparativa de Tecnologies de Clonació

| Eina / Mètode | Tipus de Còpia | Velocitat | Mida de la Imatge | Compatibilitat de Maquinari | Ús Recomanat |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **`dd` (Sector a sector)** | Físic en brut (Raw) | Lenta | Igual a la capacitat del disc sencer | Només maquinari idèntic | Anàlisi forense i recuperació de dades |
| **Clonezilla (Partclone)** | Lògic per blocs de sistema de fitxers | Molt Ràpida | Només l'espai ocupat comprimit | Equips similars (MBR o GPT) | **Clonació d'aules i manteniment periòdic** |
| **DISM / ImageX (`.WIM`)** | Basat en fitxers i capes | Ràpida | Mínima (deduplicació de fitxers) | Multi-maquinari (HAL universal) | Desplegament corporatiu oficial Microsoft |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **7.1** | [**Imatges de Disc, Clonezilla i Sysprep**](./ut0701.md) | Concepte d'imatge de disc, mitjans d'arrencada amb Ventoy i Rufus, resolució de conflictes de SID amb Sysprep, modalitats de clonació amb Clonezilla | [**💿 Estudiar Clonació →**](./ut0701.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA6:** Instal·la programari en un equip microinformàtic utilitzant imatges de disc, justificant el procediment triat segons les característiques del parc d'equips.
- **Criteris d'Avaluació:**
  - S'ha utilitzat programari de clonació de discos creant imatges funcionals i arrencables.
  - S'han preparat les imatges mestres eliminant identificadors únics de seguretat abans de la seua distribució.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments de Clonació, Mitjans d'Arrencada i Conflictes de SID
1. **La Col·lisió de Machine SID en Xarxes Corporatives:**
   - A cada instal·lació de Windows, el sistema genera un **SID d'equip** (*Machine SID*) únic, format per un conjunt de 96 bits aleatoris (ex: `S-1-5-21-3623811015-3361044348-30300820`).
     - Si cloneu 25 ordinadors d'una aula sense executar `Sysprep /generalize`, quin greu problema de seguretat es produeix quan els equips intenten unir-se a un domini d'Active Directory?
     - Per què el servei WSUS (actualitzacions de Windows) o sistemes d'antivirus corporatius només reconeixeran una única màquina en compte de les 25 reals?
2. **Partclone vs Clonació Sectorial `dd`:**
   - En un laboratori es vol clonar una màquina amb un disc SSD NVMe d'**$1\text{ TB}$**, on la partició de Windows té ocupats només **$55\text{ GB}$** de programari i la resta són blocs no assignats.
     - Si s'utilitza una comanda clàssica `dd` sector a sector, quanta mida ocuparà la imatge al disc extern i quant de temps trigarà a través d'una interfície USB 3.0 de $120\text{ MB/s}$?
     - Quants Gigabytes copiarà Clonezilla utilitzant el motor intel·ligent **Partclone**?
3. **Avantatges de Ventoy en el Treball Diari del Tècnic:**
   - Per què la tecnologia multiboot de **Ventoy** ha substituït l'ús de Rufus en el taller informàtic quan cal disposar de múltiples instal·ladors (Windows 10, Windows 11, Ubuntu, Clonezilla, Hirens BootCD) en un sol pendrive?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Generalització d'un Equip Patró amb Sysprep
1. A la màquina patró de laboratori un cop configurada amb el programari complet:
2. Obre la consola de l'Administrador (CMD o PowerShell) i canvia al directori de Sysprep:
   ```cmd
   cd C:\Windows\System32\Sysprep
   ```
3. Executa l'eina de generalització amb opció d'aturada automàtica:
   ```cmd
   sysprep.exe /generalize /oobe /shutdown
   ```
4. Espera que l'equip s'apague completament. **Important: No tornis a encendre l'equip de forma normal abans de capturar la imatge!** (Si arrenca Windows, el procés OOBE s'iniciarà i caldrà repetir el Sysprep).

#### Repte 2: Consulta del Machine SID amb PowerShell abans i després
1. Consulta el SID complet dels usuaris locals per comprovar la part comuna corresponent al Machine SID:
   ```powershell
   Get-LocalUser | Select-Object Name, SID
   ```
2. Observa la cadena comuna `S-1-5-21-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX`.
3. Després de restaurar la imatge clonada en una segona màquina i finalitzar l'assistent OOBE, torna a executar la comanda i comprova que la terna numèrica ha canviat completament, demostrant que el nou equip té una identitat de seguretat única a la xarxa.

#### Repte 3: Captura d'Imatge de Windows en format `.WIM` amb DISM
1. Arrenca l'equip amb un pendrive de rescat de Windows PE.
2. Identifica la lletra de la unitat del sistema (habitualment `C:` o `D:`) i la unitat externa d'emmagatzematge:
   ```cmd
   dism /Capture-Image /ImageFile:"E:\Imatges\Aula_SMX.wim" /CaptureDir:C:\ /Name:"Imatge_Mestra_SMX" /Description:"Windows 11 amb eines de taller" /Compress:fast
   ```
3. Comprova que la imatge s'ha creat correctament consultant la seua informació interna:
   ```cmd
   dism /Get-ImageInfo /ImageFile:"E:\Imatges\Aula_SMX.wim" /Index:1
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Generalització amb Sysprep i Seguretat de SID** | Explica amb rigor el perill del SID duplicat, executa `sysprep /generalize /oobe` i comprova la regeneració de GUIDs. | Coneix que cal passar Sysprep però oblida el paràmetre `/generalize` o encén l'equip abans de fer la imatge. | Clona equips sense passar Sysprep desconeixent que comparteixen el mateix identificador a la xarxa. |
| **Eines de Clonació (Clonezilla vs DISM)** | Domina la creació d'imatges amb Clonezilla i DISM, justificant l'ús de Partclone i formats comprimits. | Clona discs amb èxit mitjançant assistent gràfic però es perd en les opcions de xarxa o formats de compressió. | Utilitza còpies manuals de carpetes fitxer a fitxer que no conserven particions arrencables ni permisos ACL. |
| **Mitjans d'Arrencada i Desplegament Massiu** | Configura pendrives multiboot amb Ventoy i dissenya procediments de restauració multicast per a aules senceres. | Prepara un llapis USB amb Rufus però necessita formatar-lo cada vegada que vol canviar de sistema operatiu. | Incapaç de configurar l'ordre d'arrencada a la UEFI per arrencar des del dispositiu USB extern. |
