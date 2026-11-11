---
title: "Cuaderno Completo de Actividades — UD7 — Bases de Datos"
layout: "default"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "act709.html"
prev_label: "⬅️ ⚡ Activitat 709: Excepcions - CIRC"
next_url: "../ut08/index.html"
next_label: "Següent Unitat (UD8) ➡️"
module: "BBDD"
---

# Cuaderno Práctico de Actividades — UD7: Programació de Bases de Datos — Procediments, Funcions, Triggers i Cursors

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En esta sección tienes acceso directo a todas las actividades prácticas, fichas de trabajo y retos evaluables de esta unidad didáctica. Puedes acceder a cada actividad individualmente o consultar la recopilación completa a continuación:

## 🗂️ Índice de Actividades de la Unidad

- **[⚡ Activitat 701: Procediments - CIRC](act701.html)**
- **[⚡ Activitat 702: Procediments amb paràmetres - CIRC](act702.html)**
- **[⚡ Activitat 703: Sentències Prepared - CIRC](act703.html)**
- **[⚡ Activitat 704: Fluxos de Control - CIRC](act704.html)**
- **[⚡ Activitat 705: Esdeveniments](act705.html)**
- **[⚡ Activitat 706: Triggers - CIRC](act706.html)**
- **[⚡ Activitat 707: Cursors - CIRC](act707.html)**
- **[⚡ Activitat 708: Funcions d'usuari - CIRC](act708.html)**
- **[⚡ Activitat 709: Excepcions - CIRC](act709.html)**

---

## Actividad 701: Procediments - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act701.html)*

# **Actividad 701**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `701_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **procediments emmagatzemats** (`CREATE PROCEDURE`).

> - L'ús correcte de **variables locals** (`DECLARE`).

> - La correcta utilització de les **funcions** proporcionades pel sistema gestor (`DATE_SUB`, `TIMESTAMPDIFF`, ...).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. a) S'han identificat les diverses maneres d'automatitzar tasques.

>   - CA5. b) S'han reconegut els mètodes d'ejecució de guions.

>   - CA5. c) S'han identificat les eines disponibles per a editar guions.

>   - CA5. d) S'han definit i utilitzat guions per a automatitzar tasques.

>   - CA5. e) Es ha fet ús de les funcions proporcionades pel sistema gestor.

>   - CA5. f) S'han definit procediments i funcions d'usuari.

## **Procediments - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

### **1. Procediments sense paràmetres**

**Exercici 1.** Crea un procediment de nom `artistes_getList()` que retorne el nom i cognoms dels artistes separats per coma amb el format: `apellidos,nombre` ordenats de manera descendent.

**Exercici 2.** Crea un procediment de nom `artistes_getListAnimales()` que retorne els noms dels artistes juntament amb el seu nif així com el nom i pes dels animals que estan atendits pels artistes, ordenats per nif de l'artista i nom de l'animal.

**Exercici 3.** Crea un procediment de nom `atraccions_getListConAntiguedad5()` que retorne les dades de les atraccions que hagen començat fa 5 anys respecte a la data actual. Hauràs de fer ús d'alguna de les funcions de temps. Intenta averiguar com.

> **📌 Pista**
> 

> Funcions de temps: `DATE_SUB`, `TIMESTAMPDIFF`, `CURDATE`, `INTERVAL`.

### **2. Variables locals**

**Exercici 4.** Crea un procediment de nom `animals_Leo_getPista()` que mostre les dades de la pista on treballa l'animal de nom `'Leo'`. Fer-ho emprant una **variable local** que guarde el nom de la pista. Després consultar les dades de la pista utilitzant aquesta variable local.

**Exercici 5.** Crea un procediment de nom `atraccions_getUltima()` que obtenga les dades de la última atracció celebrada (taula `ATRACCION_DIA`), emprant variables locals. Per a això guarda en una variable el nom de la última atracció celebrada i cerca les dades d'aquesta atracció. Tingues en compte limitar amb `LIMIT` el número de files que retorne una consulta si no saps amb certeza que vaja a retornar una única fila i guardarás les dades en una variable.

**Exercici 6.** Crea un procediment de nom `atraccions_getArtistaUltima()` que obtenga les dades de l'atracció i de l'artista que treballa en aquesta atracció, de la qual data d'inici ha començat més tarde. Empra **dos variables**: una per a guardar el *nif de l'artista* i una altra per a guardar el *nom de l'atracció*.

---

## Actividad 702: Procediments amb paràmetres - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act702.html)*

# **Actividad 702**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `702_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **procediments emmagatzemats amb paràmetres** (`CREATE PROCEDURE`).

> - L'ús correcte dels **paràmetres d'entrada `IN`**.

> - La correcta utilització de les **funcions** proporcionades pel sistema gestor (`DATE_SUB`, `TIMESTAMPDIFF`, `DATE_ADD`, `CURDATE`, `ROW_COUNT`, `CONCAT`, ...).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. a) S'han identificat les diverses maneres d'automatitzar tasques.

>   - CA5. b) S'han reconegut els mètodes d'ejecució de guions.

>   - CA5. c) S'han identificat les eines disponibles per a editar guions.

>   - CA5. d) S'han definit i utilitzat guions per a automatitzar tasques.

>   - CA5. e) Es ha fet ús de les funcions proporcionades pel sistema gestor.

>   - CA5. f) S'han definit procediments i funcions d'usuari.

## **Procediments amb paràmetres - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

**Exercici 1.** Crea un procediment de nom `artistes_getAnimalesPorNif` que retorne als animals que cuida un artista. Portarà com paràmetre el **nif d'artista**.

**Exercici 2.** Crea un procediment de nom `artistes_getAnimalesPorNombreApel` que retorne als animals que cuida un artista. Portarà com paràmetre el **nom i cognoms** de l'artista. Suposem que el nom i cognoms conforman una clau alternativa.

**Exercici 3.** Crea un procediment de nom `atraccions_getListConAntiguedad` que retorne les dades de les atraccions que hagen començat fa **un número d'anys** respecte a la data actual. Hauràs de fer ús d'alguna de les funcions de temps. Intenta averiguar com.

**Exercici 4.** Crea un procediment de nom `artistes_getListMasAnimalesCuida` que retorne les dades del/els artista/s que cuidan a **més animals dels indicats** (paràmetre que es li envia).

> **📌 Pista**
> 

> Com la consulta pot retornar més d'un artista no podrem fer ús de `INTO...`.

**Exercici 5.** Crea un procediment de nom `atraccions_getListPorFecha` que retorne les dades de les atraccions que han començat **a partir de la data indicada**.

> **📌 Pista**
> 

> Recordar que les dates són tratades com cadenes, i tindre en compte el format.

Afegeix una **nova atracció** amb la data d'inici actual. Realitza el llamament al procediment emprant la **data actual menys 3 dies** (fes ús de la funció `DATE_SUB` i `CURDATE`).

**Exercici 6.** Crea un procediment de nom `pistes_add` que **afegisca una nova pista**.

> **📌 Nota**
> 

> Encara no vam veure la validació de dades que hauria de donar-se en el pas de paràmetres. En aquest cas podríem tindre condicions `IF` en el que es comprova si l'aforament és major que zero...
Es pot fer ús de la funció `ROW_COUNT()` per a saber quantes files van ser afegides, borrades o modificades.

> **📌 Important**
> 

> Els paràmetres han de tindre el **mateix tipus de dada i mida** que el que està definit a nivell de columnes en la taula `PISTAS`.

**Exercici 7.** Crea un procediment de nom `atraccions_update` que permeta **modificar les dades d'una atracció** (no es permet actualitzar la seua clau primària).

Modifica la data d'inici de l'atracció `'El gran felino'` i ponla **un dia després** de la que té ara mateix.

> **📌 Pista**
> 

> Hauràs de guardar les guanys i la data d'inici que té per a poder enviar aquest dada al procediment. Comprova com a l'anomenar al mètode amb una atracció que no existeix, `ROW_COUNT()` retornarà 0.

**Exercici 8.** Crea un procediment de nom `pistas_delete` que **esborre una pista** pel seu nom. Fes que esborre sobre la base del patró `nombre%` (emprant el `LIKE`). Esborra l'atracció que hayas afegit en l'exercici 6 mandant les primeres lletres (veus amb cura que no haja una altra atracció amb aquestes lletres al començament).

> **📌 Pista**
> 

> Empra la funció `CONCAT` per al `LIKE`.

---

## Actividad 703: Sentències Prepared - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act703.html)*

# **Actividad 703**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `703_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **procediments emmagatzemats** (`CREATE PROCEDURE`).

> - El correcte ús de les **sentències preparades** (`PREPARE`, `EXECUTE`, `DEALLOCATE PREPARE`).

> - La correcta construcció de sentències SQL dinàmiques amb `CONCAT`.

> - La correcta utilització dels **marcadors de paràmetres** (`?`) i `EXECUTE ... USING`.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. a) S'han identificat les diverses maneres d'automatitzar tasques.

>   - CA5. b) S'han reconegut els mètodes d'ejecució de guions.

>   - CA5. c) S'han identificat les eines disponibles per a editar guions.

>   - CA5. d) S'han definit i utilitzat guions per a automatitzar tasques.

>   - CA5. e) Es ha fet ús de les funcions proporcionades pel sistema gestor.

>   - CA5. f) S'han definit procediments i funcions d'usuari.

## **Sentències Prepared - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

**Exercici 1.** Crea un procediment de nom `animals_getListFiltroNumeroColum` que retorne el número d'animals indicat pel paràmetre (utilitzar `LIMIT`). També es li pasará en un altre paràmetre les **columnes** que ha de mostrar de la forma `'col1, col3, col5'`.

**Exercici 2.** Crea un procediment de nom `animals_getListFiltroPista` que retorne la llista d'animals que treballen en la pista que s'envia com paràmetre. En cas que **no es envíe dada** (valor `NULL`) ha de mostrar tots els animals.

> **📌 Pista**
> 

> Fes ús d'un marcador de paràmetre (`?`) en la sentència preparada i de `EXECUTE ... USING`.

**Exercici 3.** Crea un procediment de nom `animals_getByAnoPeso` al que es li pasen **dos paràmetres** (pes i any) i en funció de si porten valor o no, fes que retorne els animals que complisquen els criteris de cerca.

---

## Actividad 704: Fluxos de Control - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act704.html)*

# **Actividad 704**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `704_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **procediments emmagatzemats** (`CREATE PROCEDURE`).

> - El correcte ús de les **estructures de control de flux**: `IF`/`ELSEIF`/`ELSE`, `CASE`, `WHILE`, `LOOP`.

> - El correcte ús de **paràmetres d'eixida (`OUT`)** i d'entrada-eixida (`INOUT`).

> - La correcta utilització de les **funcions** proporcionades pel sistema gestor (`CONCAT`, `SUBSTRING`, `LOCATE`, `CHAR_LENGTH`, `ORD`, `LAST_DAY`, `LPAD`, `MOD`, ...).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. g) S'han utilitzat estructures de control de flux.

## **Fluxos de Control - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

**Exercici 1.** Crea un procediment de nom `pistes_getListAnimales` que retorne als animals (nom, pes i anys) que treballen en la pista indicada. En cas que **no haja animals** haurà de retornar `SIN ANIMALES` i en el cas que **no existisca la pista**, `ESTA PISTA NO EXISTE`.

**Exercici 2.** Crea un procediment de nom `atraccions_getNumeroPorFecha` que retorne el número d'atraccions que es celebraron en la data indicada. En cas que **no haguera atraccions** aquest dia ha de retornar el número **-1**.

**Exercici 3.** Crea un procediment de nom `atraccions_getNumPorMes` al que es li passe dos dades: un mes en lletra (`ENERO`, `FEBRERO`, ...) i un any en número. Haurà de calcular la **suma de totes les atraccions** celebrades en el mes i any indicat i retornar el dada en un **paràmetre d'eixida**. En el cas que l'any indicat siga nul, prendre l'any actual. Crea un bucle que recorra **tots els dies del mes** de l'any indicat i vaja sumant les atraccions. Si el mes no existeix ha de retornar **-1** en el paràmetre d'eixida. Per a *construir* la data utilitzar la funció `CONCAT`.

> **📌 Pista**
> 

> Has de tindre en compte que hi ha mesos en els que no hi ha 31 dies. En lloc d'establir condicions per mesos, emprar la funció `LAST_DAY` (ja vista abans) per a comprovar si la data és vàlida.

**Exercici 4.** Crea un procediment de nom `utilitats_cambiarFormato` al que es li passe un dada en forma de cadena i retorne **en el mateix paràmetre** la cadena enviada canviant les lletres per números i separats per un guió. Per a passar de lletra a número empra la funció `ORD`.

> **📌 Pista**
> 

> Per a recórrer la cadena caràcter a caràcter pots fer ús de les funcions `LEFT` i `RIGHT` o de la funció `SUBSTRING` a més de la funció `CHAR_LENGTH`. Anar amb cura ja que la funció `SUBSTRING`, en el paràmetre *pos*, la primera posició de la cadena, comença en **1**, no en 0.

**Exercici 5.** Crea un procediment de nom `pistes_getSumAforo` que retorne en forma de **paràmetre d'eixida** la suma dels aforos de les pistes enviades com paràmetre. El format de la llista de pistes és una única cadena: `'pista1,pista2,pista3,...'`.

> **📌 Pistes**
> 

> - Hauràs de, emprant la funció `SUBSTRING` i `LOCATE`, descomponer el dada en cada una de les pistes i cercar l'aforament de cada una d'elles, devolvent la suma dels aforos de totes.

> - En cas que alguna pista no existisca, hauràs de mostrar la cadena `'La pista ZZZZZZ no existe'` per cada pista que no existisca.

> - Hem de controlar que almenys sempre es envíe una pista. En cas contrari ha d'enviar-se **-1** en el paràmetre d'eixida (empra la funció `CHAR_LENGTH`).

**Exercici 6.** Crea un procediment de nom `atraccions_getGananciasSupuestas` en el que es li passe com dades el nom d'una atracció i 2 números. Haurà de mostrar els dies en que es celebró l'atracció juntament amb el seu número d'espectadors i ganancia així com les guanys que tindríem si l'entrada costara diferents preus. Els preus han de variar **des del primer número enviat fins al segon**, amb una diferència de **5 euros** entre ells. És a dir, si enviament les dades `'atraccion1',20,30` haurà de mostrar què ganancia tenim amb un preu d'entrada de 20, 25 i 30 (cal mostrar cada preu en una nova consulta: una consulta mostrarà `'atraccion1', 100, 3000` (aquests serien les dades actuals), `20x100` (amb un preu de 20 euros per entrada); la següent consulta ha de mostrar el mateix però amb `25x100` i la tercera consulta el mateix però `30x100`).

> **📌 Pistes**
> 

> - Has de controlar que els números enviats siguen **múltiplos de 5** i que el **segon és major que el primer**. Si no es compleixen les condicions, ha de mostrar un text aclarant l'error.

> - En cas que l'atracció **no existisca** o que l'atracció existisca però **no ha tingut representacions**, també ha d'informar de l'error.

**Exercici 7.** Crea un procediment de nom `utilitats_getNumImpares` al que es li pasen **tres números** i retorne en forma de **paràmetre d'eixida** quants números hi ha entre els dos primers números que són divisibles pel tercer. S'han de **incloure els dos primers números** a l'hora de comptar. No importa l'ordre en el que es envíen els dos primers números.

> **📌 Exemple**
> 

> `5,1,2` → Cerca els números múltiplos de 2 entre 1 i 5 (*inclosos*) → 2.

---

## Actividad 705: Esdeveniments

👉 *[Obrir aquesta activitat en pàgina individual](act705.html)*

# **Actividad 705**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `705_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **esdeveniments** (`CREATE EVENT`).

> - La correcta configuració del **calendari d'ejecució** (`AT`, `EVERY`, `STARTS`, `ENDS`, `ON COMPLETION`).

> - El correcte ús de **`ALTER EVENT`** i **`DROP EVENT`**.

> - La consulta dels esdeveniments creats (`SHOW EVENTS`, `information_schema.EVENTS`).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. h) S'han definit aconteciments i disparadors.

> **📌 Avís**
> 

> Perquè els esdeveniments es ejecuten és necessari que el **planificador d'esdeveniments** estiga activado: `SET GLOBAL event_scheduler = ON;`

## **Esdeveniments**

Treballarem amb la base de dades **`employees`** (dades d'una empresa) que ja deberías tindre importada en el teu servidor MySQL, i sobre la base de dades **`CIRCO`**.

**Exercici 1.** Volem registrar, **cada 1 minut en el dia d'hui i durant uns 10 minuts** des del moment de creació de l'esdeveniment, què usuaris estan accedint a la base de dades `employees`. Aquests usuaris (els seus noms i equips) hauran de quedar registrats en una taula de nom `'historico_usuarios_hora'` en la que es guardarà el nom de l'usuari així com el dia-hora-minut en el que es produjo el registre d'activitat.

- Crea **dos usuaris** i conéctate a la base de dades. Després fes que un d'ells es desconecte de la base de dades.

- **Modifica l'esdeveniment** i fes que l'esdeveniment **no desaparezca** quan termine l'intervalo d'ejecució.

- Modifica l'esdeveniment perquè es torne a executar **en el minut següent a l'actual** i comprova que registra novament a un dels usuaris anteriors (que es torne a connectar).

> **📌 Pistes**
> 

> - Per a saber què usuaris estan connectats: `SELECT DISTINCT user, host FROM information_schema.PROCESSLIST;`

> - El camp data-hora es pot guardar amb `NOW()` o `SYSDATE()`.

**Exercici 2.** Fes que el **dia 15 de Maig del 2025 a les 23:15** es guarde una còpia de les dades de la taula `departments` en una taula creada per ti prèviament de nom `dept_copia_temp`.

> **📌 Pista**
> 

> `AT '2025-05-15 23:15:00'`.

**Exercici 3.** Crea una taula de nom `empleados_numero_mensual` que guarde el número d'empleats que té l'empresa. Fes que s'execute **una vegada 4 dies després** de que es creu l'esdeveniment.

- Executa l'ordre que mostre el **moment en que es va a executar**.

- Modifica l'esdeveniment perquè s'execute **des del dia d'hui fins a dins d'un any** i que el faça **cada mes**.

- Executa l'ordre que mostre el moment en que es va a executar.

> **📌 Pista**
> 

> El *next execution* es pot consultar amb `SELECT * FROM information_schema.EVENTS WHERE event_name = '...'\G` o amb `SHOW EVENTS`.

**Exercici 4.** Fes que el **dia 1 de Gener de cada any** es actualicen els salarios dels manager de cada departament un **10%** (treballen molt :) que estiguen treballant actualment en l'empresa. Aquesta actualització s'ha de produir **durant 5 anys a partir de l'actual**.

- Canvia l'hora del sistema per a comprovar que s'executa l'esdeveniment.

> **📌 Pistes**
> 

> - `EVERY 1 YEAR STARTS '2025-01-01 00:00:00' ENDS '2029-01-01 00:00:00'` (els anys de l'exemple s'han d'adaptar al curs actual).

> - Els managers actuals de cada departament estan en la taula `dept_manager` (empleats del qual `to_date` és una data futura, per exemple `'9999-01-01'`).

**Exercici 5.** Realitza les següents consultes:

- Mostra **tots els esdeveniments** creats.

- Mostra tots els esdeveniments creats pel usuari **`root`**.

- **Esborra un dels esdeveniments**, asegurándote de que existisca.

---

## Actividad 706: Triggers - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act706.html)*

# **Actividad 706**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `706_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **triggers** (`CREATE TRIGGER`).

> - La correcta elecció del **moment** d'ejecució (`BEFORE`/`AFTER`) i de la **operació** (`INSERT`/`UPDATE`/`DELETE`).

> - El correcte ús de les taules **`OLD`** i **`NEW`**.

> - L'ús de **`SIGNAL`** per a impedir operacions que no compleixen les condicions.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. h) S'han definit aconteciments i disparadors.

## **Triggers - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents triggers.

**Exercici 1.** Fes que **no es puga afegir un nou animal** si el tipus és `'León'` i el número d'anys és major que **20**. En cas de no complir-se la condició llançarà una excepció:

```sql
SIGNAL SQLSTATE '45000' SET message_text='El tipo león no puede tener más de 20 años';
```

> **📌 Pista**
> 

> Com volem **impedir** que es afegisca la fila si no es compleix la condició, el trigger ha de ser `BEFORE INSERT` i fer ús de la taula `NEW`.

**Exercici 2.** Quan es incorpore un **nou animal**, fer que aquest animal estiga cura pel **artista que cuida a menys animals**.

> **📌 Pistes**
> 

> - Hauràs de tindre en compte el cas en el que **no haja cap artista cuidant animals**. En aquest cas has de coger al primer artista que no siga cap.

> - Si **no hi ha cap artista** hauràs de llançar una excepció amb el text `No se puede añadir el animal. No hay artistas disponibles` (`SIGNAL SQLSTATE '45000' SET message_text='No hay artistas para cuidar a animales';`).

> - Aquest trigger suposa afegir una fila a la taula `ANIMALES_ARTISTAS`, per la qual cosa l'animal ha d'estar ja afegit: el trigger serà `AFTER INSERT`.

**Exercici 3.** Fes tot el necessari perquè el camp **`GANANCIAS`** de la taula `ATRACCIONES` es actualice quan es añadan, borren o modifiquen dades en la taula `ATRACCION_DIA`.

Si a l'afegir una celebració nova (`ATRACCION_DIA`) la `FECHA_INICIO` en `ATRACCIONES` és `NULL`, ha d'actualitzar-se **amb la data actual**.

> **📌 Nota**
> 

> Hem de tindre en compte que tant la data com les guanys poden tindre **valors nuls**. Fer ús de la funció `IFNULL` per a donar un valor a aquestes columnes quan siguen `NULL` (`NULL + valor = NULL`).

**Exercici 4.** Modifica la taula `ATRACCIONES` i afegeix una nova columna de nom **`contador`**, de tipus numèric i **valor per defecte de zero**, que lleve compta de **quantes vegades es ha celebrado l'atracció** i que es actualice amb qualsevol operació.

> **📌 Nota**
> 

> Les dades ja añadits tindran com valor `NULL`. Realitza una operació de `UPDATE` per a ponerlos al seu valor correcte.

---

## Actividad 707: Cursors - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act707.html)*

# **Actividad 707**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `707_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **cursors** (`DECLARE CURSOR`, `OPEN`, `FETCH`, `CLOSE`).

> - El correcte ús del **manejador** `DECLARE CONTINUE HANDLER FOR NOT FOUND`.

> - La correcta implementació del **bucle de lectura** (`LOOP` + `LEAVE`).

> - L'ús de **taules temporals** (`CREATE TEMPORARY TABLE`, `DROP TEMPORARY TABLE`).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. i) S'han utilitzat cursors.

## **Cursors - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

**Exercici 1.** Crea un procediment de nom `atraccions_checkGanancias` en el que volem comprovar si les **guanys totals** de cada atracció coincideixen amb la **suma de les guanys** dels dies en que es celebró. El procediment ha de retornar una cadena amb el format:

```sql
atraccion1:gananciatotal:gananciasumada, atraccion2:gananciatotal:gananciasumada
```

amb les atraccions que **no compleixen** que la suma siga igual.

**Exercici 2.** Crea un procediment de nom `artistes_addSuplementoPorCuidados`, que comprove a **quants animals cuida** cada un dels artistes. Aquells artistes que cuidan **més d'un número d'animals** indicats per un paràmetre es els donarà un plus en la seua nómina igual al **número d'animals que cuida multiplicado per 100 euros**. Mostra el nom i complemento de cada artista així com la **suma de tots els complementos**.

> **📌 Pistes**
> 

> - El resultat ha d'aparèixer com **una única consulta** (no valen diversos `SELECT`). Per a això fes ús d'una **taula temporal** que vaja guardant les dades (el nom complet i el suplemento de la ganancia) i posteriorment fes un `SELECT` d'aquesta taula.

> - Per a crear una taula temporal fes ús de la sentència `CREATE TEMPORARY TABLE`. Aquesta ordre ha d'anar **després** de l'ordre `DECLARE CONTINUE HANDLER` del cursor.

> - Recorda **esborrar la taula temporal** a l'eixir del procediment amb l'ordre `DROP TEMPORARY TABLE`.

**Exercici 3.** Crea un procediment de nom `animals_addAforoPorTipo` al que es li passe un **tipus d'animal** i el **increment d'aforament** i per cada pista en la que trabatge l'animal d'aquest tipus, es anomene al procediment `pistes_addAforo` ja implementat en la secció de procediments. **No cal anomenar diverses vegades a la mateixa pista**.

Ha de mostrar en **una única consulta** la llista de pistes i nou aforament a partir de la informació que retorna el procediment `pistes_addAforo`. Les pistes **no poden aparèixer repetides**.

> **📌 Pistes**
> 

> - Per a això fes ús d'una **taula temporal** que vaja guardant les dades (el nom de la pista i el nou aforament) i posteriorment fes un `SELECT` d'aquesta taula.

> - Per a crear una taula temporal fes ús de la sentència `CREATE TEMPORARY TABLE`. Aquesta ordre ha d'anar **després** de l'ordre `DECLARE CONTINUE HANDLER` del cursor.

> - Recorda **esborrar la taula temporal** a l'eixir del procediment amb l'ordre `DROP TEMPORARY TABLE`.

> - Per a evitar anomenades repetides a una mateixa pista, usa `SELECT DISTINCT nombre_pista` en el cursor.

> **📌 Avís**
> 

> En la taula `PISTAS` existeix un trigger (`pistas_checkAforo_UPDATE`) que comprova que l'aforament estiga entre 10 i 1000. Si la pista `SUPER` té un aforament de 1000, l'increment donarà un error. Per a provar, recorda baixar el valor de l'aforament de la pista `SUPER` perquè no supere el límit (o prepara el codi per a capturar l'excepció).

---

## Actividad 708: Funcions d'usuari - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act708.html)*

# **Actividad 708**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `708_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta definició de **funcions d'usuari** (`CREATE FUNCTION ... RETURNS`).

> - El correcte ús de la instrucció **`RETURN`**.

> - La inclusió de les **característiques** de la funció (`DETERMINISTIC`, `NO SQL`, `READS SQL DATA`).

> - La correcta **anomenada** a la funció, tant directa com dins de consultes SQL.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. f) S'han definit procediments i funcions d'usuari.

## **Funcions d'usuari - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze les següents funcions.

**Exercici 1.** Crea una funció de nom `utilidades_getMesEnLetra` a la que es li passe un **número** i retorne el **nom del mes**. En cas que el número no es corresponda amb cap mes, ha de retornar `NULL`.

> **📌 Notes**
> 

> - Fíjate que aquesta funció és **determinista**.

> - MySQL ja disposa d'una funció similar: `MONTHNAME()`, que rep una data i retorna el mes en forma de cadena.

Realitza les següents anomenades:

- Anomena a la funció directament i **guarda el resultat en una variable de sessió**.

- Anomena a la funció perquè mostre els **mesos en lletra** en els que es celebró l'atracció `'El gran felino'`.

- Anomena a la funció perquè mostre les atraccions que es celebraron en **ABRIL** (cerca per la cadena `ABRIL`) (recorda fer ús de `COLLATE`).

**Exercici 2.** Modifica un exercici anterior en el que creem el procediment de nom `atracciones_getNumPorMes` i crea una **funció** de nom `utilidades_getMesEnNumero` a la que es li passe el **nom d'un mes** i retorne el **número** que es correspon amb eixe nom. Si el mes no existeix ha de retornar **-1**. **Modifica el procediment** perquè faça ús de la funció.

> **📌 Pista**
> 

> La funció retornarà un `INTEGER` i serà determinista (`DETERMINISTIC NO SQL`).

**Exercici 3.** Crea una funció de nom `animales_getEstadoPorAnhos` que retorne la cadena:

- Si `tipo = León`:

  - `anhos < 2`: `'JOVEN'`

  - `anhos >= 2` i `<= 5`: `'MADURO'`

  - `anhos > 5`: `'VIEJO'`

- Qualsevol un altre tipus:

  - `anhos < 1`: `'JOVEN'`

  - `anhos >= 1` i `<= 3`: `'MADURO'`

  - `anhos > 3`: `'VIEJO'`

Anomena a la funció per a mostrar el **estat per anys de cada un dels animals** del CIRC.

**Exercici 4.** Crea una funció de nom `pistas_getDiferenciaAforo` a la que es li passe el **nou aforament** d'una pista i retorne la diferència entre l'aforament nou i l'aforament anterior.

- Si la diferència `< 100`: retornar la cadena `'PEQUEÑA menor que 100'`.

- Si la diferència està entre 100 i 500: retornar la cadena `'REGULAR entre 100 y 500'`.

- Si la diferència `> 500`: retornar la cadena `'ABISMAL mayor que 500'`.

- Si la pista no existeix: retornar `NULL`.

> **📌 Exemple**
> 

> `PISTA1, 150` → Si la pista té actualment un aforament de 100, ha de retornar `150 - 100 = 50` → `PEQUEÑA menor que 100`.

> **📌 Notes**
> 

> - Acordaos d'afegir els **modificadors adequats** a la creació de la funció.

> - Mostra les dades de **totes les pistes** juntament amb la diferència de l'aforament emprant la funció anterior i enviant un aforament de **600**.

> - Mostra les pistes que tinguen una diferència **ABISMAL** (cerca la cadena amb la funció `INSTR`) amb un aforament proposat de **1000**.

---

## Actividad 709: Excepcions - CIRC

👉 *[Obrir aquesta activitat en pàgina individual](act709.html)*

# **Actividad 709**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `709_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - El correcte ús de **`DECLARE ... CONDITION FOR`** per a nombrar excepcions (per `Error Code` i per `SQLSTATE`).

> - El correcte ús de **`DECLARE ... HANDLER`** (`CONTINUE`/`EXIT`) per a capturar excepcions.

> - El correcte ús de **`SIGNAL SQLSTATE '45000'`** per a llançar excepcions personalitzades (`MESSAGE_TEXT`, `MYSQL_ERRNO`).

> - La captura d'excepcions i l'enviament de codis al programa client (paràmetres d'eixida o `SELECT`).

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA5: Desenvolupa procediments emmagatzemats avaluant i utilitzant les sentències del llenguatge incorporat en el sistema gestor de bases de dades.

>   - CA5. j) S'han utilitzat excepcions.

## **Excepcions - CIRC**

Amb la BBDD **CIRC** facilitada (CIRC.sql), crea i executa un script `.sql` que realitze els següents procediments.

**Exercici 1.** Crea un procediment de nom `animales_Delete` que donat el **nom d'un animal**, l'esborre. Abans haurà d'esborrar totes les taules relacionades. En el cas que l'animal tinga **menys de 2 anys** no estarà permitido borrar-lo i llançarà una excepció (recorda que el codi d'error per a excepcions definides pel usuari és el **45000**) amb el text: *No és possible donar de baixa a animals amb menys de dos anys*. En el cas que l'animal **no existisca**, haurà de llançar una excepció amb el text `'Ese animal no existe'` i un **ErrorCode 1643**.

> **📌 Nota**
> 

> Fíjate que aquest procediment esborra les dades de diverses taules, per la qual cosa necessitaríem fer ús d'una **transacció** (com veurem en la següent secció de la Wiki).

> **📌 Pista**
> 

> `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...', MYSQL_ERRNO = 1643;`

**Exercici 2.** Crea un procediment de nom `animales_addArtista` al que es li passe el **nom d'un animal** i el **nif d'un artista** i asigne el cuidador a l'animal. Haurà de comprovar que el **animal i l'artista existeixen**. En cas que no, haurà de llançar una excepció amb el **ErrorCode 1643** i text `'El animal no existe'` o `'El artista no existe'`.

**Exercici 3.** Crea un procediment de nom `animales_add` que **afegeix un nou animal**. En cas d'intentar donar d'alta un animal amb el **mateix nom**, captura l'excepció i fes que el procediment retorne (amb un `SELECT`) **-1**. En cas que l'alta siga correcta, que retorne **0**. En el cas que el nom de la **pista o de l'atracció no existisca**, captura l'excepció i retorna el valor **-2**.

> **📌 Pistes**
> 

> - Treballa amb **noms d'excepcions** en compte d'amb els números associats: `ex_claveDuplicada`, `ex_pista_atracc_no_existe`.

> - Per a saber el número d'excepció que has de capturar, **provoca el fallada i anota el número**.

> **📌 Nota**
> 

> Aquest procediment està pensat per a llamar-lo des d'un programa client (amb Java, C#, ...) que guarde el valor del `SELECT` i, en base a aquest valor, avise a l'usuari. Si quisiéramos emplear-lo com part d'un guió en MySQL necessitaríem que fóra una **funció** per a poder guardar el valor de retorno o emprar un **paràmetre d'eixida**.

**Exercici 4.** Crea un procediment de nom `artistas_add` que **afegeix un nou artista**. S'ha de comprovar si el **nif existeix**. Aquesta comprovació es farà **capturant l'excepció corresponent**. En cas d'error, s'enviarà en un **paràmetre d'eixida** el valor **-1**. Si tot està correcte s'enviarà el valor **0**.

> **📌 Pistes**
> 

> - Crea un nom d'excepció: `ex_artista_duplicado`.

> - **Atenció**: la taula `ARTISTAS` té un trigger (exercici 6) per a evitar que es afegisca un cap que no existisca, el canvia pel valor `NULL`. Com ampliació a aquest exercici podéis esborrar i capturar l'excepció de que el cap no existisca (clau forana no vàlida).

> - Al costat de les dades de l'artista s'ha d'enviar el **nom d'un animal** (ha d'estar prèviament donat d'alta) que va a cuidar l'artista.

> - S'ha d'anomenar al mètode `animales_addArtista` (creat prèviament) i **capturar la possible excepció** que lance aquest mètode emprant el `SQLSTATE`. Si l'animal no existeix ha d'enviar en el paràmetre d'eixida el valor **-2**.

> - Crea un nom d'excepció: `ex_animal_no_existe`. **Qualsevol excepció** que es produïsca ha de fer que es **salga del procediment**.

> - Anomena al mètode i comprova el valor del paràmetre d'eixida en cada cas.

> **📌 Nota**
> 

> Fíjate que aquest mètode és un candidato per a realitzar una **transacció** ja que va a afectar a dos taules (va a afegir dos files).

---


---

## 🎮 Retos Interactivos de Autoevaluación (+100 XP)

Comprueba tu dominio sobre **Cuaderno Completo de Actividades — UD7** superando estos 4 retos gamificados (+25 puntos cada uno):

<div class="interactive-mcq" data-answer="A" data-hint="Les funcions retornen un valor escalar i s'usen en expressions; els procediments s'executen amb CALL.">
  <div class="mcq-question">🎯 <strong>Reto 1 (+25 pts):</strong> En la programació de bases de dades (MySQL/MariaDB), quina diferència clau hi ha entre un <code>PROCEDURE</code> (procediment) i una <code>FUNCTION</code> (funció)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Una funció retorna obligatòriament un valor amb <code>RETURN</code> i pot invocar-se dins d'una expressió <code>SELECT</code>, mentre que un procediment s'invoca amb <code>CALL</code> i pot tenir paràmetres <code>IN</code>, <code>OUT</code> i <code>INOUT</code>.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Els procediments no poden contenir bucles ni condicionals <code>IF</code>.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Les funcions només s'executen en el navegador del client.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Els procediments s'esborren automàticament després de cada execució.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="OLD conté els valors anteriors a la modificació i NEW els nous valors que s'hi volen desar.">
  <div class="mcq-question">🎯 <strong>Reto 2 (+25 pts):</strong> En un disparador (<code>TRIGGER</code>) de tipus <code>BEFORE UPDATE</code>, quins pseudoregistres permeten accedir al valor antic i al nou valor d'una fila?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) FIRST i LAST</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) OLD i NEW</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) PRIOR i NEXT</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) START i END</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Els cursors es declaren (DECLARE), s'obrin (OPEN), es llig cada fila (FETCH) i es tanquen (CLOSE).">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Un cursor (<code>CURSOR</code>) en SQL permet recórrer i processar fila per fila el conjunt de resultats d'una consulta dins d'un procediment emmagatzemat.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="delimiter" data-hint="És la comanda DELIMITER.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina paraula clau s'utilitza en MySQL/MariaDB per a canviar temporalment el caràcter delimitador d'instruccions (per exemple a <code>$$</code> o <code>//</code>) en crear un procediment o trigger?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD7**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 puntos XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 puntos · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD07" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
