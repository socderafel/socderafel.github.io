---
layout: default
title: "UD4 — Validació amb XSD (XML Schema Definition) · Unitat Completa"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UT5 Completa"
prev_url: "../ut06/ut06actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT6"
next_url: "../ut05/ut0501.html"
next_label: "5.1 UD4-XSD (XML Schema Definition) ➡️"
---

# 📘 UD4 — Validació amb XSD (XML Schema Definition) (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 UD4-XSD (XML Schema Definition)**](./ut0501.md)
- [**5.2 Ejercicios resueltos XML Schema**](./ut0502.md)
- [**✍️ Activitats pràctiques UT5**](./ut05actividades.md)

---

# 5.1 UD4-XSD (XML Schema Definition)

> **🔗 Recurs Web: XML Schema: Introducción**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=O28ZrZTCAA4) ↗️**](https://www.youtube.com/watch?v=O28ZrZTCAA4)
>
> Tutorial de la Universidad de Alicante sobre XML Schema. Este vídeo solo nos servirá como ayuda para entender la Unidad 4. En el examen entrara el contenido del pdf del tema.

> **🔗 Recurs Web: XML Schema: Estructura**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=JKhfLpkVh3o) ↗️**](https://www.youtube.com/watch?v=JKhfLpkVh3o)
>
> Tutorial de la Universidad de Alicante sobre XML Schema. Este vídeo solo nos servirá como ayuda para entender la Unidad 4. En el examen entrara el contenido del pdf del tema.

> **🔗 Recurs Web: XML Schema: Diseño**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=wC1r_CGutNk) ↗️**](https://www.youtube.com/watch?v=wC1r_CGutNk)
>
> Tutorial de la Universidad de Alicante sobre XML Schema. Este vídeo solo nos servirá como ayuda para entender la Unidad 4. En el examen entrara el contenido del pdf del tema.

---

Lenguajes de Marcas Tema 4: XML Schema Vicent Gómez Ciclo Formativo de Grado Superior

Un esquema XML, al igual que un DTD, describe la estructura de un documento XML. Los esquemas XML están escritos en XML. Con el esquema XML, los documentos XML pueden llevar a una descripción de su propio formato. Los esquemas XML son extensibles; permiten añadir tipos de d d XML Ti i d ¿Qué es un XML Schema?

datos de soporte esquemas XML. Tiene soporte para tipos de datos: • Permite describir el contenido de un documento. • Es más fácil definir restricciones sobre los datos. • Es más fácil para validar la exactitud de los datos • Permite convertir entre diferentes tipos de datos Lenguajes de Marcas

### UD 4: XML Schema

Estructura de XML Schema <?xml version="1.0" encoding= “UTF-8" ?> <schema xmlns="http://www.w3.org/2001/XMLSchema"> <element name=“elementoRaiz"> … Lenguajes de Marcas

… </element> </schema>

Un XML Schema es una alternativa XML a una DTD. Ejemplo 4.1 <xs:element name="nota"> <xs:complexType> <xs:sequence> <xs:element name="de" type="xs:string"/> <xs:element name="para" type="xs:string"/> <xs:element name="asunto" type="xs:string"/> XML Schema <xs:element name= asunto type= xs:string /> <xs:element name="mensaje" type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> <xs:element name="nota"> define el elemento llamado "nota" <xs:complexType> El elemento "nota" es un tipo complejo <xs:sequence> tipo complejo, secuencia de elementos <xs:element name="" type=""> un elemento y su tipo Lenguajes de Marcas

Ejemplo 4.1 (cont) <xs:element name="de" type="xs:string"/> el elemento "de" es de tipo string (texto) <xs:element name="para" type="xs:string"/> el elemento "para" es de tipo string (texto) <xs:element name="asunto" type="xs:string"/> el elemento "asunto" es de tipo string (texto) XML Schema el elemento asunto es de tipo string (texto) <xs:element name="mensaje" type="xs:string"/> el elemento "mensaje" es de tipo string (texto) El lenguaje de esquema XML también se conoce como definición de esquema XML (XSD).

Lenguajes de Marcas

Un XML Schema: • Define los elementos y los atributos que pueden aparecer en un documento. • Define los elementos secundarios de otros. • Define el número y el orden de los elementos XML Schema secundarios de los elementos. • Define si un elemento está vacío o puede incluir texto u otro valor.

• Define los tipos de datos de elementos y atributos • Define los valores por defecto y fijos para elementos y atributos. Lenguajes de Marcas

Un esquema contiene elementos que pueden ser • Simples (simpleType): No pueden tener ni elementos ni atributos. • Complejos (complexType): Pueden contener otros elementos y atributos Estructura de un Esquema XML elementos y atributos. <xs:element name="nota"> <xs:complexType> <xs:sequence> <xs:element name=“para" type="xs:string"/> <xs:element name=“de" type="xs:string"/> <xs:element name=“asunto" type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> Elemento complejo Elementos Simple Lenguajes de Marcas

Un elemento simple es un elemento XML que sólo contiene texto. (No puede contener otros elementos o atributos) . <xs:element nombre="xxx" type="yyy"/> Los tipos más usados son: XSD: Elementos simples Los tipos más usados son: xs:string cadena de caracteres (token) xs:decimal números reales (float, double,…) xs:integer números enteros (short, long, byte,…) xs:boolean booleano xs:date fecha xs:time hora Lenguajes de Marcas

Ejemplo 4.2 <xs:element name="nombre" type="xs:string"/> <xs:element name="edad" type="xs:integer"/> <xs:element name="fecha" type="xs:date"/> / XSD: Elementos simples <nombre>Jose</nombre> <edad>25</edad> <fecha>15-03-2012</fecha> Lenguajes de Marcas

Podemos asignar valores por defecto (default) y valores fijos (fixed) a elementos simples <xs:element name="color" type="xs:string" default="rojo"/> XSD: Valores de los elementos <xs:element name="color" type="xs:string" fixed="rojo"/> Lenguajes de Marcas

Podemos crear nuestros propios tipos de datos personalizados para después poder utilizarlos tantas veces como queramos. Se declaran al principio del documento XSD, antes de declarar el elemento raiz Ejemplo: Definición: XSD: Tipos personalizados <xs:simpleType name="tipoSexo"> <xs:restriction base="xs:string"> <xs:enumeration value="M"/> <xs:enumeration value="F"/> </xs:restriction> </xs:simpleType> Uso

<xs:element name="sexo" type="tipoSexo"/> Lenguajes de Marcas

Podemos restringir valores (restriction) para los elementos o atributos XML. Ejemplo 4.3 El valor de la temperatura no puede ser inferior a -20 o superior a 40: XSD: Restricciones superior a 40: <xs:element name="temperatura"> <xs:simpleType> <xs:restriction base="xs:integer"> <xs:minInclusive value="-20"/> <xs:maxInclusive value="40"/> </xs:restriction> </xs:simpleType> </xs:element> Lenguajes de Marcas

Podemos limitar el contenido a un conjunto de valores aceptables, usando la restricción de enumeración. Ejemplo 4.4 Los únicos valores aceptables son: Lunes, Miércoles y Viernes: XSD: Restricciones <xs:element name="semana"> <xs:simpleType name="diaSemana"> <xs:restriction base="xs:string"> <xs:enumeration value="Lunes"/> <xs:enumeration value="Miércoles"/> <xs:enumeration value="Viernes"/> </xs:restriction> </xs:simpleType> </xs:element> Lenguajes de Marcas

Podemos usar expresiones regulares o patrones para afinar la restricción. Ejemplo 4.5 <xs:element name="carta"> <xs:simpleType name="diaSemana"> <xs:restriction base="xs:string"> < tt l "[ ]"/> XSD: Restricciones <xs:pattern value="[a-z]"/> </xs:restriction> </xs:simpleType> </xs:element> Otros patrones

<xs:pattern value="\d"/> cualquier digito <xs:pattern value="[0-9]+[A-Z]"/> 1 o más números y seguido de una letra mayúscula Lenguajes de Marcas

Podemos restringir la longitud de un elemento. Ejemplo 4.6 <xs:element name="dni"> <xs:simpleType> <xs:restriction base="xs:string"> <xs:length value="10"/> XSD: Restricciones g / </xs:restriction> </xs:simpleType> </xs:element> Otros patrones: xs:minLength establece un mínimo en la longitud xs:maxLength establece un máximo en la longitud Lenguajes de Marcas

enumeration: Define una lista de valores aceptables fractionDigits: Número máximo de decimales permitidos. igual o mayor que cero length Especifica el número exacto de caracteres o elementos de lista permitidos. Debe ser igual o mayor que cero maxExclusive Especifica límite superior a un valor numérico (excluido) maxInclusive Especifica límite superior a un valor numérico (incluido) maxLength Especifica el número máximo de caracteres o elementos de lista permitidos Debe ser igual o mayor que cero XSD: Restricciones permitidos. Debe ser igual o mayor que cero minExclusive Especifica límite inferior a un valor numérico (excluido) minInclusive Especifica límite inferior a un valor numérico (incluido) minLength Especifica el número mínimo de caracteres o elementos de lista permitidos. Debe ser igual o mayor que cero pattern Define la secuencia exacta de caracteres que son aceptables totalDigits Especifica el número máximo de dígitos permitidos. Debe ser mayor que cero whiteSpace Especifica como se manejan los espacios en blanco (los saltos de línea, tabuladores, espacios y retornos de carro). Valores

preserve, replace y collapse. Lenguajes de Marcas

Los elementos con atributos son elementos complejos. Los atributos se declaran como tipos simples (xs:string, xs:decimal, xs:integer,...) Los atributos tienen el formato: <xs:attribute name="xxx" type="yyy"/> XSD: Atributos <xs:attribute name xxx type yyy /> Ejemplo 4.7 <curso letra="A">1</curso> <xs:element name="curso" type="xs:integer"/> <xs:attribute name="letra" type="xs:string"/> Lenguajes de Marcas

Los atributos pueden tener un valor fijo: <xs:attribute name="letra" type="xs:string" fixed="A"/> Pueden tener un valor por defecto: <xs:attribute name="letra" type="xs:string" default="A"/> XSD: Restricciones Los atributos pueden ser obligatorios: <xs:attribute name="letra" type="xs:string" use="required"/> Por defecto el atributo será opcional (optional) Lenguajes de Marcas

Son elementos XML que contienen otros elementos y/o atributos. Hay cuatro tipos de elementos complejos: • Elementos con contenido vacío, pero con atributos XSD: Elementos Complejos atributos. • Elementos con contenido y atributos. • Elementos que solo contienen hijos. • Elementos que contienen elementos, texto y atributos (mixto).

Lenguajes de Marcas

Los elementos vacíos con atributos. Ejemplo 4.8 <xs:element name="producto"> <xs:complexType> <xs:attribute name="id" type="xs:positiveInteger"/> </xs:complexType> XSD: Elementos Complejos </xs:complexType> </xs:element> <producto id="1234" /> <producto id="A24" /> Incorrecto Lenguajes de Marcas

Los elementos con contenido (texto) y atributos. Ejemplo 4.9 <xs:element name="nombre" > <xs:complexType> <xs:simpleContent> <xs:extension base="xs:string"> Contenido simple, solo valor XSD: Elementos Complejos <xs:attribute name="repetidor" type="xs:string" /> </xs:extension> </xs:simpleContent> </xs:complexType> </xs:element> <nombre repetidor="no">Andrés</nombre> Lenguajes de Marcas

Los elementos que solo contienen otros elementos. Ejemplo 4.10 <xs:element name="alumno"> <xs:complexType> <xs:sequence> <xs:element name "nombre" type "xs:string"/> Una secuencia (orden) de elementos XSD: Elementos Complejos <xs:element name="nombre" type="xs:string"/> <xs:element name="apellido" type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> <alumno> <nombre>Pedro</nombre> <apellido>Marín</apellido> </alumno> En ese orden Lenguajes de Marcas

Los elementos con contenido mixto. Ejemplo 4.11 <xs:element name=“carta"> <xs:complexType mixed="true" > <xs:sequence> <xs:element name=“nombre" type="xs:string"/> <xs:element name=“pedido" type="xs:positiveInteger"/> XSD: Elementos Complejos p yp p g / <xs:element name=“fechaenvio" type="xs:date"/> </xs:sequence> </xs:complexType> </xs:element> <carta> Estimado Sr.<nombre>Juan León</nombre>. Su pedido <pedido>1032</pedido> será enviado el <fechaenvio>25-03- 2012</fechaenvio>.

</carta> Lenguajes de Marcas

Los indicadores sirven para controlar cómo los elementos pueden aparecer y en que número. Hay 7 indicadores: 3 Indicadores de orden: Todo (all), Elección (choice) y Secuencia XSD: Indicadores ( ), ( ) y (sequence) 2 Indicadores de ocurrencia: maxOccurs y minOccurs 2 Indicadores de grupo

group y attributeGroup Lenguajes de Marcas

Los elementos aparecen una sola vez pero no importa el orden. Ejemplo 4.12 <xs:element name="persona"> l XSD: Indicadores (all) <xs:complexType> <xs:all> <xs:element name=“nombre" type="xs:string"/> <xs:element name=“apellidos" type="xs:string"/> </xs:all> </xs:complexType> </xs:element> Lenguajes de Marcas

Solo aparece uno de los elementos que contiene. Ejemplo 4.13 <xs:element name="persona"> <xs:complexType> <xs:choice> XSD: Indicadores (choice) <xs:choice> <xs:element name="empleado" type="empleado"/> <xs:element name="miembro" type="miembro"/> </xs:choice> </xs:complexType> </xs:element> Lenguajes de Marcas

Los elementos aparecen en el mismo orden al especificado. Ejemplo 4.14 <xs:element name="persona"> XSD: Indicadores (sequence) <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string"/> <xs:element name="apellidos" type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> Lenguajes de Marcas

Sirve para especificar el número máximo y mínimo de veces que puede aparecer un elemento hijo. El atributo maxOccurs puede tomar el valor “unbounded”, que indica que no existe ningún límite. Ejemplo 4.15 XSD: Indicadores (maxOccurs y minOccurs) <xs:element name="persona"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string"/> <xs:element name="nombre_hijo" type="xs:string" minOccurs="1" maxOccurs="10" /> </xs:sequence> </xs:complexType> </xs:element> Lenguajes de Marcas

Se utiliza para crear conjuntos de elementos relacionados. <xs:group name="Nombre_grupo"> ... </xs:group> XSD: Indicadores (group) Ejemplo 4.16 <xs:group name="grupoAlumno"> <xs:sequence> <xs:element name="nombre" type="xs:string"/> <xs:element name="apellido" type="xs:string"/> <xs:element name="cumpleanyos" type="xs:date"/> </xs:sequence> </xs:group> Lenguajes de Marcas

Ejemplo 4.16 (cont) <xs:element name="alumno" > <xs:complexType> <xs:sequence> <xs:group ref="grupoAlumno"/> <xs:element name="ciudad" type="xs:string"/> XSD: Indicadores (group) </xs:sequence> </xs:complexType> </xs:element> <alumno> <nombre>Alberto</nombre> <apellido>Gil</apellido> <cumpleanyos>25-07-2017</cumpleanyos> <ciudad>Cuenca</ciudad> </alumno> Lenguajes de Marcas

Sirve para crear grupos de atributos. <xs:attributeGroup name="Nombre_grupo"> ... </xs:attributeGroup> XSD: Indicadores (attributeGroup) Ejemplo 4.17 <xs:attributeGroup name="grupoAtributosAlumno"> <xs:sequence> <xs:element name="nombre" type="xs:string"/> <xs:element name="apellido" type="xs:string"/> <xs:element name="cumpleanyos" type="xs:date"/> </xs:sequence> </xs:attributeGroup> Lenguajes de Marcas

Permite añadir elementos sin especificar. Ejemplo 4.18 <xs:element name="persona"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string"/> < l t " llid " t " t i "/> XSD: Modelo de contenido (any) <xs:element name="apellido" type="xs:string"/> <xs:any minOccurs="0"/> </xs:sequence> </xs:complexType> </xs:element> <persona> <nombre>Yolanda<nombre> <apellido>Martos<apellido> <ciudad>Badajoz<ciudad> </persona> Permite añadir un nuevo elemento detrás del apellido Lenguajes de Marcas

Permite añadir atributos no declarados. Ejemplo 4.19 <xs:element name="persona"> <xs:complexType> < tt ib t " b " t " t i "/> XSD: Modelo de contenido (anyAttributes) <xs:attribute name="nombre" type="xs:string"/> <xs:anyAttribute minOccurs="0"/> </xs:complexType> </xs:element> <persona nombre="Yolanda" apellido="Martos" ciudad="Badajoz" /> Permite añadir más atributos Lenguajes de Marcas

---

# 5.2 Ejercicios resueltos XML Schema

El ultimo ejercicio el de complejo1, es un enunciado muy abierto y se podía interpretar de muchas maneras. A la hora de corregir lo tuve en cuenta.

Ejercicio simple1 Crear un documento simple1.xml que contenga los datos personales de un alumno: <?xml version="1.0" encoding="UTF-8"?> <alumno xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance xsi:noNamespaceSchemaLocation="simple1.xsd"> <nombre>Roberto</nombre> <dni>28542345</dni> <direccion>San José 2</direccion> <edad>22</edad> <telefono>9659434523</telefono> </alumno> Crear el documento simple1.xsd para validar simple1.xml.

Solución: simple1.xsd <?xml version="1.0"?> <schema xmlns="http://www.w3.org/2001/XMLSchema"> <element name="alumno"> <complexType> <sequence> <element name="nombre" type="string" /> <element name="dni" type="string" /> <element name="direccion" type="string" /> <element name="edad" type="integer" /> <element name="telefono" type="string" /> </sequence> </complexType> </element> </schema>

Ejercicio simple2 Crear el documento simple2.xsd para validar el documento siguiente, simple2.xml. <?xml version="1.0" encoding="UTF-8"?> <Libro xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="simple2.xsd"> <Titulo>Programming Bye</Titulo> <Autor>John C. Smith</Autor> <Fecha>2014</Fecha> <ISBN>84-202-77678-3</ISBN> <Editorial>Mc Graw Hill</Editorial> </Libro> Solución simple2.xsd <?xml version="1.0"?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:element name="Libro"> <xs:complexType> <xs:sequence> <xs:element name="Titulo" type="xs:string"/> <xs:element name="Autor" type="xs:string"/> <xs:element name="Fecha" type="xs:short"/> <xs:element name="ISBN" type="xs:token"/> <xs:element name="Editorial"type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> </xs:schema>

Ejercicio restricciones1 Modificar simple1.xml escribiendo como contenido de edad 20 y guardarlo como restricción1.xml. Solución restricción1.xml. <?xml version="1.0" encoding="UTF-8"?> <alumno xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="restriccion1.xsd">

<nombre>juan</nombre> <dni>28542345</dni> <direccion>San José 2</direccion> <edad>20</edad> <telefono>965943452</telefono> </alumno> Guardar simple1.xsd como restriccion1.xsd y modificarlo aplicando una restricción sobre el valor numérico de la edad (por ejemplo, debe estar comprendida entre 16 y 25).

Solución restriccion1.xsd <?xml version="1.0"?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:element name="alumno"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string" /> <xs:element name="dni" type="xs:string" /> <xs:element name="direccion" type="xs:string" /> <xs:element name="edad"> <xs:simpleType> <xs:restriction base="xs:integer"> <xs:minInclusive value="16" /> <xs:maxInclusive value="25" />

</xs:restriction> </xs:simpleType> </xs:element> <xs:element name="telefono" type="xs:string" /> </xs:sequence> </xs:complexType> </xs:element> </xs:schema> Ejercicio restricciones2 Modificar restriccion1.xml añadiendo el elemento sexo con el contenido M y guardarlo como restriccion2.xml.

Solución restriccion2.xml <?xml version="1.0" encoding="UTF-8"?> <alumno xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="restriccion2.xsd"> <nombre>juan</nombre> <dni>28542345</dni> <direccion>San José 2</direccion> <edad>20</edad> <sexo>M</sexo> <telefono>965943452</telefono> </alumno> Modificar restriccion1.xsd aplicando una restricción sobre un conjunto de valores. El campo sexo será M o H. Guardarlo como restriccion2.xsd.

Modificar restriccion2.xsd creando el tipo personalizado tipoSexo , es decir que el elemento debe aparecer en la secuencia como <xs:element name="sexo" type="tipoSexo"/>

Solución: restriccion2.xsd <?xml version="1.0"?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:simpleType name="tipoSexo"> <xs:restriction base="xs:string"> <xs:enumeration value="M"/> <xs:enumeration value="F"/> </xs:restriction> </xs:simpleType> <xs:element name="alumno"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string" /> <xs:element name="dni" type="xs:string" /> <xs:element name="direccion" type="xs:string" /> <xs:element name="edad"> <xs:simpleType> <xs:restriction base="xs:integer"> <xs:minInclusive value="16"/> <xs:maxInclusive value="25"/> </xs:restriction> </xs:simpleType> </xs:element> <xs:element name="sexo" type="tipoSexo"/>

<xs:element name="telefono" type="xs:string" /> </xs:sequence> </xs:complexType> </xs:element> </xs:schema>

Ejercicio restricciones3 Modificar restriccion2.xsd aplicando una restricción sobre series de valores y guardarlo como restriccion3.xsd . Por ejemplo, vamos a obligar a que el formato del dni sean números y una letra y el teléfono esté formado por números. Validar el documento xml escribiendo números incorrectos y que no se adapten al patrón.

Solución restriccion3.xsd <?xml version="1.0"?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:simpleType name="tipoSexo"> <xs:restriction base="xs:string"> <xs:enumeration value="M"/> <xs:enumeration value="F"/> </xs:restriction> </xs:simpleType> <xs:element name="alumno"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string" /> <xs:element name="dni" > <xs:simpleType> <xs:restriction base="xs:string"> <xs:pattern value="[0-9]{8}[A-Z]"/> </xs:restriction> </xs:simpleType> </xs:element> <xs:element name="direccion" type="xs:string" /> <xs:element name="edad"> <xs:simpleType> <xs:restriction base="xs:integer"> <xs:minInclusive value="16"/> <xs:maxInclusive value="25"/>

</xs:restriction> </xs:simpleType> </xs:element> <xs:element name="sexo" type="tipoSexo"/> <xs:element name="telefono" > <xs:simpleType> <xs:restriction base="xs:string"> <xs:pattern value="[0-9]+"/> </xs:restriction> </xs:simpleType> </xs:element> </xs:sequence> </xs:complexType> </xs:element> </xs:schema> Ejercicio restricciones4 Modificar restriccion3.xsd aplicando restricciones sobre la longitud de los elementos. Lo guardamos como restriccion4.xsd. Por ejemplo el DNI estará formado por un máximo de 8 dígitos y una letra y el teléfono lo escribiremos con mayor y menor longitud Validar el documento xml escribiendo números de DNI o el teléfono.

Solución: restriccion4.xsd <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:simpleType name="tipoSexo"> <xs:restriction base="xs:string"> <xs:enumeration value="M"/> <xs:enumeration value="F"/> </xs:restriction> </xs:simpleType> <xs:element name="alumno"> <xs:complexType> <xs:sequence>

<xs:element name="nombre" type="xs:string" /> <xs:element name="dni" > <xs:simpleType> <xs:restriction base="xs:string"> <xs:pattern value="[0-9]+[A-Z]"/> <xs:maxLength value="9"/> </xs:restriction> </xs:simpleType> </xs:element> <xs:element name="direccion" type="xs:string" /> <xs:element name="edad"> <xs:simpleType> <xs:restriction base="xs:integer"> <xs:minInclusive value="16"/> <xs:maxInclusive value="25"/> </xs:restriction> </xs:simpleType> </xs:element> <xs:element name="sexo" type="tipoSexo"/> <xs:element name="telefono" > <xs:simpleType> <xs:restriction base="xs:string"> <xs:pattern value="[0-9]+"/> <xs:minLength value="6"/> <xs:maxLength value="9"/> </xs:restriction> </xs:simpleType> </xs:element> </xs:sequence> </xs:complexType> </xs:element> </xs:schema>

Ejercicio complejo1 Crear el documento complejo.xsd para validar el siguiente documento .xml <?xml version="1.0" encoding="UTF-8"?> <alumno dni="11111111" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="complejo1.xsd"> <nombre>Lorenzo Pérez</nombre> <direccion> <calle>Banderas</calle> <numero>7</numero> <ciudad>Alfafar</ciudad> <cp>46910</cp> <provincia>Valencia</provincia> </direccion> <telefono>961555555</telefono> </alumno> Solución complejo.xsd <?xml version="1.0" encoding="UTF-8"?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> <xs:element name="alumno"> <xs:complexType> <xs:sequence> <xs:element name="nombre" type="xs:string" /> <xs:element name="direccion"> <xs:complexType> <xs:sequence> <xs:element name="calle" type="xs:string" /> <xs:element name="numero" type="xs:integer" /> <xs:element name="ciudad" type="xs:string" /> <xs:element name="cp"> <xs:simpleType>

<xs:restriction base="xs:integer"> <xs:minInclusive value="46000" /> <xs:maxInclusive value="46999" /> </xs:restriction> </xs:simpleType> </xs:element> <xs:element name="provincia" type="xs:string" /> </xs:sequence> </xs:complexType> </xs:element> <xs:element name="telefono" type="xs:string" /> </xs:sequence> <xs:attribute name="dni" type="xs:string" use="required" /> </xs:complexType> </xs:element> </xs:schema>

---

# ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — Ejercicios XML Schema**
> Las respuestas de los ejercicios tanto los XML como los XSDs tienen que estar en un documento pdf en el mismo orden que las preguntas.
>
> La fecha de entrega es 17-1-2022 a las 0 horas.
>
> Ejercicio simple1 Crear un documento simple1.xml que contenga los datos personales de un alumno: <?xml version="1.0" encoding="UTF-8"?> <alumno xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance xsi:noNamespaceSchemaLocation="simple1.xsd"> <nombre>Roberto</nombre> <dni>28542345</dni> <direccion>San José 2</direccion> <edad>22</edad> <telefono>9659434523</telefono> </alumno> Crear el documento simple1.xsd para validar simple1.xml, Ejercicio simple2 Crear el documento simple2.xsd para validar el documento siguiente, simple2.xml.
>
> <?xml version="1.0" encoding="UTF-8"?> <Libro xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="simple2.xsd"> <Titulo>Programming Bye</Titulo> <Autor>John C. Smith</Autor> <Fecha>2014</Fecha> <ISBN>84-202-77678-3</ISBN> <Editorial>Mc Graw Hill</Editorial> </Libro> Ejercicio restricciones1 Modificar simple1.xml escribiendo como contenido de edad 20 y guardarlo como restricción1.xml.
>
> Guardar simple1.xsd como restriccion1.xsd y modificarlo aplicando una restricción sobre el valor numérico de la edad (por ejemplo, debe estar comprendida entre 16 y 25).
>
> Ejercicio restricciones2 Modificar restriccion1.xml añadiendo el elemento sexo con el contenido M y guardarlo como restriccion2.xml. Modificar restriccion1.xsd aplicando una restricción sobre un conjunto de valores. El campo sexo será M o H. Guardarlo como restriccion2.xsd.
>
> Modificar restriccion2.xsd creando el tipo personalizado tipoSexo , es decir que el elemento debe aparecer en la secuencia como <xs:element name="sexo" type="tipoSexo"/> Ejercicio restricciones3 Modificar restriccion2.xsd aplicando una restricción sobre series de valores y guardarlo como restriccion3.xsd . Por ejemplo, vamos a obligar a que el formato del dni sean números y una letra y el telefono esté formado por numeros.
>
> Validar el documento xml escribiendo números incorrectos y que no se adapten al patrón. Ejercicio restricciones4 Modificar restriccion3.xsd aplicando restricciones sobre la longitud de los elementos. Lo guardamos como restriccion4.xsd. Por ejemplo el DNI estará formado por un máximo de 8 dígitos y una letra y el teléfono lo escribiremos con mayor y menor longitud Validar el documento xml escribiendo números de DNI o el teléfono.
>
> Ejercicio complejo1 Crear el documento complejo.xsd para validar el siguiente documento .xml <?xml version="1.0" encoding="UTF-8"?> <alumno dni="11111111" xmlns:xsi="http://www.w3.org/2001/XMLSchema- instance" xsi:noNamespaceSchemaLocation="complejo1.xsd"> <nombre>Lorenzo Pérez</nombre> <direccion> <calle>Banderas</calle> <numero>7</numero> <ciudad>Alfafar</ciudad> <cp>46910</cp> <provincia>Valencia</provincia> </direccion> <telefono>961555555</telefono> </alumno>

---
