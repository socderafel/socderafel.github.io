---
layout: default
title: "UT6 — Unidad 3 — Llenguatges de Marques i Sistemes de Gestió d'Informació | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UT6 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut06/ut0601.html"
next_label: "6.1 UD3-DTD (Document Type Definition) ➡️"
---

# 📘 UT6 — Unidad 3 (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**6.1 UD3-DTD (Document Type Definition)**](#ut0601) (o [obrir en pàgina individual ➡️](./ut0601.md) )
> - [**6.2 Soluciones Ejercicios Tema 3**](#ut0602) (o [obrir en pàgina individual ➡️](./ut0602.md) )
> - [**✍️ Activitats pràctiques UT6**](#ut06actividades) (o [obrir en pàgina individual ➡️](./ut06actividades.md) )

---

## 6.1 UD3-DTD (Document Type Definition)

> **🔗 Recurs Web: Document Type Definition (DTD) (parte 1)**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=jlls7U3Jn04) ↗️**](https://www.youtube.com/watch?v=jlls7U3Jn04)
>
> Tutorial de la Universidad de Alicante sobre DTD, este vídeo nos sera de ayuda para entender el documento "UD3 DTD.pdf". Solo nos interesa la parte uno y dos del vídeo.
>
> Nota: 
> Hay que recalcar que este vídeo solo esta a modo de ayuda para comprender el DTD, lo importante y lo que se preguntara es lo que hay en el pdf de la unidad.

> **🔗 Recurs Web: Document Type Definition (DTD) (parte 2)**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=Oowo_-loYyY) ↗️**](https://www.youtube.com/watch?v=Oowo_-loYyY)
>
> Tutorial de la Universidad de Alicante sobre DTD, este vídeo nos sera de ayuda para entender el documento "UD3 DTD.pdf". Solo nos interesa la parte uno y dos del vídeo.
>
> Nota: 
> Hay que recalcar que este vídeo solo esta a modo de ayuda para comprender el DTD, lo importante y lo que se preguntara es lo que hay en el pdf de la unidad.

---

Lenguajes de Marcas Tema 3: DTD (Document Type Definition) Vicent Gómez Ciclo Formativo de Grado Superior

DTD, significa Document Type Definition (Definición del tipo de Documento ) Define los elementos y atributos que pueden aparecer en el documento XML. ¿Qué es un DTD? Un DTD puede ser declarado de forma interna, dentro de un documento XML, o como una referencia externa.

Lenguajes de Marcas

### UD 3: DTD (Definición del Tipo de Documento)

Debe seguir la siguiente sintaxis: <!DOCTYPE elemento_raíz [declaración de elementos]> Ejemplo 3.1 Documento XML con una DTD interna: <?xml version="1.0"?> <!DOCTYPE nota [ DTD interna [ <!ELEMENT nota (para, de, cabecera, cuerpo)> <!ELEMENT para (#PCDATA)> <!ELEMENT de (#PCDATA)> <!ELEMENT cabecera (#PCDATA)> <!ELEMENT cuerpo (#PCDATA)> ]> <nota> <para>Jose</para> <de>Natalia</de> <cabecera>Recordatorio</cabecera> <cuerpo>Examen para los alumnos de Primero</cuerpo> </nota> Lenguajes de Marcas

Debe seguir la siguiente sintaxis: <!DOCTYPE elemento_raíz SYSTEM "archivo"> Ejemplo 3.2 <?xml version="1.0"?> <!DOCTYPE nota SYSTEM "nota.dtd"> <nota> < >J </ > nota.xml DTD externa <para>Jose</para> <de>Natalia</de> <cabecera>Recordatorio</cabecera> <cuerpo>Examen para los alumnos de Primero</cuerpo> </nota> --------------------------------------------------------- <!ELEMENT nota (para,de,cabecera,cuerpo)> <!ELEMENT para (#PCDATA)> <!ELEMENT de (#PCDATA)> <!ELEMENT cabecera (#PCDATA)> <!ELEMENT cuerpo (#PCDATA)> nota.dtd Lenguajes de Marcas

Con una DTD, cada archivo XML lleva una descripción de su propio formato. Con una DTD, grupos independientes de personas se ponen de acuerdo para utilizar una DTD estándar para intercambiar datos ¿Por qué una DTD? intercambiar datos. Las aplicaciones pueden utilizar una norma DTD para verificar los datos que se reciben del mundo exterior.

También puede utilizar un DTD para verificar sus propios datos. Lenguajes de Marcas

Los elementos son los bloques de construcción principales tanto para documentos HTML como XML. Ejemplos de elementos HTML son “body" o "table". Ejemplos de elementos XML podría ser "nota" o "mensaje". L l t d t t t t l t Bloques de construcción Los elementos pueden contener texto, otros elementos, o estar vacío. Ejemplos de elementos vacios en HTML son "br" o "img".

Ejemplos

```html
<body>texto</body>
```

<mensaje>texto</mensaje> Lenguajes de Marcas

Los atributos son bloques de construcción que proporcionan información adicional de los elementos. Ejemplos: <img src="imagen.gif"/> <mensaje idioma="es">Hola</mensaje> Bloques de construcción mensaje idioma es Hola /mensaje Algunos caracteres tienen un significado especial para XML. Son las entidades. Se consideran bloques de construcción que son interpretados de forma especial.

> **💡 Apunt Tècnic**
> Ejemplo: "&amp;" -> "&" "&lt;" -> "<" Lenguajes de Marcas

En una DTD, los elementos XML se declaran: <!ELEMENT nombre-elemento categoría> <!ELEMENT nombre-elemento (elemento)> Tipos de elementos y ocurrencia o aparición

- Elementos vacío: EMPTY

Elementos Elementos vacío: EMPTY

- Elemento PCDATA: #PCDATA
- Elemento con cualquier contenido: ANY
- Elemento con hijos: (hijo1,hijo2,…)
- Ocurrencia de un elemento como mínimo (1 o más): (hijo+)
- 0 o más ocurrencia de un elemento: (hijo*)
- 0 o una ocurrencia de un elemento (0 o 1): (hijo?)
- Uno u otro contenido: (hijo1 | hijo2)

Lenguajes de Marcas

Los elementos vacíos se declaran con la palabra clave EMPTY. <!ELEMENT nombre-elemento EMPTY> Ejemplo: <!ELEMENT br EMPTY> <br /> Elementos vacíos y de datos <br /> Los elementos con datos de caracteres se declaran con la clave #PCDATA entre paréntesis <!ELEMENT nombre-elemento (#PCDATA)> Ejemplo

<!ELEMENT mensaje (#PCDATA)> <mensaje>Hola. Soy profesor</mensaje> Lenguajes de Marcas

Los elementos que pueden tener cualquier contenido son declarados con ANY. Puede contener cualquier combinación de datos apta para ser procesada. <!ELEMENT nombre-elemento ANY> Ejemplo: ! Elementos ANY (cualquier contenido) <!ELEMENT nota ANY> <nota> <para>Jose</para> <de>Natalia</de> <cuerpo>Examen de Primero</cuerpo> </nota> Esta clave no se suele utilizar pues es bastante genérica y no especifica los datos que se manejan.

Lenguajes de Marcas

Los elementos hijo declarados deben incluirse como elementos obligatorios y en el mismo orden en el que son declarados. Puede contener cualquier combinación de datos apta para ser procesada. <!ELEMENT elemento (hijo)> Elementos (hijo) o (hijo1, hijo2, …) j <!ELEMENT elemento (hijo1, hijo2, ...)> Ejemplo

<!ELEMENT receta (titulo, ingredientes, proceso)> <!ELEMENT titulo (#PCDATA)> <!ELEMENT ingredientes (#PCDATA)> <!ELEMENT proceso(#PCDATA)> Lenguajes de Marcas

Cuando declaramos y utilizamos el signo + indica que el elemento secundario debe aparecer una o más veces dentro del elemento padre. <!ELEMENT elemento (hijo+)> Ej l Elementos (hijo+) Ejemplo: <!ELEMENT nota (mensaje+)> <nota> <mensaje>Haremos un examen de todo esto</mensaje> <mensaje>Espero que todos aprueben</mensaje> </nota> Lenguajes de Marcas

Cuando declaramos y utilizamos el signo * indica que el elemento secundario debe aparecer cero o más veces dentro del elemento padre. <!ELEMENT elemento (hijo*)> Ejemplo: ! ( j *) Elementos (hijo*) <!ELEMENT nota (mensaje*)> <nota> </nota> <nota> <mensaje>Todos aprueban</mensaje> </nota> Lenguajes de Marcas

Cuando declaramos y utilizamos el signo ? indica que el elemento secundario debe aparecer cero o una vez dentro del elemento padre. <!ELEMENT elemento (hijo?)> Ejemplo: ! ( j ) Elementos (hijo?) <!ELEMENT nota (mensaje?)> <nota> <mensaje>Haremos un examen de todo esto</mensaje> <mensaje>Espero que todos aprueben</mensaje> </nota> El segundo mensaje no sería valido Lenguajes de Marcas

Cuando declaramos y utilizamos el signo | indica que elige uno y solo uno de los elemento secundarios. <!ELEMENT elemento (hijo1|hijo2)> Ejemplo: Elementos (hijo1 | hijo2) Ejemplo: <!ELEMENT nota (para,de,asunto,(mensaje | cuerpo))> <nota> <para>Jose</para> <de>Natalia</de> <asunto>Recordatorio</asunto> <cuerpo>Enviar documentos de los alumnos</cuerpo> </nota> Lenguajes de Marcas

Podemos combinar todos las claves para formar características más complejas. <!ELEMENT elemento (#PCDATA | hijo1 | hijo2 | hijo3)*> Ejemplos: Elementos. Contenido mixto j p <!ELEMENT nota (#PCDATA | para | de | asunto | mensaje | cuerpo)*> <nota> <para>Jose</para> <para>Maria</para> <de>Natalia</de> <cuerpo>Excursion alumnos</cuerpo> </nota> <nota> para Antonio </nota> Lenguajes de Marcas

Ejemplo 3.3 <?xml version="1.0"?> <!DOCTYPE nota [ <!ELEMENT nota (para,de,cabecera,cuerpo)> <!ELEMENT para (#PCDATA)> <!ELEMENT de (#PCDATA)> <!ELEMENT cabecera (#PCDATA)> Ejercicios <!ELEMENT cuerpo (#PCDATA)> ]> <nota> <para>Jose</para> <de>Natalia</de> <cabecera>Recordatorio</cabecera> <cuerpo>Examen para los alumnos de Primero</cuerpo> </nota> Lenguajes de Marcas

Los atributos permiten añadir información adicional a los elementos del documento. Los atributos no pueden contener subatributos. En una DTD, los atributos se declaran con una declaración ATTLIST. El formato es: Atributos <!ATTLIST elemento atributo tipo_atributo valor> Ejemplo

<!ATTLIST pago tipo CDATA "cheque"> <pago tipo="cheque" /> Lenguajes de Marcas

Los valores de los atributos pueden ser: valor: Valor predeterminado del atributo #REQUIRED: El atributo es necesario #IMPLIED: El atributo no es necesario #FIXED valor: El valor del atributo es fijo Atributos Ejemplos: <!ATTLIST cuadrado ancho CDATA "0"> <cuadrado ancho="100" /> <!ATTLIST persona numero CDATA #REQUIRED> <persona numero="5677" /> <persona /> Error <!ATTLIST contacto fax CDATA #IMPLIED> <contacto fax="555-667788" /> <contacto /> Correcto Lenguajes de Marcas

Los atributos, a diferencia de los elementos, solo pueden especificarse una vez y en cualquier orden. Los tipos de los atributos pueden ser: Datos de tipo carácter: CDATA Atributos El nombre de una entidad (que debe declararse en el DTD): ENTITY Lista de nombres de entidades (que deben declararse en el DTD): ENTITIES Enumerado

Cualquier valor de una lista: (valor1|valor2|…) Lenguajes de Marcas

> **💡 Apunt Tècnic**
> Ejemplo: Se quiere definir una regla que valide la existencia de un elemento <semaforo>, de contenido vacío, con un atributo color cuyos posibles valores sean rojo, naranja y verde. El valor por defecto será verde. Atributos Lenguajes de Marcas

> **💡 Apunt Tècnic**
> Ejemplo: Se quiere definir una regla que valide la existencia de un elemento <semaforo>, de contenido vacío, con un atributo color cuyos posibles valores sean rojo, naranja y verde. El valor por defecto será verde. Atributos <!ELEMENT semaforo EMPTY> <!ATTLIST semaforo color (rojo | naranja | verde) “verde” > Lenguajes de Marcas

Los tipos de los atributos pueden ser: ... Tipo Identificador único. Un elemento no puede tener 2 atributos de tipo ID, además el valor debe ser único: ID Atributos El valor de un atributo ID de otro elemento: IDREF Múltiples IDs de otros elementos separados por espacios

IDREFS … Lenguajes de Marcas

> **💡 Apunt Tècnic**
> Ejemplo: Se quiere representar un elemento empleado que tenga dos atributos, idEmpleado e idEmpleadoJefe. El primero será de tipo ID y carácter obligatorio, y el segundo de tipo IDREF y carácter optativo. Atributos Lenguajes de Marcas

> **💡 Apunt Tècnic**
> Ejemplo: Se quiere representar un elemento empleado que tenga dos atributos, idEmpleado e idEmpleadoJefe. El primero será de tipo ID y carácter obligatorio, y el segundo de tipo IDREF y carácter optativo. !ELEMENT l d ( b llid ) Atributos <!ELEMENT empleado (nombre, apellido)> <!ATTLIST empleado idEmpleado ID #REQUIRED idEmpleadoJefe IDREF #IMPLIED > Lenguajes de Marcas

Los tipos de los atributos pueden ser: ... Datos de tipo carácter restringido (alfanuméricos, punto, guión, subrayado y dos puntos): NMTOKEN Atributos Una lista de valores tipo carácter restringido: NMTOKENS Cualquier valor de una lista de notaciones: NOTATION Lenguajes de Marcas

> **💡 Apunt Tècnic**
> Ejemplo: Se quiere definir un atributo de tipo NMTOKEN de carácter obligatorio. En el siguiente DTD, la declaración del elemento <rio> y su atributo pais es: <!ELEMENT rio (nombre)> <!ATTLIST rio pais NMTOKEN #REQUIRED > En el siguiente fragmento XML, el valor del atributo país es válido con respecto a la Atributos regla anteriormente definida

<rio pais=”EEUU”> <nombre>Misisipi</nombre> </rio> En el siguiente fragmento XML, el valor del atributo país NO es válido con respecto a la regla anteriormente definida por contener espacios en su interior: <rio pais=”Estados Unidos”> <nombre>Misisipi</nombre> </rio> Lenguajes de Marcas

Como distinguir entre usar elementos o atributos Usar los atributos lo menos posible. Los atributos no pueden tener varios valores ni contener otros (atributos/elementos secundarios) Los atributos no son fácilmente extensibles (para futuros ¿Elementos o Atributos?

Los atributos no son fácilmente extensibles (para futuros cambios). Los atributos son más difíciles de manipular por código del programa. Los valores de los atributos no son fáciles de probar con una DTD. Sólo utilizar los atributos como identificador único. Lenguajes de Marcas

Las entidades son variables utilizadas para definir accesos directos a texto o caracteres especiales. Aunque existen algunas entidades predefinidas podemos crear nuestras propias entidades. <!ENTITY entidad valor> Entidades Se referencia como: &entidad; Ejemplo: <!ENTITY escritor "Donald Duck."> <!ENTITY copyright "Copyright W3Schools."> <autor>&escritor;&copyright;</autor> <!ENTITY escritor SYSTEM "http://www.w3schools.com/entities.dtd"> <autor>&escritor;&copyright;</autor> Lenguajes de Marcas

Ejemplo 3.4 <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE fecha [ <!ENTITY copy "&#169;"> <!ELEMENT fecha (hora,minuto,segundo,formato,copyright)> <!ATTLIST fecha zona CDATA #REQUIRED> <!ELEMENT hora (#PCDATA)> <!ELEMENT minuto (#PCDATA)> <!ELEMENT segundo (#PCDATA)> <!ELEMENT fo mato (#PCDATA)> Ejercicios <!ELEMENT formato (#PCDATA)> <!ELEMENT copyright (#PCDATA)> ]> <fecha zona="PST"> <hora>15</hora> <minuto>45</minuto> <segundo>78</segundo> <formato>HH:MM:SS</formato> <copyright>&copy; Patxi &amp; Cia</copyright> </fecha> Lenguajes de Marcas

---

## 6.2 Soluciones Ejercicios Tema 3

Aquí tenéis un pdf con las soluciones de los ejercicios del tema 3.

LMSGI Ejercicios tema 3 XML DTD Nombre y apellidos del Alumno: Especialidad (ASIX o DAW)

Ejercicio1 Escribir la DTD que permita validar el documento XML que se muestra a continuación. Hacer dos versiones en cada caso: DTD externa e interna. DOCUMENTO 1: <?xml version="1.0" encoding="ISO-8859-1"?> <!DOCTYPE nota SYSTEM "nota.dtd"> <nota> <para>Pedro</para> <de>Laura</de> <titulo>Recordatorio</titulo> <contenido>A las 7:00 en la puerta del teatro</contenido> </nota> Solución interna

<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE nota [ <!ELEMENT nota (para*, de, titulo, contenido)> <!ELEMENT para (#PCDATA)> <!ELEMENT de (#PCDATA)> <!ELEMENT titulo (#PCDATA)> <!ELEMENT contenido (#PCDATA)> ]> <nota> <para>Pedro</para> <de>Laura</de> <titulo>Recordatorio</titulo> <contenido>A las 7:00 en la puerta del teatro</contenido> </nota> Solución externa

Hay dos documentos un .dtd ("DTDbasico_11_mensajeDTD.dtd") y un .xml (“DTDbasico_11_mensajeXML.xml”) DTDbasico_11_mensajeDTD.dtd: <!ELEMENT nota (para*, de, titulo, contenido)> <!ELEMENT para (#PCDATA)> <!ELEMENT de (#PCDATA)> <!ELEMENT titulo (#PCDATA)> <!ELEMENT contenido (#PCDATA)> DTDbasico_11_mensajeXML.xml

<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE nota SYSTEM "DTDbasico_11_mensajeDTD.dtd"> <nota>

<para>Pedro</para> <de>Laura</de> <titulo>Recordatorio</titulo> <contenido>A las 7:00 en la puerta del teatro</contenido> </nota> Ejercicio2 a)Los siguientes documentos no son válidos porque contienen uno o dos errores (los errores no están en la DTD interna). Corrija los errores.

<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE persona [ <!ELEMENT persona EMPTY> <!ATTLIST persona nombre CDATA #IMPLIED> ]> <persona dni="03141592E" /> Solución: <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE persona [ <!ELEMENT persona EMPTY> <!ATTLIST persona nombre CDATA #IMPLIED> ]> <persona nombre="03141592E" /> b)Los errores están en la DTD interna <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE inventores [ <!ELEMENT inventores> <!ELEMENT inventor EMPTY> <!ATTLIST inventor invento CDATA #REQUIRED> <!ATTLIST inventor nombre ID #REQUIRED> ]> <inventores> <inventor nombre="Robert Adler" invento="Mando a distancia" /> <inventor nombre="Laszlo Josef Biro" invento="Bolígrafo" /> <inventor nombre="Josephine Garis Cochran" invento="Lavaplatos" /> <inventor invento="Fuego" /> </inventores> Solución

<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE inventores [ <!ELEMENT inventores (inventor)* >

<!ELEMENT inventor EMPTY> <!ATTLIST inventor invento CDATA #REQUIRED> <!ATTLIST inventor nombre CDATA #IMPLIED> ]> <inventores> <inventor nombre="Robert Adler" invento="Mando a distancia" /> <inventor nombre="Laszlo Josef Biro" invento="Bolígrafo" /> <inventor nombre="Josephine Garis Cochran" invento="Lavaplatos" /> <inventor invento="Fuego" /> </inventores> Ejercicio3 Se quiere definir un lenguaje de marcas para representar los resultados de una liga de fútbol. La información que se quiere almacenar de cada partido es

El nombre del equipo local El nombre del equipo visitante Los goles marcados por el equipo local Los goles marcados por el equipo visitante Escribe tres documentos que incluyan los siguientes resultados: Nottingham Presa: 0 - Inter de Mitente: 1 Vodka Juniors: 3 - Sparta da Risa: 3 Water de Munich: 4 - Esteaua es del grifo: 2 Cada documento incluirá un DTD diferente para representar ese lenguaje de marcas

a)Una DTD en la que no haya atributos, si no únicamente etiquetas. b)Una DTD en la que los goles sean atributos. c)Una DTD en la toda la información se guarde en forma de atributos. Solución

- <?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE partidos [ <!ELEMENT partidos (partido*)> <!ELEMENT partido (eqLocal,eqVisitante)> <!ELEMENT eqLocal (nombre,goles)> <!ELEMENT eqVisitante (nombre,goles)> <!ELEMENT nombre (#PCDATA)> <!ELEMENT goles (#PCDATA)> ]> <partidos> <partido> <eqLocal> <nombre>Nottingham Presa</nombre>

<goles>0</goles> </eqLocal> <eqVisitante> <nombre>Inter de Mitente</nombre> <goles>1</goles> </eqVisitante> </partido> <partido> <eqLocal> <nombre>Vodka Juniors</nombre> <goles>3</goles> </eqLocal> <eqVisitante> <nombre>Sparta da Risa</nombre> <goles>3</goles> </eqVisitante> </partido> <partido> <eqLocal> <nombre>Water de Munich</nombre> <goles>4</goles> </eqLocal> <eqVisitante> <nombre>Esteaua es del grifo</nombre> <goles>2</goles> </eqVisitante> </partido> </partidos> b)<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE partidos [ <!ELEMENT partidos (partido*)> <!ELEMENT partido (eqLocal,eqVisitante)> <!ELEMENT eqLocal (#PCDATA)> <!ATTLIST eqLocal goles CDATA #REQUIRED> <!ELEMENT eqVisitante (#PCDATA)> <!ATTLIST eqVisitante goles CDATA #REQUIRED> ]> <partidos> <partido> <eqLocal goles="0">Nottingham Presa</eqLocal> <eqVisitante goles="1">Inter de Mitente</eqVisitante> </partido> <partido> <eqLocal goles="3">Vodka Juniors</eqLocal> <eqVisitante goles="3">Sparta da Risa</eqVisitante> </partido> <partido> <eqLocal goles="4">Water de Munich</eqLocal>

<eqVisitante goles="2">Esteaua es del grifo</eqVisitante> </partido> </partidos> c)<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE partidos [ <!ELEMENT partidos (partido*)> <!ELEMENT partido (equipo,equipo)> <!ELEMENT equipo EMPTY> <!ATTLIST equipo tipo (local|visitante) #REQUIRED> <!ATTLIST equipo nombre CDATA #REQUIRED> <!ATTLIST equipo goles CDATA #REQUIRED> ]> <partidos> <partido> <equipo tipo="local" nombre="Nottingham Presa" goles="0" /> <equipo tipo="visitante" nombre="Inter de Mitente" goles="1" /> </partido> <partido> <equipo tipo="local" nombre="Vodka Juniors" goles="3" /> <equipo tipo="visitante" nombre="Sparta da Risa" goles="3" /> </partido> <partido> <equipo tipo="local" nombre="Water de Munich" goles="4" /> <equipo tipo="visitante" nombre="Esteaua es del grifo" goles="2" /> </partido> </partidos>

---

## ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — Ejercicios XML DTD**
> Fecha de entrega el 19 de Noviembre a las 00 horas.
>
> LMSGI Ejercicios Tema 3 XML DTD Nombre y apellidos del Alumno: Especialidad (ASIX o DAW)
>
> Ejercicio1 Escribir la DTD que permita validar el documento XML que se muestra a continuación. Hacer dos versiones en cada caso: DTD externa e interna. DOCUMENTO 1: <?xml version="1.0" encoding="ISO-8859-1"?> <!DOCTYPE nota SYSTEM "nota.dtd"> <nota> <para>Pedro</para> <de>Laura</de> <titulo>Recordatorio</titulo> <contenido>A las 7:00 en la puerta del teatro</contenido> </nota> Ejercicio2 a)El siguiente documento no es válido porque contienen uno o dos errores (los errores no están en la DTD interna). Corrija los errores (Marcando en rojo).
>
> <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE persona [ <!ELEMENT persona EMPTY> <!ATTLIST persona nombre CDATA #IMPLIED> ]> <persona dni="03141592E" /> b)Los errores están en la DTD interna. Corrija los errores (Marcando en rojo). <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE inventores [
>
> <!ELEMENT inventores>
>
> <!ELEMENT inventor EMPTY>
>
> <!ATTLIST inventor invento CDATA #REQUIRED>
>
> <!ATTLIST inventor nombre ID #REQUIRED> ]> <inventores>
>
> <inventor nombre="Robert Adler" invento="Mando a distancia" />
>
> <inventor nombre="Laszlo Josef Biro" invento="Bolígrafo" />
>
> <inventor nombre="Josephine Garis Cochran" invento="Lavaplatos" />
>
> <inventor invento="Fuego" /> </inventores>
>
> Ejercicio3 Se quiere definir un lenguaje de marcas para representar los resultados de una liga de fútbol. La información que se quiere almacenar de cada partido es: El nombre del equipo local El nombre del equipo visitante Los goles marcados por el equipo local Los goles marcados por el equipo visitante Escribe tres documentos que incluyan los siguientes resultados
>
> Nottingham Presa: 0 - Inter de Mitente: 1 Vodka Juniors: 3 - Sparta da Risa: 3 Water de Munich: 4 - Esteaua es del grifo: 2 Cada documento incluirá un DTD diferente para representar ese lenguaje de marcas: a)Una DTD en la que no haya atributos, si no únicamente etiquetas.
>
> b)Una DTD en la que los goles sean atributos. c)Una DTD en la toda la información se guarde en forma de atributos.
