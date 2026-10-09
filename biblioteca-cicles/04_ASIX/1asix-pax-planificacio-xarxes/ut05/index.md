---
layout: default
title: "UT5 — U4 - Nivell físic — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 U4 Nivell físic ➡️"
---

# 📘 UT5 — U4 - Nivell físic (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 U4 Nivell físic**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 U4 P1**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**✍️ Activitats pràctiques UT5**](#ut05actividades) (o [obrir en pàgina individual ➡️](./ut05actividades.md) )

---

## 5.1 U4 Nivell físic

---

PAX - U4 – Nivell físic 1er ASIX

1 ASIX - PAX Introducció a la capa física

- Abans que es produeixen

comunicacions de xarxa cal establir una connexió física a una xarxa local.

- Una connexió física pot ser

una connexió per cable o una connexió inalàmbrica.

- Es fa mitjançant NIC, bé de

cable o inalàmbriques.

1 ASIX - PAX Propòsit de la capa física

- Proporciona el medi per transportar els bits que componen un marc

de la capa d’enllaç a través dels medis de xarxa.

- Accepta un marc complet d’enllaç de dades, el codifica com a

seqüencia de senyals que es transmet pels medis locals.

- Un dispositiu final (o intermediari) rep els bits codificats que

composen la trama.

1 ASIX - PAX Propòsit de la capa física

1 ASIX - PAX Medis de la capa física

- El medi de transmissió és el suport físic mitjançant el qual l’emissor i

el receptor poden realitzar una comunicació en un sistema de transmissió de dades.

1 ASIX - PAX Medis de la capa física

- Tres formats bàsics de medis de xarxa
- Senyals elèctriques per cable de coure
- Puls de llum del cable de fibra òptica
- Senyals de microones de la tecnologia inalàmbrica

1 ASIX - PAX Tipus de transmissions

- En un ordinador la informació es transmet digitalment. Els dígits

binaris es converteixen en senyals elèctriques convenientment codificades

- A cada dígit binari (0,1) se li associa un nivell de tensió o voltatge

diferent.

1 ASIX - PAX Tipus de transmissions

- Normalment es considera que la transmissió que va pels cables és

perfecta però no és així degut a la tecnologia.

1 ASIX - PAX Tipus de transmissions

- Una senyal analògica és una onda continua, que canvia suaument

amb el temps i agafa un nombre infints de valors dins del rang que li permet el medi de transmissió.

1 ASIX - PAX Tipus de transmissions

- Una senyal digital es discreta, es a dir, sols pot agafar un nombre finits

de valors, normalment entre 0 i 1. La transició entre valors es instantània.

1 ASIX - PAX Estàndards de la capa física

- En capa física els estàndards son Hardware i venen determinats per

diferents organismes entre els que es troben els següents

- ISO (Org. Internacional para la Estandarización)
- TIA i EIA (Asociación de Industrias de Telecos y Electrónicas)
- ITU (Unión Internacional de Telecos)
- ANSI (Instituto Nacional Estadounidense de Estándares)
- IEEE (Instituto de Ingenieros Eléctricos y Electrónicos)

1 ASIX - PAX Característiques de la capa física

- Codificació -> Mètode que s’utilitza per convertir una transmissió de

bits de dades en un “codi” predefinit.

- Mètode de senyalització -> Els estàndars de la capa física deuen

definir quin tipus de senyal representa un “1” i quin un “0”. Sol fer-se per voltatge però també es pot fer depenent de la durada de la pulsació.

1 ASIX - PAX Característiques de la capa física

- El ample de banda és la capacitat d’un medi per transportar dades.
- El ample de banda digital medix la quantitat de dades que poden fluir

des d’un lloc fins altre en un període de temps determinat.

- En ocasions, l’ample de banda es pensa com la velocitat a la que

viatgen els bits però no és així. En Ethernet, els bits s’envien a la velocitat de l’electricitat i l’ample de banda medix el número de bits per segon.

1 ASIX - PAX Característiques de la capa física

- Rendiment -> Mesura de transferència de bits pels

medis durant un període determinat.

- En general, no coincideix amb l’ample de banda

especificat degut a

- Quantitat de tràfic
- Tipus de tràfic
- Latència entre dispositius d’oritge i destí
- El rendiment real representa el rendiment sense

aquests factors.

1 ASIX - PAX Característiques de la capa física

- En la figura podem vore diferents interfícies i ports disponibles a un

router Cisco 1941

1 ASIX - PAX Cablejat de coure

- Es transmet la informació com impulsos elèctrics.
- Atenuació: Quan més lluny viatja la senyal, més es deteriora
- Existeixen interferències tant electromagnètiques com de radiofreqüència

que distorsionen i danyen la senyal.

- Es pot reforçar el cable amb blindatge metàl·lic
- També existeixen interferències d’altres cables que estiguen prop (es diu

comunicació).

1 ASIX - PAX Cablejat de coure

1 ASIX - PAX Cablejat de coure

- Es transmet la informació com impulsos elèctrics.
- Atenuació: Quan més lluny viatja la senyal, més es deteriora
- Existeixen interferències tant electromagnètiques (EMI) com de

radiofreqüència (RFI) que distorsionen i danyen la senyal.

- Es pot reforçar el cable amb blindatge metàl·lic
- També existeixen interferències d’altres cables que estiguen prop (es diu

comunicació).

1 ASIX - PAX Cablejat de coure

- Tres tipus de medis de

coure a les xarxes

1 ASIX - PAX Cablejat de coure: UTP

- El UTP és el més utilitzat a les xarxes
- Acaba amb connectors RJ-45
- Utilitzar per interconnectar hosts de xarxa amb dispositius de xarxa (com

switches, hubs, routers, etc)

- Consta de 4 parells de fils codificats per colors que estan trenats entre si per

ajudar a protegir contra les interferències de senyals amb altres fils.

- Els colors ens ajuden a fer el cable

1 ASIX - PAX Cablejat de coure: UTP

1 ASIX - PAX Cablejat de coure: STP

- Proporciona millor protecció contra interferències que UTP
- Més costós i difícil de instal·lar
- Utilitza connector RJ45
- Utilitza 4 parells de fils, cadascun empaquetat amb blindatge metàl·lic

i després tots amb una fulla metàl·lica.

1 ASIX - PAX Cablejat de coure: STP

1 ASIX - PAX Cablejat de coure: Coaxial

- Consta de
- Conductor de coure
- Aïllament de plàstic que protegeix el

cable

- Malla de blindatge similar a la de STP
- Embolcall de plàstic
- Ha estat reemplaçat per UTP en quasi

tots els aspectes.

1 ASIX - PAX Cablejat de coure: Seguretat

- Vulnerables a perills elèctrics

i incendis

1 ASIX - PAX Cablejat UTP

1 ASIX - PAX Cablejat UTP: Estàndards

- Tot el cablejat UTP cumplix amb els estàndards

establerts per la TIA/EIA.

- TIA/EIA-568 estableix els estàndards per al cablejat

d’instal·lacions LAN.

- Cable UTP de categoria 3.
- S’utilitza per a comunicacions de veu.
- Línies telefòniques.

1 ASIX - PAX Cablejat UTP: Connectors

- Els cables UTP acaben amb connector RJ-45
- L’estàndard TIA/EIA-568 descriu les assignacions de la codificació de

colors dels cables als pins (distribució de terminals) per als cables Ethernet.

- Es fonamental que totes les terminacions dels medis de coure siguen

de qualitat per garantir un rendiment òptim amb la tecnologia.

1 ASIX - PAX Cablejat UTP: Connectors

- Els connector RJ-45 és el

component mascle enganxat a l’extrem del cable.

- El socket és el component

femella que es troba bé al dispositiu de xarxa, a la pared o a un panell de connexions.

1 ASIX - PAX Cablejat UTP: Tipus

1 ASIX - PAX Cablejat UTP: Prova

- Mapa de cablejat
- Llargària del cable
- Pèrdua de senyal degut a atenuació
- Crosstalk (diafonia)

1 ASIX - PAX Cablejat de Fibra Òptica: Propietats

- Es gasta en 4 tipus d’industries
- Xarxes empresarials
- Fiber-to-the-home (FTTH)
- Xarxes de llarg radi
- Xarxes per cable submarines
- Transmet dades a través de distàncies més extenses i a amples de banda majors.
- Transmet senyals amb menys atenuació i és totalment immune a EMI i RFI
- Fil no molt més gros que un pèl humà, semiflexible.
- Els bits es codifiquen com polsades de llum

1 ASIX - PAX Cablejat de Fibra Òptica: Disseny

1 ASIX - PAX Cablejat de Fibra Òptica: Disseny

- Embolcall: Protegeix la fibra contra abrasió, humitat, etc.
- Material de reforç: Evita que el cable de fibra s’estira quan es tira d’ell.
- Búfer: S’utilitza per protegir el nucli i revestiment
- Coberta: Actua com un espill que reflexa la llum cap al nucli de la

fibra.

- Nucli. Element de transmissió de llum en el centre de la fibra òptica.

Normalment fet de silici o vidre.

1 ASIX - PAX Cablejat de Fibra Òptica: Tipus

1 ASIX - PAX Cablejat de Fibra Òptica: Connectors

- Per a realitzar operacions dúplex calen 2 fibres ja que la llum sols pot

viatjar en una direcció a través de la fibra òptica.

- Connectors de punta directa (ST)
- Un dels primers
- Bloqueja amb una tapa a rosca

1 ASIX - PAX Cablejat de Fibra Òptica: Connectors

- Connectors subscriptor (SC)
- Connector estàndard
- Utilitzat en multimode i monomode
- Mecanisme de vaivé per la inserció
- Connector Lucent (LC) símplex o dúplex
- Versió més xicoteta que SC.
- Símplex es més popular

1 ASIX - PAX Cablejat de Fibra Òptica: Connectors

- Els colors ens indiquen si són monomode o multimode.
- Els cables deuen estar protegits amb un caputxó quan on es gasten.

1 ASIX - PAX Cablejat de Fibra Òptica: Prova

- La terminació i empalme del cablejat de fibra requereixen

d’equipament i capacitació especials.

- Els problemes solen estar en la terminació.
- Es por realitzar una prova de camp que consisteix en il·luminar un

extrem de la fibra amb una forta llanterna mentre s’observa l’altre extrem.

- Reflectòmetre és la ferramenta més adequada.

1 ASIX - PAX Comparativa UTP vs Fibra

1 ASIX - PAX Medis inalàmbrics (sense fil)

- Wi-Fi: estàndard IEEE 802.11
- Accés múltiple amb prevenció de col·lisions (CSMA/CA)
- Targeta NIC sense fil espera fins que canal estiga lliure.
- Bluetooth: estàndard IEEE 802.15
- PAN
- Emparellament de dispositius en distàncies curtes
- WiMAX: Estàndard IEEE 802.16
- Interoperabilitat mundial
- Accés per banda ampla inalàmbrica

1 ASIX - PAX Medis inalàmbrics (sense fil)

- Una LAN sense fil requereix els següents dispositius de xarxa
- Punt d’accés inalàmbric (AP): concentra senyals inalàmbriques dels usuaris i

es connecta a una infraestructura de xarxa existent basada en coure com pot ser Ethernet.

- Adaptadors NIC inalàmbrics: proporcionen capacitat de comunicació

inalàmbrica a cada host de la xarxa.

- Els routers inalàmbrics solen integrar diferents funcions: router, switch i punt

d’accés en un sol dispositiu.

1 ASIX - PAX Medis inalàmbrics (sense fil)

1 ASIX - PAX Dubtes?

---

## 5.2 U4 P1

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

> **✍️ Práctica: Creación de un cable RJ45**
> Práctica: Creación de un cable RJ45

Contenido Introducción .......................................................................................................... 2 Preparación .......................................................................................................... 2 Desarrollo ............................................................................................................. 3 3.1 Normas .......................................................................................................... 3 3.2 Cables directos y cruzados ............................................................................ 3 3.3 Construcción del cable directo ...................................................................... 4 3.4 Construir un cable cruzado ........................................................................... 8 3.5 Ejemplos de cables mal construidos ............................................................. 9

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

2 / 11

1 Introducción En esta práctica vamos a ver cómo crear un cable de Ethernet directo, aunque con los conocimientos aquí vistos, también se podrá crear un cable cruzado. 2 Preparación Para esta práctica vamos a necesitar:  Cable de red de categoría 5 o superior (recomendable 5e o 6)

 Un par de conectores RJ45

 Una crimpadora.

 Un tester.

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

3 / 11

3 Desarrollo 3.1 Normas Ya se ha estudiado en clase que los cables de Ethernet llevan en su interior 8 cables trenzados dos a dos para intentar anular los campos electromagnéticos producidos por cada cable. Además, cada cable lleva un color para poder distinguirlo del resto.

Cuando se construye un cable directo, es necesario que ambos extremos tengan los cables ordenados siguiendo el mismo patrón o norma. El orden especificado en cada norma no obedece a un criterio arbitrario. La idea es que al eliminar el trenzado, los cables se interfieran lo menos posible los unos con otros.

A día de hoy existen dos normas: T568A y T568B.

Para construir un cable directo, es necesario utilizar la misma norma en ambos extremos del cable. En cambio, para construir un cable cruzado, es necesario utilizar una norma en un extremo del cable y la otra norma en el extremo opuesto. 3.2 Cables directos y cruzados Los cables directos se han utilizado tradicionalmente para conectar dispositivos que realizan distintas funciones (como un PC a un switch, o un switch a un router).

En cambio, los cables cruzados se venían utilizando para conectar dos dispositivos que realizan la misma función (de un PC a otro PC, de un switch a otro switch o de un router a otro router). Afortunadamente, la mayoría de los dispositivos de red modernos (switches y routers) y algunas tarjetas de red (NIC), llevan ya incorporada la función Auto- MDI/MDIX. Gracias a ella, el puerto detecta qué dispositivo está conectado al otro extremo y decide si debe “cruzar” o no de forma automática los pines del conector (se hace por software, obviamente).

Gracias a esta funcionalidad, el uso de cables cruzados ha caído en desuso utilizándose solamente cuando se realiza la conexión entre dispositivos antiguos sin la funcionalidad Auto-MDI/MDIX. EIA/TIA568A EIA/TIA568B

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

4 / 11

3.3 Construcción del cable directo El primer paso es quitar un trozo de cubierta del cable para dejar los pares al aire. Para quitar la cubierta se pueden utilizar unas simples tijeras o la función pela-cables incluida dentro de la crimpadora. Se suele recomendar quitar entre 3-5 cm de cubierta.

Si utilizamos las tijeras, para no dañar los pares del interior, es mejor simplemente debilitar la cubierta con las tijeras e ir forzando la cubierta hasta que salga

Una vez quitada la cubierta, dejamos los pares al aire

El siguiente paso es desenrollar los cables, separarlos y dejarlos rectos estirándolos un poco con los dedos

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

5 / 11

Lo siguiente es ordenar los cables siguiendo una de las dos normas vistas. En las imágenes que aquí se muestran, se hace uso de la norma T568B, pero podéis utilizar la norma T568A indistintamente (eso sí, utilizad la misma norma en ambos cables).

Vamos a cortar ahora el exceso de cable, pero antes debemos calcular cómo de largos deben de quedar los cables.

Todos los cables tienen que llegar al fondo del conector. Para ello es necesario que tengan una longitud mínima de 11mm (mirad la regla). Por precaución, dejaremos un poco más (unos 14mm). Ahora ya podemos cortar.

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

6 / 11

Ahora introducimos los cables dentro del conector tal y como se muestra en la foto (con el rabillo hacia abajo y los conectores metálicos hacia arriba). Es importante que cada cable se quede en su carril y mantengan el orden.

Es de vital importancia empujar fuerte para que TODOS los cables lleguen hasta el final. Si alguno de los cables no llega hasta el final hay riesgo que, tras el crimpado, el conector no “muerda” el cable y por tanto no haya conectividad, con lo que será necesario cortar el conector en este extremo y volver a empezar. Si vemos que no todos llegan al final porque hay un cable más largo que el resto, sacamos todos los cables, igualamos (cortando el cable sobrante) y volvemos introducirlos.

También es importante comprobar que la cubierta entra un poco en el conector y es presionada por una pequeña muesca de plástico (primera flecha por la izquierda en la figura).

Una vez que todos los cables están en el orden que toca, llegan al fondo y comprobamos que la cubierta entra a presión, entonces estamos preparados para crimpar. Para ello introducimos el conector en la crimpadora y apretamos fuertemente.

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

7 / 11

Una vez que ya tenemos el cable crimpado, repetimos el proceso en el otro extremo (misma norma en ambos extremos). Para comprobar el correcto funcionamiento del cable es necesario utilizar un tester. El tester es un aparato que comprueba la conectividad pin a pin en cada uno de los extremos del cable. El funcionamiento es muy simple, conectamos ambos extremos, encendemos el tester y verificamos que cuando se enciende el pin 1 en un extremo también se enciende el pin 1 en el otro. Lo mismo con el pin 2, pin 3, etc. Si se sigue la misma secuencia en ambos extremos, entonces el cable está bien construido.

En caso contrario, algo ha ido mal. Veamos los posibles errores

### 1. Si se enciende un pin en un extremo y se enciende otro pin distinto en el

extremo opuesto es porque ese cable no ocupa la misma posición en ambos extremos del cable. Solución: Mirar qué extremo está mal, cortarlo y rehacer ese extremo.

### 2. Si un pin no se enciende, es porque en uno de los dos extremos (o en los

dos) el cable no ha llegado al final y el conector no ha “mordido” el cable. Solución: Tratar de averiguar en qué extremo el cable no llega al final. Hay veces que es muy difícil de ver. En estos casos la única solución es cortar un extremo, rehacerlo y probar la conectividad en el tester. Si sigue sin encenderse el pin, toca cortar el otro extremo y rehacerlo.

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

8 / 11

3.4 Construir un cable cruzado El proceso de construcción de un cable cruzado es idéntico al de un cable directo con la salvedad que se utiliza una norma en un extremo y la otra norma en el extremo opuesto. A la hora de comprobar el cable con el tester, dependiendo del modelo que tengamos, la comprobación será más sencilla o más complicada. En cualquier caso, siempre podemos comprobar si la secuencia es correcta.

En un cable directo, cuando se enciende el pin 1 también debe encenderse el pin 1 en el otro extremo. Cuando se encienda el pin 2, debe encenderse el pin 2 en el otro extremo. Así sucesivamente. En cambio, cuando el cable es cruzado, la secuencia varía. Basta con que nos fijemos en ambos conectores

Extremo Pin Color Cable Extremo Pin A Blanco-Verde B A Verde B A Blanco-Naranja B A Azul B A Blanco-Azul B A Naranja B A Blanco-Marrón B A Marrón B Nota: No es necesario que el extremo A sea el de la norma T568A. La secuencia es la misma tanto si el extremo A es el de la norma T568A como si es el de la norma T568B.

En el caso de disponer de un multímetro digital, también podríamos comprobar la continuidad pin a pin entre ambos cables siguiendo la tabla anterior. EIA/TIA568A EIA/TIA568B

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

9 / 11

3.5 Ejemplos de cables mal construidos Un cable puede superar la prueba del tester y no por ello estar bien construido. Por ejemplo, en la imagen que viene a continuación, el cable puede que sea funcional, pero acabará dejando de serlo en poco tiempo ya que la cubierta no está dentro del conector y por tanto no protege los cables debidamente, pudiendo partirse el cable justo por el área no protegida. Hay que tener en cuenta que los cables de cobre se parten con facilidad se los doblamos varias veces por el mismo punto.

En este otro ejemplo está claro que el cable no va a ser funcional ya al menos un cable no llega al fondo. Es muy importante cortar todos los cables a la misma medida y a una longitud suficiente para que lleguen al fondo y, a su vez, entre la cubierta un trozo dentro del conector.

El siguiente ejemplo corresponde a un cable bien construido donde la cubierta entra hasta donde debe y los cables llegan todos hasta el fondo

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

10 / 11

4.Conexión de cable UTP con roseta y con patch panel.

El cable UTP también se puede conexional a una roseta en un extremo y a un patch panel en el otro, formando así el enlace permanente (permanent link) que no puede superar los 90 metros en el cableado estructurado.

Siguiendo con la norma T568B construye ahora un enlace permanente conexionando el cable UTP por partes. Los primeros pasos son iguales que para conexionar el RJ45 (abrir el cable y separar los pares).

4.1 Conexión del cable UTP a la roseta hembra

En el lateral de la roseta tenéis el código de colores que se debe usar para conectar los cables según usemos una norma u otra. Nosotros seguiremos la norma T568B.

Roseta hembra Cat5e

Una vez desplegados los cables pasamos a insertar cada uno en el hueco correspondiente haciendo ligera presión con el dedo y completando la inserción con la herramienta ponchadora

> **✍️ Práctica. Creación de un cable RJ45**
> Práctica. Creación de un cable RJ45

Redes locales. SMR

11 / 11

4.2 Conexión del cable UTP al patch panel

Por último, para lograr el enlace permanente conectaremos el otro extremo del cable a la parte posterior del patch panel. Para ello procedemos como en los puntos anteriores desplegando los cables trenzados.

El patch panel es T568B y como tal ya os muestra el código de colores que debéis usar

Parte posterior de un patch panel

Insertad cada cable en el color correspondiente y completad la inserción con la ponchadora.

Cable insertado en el patch panel

Por último, se añadiría un protector para que los cables no se desplazasen. Ya tenéis un enlace permanente.

---

## ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — U4 A1**
> Unitat 4 – Nivell físic
>
> U4 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Un cable de xarxa està construït del següent mode
>
> Una punta En el otro lado Blanco Naranja Naranja Naranja Blanco Naranja Blanco Verde Blanco Verde Azul Azul Blanco Azul Blanco Azul Verde Verde Blanco Marrón Blanco Marrón Marrón Marrón
>
> Si es desitja que el cable siga un cable directe
>
> - Quin és l’error al cable?
> - Quins dispositius es connecten mitjançant cable directe?
>
> ### 2. Altre cable està construït del següent mode
>
> Una punta En el otro lado Blanco Naranja Blanco Naranja Naranja Naranja Blanco Verde Blanco Verde Azul Azul Blanco Azul Blanco Azul Verde Verde Blanco Marrón Blanco Marrón Marrón Marrón
>
> Si es desitja que el cable siga un cable creuat
>
> - Com deurien canviar-se els pins del cable?
> - Quins dispositius es connecten mitjançant cable creuat? Per què?
>
> Unitat 4 – Nivell físic
>
> ### 3. Com ja saps les característiques de transmissió de la fibra òptica son en
>
> general molt millors que el cable de par trenat. Aleshores.
>
> - Per què no gastem sempre fibra òptica i desterrem el coure?
> - En quins casos es preferible l’ús de fibra òptica respecte al par
>
> trenat? Enumera’ls i justifica les teues respostes
>
> - Quina es la diferència entre la fibra multimode i monomode?
> - Nomena un exemple en el que siga preferible l’ús de la fibra
>
> monomode front a la multimode.

> **✍️ Activitat Pràctica 5.2 — U4 A2**
> U4 – A2
>
> Comparativas de cable
>
> Los cables de red pueden ser de varios tipos (UTP, STP, FTP…) y de varias categorías (3, 4, 5, 5a ,6a, 7…. etc).
>
> Busca información sobre cada tipo de cable y completa las siguientes tablas
>
> Si el material de todos los cables es el mismo (cobre), ¿Cómo se consigue aumentar la categoria de los cables?
>
> | Instruccions: Recorda copiar tant l’enunciat com les respostes. Entrega el document en format .pdf. |
> | --- |
>
> | Cable UTP |
> | --- |
> | Descripción de las siglas en inglés |
> | Descripción de las siglas en español |
> | Imagen exterior del cable |
> | Cuándo es conveniente su utilización |
> | Precio del rollo de 100 metros |
>
> | Cable STP |
> | --- |
> | Descripción de las siglas en inglés |
> | Descripción de las siglas en español |
> | Imagen exterior del cable |
> | Cuándo es conveniente su utilización |
> | Precio del rollo de 100 metros |
>
> | Cable FTP |
> | --- |
> | Descripción de las siglas en inglés |
> | Descripción de las siglas en español |
> | Imagen exterior del cable |
> | Cuándo es conveniente su utilización |
> | Precio del rollo de 100 metros |
>
> | Categorías de cables | Categorías de cables | Categorías de cables | Categorías de cables |
> | --- | --- | --- | --- |
> | Categoría | Velocidad máxima (Mbps) | Ancho de banda (Hz) | Precio rollo 100m |
> | 1 |  |  |  |
> | 2 |  |  |  |
> | 3 |  |  |  |
> | 4 |  |  |  |
> | 5 |  |  |  |
> | 5e |  |  |  |
> | 6 |  |  |  |
> | 6a |  |  |  |
