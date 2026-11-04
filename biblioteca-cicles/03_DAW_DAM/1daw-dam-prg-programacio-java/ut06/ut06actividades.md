---
title: "Activitats pràctiques UT6"
unit: "6"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT06"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# Activitats pràctiques UT6

> **📌 Empaquetar activitats**
> 

> Empaqueta les activitats, dins de la carpeta **`ut06/bloqueX`**

## Bloc 6.0

### Activitat 01

Activitat **`A01_leeEdad`**

Escriure un programa que solicite a l'usuari la seua edat i, utilitzant directament `Scanner`, la lea de teclat i mostre per pantalla un missatge de l'estil "La seua edat és 32 anys".

### Activitat 02

Activitat **`A02_leeEdad`**

Repeteix la *Activitat 01* utilitzant un `BufferedWriter` per a escribir-lo en un fitxer anomenat *edat.txt*.

### Activitat 03

Activitat **`A03_notas`**

Escriure un programa que almacene en un fitxer les notes de (màxim) 20 alumnes. El programa tindrà el següent funcionament:

- En el fitxer es guardarán com a màxim 20 notes, però es poden guardar menys. El procés d'introducció de notes (i en conseqüència, el programa) finalizará quan l'usuari introduzca una nota no vàlida (menor que zero o major que 10).

- A l'incio de l'ejecució es pedirá a l'usuari el nom que desitja que tinga el fitxer. 

- Al finalitzar l'entrada de notes, es mostraran totes les introduïdes per pantalla (leyendolas del mateix fitxer). 

### Activitat 04

Activitat **`A04_informacionFicheros`**

Implementa un programa que demane a l'usuari introduir per teclat una ruta del sistema de fitxers (per exemple, `C:/Windows` o `Documentos`) i mostre informació sobre aquesta ruta (veure funció més abaix). El procés es repetirá una i una altra vegada fins a que l'usuari introduzca una ruta buida (tecla *intro*). Haurà de manejar les possibles excepcions.

Necesitarás crear la funció `void muestraInfoRuta(File ruta)` que donada una ruta de tipus `File` faça el següent:

- Si és un fitxer, mostrarà per pantalla el nom del fitxer.

- Si és un directori, mostrarà per pantalla la llista de directoris i fitxers que conté (els seus noms).

- Si el path no existeix llançarà un `FileNotFoundException`.

### Activitat 05

Activitat **`A05_informacionFicheros2`**

Partint d'una còpia del programa anterior, modifica la funció `muestraInfoRuta`:

- En el cas d'un directori, mostrarà la llista de directoris i fitxers en ordre alfabétic. És a dir, primer els directoris en ordre alfabétic i després els fitxers en ordre alfabétic. Et serà útil `Arrays.sort()`.

- Afegeix un segon argument `boolean info` que quan siga `true` mostrarà, al costat de la informació de cada directori o fitxer, la seua mida en bytes i la data de la última modificació. Quan `info` siga `false` mostrarà la informació com en el Activitat anterior.

### Activitat 06

Activitat **`A06_escribirFichero2`**

Empaqueta tota aquesta activitat en: **`ut06/actividades/ce5d/`**gestionaLibros**

- (`Autor`) Crea la classe autor, amb els atributs *nom*, *any de naixement* i *nacionalitat*. Incorpora un constructor que reba totes les dades i el mètode `toString()`.

- (`Libro`) Crea la classe Llibre, amb els atributs *titulo*, *any d'edició* i *autor* (Objecte de la classe autor). Incorpora un constructor que reba totes les dades i el mètode `toString()`.

- Escriu un programa (`GuardaLibros`) que creu tres llibres i els almacene en el fitxer `biblioteca.obj`.

**Nota**: Les classes hauran d'implementar l'interfície `Serializable`.

### Activitat 07

Escriu un programa de nom `LeeLibros`que lea els objectes del fitxer `biblioteca.obj` i els mostre per pantalla.

### Activitat 08

Escriu un programa que, usant les classes `FileReader` i `FileWriter`:

- Escriga els caràcters del teu nom en un fitxer ( **nom.txt** ).

- Lea el fitxer creat i el mostre per pantalla.

- Si abrimos el fitxer creat amb un editor de textos, el seu contingut és llegible?

### Activitat 09

Escriu un programa que, usant les classes `FileOutputStream` i `FileInputStream`, 

- Escriga els caràcters del teu nom en un fitxer i els vaja afegint (`nombres.log`).

- Lea el fitxer creat i el mostre per pantalla.

- Si abrimos el fitxer creat amb un editor de textos, el seu contingut és llegible?

### Activitat 10

Escriu un programa que, utilitzant entre altres la classe `DataOutputStream`, almacene en un fitxer anomenat `personas.dat` la informació relativa a una sèrie de persones que va introducent l'usuari des de teclat:

- `Nombre` (String)

- `Edad` (enter)

- `Peso` (double)

- `Estatura` (double)

L'entrada de l'usuari terminará quan es introduzca un nom buit.

**Nota**: Utilitza la classe `Scanner` per a llegir des de teclat i els mètodes `writeDouble`, `writeInt` i `writeUTF` de la classe `DataOutputStream` per a escriure en el fitxer.

Al finalitzar el programa, obri el fitxer resultant amb un editor de text La informació que conté és llegible?

### Activitat 11

Realitzar un programa que lea la informació del fitxer `personas.dat` i la mostre per pantalla. Per a determinar que no queden més dades en el fitxer podem capturar l'excepció `EOFException` .

### Activitat 12

Modifica el programa anterior perquè l'usuari, al començament del programa, puga triar si vol afegir dades al fitxer o sobre escriure la informació que conté.

### Activitat 13

Per a aquesta activitat utilitzarem el fitxer de text **productes.txt**. Descárgalo en la carpeta `src/test`.

Es desitja simular el funcionament d'una màquina expendedora. Es tracta d'una expendedora senzilla que, pel moment, serà capaç de dispensar únicament un producte.

El seu funcionament, a grans rasgos, és el següent:

1. El client introdueix dinero en la màquina. Al dinero introduït el llamarem `credito`.

1. Selecciona el producte que vol comprar (ja hem comentado que pel moment hi haurà un només producte).

1. Si hi ha stock del producte seleccionat, la màquina dispensa l'article triat i retorna l'importe sobrante (diferència entre el crèdit introduït i el preu del producte).

Durant el procés es poden produir diverses incidencias, com per exemple, que el client no haja introduït suficient crèdit per a comprar el producte, que no quede producte o que no haja canvi suficient per a la devolució. La màquina també dóna la possibilitat de solicitar la devolució del crèdit sense realitzar la compra.

**A**) Dissenyar la **classe `Expendedora`** amb els atributs i mètodes que es descriuen a continuació.

- 

Atributs (privats):

- 

`credito`: Quantitat de dinero (en euros) introducida pel client.

- `stock`: Número d'unitats que queden en la màquina disponibles per a la venda. Es reducirá amb cada nova venda.

- `precio`: Preu de l'únic article que dispensa la màquina (en euros).

- `cambio`: Canvi del que disposa la màquina. El canvi disponible es redueix cada vegada que es retorna al client la diferència entre el crèdit introduït i el preu del producte comprat. El canvi mai es veu incrementado per les compres dels clients.

- 

`recaudación`: Representa la suma de les vendes realitzades per la màquina (en euros). Es veu incrementada amb cada nova compra.

- 

Mètodes:

- 

Constructor: **`public Expendedora (double cambio, int stock, double precio)`**: Crea l'expendedora inicialitzant els atributs canvi, stock i preu amb els valors indicats en els paràmetres). El crèdit i la recaudació seran zero.

- 

Consultors:

  - **Mètodes consultors** per als atributs crèdit, canvi, i recaudació.

**Els consultors per al stock i el preu** els farem prevent que en el futuro la màquina puga expender més d'un tipus de producte. Per a consultar el stock i el preu es indicará com paràmetre el número de producte que es vol consultar encara que, pel moment es ignorará el valor d'aquest atribut.
  - **`public int getStock (int producto)`**: Retorna el stock disponible del producte indicat. En aquesta versió simplificada es retornarà el valor de l'atribut stock, siga qual siga el valor de producte (no fer cas, per ara, de l'argument `producto`).
  - **`public double getPrecio (int producto)`**: Retorna el preu del producte indicat. En aquesta versió simplificada es retornarà el valor de l'atribut preu , siga qual siga el valor de producte (no fer cas, per ara, de l'argument `producto`).

  - Modificadors: Per a simplificar, considerem que els atributs de la màquina només van a canviar per operacions derivades del seu funcionament, per la qual cosa **no proporcionamos modificadors públics**.

  - Altres mètodes:

  - 

**`public String toString()`**: Retorna un `String` de la forma:

```java
Crédito: 3.0 euros
  Cambio: 12.73 euros
  Stock: 12 unidades
  Recaudación: 127.87 euros
```

  - 

**`public void introducirDinero(double importe)`**: Representa l'operació mitjançant la qual el client afegeix dinero (crèdit) a la màquina. Aquesta operació incrementa el crèdit introduït pel client en l'importe indicat com paràmetre.

  - **`public double solicitarDevolucion()`**: Representa l'operació mitjançant la qual el client solicita la devolució del crèdit introduït sense realitzar la compra. El mètode retorna la quantitat de dinero que es retorna al client.

  - **`public double comprarProducto(int producto) throws NoHayCambioException, NoHayProductoException, CreditoInsuficienteException`**: Representa l'operació mitjançant la qual el client selecciona un producte per a la seua compra. El mètode retorna la quantitat de dinero que es retorna al client.
  Si no es produeix cap situació inesperada, es redueix el stock del producte, es retorna el canvi, es posa el crèdit a zero i es incrementa la recaudació.
  Si la venda no és possible es llançarà l'excepció corresponent a la situació que impedeix completar la venda.

**B**) La **classe `Producto`** permet representar un dels articles dels que ven una màquina expendedora. Per a això utilitzarem tres atributs privats `nombre` (`String`), `precio` (`double`) i `stock` (`int`), i els següents mètodes:

- **`public Producto(String nombre, double precio, int stock)`** Constructor que inicializa el producte amb els paràmetres indicats.

- Consultors dels tres atributs: **`getNombre`**, **`getPrecio`** i **`getStock`**.

- **`public int decrementarStock()`**: decrementa en 1 el stock del producte i retorna el stock resultant.

**C**) La **classe `TestExpendedora`** serveix per a provar els mètodes desarrollats en les classes `Expendedora` i `Producto`.

- (punt 1) Crea un Objecte de tipus `Expendedora` i inicializalo amb: 12 unitats de stock, 5 euros de canvi i un preu de 3.75 euros. Mostra per pantalla la seua estat actual.

- (punt 2) Simula la introducció per part del client d'un billete de 5 euros i mostra l'estat de la màquina `Expendedora`.

- (punt 3) Simula la compra d'un `producto` i mostra la quantitat devuelta.

- (punt 4) Simula la introducció d'una moneda de 2 euros i solicita la devolució sense realitzar cap compra i mostra la quantitat devuelta.

- (punt 5) Intenta realitzar una compra sense tindre suficient crèdit i gestiona l'excepció.

- (punt 6) Crea un altre objecte de tipus `Expendedora` que inicialment tinga 0 unitats de stock (el resta de valors al teu gusto), simula la compra d'un producte tenint suficient crèdit i canvi. Gestiona l'excepció.

- (punt 7) Crea un últim objecte de tipus `Expendedora` que inicialment tinga 0 euros de canvi (el resta de valors al teu gusto), simula la compra d'un producte per al que la màquina tinga que retornar algun importe, gestiona l'excepció.

- (punt 8) Mostra les recaudacions per a les 3 màquines expendedoras.

**D**) La **classe `Surtido`** representa una col·lecció de productes. Per a això s'usarà un atribut `listaProductos`, array de `Productos`. L'array es rellenará amb les dades de productes extraídos d'un fitxer de text i, una vegada creat el surtido no serà possible afegir o quitar productes. Així, l'array de productes estarà sempre complet i no és necessari cap atribut que indique quants productes existeixen en l'array.

Es implementarán els següents mètodes:

- **`public Surtido() throws FileNotFoundException`**: crea el surtido amb les dades dels productes que es troben en el fitxer **productes.txt**. El fitxer té el següent format:

```java
<nº de productos>
<nombre de producto> <precio> <stock>
<nombre de producto> <precio> <stock>
<nombre de producto> <precio> <stock>
...
```

Com veiem, la primera línia del fitxer indica el número de productes que conté el surtido. Aquest dada l'usarem per a donar a l'array de productes el mida adequat.

- 

**`public int numProductos()`**: retorna el número de productes que componen el surtido.

- 

**`public Producto getProducto(int numProducto)`**: retorna el producte que ocupa la posició `numProducto` del surtido. La primera posició vàlida és la `1`. La posició `0` no s'utilitza.

- **`public String[] getNombresProductos()`**: retorna un array amb els noms dels productes. La posició `0` de l'array no s'utilitzarà (serà `null`).

**E**) Crea una còpia de la **classe** `Expendedora` i llámala **`ExpendedoraSurtido`**. Afegir els atributs i fer els canvis necessaris en la classe perquè siga capaç de dispensar diversos productes usant la nova classe `Surtido`. Per exemple, ja no tenen sentit els atributs stock i preu ja que pertanyen al `Surtido`.

Afegeix també el mètode `public String toStringSurtido()`, que mostre per pantalla el llistat de productes amb el seu nom, preu i stock per a mostrar al client que productes pot triar. El codi del producte coincidirá amb la seua posició al llegir el surtido.

**F**) Crea una còpia de la **classe** `TestExpendedora` i renómbrala com **`TestExpendedora2`** per a adaptar-l'als canvis fets en la classe `Expendedora` i usant la nova possibilitat de comprar diferents productes i usant solament un únic objecte `Expendedora`. Al final en lloc de mostrar la recaudació de les 3 màquines expendedoras, mostra només la de la única que hi ha i mostra el surtido.

### Activitat 14

Per a aquesta activitat utilitzarem el fitxer de text **AirVostrum.txt**. Descárgalo en la carpeta `src/test`.

Es desitja realitzar una aplicació `GestorVuelos` per a gestionar la reserva i cancelació de vuelos en una agencia de viatges. Aquesta agencia treballa únicament amb la companyia aérea *AirVostrum*, que ofereix vuelos des de/cap a diverses ciutats de Europa. S'han de definir les classes que segueixen, tenint en compte que els seus atributs seran privats i els seus mètodes només els que es indiquen en cada classe.

**A)** Implementació de la **classe `Vuelo`**, que permet representar un vuelo mitjançant els atributs:  

- `identificador` (`String`)

- `origen` (`String`)

- `destino` (`String`)

- `hSalida` (un tipus que et permeta controlar l'hora, no és un `String` ni un `int`, etc.)

- `hLlegada` (un tipus que et permeta controlar l'hora, no és un `String` ni un `int`, etc.)

- A més, cada vuelo disposa de 50 asientos, és a dir, poden viatjar, com molt, 50 pasajeros en cada vuelo. Per a representar-los, es farà ús de `asiento`, un array de `String` (noms dels pasajeros) juntament amb un atribut `numP` que indique el número actual d'asientos reservats. Si l'asiento `i` està reservat, `asiento[i]` contendrá el nom del pasajero que l'ha reservat. Si no l'està, `asiento[i]` serà `null`. En l'array `asiento`, les posicions impares pertanyen a asientos de ventanilla i les posicions parells, a asientos de pasillo (la posició 0 no s'utilitzarà).

En aquesta classe, s'han d'implementar els següents mètodes:

- 

**`public Vuelo(String id, String orig, String dest, LocalTime hsal, LocalTime hlleg)`**: Constructor que crea un vuelo amb identificador, ciutat d'origen, ciutat de destí, hora d'eixida i hora d'arribada indicats en els respectivos paràmetres, i sense pasajeros.

- 

**`public String getIdentificador()`**: Retorna el `identificador`

- 

**`public String getOrigen()`**: Retorna `origen`.

- 

**`public String getDestino()`**: Retorna `destino`.

- 

**`public boolean hayLibres()`**: Retorna `true` si queden asientos lliures i `false` si no queden.

- 

**`public boolean equals(Object o)`**: Dos vuelos són iguals si tenen el mateix identificador.

- 

**`public int reservarAsiento(String pas, char pref) throws VueloCompletoException`**: Si el vuelo ja està complet es llança una excepció. Si no està complet, es reserva al pasajero `pas` el primer asiento lliure en `pref`. El caràcter `pref` serà '`V`' o '`P`' en funció de que el pasajero desee un asiento de ventanilla o de pasillo. En cas que no quede cap asiento lliure en la preferencia indicada (`pref`), es reservará el primer asiento lliure de la una altra preferencia. El mètode retornarà el número d'asiento que es li ha reservat. Aquest mètode fa ús del mètode privat `asientoLibre`, que es explica a continuació.

- 

**`private int asientoLibre(char pref)`**: Donat un tipus d'asiento `pref` (pasillo '`P`' o ventanilla '`V`'), retorna el primer asiento lliure (el de menor numero) que trobe d'eixe tipus. O retorna `0` si no queden asientos lliures de tipus `pref`.

- 

**`public void cancelarReserva(int numAsiento)`**: Es cancela la reserva de l'asiento `numasiento`.

- 

**`public String toString()`**: Retorna una `String` amb les dades del vuelo i els noms dels pasajeros, amb el següent format:

```java
Vuelo:
  AV101 Valencia París 19:05:00 21:00:00
Pasajeros (23):
  Asiento 1: Sonia Dominguez
  …
  Asiento 23: Fernando Romero
```

**B)** Dissenyar i implementar una **classe `TestVuelo`** que permeta provar la classe `Vuelo` i els seus mètodes. Per a això es desarrollará el mètode `main` en el que:

- Es creu el vuelo IB101 de Valencia a París, que ix a les 19:05 i arriba a les 21:00

- Reservar:

- Un asiento de ventanilla a "Miguel Fernández"

- Un asiento de ventanilla a "Ana Folgado"

- Un asiento de pasillo a "David Més"

- Mostrar el vuelo per pantalla.

- Cancelar la reserva de l'asiento que indique l'usuari.

**C)** Implementació de la **classe `Compañía`** per a representar tots els vuelos d'una companyia aérea. Una Companyia té un nom i pot oferir, com molt, 10 vuelos distints. Per a representar-los s'utilitzarà `listaVuelos`, un array d'objectes `Vuelo` juntament amb un atribut `numVuelos` que indique el número de vuelos que la companyia ofereix en un moment donat. Les operacions d'aquesta classe són:

- 

**`public Compania(String n) throws FileNotFoundException`**: Constructor d'una companyia de nom `n`. Quan es crea una companyia, es invoca al mètode privat `leeVuelos()` per a carregar la informació de vuelos des d'un fitxer. Si el fitxer no existeix, es propaga l'excepció `FileNotFoundException`

- 

**`private void leeVuelos() throws FileNotFoundException`**: Llegix des d'un fitxer tota la informació dels vuelos que ofereix la companyia i els va emmagatzemant en l'array de vuelos `listaVuelos`. El nom del fitxer coincideix amb el nom de la companyia i té extensió `.txt`. La informació de cada vuelo es estructura en el fitxer com segueix:

```java
<Identificador>
<Origen>
<Destino>
<Hora de salida>
<Minuto de salida>
<Hora de llegada>
<Minuto de llegada>
...
...
```

Si el fitxer no existeix, es propaga l'excepció `FileNotFoundException`.

- 

**`public Vuelo buscarVuelo(String id) throws ElementoNoEncontradoException`**: Donat un identificador de vuelo `id`, cerca aquest vuelo en l'array de vuelos `listaVuelos`. Si el troba, el retorna. Si no, llança `ElementoNoEncontradoException`.

- 

**`public void mostrarVuelosIncompletos(String o, String d)`**: Mostra per pantalla els vuelos amb origen `o` i destí `d`, i que tinguen asientos lliures. Per exemple, vuelos amb asientos lliures de la companyia AirVostrum amb origen Milán i destí Valencia:

```java
AirVostrum - Vuelo AV201 - Milán València - 14:25:00 16:20:00
AirVostrum - Vuelo AV202 - Mílán València - 21:40:00 23:35:00
```

**D)** En la **classe `GestorVuelos`** es probará el comportament de les classes anteriors. En aquesta classe s'ha d'implementar el mètode `main` en el que, per simplificar, es demana únicament:

- La creació de la companyia aérea `AirVostrum`. Es disposa d'un fitxer de text **AirVostrum.txt**, amb la informació dels vuelos que ofereix.

- Reserva d'un asiento de ventanilla en un vuelo de *València* a *Milán* per part de *Manuel* *Soler Roca*. Per a això:

- Mostrarem vuelos amb origen *València* i destí *Milán*, que no estiguen complets.

- Pedirem a l'usuari l'identificador del vuelo en que vol fer la reserva.

- Buscarem el vuelo que té l'identificador indicat. Si existeix realizarem la reserva i mostrarem un missatge per pantalla. En cas contrari mostrarem un missatge d'error per pantalla.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Activitats pràctiques UT6** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina classe de Java I/O s'utilitza habitualment per a llegir fitxers de text línia per línia de forma eficient mitjançant un buffer?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) BufferedReader (embolicant un FileReader).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) ObjectOutputStream.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) ServerSocket.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina interfície ha d'implementar una classe en Java perquè els seus objectes es puguen convertir en una seqüència de bytes i guardar-se en un fitxer binari amb ObjectOutputStream?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) java.lang.Runnable</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) java.util.Comparator</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) java.io.Serializable</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En la comunicació per xarxa amb Sockets TCP en Java, el servidor espera connexions amb ServerSocket.accept() i el client s'hi connecta amb la classe Socket.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="transient" data-hint="Comença per 'trans' i acaba en 'ient'.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin modificador s'aplica a un atribut d'una classe Serializable si NO volem que eixe atribut es guarde durant la serialització?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Activitats pràctiques UT6**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD06" data-activity="ut06actividades">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

