---
layout: default
title: "U4 — Servidor Web (HTTP / Virtual Hosting) · Unitat Completa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT4 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut04/ut0401.html"
next_label: "4.1 Recursos Escenario U3 ➡️"
---

# 📘 U4 — Servidor Web (HTTP / Virtual Hosting) (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**4.1 Recursos Escenario U3**](./ut0401.md)
- [**4.2 Introducción virtual hosting**](./ut0402.md)
- [**4.3 Configuración Virtual hosting**](./ut0403.md)
- [**4.4 Ips clients**](./ut0404.md)
- [**✍️ Activitats pràctiques UT4**](./ut04actividades.md)

---

# 4.1 Recursos Escenario U3

> **📌 Introducció de la Unitat**
> ### **U3: Servici de Web (HTTP)**
>
> **Durada**
>
> : del 25 de Novembre al 18 de Desembre
>
> **Guia d'estudi**
>
> :
>
> El servici de Web, on farem servir el Protocol de transferència de hipertext (en inglés, Hypertext Transfer Protocol, abreviado
>
> **HTTP**
>
> ) es el protocol de comunicació que permet les transferències d'informació en la World Wide Web. En esta unitat didàctica anem a profunditzar en las peculiaritats de la seua configuració i funcionament, principalment en sistemes basats en GNU/Linux, però també en Windows.
>
> **Organització las sessiones:**
>
> | Sessió | Contingut |
> | --- | --- |
> |  | Pràctica "primer contacte" amb Apatxe (Apache2) |
> |  | Pràctica "primer contacte" amb Apatxe (Apache2) |
> |  | Pràctica "primer contacte" amb Apatxe (Apache2) |
> |  | Treball individual i en equip |
> |  | Treball individual i en equip |
> |  | Treball individual i en equip |
> |  | Reunió grupal de seguiment + Entrega actaTreball individual i en equip |
> |  | Treball individual i en equip |
> |  | Treball individual i en equipEstudi en equip de l'escenariAvaluació companyersAutoevaluació final |
> |  | Activitat de modificació de servidorPreparació de la presentació |
> **Recursos**
>
> :
>
> [Tutorial Pound](https://help.ubuntu.com/community/Pound)

> **🔗 Recurs Web: Práctica de "toma de contacto" con Apache**
> [**🌐 Obrir recurs extern (https://docs.google.com/document/d/1mQUwRrMpLzKPo2-yQUYVcXD5HxtTvmgOUqHjTXzkwu8/pub) ↗️**](https://docs.google.com/document/d/1mQUwRrMpLzKPo2-yQUYVcXD5HxtTvmgOUqHjTXzkwu8/pub)

> **🔗 Recurs Web: Enunciado Caso Práctico**
> [**🌐 Obrir recurs extern (https://docs.google.com/document/d/1aj0uJUrjCel3YaisO9c0CMAqti0idZ99eg_gnY3BCvM/pub) ↗️**](https://docs.google.com/document/d/1aj0uJUrjCel3YaisO9c0CMAqti0idZ99eg_gnY3BCvM/pub)

📎 **Material de laboratori (Modelo actas equipos):** `Acta_Planificacion_Inicial_Grupos.doc`, `Acta_Seguimiento_Semanal.rtf`

> **🔗 Recurs Web: Autenticación de contraseña**
> [**🌐 Obrir recurs extern (https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-apache-on-ubuntu-18-04-es) ↗️**](https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-apache-on-ubuntu-18-04-es)

> **🔗 Recurs Web: caso práctico. Apache**
> [**🌐 Obrir recurs extern (https://docs.google.com/document/d/18hMVjS1agqmi-bd8p7ll_596HIYQTCk6iFPz9UtzVN0/edit?usp=sharing) ↗️**](https://docs.google.com/document/d/18hMVjS1agqmi-bd8p7ll_596HIYQTCk6iFPz9UtzVN0/edit?usp=sharing)
>
> caso práctico. Apache

> **🔗 Recurs Web: Ajuda-Apache**
> [**🌐 Obrir recurs extern (https://docs.google.com/document/d/e/2PACX-1vSUWL68ABIpvvJy3sQRBn4WNvC5L4_QmQ1iN8I5R2FkNrS-d-g9eL4JQUvFfD3R-8QfSdi7Lnkv4BiU/pub) ↗️**](https://docs.google.com/document/d/e/2PACX-1vSUWL68ABIpvvJy3sQRBn4WNvC5L4_QmQ1iN8I5R2FkNrS-d-g9eL4JQUvFfD3R-8QfSdi7Lnkv4BiU/pub)

---

#### 📦 index.html

| TRADUCTORES.NET // traducciones | 🖼️ [Imatge / Esquema: banderas] |
| --- | --- |
| Esta sería el área reservada para el webmaster ... |  |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 |  |

---

#### 📦 index.php

```php
<?php

echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n"; 

echo "<html>\n"; 

echo "<head>\n"; 

echo "  <meta content=\"text/html; charset=ISO-8859-1\"\n"; 

echo " http-equiv=\"content-type\">\n"; 

echo "  <title>index.html</title>\n"; 

echo "</head>\n"; 

echo "<body>\n"; 

echo "<table\n"; 

echo " style=\"text-align: left; background-color: rgb(55, 77, 121); width: 948px; height: 439px;\"\n"; 

echo " border=\"0\" cellpadding=\"2\" cellspacing=\"2\">\n"; 

echo "  <tbody>\n"; 

echo "    <tr style=\"background-color: rgb(55, 77, 121);\">\n"; 

echo "      <td style=\"height: 54px; text-align: center; width: 590px;\"\n"; 

echo " colspan=\"1\" rowspan=\"1\"><big style=\"color: rgb(255, 255, 255);\"><big\n"; 

echo " style=\"font-weight: bold; font-family: Century Gothic;\"><big>TRADUCTORES.NET\n"; 

echo "&nbsp;// aula virtual</big></big></big></td>\n"; 

echo "      <td style=\"text-align: right; width: 338px;\" colspan=\"1\"><img\n"; 

echo " style=\"width: 196px; height: 147px;\" alt=\"banderas\" src=\"banderas.jpg\"></td>\n"; 

echo "    </tr>\n"; 

echo "    <tr\n"; 

echo " style=\"color: rgb(255, 255, 255); background-color: rgb(55, 77, 121);\">\n"; 

echo "      <td colspan=\"2\" rowspan=\"1\"\n"; 

echo " style=\"background-color: rgb(55, 77, 121); width: 338px; height: 51px;\">\n"; 

echo "      <ul>\n"; 

echo "        <li><span style=\"font-family: Century Gothic;\">Esta\n"; 

echo "ser&iacute;a la secci&oacute;n en la que se cargar&iacute;a una\n"; 

echo "plataforma de E-Learning o similar.</span></li>\n"; 

echo "      </ul>\n"; 

echo "      <ul style=\"font-family: Century Gothic;\">\n"; 

echo "      </ul>\n"; 

echo "      </td>\n"; 

echo "    </tr>\n"; 

echo "    <tr>\n"; 

echo "      <td colspan=\"2\" rowspan=\"1\"\n"; 

echo " style=\"text-align: center; font-family: Century Gothic; width: 338px; height: 69px;\"><big\n"; 

echo " style=\"color: rgb(255, 255, 255);\"><span style=\"font-weight: bold;\"><br>\n"; 

echo "| Contacto |<br>\n"; 

echo "      <br>\n"; 

echo "      <small><small>mail: clientes@traductores.net<br>\n"; 

echo "telf.: +34 964562322<br>\n"; 

echo "      </small></small></span></big></td>\n"; 

echo "    </tr>\n"; 

echo "  </tbody>\n"; 

echo "</table>\n"; 

echo "<br>\n"; 

echo "</body>\n"; 

echo "</html>\n";

?>
```

---

#### 📦 formacion_empresas.html

| TRADUCTORES.NET // formación | 🖼️ [Imatge / Esquema: banderas] |
| --- | --- |
| **Formación de idiomas a empresas.** **Objetivo** Para que su empresa pueda competir con absoluta garantía y eficiencia en el mercado exterior, Itering Languages le ofrece sus cursos de idiomas a medida y personalizados de alta calidad y exigencia para apoyar y reforzar su actividad de negocio. En Itering Languages adaptamos cada uno de nuestros cursos de idiomas a las necesidades lingüísticas profesionales de su empresa. Con una metodología única y dinámica, los contenidos de nuestros cursos abarcan las distintas áreas de especialización dependiendo del sector de cada empresa, garantizando la formación lingüística de cada uno de los departamentos funcionales y divisiones; nuestro principal objetivo. cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, **Profesores** Todos los profesores de Itering Languages son profesionales titulados, nativos del idioma de formación, poseen una amplia experiencia docente e imparten el vocabulario específico de cada sector. Periódicamente asisten a seminarios y encuentros de formación para poder aportar las nuevas técnicas académicas en sus clases. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, **Soluciones a medida** Como primer paso, Itering Languages identifica su nivel actual mediante diversas pruebas de conocimientos para poder definir su nivel objetivo en relación con sus metas profesionales. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas **Informes** Gracias a nuestro programa AG - Análisis de Gestión - nuestros profesores pueden desarrollar informes detallados de la evolución y nivel de satisfacción de nuestros clientes durante el desarrollo del curso. Dichos informes podrán ser consultados, de forma online, tanto por nuestros alumnos como por nuestros clientes. **Calidad de Servicio** Conocedores del "valor del tiempo" y que nuestros cursos de empresa están orientados a profesionales con una agenda apretada, los profesores de Itering Languages acudirán a sus oficinas en los horarios y fechas que usted nos indique. | **Formación de idiomas a empresas.** **Objetivo** Para que su empresa pueda competir con absoluta garantía y eficiencia en el mercado exterior, Itering Languages le ofrece sus cursos de idiomas a medida y personalizados de alta calidad y exigencia para apoyar y reforzar su actividad de negocio. En Itering Languages adaptamos cada uno de nuestros cursos de idiomas a las necesidades lingüísticas profesionales de su empresa. Con una metodología única y dinámica, los contenidos de nuestros cursos abarcan las distintas áreas de especialización dependiendo del sector de cada empresa, garantizando la formación lingüística de cada uno de los departamentos funcionales y divisiones; nuestro principal objetivo. cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, **Profesores** Todos los profesores de Itering Languages son profesionales titulados, nativos del idioma de formación, poseen una amplia experiencia docente e imparten el vocabulario específico de cada sector. Periódicamente asisten a seminarios y encuentros de formación para poder aportar las nuevas técnicas académicas en sus clases. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, **Soluciones a medida** Como primer paso, Itering Languages identifica su nivel actual mediante diversas pruebas de conocimientos para poder definir su nivel objetivo en relación con sus metas profesionales. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas **Informes** Gracias a nuestro programa AG - Análisis de Gestión - nuestros profesores pueden desarrollar informes detallados de la evolución y nivel de satisfacción de nuestros clientes durante el desarrollo del curso. Dichos informes podrán ser consultados, de forma online, tanto por nuestros alumnos como por nuestros clientes. **Calidad de Servicio** Conocedores del "valor del tiempo" y que nuestros cursos de empresa están orientados a profesionales con una agenda apretada, los profesores de Itering Languages acudirán a sus oficinas en los horarios y fechas que usted nos indique. |
| **Formación de idiomas a empresas.** **Objetivo** Para que su empresa pueda competir con absoluta garantía y eficiencia en el mercado exterior, Itering Languages le ofrece sus cursos de idiomas a medida y personalizados de alta calidad y exigencia para apoyar y reforzar su actividad de negocio. En Itering Languages adaptamos cada uno de nuestros cursos de idiomas a las necesidades lingüísticas profesionales de su empresa. Con una metodología única y dinámica, los contenidos de nuestros cursos abarcan las distintas áreas de especialización dependiendo del sector de cada empresa, garantizando la formación lingüística de cada uno de los departamentos funcionales y divisiones; nuestro principal objetivo. cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, cursos de idiomas, **Profesores** Todos los profesores de Itering Languages son profesionales titulados, nativos del idioma de formación, poseen una amplia experiencia docente e imparten el vocabulario específico de cada sector. Periódicamente asisten a seminarios y encuentros de formación para poder aportar las nuevas técnicas académicas en sus clases. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, **Soluciones a medida** Como primer paso, Itering Languages identifica su nivel actual mediante diversas pruebas de conocimientos para poder definir su nivel objetivo en relación con sus metas profesionales. formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas, formación a empresas de idiomas **Informes** Gracias a nuestro programa AG - Análisis de Gestión - nuestros profesores pueden desarrollar informes detallados de la evolución y nivel de satisfacción de nuestros clientes durante el desarrollo del curso. Dichos informes podrán ser consultados, de forma online, tanto por nuestros alumnos como por nuestros clientes. **Calidad de Servicio** Conocedores del "valor del tiempo" y que nuestros cursos de empresa están orientados a profesionales con una agenda apretada, los profesores de Itering Languages acudirán a sus oficinas en los horarios y fechas que usted nos indique. |  |
|  | >> Acceso al aula virtual << |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 |  |

---

#### 📦 Los herederos _ Los estudiantes y la cultura (Bourdieu).pdf

> **📄 Document Escanejat / Visual (Los herederos _ Los estudiantes y la cultura (Bourdieu).pdf)**
> Aquest document PDF (107 pàgines) està compost principalment per esquemes o imatges escanejades.

---

| TRADUCTORES.NET | 🖼️ [Imatge / Esquema: banderas] |
| --- | --- |
| 🖼️ [Imatge / Esquema: form] | 🖼️ [Imatge / Esquema: tradcutores] |
| 🖼️ [Imatge / Esquema: interpretes] | Si necesitas una traducción / intérprete ... 🖼️ [Imatge / Esquema: pedido] |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 | \| Acceso zona webmaster \| |

---

#### 📦 interpretes.html

| TRADUCTORES.NET // intérpretes | 🖼️ [Imatge / Esquema: banderas] |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **MODELOS DE INTERPRETACION:**intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo, ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes - Interpretación de Conferencias.**Consiste en hacer una interpretación de una conferencia, entendiendo por conferencia una reunión entre profesionales de un mismo sector (congresos profesionales, reuniones polí­ticas internacionales, etc.) intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación en el ámbito Judicial.**Mientras que la interpretación jurí­dica se refiere simplemente al contenido del discurso de partida y la **interpretación jurada** implica una responsabilidad del intérprete jurado respecto a su trabajo regulada por la ley, la interpretación judicial tiene necesariamente lugar en tribunales de justicia o administrativos. ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación en el sector público.**Es un tipo de interpretación que tiene lugar en los ámbitos legal, sanitario, y del gobierno local, así­ como los servicios sociales, la vivienda, la salud medioambiental y la educación. ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación en el ámbito sanitario.**Consiste en facilitar la comunicación entre el personal sanitario y el paciente y su familia. El **intérprete médico** debe tener amplios conocimientos de medicina, sobre las prácticas médicas más comunes, el proceso de entrevistar a un paciente y el reconocimiento médico. ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación en medios de Comunicación.**Por su naturaleza, la interpretación en los medios de comunicación tiene que ser simultánea. Se ofrece en particular para las coberturas televisivas en directo tales como las conferencias de prensa, entrevistas grabadas o en directo con polí­ticos, músicos, artistas, deportistas o personalidades del mundo de los negocios. En este tipo de interpretación el **intérprete**se sitúa en una cabina insonorizada. ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación de lengua de señas.**Cuando una persona sorda gesticula, un intérprete transmite el significado de estos signos en lenguaje hablado para las personas que pueden oí­r, lo que a veces se denomina interpretación vocal. Esta práctica puede llevarse a cabo como una interpretación simultánea o consecutiva. Los**intérpretes**de lenguaje de signos cualificados se ubicarán en una sala o lugar que les permita ver a y ser vistos por los participantes sordos así como escuchar a y ser escuchados por los participantes que pueden oír. ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) **Agencia de Intérpretes -Interpretación para sesiones de grupo.**En la interpretación centrada en un grupo un intérprete se sitúa en una cabina insonorizada o en la sala de un observador con los clientes. Normalmente se utiliza un espejo unidireccional que se coloca entre el intérprete y el grupo focal, gracias al cual el intérprete puede observar a los participantes. El **intérprete** escucha la conversación en el lenguaje original a través de auriculares y la interpreta de forma simultánea en la lengua de llegada para los clientes. servicio de ntérpretes servicio de profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales, intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales,servicio de intérpretes profesionales, servicio de intérpretes profesionales, Es muy común encontrar intérpretes que utilizan *Lenguas bisagra*como apoyo a su **traducción**, es decir, lenguas intermedias para llegar del idioma origen al idioma destino, llegando a perder hasta un 50 % de información. Para garantizar la máxima calidad y garantí­a en la **traducción**, Itering Languages: ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int | **MODELOS DE INTERPRETACION:**intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo, | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes - Interpretación de Conferencias.**Consiste en hacer una interpretación de una conferencia, entendiendo por conferencia una reunión entre profesionales de un mismo sector (congresos profesionales, reuniones polí­ticas internacionales, etc.) intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el ámbito Judicial.**Mientras que la interpretación jurí­dica se refiere simplemente al contenido del discurso de partida y la **interpretación jurada** implica una responsabilidad del intérprete jurado respecto a su trabajo regulada por la ley, la interpretación judicial tiene necesariamente lugar en tribunales de justicia o administrativos. | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el sector público.**Es un tipo de interpretación que tiene lugar en los ámbitos legal, sanitario, y del gobierno local, así­ como los servicios sociales, la vivienda, la salud medioambiental y la educación. | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el ámbito sanitario.**Consiste en facilitar la comunicación entre el personal sanitario y el paciente y su familia. El **intérprete médico** debe tener amplios conocimientos de medicina, sobre las prácticas médicas más comunes, el proceso de entrevistar a un paciente y el reconocimiento médico. | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en medios de Comunicación.**Por su naturaleza, la interpretación en los medios de comunicación tiene que ser simultánea. Se ofrece en particular para las coberturas televisivas en directo tales como las conferencias de prensa, entrevistas grabadas o en directo con polí­ticos, músicos, artistas, deportistas o personalidades del mundo de los negocios. En este tipo de interpretación el **intérprete**se sitúa en una cabina insonorizada. | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación de lengua de señas.**Cuando una persona sorda gesticula, un intérprete transmite el significado de estos signos en lenguaje hablado para las personas que pueden oí­r, lo que a veces se denomina interpretación vocal. Esta práctica puede llevarse a cabo como una interpretación simultánea o consecutiva. Los**intérpretes**de lenguaje de signos cualificados se ubicarán en una sala o lugar que les permita ver a y ser vistos por los participantes sordos así como escuchar a y ser escuchados por los participantes que pueden oír. | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación para sesiones de grupo.**En la interpretación centrada en un grupo un intérprete se sitúa en una cabina insonorizada o en la sala de un observador con los clientes. Normalmente se utiliza un espejo unidireccional que se coloca entre el intérprete y el grupo focal, gracias al cual el intérprete puede observar a los participantes. El **intérprete** escucha la conversación en el lenguaje original a través de auriculares y la interpreta de forma simultánea en la lengua de llegada para los clientes. servicio de ntérpretes servicio de profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales, intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales,servicio de intérpretes profesionales, servicio de intérpretes profesionales, | Es muy común encontrar intérpretes que utilizan *Lenguas bisagra*como apoyo a su **traducción**, es decir, lenguas intermedias para llegar del idioma origen al idioma destino, llegando a perder hasta un 50 % de información. Para garantizar la máxima calidad y garantí­a en la **traducción**, Itering Languages: ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int |
| **MODELOS DE INTERPRETACION:**intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo,intérprete simultáneo, |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes - Interpretación de Conferencias.**Consiste en hacer una interpretación de una conferencia, entendiendo por conferencia una reunión entre profesionales de un mismo sector (congresos profesionales, reuniones polí­ticas internacionales, etc.) intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, intérpretes jurados, |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el ámbito Judicial.**Mientras que la interpretación jurí­dica se refiere simplemente al contenido del discurso de partida y la **interpretación jurada** implica una responsabilidad del intérprete jurado respecto a su trabajo regulada por la ley, la interpretación judicial tiene necesariamente lugar en tribunales de justicia o administrativos. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el sector público.**Es un tipo de interpretación que tiene lugar en los ámbitos legal, sanitario, y del gobierno local, así­ como los servicios sociales, la vivienda, la salud medioambiental y la educación. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en el ámbito sanitario.**Consiste en facilitar la comunicación entre el personal sanitario y el paciente y su familia. El **intérprete médico** debe tener amplios conocimientos de medicina, sobre las prácticas médicas más comunes, el proceso de entrevistar a un paciente y el reconocimiento médico. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación en medios de Comunicación.**Por su naturaleza, la interpretación en los medios de comunicación tiene que ser simultánea. Se ofrece en particular para las coberturas televisivas en directo tales como las conferencias de prensa, entrevistas grabadas o en directo con polí­ticos, músicos, artistas, deportistas o personalidades del mundo de los negocios. En este tipo de interpretación el **intérprete**se sitúa en una cabina insonorizada. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación de lengua de señas.**Cuando una persona sorda gesticula, un intérprete transmite el significado de estos signos en lenguaje hablado para las personas que pueden oí­r, lo que a veces se denomina interpretación vocal. Esta práctica puede llevarse a cabo como una interpretación simultánea o consecutiva. Los**intérpretes**de lenguaje de signos cualificados se ubicarán en una sala o lugar que les permita ver a y ser vistos por los participantes sordos así como escuchar a y ser escuchados por los participantes que pueden oír. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | **Agencia de Intérpretes -Interpretación para sesiones de grupo.**En la interpretación centrada en un grupo un intérprete se sitúa en una cabina insonorizada o en la sala de un observador con los clientes. Normalmente se utiliza un espejo unidireccional que se coloca entre el intérprete y el grupo focal, gracias al cual el intérprete puede observar a los participantes. El **intérprete** escucha la conversación en el lenguaje original a través de auriculares y la interpreta de forma simultánea en la lengua de llegada para los clientes. servicio de ntérpretes servicio de profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales, intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales, servicio de intérpretes profesionales,servicio de intérpretes profesionales,servicio de intérpretes profesionales, servicio de intérpretes profesionales, |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Es muy común encontrar intérpretes que utilizan *Lenguas bisagra*como apoyo a su **traducción**, es decir, lenguas intermedias para llegar del idioma origen al idioma destino, llegando a perder hasta un 50 % de información. Para garantizar la máxima calidad y garantí­a en la **traducción**, Itering Languages: ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, | ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sóloasignará **intérpretes bilingües** en su proceso de traducción.intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, intérprete de enlace, |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ![Servicio de intérpretes](http://www.iteringlanguages.com/IMG/azul.gif) | Sólo asignará **intérpretes** con el máximo conocimiento en el área de especialización a tratar. int |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

---

#### 📦 formulario.html

TRADUCTORES.NET // pedidos
🖼️ [Imatge / Esquema: banderas]

Nombre

Empresa

Servicio

traducción
interpretación

Idioma origen

chino
inglés
alemán

Idioma destino

chino
inglés
alemán

| Contacto |

mail: clientes@traductores.net
 telf.: +34 964562322

---

#### 📦 traductores.html

| TRADUCTORES.NET // traducciones | 🖼️ [Imatge / Esquema: banderas] |
| --- | --- |
| Nuestro **servicio de traducciones profesionales a más de 58 idiomas**hacen de nuestra **agencia de traducción** ser un punto de referencia en el sector. El proceso de trabajo está enfocado a proporcionarle el mejor **servicio de traducciones profesionales** con la máxima calidad en el tiempo acordado. Para garantizar una mínima **calidad en la traducción** no solo es imprescindible conocer la lengua en la que está escrito el texto original, sino también dominar y saber redactar a la perfección en la lengua de destino. |  |
| Idiomas con los que trabajamos ... | Inglés Alemán Chino |
|  | >> Acceso a zona restringida << |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 |  |

---

#### 📦 zona_restringida.html

| TRADUCTORES.NET // zona restringida | 🖼️ [Imatge / Esquema: banderas] |
| --- | --- |
| Acceso a ... Proyectos por equipos de traductores Traducciones simples |  |
| \| Contacto \| mail: clientes@traductores.net telf.: +34 964562322 |  |

---

# 4.2 Introducción virtual hosting

Introducción virtual hosting

APACHE 2.4 Virtual Hosting

¿Qué es Virtual Hosting? El término Hosting Virtual se refiere a hacer funcionar más de un sitio web (tales como www.pagina1.com y www.pagina2.com) en una sola máquina. Los sitios web virtuales pueden estar: ●"basados en direcciones IP", lo que significa que cada sitio web tiene una dirección IP diferente ●"basados en nombres diferentes", lo que significa que con una sola dirección IP están funcionando sitios web con diferentes nombres (de dominio).

/etc/apache2/sites-available/000-default.conf <VirtualHost *:80> #ServerName www.example.com ServerAdmin webmaster@localhost DocumentRoot /var/www/html ErrorLog ${APACHE_LOG_DIR}/error.log CustomLog ${APACHE_LOG_DIR}/access.log combined </VirtualHost>

---

# 4.3 Configuración Virtual hosting

Configuración Virtual hosting

APACHE 2.4 Configuración de Virtual Hosting

Configuración del virtualhost Cada sitio web tendrá nombres distintos. Cada sitio web compartirán la misma dirección IP y el mismo puerto (80).

Configuración del virtualhost apache1.openwebinars.net (/var/www/apache1) apache1.openwebinars.net (/var/www/apache2)

Creamos ficheros de configuración

```bash
cd /etc/apache2/sites-available
```

cp 000-default.conf apache1.conf cp 000-default.conf apache2.conf Modificamos ficheros de configuración DocumentRoot, ServerName ErrorLog,CustomLog

Activamos la configuración a2ensite apache1 a2ensite apache2 Creamos los DocumentRoot y le damos propietarios adecuados

```bash
# chown -R www-data:www-data /var/www/apache1
# chown -R www-data:www-data /var/www/apache2
```

> **💡 Apunt Tècnic**
> Ejemplo: apache1.conf <VirtualHost *:80> ServerName apache1.openwebinars.net ServerAdmin webmaster@localhost DocumentRoot /var/www/html/apache1 ErrorLog ${APACHE_LOG_DIR}/error_apache1.log CustomLog ${APACHE_LOG_DIR}/access_apache1.log combined </VirtualHost>

---

# 4.4 Ips clients

Ips clients

IPs Clients

Linares 10.0.55.101 Piles 10.0.55.102 Natalia 10.0.55.103 Aitor 10.0.55.104 Carlos 10.0.55.105 Manel 10.0.55.106 Zapata 10.0.55.107 Climent 10.0.55.108 Joel 10.0.55.109 JavierF 10.0.55.110 Alvaro 10.0.55.111 Juan 10.0.55.112 Carrasco 10.0.55.113

---

# ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — Práctica toma de contacto**
> [Práctica introductoria](https://docs.google.com/document/d/e/2PACX-1vSgqxPm1cT_VkXCgwwVnqrsY4ipwoeIdE-PnrXu2GuF9e8eVVfKovneCW_0F698_vbVfl_oqnOvGZQL/pub)

> **✍️ 📋 Exercici / Qüestionari 4.2 — Prova validació HTTP**
> Prova validació HTTP
>
> Prova de validació HTTP-Apache
>
> ### 1. Configurar apache per a usar hosting virtual basat en noms
>
> permetent crear dos llocs web independents.
>
> - El primer host virtual ha de respondre amb un missatge de
>
> benvinguda en rebre una petició http://www.XXX.edu/hola.htm Ampliació-> En cas que s'indique la següent petició http://www.XXX.edu/iessantvicent/ mostrar la web https://portal.edu.gva.es/iessantvicent/
>
> - El segon host virtual davant la següent petició
>
> http://www.privatXXX.edu/ ha d'autenticar l'usuari (prova) i la contrasenya (prova) i respondre amb el text “He demostrat que sé fer- ho!!”. Autenticació digest. Ampliació->En cas que no s'indique arxiu en la petició mostrar l'arxiu prova.htm amb el text “servidor segur”
>
> ### 2. Configurar el servidor segur SSL per a peticions
>
> https://www.bancaXXX.edu Bateria de proves. http://www.XXX.edu/hola.htm http://www.privatXXX.edu/prova.htm http://www.privatXXX.edu/ http://www.XXX.edu/iessantvicent/ https://www.bancaXXX.edu Linares 10.0.55.201 http://www.Linares.edu/hola.htm http://www.privatLinares.edu/prova.htm http://www.privatLinares.edu/
>
> http://www.Linares.edu/iessantvicent/ https://www.bancaLinares.edu Piles 10.0.55.202 http://www.Piles.edu/hola.htm http://www.privatPiles.edu/prova.htm http://www.privatPiles.edu/ http://www.Piles.edu/iessantvicent/ https://www.bancaPiles.edu Natalia 10.0.55.203 http://www.Natalia.edu/hola.htm http://www.privatNatalia.edu/prova.htm http://www.privatNatalia.edu/ http://www.Natalia.edu/iessantvicent/ https://www.bancaNatalia.edu Aitor 10.0.55.204 http://www.Aitor.edu/hola.htm http://www.privatAitor.edu/prova.htm http://www.privatAitor.edu/ http://www.Aitor.edu/iessantvicent/ https://www.bancaAitor.edu Carlos 10.0.55.205 http://www.Carlos.edu/hola.htm http://www.privatCarlos.edu/prova.htm http://www.privatCarlos.edu/ http://www.Carlos.edu/iessantvicent/ https://www.bancaCarlos.edu Manel 10.0.55.206 http://www.Manel.edu/hola.htm
>
> http://www.privatManel.edu/prova.htm http://www.privatManel.edu/ http://www.Manel.edu/iessantvicent/ https://www.bancaManel.edu Zapata 10.0.55.207 http://www.Zapata.edu/hola.htm http://www.privatZapata.edu/prova.htm http://www.privatZapata.edu/ http://www.Zapata.edu/iessantvicent/ https://www.bancaZapata.edu Climent 10.0.55.208 http://www.Climent.edu/hola.htm http://www.privatCliment.edu/prova.htm http://www.privatCliment.edu/ http://www.Climent.edu/iessantvicent/ https://www.bancaCliment.edu Joel 10.0.55.209 http://www.Joel.edu/hola.htm http://www.privatJoel.edu/prova.htm http://www.privatJoel.edu/ http://www.Joel.edu/iessantvicent/ https://www.bancaJoel.edu JavierF 10.0.55.210 http://www.JavierF.edu/hola.htm http://www.privatJavierF.edu/prova.htm http://www.privatJavierF.edu/ http://www.JavierF.edu/iessantvicent/ https://www.bancaJavierF.edu
>
> Alvaro 10.0.55.211 http://www.Alvaro.edu/hola.htm http://www.privatAlvaro.edu/prova.htm http://www.privatAlvaro.edu/ http://www.Alvaro.edu/iessantvicent/ https://www.bancaAlvaro.edu Juan 10.0.55.212 http://www.Juan.edu/hola.htm http://www.privatJuan.edu/prova.htm http://www.privatJuan.edu/ http://www.Juan.edu/iessantvicent/ https://www.bancaJuan.edu Carrasco 10.0.55.213 http://www.Carrasco.edu/hola.htm http://www.privatCarrasco.edu/prova.htm http://www.privatCarrasco.edu/ http://www.Carrasco.edu/iessantvicent/ https://www.bancaCarrasco.edu Arnau 10.0.55.213 http://www.Arnau.edu/hola.htm http://www.privatArnau.edu/prova.htm http://www.privatArnau.edu/ http://www.Arnau.edu/iessantvicent/ https://www.bancaArnau.edu

> **✍️ Activitat Pràctica 4.3 — Memoria UD4**
> Memoria UD4

> **✍️ Activitat Pràctica 4.4 — Presentació UD4**
> Presentació UD4

> **✍️ 📋 Exercici / Qüestionari 4.5 — Activitat FTP**
> Activitat FTP
>
> ESCENARIO PARA LA ACTIVIDAD GRUPAL (Unidad 5)
>
> Índice
>
> - ​Enunciado
>
> - ​Orientaciones para la implementación
>
> - ​Restricciones técnicas en la implementación
>
> - ​Tareas
>
> - ​Recursos básicos
>
> ### 1. Enunciado
>
> En esta unidad nos vamos a ocupar de una parte importante del escenario basado en la empresa
>
> “Traductores.net” que hemos ido cubriendo a lo largo del curso: la del servicio FTP. En este caso,
>
> nuestro objetivo es posibilitar que los trabajadores puedan compartir documentación sobre su trabajo
>
> diario.
>
> Como sabemos, la empresa “Traductores S.L” se dedica al sector de traducciones de varios idiomas y
>
> ofrece servicios a todas las empresas que necesiten disponer de documentos en diferentes lenguas. Si
>
> uno visita su web (ficticia) “​www.traductores.net​”, puede observar que actualmente ofrecen servicio de
>
> traducción del español hacia 3 idiomas, Inglés, Alemán y Chino. La empresa cuenta con ​3 equipos de
>
> traductores especializados para cada uno de esos idiomas, con ​2 miembros en cada equipo​, lo cual hace
>
> un total de 6 trabajadores. Estos traductores a veces acuden a las oficinas de la empresa, pero en otras
>
> ocasiones trabajan desde casa, revisando las ofertas de trabajo que la empresa comunica y enviando
>
> sus traducciones a ésta una vez las tienen terminados. Además de los equipos con los traductores, la
>
> empresa cuenta con un equipo de intérpretes para esos 3 idiomas, que cubren trabajos de, por un lado,
>
> interpretación simultánea en congresos, y por otro, traducción de eventos y locuciones y doblaje de
>
> contenido audiovisual (películas, canciones, …). Finalmente, el personal de la empresa incluye la figura
>
> del director, el contable y el jefe de marketing.
>
> El director de la empresa ha encomendado a tu equipo la tarea de proporcionar soporte tecnológico a
>
> sus necesidades, que básicamente tiene que ver con la organización de toda la documentación que
>
> manejan los traductores en torno a sus trabajos.
>
> Los traductores realizan habitualmente dos tipos de trabajos diferentes
>
> ● traducciones simples​, realizadas por un traductor en particular, del español a cualquier de los 3
>
> idiomas referidos arriba, según su especialidad. Son trabajos que corresponden a ofertas que
>
> no necesitan más de un traductor trabajando a la vez (es decir, un documento en español se
>
> traduce a inglés, chino o alemán, o viceversa). ● proyectos​, realizados por equipos multi-idioma, lo que significa que en la práctica cada
>
> documento original proporcionado por el cliente (de la empresa) debe ser traducido al menos a
>
> otros 2 idiomas de entre los previamente indicados.
>
> Actualmente la empresa está gestionando la siguiente lista de trabajos​ 1​
>
> ○ proyecto “ASEAT León”​: traducción de manual de este modelo de coche nuevo al chino
>
> y al alemán. ○ proyecto “Mercamujer”​: traducción de los productos de importación al inglés y al
>
> alemán. ○ traducción simple “Restaurante Asador Socarrat”​: traducción de la carta que ofrece el
>
> restaurante al inglés. ○ traducción simple “Inmobiliaria Gran Burbuja”​: traducción de su web en español al
>
> alemán. ○ traducción simple “Gran muralla”​: traducción al español del etiquetado de diferentes
>
> 1 ​Estos trabajos serán en nuestro caso ficheros de tipo documento de texto. Su contenido, como es obvio, es lo de menos.
>
> productos de importación de una compañía de alimentación china.
>
> Después de valorar las opciones disponibles, se ha optado por usar el servicio de FTP para organizar los
>
> ficheros con las traducciones. Vuestra tarea como equipo técnico será ​planificar e implementar una
>
> estructura de servidores FTP que permita organizar tanto el conjunto de información referente a los
>
> trabajos de traducción que va a manejar la empresa como aquella que es exclusiva del director, el
>
> contable y el jefe de marketing​.
>
> ### 2. Orientaciones para la implementación
>
> Tened en cuenta las siguientes observaciones en la solución que debéis proponer
>
> ● aprovechando que contáis con 3 servidores por equipo, una medida de seguridad a implantar
>
> puede ser la de descentralizar el almacenaje de la información relativa a los proyectos y
>
> traducciones, además de aquella propia del resto de personal de la empresa, de forma que los
>
> posibles problemas técnicos o pérdidas de información por caída eventual de cualquiera de los
>
> servidores en producción no afecte al resto de la infraestructura.
>
> ● todos los traductores, independientemente del idioma o proyecto en el que trabajan,
>
> comparten cierta información, en este caso, las ofertas de trabajo de las que mensualmente la
>
> empresa informa a sus empleados a través de un documento de texto llamado
>
> “ofertas_nombre_mes.odt” que resulta accesible desde cualquier puesto (PC) en la empresa (o
>
> fuera de ella). El resto de personal de la empresa que no sea el conjunto de traductores y el
>
> director no tendrán acceso a las ofertas.
>
> ● ya que la confidencialidad en este sector profesional es crucial, los traductores que trabajan en
>
> traducciones simples no deben tener acceso a documentación de los trabajos de otros
>
> compañeros. Igualmente, y como es esperable, sólo los participantes en cada proyecto tendrán
>
> acceso a la documentación del mismo.
>
> ### 3. Restricciones técnicas en la implementación
>
> Además de los condicionantes anteriores, vuestra propuesta debe tener en cuenta lo siguiente
>
> ● como contamos con 3 servidores de FTP, ​cada uno de ellos utilizará versiones de servidor FTP
>
> diferentes, todas ellas basadas en Linux​: el primer servidor implementado funcionará con
>
> “VSFTPD”, el segundo mediante “ProFTP” y el tercero mediante “PureFTP”.
>
> ● a fin de depurar el funcionamiento de cada servidor, deberán configurarse los siguientes
>
> parámetros
>
> ○ no se permitirá el acceso de 4 usuarios simultáneamente. ○ el tiempo máximo de conexión (sin actividad) será de 30 segundos. ○ los diferentes usuarios no podrán tener acceso a áreas del sistema de ficheros más allá
>
> que no sean el de su propio espacio de trabajo​ 2​. ○ todos aquellos usuarios en cada servidor que no sean los definidos como traductores o
>
> personal específico no podrán abrir una sesión en el sistema operativo. ○ se mostrará un mensaje de bienvenida mostrando el nombre de la empresa y el
>
> cometido del servidor en particular.
>
> ● normalmente, en los servidores de FTP, al igual que en los de Web, se define una carpeta en el
>
> sistema de ficheros como punto de acceso de los usuarios al servidor. Como medida de
>
> seguridad, cabrá cambiar la ubicación de la/s carpeta/s creada/s en relación a la documentación
>
> de traducciones y proyectos.
>
> ● conseguir que los accesos desde el cliente al servidor se hagan en un entorno seguro basado en
>
> el uso de certificados digitales (SSL/TLS) añadirá puntuación extra.
>
> ● cada servidor será identificado por su propio FQHN a partir del dominio “traductores.net​ 3​”.
>
> ### 4. Tareas
>
> ● cada grupo deberá organizar el trabajo dentro del grupo, repartiendo funciones técnicas y
>
> grupales, y entregando las actas correspondientes en los plazos marcados.
>
> ● al término de la implementación cada grupo deberá entregar un documento de resumen que
>
> incluya los siguientes aspectos
>
> ### 1. Descripción del problema​
>
> ### 2. Desarrollo técnico​
>
> ### 3. Evaluación versiones de FTP​
>
> ### 4. Problemas técnicos encontrados​
>
> ### 5. Webgrafía
>
> 2 ​Este ajuste corresponde a la técnica llamada “enjaulamiento”. Averigua cómo implementarla en el servidor en el
>
> que te encuentres. 3 ​El uso de un servidor DNS tendrá mayor valoración que el de identificar a cada servidor mediante el fichero “/etc/hosts”. 4 ​Supone describir qué se os pedía en el enunciado de partida y qué solución habéis dado (número de servidores usado, función de cada uno dentro del conjunto, etc.) 5 Aquí cabe incluir los detalles de configuración, dando una explicación sobre los mismos.
>
> 6 ​En este apartado, tenéis que exponer los pros y los contras de cada versión de FTP usada (facilidad de configuración y puesta en marcha, aspectos que podían implementarse y cuáles no, etc.). 7 ​Cabe referir los errores más comunes y apuntar su solución.
>
> ### 5. Recursos básicos
>
> ¿Qué es el FTP?
>
> ● Definición, tipos de usuarios, modos activo/pasivo ○ http://es.wikipedia.org/wiki/File_Transfer_Protocol ○ http://etwiki.cpanel.net/twiki/bin/view/11_36/Es/WHMDocsEs/FTPPassiveModeEs
>
> Gestión de permisos
>
> ● En Linux se pueden definir ACLs a nivel de Sistema de Ficheros. ○ http://www.alcancelibre.org/staticpages/index.php/uso-getfacl-getfacl
>
> ● ACLs - Listas de control de acceso ○ http://es.wikipedia.org/wiki/Lista_de_control_de_acceso

---
