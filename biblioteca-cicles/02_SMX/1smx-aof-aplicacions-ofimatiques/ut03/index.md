---
layout: default
title: "UD3 — Processador de text (III) · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3 — Processador de text (III)"
prev_url: "../ut02/ut0203.html"
prev_label: "⬅️ 2.3 Tema 9. PLANTILLES"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Tema 11. Index de continguts, figures i alfabèti ➡️"
---

# 📘 UD3 — Processador de text (III) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📖 Arquitectura de Documents Llargs, Índexs Automàtics i Seccions

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Gestió Avançada: Estils de Títol, Taules de Contingut, Salts de Secció i Índexs</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Foliació independent, desvinculació de capçaleres i estructuració de manuals de gran extensió</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU3TitolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU3TocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU3PagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU3IdxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Estils Jeràrquics -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#aofU3TitolGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">📑 1. ESTILS DE TÍTOL</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Esquema del Document</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Títol 1:</tspan> Capítols principals</text>
    <text x="42" y="93" fill="#94a3b8" font-size="8">Nivell d'esquema 1</text>
    <text x="32" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Títol 2:</tspan> Subapartats de bloc</text>
    <text x="42" y="125" fill="#94a3b8" font-size="8">Nivell d'esquema 2</text>
    <text x="32" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Títol 3:</tspan> Punts específics</text>
    <text x="32" y="164" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Navegador (F5):</tspan></text>
    <text x="42" y="177" fill="#94a3b8" font-size="8">Arbre de navegació en directe</text>
    <text x="32" y="196" fill="#cbd5e1" font-size="8.5">• Reorganització d'apartats ràpida</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Esquelet Estructural</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Taula de Continguts (TOC) -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#aofU3TocGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">📖 2. TAULA CONTINGUT</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Generació Automàtica (TOC)</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• Menú `Insereix > Índex...`</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• Llegeix automàticament Títols</text>
    <text x="252" y="118" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Hipervincles natius:</tspan></text>
    <text x="262" y="131" fill="#94a3b8" font-size="8">Salt directe al capítol (Ctrl+Clic)</text>
    <text x="252" y="150" fill="#cbd5e1" font-size="8.5">• Puntuació de farciment (`...`)</text>
    <text x="252" y="168" fill="#cbd5e1" font-size="8.5">• Números de pàgina automàtics</text>
    <text x="252" y="188" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Actualització:</tspan> Clic dret</text>
    <text x="262" y="200" fill="#94a3b8" font-size="7.5">> Actualitza l'índex</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Zero Errors de Pàgina</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Seccions i Estils de Pàgina -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#aofU3PagGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">📄 3. ESTILS DE PÀGINA</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Salts Manuals i Foliació</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Portada:</tspan> Sense encapçalament</text>
    <text x="472" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Preliminars:</tspan> Nombres romans</text>
    <text x="482" y="111" fill="#94a3b8" font-size="8">(i, ii, iii, iv per a índexs)</text>
    <text x="472" y="130" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Cos Principal:</tspan> Aràbic (1, 2, 3)</text>
    <text x="482" y="143" fill="#94a3b8" font-size="8">Reinici de numeració a 1</text>
    <text x="472" y="162" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Pàgines Apaïsades:</tspan></text>
    <text x="482" y="175" fill="#94a3b8" font-size="8">Format horitzontal per a taules</text>
    <text x="472" y="194" fill="#cbd5e1" font-size="8.5">• Desvinculació de capçaleres</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Seccions Independents</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Índexs Especials i Mestre -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#aofU3IdxGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="10.5" font-weight="bold" text-anchor="middle">📚 4. ÍNDEXS &amp; MESTRE</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Obres de Gran Volum</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Índex Alfabètic:</tspan></text>
    <text x="700" y="93" fill="#94a3b8" font-size="8">Termes tècnics i conceptes</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Taula de Figures:</tspan></text>
    <text x="700" y="125" fill="#94a3b8" font-size="8">Llista automàtica d'imatges</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• Taula de Taules</text>
    <text x="692" y="162" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Document Mestre:</tspan></text>
    <text x="700" y="175" fill="#94a3b8" font-size="8">Format `.odm` multi-arxiu</text>
    <text x="692" y="194" fill="#cbd5e1" font-size="8.5">• Enllaç de subdocuments</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Publicació Editorial</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or dels Documents Extensos: <tspan fill="#34d399" font-weight="bold">Mai s'escriu un índex manualment teclejant punts i números de pàgina.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Aplica sempre Estils de Títol jeràrquics i genera la Taula de Continguts de forma automàtica; s'actualitzarà sola amb un sol clic davant qualsevol canvi.</text>
  </svg>
</div>

---

## 📊 Gestió d'Estils de Pàgina i Salts de Secció en Documents Extensos

| Secció del Document | Estil de Pàgina Recomanat | Encapçalament / Capçalera | Peu de Pàgina / Foliació | Tipus de Salt Previ |
| :--- | :--- | :--- | :--- | :--- |
| **Portada del Projecte** | **Primera Pàgina (*First Page*)** | Desactivada completament. | Desactivat (sense cap número de pàgina). | Cap (inici del document). |
| **Pàgina de Resum / Índexs** | **Preliminars / Índex** | Títol del projecte i versió. | Nombres romans en minúscula (**i, ii, iii, iv**). | Salt manual amb canvi d'estil de pàgina; sense reinici de foliació. |
| **Cos Principal (Capítols)** | **Predeterminat (*Default Page Style*)** | Títol del Capítol actiu (camp dinàmic). | Nombres aràbics (**1, 2, 3...**) amb reinici a pàgina 1. | **Salt manual de pàgina amb canvi d'estil i número de pàgina = 1.** |
| **Annexos / Taules Amples** | **Horitzontal (*Landscape*)** | Títol de l'Annex. | Nombres aràbics continuats (ex: 45, 46). | Salt manual amb canvi d'estil a format Horitzontal (apaisat). |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 Tema 11. Index de continguts, figures i alfabèti**](./ut0301.md)
- [**3.2 Tema 13. Treballar amb documents llargs**](./ut0302.md)

---

# 3.1 Tema 11. Index de continguts, figures i alfabèti

### 📄 Tema11(1)_como-crear-modificar-y-actualizar-un-indice-automaticamente-en-writer-.pdf

Tema 11 (1). Como crear un índice automático en Writer Cómo crear un índice automáticamente en Writer de LibreOffice

Tema 11 (1). Como crear un índice automático en Writer Índice Creación del índice. PASOS

- Creamos un nuevo estilo de párrafo para los Títulos que vamos a incluir en el índice.

#### 2) Lo registramos como “Nuevo estilo de párrafo”

- Creamos un nuevo estilo de párrafo para los Subtítulos que vamos a incluir en el índice

#### 4) Lo registramos como “Nuevo estilo de párrafo”

- Vamos a ir asignando a los Títulos de nuestro documento el nuevo estilo de párrafo “Título 1”

creado

- Repetiremos el anterior proceso para los Subtítulos de nuestro documento, a cada Subtítulo le

asignaremos el nuevo estilo de párrafo “Subtítulo 1” creado

#### 7) Insertamos el índice en nuestro documento

#### 8) Vamos a definir el nivel para cada estilo de párrafo creado

Modificación del contenido del índice Actualización del contenido del índice Modificación y actualización de los estilos de los Títulos y Subtítulos Modificación del formato del índice

Tema 11 (1). Como crear un índice automático en Writer A continuación veremos cómo crear un índice automáticamente en Writer de LibreOffice. Seguiremos estos pasos

#### 1) Creamos un nuevo estilo de párrafo para los Títulos que vamos a incluir en el

índice. Seleccionamos el Título “1.Introducción”. Establecemos su formato, en este ejemplo: Bookman Old Style, 14 puntos, negrita, color azul4.

- Lo guardamos como “Nuevo estilo de párrafo”.

Primero desplegamos, en la parte superior, el botón de "estilo" de la barra de herramientas de formato y haremos un clic sobre el último apartado de "Más". A continuación, en la parte superior derecha emergerá un cuadro contextual. Desplegaremos el botón situado en la esquina superior derecha, después otro clic en el apartado "Estilo nuevo a partir de selección". Partiendo del Estilo predeterminado.

Tema 11 (1). Como crear un índice automático en Writer En el siguiente cuadro contextual que emerge asignaremos un nombre al nuevo estilo de párrafo creado, en este caso "Título1" (sin espacios), después clic sobre el botón "Aceptar". Observaremos que dicho estilo se incorporó al final de nuestra lista.

#### 3) Creamos un nuevo estilo de párrafo para los Subtítulos que vamos a incluir en el

índice. Nos situamos en la segunda página y seleccionamos el primer Subtítulo "1.1 Interpretación de los resultados". Establecemos su formato, en este ejemplo: Arial, 14 puntos, negrita, color rojo.

- Lo guardamos como “Nuevo estilo de párrafo”.

Utilizaremos el cuadro contextual del panel derecho. Desplegaremos el botón situado en la esquina superior derecha, después otro clic en el apartado "Estilo nuevo a partir de selección".

Tema 11 (1). Como crear un índice automático en Writer En el siguiente cuadro contextual que emerge asignaremos un nombre al nuevo estilo de párrafo creado, en este caso "Subtítulo1" (sin espacios), después clic sobre el botón "Aceptar". Ya tenemos registrados los nuevos estilos de párrafo para los Títulos y Subtítulos.

#### 5) Vamos a ir asignando a los Títulos de nuestro documento el nuevo estilo de

párrafo “Título 1” creado. Seleccionamos el siguiente Título del documento (2.Material y métodos). Después desplegamos en el botón de "Estilos" y le asignamos el "Título1". Haremos lo mismo para todos los Títulos del documento (son los que llevan delante un número)

### 2. Material y métodos

### 3. Resultados

### 4. Análisis de las dimensiones

- Reconocimiento profesional….

Tema 11 (1). Como crear un índice automático en Writer

#### 6) Repetiremos el anterior proceso para los Subtítulos de nuestro documento, a

cada Subtítulo le asignaremos el nuevo estilo de párrafo “Subtítulo 1” creado. A continuación seleccionamos el siguiente Subtítulo del documento (4.1 La organización) Después desplegamos en el botón de "Estilos" y le asignamos el "Subtítulo1". Haremos lo mismo para todos los Subtítulos del documento (son los que llevan delante dos números)

Tema 11 (1). Como crear un índice automático en Writer

- Insertamos el índice en nuestro documento.

Primero haremos un clic en la primera línea de la página 1. Seguidamente clic sobre el menú "Insertar" y después escogemos "Índices y tablas-> Índices" A continuación haremos lo siguiente: 1º) Clic en la casilla de "Estilos adicionales". 2º) Otro clic en el botón "..."

Tema 11 (1). Como crear un índice automático en Writer

- Vamos a definir el nivel para cada estilo de párrafo creado.

El nivel determinará la posición en el índice de los Títulos y Subtítulos. A mayor nivel mayor será la sangría (distancia desde el margen) En este ejemplo asignaremos el nivel 1 al Título 1 y el nivel 2 al Subtítulo 1. En la zona inferior del siguiente cuadro contextual

1º) Clic sobre "Título1" y después 2º) Otro clic sobre el botón ">I" De esta manera establecemos la posición del "Título 1" en el nivel 1 del índice. En este caso comprobaremos que el "Título 1" se encuentra en la vertical del "Nivel 1".

Tema 11 (1). Como crear un índice automático en Writer Continuamos y en la zona inferior del cuadro contextual: 1º) Clic sobre "Subtítulo 1" y después 2º) Dos clics sobre el botón ">I" La asignación de niveles quedará de esta manera, para finalizar clic sobre el botón "Aceptar" En el siguiente cuadro contextual haremos clic en el botón "Aceptar".

Tema 11 (1). Como crear un índice automático en Writer Aquí tenemos el índice: Modificación del contenido del índice El índice, por defecto, está protegido contra modificaciones manuales. Por lo tanto, si quisiéramos modificar su texto haremos lo siguiente: 1º) Clic derecho sobre el índice, después clic izquierdo sobre el apartado "Editar índice/tabla".

2º) Clic sobre la casilla de "Protegido contra cambios manuales". Finalmente clic sobre el botón "Aceptar".

Tema 11 (1). Como crear un índice automático en Writer Ahora ya podremos hacer cambios sobre el texto del índice. Actualización del contenido del índice Si hubiéramos modificado el texto o posición de los Títulos o Subtítulos de nuestro documento podríamos incorporar, posteriormente, dichos cambios sobre el índice automáticamente.

Para actualizar dichos cambios, simplemente haremos un clic derecho sobre el índice. A continuación, clic izquierdo sobre el apartado "Actualizar índice/tabla". Observaremos que todos los cambios se incorporarán al índice automáticamente. Modificación y actualización de los estilos de los Títulos y Subtítulos Podremos modificar el formato de los estilos de párrafo que hemos creado y asignar, automáticamente, dicha modificación a todos los Títulos y Subtítulos de nuestro documento.

1º) Seleccionamos un Título cualquiera de nuestro documento y hacemos sobre el mismo las modificaciones oportunas. En este caso, modificamos el tipo de letra (Times New Roman), tamaño (16 ptos), color (verde),etc. → 2º) Desplegaremos el botón situado en la esquina superior derecha del cuadro de "Estilos y formato", después otro clic en el apartado "Actualizar estilo".

Comprobaremos que todos los Títulos se modificaron con el nuevo estilo.

Tema 11 (1). Como crear un índice automático en Writer Modificación del formato del índice Cada nivel del índice que hemos insertado tiene un formato predeterminado, debido a que tiene asignado un estilo de párrafo. En este ejemplo, el Nivel 1 tiene el estilo de párrafo “Índice 1”, el Nivel 2 el “Índice 2” y el encabezado del índice “Encabezado del índice”.

Por lo tanto, dichos estilos de párrafo también son modificables y seguiremos, para ello, estos pasos: Clic derecho sobre el Título (1.Introducción) del índice, que tiene un Nivel 1 y un estilo de párrafo “Índice 1”, después sobre el cuadro contextual que emerge, clic izquierdo sobre el apartado de “Editar estilo de párrafo”.

A continuación, observaremos que en el apartado “Contiene” de la ficha “Organizador” se muestra una descripción del formato del estilo de párrafo. En este ejemplo, el tabulador está colocado a 17 centímetros y la sangría derecha e izquierda es de 0 cm. Antes de empezar a realizar los cambios haremos un clic sobre la casilla de verificación de “Actualizar cambios”. Después podríamos ir modificando todas las características del estilo de párrafo: sangrías y espaciado, alineación, flujo del texto, etc.

Tema 11 (1). Como crear un índice automático en Writer Para finalizar, un clic sobre “Aplicar” y otro sobre “Aceptar”, en la parte inferior del cuadro contextual. Aquí tenemos las modificaciones realizadas sobre el estilo de párrafo de “Índice 1”. Para asignar otros estilos de párrafo sobre los niveles del índice haríamos lo siguiente

Clic derecho sobre el índice, después sobre el cuadro contextual que emerge, clic izquierdo en el apartado de “Editar índice/tabla”. A continuación, seleccionamos la ficha “Estilos” y observamos los estilos de párrafos asignados a los niveles del índice y a su encabezado.

Tema 11 (1). Como crear un índice automático en Writer Para cambiar los estilos de párrafos asignados a los niveles del índice, seguiremos estos pasos: 1º) Seleccionamos un estilo de párrafo. 2º) Escogemos el nivel al que se lo asignaremos. 3º) Clic sobre la flecha.

En la siguiente página, observamos que el estilo de párrafo “Título 1” aparece junto al “Nivel 1” y el cuadro de la izquierda nos previsualiza el resultado final. Para finalizar clic sobre el botón “Aceptar” Aquí tenemos el cambio de estilo para el Nivel1

### 📄 Tema11(2)_como-crear-un-indice-de-todas-las-tablas-e-imagenes-del-documento-en-writer.pdf

Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento. Cómo crear un índice de las tablas e imágenes de nuestro documento en Writer

Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento. Índice

- Vamos a automatizar la inserción de la etiqueta sobre todas las tablas, imágenes de archivo que

vayamos insertando

- Insertamos sobre nuestro documento las tablas, imágenes de archivo o de la galería de Writer

#### 3) Insertamos el índice en nuestro documento

Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento. A continuación veremos cómo crear un índice de las tablas e imágenes de nuestro documento en Writer. Lo haremos en 3 sencillos pasos

#### 1) Vamos a automatizar la inserción de la etiqueta sobre todas las tablas,

imágenes de archivo que vayamos insertando. Seguiremos este procedimiento

- Insertamos una imagen y después la seleccionamos.

### 2. Insertamos la etiqueta, podemos hacerlo de varias formas

 Ejecutamos el menú “Insertar -> Leyenda”  Mediante un clic derecho sobre el objeto y después un clic izquierdo sobre el apartado “Pie” ó “Insertar Leyenda”.

### 3. Una vez que estamos en el cuadro de diálogo “Insertar Leyenda”, haremos un clic

sobre el botón “Auto…” ó “Automatico”.

Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento.

### 4. En el siguiente cuadro contextual haremos lo siguiente

1.- un clic sobre la casilla “Imagen de LibreOffice Writer” y otro sobre “Tabla de LibreOffice Writer”. 2.- podríamos cambiar el orden del pie (numeración delante de la categoría). 3.- Finalmente, clic sobre el botón “Aceptar”.

Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento.

#### 2) Insertamos sobre nuestro documento las tablas, imágenes de archivo o de la

galería de Writer A partir de ese momento, cuando insertemos una ilustración o una tabla aparecerá la etiqueta correspondiente debajo (con la numeración consecutiva).

Primero nos situamos en la primera página en blanco de nuestro documento (es donde se ubicará normalmente el índice personalizado). Seguidamente clic sobre el menú "Insertar" y después escogemos "Índices y tablas -> Índices…"

> **⚠️ Nota: en el apartado título podremos modificar el títul...**
> Nota: en el apartado título podremos modificar el título del índice, en este caso “Indice de tablas e imágenes” Tema 11 (2). Como crear un índice de las tablas e imágenes de nuestro documento. En la parte derecha del siguiente cuadro contextual haremos lo siguiente

1. Clic sobre la pestaña “Indice/tabla” 2. En el desplegable “Tipo” seleccionaremos “Definido por el usuario”. 3. Clic sobre las casillas de “Tablas” e “Imagen”. 4. Finalmente, clic sobre el botón “Aceptar”. Aquí tenemos el índice de las tablas e imágenes de nuestro documento

---

# 3.2 Tema 13. Treballar amb documents llargs

### 📄 Writer-trabajo-documentos-largos.pdf

Trabajo con documentos largos en Writer, esquemas y sumarios

Trabajar con documentos largos en LibreOffice Writer

Trabajo con documentos largos en Writer, esquemas y sumarios

Trabajo con documentos largos en LibreOffice Writer

Cuando elaboramos largos informes o memorias, nuestros documentos deben dotarse de una estructura que haga cómodo su seguimiento. Ya sabemos que podemos -y debemos- utilizar estilos de Título para ello. Pero además, Writer nos proporciona un conjunto de herramientas que nos facilitarán esta tarea. Gracias a estas herramientas podremos alterar con mucha facilidad el esquema de nuestros documentos, los títulos podrán ser numerados y crearemos sumarios y tablas de toda clase de contenido. A su dominio dedicamos la presente unidad didáctica.

Uso del Navegador

El Navegador es una herramienta exclusiva de LibreOffice que nos permitirá acceder a los diferentes elementos incluidos en un documento, así como navegar por él con toda comodidad. El Navegador permitirá modificar el esquema del documento, acceder a títulos de cualquier nivel, seleccionar imágenes, objetos incrustados o hiperenlaces entre otros muchos elementos. Su uso en documentos largos y estructurados resultará insustituible.

Podemos iniciar el Navegador de diferentes maneras

- Desde el menú Ver > Navegador .
- Con la tecla de función F5 .
- Desde el botón Navegador de la barra de herramientas Estándar.
- Desde el botón Navegador de la barra de herramientas lateral.

En el último caso, el Navegador se abrirá en el panel lateral. En todos los demás se abrirá en forma de ventana flotante sobre el documento, que puede ser acoplada a cualquier lado.

La ventana del Navegador

Trabajo con documentos largos en Writer, esquemas y sumarios

El Navegador está formado por una barra de herramientas propia y una lista donde aparecen las siguientes categorías de objetos contenidos en los documentos

- Títulos. Los diferentes títulos del documento, agrupados y sangrados según su nivel, dicho de otra manera, el

esquema del documento.

- Tablas. Las tablas son estructuras de texto organizadas en filas y columnas.
- Marcos de texto. Cuadros con texto en su interior que pueden ser tratados como un objeto gráfico.
- Imágenes. Imágenes insertadas en el documento.
- Objetos OLE. Elementos como hojas de cálculo, fórmulas, y, en general, objetos de cualquier programa que admita

la tecnología OLE (Object Linking and Embedding - Objetos vinculados e incrustados)

- Marcadores. Puntos del texto con un nombre que se crean para ser referenciados desde otro lugar del documento.
- Secciones. Divisiones estructurales del documento que permiten aplicar determinados atributos a partes del

documento, como la organización en columnas periodísticas o protección, entre otros. Hiperenlaces. Vínculos a sitios web, otros documentos, títulos o marcadores.

- Referencias. Textos del documento que apuntan a algún Marcador.
- Índices. Tablas de contenído que pueden ser de tipos muy variados: sumarios, alfabéticos o de ilustraciones entre

otros.

- Comentarios. Anotaciones creadas para revisiones del documento o establecer recordatorios.
- Objetos de dibujo. Elementos de dibujo insertados en el documento.

Para explorar el contenido de una categoría, delante del nombre de la misma hay un símbolo que alterna entre + (más) para expandir el contenido y - (menos) para contraerlo. Los títulos de diferentes niveles también muestran los mismos símbolos para expandir o contraer los títulos de nivel inferior.

Tanto las categorías como las entradas de cada categoría poseen un menú contextual que podemos activar haciendo clic con el botón secundario del ratón. Al situar el ratón sobre una categoría, una etiqueta emergente muestra el número de elementos que contiene. El desplegable de la parte inferior de la ventana permite alternar entre los diferentes documentos abiertos.

Para desplazarse por el documento usando el Navegador

- Para acceder a un elemento de una categoría, haremos doble clic sobre su nombre.
- Para acceder a un número de página escribiremos el número en el cuadro de la barra superior y pulsaremos INTRO
- Los botones de incremento y decremento del cuadro con el número de página permitirán avanzar y retroceder

páginas.

- También podamos activar la barra de herramientas de Navegación.

La barra de herramientas de Navegación se activa pulsando el botón Navegación, el primer botón que se muestra en la barra del Navegador.

Trabajo con documentos largos en Writer, esquemas y sumarios

La barra de herramientas de Navegación

La barra de herramientas Navegación permite seleccionar entre diferentes tipos de elementos, de tal manera que pulsando luego los botones Anterior o Siguiente, de la propia barra o del Navegador se recorrerán las diferentes apariciones de este tipo de elemento dentro del documento. De forma predeterminada, está activado Página.

En el próximo apartado comprobamos como se puede usar el navegador para modificar el esquema del documento.

Editar el esquema del documento

El Navegador permite reorganizar fácilmente la estructura jerárquica de los capítulos y apartados del documento.

Para ello hace uso de cuatro botones situados en la barra de herramientas superior de la ventana. En el momento de redactar estos contenidos, el programa adolece de un defecto de traducción que hace que sus nombres se muestren en inglés.

Botones para reorganizar esquema del documento

Recuerda que los iconos mostrados pueden mostrar una apariencia diferente según el conjunto de iconos que hayas establecido desde Herramientas > Opciones > LibreOffice > Ver . Para que se muestren habilitados, es necesario tener seleccionado en el Navegador un título determinado del esquema.

Entonces su comportamiento es como sigue

- Promete chapter (promover capítulo; subir capítulo). Asciende una posición el título seleccionado en el navegador,

junto con todos sus subniveles.

- Demote chapter (degradar capítulo; bajar capítulo) . Desciende una posición el título seleccionado en el navegador,

junto con todos sus subniveles.

- Promete level (promover nivel; subir nivel) . Asciende el nivel dentro del esquema del título seleccionado junto con

todos sus subniveles. Automáticamente, se aplicará a todos los títulos el estilo de título adecuado. Por ejemplo, al aplicarlo sobre un Título 2, del cual depende un Título 3, el Título 2 pasará a ser un Título 1 y el Título 3 pasará a ser un Título 2.

- Demote level (degradar nivel; bajar nivel) . Degrada el nivel dentro del esquema del título seleccionado junto con

todos sus subniveles.

Si el título que deseas promover no tiene subtítulos, basta con cambiar el estilo de título al nivel deseado. Hacerlo con el Navegador resulta notablemente más productivo cuando el título tiene uno o más subtítulos, es decir, si tienes un Título 2 del cual dependen varios Título

Trabajo con documentos largos en Writer, esquemas y sumarios

Numeración de capítulos

En informes y memorias es habitual numerar los diferentes apartados que los componen. Para ello quizás tengamos la tentación de hacerlo desde las opciones de numeración y viñetas, pero éstas están orientadas a numerar listas de párrafos consecutivos, e intentar aplicarlas a los títulos y encabezados del contenido puede ser un quebradero de cabeza.

La forma adecuada de resolver esta necesidad es mediante el diálogo de Numeración de capítulos que se abre desde Herramientas > Numeración de capítulos. Este diálogo nos permitirá asignar numeraciones a los distintos niveles de título del documento.

Haciéndolo así nos podremos despreocupar de mantener la numeración pues el propio Writer se ocupará de hacerlo automáticamente a medida que añadimos o eliminamos encabezados en nuestro documento.

Cuadro de diálogo Numeración de capítulos

La pestaña Numeración del diálogo de Numeración de capítulos muestra una lista de los niveles del esquema, una serie de propiedades para cada uno de ellos y una vista previa del resultado que se obtendrá.

Mediante este diálogo podemos asignar a cada nivel del esquema de documento un estilo de párrafo (por defecto, Encabezado 1 a Encabezado 10 (ó Titulo 1 a Titulo 10), aunque podemos elegir cualquier otro). Para cada nivel, asignaremos una serie de propiedades que nos permitirá personalizar la forma en que se mostrará este encabezado.

Tras seleccionar el nivel desado en la lista Nivel, las diferentes propiedades que podemos asignar son

- Estilo de párrafo: Seleccionaremos el estilo de párrafo asignado al nivel, por defecto Título 1 para el Nivel 1, Título

2 para el Nivel 2, y así sucesivamente.

- Número: Escogeremos el estilo de numeración deseado: números árabes, romanos, letras o Ninguna si no

deseamos que se muestre ninguna numeración. Aquí no hay disponibles viñetas, tan sólo estilos de numeración.

- Estilo de carácter: Por defecto, la numeración se muestra con el formato de texto correspondiente al estilo del

Trabajo con documentos largos en Writer, esquemas y sumarios

párrafo seleccionado. Si deseamos que el número se muestre con una tipografía, tamaño, color o efecto diferente, necesitaremos asignar un estilo de carácter configurado con estas características.

- Mostrar subniveles: Para niveles posteriores al primero, podemos escoger cuántos subniveles se mostrarán en el

número. Por ejemplo, si en el nivel 3 asignamos 3 subniveles, se mostrará el número de cada encabezado como 1.1.1., 2.1.2, etc.

- Separador: Opcionalmente se puede añadir un separador Antes y Después del número, esto nos permitirá que la

numeración aparezca como (1), -1-, #1 o el estilo deseado.

- Iniciar en: El número desde el cual se comenzará a numerar. Si la numeración está establecida como números

arábicos, se puede comenzar a numerar desde el 0, en cualquier otro caso, desde el 1. • Si deseamos asignar las mismas propiedades a todos los niveles en la lista Nivel podemos seleccionar 1- 10.

Ejemplo numeración de capítulos

En el ejemplo que se muestra se ha configurado la numeración con las siguientes propiedades

Nivel 1

Número: 1, 2, 3...

Separador Después: punto

Iniciar en: 0

Nivel 2

Número: 1, 2, 3...

Mostrar subniveles: 2

Separador Despés: punto Mediante la pestaña Posición del diálogo, podemos personalizar diferentes propiedades de espaciado y ubicación de los números de página asignados.

Creación de índices y tablas de contenido

Es habitual vernos en la necesidad de elaborar documentos largos y estructurados con diferentes capítulos y apartados como memorias, informes o propuestas de proyectos. En esos casos, resulta casi imprescindible crear un índice que nos indique en qué pagina encontraremos cada uno de los apartados del documento.

Writer incorpora potentes herramientas para insertar Índices y sumarios (tablas de contenido) en nuestros documentos.

Trabajo con documentos largos en Writer, esquemas y sumarios

Para poder utilizar estas herramientas y crear los índices es necesario crear el documento utilizando estilos, y para las distintas tablas de contenido, agregar títulos a las tablas o a las imágenes, o insertar citas bibliográficas, o insertar manualmente entradas al índice.

Si se prepara el documento adecuadamente, insertar índices o tablas de contenidos serán sólo unos pocos clics.

Para poder insertar índices de contenido debemos estructurar previamente los capítulos y apartados del documento aplicando donde corresponda los estilos de párrafo predefinidos y denominados Título 1 al Título 10.

¿Qué significa estructurar previamente los capítulos y apartados? Significa que el documento al que queremos agregar un índice de contenido debe está organizado con cierta jerarquía (sección, tema, capítulo, apartado, etc), y que los títulos de éstos elementos (título del capítulo, título del apartado) deben tener asignado un estilo de párrafo, que puede ser, o bien uno entre los denominados Título 1 al Título 10.

Insertar sumarios y tablas de contenido

Los índices y tablas de contenido se pueden insertar en cualquier momento en el documento. Generalmente se insertar al principio o final del documento, aunque también se pueden situar en cualquier otro lugar. Writer permite, además, insertar índices y tablas de contenido específicas para cada capítulo.

El procedimiento es sencillo. Situados en la página en donde queremos insertar el índice o la tabla de contenido, abrimos el menú Insertar > Sumario e Índice > Sumario, índice o bibliografía (en versiones anteriores estas opciones del menú Insertar pueden denominarse Índices y tablas > Índices ).

El diálogo presentado es el siguiente

Cuadro de diálogo Sumario, índice o bibliografía

Podremos observar a la izquierda del diálogo una miniatura representativa en tiempo real del tipo de índice seleccionado y de las opciones aplicadas. Si no se muestra, activa la casilla Previsualización que aparece a la derecha del botón Ayuda.

A la derecha del diálogo se presenta un selector de pestañas, en el que se encuentran todas las opciones que podremos aplicar a nuestros índices y tablas de contenido. Estas opciones cambiarán según el tipo de índice que deseamos crear, indicado en el desplegable Tipo de la pestaña Índice.

Mostraremos como podemos utilizar las opciones de esta pestaña.

Trabajo con documentos largos en Writer, esquemas y sumarios

10/22

Propiedades de sumarios o tablas de contenido

Describimos aquellas propiedades específicas que podemos definir en el cuadro de diálogo Sumario, índice o bibliografía para insertar un Índice de contenido. En Writer, todos los índices y tablas de contenido tienen en común las siguientes propiedades, que podemos definir antes de insertarlos en el documento

- Desde el cuadro Título establecemos el índice o tabla de contenido que estamos creando.
- Desde el desplegable Tipo seleccionaremos entre los diferentes tipos de índices que podemos crear. El más habitual

es el Sumario (en otras versiones también denominado Índice de contenido o Tabla de contenido), pero también podemos crear índices alfabéticos , de figuras (ilustraciones) y de tablas, entre otros. En función del tipo seleccionado, podremos completar diferentes opciones para obtener el índice o tabla de contenido deseado.

- Activando Protegido contra cambios manuales evitaremos que se cambie el contenido del índice de forma manual.

En cualquier caso, los cambios manuales efectuados se pierden si decidimos actualizarlo.

- Todos los tipos de índice (con la única excepción del tipo Bibliografía) podemos insertarlos como índice para todo el

documento o como índice para cada capítulo del mismo. En el área Crear un índice o un sumario podemos definir uno u otro seleccionando la opción adecuada en el desplegable Para.

- Una característica que sólo se aplica al Sumario es la de definir el número máximo de niveles que lo formarán. Si

sólo queremos incluir en el índice los niveles 1 y 2 (aquellos títulos marcados con el estilo Título 1 o Título 2, o según la jerarquía de nuestros propios estilos) desde Evaluar hasta el nivel seleccionaremos el límite de niveles a incluir.

- En el área Crear a partir de podemos definir de qué estilos se leerá la información para crear el índice.

• Si seleccionamos Esquema se añaden al índice los estilos de Título predefinidos (Título 1- 10), o los que se hayan establecido en la Numeración de capítulos. • Si marcamos Estilos adicionales, pulsando sobre el botón Asignar estilos a su derecha se presentará el diálogo Asignar estilos que permitirá seleccionar un estilo y con los botones que apuntan a la izquierda o a la derecha integrarlos en el índice seleccionando su jerarquía.

Trabajo con documentos largos en Writer, esquemas y sumarios

14/22

Cuadro de diálogo Asignar estilos

- Activando Marcas de índice se incluirán en éste las entradas que que se hayan insertado manualmente desde el

menú Insertar > Sumario e índice > Entrada de índice . Pulsando sobre el botón Aceptar, el índice de contenido será insertado inmediatamente en el documento. Más adelante comprobaremos otras opciones avanzadas para personalizar su diseño.

Actualizar índices

Es muy habitual que después de haber insertado un índice, diferentes modificaciones en el documento añadan nuevos capítulos, o que éstos cambien de página. En esas circunstancias se hace necesario actualizar el índice.

Para ello basta con activar el menú contextual del índice y seleccionar la opción Actualizar índice. Todas las modificaciones realizadas sobre el documento y que afecten al índice serán actualizadas y reflejadas inmediatamente.

Trabajo con documentos largos en Writer, esquemas y sumarios

15/22

Actualizar, editar o eliminar índices desde el menú contextual

Si lo prefieres, también puedes activar esta opción desde el menú Herramientas > Actualizar > Índice actual. El índice sobre el que previamente hiciste clic se actualizará inmediatamente. Si has agregado varios índices a tu documento, puedes actualizarlos todos con una sola orden. La encontrarás en el menú Herramientas > Actualizar > Índices y sumarios , en cuyo caso actualizará todos los índices del documento, o Herramientas > Actualizar > Índice actual .

Editar las propiedades de un índice

Una vez insertado el índice, podemos de nuevo editar sus propiedades y de esta forma modificar su formato o comportamiento. Desde el menú contextual del índice seleccionaremos Editar índice.

Se mostrará nuevamente el cuadro de diálogo Sumario, índice o bibliografía y podremos cambiar los valores que anteriormente definimos.

Eliminar un índice o tabla de contenido

debemos poner el máximo interés en que los mismos sean accesibles para cualquier persona, independientemente de su capacidad visual. La creación de sumarios de contenido del documento hará nuestros documentos más accesibles y permitirá facilitar la navegación para los lectores de pantalla usados por personas con discapacidad visual.

¡RECUERDA! Crea siempre un sumario o índice de contenido para que tus documentos sean accesibles.

Trabajo con documentos largos en Writer, esquemas y sumarios

16/22

Y para poder crear un sumario, es imprescindible el correcto uso de estilos de título. Te recordamos los criterios a seguir en la aplicación de estilos de título. Dada la facilidad de caer en cierta confusión en relación a su uso aclaramos el sentido de algunos de estos estilos

- Título: Es el "padre" de todos los estilos de título. Está basado en el Estilo predeterminado, pero generalmente

con un tipo de letra y espaciado diferente. Si queremos modificar algún atributo para todos los títulos, será más práctico modificar este estilo. Los diferentes estilos de título heredarán los cambios.

- Titular: Sería aplicable para el título general del documento. Aplicable para un encabezamiento o portada del

documento. Por defecto define un tipo de letra especialmente grande.

- Subtítulo: Se define por su propio nombre, sería el subtítulo que acompaña y refuerza el título de algunos escritos.
- Título 1 a Título 10: Son los estilos aplicables a los apartados, capítulos o temas del documento. Con ellos se puede

construir el sumario o índice de contenido. Es importante su correcta estructuración. Por ejemplo no usar un estilo Título 3, si previamente no hay aplicado unos estilos Título 1 y Título 2. Una vez más, insistimos en que la apariencia no es lo importante, sino la estructura. La apariencia la podemos modificar a nuestro gusto modificando la definición de los estilos.

Quizás estos conceptos resulten más claros con un ejemplo

- Títular: Proyecto de migración a un escritorio libre
- Subtítulo: Una guía para afrontar con éxito migraciones de software desde aplicaciones privativas a aplicaciones

libres en entornos corporativos

- Título 1: Objetivos
- Título 1: Definir la estrategia de migración
- Título 2: Formación de usuarios
- Título 2: Pasos para migrar las máquinas
- Título 1: Aplicaciones usuales

• Título 2: Suite ofimática LibreOffice • Título 2: Bases de datos MySQL • Título 2: Tratamiento de imágenes En este ejemplo hemos sangrado los textos de estilo Título 2 para expresar con más claridad la relación jerárquica en los diferentes niveles de título.

Personalización de índices y tablas de contenido

Writer nos permite personalizar el formato de los índices que agregados al documento. Dependiendo del tipo de índice insertado podemos asignar los estilos de párrafo de nuestra preferencia a cada uno de los distintos niveles del índice, o asignar hiperenlaces a las entradas, cambiar su diseño o incluso aplicar un color o una imagen de fondo.

Para poder definir todas estas características haremos uso de las restantes pestañas que se muestran en el diálogo Sumario, índice o bibliografía que hasta ahora no hemos mencionado.

Aplicar estilos de párrafo personalizados a los niveles de índice

Por defecto, en Writer los índices se crean utilizando los estilos de párrafo predeterminados por la plantilla con la que se creó el documento.

Trabajo con documentos largos en Writer, esquemas y sumarios

17/22

Podemos ver estos estilos en la pestaña Estilos del cuadro de diálogo Sumario, índice o bibliografía .

En el caso de sumarios, estos estilos son Sumario n (donde n es del 1 al 10) para cada uno de los niveles del índice y Titulo del sumario para el encabezado del mismo. Otros tipos de índices tienen también sus propios estilos definidos.

Podemos asignar otros estilos en esta pestaña, aunque es más recomendable limitarnos a modificar su apariencia.

Asignación de estilos a los niveles del índice

Para modificar los estilos de sumario o de índice, seguiremos los siguientes pasos

- En la lista Niveles, seleccionamos el nivel al que deseamos aplicar un estilo de párrafo diferente.
- A continuación, seleccionamos de la lista Estilos de párrafo el estilo a aplicar.
- Finalmente haremos clic sobre el botón en forma de flecha apuntando a la izquierda entre ambas listas para asignar

al nivel el estilo de párrafo seleccionado.

- Repetiremos el procedimiento para el resto de niveles cuyo estilo deseemos modificar. Para restaurar al estilo

predeterminado, basta con seleccionar de la lista Niveles el nivel a restaurar y pulsar sobre el botón Predeterminado.

- Si deseamos modificar la definición de un estilo, lo podemos hacer, seleccionando el estilo en la lista de Estilos de

párrafo y pulsando el botón Editar. Se abrirá el diálogo de Estilo de párrafo. Naturalmente, también podríamos personalizar los estilos de párrafo desde el panel lateral de Estilos y formato, o con el menú contextual sobre la entrada de índice y seleccionando Modificar estilo.

Trabajo con documentos largos en Writer, esquemas y sumarios

18/22

Mostrar el índice en dos o más columnas

Desde la pestaña Columnas del diálogo Sumario, índice o bibliografía podemos definir el columnado con el que se presentará el índice editado.

Pestaña Columnas del diálogo Sumario, índice o bibliografía

En la sección Configuración de esta pestaña determinamos el número de columnas con que se presentará el índice. También podemos seleccionarlas rápidamente pulsando sobre las miniaturas con diferentes esquemas predeterminados y en la pequeña vista previa de la derecha previsualizaremos la disposición de las columnas según la configuración actual.

Ejemplo de sumario en dos columnas

En el apartado Anchura y espaciado podemos establecer el espaciado entre columnas, y en caso de desactivar la casilla Anchura automática podremos establecer anchos de columna desiguales para cada columna.

En la sección Línea de separación podemos activar una línea de separación entre columnas, seleccionando un Estilo, Anchura, Altura y Color para la misma.

Trabajo con documentos largos en Writer, esquemas y sumarios

19/22

Establecer un color o una imagen de fondo para el índice en OpenOffice Writer Desde la pestaña Fondo del diálogo Insertar índice o tabla podemos definir un color o una imagen de fondo para el índice editado. Su funcionalidad es parecida a la del Fondo para el estilo de página o el formato de párrafo, pero referido exclusivamente al área cubierta por el índice.

Pestaña Fondo del diálogo Sumario, índice o bibliografía

Trabajo con documentos largos en Writer, esquemas y sumarios

20/22

Asignar hipervínculos y modificar la estructura de las entradas de un índice Una de las características más interesantes de los índices creados en Writer es la posibilidad de que las entradas del índice sean hipervínculos al apartado correspondiente del documento.

Hiperenlace en índice

Esta funcionalidad, así como otros cambios en la estructura de las entradas del índice, la estableceremos desde la pestaña Entradas del diálogo Sumario, índice o bibliografía . De esta forma, apuntando a una entrada del índice, bastará hacer un simple clic mientras pulsamos la tecla lugar exacto donde se encuentra el texto, gráfico, tabla, o apartado referenciado.

Personalizar entradas del índice

Trabajo con documentos largos en Writer, esquemas y sumarios

21/22

Desde la versión 4.2 de Writer está habilitado este efecto de forma predeterminada. En versiones anteriores del programa es posible que se deba establecer manualmente. Para modificar la estructura de la entrada disponemos de varios botones que simbolizan un elemento de la entrada, separados por pequeños cuadros vacíos y unos botones que permiten añadir nuevos elementos. Esta estructura puede ser diferente para cada uno de los niveles del índice.

La interpretación de estos símbolos y su correspondencia con los botones para añadir elementos es la siguiente

- Nº de capítulo (E#) . Número del capítulo correspondiente al encabezado, si está definido en

Herramientas > Numeración de capítulos .

- Texto de entrada (E) . Texto del párrafo de encabezado que aparecerá en el índice.
- Tabulación (T) . Salto de tabulación.
- Nº de página (#) . El número de página del documento donde se ubica el párrafo.
- Hiperenlace (LS) (en versiones anteriores HI). Inicio del hipervínculo
- Hiperenlace (LE) (en versiones anteriores HF). Final del hipervínculo..

Pulsando sobre los símbolos en la estructura se muestran opciones disponibles para ese elemento. Por ejemplo, pulsando sobre el símbolo T se puede cambiar el relleno de puntos de la tabulación por otro tipo de relleno o ninguno. Si deseamos eliminar algún elemento de la estructura, basta con seleccionarlo y pulsar la tecla Supr .

Para añadir elementos a la estructura, hacer clic en los cuadritos vacíos entre los símbolos y pulsar el botón correspondiente al elemento que deseas. La primera vez que se pulsa el botón Hiperenlace se mostrará el símbolo LS, la siguiente vez que se pulse aparecerá el símbolo LE; todos los elementos comprendidos entre uno y otro serán los enlaces donde se podrá hacer clic con la tecla CONTROL pulsada para navegar al apartado correspondiente.

Ubicando los símbolos HI y HF en los lugares apropiados podemos hacer que el enlace sea toda la línea, sólo el texto o sólo el número de página. La estructura definida se aplicará exclusivamente al Nivel seleccionado en la lista. Haciendo clic sobre el botón Todo a la derecha de Estructura se aplicará la nueva definición a todos los niveles del índice.

Trabajo con documentos largos en Writer, esquemas y sumarios

22/22

Cuando modifiques los estilos con que se muestra el índice de contenido, recuerda que debes seguir los criterios recomendados para mantener los documentos lo más accesibles posible

- Los colores de texto y fondo deben estar suficientemente contrastados.
- El tamaño mínimo recomendable para la tipografía debe ser de 12 puntos. Nunca usar tipografías de tamaño

inferior a 10 puntos.

- Uso de tipografías sans serif (sin remate) habituales. Arial o Verdana son muy buenas elecciones.
- Evitar el uso de variantes thin, light o narrow de las tipografías (variantes más estrechas de los tipos de letra)
- Precaución con el uso de las negritas, cursivas o subrayados. Evitar el uso de efectos de contorno o intermitencias.
- Evitar el uso de características incompatibles con otros formatos de documento (suprarayados, por ejemplo)
- El interlineado simple no facilita la lectura; casi siempre será más apropiado un interlineado proporcional del 120%

como mínimo.

- Establece un espaciado anterior y posterior al párrafo.
- Evitar el uso de características incompatibles con otros formatos de documento (rellenos degradados o

de imagen, por ejemplo)

Trabajo con documentos largos en Writer, esquemas y sumarios

23/22

PRÁCTICA 1

Para la realización de este ejercicio necesitarás descargar los documentos mitos.odt y hermes.odt. Sigue los siguientes pasos

- Abre el archivo mitos.odt y guárdalo con el nombre mitos-indice.odt.
- Aplica estilo Título 1 a los títulos de las divinidades: ADONIS, AFRODITA y AGÓN.

Pista: con una selección múltiple (con Ctrl ) lo podrás hacer en un sólo paso.

- Inserta un salto de página al principio del documento.

Pista: método rápido con Ctrl + Intro .

- En el principio del documento inserta un sumario con todas las opciones por defecto.

### 5. Guarda los cambios. En este momento la apariencia del índice debería ser como

se muestra en la imagen.

Apariencia del documento de práctica

### 6. Añade al final del documento dos saltos de párrafo

### 7. Agrega al final del documento el contenido del archivo hermes.odt

Pista: en vez de copiar y pegar el texto, puede ser mucho más cómodo y rápido hacerlo desde Insertar > Documento (en versiones anteriores puede ser Insertar > Archivo ).

- Asigna estilo de Título 1 al título HERMES del texto recién insertado.

### 9. Actualiza el índice del documento. Tras la actualización, el índice tendrá la si

guiente apariencia

Apariencia del índice tras la actualización

### 10. Modifica el estilo Título 1 para que se inserte automáticamente un salto de página an

tes de cada título. Pista: pestaña Flujo de texto > Salto > Insertar

- Elimina la página vacía que aparece después de la página del índice.

### 12. Añade un encabezado de página que muestre a la derecha el texto Página X de Y (siendo

X el número de la página actual e Y el total de páginas del documento).

Trabajo con documentos largos en Writer, esquemas y sumarios

24/22

Actualiza el índice nuevamente. La apariencia del índice y encabezado del documento debería ser como en la imagen.

Apariencia del índice renumerado

### 14. Modifica el título del índice para que figure Índice de fichas mitológicas en vez del

título automático (Sumario o Índice de contenido según la versión del programa).

- Modifica el índice del documento aplicándole un fondo de color Cian.

### 16. Modifica el índice del documento para que se muestre en dos columnas, con un espa

ciado entre ellas de 0,80 cm. y una línea de separación continua, de 1,50 pt, color Rojo 5,

### 17. Modifica el estilo de párrafo Sumario 1 (o Índice 1, según la versión del programa)

para que tenga un espaciado bajo el párrafo de 0,50 cm.

### 18. Modifica el estilo de párrafo Título del sumario (o Encabezado del Índice , según

la versión del programa) para que se muestre con alineación centrada.

### 19. Modifica la estructura del índice para que el relleno de puntos sea sustituido por un

relleno de guiones bajos ( _ ) y antes del número de página se muestre el término Pág. La apariencia final del índice debería ser como en la imagen.

Apariencia del índice tras personalizarlo

### 20. Modifica el esquema de la numeración de capítulos para que el nivel 1 se muestre

con las siguientes características: Número: 1, 2, 3... Separador después: un cierre de paréntesis seguido de un espacio.

- Actualiza el índice. Debería quedar con un aspecto como en la imagen.

Trabajo con documentos largos en Writer, esquemas y sumarios

25/22

Apariencia final del índice

Guarda los cambios en mitos-indice.odt y cierra el documento.

PRÁCTICA 2

Para la realización de esta práctica, descarga el archivo proyecto-escritorio-libre.odt

Realiza los pasos siguientes

- Abre el artchivo proyecto-escritorio-libre.odt. Se trata de un informe debidamente forma

teado con estilos de encabezado para identificar sus apartados.

- Guárdalo con el nombre proyecto-escritorio-libre-indice-y-portada.odt.

### 3. Establece el esquema de numeración de capítulos con las siguientes características

Nivel 1: Numeración: 1, 2, 3... Separador después: un punto seguido de un espacio. Nivel 2: Numeración: a, b, c... Mostrar subniveles: 2 Separador después: un paréntesis de cierre seguido de un espacio

- Inserta una nueva página de título con estilo de página Primera página con las siguientes

características: Márgenes de página: 3,00 cm a cada uno de los cuatro lados. Fondo de página: color Amarillo Bordes de página: cuatro lados, color Naranja, espaciado al contenido 2 cm, sincronizado, sombra abajo a la derecha

### 5. Escribe en la primera página el texto Proyecto de Creación de un Escritorio Libre

para Clientes Corporativos. y aplica al texto el estilo de párrafo Titular.

Trabajo con documentos largos en Writer, esquemas y sumarios

26/22

### 6. Modifica el estilo de párrafo Títular con las siguientes propieda

des. Efecto de fuente: Versalitas. Alineación: derecha. Color: Rojo 5

### 7. Al principio de la segunda página inserta un sumario o índice de contenido con

los siguientes atributos: Dos columnas con 0,80 cm de espaciado entre ellas y línea de separación continua de 1,5 pt y color Rojo 5.

### 8. Modifica los siguientes estilos de párrafo de índices y observa los cambios en el

mismo: Estilo Sumario 1 (o Índice 1, según versión del programa) en negrita. Estilo Sumario 2 (o Índice 2, según versión del programa) en cursiva.

Guarda los cambios en proyecto-escritorio-libre-indice-y-portada.odt. En la previsualización de impresión, las dos primeras páginas del documento deberían mostrar una apariencia como la siguiente

Apariencia final del ejercicio

### 📄 hermes.odt

HERMES

Dios olímpico mensajero, de las fronteras y los viajeros que las cruzan, de los pastores, de los oradores, el ingenio y del comercio en general, de la astucia de los ladrones y los mentirosos. El himno homérico a Hermes lo invoca como el «de multiforme ingenio (polytropos), de astutos pensamientos, ladrón, cuatrero de bueyes, jefe de los sueños, espía nocturno, guardián de las puertas, que muy pronto habría de hacer alarde de gloriosas hazañas ante los inmortales dioses». Hermes también es protagonista de muchos mitos, como, por ejemplo, el de Filemón y Baucis.

### 📄 proyecto-escritorio-libre.odt

Objetivo

Crear una estación de trabajo enteramente configurada con Software libre y ponerle nombre y apellidos a las aplicaciones necesarias.

Definir la estrategia de migración

En la migración, hay que considerar el perfil de los usuarios que la vivirán para definir una estrategia en cuanto a método y plazos. Como recomendación general, y aprovechando la gran disponibilidad de software libre multiplataforma

Migrar las aplicaciones (dentro de Windows)

Navegación, correo electrónico

Suite ofimática y otras

Migrar el sistema operativo

La explicación es bien razonable: una migración del sistema completa puede desconcertar bastante a los usuarios y darles la impresión de que todo es más complicado de lo que resulta realmente. Si cuando se les cambia el sistema operativo, ya están acostumbrados al uso de las aplicaciones con que se encontarán, el cambio se vive de forma natural y suave.

Formación de usuarios

En cualquier caso, siempre hay que considerar la formación de los usuarios para evitar efectos de rebote que pueden sabotear el proceso.

En nuestra experiencia con migraciones a OpenOffice.org nos hemos encontrado con usuarios a los que se les había instalado el programa, sin darles la formación imprescindible para realizar aquellas tareas que no se realizan exactamente igual que en Microsoft Office. Y su percepción era que “OpenOffice.org no sirve”.

Tras una adecuada formación, esta percepción desaparece, pero mucho mejor si se imparte previa o simultáneamente a la migración, pues evitaremos desajustes psicológicos. ;-)

Pasos para migrar las máquinas

Tras la oportuna planificación

Copiar todos los documentos de trabajo “Mis documentos” a una ubicación de red

Copiar todos los datos de programa (bookmarks, correos, etc...) a una ubicación de red

Instalar Linux en la máquina y las aplicaciones que sean necesarias

Restaurar los datos de programa al nuevo sistema

Según se haya planificado, los documentos de trabajo pueden quedar en la red (recomendado) o restaurarse al nuevo sistema.

Aplicaciones

En la siguiente enumeración de apliaciones, se han privilegiado las que disponen de equivalente en Windows para poder aplicar la estrategia sugerida anteriormente (primero migrar aplicaciones y luego sistema operativo).

Suite Ofimática: OpenOffice.org

Indudablemente, OpenOffice.org será el programa adecuado para dar soporte a los usuarios habituales de Microsoft Office.

Entre sus ventajas

Compatibilidad de formatos con los de Word, Excel y PowerPoint

Un excelente soporte técnico de la comunidad

Generación directa de documentos PDF

Inconvenientes principales

Incompatibilidad con las macros de Word y Excel

El componente Base (gestor de bases de datos) no es comparable a Microsoft Access

Necesidad de formación para que los usuarios conozcan las técnicas de uso diferentes de Word y Excel

Referencias:http://es.openoffice.org

Bases de datos: MySQL + Kexi

Si en la organización se utilizan bases de datos de Access, es fácil usar sus datos (e incluso migrarlos) desde OpenOffice, con el cual podemos crear formularios e informes y definir consultas de selección. Pero no hay tantas facilidades en cuanto a consultas de acción, y la funcionalidad de formularios e informes es limitada si no se hace uso de programación.

Una alternativa para resolver esta limitación puede estar en el uso de una base de datos MySQL, administrada con Kexi, una aplicación informática integrada para el manejo de datos que permite diseñar e implementar bases de datos, insertar y procesar datos y hacer consultas sobre los mismos. También se puede utilizar Kexi con su propia base de datos embebida SQLite.

Referencias:http://kexi-project.org/http://www.mysql.com/

Tratamiento de imágenes: El Gimp

El programa Gimp resolverá más que satisfactoriamente cualquier necesidad que se presente en cuanto a tratamiento de imágenes de bits, disponiendo de funcionalidades que lo hacen comparable al popular Photoshop.

Gimp incluye permite la automatización de muchos procesos mediante macros o secuencias de comandos, para lo cual incluye un lenguaje específico.

Pero si necesitamos efectuar un tratamiento masivo de imágenes y no deseamos aprender el Scheme (el lenguaje de programación que incorpora Photoshop), el kit de herramientas ImageMagick resolverá perfectamente nuestra necesidad.

Referencias:http://www.gimp.org.es/

Compresión/descompresión de archivos

La compresión y descompresión de archivos forma parte natural de cualquier sistema GNU/Linux, que de serie incorpora gzip/gunzip para ejecutar en consola. Todos los sistemas de escritorio de Ubuntu GNU/Linux incorporan su propia interfaz gráfica para comprimir y descomprimir archivos, admitiendo diversos formatos.

Navegadores: Firefox

Para un proceso de migración, Firefox, de la familia Mozilla, heredero del mítico Netscape, es el navegador por excelencia, pues se puede utilizar tanto en Windows como en GNU/Linux.

Una vez migrados a Linux, los usuarios que usen un escritorio KDE quizás se enamoren de Konqueror, un navegador y gestor de archivos con múltiples funcionalidades.

Referencias:http://www.mozilla-europe.org/es/firefox/

Clientes de correo: Thunderbird

Al igual que Firefox, el cliente de correo Thunderbird, de la familia Mozilla, permitirá una migración muy cómoda de Windows a GNU/Linux.

Los usuarios avanzados de Outlook, quizás añoren la integración entre correo, calendario y agenda que les proporciona el programa de Microsoft. Para ellos puede estar especialmente indicado Evolution, que incluso dispone de un conector para servidores Exchange.

Referenciashttp://www.mozilla-europe.org/es/products/thunderbird/http://www.gnome.org/projects/evolution/http://www.dipconsultants.com/evolution/

Gestión de proyectos: Planner

Planner es un gestor de proyectos que soporta gráficos Gantt, asignación de recursos e integración con otras aplicaciones GNOME. Sería un equivalente (limitado) a MS-Project.

Si las necesidades de gestión de proyectos, responden a un entorno de trabajo colaborativo, donde diversas personas colaboran en el control del proyecto, también podríamos utilizar algún entorno de groupware accesible vía web que incorpore gestión de proyectos.

Algunas referencias bastante amplias: http://www.navegapolis.net/content/view/56/49/http://blogdejuls.blogspot.com//software-libre-para-gestion-de.htmlhttp://www.cdlibre.org/consultar/catalogo/Ofimatica_Gestion-de-proyectos.html

Agendas y calendarios

Siguiendo con la familia Mozilla, está disponible Sunbird, que permite establecer citas y tareas, pero no se integra con el servicio de correo electrónico.

Actualización: la extensión Lightning para Thunderbird soluciona esta integración:http://www.mozilla.org/projects/calendar/lightning/

Una solución interesante es Evolution, que como cometamos en el apartado de clientes de correo, además de estar muy integrado, dispone de conectividad con servidores Exchange y sincroniza con dispositivos Palm y con móviles con sistema Symbian (verificar).

Existe una versión de Evolution para Windows.

Referencias:http://www.mozilla.org/projects/calendar/sunbird/http://www.gnome.org/projects/evolution/http://www.dipconsultants.com/evolution/

Mensajería instantánea: Pidgin

Pidgin (antes denominado Gaim) es un cliente de mensajería electrónica multiprotocolo, mediante el cual se puede conectar con redes Jabber, MSN, Yahoo, IRC y otras.

Si la mensajería instantánea es un factor estratégico para la organización, incluso se puede instalar un servidor Jabber en un entorno de intranet, que permitirá la comunicación permanente entre los miembros de la organización.

Referencias:http://www.pidgin.im/

Antivirus y seguridad

No hay ninguna necesidad de usar antivirus en GNU/Linux. Para que un virus dañase al sistema GNU/Linux haría falta

Recibir el virus (por disquete, correo electrónico, etc)

Por sí solo el virus no sería autoejecutable, así que le deberíamos dar permisos de ejecución a propósito.

En este caso, y de tener efectos destructivos, dada la naturaleza de los permisos en Linux, tan sólo podría dañar el área del usuario, siendo imposible dañar al sistema.

Entonces, ¿por qué existen antivirus para Linux? Pues porque muchos sistemas GNU/Linux ofrecen servicios a clientes Windows. Por ejemplo, servidores de correo o servidores de archivos; en ese caso puede ser conveniente un antivirus para que no permita que se infiltren virus que pueden ir a parar a los usuarios con Windows.

Si se desea cifrar discos o carpetas, TrueCrypt, funciona tanto en Windows como en GNU/Linux.

Referèncias:http://www.kriptopolis.org/antivirus-para-linuxhttp://www.truecrypt.org/

Sistema operativo

Existen diferentes sistemas operativos libres (GNU/Linux, OpenSolaris, FreeBSD, OpenBSD, etc). Todos ellos derivan de UNIX System V y cumplen el estándar POSIX, así que no hay grandes diferencias entre ellos.

Dentro de los sistemas GNU/Linux existen diferentes distribuciones cuyas diferencias pueden consistir en

cantidad de paquetes (programas) suministrados en la distribución

sistema de distribución de paquetes (RPM, DEB u otros)

jerarquía del sistema de archivos (como mucho, pequeñas variaciones)

mayor o menor facilidad de uso para usuarios no informáticos

localizaciones (idiomas) disponibles

disponibilidad de programas de administración adicionales u orientados a necesidades empresariales específicas (no siempre libres)

El criterio para escoger un sistema, podría ser facilidad de uso, la disponibilidad en determinado idioma, etc.

A estos efectos, seria tan válido Ubuntu como SuSE, Fedora (RedHat), Mandriva o la propia Debian (en la que se basa Ubuntu)

Nuestra recomendación se decantaría por Ubuntu especialmente por

Facilidad de instalación, configuración, actualización y uso (como casi todas las distribuciones citadas).

Excelente localización en español y catalán (la última vez que probamos SuSE, adolecía de limitaciones en este sentido, por ejemplo, no disponía de la versión en catalán de OpenOffice.org).

Disponibilidad de controladores propietarios privativos que pueden ser precisos para algunos dispositivos de hardware.

Inmensa cantidad de programas instalables directamente desde sus repositorios (posiblemente todos los programas que necesitemos)

Disponibilidad de versiones específicamente orientadas a tareas de servidor y para instalaciones personalizadas.

Factor subjetivo: nos ha hecho sentido muy cómodos desde que la probamos.

Entorno de escritorio

A diferencia de Windows, en los sistemas GNU/Linux existe la posibilidad de escoger distintos entornos de escritorio; entre los más populares encontramos

GNOME (basado en la biblioteca de controles gráficos GTK, diseñados originalmente para el programa Gimp)

KDE (basado en la biblioteca de controles gráficos QT, que en un principio no eran del todo libres)

XFCE (basado en GTK pero especialmente ligero, adaptado para máquinas con escasos recursos.

Cada uno de ellos dispone de determinados programas (navegadores, editores, consolas, etc.) orientados a una integración perfecta en el propio sistema de escritorios.

Pero esto no es ningún obstáculo, pues hoy día se integran con facilidad unos y otros. Por ejemplo, en nuestro escritorio GNOME, podemos usar a perfección el grabador de CD/DVD K3B, diseñado inicialmente para KDE. El único coste es en términos de recursos, pues el uso en un escritorio de un programa diseñado otro, exige la carga en memoria de ambos conjuntos de bibliotecas.

Si nuestro parque de ordenadores tiene máquinas con escasos recursos de memoria o procesador, para ellas resultará ideal el uso de XFCE, por su poco peso y optimizado uso de recursos.

Ubuntu, por defecto se instala con GNOME, pero se puede instalar cualquier otro escritorio desde sus repositorios de programas.

En términos generales, para usuarios provinientes de Windows, se puede recomendar KDE, pues su apariencia les resultará más familiar.

No obstante, se pueden dejar instalados ambos escritorios, y el usuario puede escoger inciar sesión con uno u otro.

Instalación desatendida

Si nuestro parque de ordenadores es muy extenso, uno de los problemas con que podemos encontrarnos es que la instalación puede consumir mucho tiempo de técnico de sistemas, al tener que ir máquina por máquina para perfilar detalles de la instalación.

Mediante el uso de la Server Edition de Ubuntu, se pueden disponer de diferentes beneficios, entre los cuales se cuenta la instalación desatendida. Al final de este apartado se relacionan diferentes recursos de ayuda sobre esta cuestión.

Entorno de red

En un entorno corporativo, dispondremos de uno o más servidores que proporcionarán diferentes servicios. GNU/Linux nos proporcionará solución a cualquier necesidad

Autenticación centralizada de usuarios

NIS permite replicar los datos de acceso de usuarios y grupos a lo largo de la red, que también proveerá la información de grupos de usuarios o nombres de nodo.

LDAP es otra alternativa más avanzada para resolver esta misma cuestión, pues además puede contener datos de contacto del usuario, ubicación de diversos recursos de la red, permisos o certificados; una de las implementaciones más populares de LDAP es el conocido Active Directory de Microsoft.

Compartición de archivos

NFS es el sistema de red más popular para compartir archivos en sistemas GNU/Linux y permite montar directorios ubicados en dispositivos remotos en el propio sistema de archivos. Los puestos de trabajo Windows pueden acceder a sistemas NFS mediante el uso de Windows Services for UNIX.

SAMBA es una implementación libre del protocolo de archivos compartidos de Microsoft Windows. Nos permitirá acceder desde equipos GNU/Linux a archivos compartidos en sistemas Windows, así como acceder desde equipos Windows a servidores de archivos GNU/Linux.

En función del número de puestos de trabajo a migrar y de la estructura actual de recursos compartidos, puede ser conveniente decantarse por unos u otros sistemas. Si no hay unos requerimientos específicos que aconsejen otra cosa, y considerando que estaremos ante un entorno de trabajo mixto Windows / GNU/Linux recomendaríamos LDAP y SAMBA.

Referencias y enlaces

Guía oficial de la Server Edition:https://help.ubuntu.com/8.04/serverguide/C/index.html

Recomendaciones específicas para migración de Windows a Ubuntu Linux:https://help.ubuntu.com/community/SwitchingToUbuntu/FromWindowshttp://doc.ubuntu.com/ubuntu/switching/

Recomendaciones específicas para configuración en un entorno corporativo:https://help.ubuntu.com/community/CorporateUbuntu

Notas para una instalación vía red local:https://help.ubuntu.com/community/Installation/Netboot

Múltiples instalaciones por red local:http://www.debuntu.org/how-to-unattended-ubuntu-network-installhttp://www.informatik.uni-koeln.de/fai/

Una web que ayuda a crear un perfil de configuración para instalaciones automatizadas:http://www.instalinux.com/

Soluciones para programas only-Windows

Hay programas que deben usarse sí o sí, y que tan sólo están disponibles para Windows.

Posibles soluciones

Wine

Wine es un emulador de las bibliotecas de Windows, que permite que los programas corran tal cual en un sistema GNU/Linux sin tener Windows instalado. Algunos programas funcionan a la primera, pero en muchos casos necesitan un poco de tuneo o copiar bibliotecas DLL. Existe una versión derivada comercial, CrossOver Office, con varios parches añadidos, y herramientas de configuración más fáciles de usar, especialmente adaptada para correr Microsoft Office.

Referencias:http://www.winehq.org/http://www.codeweavers.com/

PC virtual

VirtualBox o VMWare son emuladores de PC virtual, que permiten instalar en ellos un sistema operativo completo. Son una solución perfecta para correr programas para Windows, pero exigen disponer de una licencia del sistema operativo invitado.

Referencias:http://www.virtualbox.org/http://www.vmware.com/

Remote Desktop (Terminal Server)

Para optimizar el coste de licencias de Windows necesarias, también puede resultar interesante instalar un servidor Windows con los programas imprescindibles y acceder a él vía Remote Desktop o VNC.

Referencias:http://www.tightvnc.com/http://www.realvnc.com/

### 📄 mitos.odt

ADONIS

Adolescente de maravillosa belleza que fue amado por Afrodita. Muerto por un jabalí, la diosa convirtió su sangre en flores. Al ver la desolación de ella, Júpiter concedió a Adonis el privilegio de permanecer cada año seis meses sobre la Tierra. El mito es de origen semita y alude a los ciclos de la muerte y renacimiento de las fuerzas de la naturaleza.

AFRODITA

Diosa resplandeciente de la belleza, encarnación del amor carnal y la más popular de todas las divinidades de la mitología griega. Según Homero, fue hija de Zeus y de Dione mientras que para Hesíodo la diosa nació en el mar, cuando Cronos mutiló a su padre Urano.

Los despojos de la virilidad de este último flotaron largo tiempo sobre las aguas produciendo una espuma de la cual nació una virgen: Afrodita Anadiomena. De la espuma, pues, brotó una doncella que llegó primero a la isla Vitera y luego a Chipre rodeada de olas; allí saltó a tierra la veneranda y bella diosa y bajo sus menudos pies florecía la mullida hierba.

AGÓN

Personificación simbólica de las luchas atléticas y de los concursos de todo género. Era representado de diversas formas, pero una de las más conocidas se refería a un joven dios atleta desnudo, con un gallo en las manos.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Planificació de Foliació i Seccions en Documents Editorials:**
   - Un projecte fi de cicle de 80 pàgines requereix l'estructura formal següent:
     - Secció 1: Portada i contraportada (2 pàgines sense capçalera, sense peu ni número visible).
     - Secció 2: Aprovacions legals, pròleg i Taula de Continguts (4 pàgines foliades en nombres romans en minúscula: `i, ii, iii, iv`).
     - Secció 3: Cos de l'estudi tècnic (comença físicament a la pàgina 7 del document imprès, però el peu de pàgina ha de reiniciar-se i mostrar "Pàgina 1 de 68").
     - Secció 4: Plànol de xarxa i gran taula de costos (2 pàgines en format horitzontal/apaïsat DIN A4 continuant la numeració: 69 i 70).
   - **Preguntes de disseny:**
     - Quants estils de pàgina diferents cal crear o configurar a LibreOffice Writer?
     - Quants salts manuals de pàgina amb canvi d'estil i desvinculació de capçalera cal inserir?
     - A quina secció exacta cal activar l'opció *"Reinicia la numeració de pàgina a 1"*?

2. **Dimensionament d'un Document Mestre (`.odm`):**
   - Un servei tècnic elabora el manual de seguretat informàtica corporatiu integrat per 6 capítols redactats per diferents autors:
     - Capítol 1: $35\text{ pàgines}$.
     - Capítol 2: $48\text{ pàgines}$.
     - Capítol 3: $62\text{ pàgines}$.
     - Capítol 4: $55\text{ pàgines}$.
     - Capítol 5: $40\text{ pàgines}$.
     - Capítol 6: $30\text{ pàgines}$.
   - **Preguntes d'anàlisi:**
     - Si es treballa amb un únic fitxer `.odt` gegant de 270 pàgines amb desenes d'imatges incrustades, quins problemes de corrupció de fitxer, lentitud de desat i bloquejos de programari es poden produir?
     - Com resol el format **Document Mestre (`.odm`)** la col·laboració en equip permetent que cada tècnic edite el seu subdocument `.odt` de forma aïllada mentre el mestre genera la taula de continguts global unificada?

3. **Càlcul de Resolució i Coordenades d'Índex Alfabètic de Conceptes:**
   - En maquetar un glossari tècnic alfabètic al final d'un llibre de text:
   - S'etiqueten 120 termes tècnics com a entrades d'índex analític.
   - **Preguntes de format:**
     - Quina diferència funcional hi ha entre una entrada d'índex principal i una entrada secundària o subentrada?
     - Si el terme "Encaminador" apareix referenciat a les pàgines 12, 13, 14 i 45, com ha de mostrar la concordança l'índex analític (ex: `Encaminador, 12-14, 45`)?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Configuració d'Estils de Títol i Generació de la Taula de Continguts (TOC)
1. Obre LibreOffice Writer i redacta un document d'assaig amb 3 capítols i 2 subapartats per capítol.
2. Aplica l'estil **Títol 1** als títols de capítol i l'estil **Títol 2** als subapartats.
3. Vés a l'inici del document (pàgina 2), situa el cursor i selecciona `Insereix > Índex de contingut i taules > Índex de contingut, índex o bibliografia...`.
4. A la pestanya **Entrades**, comprova que el nivell d'esquema inclou els elements hiperenllaçats (`EH` Inici d'hiperenllaç, `T` Text d'entrada, `HT` Fi d'hiperenllaç, `#` Número de pàgina).
5. Accepta la creació de l'índex. Fes `Ctrl + Clic` sobre un títol de l'índex i comprova que el cursor salta directament a la pàgina del capítol.

#### Repte 2: Disseny de Seccions amb Portada, Paginació Romana i Reinici Aràbic
1. A la primera pàgina, dissenya una portada formal i aplica-li l'estil de pàgina **Primera Pàgina**.
2. Al final de la portada, insereix un salt manual: `Insereix > Més salts > Salt manual > Salt de pàgina`, triant l'estil de pàgina **Índex**.
3. A la secció d'índex, activa el peu de pàgina, insereix el camp de número de pàgina (`Insereix > Camp > Número de pàgina`) i canvia el format de número a romans en minúscula (`i, ii, iii`).
4. Al final de la secció d'índex, insereix un altre salt manual cap a l'estil de pàgina **Predeterminat**, marcant la casella **Canvia el número de pàgina** i establint el valor a `1`.
5. Comprova que la portada no té número, l'índex té nombres romans i el cos comença de nou a la pàgina 1.

#### Repte 3: Inserció d'Entrades per a Índex Alfabètic de Termes
1. Al cos del document, selecciona paraules clau com `Ethernet`, `TCP/IP`, `Firewall`, `Memòria RAM`.
2. Per a cada paraula seleccionada, prem `Insereix > Índex de contingut i taules > Entrada d'índex...` (o drecera de teclat) i assigna-la a l'índex de tipus **Índex alfabètic**.
3. Al final del document, insereix un nou salt de pàgina i afegeix l'índex alfabètic triant el tipus **Índex alfabètic** amb 2 columnes.
4. Comprova com els termes apareixen ordenats de la A a la Z amb els seus números de pàgina associats.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Estils de Títol i Taula de Continguts (TOC)** | Estructura el document amb estils Títol 1/2/3, genera la TOC hiperenllaçada automàticament i l'actualitza amb 1 clic. | Genera la TOC automàtica però no sap activar els hipervincles de navegació ràpida. | Escriu l'índex teclejant el text i els números de pàgina manualment sense utilitzar estils de títol. |
| **Gestió de Seccions i Estils de Pàgina** | Configura seccions amb portada neta, índex en romans, cos amb reinici a pàgina 1 i pàgines apaïsades sense barrejar capçaleres. | Aconsegueix numerar pàgines però no sap reiniciar la foliació a la pàgina 1 ni ocultar el número a la portada. | No sap utilitzar estils de pàgina i totes les pàgines del document tenen obligatòriament el mateix format. |
| **Índexs Alfabètics i Documents Mestres** | Etiqueta termes per a índexs analítics de dues columnes i comprèn la gestió modular de documents mestres `.odm`. | Afegeix entrades a l'índex alfabètic però no sap com filtrar-les o modificar-les posteriorment. | Desconeix la funció d'un índex alfabètic o d'una taula de figures en manuals extensos. |
