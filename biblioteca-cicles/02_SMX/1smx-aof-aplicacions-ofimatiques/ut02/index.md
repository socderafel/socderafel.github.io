---
layout: default
title: "UD2 — Processador de text (II) · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2 — Processador de text (II)"
prev_url: "../ut01/ut0106.html"
prev_label: "⬅️ 1.6 curiosidades en Writer"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Tema 7. COMBINAR CORRESPONDENCIA ➡️"
---

# 📘 UD2 — Processador de text (II) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## ✉️ Cicle de Combinació de Correspondència i Gestió de Plantilles

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Flux de Treball: De la Font de Dades a la Generació de Documents Massius</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Integració de taules Calc/Base amb cartes model, fusió de camps i exportació personalitzada</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU2DadesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU2CartaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU2FusioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU2EixidaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Font de Dades -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#aofU2DadesGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">📋 1. FONT DE DADES</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Orígens de Registres</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Full Calc</tspan> (`.ods` / `.xlsx`)</text>
    <text x="32" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Base de Dades</tspan> (`.odb` Base)</text>
    <text x="32" y="116" fill="#cbd5e1" font-size="8.5">• Fitxer CSV delimitat</text>
    <text x="32" y="136" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Fila 1 = Encapçalaments:</tspan></text>
    <text x="42" y="150" fill="#94a3b8" font-size="8">Nom, Cognoms, Adreça, CP, Saldo</text>
    <text x="32" y="170" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Tecla F4:</tspan> Visualitzador de</text>
    <text x="42" y="183" fill="#94a3b8" font-size="8">fonts de dades en Writer</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Dades Estructurades</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Document Model -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#aofU2CartaGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">📄 2. DOCUMENT MODEL</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Carta o Plantilla `.ott`</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• Text estàtic corporatiu comú</text>
    <text x="252" y="100" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Camps de Combinació:</tspan></text>
    <rect x="252" y="112" width="165" height="32" rx="4" fill="#1e293b" stroke="#c084fc" stroke-width="1"/>
    <text x="335" y="125" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">&lt;Nom&gt; &lt;Cognoms&gt;</text>
    <text x="335" y="137" fill="#38bdf8" font-size="7.5" text-anchor="middle">Deute: &lt;Saldo&gt; €</text>
    <text x="252" y="162" fill="#cbd5e1" font-size="8.5">• Plantilles reutilitzables (`.ott`)</text>
    <text x="252" y="180" fill="#cbd5e1" font-size="8.5">• Caps de pàgina corporatius</text>
    <text x="252" y="196" fill="#94a3b8" font-size="8">Formatació única centralitzada</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Model Base Únic</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Fusió i Filtratge -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#aofU2FusioGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">⚙️ 3. FUSIÓ I FILTRES</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Assistent de Correspondència</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Assistent de combinació:</tspan></text>
    <text x="482" y="93" fill="#94a3b8" font-size="8">Menú Eines > Assistent</text>
    <text x="472" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Vista Prèvia de Registres:</tspan></text>
    <text x="482" y="125" fill="#94a3b8" font-size="8">Navegació registre a registre</text>
    <text x="472" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Filtres de selecció:</tspan></text>
    <text x="482" y="157" fill="#94a3b8" font-size="8">Ex: Només clients amb Saldo &gt; 0</text>
    <text x="472" y="176" fill="#cbd5e1" font-size="8.5">• Exclusió de registres buits</text>
    <text x="472" y="194" fill="#cbd5e1" font-size="8.5">• Bloques d'adreces automàtics</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Control de Qualitat</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Eixida Combinada -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#aofU2EixidaGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="10.5" font-weight="bold" text-anchor="middle">🖨️ 4. EIXIDA FUSIÓ</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Generació de Resultats</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Imprimir directament:</tspan></text>
    <text x="700" y="93" fill="#94a3b8" font-size="8">Trameses físiques</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Fitxer Únic:</tspan> Document</text>
    <text x="700" y="125" fill="#94a3b8" font-size="8">amb 1 pàgina per destinatari</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Fitxers Individuals:</tspan></text>
    <text x="700" y="157" fill="#94a3b8" font-size="8">Un PDF per client amb nom</text>
    <text x="692" y="176" fill="#cbd5e1" font-size="8.5">• Enviament per correu (SMTP)</text>
    <text x="692" y="194" fill="#cbd5e1" font-size="8.5">• Sobres i Etiquetes A4</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Trameses Personalitzades</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or de la Combinació: <tspan fill="#34d399" font-weight="bold">Mai s'envia o imprimeix una tirada massiva sense haver revisat la Vista Prèvia de Registres.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Un camp de combinació mal vinculat o un error de format pot malgastar centenars de fulls de paper o transmetre dades confidencials errònies.</text>
  </svg>
</div>

---

## 📊 Comparativa de Destinacions d'Eixida en Combinar Correspondència

| Destinació d'Eixida | Format de Sortida | Avantatge Principal | Inconvenient / Precaució | Cas d'Ús Recomanat |
| :--- | :--- | :--- | :--- | :--- |
| **Imprimir Directament** | Impressora física o cua d'impressió. | Estalvia espai a disc; procés immediat. | Si la impressora s'encalla a la meitat, és difícil reprendre des del registre exacte. | Trameses postals d'oficina quan la impressora és ràpida i fiable. |
| **Desar com a Document Únic** | Fitxer `.odt` o `.pdf` amb totes les pàgines. | Permet una darrera revisió visual de totes les cartes abans d'imprimir o arxivar. | El fitxer resultant pot ocupar molts megabytes si inclou imatges pesades. | **El mètode més segur i recomanat per a principiants i auditories.** |
| **Desar com a Documents Individuals**| Múltiples fitxers independents (`Carta_Client1.pdf`, `Carta_Client2.pdf`). | Cada arxiu conté exclusivament les dades d'un únic destinatari. | Requereix una columna amb el nom de fitxer desitjat a la font de dades. | Generació de nòmines, informes mèdics o certificats acadèmics. |
| **Enviament per Correu Electrònic** | Missatges de correu via protocol SMTP. | Comunicació digital instantània i ecològica (zero paper). | Risc que els servidors de correu bloquegen l'enviament per considerar-lo correu brossa (*Spam*). | Circulars informatives a clients o comunitats educatives. |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Tema 7. COMBINAR CORRESPONDENCIA**](./ut0201.md)
- [**2.2 Exemple Combinar correspondència**](./ut0202.md)
- [**2.3 Tema 9. PLANTILLES**](./ut0203.md)

---

# 2.1 Tema 7. COMBINAR CORRESPONDENCIA

Tema 07. Combinar Correspondencia.

Cómo combinar correspondencia en Writer de LibreOffice

Índice

- Abrimos Writer y redactamos la carta que enviaremos a nuestros destinatarios.

#### 2) Seleccionamos la base de datos de nuestros destinatarios

#### 3) Insertaremos los campos de nuestra tabla de datos (Calc) en nuestra carta

#### 4) Combinamos todo y lo guardamos en un archivo (después podremos imprimirlo)

Tema 07. Combinar Correspondencia.

Cómo combinar correspondencia en Writer de LibreOffice

A continuación vamos a combinar correspondencia en Writer en 4 sencillos pasos

### 1. Abrimos Writer y redactamos la carta que

enviaremos a nuestros destinatarios.

Debemos dejar espacio para los campos de la base de datos.

### 2. Seleccionamos la base de datos de

nuestros destinatarios. Clic sobre el menú Insertar → Campos → Otros

Tema 07. Combinar Correspondencia.

A continuación seleccionamos la ficha “Base de datos” y después un clic sobre el botón “Examinar”.

En el siguiente cuadro contextual seleccionamos el archivo de Calc donde tenemos la información de los destinatarios y después clic sobre el botón “Abrir”.

Seguidamente haremos un clic sobre los símbolos “+” destacados.

Tema 07. Combinar Correspondencia.

### 3. Insertaremos los campos de nuestra tabla

de datos (Calc) en nuestra carta. Primero seleccionamos la ubicación del campo en la carta, en este ejemplo seleccionamos donde irá el “Nombre” del alumno.

Y después insertamos el campo de la hoja Calc, mediante doble clic izquierdo sobre el apartado correspondiente.

Repetimos la anterior operación para todos los campos…

Una vez que tengamos todos los campos insertados.

Tema 07. Combinar Correspondencia.

Cerraremos el cuadro contextual mediante un clic izquierdo sobre el aspa destacada.

### 4. Combinamos todo y lo guardamos en un

archivo (después podremos imprimirlo)

Clic en Archivo → Imprimir.

En el siguiente cuadro contextual haremos un clic sobre el botón “Sí”

Tema 07. Combinar Correspondencia.

En el siguiente cuadro contextual seleccionaremos la opción de “Archivo”, después lo guardaremos todo en un documento “Guardar como un documento” y para finalizar clic sobre el botón “Aceptar”.

Después le damos un nombre al archivo y clic sobre el botón “Guardar”.

---

# 2.2 Exemple Combinar correspondència

### 📄 Carta_Notes_1.odt

CERTIFICAT DE NOTES

A l’atenció de <Nombre padre/madre>,

pare de l’alumne <ALUMNO>

<Dirección>

<CP>- <Poblacion>

L’alumne <ALUMNO>, té les següents notes

APLICACIONS OFIMÀTIQUES:<Aplicaciones Ofimácas>

REDES<Redes>

TALLER<Taller>

SOM<SOM>

FOL<FOL>

### 📄 Carta_Notes.odt

CERTIFICAT DE NOTES

A l’atenció de NOM PARE/MARE,

pare de l’alumne NOM ALUMNE

DIRECCIÓ

CP- POBLACIÓ

L’alumne NOM ALUMNE, té les següents notes

APLICACIONS OFIMÀTIQUES:NOTA_OFI

REDESNOTA_REDES

TALLERNOTA_TALLER

SOMNOTA_SOM

FOLNOTA_FOL

### 📄 Carta_Notes.pdf

CERTIFICAT DE NOTES

A l’atenció de NOM PARE/MARE, pare de l’alumne NOM ALUMNE

DIRECCIÓ CP- POBLACIÓ

L’alumne NOM ALUMNE, té les següents notes

APLICACIONS OFIMÀTIQUES: NOTA_OFI

REDES

NOTA_REDES

TALLER

NOTA_TALLER

SOM

NOTA_SOM

FOL

NOTA_FOL

### 📄 Carta_Notes_Combinada.pdf

CERTIFICAT DE NOTES A l’atenció de Maria, pare de l’alumne CASTILLO SÁEZ, JUAN RAMÓN c/alicante n 10

#### 46789- POBLACION 1

L’alumne CASTILLO SÁEZ, JUAN RAMÓN, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Luis, pare de l’alumne LÓPEZ VERA, JOSE c/madrid n23 3 piso

#### 46789- POBLACION 2

L’alumne LÓPEZ VERA, JOSE, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Alejando, pare de l’alumne DOMEC SÁNCHEZ, JAIME c/la vall n 41

#### 46552- POBLACION 3

L’alumne DOMEC SÁNCHEZ, JAIME, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Antonio, pare de l’alumne FERNÁNDEZ RUIZ, PEDRO c/valencia n21

#### 46521- POBLACION 4

L’alumne FERNÁNDEZ RUIZ, PEDRO, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Ramon, pare de l’alumne GÓMEZ BLAZQUEZ, ANTONIO parque salvador s 56

#### 46852- POBLACION 5

L’alumne GÓMEZ BLAZQUEZ, ANTONIO, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Patricia, pare de l’alumne JIMÉNEZ MENDEZ, EVA c/alicante n 10

#### 46855- POBLACION 6

L’alumne JIMÉNEZ MENDEZ, EVA, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Eva, pare de l’alumne LIS SANZ, BLANCA c/vega n67

#### 46856- POBLACION 7

L’alumne LIS SANZ, BLANCA, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Luis, pare de l’alumne JUÁREZ GIL, PATRICIA c/roble n 44

#### 46740- POBLACION 8

L’alumne JUÁREZ GIL, PATRICIA, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Alejandro, pare de l’alumne LAX HERMIDA, CARLOS c/velazquez n77

#### 46899- POBLACION 9

L’alumne LAX HERMIDA, CARLOS, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Jorge, pare de l’alumne LUCAS SEGURA, JORGE c/goya n 11

#### 46988- POBLACION 10

L’alumne LUCAS SEGURA, JORGE, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Carlos, pare de l’alumne LLUC CABALLERO, PABLO c/picaso n88

#### 46855- POBLACION 11

L’alumne LLUC CABALLERO, PABLO, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Pedro, pare de l’alumne PARDO SANZ, ANTONIO c/calvario n 21

#### 46899- POBLACION 12

L’alumne PARDO SANZ, ANTONIO, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

CERTIFICAT DE NOTES A l’atenció de Maria, pare de l’alumne RODRÍGUEZ SÁEZ, GLORIA c/murillo n 77

#### 46001- POBLACION 13

L’alumne RODRÍGUEZ SÁEZ, GLORIA, té les següents notes: APLICACIONS OFIMÀTIQUES: REDES TALLER SOM FOL

### 📄 Carta_Notes_Combinada.odt

CERTIFICAT DE NOTES

A l’atenció de Maria,

pare de l’alumne CASTILLO SÁEZ, JUAN RAMÓN

c/alicante n 10

L’alumne CASTILLO SÁEZ, JUAN RAMÓN, té les següents notes

APLICACIONS OFIMÀTIQUES:7

REDES7

TALLER5

SOM4

FOL8

CERTIFICAT DE NOTES

A l’atenció de Luis,

pare de l’alumne LÓPEZ VERA, JOSE

c/madrid n23 3 piso

L’alumne LÓPEZ VERA, JOSE, té les següents notes

APLICACIONS OFIMÀTIQUES:7

REDES3

TALLER9

SOM8

FOL7

CERTIFICAT DE NOTES

A l’atenció de Alejando,

pare de l’alumne DOMEC SÁNCHEZ, JAIME

c/la vall n 41

L’alumne DOMEC SÁNCHEZ, JAIME, té les següents notes

APLICACIONS OFIMÀTIQUES:8

REDES8

TALLER8

SOM8

FOL6

CERTIFICAT DE NOTES

A l’atenció de Antonio,

pare de l’alumne FERNÁNDEZ RUIZ, PEDRO

c/valencia n21

L’alumne FERNÁNDEZ RUIZ, PEDRO, té les següents notes

APLICACIONS OFIMÀTIQUES:9

REDES4

TALLER6

SOM6

FOL6

CERTIFICAT DE NOTES

A l’atenció de Ramon,

pare de l’alumne GÓMEZ BLAZQUEZ, ANTONIO

parque salvador s 56

L’alumne GÓMEZ BLAZQUEZ, ANTONIO, té les següents notes

APLICACIONS OFIMÀTIQUES:4

REDES6

TALLER9

SOM6

FOL9

CERTIFICAT DE NOTES

A l’atenció de Patricia,

pare de l’alumne JIMÉNEZ MENDEZ, EVA

c/alicante n 10

L’alumne JIMÉNEZ MENDEZ, EVA, té les següents notes

APLICACIONS OFIMÀTIQUES:8

REDES6

TALLER9

SOM7

FOL7

CERTIFICAT DE NOTES

A l’atenció de Eva,

pare de l’alumne LIS SANZ, BLANCA

c/vega n67

L’alumne LIS SANZ, BLANCA, té les següents notes

APLICACIONS OFIMÀTIQUES:7

REDES5

TALLER7

SOM4

FOL5

CERTIFICAT DE NOTES

A l’atenció de Luis,

pare de l’alumne JUÁREZ GIL, PATRICIA

c/roble n 44

L’alumne JUÁREZ GIL, PATRICIA, té les següents notes

APLICACIONS OFIMÀTIQUES:7

REDES4

TALLER7

SOM8

FOL6

CERTIFICAT DE NOTES

A l’atenció de Alejandro,

pare de l’alumne LAX HERMIDA, CARLOS

c/velazquez n77

L’alumne LAX HERMIDA, CARLOS, té les següents notes

APLICACIONS OFIMÀTIQUES:2

REDES2

TALLER8

SOM7

FOL5

CERTIFICAT DE NOTES

A l’atenció de Jorge,

pare de l’alumne LUCAS SEGURA, JORGE

c/goya n 11

L’alumne LUCAS SEGURA, JORGE, té les següents notes

APLICACIONS OFIMÀTIQUES:4

REDES5

TALLER7

SOM4

FOL6

CERTIFICAT DE NOTES

A l’atenció de Carlos,

pare de l’alumne LLUC CABALLERO, PABLO

c/picaso n88

L’alumne LLUC CABALLERO, PABLO, té les següents notes

APLICACIONS OFIMÀTIQUES:4

REDES6

TALLER7

SOM8

FOL1

CERTIFICAT DE NOTES

A l’atenció de Pedro,

pare de l’alumne PARDO SANZ, ANTONIO

c/calvario n 21

L’alumne PARDO SANZ, ANTONIO, té les següents notes

APLICACIONS OFIMÀTIQUES:7

REDES5

TALLER6

SOM4

FOL1

CERTIFICAT DE NOTES

A l’atenció de Maria,

pare de l’alumne RODRÍGUEZ SÁEZ, GLORIA

c/murillo n 77

L’alumne RODRÍGUEZ SÁEZ, GLORIA, té les següents notes

APLICACIONS OFIMÀTIQUES:4

REDES3

TALLER5

SOM7

FOL6

### 📄 Carta_Notes_1.pdf

CERTIFICAT DE NOTES A l’atenció de <Nombre padre/madre>, pare de l’alumne <ALUMNO> <Dirección> <CP>- <Poblacion> L’alumne <ALUMNO>, té les següents notes: APLICACIONS OFIMÀTIQUES: <Aplicaciones Ofimácas> REDES <Redes> TALLER <Taller> SOM <SOM> FOL <FOL>

---

# 2.3 Tema 9. PLANTILLES

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Dónde se almacenan las plantillas en OpenOffice Writer Las plantillas se almacenan en las carpetas donde se instala la suite o en el perfil del usuario. Todas estas carpetas o bien son del sistema o bien están ocultas, por lo que no es sencillo acceder a ellas. Si están en carpetas poco accesibles es por un motivo. Así que no conviene hurgar en ellas, salvo que sepas muy bien lo que haces.

Más adelante te mostramos como crear tu propia carpeta de plantillas personalizada, para que te sea más sencillo gestionar tus plantillas. Plantillas entregadas con la instalación Tras instalar Apache OpenOffice disponemos de un número reducido de plantillas que se almacenan en la carpeta del programa.

En entornos Windows, la carpeta donde se encuentran las plantillas es

- OpenOffice 4.0

C:\Archivos de programa\OpenOffice 4\share\template\

- Versiones anteriores 3.x

C:\Archivos de programa\OpenOffice.org 3\share\template\ En esta carpeta encontraremos las plantillas distribuidas por varias subcarpetas, y también hallarás las plantillas utilizadas por los asistentes (en las subcarpetas llamadas wizard). Plantillas personales Además, se habilita en la carpeta perfil del usuario de OpenOffice una carpeta para almacenar las plantillas personales.

carpeta perfil del usuario\user\template Plantillas de extensiones Si has instalado extensiones que incorporan plantillas (como por ejemplo Professional Template Pack II - Spanish) las plantillas se almacenan también en el perfil del usuario, pero en la subcarpeta donde se instala la extensión. Estas subcarpetas (a las que se les asigna un nombre completamente aleatorio) se encuentran en la ruta

carpeta perfil del usuario\uno_packages\cache\uno_packages

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Para acceder a la carpeta perfil del usuario en OpenOffice (carpeta oculta), puedes utilizar este sencillo truco: La carpeta de usuario se encuentra (según versión) en: C:\Users\Tu nombre de usuario\AppData\Roaming\OpenOffice.org\3

C:\Users\Tu nombre de usuario\AppData\Roaming\OpenOffice\4 Para llegar fácilmente a ella

- Desde el botón Inicio de Windows haz clic sobre Buscar

programas y archivos

- Teclea %AppData% y pulsa Intro

Ya estás dentro de la carpeta oculta AppData y ahora puedes seguir navegando sin problemas hasta la carpeta de usuario.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Configurar el acceso a las plantillas en OpenOffice Writer OpenOffice te permite definir la localización de las distintas carpetas en donde se almacenen las plantillas desde el menú Herramientas > Opciones > OpenOffice > Rutas.

El acceso a las carpetas donde se encuentran plantillas no resulta sencillo, como vimos en el apartado anterior; quizás te resulte más interesante crear una carpeta personal en donde almacenar las plantillas que vayas creando o que te descargues de la Web. Al editar la ruta Plantillas se muestra un diálogo como este

Consideramos que una carpeta en Mis Documentos llamada Plantillas Personales siempre resultará mucho más accesible para cualquier usuario. En el siguiente tema te mostramos cómo crearla y configurarla en OpenOffice.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Crear mi carpeta de plantillas personal en OpenOffice Writer Crea una carpeta llamada Plantillas Personales dentro de la carpeta Mis Documentos. A su vez, crear dentro una estructura de carpetas para organizarlas por categorías (personales, oficina, calendarios, tarjetas...) o por aplicación (Writer, Calc, Draw, Impress), como tu prefieras.

Tras agregar la nueva carpeta en la configuración de las rutar de plantillas, todas las subcarpetas que contiene se agregarán también de forma automática. Para agregar la nueva carpeta y sus subcarpetas selecciona desde el menú Herramientas > Opciones > OpenOffice > Rutas.

En la lista Rutas que utiliza OpenOffice selecciona Plantillas, y haz clic en el botón Editar. En el diálogo Editar rutas: Plantillas, haz clic en el botón Añadir....

En el diálogo Seleccionar ruta haz clic sobre la carpeta Plantillas Personales creada dentro de la carpeta Mis Documentos y luego haz clic sobre el botón Aceptar.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Si deseas que la nueva carpeta sea considerada por OpenOffice la predeterminada para las nuevas plantillas, activa el botón que precede a su ruta como ves en la imagen.

La nueva ruta se agregará a las rutas de plantillas disponibles para todas las aplicaciones de OpenOffice y por lo tanto para Writer.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Crear nuevo documento desde plantilla en OpenOffice Writer En OpenOffice Writer puedes crear nuevos documentos a partir de las plantillas existentes desde el menú Archivo > Nuevo > Plantillas y documentos.

El diálogo Plantillas y documentos – Plantillas te presentará todas las carpetas en donde existen plantillas, según la configuración de rutas para plantillas definida que vimos en Configurar el acceso a las plantillas y en Crear mi carpeta de plantillas personal.

En la imagen presentada más arriba hemos añadio unas flechas que apuntan a las distintas carpetas

- Las flechas verdes apuntan a la carpeta de plantillas almacenadas en el perfil de usuario

de OpenOffice, que se presenta como Mis plantillas. Cualquier carpeta contenida en ella se mostrará también aquí, como es el caso de la carpeta Otras, que hemos creado para ilustrar el ejemplo.

- Las flechas rojas apuntan a las carpetas creadas dentro de Plantillas Personales creada

en el apartado Crear mi carpeta de plantillas personal y que también hemos creado para ilustrar el ejemplo.

- Las flechas azules apuntan a dos carpetas propias de OpenOffice, que contienen

plantillas de presentaciones y de fondos de presentación para Impress. Haz doble clic en la carpeta donde tengas almacenada la plantilla que deseas utilizar para abrir esa carpeta. Utiliza los botones situados justo encima para volver atrás o volver al inicio. Al abrir una carpeta se mostrarán las plantillas que contiene. Haciendo un clic sobre la plantilla elegida puedes ver información o una previsualización de la misma en el panel situado a la derecha de la lista de plantillas.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Haciendo clic sobre el botón puedes ver información sobre la plantilla seleccionada.

Haciendo clic sobre el botón puedes ver una previsualización de la plantilla seleccionada. Si no tienes plantillas instaladas, puedes consultar el punto Agregar nuevas plantillas desde la Web. Una vez seleccionada la plantilla, haz doble clic sobre su nombre, o clic en el botón Abrir. OpenOffice Writer creará un nuevo documento copia de la plantilla.

Este nuevo documento será creado con un nombre neutro (del tipo Sin título X, donde X es un número). Puedes modificar el nuevo documento a tu gusto, y asignarle un nombre cuando lo guardes.

La plantilla permanecerá intacta para que crees nuevos documentos cuando tú quieras, cuantas veces quieras.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Crear una nueva plantilla en OpenOffice Writer En realidad una plantilla es un documento normal que ha sido guardado no como un documento, sino como una plantilla. Por lo tanto, para crear una plantilla debemos seguir exactamente el mismo procedimiento que con cualquier documento, salvo a la hora de guardarlo.

Por ese mismo motivo, cualquier documento de los que ya tienes creado en OpenOffice Writer puedes convertirlo fácilmente en plantilla. La idea, lo importante, es que la plantilla creada sea como el esqueleto que conformará tus nuevos documentos. Esos nuevos documentos creados tomando como modelo la plantilla son los que posteriormente completarás con nuevos textos, imágenes y contenidos.

A la hora de crear una nueva plantilla, sencillamente crea un nuevo documento.

Pero también puedes utilizar un documento ya creado. En este caso, crea primero una copia del documento, y luego, elimina todo el contenido que no sea necesario, dejando sólo la estructura que consideres oportuna Si en tu trabajo o en el hogar utilizas Writer para escribir cartas, informes, memorandums, y ya los tienes creados, puedes crear fácilmente una plantilla con ellos.

- Crea primero una copia del documento.
- Edita la copia, y elimina aquellos elementos que no sean comunes en los diferentes

documentos que vas crear a partir de la nueva plantilla.

- Permanecerán por tanto los elementos comunes, como el encabezado de página, el pie

de página, la firma, el fondo de la página, el saludo inicial, un modelo de las tablas que incorporas, los estilos creados, etc.

- Avanzado: Puedes incorporar campos especiales para que automáticamente muestren

la fecha, o la carpeta donde se almacena el documento, el autor, etc.

- Avanzado: Puedes editar el estilo Predeterminado para cambiar el formato por defecto

del texto, el idioma, etc., y personalizar los distintos estilos utilizados en el documento.

- Avanzado: Puedes modificar el estilo de la página para cambiar los márgenes, la

orientación de página, los encabezados, pies, etc.

- Finalmente, tan sólo quedará guardar el documento como plantilla.

Para guardar el documento como plantilla, sigue los pasos indicados en el punto Cómo y dónde guardar las plantillas.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Cómo y dónde guardar las plantillas en OpenOffice Writer OpenOffice Writer permite que las plantillas se almacenen en una o varias carpetas (configurable desde Herramientas > Opciones > OpenOffice > Rutas). Las carpetas por defecto no son fácilmente accesibles por el usuario, ya que están situadas en la carpeta que contiene su perfil 2.

El usuario también puede añadir o modificar la ruta de las plantillas a otros en lugares más accesibles , lo que hemos venido a llamar en este manual carpeta personal de plantillas. En cualquier caso podemos almacenar las plantillas en sus carpetas por dos métodos: utilizando el administrador de plantillas, o simplemente, arrastrándolas al interior de las carpetas correspondientes.

Guardar con el administrador de plantillas Para guardar el documento que has creado o modificado en OpenOffice Writer como una plantilla tan sólo tienes que seguir los siguientes pasos

- Selecciona desde el menú Archivo > Plantilla > Guardar...
- En el diálogo Plantilla de documento selecciona la carpeta donde quieres almacenar la

plantilla desde la lista Categorías 1.

- Escribe el nombre de tu nueva plantilla en el cuadro Nueva plantilla
- Haz clic en Aceptar

Guardar en nuestra carpeta personal de plantillas Alternativamente, puedes guardar la plantilla en la carpeta personal de plantillas que creamos en el apartado Crear mi carpeta de plantillas personal mediante este procedimiento

- Si...
- ... creaste un documento nuevo para la plantilla, clic en Archivo > Guardar.
- ... estás modificando un documento existente para crear la plantilla, clic en Archivo >

Guardar como....

- Escribe el nombre de la plantilla

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

- En Tipo, selecciona Plantilla de documento de texto ODF (.ott)
- Navega hasta la carpeta Mis documentos/Plantillas personales
- Haz clic en Guardar

Como ves, salvo seleccionar en Tipo guardar como plantilla, el procedimiento es el mismo que Guardar o Guardar como... para un documento. Notas 1 ↑ En versiones anteriores a la 4.0 la lista Categorías se mostraba como Área. 2 ↑

Para acceder a la carpeta perfil del usuario en OpenOffice (carpeta oculta), puedes utilizar este sencillo truco: Windows Vista y Windows 7 La carpeta de usuario se encuentra (según versión) en: C:\Users\Tu nombre de usuario\AppData\Roaming\OpenOffice.org\3 C:\Users\Tu nombre de usuario\AppData\Roaming\OpenOffice\4 Para llegar fácilmente a ella

- Desde el botón Inicio de Windows haz clic sobre Buscar

programas y archivos

- Teclea %AppData% y pulsa Intro

Ya estás dentro de la carpeta oculta AppData y ahora puedes seguir navegando sin problemas hasta la carpeta de usuario.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Modificar una plantilla existente en OpenOffice Writer El método más sencillo para modificar una plantilla existente es

- Crear un nuevo documento a partir de la plantilla
- Modificar el documento
- Guardar el documento como plantilla de nuevo, sustituyendo a la anterior

Modificar una plantilla desde el Administrador de plantillas Puedes modificar la plantilla abriéndola desde el Administrador de plantillas.

- Abre el Administrador de plantillas desde el menú Archivo > Plantilla... > Administrar...
- Recorre las carpertas mostradas en el panel de la izquierda hasta encontra la plantilla

a editar.

- Selecciona la plantilla
- Selecciona desde su menú contextual Editar

- O desde el botón Comandos... selecciona la opción Editar

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Modificar una plantilla almacenada en nuestra carpeta personal de plantillas Alternativamente, si la plantilla está almacenada en la carpeta personal de plantillas que creamos en el apartado Crear mi carpeta de plantillas personal puedes editarla mediante este procedimiento

- Selecciona Archivo > Plantilla > Editar
- Navega hasta la carpeta Mis documentos/Plantillas personales
- Selecciona la plantilla y haz clic en Abrir

Guardar la plantilla modificada Guarda como cualquier otro documento, por ejemplo, haciendo clic sobre el botón Guardar. Guardar una copia u otra versión de la plantilla Para guardar una copia u otra versión de la plantilla, deberás asignarle otro nombre al guardarla siguiendo el procedimiento que vimos en Cómo y dónde guardar las plantillas.

Para guardar la plantilla modificada, tan sólo deberás hacer clic en el botón Guardar

Puedes guardar una copia u otra versión con otro nombre siguiendo los pasos indicados en el punto Cómo y dónde guardar las plantillas

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Cambiar la plantilla predeterminada en OpenOffice Writer Cuando en OpenOffice Writer creas un nuevo documento desde el menú Archivo > Nuevo > Documento de texto o haciendo clic sobre el botón Nuevo se crea un nuevo documento vacío basado en la plantilla predeterminada de Writer (plantilla por defecto para documentos nuevos).

Pero quizás desees que utilizar otra plantilla para crear tus nuevos documentos; por ejemplo, con estilos, encabezado y pie de página personalizados. Si deseas utilizar otra plantilla como la plantilla predeterminada deberás seguir los siguientes pasos

- 1 Selecciona el menú Archivo > Plantillas > Administrar
- 2 En la lista de la izquierda selecciona la plantilla que deseas configurar como

predeterminada (en nuestro ejemplo, vamos a utilizar una plantilla que hemos guardado como Mi plantilla Normal en la carpeta Writer, dentro de nuestra carpeta de Plantillas Personal) y …

- Haz clic sobre su nombre con el botón secundario del ratón para abrir su menú

contextual

o …

- Despliega el submenú del botón Comandos

- 3 Selecciona la opción Definir como plantilla predeterminada.

La próxima y sucesivas veces que crees un nuevo documento de texto, Writer utilizará la nueva plantilla predeterminada.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Restablecer la plantilla predeterminada en OpenOffice Writer Si quieres restablecer la plantilla predeterminada de OpenOffice Writer a la plantilla predeterminada original

- Selecciona el comando Archivo > Plantillas > Administrar.
- Selecciona desde el botón Comandos la opción Restaurar plantilla predeterminada >

Documento de texto

- O haz clic secundario sobre cualquier elemento de la lista de la izquierda y selecciona

la opción Restaurar plantilla predeterminada > Documento de texto

La próxima vez que crees un nuevo documento de texto, volverá a utilizarse la plantilla predeterminada original de OpenOffice.org para documentos de texto.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Agregar nuevas plantillas desde la Web en OpenOffice Writer En la instalación por defecto de Apache OpenOffice hay muy pocas plantillas, y las pocas que hay son todas para Impress. Pero dispones de miles de plantillas que puedes descargar desde la Web. A continuación relacionamos algunos sitios desde los que puedes descargar plantillas en español

- Web oficial de OpenOffice para plantillas en español
- Professional Template Pack II - Spanish
- Professional Template Pack I - Spanish
- Plantilla de factura para Writer
- Calendario 2012 para Writer

Otros sitios desde donde descargar más plantillas (no necesariamente en español)

- Plantillas para etiquetas adhesivas
- OO Extras
- OxygenOffice Profesional

En algunos casos las plantillas se agregarán como una extensión (ver Administrar extensiones en Writer) y, probablemente, creará su propia estructura de carpetas. En otras ocasiones, se tratará sencillamente de descargar y guardar un archivo que podrás almacenar en tu propia carpeta de plantillas. Puedes consultar este minitutorial de nuestro blog si no sabes como hacerlo: Cómo copiar las plantillas descargadas al almacén de plantillas de OpenOffice.

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

El administrador de plantillas de OpenOffice Writer En este manual te hemos sugerido una forma alternativa de administrar tus plantillas para Writer, consistente en crear una carpeta llamada Plantillas Personales en tu carpeta Mis Documentos. Posteriormente te hemos explicado como agregar esa carpeta en la ruta de plantillas de OpenOffice.

Te hemos sugerido también que las diferentes categorías de plantillas las organices dentro de esa carpeta, en forma de subcarpetas. Consideramos que es un sistema cómodo, fácil y al alcance de cualquier usuario. El motivo es por que consideramos que el sistema de administrar plantillas de OpenOffice Writer es un poco confuso para usuarios noveles. Pero no es más que una opinión.

OpenOffice dispone de su propio sistema de gestión de plantillas. Para activarlo, selecciona desde el menú Archivo > Plantilla > Administrar.

El administrador muestra dos listas y una serie de botones. Las listas pueden presentar bien la estructura de plantillas, o documentos que previamente deben de ser seleccionados mediante el botón Archivo..., que se activa si haces clic en la lista Documentos. El botón Comandos te presentará una serie de opciones en función del elemento que tengas seleccionado.

Si seleccionas una categoría (carpeta) de las plantillas de usuario podrás

- Agregar una nueva categoría seleccionando

Nuevo

- Eliminar una categoría
- Importar una plantilla a la categoría
- Invocar la Configuración de la impresora
- Refrescar la lista seleccionando Actualizar

Tema 09. Plantillas.

Fuente: https://wiki.open-office.es/Manejo_de_imagenes_en_OpenOffice_Writer

Si seleccionas una plantilla podrás

- Editar la plantilla
- Eliminar la plantilla
- Importar una plantilla
- Exportar la plantilla
- Invocar la Configuración de la impresora
- Refrescar la lista seleccionando Actualizar
- Definir como plantilla predeterminada la

plantilla seleccionada

Si no existe ningún elemento seleccionado podrás

- Invocar la Configuración de la impresora
- Refrescar la lista seleccionando Actualizar

Finalmente, el botón Libreta de direcciones... te permite establecer un vínculo entre una fuente de datos (por ejemplo, la libreta de direcciones de tu sistema operativo ( la libreta de direcciones de Windows o la de MS Outlook para usuarios de Windows) y la base de datos que automáticamente creará OpenOffice y que te permitirá disponer de los campos de tu libreta de direcciones para agregarlos con facilidad a tus documentos y plantillas.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul de Temps i Consum d'Impressió Massiva de Correspondència:**
   - Un departament d'administració ha d'imprimir una tramesa de notificacions personalitzades a $640\text{ clients}$.
   - Cada carta consta exactament de $2\text{ pàgines}$ (anvers i revers imprés en dúplex).
   - La impressora làser de departament té una velocitat d'impressió efectiva de $24\text{ pàgines per minut}$ (PPM) en mode doble cara.
   - **Preguntes de dimensionament:**
     - Quantes pàgines totals i quants fulls de paper físics A4 es consumiran en la tirada completa?
     - Quant de temps en minuts trigarà la impressora a completar la feina si no es produeix cap encallament de paper?
     - Si el tòner negre té una capacitat nominal de $3.000\text{ pàgines}$ al $5\%$ de cobertura estàndard i aquestes cartes tenen una cobertura del $8\%$ (consum proporcional: $3.000 \times \frac{5}{8} = 1.875\text{ pàgines}$ reals), quin percentatge del cartutx de tòner es gastarà en aquesta única feina?

2. **Dimensionament de Fulls d'Etiquetes Postals Adhesives:**
   - Es disposa de paquets de fulls DIN A4 d'etiquetes adhesives comercials (format estàndard: 3 columnes $\times$ 7 files = $21\text{ etiquetes per full}$).
   - La base de dades conté $380\text{ adreces postals}$ validades.
   - **Preguntes de càlcul:**
     - Quants fulls d'etiquetes A4 sencers caldrà alimentar a la safata d'impressió per cobrir tots els destinataris?
     - Quantes etiquetes romandran en blanc sense utilitzar a l'últim full imprès?
     - Si s'aplica un filtre de selecció per imprimir exclusivament els clients de la província de València (`Provincia = "València"`) que representen el $60\%$ del total (228 clients), quants fulls s'utilitzaran en eixe cas?

3. **Formatació de Camps Crítics en la Font de Dades:**
   - En vincular un full de càlcul Calc com a font de dades per a combinar correspondència, un tècnic observa que:
     - El codi postal `03001` apareix a la carta combinada com `3001` (sense el zero inicial).
     - Una data de venciment `15/04/2026` apareix com un nombre enter `46127`.
     - Un saldo pendent `1250,5` apareix sense el símbol d'euro ni els dos decimals estàndard (`1250.5`).
   - **Preguntes d'anàlisi:**
     - Explica per quina raó tècnica el zero inicial desapareix quan una columna d'identificador o codi postal s'ha definit amb format numèric en lloc de format **Text**.
     - Per quina raó les dates es transformen en enters (sistema de recompte de dies des del punt zero d'origen)?
     - Com es corregeix la presentació de monedes directament a Writer mitjançant la propietat de format del camp de combinació sense haver d'alterar les dades originals del full de càlcul?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació d'una Font de Dades Calc i Registre en LibreOffice
1. Obre LibreOffice Calc i crea un fitxer anomenat `destinataris_taller.ods`.
2. Defineix a la fila 1 els camps: `ID`, `Nom`, `Cognoms`, `Empresa`, `Adreca`, `CodiPostal`, `Poblacio`, `Deute_Euros`.
3. Introdueix 5 registres complets amb dades fictícies (assegura't que la columna `CodiPostal` estiga formatada explícitament com a Text per mantindre els zeros a l'esquerra).
4. Obre LibreOffice Writer i prem `F4` per visualitzar el panell de fonts de dades.
5. Registra la font de dades mitjançant `Fitxer > Nou > Base de dades > Connecta amb una base de dades existent > Full de càlcul` i enllaça el fitxer `.ods`.

#### Repte 2: Redacció de la Carta Model i Inserció de Camps
1. Redacta a Writer una carta formal de notificació de servei tècnic amb capçalera corporativa.
2. Arrossega des del panell de dades superior (`F4`) o mitjançant `Insereix > Camp > Més camps (Ctrl+F2) > Base de dades` els camps:
   - `<Nom> <Cognoms>`
   - `<Empresa>`
   - `<Adreca>, <CodiPostal> - <Poblacio>`
3. Al cos de la carta, insereix la frase condicional: *"Us informem que el vostre saldo pendent de regularització és de `<Deute_Euros> €`."*
4. Guarda el document com a plantilla de document de text de LibreOffice amb extensió `.ott`.

#### Repte 3: Generació de la Tramesa Combinada i Filtres de Selecció
1. Executa l'assistent de combinar correspondència o prem la icona **Imprimeix**.
2. Davant el missatge *"El document conté camps de base de dades. Voleu imprimir una carta en sèrie?"*, selecciona **Sí**.
3. Aplica un filtre a la finestra emergent: selecciona únicament els registres on `Deute_Euros > 0`.
4. Comprova la vista prèvia dels registres filtrats verificant que cap camp apareix buit ni amb caràcters estranys.
5. Selecciona com a eixida **Desar com a document únic** i genera el fitxer final `Cartes_Finals.odt`. Comprova que conté tantes pàgines com clients complien la condició de filtre.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Font de Dades i Integritat de Camps** | Modela el full de càlcul amb capçaleres correctes, formats de text per a codis postals i vincula la font mitjançant F4 sense errors. | Crea la font de dades però oblida el format de text per als codis postals perdent el zero inicial dels registres. | No sap com vincular un full de càlcul amb Writer i intenta copiar i apegar les dades manualment carta per carta. |
| **Carta Model, Camps de Fusió i Plantilles** | Dissenya una carta corporativa neta, insereix camps amb espaiats correctes i l'emmagatzema com a plantilla reusable `.ott`. | Insereix els camps de combinació però deixa espais dobles o no sap guardar el document en format de plantilla. | Escriu els noms dels camps entre signes `< >` a mà en lloc d'inserir camps dinàmics reals de base de dades. |
| **Filtratge, Vista Prèvia i Eixida de Fusió** | Aplica filtres SQL/lògics avançats, comprova la vista prèvia de registres i genera documents únics o individuals en PDF. | Executa la combinació de correspondència amb èxit però no sap aplicar filtres de selecció de registres. | Imprimeix directament sense revisar la vista prèvia generant documents en blanc o amb dades corruptes. |
