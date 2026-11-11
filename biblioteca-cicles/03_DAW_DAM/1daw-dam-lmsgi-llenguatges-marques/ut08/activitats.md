---
layout: default
title: "Cuaderno Completo de Actividades — UD8 — Lenguajes de Marcas i Sistemes de Gestió d'Informació"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UD8"
prev_url: "act801.html"
prev_label: "⬅️ ⚡ Activitat 801"
next_url: "../ut09/index.html"
next_label: "Següent Unitat (UD9) ➡️"
---

# Cuaderno Práctico de Actividades — UD8: Emmagatzematge i Consulta d'Informació — XQuery i SGBD Nadius XML (BaseX)

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

- **[⚡ Activitat 801](act801.html)**

---

## Actividad 801

👉 *[Obrir aquesta activitat en pàgina individual](act801.html)*

# **Exercicis Emmagatzematge d'informació**

## **Activitat 1 - Anàlisi de mètodes d'emmagatzematge (CE6a)**

> **📌 Enunciat**
> 

> 1. Llegix l'apartat 8.2 Mètodes d'emmagatzematge de la informació.

> 1. Per a cada un dels següents casos, indica el **mètode d'emmagatzematge** més adequat i justifica la teua resposta:

>   - Un arxiu de configuració d'una aplicació.

>   - Un milió de factures XML d'una empresa.

>   - Les fitxes dels llibres d'una biblioteca que es consulten per estructura.

>   - Els registres (*logs*) que genera una aplicació web cada segon.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- Configuració → **fitxer plànol**: volum xicotet, sense consultes complexes.

- Factures → **SGBD relacional** (descompost o tipus XML): consultes i transaccions eficients.

- Biblioteca → **SGBD natiu XML** (XQuery sobre col·leccions) o relacional segons les consultes.

- Logs → **NoSQL documental** (MongoDB): gran volum i esquema flexible.

</details>

## **Activitat 2 - Inconvenients d'emmagatzemar en XML (CE6b)**

> **📌 Enunciat**
> 

> Escriu almenys **quatre inconvenients** d'emmagatzemar la informació en format XML i propón una situació concreta on cada un d'ells cause un problema real.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- **Verboso i pesado** (etiquetes repetides) → transmissió lenta de milions de comandes.

- **Cost de processament** (parsear) → una API que rep un XML enorme tarda massa en respondre.

- **Falta de tipat** → cal convertir manualment cada valor al comparar preus.

- **Consultes complexes sobre fitxers plànols** → cercar un dada recorre l'arxiu enter.

- **Redundància** → el mateix client repetido en milers de documents sense coherència.

</details>

## **Activitat 3 - Elecció de tecnologia eficient (CE6c)**

> **📌 Enunciat**
> 

> Per a cada parella de característiques, tria la tecnologia d'emmagatzematge adequada:

> 1. Documents jeràrquics + consultes per estructura → ?

> 1. Dades molt regulars amb moltes relacions entre ells → ?

> 1. Gran volum + esquema flexible + entorn JavaScript → ?

> 1. Projecte xicotet + sense necessitat de consultes → ?

> Justifica cada elecció amb un argument.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- SGBD **natiu XML**: XQuery consulta l'estructura directament.

- SGBD **relacional**: les relacions (JOIN) són el seu punt fort.

- **NoSQL documental** (MongoDB): escalabilitat horitzontal i JSON natiu.

- **Fitxer plànol**: simplicitat suficient per al volum.

</details>

## **Activitat 4 - XML en una base relacional (CE6f)**

> **📌 Enunciat**
> 

> Crea una base de dades relacional (amb PostgreSQL o SQLite) amb la taula `productos` i guarda el següent document en una columna de tipus `xml` (o `TEXT` si no dispones de tipus XML):

```html
<producto id="p1" categoria="portatil">
    <nombre>Portátil Pro 14</nombre>
    <precio>899.00</precio>
    <stock>12</stock>
</producto>
```

1. Escriu les sentències `CREATE TABLE` e `INSERT` necessàries.

1. Afegeix un segon producte de la teua elecció.

1. Escriu una consulta que retorne tots els documents emmagatzemats.

<details markdown="1">

<summary>💡 Solució</summary>

```html
CREATE TABLE productos (
    id        INTEGER PRIMARY KEY,
    categoria VARCHAR(30),
    ficha     XML
);

INSERT INTO productos VALUES (1, 'portatil',
    '<producto id="p1" categoria="portatil">
        <nombre>Portátil Pro 14</nombre>
        <precio>899.00</precio>
        <stock>12</stock>
    </producto>');

INSERT INTO productos VALUES (2, 'monitor',
    '<producto id="p3" categoria="monitor">
        <nombre>Monitor 27"</nombre>
        <precio>219.00</precio>
        <stock>30</stock>
    </producto>');

SELECT ficha FROM productos;
```

</details>

## **Activitat 5 - Generar XML des d'una base relacional (CE6g)**

> **📌 Enunciat**
> 

> Amb les taules `pedidos` i `lineas_pedido` de l'apartat 8.3, escriu la consulta SQL/XML que genere el següent document:

```html
<pedidos>
    <pedido id="p10">
        <cliente>Ana Pérez</cliente>
        <fecha>2027-03-02</fecha>
        <linea ref="l01" cantidad="2" precio="15.00"/>
        <linea ref="l02" cantidad="1" precio="48.50"/>
    </pedido>
</pedidos>
```

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
SELECT XMLELEMENT(name "pedidos",
    XMLAGG(
        XMLELEMENT(name "pedido",
            XMLATTRIBUTES(p.id AS id),
            XMLELEMENT(name "cliente", p.cliente),
            XMLELEMENT(name "fecha", p.fecha),
            XMLAGG(
                XMLELEMENT(name "linea",
                    XMLATTRIBUTES(l.ref AS ref, l.cantidad AS cantidad,
                                  l.precio AS precio)
                )
                ORDER BY l.linea
            )
        )
    )
) AS documento
FROM pedidos p
JOIN lineas_pedido l ON l.id = p.id
GROUP BY p.id, p.cliente, p.fecha;
```

</details>

## **Activitat 6 - Instal·lar i usar eXist-db (CE6i)**

> **📌 Enunciat**
> 

> 1. Instal·la **eXist-db** en el teu equip seguint l'apartat 8.4 Bases de dades natives XML i comprova amb `java -version` el requisit previo.

> 1. Crea una col·lecció `biblioteca` i puja a ella almenys **tres llibres** en format XML (títol, autor, any, preu, disponible).

> 1. Comprova que el document es recupera amb la consulta:

```html
collection('/db/biblioteca')/libro
```

1. Utilitza `xmldb:store` per a afegir un quart llibre des de la consola de consultes.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
# Comprobar Java
java -version

# Arrancar eXist-db desde la carpeta de instalación
./bin/startup.sh
```

Des de eXide: col·lecció `/db/biblioteca`, documents `libro1.xml`, `libro2.xml`, `libro3.xml`.
Per al quart llibre:

```html
xquery version "3.1";
let $doc := document {
    <libro isbn="978-84-00000-00-4">
        <titulo>Bases de datos XML</titulo>
        <autor>Luis García</autor>
        <anio>2026</anio>
        <precio>32.00</precio>
        <disponible>false</disponible>
    </libro>
}
return xmldb:store('/db/biblioteca', 'libro4.xml', $doc)
```

</details>

## **Activitat 7 - Consultes XQuery (CE6e)**

> **📌 Enunciat**
> 

> Sobre la col·lecció `/db/biblioteca` de l'exercici anterior, escriu les consultes XQuery que:

> 1. Retornen els títols dels llibres disponibles.

> 1. Retornen els llibres ordenats per preu de menor a major.

> 1. Retornen el número total de llibres i el preu mitjà.

> 1. Generen un document HTML amb una taula de llibres i la seua disponibilitat.

<details markdown="1">

<summary>💡 Solució</summary>

```html
(: 1. Libros disponibles :)
for $l in collection('/db/biblioteca')/libro
where $l/disponible = 'true'
return $l/titulo
```

```html
(: 2. Ordenados por precio :)
for $l in collection('/db/biblioteca')/libro
order by xs:decimal($l/precio)
return <li>{ $l/titulo } -- { $l/precio } €</li>
```

```html
(: 3. Total y media :)
let $libros := collection('/db/biblioteca')/libro
return
    <resumen>
        <total>{ count($libros) }</total>
        <media>{ avg($libros/precio) }</media>
    </resumen>
```

</details>

## **Activitat 8 - Pràctica final: cicle complet d'emmagatzematge (CE6.d - CE6.e - CE6.f - CE6.g - CE6.i)**

> **📌 Enunciat**
> 

> Realitza el **cicle complet** d'emmagatzematge i consulta d'informació:

> 1. **Relacional:** crea la taula `ventas` (id, producte, unitats, preu) i insereix almenys cinc vendes.

> 1. **XML des de relacional:** genera amb SQL/XML un document `ventas.xml` amb totes les vendes.

> 1. **Base nativa:** puja el document a una col·lecció de eXist-db anomenada `ventas`.

> 1. **Consulta:** escriu una consulta XQuery que retorne les vendes del qual total (unitats × preu) supere 50 €.

> 1. **Eixida:** genera un informe HTML amb el resultat i, opcionalment, converteix el resultat a JSON amb `jq`.

> Documenta en un xicotet informe cada pas, els comandes utilitzats i les eixides obtenides.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
-- 1. Relacional
CREATE TABLE ventas (
    id       INTEGER PRIMARY KEY,
    producto VARCHAR(50),
    unidades INTEGER,
    precio   NUMERIC(8,2)
);

-- 2. XML desde relacional
SELECT XMLELEMENT(name "ventas",
    XMLAGG(
        XMLELEMENT(name "venta",
            XMLATTRIBUTES(v.id AS id),
            XMLELEMENT(name "producto", v.producto),
            XMLELEMENT(name "unidades", v.unidades),
            XMLELEMENT(name "precio", v.precio)
        )
    )
) FROM ventas v;
```

```html
(: 4. Ventas con total > 50 :)
for $v in collection('/db/ventas')/ventas/venta
where xs:decimal($v/unidades) * xs:decimal($v/precio) > 50
return
    <venta>
        <producto>{ $v/producto }</producto>
        <total>{ xs:decimal($v/unidades) * xs:decimal($v/precio) }</total>
    </venta>
```

```html
# 5. Opcional: resultado JSON con jq
jq '[.ventas[] | select((.unidades * .precio) > 50)]' ventas.json
```

</details>

---


---

## 🎮 Retos Interactivos de Autoevaluación (+100 XP)

Comprueba tu dominio sobre **Cuaderno Completo de Actividades — UD8** superando estos 4 retos gamificados (+25 puntos cada uno):

<div class="interactive-mcq" data-answer="A" data-hint="L'acrònim FLWOR correspon a For, Let, Where, Order by i Return.">
  <div class="mcq-question">🎯 <strong>Reto 1 (+25 pts):</strong> En una expressió FLWOR de XQuery, quina és la funció de les clàusules <code>for</code>, <code>let</code>, <code>where</code>, <code>order by</code> i <code>return</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) <code>for</code> itera sobre una seqüència de nodes, <code>let</code> assigna variables, <code>where</code> filtra, <code>order by</code> ordena i <code>return</code> construeix l'eixida.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Serveixen únicament per a donar estil CSS als paràgrafs.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Configuren la targeta de xarxa del servidor.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Creen usuaris en el sistema operatiu Linux.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="En XQuery totes les variables comencen amb el símbol '$' (per exemple: for $b in //book).">
  <div class="mcq-question">🎯 <strong>Reto 2 (+25 pts):</strong> Quin caràcter precedeix sempre el nom de qualsevol variable (<code>$x</code>) dins d'una consulta XQuery?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El símbol dòlar ($).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El símbol coixinet (#).</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) El símbol percentatge (%).</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) El punt i coma (;).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="BaseX i eXist-db indexen documents XML nadius i implementen l'estàndard XQuery i XQuery Update.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> BaseX i eXist-db són exemples de Sistemes Gestors de Bases de Datos Nadius XML que permeten executar consultes i actualitzacions XQuery sobre col·leccions de documents.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="flwor" data-hint="És l'acrònim FLWOR.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Com s'anomena l'acrònim de les 5 clàusules principals d'una consulta XQuery (For, Let, Where, Order by, Return)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD8**):

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
    <button type="button" class="btn-aules-dl" data-module="LMSGI" data-unit="UD08" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
