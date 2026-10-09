---
layout: default
title: "✍️ Activitats pràctiques UT5 — Llenguatges de Marques i Sistemes de Gestió d'Informació | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UT5 — Unidad 4"
prev_url: "../ut05/ut0502.html"
prev_label: "⬅️ 5.2 Ejercicios resueltos XML Schema"
next_url: "../ut06/index.html"
next_label: "📘 UT6 Completa ➡️"
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
