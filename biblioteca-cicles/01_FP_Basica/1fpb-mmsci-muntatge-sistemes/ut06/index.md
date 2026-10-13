---
layout: default
title: "UD6: Perifèrics de l'Ordinador — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD6"
---

# 🖱️ UD6: Perifèrics de l'Ordinador

Benvingut/da a la **Unitat Didàctica 6** de MMSCI. Els perifèrics són la finestra de comunicació entre l'usuari i la màquina. En aquesta unitat aprendràs com es classifiquen en funció del sentit del flux de dades (Entrada, Eixida, Entrada/Eixida i Comunicació), coneixeràs la tecnologia interna de teclats mecànics, ratolins òptics i escàners, analitzaràs les pantalles i tecnologies de panell IPS/VA, diferenciaràs les impressores de tinta líquida de les impressores làser d'oficina i aprendràs a diagnosticar fallades de maquinari amb l'Administrador de Dispositius.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-in" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-imp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-drv" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ECOSISTEMA DE PERIFÈRICS: ENTRADA, EIXIDA, MONITORS I DRIVERS</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Tipologia de maquinari d'E/S, tecnologies de visualització, impressió i controladors de sistema</text>

  <!-- Bloc 1: Perifèrics d'Entrada -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-in)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⌨️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Entrada (Input)</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Captació de Dades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Teclat: Membrana vs Mecànic</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Ratolí: Sensor òptic (DPI)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Escàner: Resolució òptica</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Càmera web i micròfon USB</text>
  </g>

  <!-- Bloc 2: Monitors -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mon)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🖥️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Pantalles i Monitors</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Tecnologia de Panell</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• IPS: Colors reals i 178º visió</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• VA: Màxim contrast i negres</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• TN: Resposta ràpida (Gaming)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Refresc: 60 Hz a 144 Hz</text>
  </g>

  <!-- Bloc 3: Impressores -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-imp)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🖨️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Impressores i Equips</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Sistemes d'Impressió</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Injecció: Tinta líquida CMYK</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Làser: Tòner pols i tambor</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Multifunció: Impressió/Còpia</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Connectivitat: USB / Wi-Fi</text>
  </g>

  <!-- Bloc 4: Drivers i SO -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-drv)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Gestió de Drivers</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Interfície de Sistema</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Plug & Play automàtic</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Administrador de Dispositius</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Triangle groc (!): Sense driver</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Cercar ID de maquinari</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **6.1** | Concepte, arquitectura i classificació de perifèrics | [**📘 Llegir Apartat 6.1 →**](./ut0601.html) |
| **6.2** | Perifèrics d'entrada: Teclat, ratolí, escàner i càmera web | [**📘 Llegir Apartat 6.2 →**](./ut0602.html) |
| **6.3** | Perifèrics d'eixida: Monitors i pantalles (Panells IPS, VA, TN) | [**📘 Llegir Apartat 6.3 →**](./ut0603.html) |
| **6.4** | Perifèrics d'eixida: Impressores i equips multifunció (Injecció vs Làser) | [**📘 Llegir Apartat 6.4 →**](./ut0604.html) |
| **6.5** | Instal·lació física, connexió i gestió de controladors (*Drivers*) | [**📘 Llegir Apartat 6.5 →**](./ut0605.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 5:** Manté i neteja equips i perifèrics microinformàtics, aplicant procediments definits i criteris de qualitat i sostenibilitat.
  - *CE a:* S'han descrit els perifèrics d'entrada i eixida i els seus paràmetres de rendiment.
  - *CE b:* S'han connectat i configurat els perifèrics utilitzant controladors adequats.
  - *CE c:* S'ha verificat la resolució de conflictes mitjançant l'Administrador de Dispositius.

---

## 📊 Matriu Comparativa de Tecnologies de Perifèrics i Paràmetres Clau

| Tipus de Perifèric | Tecnologia Principal | Paràmetres Clau de Rendiment | Avantatges Tècnics | Inconvenients / Limitacions | Àmbit d'Ús Recomanat |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Monitor IPS** | Liquid Crystal In-Plane Switching | Resolució (Full HD / 4K), Angle (178º), sRGB | Reproducció cromàtica fidel i excel·lents angles de visió | Temps de resposta lleugerament superior al TN i contrast mitjà (~1000:1) | Disseny gràfic, oficina i ús general |
| **Monitor VA** | Vertical Alignment | Contrast estàtic (3000:1 a 4000:1), Colors vius | Negres profunds i excel·lent contrast en sales fosques | Lleuger efecte de desenfocament de moviment (*ghosting*) | Consum multimèdia, cinema i ofimàtica |
| **Monitor TN** | Twisted Nematic | Temps de resposta (1 ms), Refresc (144-240 Hz) | Molt econòmic de fabricar i resposta ultra-ràpida | Colors apagats i angles de visió molt pobres | Gaming competitiu d'alta velocitat |
| **Impressora Injecció** | Projectil tèrmic / Piezoelèctric | Resolució en DPI, ppm (pàgines per minut) | Preu inicial de la màquina molt baix, excel·lent foto | Tinta líquida que s'asseca si no s'utilitza, cost per pàgina alt | Ús domèstic i fotografia ocasional |
| **Impressora Làser** | Fusor tèrmic, Làser i Tambor fotoconductor | Velocitat (30-50 ppm), Cicle de treball mensual | Cost per pàgina extremadament baix, tòner no s'asseca mai | Màquina més voluminosa i preu inicial més car | **Oficines, centres educatius i empreses** |
| **Teclat Mecànic** | Switches independents (Blue, Red, Brown) | Força d'actuació (cN), Distància de recorregut | Màxima durabilitat (50-80 milions de pulsacions), precisió | Més sorollós i preu més elevat que la membrana | Escriptura intensiva i gaming |

---

## 📌 Resum Didàctic dels Punts Clau

1. **Classificació pel flux de dades:**
   - **Entrada (Input):** Introdueixen dades de l'exterior cap a la CPU (teclat, ratolí, escàner, càmera web, micròfon).
   - **Eixida (Output):** Reben dades de la CPU i les mostren a l'usuari (monitor, impressora, altaveus).
   - **Entrada/Eixida (Bidireccionals):** Pantalles tàctils, cascos amb micròfon, equips multifunció.
2. **Teclats i Ratolins:**
   - Teclats de **membrana** (econòmics, silenciosos, basats en una làmina de goma que perd tacte amb el temps) vs teclats **mecànics** (amb interruptors o *switches* individuals per a cada tecla).
   - Els ratolins òptics empren sensors LED o làser i es mesuren en **DPI** (*Dots Per Inch*): a major nombre de DPI, major desplaçament del punter per cada centímetre de moviment físic.
3. **Monitors:** El panell **IPS** és l'estàndard preferit per la seua fidelitat de color i un angle de visió complet de 178º. La resolució estàndard mínima recomanada és **Full HD (1920 × 1080)** i la taxa de refresc oscil·la entre 60 Hz per a treball administratiu i 144 Hz o superior per a entorns fluids.
4. **Impressores:** La tecnologia d'**injecció de tinta** fa servir cartutxos de tinta líquida CMYK (Cian, Magenta, Groc i Negre). La tecnologia **làser** utilitza pols de tòner microscòpic que s'adhereix electroestàticament a un tambor i es fon sobre el paper mitjançant calor; és la tecnologia idònia per a empreses pel seu cost per còpia mínim i gran rapidesa.
5. **Controladors (Drivers):** La majoria de perifèrics moderns són **Plug & Play** (el sistema operatiu els reconeix i assigna un controlador genèric immediatament). Quan a l'**Administrador de Dispositius** apareix un **triangle groc d'advertència (!)**, significa que el component no té controlador vàlid i requereix instal·lar el paquet oficial del fabricant.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de Densitat de Píxels (PPI) i Taxa de Refresc en Monitors
La densitat de píxels per polzada (\(PPI\)) determina la nitidesa d'una pantalla i es calcula mitjançant el teorema de Pitàgores entre la resolució horitzontal (\(W\)), la vertical (\(H\)) i la diagonal en polzades (\(D\)):
\[
PPI = \frac{\sqrt{W^2 + H^2}}{D}
\]
1. Calcula el PPI d'un monitor d'aula d'informàtica de **24 polzades** amb resolució Full HD (\(1920 \times 1080\)).
2. Calcula el PPI d'un monitor de disseny gràfic de **27 polzades** amb resolució 4K UHD (\(3840 \times 2160\)).
3. Quin dels dos monitors oferirà una imatge més nítida i textos més definits a una distància visual de 60 cm?
4. Si un monitor funciona a **60 Hz**, quantes imatges completes per segon mostra la pantalla? Quin temps en mil·lisegons (\(t = 1/f\)) roman cada fotograma a la vista abans de ser reemplaçat? I si funciona a **144 Hz**?

#### Exercici 2: Estudi Comparatiu de Cost per Pàgina (CPP) d'Impressió
Una petita oficina administrativa imprimeix una mitjana de **1.500 pàgines al mes** exclusivament en blanc i negre. El departament ha de decidir entre dues opcions de compra:
- **Opció A (Impressora d'Injecció de Tinta):** Preu de la màquina: 90 €. Cartutx de tinta negra oficial: 25 € amb una durada estimada de 300 pàgines.
- **Opció B (Impressora Làser Monocrom):** Preu de la màquina: 180 €. Cartutx de tòner negre: 45 € amb una durada estimada de 2.500 pàgines.
1. Calcula el cost per pàgina (\(CPP = \text{Preu del consumible} / \text{Nombre de pàgines}\)) per a cadascuna de les dues opcions.
2. Quin serà el cost en consumibles de cada impressora al cap d'un any de feina (\(1.500 \text{ pàgines/mes} \times 12 \text{ mesos} = 18.000 \text{ pàgines}\))?
3. Suma el cost inicial de la màquina més la despesa de consumibles del primer any per a totes dues opcions. Quina de les dues resulta més econòmica globalment al final del primer any? Justifica la decisió.

#### Exercici 3: Diagnòstic de Codis d'Error a l'Administrador de Dispositius
Un tècnic obre l'Administrador de Dispositius de Windows i es troba amb les següents anomalies a l'arbre de maquinari:
1. Sota la categoria *Altres dispositius*, apareix un element amb una icona de **triangle groc amb signe d'admiració (!)** anomenat "Controladora d'Ethernet". Fent doble clic, la finestra d'estat indica: `Aquest dispositiu no està configurat correctament (Codi 28)`. Què significa exactament aquest codi i quina acció immediata ha de realitzar el tècnic per solucionar-lo?
2. A la secció *Adaptadors de pantalla*, la targeta gràfica mostra una petita fletxa negra apuntant cap avall. Què indica aquest símbol i com es torna a activar el dispositiu?
3. Un dispositiu USB mostra `El dispositiu no pot iniciar (Codi 10)`. Quines poden ser les causes més probables (fallada de cable, port defectuós o controlador incompatible) i quines proves de descart s'han d'aplicar?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Connexió, Ajust i Calibratge Ergonòmic de Monitor
- **Objectiu:** Connectar un monitor a l'equip i configurar la seua resolució nativa, freqüència i ergonomia visual.
- **Material de laboratori:** Ordinador complet, monitor de taller amb cables HDMI i DisplayPort, sistema operatiu engegat.
- **Passos d'execució:**
  1. Connecta el monitor a la targeta gràfica dedicada de l'equip (i no a les eixides de la placa base si hi ha GPU externa).
  2. Al sistema operatiu, fes clic dret a l'escriptori i entra a **Configuració de pantalla**:
     - Comprova que la **Resolució de pantalla** està establerta en el seu valor *Recomanat* (resolució nativa, per exemple 1920 × 1080). Explica què passa si es selecciona una resolució inferior no nativa (imatge borrosa o deformada).
     - Entra a *Configuració avançada de pantalla* i selecciona la **Freqüència d'actualització** màxima suportada pel monitor (per exemple, canviar de 60 Hz a 75 Hz o 144 Hz).
  3. Accedeix al menú propi de la pantalla mitjançant els botons físics del monitor (*OSD - On Screen Display*):
     - Ajusta la brillantor al 70% i el contrast al 50%.
     - Activa el mode de reducció de llum blava (*Low Blue Light* / *Mode lectura*) per a entorns de treball continuat.
  4. Ajusta l'alçada física del suport perquè la vora superior de la pantalla quede a l'alçada exacta dels ulls de l'alumne.

#### Repte 2: Localització i Instal·lació de Controladors mitjançant ID de Maquinari
- **Objectiu:** Trobar el controlador oficial d'un dispositiu desconegut sense utilitzar aplicacions automàtiques de tercers.
- **Material de laboratori:** Ordinador amb un dispositiu que tinga driver pendent o targeta d'expansió de proves instal·lada.
- **Passos d'execució:**
  1. Prem la combinació de tecles `Windows + X` i selecciona **Administrador de dispositius**.
  2. Localitza el dispositiu amb el triangle groc (!) a la llista.
  3. Fes clic dret sobre el dispositiu i tria **Propietats**.
  4. Ves a la pestanya **Detalls** i al desplegable *Propietat* selecciona **Identificadors de maquinari** (*Hardware IDs*).
  5. Copia la cadena alfanumèrica resultant, que tindrà un format similar a aquest:
     `PCI\VEN_10EC&DEV_8168&SUBSYS...`
  6. Identifica el fabricant i el model:
     - `VEN_xxxx` indica l'identificador del venedor (*Vendor ID*, per exemple `10EC` correspon a Realtek).
     - `DEV_xxxx` indica el model exacte del xip (*Device ID*, per exemple `8168` correspon a Gigabit Ethernet).
  7. Accedeix al lloc web oficial del fabricant amb un navegador web, cerca el controlador específic per a la versió exacta del sistema operatiu i instal·la'l.
  8. Comprova que el triangle groc desapareix de l'Administrador de Dispositius i el perifèric comença a funcionar amb normalitat.

#### Repte 3: Instal·lació, Manteniment i Pàgina de Prova d'Impressora
- **Objectiu:** Configurar una impressora a l'equip, comprovar l'estat dels seus consumibles i imprimir una pàgina de diagnòstic tècnic.
- **Material de laboratori:** Impressora de laboratori (injecció o làser), cable USB, paper blanc A4 de 80 g/m².
- **Passos d'execució:**
  1. Connecta el cable d'alimentació de la impressora i el cable de dades USB a un port lliure de l'ordinador.
  2. Engega la impressora i comprova com el sistema operatiu la detecta automàticament mitjançant Plug & Play.
  3. Accedeix a **Configuració > Dispositius > Impressores i escàners**.
  4. Fes clic sobre la impressora i selecciona **Administrar**:
     - Fes clic a **Imprimir pàgina de prova**.
     - Comprova el document imprès: revisa la definició de les línies, la claredat del text i l'absència de taques o ratlles blanques.
  5. A la finestra d'opcions de la impressora, accedeix a la pestanya de manteniment o consulta el programari oficial per comprovar el nivell estimat de tinta dels cartutxos o el percentatge restant de pols del tòner.
  6. Si es tracta d'una impressora d'injecció amb injectores obstruïdes, executa una sessió de *Neteja de capçals* des de la mateixa eina i compara el resultat abans i després.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de Perifèrics i Controladors
- [ ] S'han connectat els perifèrics d'eixida de vídeo a les preses corresponents de la targeta gràfica dedicada.
- [ ] La resolució de pantalla s'ha configurat en la seua opció nativa recomanada sense escalats deformats.
- [ ] S'ha ajustat la taxa de refresc en Hz a la màxima suportada pel monitor.
- [ ] L'Administrador de Dispositius s'ha revisat i no presenta cap triangle groc ni signe d'interrogació.
- [ ] S'ha utilitzat la cadena d'ID de maquinari (`VEN` i `DEV`) per buscar exclusivament controladors oficials.
- [ ] La impressora ha superat amb èxit la impressió de la pàgina de prova tècnica sense errors a la cua d'impressió.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD6)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Classificació i Tecnologies de Perifèrics** | Diferencia amb precisió el sentit de les dades (E/S), tecnologies de panell (IPS/VA/TN) i injecció vs làser. | Classifica els perifèrics habituals i descriu els avantatges del panell IPS i la impressió làser. | Identifica la funció dels perifèrics bàsics però dubta sobre les tecnologies de pantalla. | Confon dispositius d'entrada amb d'eixida o desconeix la diferència entre tinta i tòner. |
| **Càlculs Tècnics de Densitat i Cost** | Resol els càlculs de PPI i la comparativa de cost per pàgina (CPP) amb exactitud matemàtica i justificació empresarial. | Resol els problemes amb petits errors d'arrodoniment i comprèn l'estalvi d'una impressora làser. | Realitza el càlcul de cost guiat per la fórmula bàsica. | Incapaç de fer el càlcul de cost per còpia o no entén per què la densitat de píxels aporta nitidesa. |
| **Instal·lació de Controladors (*Drivers*)** | Localitza l'ID de maquinari (VEN/DEV), descarrega el controlador oficial del fabricant i resol conflictes amb eficiència. | Reconeix el triangle groc a l'Administrador de Dispositius i actualitza el controlador satisfactòriament. | Accedeix a l'Administrador de Dispositius i troba el dispositiu afectat amb suport del docent. | Ignora les fallades de controladors o instal·la programari fraudulent d'origen dubtós. |
| **Ajust de Monitors i Impressió** | Configura resolució nativa, refresc en Hz, connecta la impressora i obté la pàgina de prova sense fallades. | Connecta monitor i impressora correctament i comprova la impressió del document de diagnòstic. | Connecta els equips físicament i imprimeix la pàgina amb indicacions del protocol. | Connecta cables de vídeo a llocs incorrectes o no aconsegueix que la impressora responga. |
