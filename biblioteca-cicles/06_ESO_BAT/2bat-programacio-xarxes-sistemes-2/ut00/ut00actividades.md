---
layout: default
title: "✍️ Activitats pràctiques UT0 — Programació, Xarxes i Sistemes Informàtics II | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n Batxillerat · UT0 — Introducción a Phyton"
prev_url: "../ut00/ut0010.html"
prev_label: "⬅️ 0.10 Ficheros"
next_url: "../ut01/index.html"
next_label: "📘 UT1 Completa ➡️"
---

# ✍️ Activitats pràctiques UT0

> **✍️ Activitat Pràctica 0.1 — Exercici Python**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 0.2 — Exercici Cadenas**
> 1. Escribir un programa que pregunte el nombre del usuario en la consola y su pueblo e imprima por pantalla en líneas distintas el nombre del usuario y su pueblo.

> **✍️ Activitat Pràctica 0.3 — Exercici Operadors**
> Pide al usuario que introduzca dos números y muestra por pantalla el resultado de utilizar los diferentes operadores: aritméticos, comparación y asignación. Pon un comentario en cada uno de los operadores para saber que estas haciendo.
>
> Ejemplo de resultado:
>
> La suma de a y b es = X
>
> La resta de a y b es = X
>
> .
>
> .
>
> .
>
> .
>
> La expresión a and b devuelve ...

> **✍️ Activitat Pràctica 0.4 — Práctica 1**
> 2n BAT UD1 – Introducció a la programació
>
> Práctica1 – Escritura de algoritmos de pseudocodigo.
>
> Crea un programa llamado ejecute las instrucciones necesarias para realizar, de forma consecutiva y ordenada, las siguientes tareas
>
> ### 1. Pedir el nombre del usuario y darle la bienvenida al programa. Por ejemplo
>
> “Bienvenid@ al programa de la unidad 1.”
>
> ### 2. Pedir una cadena de texto al usuario, calcular su longitud y mostrar por pantalla
>
> el resultado.
>
> ### 3. Calcular el área de un círculo. Para ello, el programa pedirá al usuario el radio
>
> (número real) del mismo y calculará su área utilizando la siguiente fórmula matemática: A=π ⋅r2 El resultado se mostrará redondeado a cuatro decimales.
>
> Es recomendable que incluyas comentarios con la descripción de cada una de las tareas.
>
> EVALUACIÓN Esta actividad es obligatoria. Se tendrá en cuenta para la nota práctica de la segunda evaluación.
>
> La respuesta correcta pero también la presentación del trabajo. El profesor puede preguntar a los alumnos cómo han resuelto los ejercicios.

> **✍️ Activitat Pràctica 0.5 — Ejercicios de Cadenas**
> Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.

> **✍️ Activitat Pràctica 0.6 — Práctica 2**
> ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Módulos, estructuras y tipos de datos Ejercicio obligatorio Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.
>
> Autora: María Paz Segura Valero (mpazprofe@gmail.com)
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio CONTENIDO
>
> - Introducción.....................................................................................................................................2
> - Enunciado........................................................................................................................................2
> - Ejemplos de uso...............................................................................................................................4
>
> 3.1. Imprimir todos los vuelos........................................................................................................4 3.2. Buscar un número de vuelo.....................................................................................................5 3.3. Buscar vuelo por clave.............................................................................................................6 3.4. Añadir vuelo nuevo..................................................................................................................7 3.5. Borrar vuelo por número..........................................................................................................7
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio
>
> ### 1. Introducción
>
> En este documento puedes encontrar el ejercicio obligatorio de esta unidad. Es imprescindible entregarlo en tiempo y forma para superar esta parte del curso. Tendrás la oportunidad de realizar la entrega de varias versiones del ejercicio hasta que consigas superarlo y la profesora te indicará en cada corrección las mejoras necesarias.
>
> En cualquier momento puedes lanzar preguntas al foro del curso o realizar una entrega parcial del ejercicio acompañada de una lista de dudas para que la profesora pueda orientarte en su resolución.
>
> ### 2. Enunciado
>
> Vamos a crear un programa llamado ud2_ejercicio_obligatorio.py que gestione los datos de la lista de vuelos del Aeropuerto de Valencia. Cada vuelo dispondrá de la siguiente información: número de vuelo, origen, destino, día y clase e, inicialmente, ya se dispondrá de la información de los siguientes vuelos
>
> número origen destino día clase Valencia Menorca 15-08 turista Valencia Tenerife 20-08 turista París Valencia 15-08 primera Atenas Valencia 20-08 primera El programa mostrará el siguiente menú
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio Según la opción seleccionada, el programa reaccionará como se indica en la siguiente tabla: Opción Respuesta Se imprimen los datos de todos los vuelos de la lista. Si la lista estuviese vacía, habría que mostrar un mensaje al usuario.
>
> Se pide al usuario el número de vuelo y se muestran sus datos. Si la lista estuviese vacía o el número de vuelo no existiese, habrá que mostrar un mensaje al usuario. Se pregunta al usuario el nombre de la clave por la que se quiere buscar. Si es una clave correcta, se muestra el valor asociado. Si no, se avisa del error.
>
> Si la lista estuviese vacía, habría que mostrar un mensaje al usuario. Se piden los datos para el nuevo vuelo y se añade dicho vuelo a la lista. Se pide al usuario el número de vuelo. Si se encuentra el vuelo entonces se borra de la lista. Si la lista estuviese vacía o el número de vuelo no existiese, habrá que mostrar un mensaje al usuario.
>
> El programa acaba. Después de realizar las tareas correspondientes a la opción seleccionada, se volverá a mostrar el menú al usuario. Aunque el programa podría mejorarse para realizar una mejor gestión de la lista de vuelos, no vamos a preocuparnos de detalles de la gestión de datos como, por ejemplo, que no existan vuelos repetidos, que no existan vuelos con todos los datos en blanco, que se escriba el día con el formato requerido, etc.
>
> Puedes crear el programa desde cero o basarte en el esquema que tienes en el fichero ud2_ejercicio_obligatorio (ESQUEMA).py del aula virtual. En este caso, deberás sustituir las instrucciones pass por las instrucciones adecuadas para que funcione el programa según el enunciado.
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio
>
> ### 3. Ejemplos de uso
>
> En este apartado puedes ver algunos ejemplos de la ejecución del programa, para que te ayuden a entenderlo mejor.
>
> #### 3.1. Imprimir todos los vuelos
>
> Si existen vuelos en la lista, se muestran sus datos: Si no existen vuelos en la lista, se muestra mensaje de aviso
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio
>
> #### 3.2. Buscar un número de vuelo
>
> Si existe el vuelo en la lista, se muestran sus datos: Si no existe el vuelo pero sí otros vuelos en la lista, se muestra error: Si no existen vuelos en la lista, se muestra aviso
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio
>
> #### 3.3. Buscar vuelo por clave
>
> Si existen la clave y el valor introducidos por el usuario, se muestran sus datos: Si existe la clave pero no hay ningún vuelo con ese valor, se muestra un error: Si no existe la clave introducida, se muestra un error
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio Si no existen vuelos en la lista, se muestra aviso
>
> #### 3.4. Añadir vuelo nuevo
>
> #### 3.5. Borrar vuelo por número
>
> Se encuentra el número de vuelo indicado
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio No se encuentra el número de vuelo indicado pero hay más vuelos en la lista: Si no existen vuelos en la lista, se muestra aviso

> **✍️ 📋 Exercici / Qüestionari 0.7 — Solució Pràctica 2**
> ```py
> def imprimirVols(llistaDeVols):
>
>     print("\nDADES DELS VOLS:")
>
>
>
>     for vol in llistaDeVols:
>
>         for atribut in vol.keys():
>
>             print(atribut + ": " + vol[atribut] + ", ", end="")
>
>         print()
>
> def cercarNombreDeVol(llistaDeVols):
>
>     print("\nCERCAR VOL PER NOMBRE:")
>
>     existix = False
>
>
>
>     if len(llistaDeVols) == 0:
>
>         print("No hi ha vols.")
>
>     else:
>
>         nombreVol = input("Nombre de vol: ")
>
>         for vol in llistaDeVols:
>
>             if vol['nombre'] == nombreVol:
>
>                 print("\nDades del vol: ")
>
>                 existix = True
>
>                 for k,v in vol.items():
>
>                     print(k + ": " + v + ", ", end="")
>
>         if not existix:
>
>             print("El nombre de vol no existix")
>
> def cercarVolPerClau(llistaDeVols):
>
>     print("\nCERCAR VOL PER CLAU:")
>
>
>
>     existix = False
>
>     if len(llistaDeVols) == 0:
>
>         print("No hi ha vols.")
>
>     else:
>
>         clau = input("Clave: ").lower()
>
>         valor = input("Valor: ").lower()
>
>         for vol in llistaDeVols:
>
>             if vol[clau] == valor:
>
>                 print("\nDades del vol: ")
>
>                 existix = True
>
>                 for k,v in vol.items():
>
>                     print(k + ": " + v + ", ", end="")
>
>                 print()
>
>         if not existix:
>
>             print("El nombre de vol no existix")
>
> def afegirVolNou(llistaDeVols):
>
>     print("AFEGIR NOU VOL")
>
>     nombre = input("Nombre: ")
>
>     origen = input("Origen: ")
>
>     desti = input("Destí: ")
>
>     dia = input("Dia: ")
>
>     classe = input("Classe: ")
>
>     vol = {'nombre': nombre, 'origen': origen, 'desti': desti, 'dia': dia, 'classe': classe}
>
>     llistaDeVols.append(vol)
>
>     print("Vol afegit a la llista.")
>
> def esborrarVolPerNombre(llistaDeVols):
>
>     print("BORRAR VOL PER NOMBRE:")
>
>     existix = False
>
>     if len(llistaDeVols) == 0:
>
>         print("No hi ha vols.")
>
>     else:
>
>         nombreVol = input("Nombre de vol: ")
>
>         i = 0
>
>         for vol in llistaDeVols:
>
>             if vol['nombre'] == nombreVol:
>
>                 existix = True
>
>                 break
>
>             i = i + 1
>
>
>
>         if not existix:
>
>             print("El nombre de vol no existix")
>
>         else:
>
>             print("Vol nº " + nombreVol + " eliminat.")
>
>             llistaDeVols.pop(i)
>
> def main():
>
>     vol1 = {'nombre': "2020-01", 'origen': "valencia", 'desti': "menorca", 'dia': "15-08", 'classe': "turista"}
>
>     vol2 = {'nombre': "2020-02", 'origen': "valencia", 'desti': "tenerife", 'dia': "20-08", 'classe': "turista"}
>
>     vol3 = {'nombre': "2020-03", 'origen': "paris", 'desti': "valencia", 'dia': "15-08", 'classe': "primera"}
>
>     vol4 = {'nombre': "2020-04", 'origen': "atenes", 'desti': "valencia", 'dia': "20-08", 'classe': "primera"}
>
>     llistaDeVols = [vol1, vol2, vol3, vol4]
>
>     # listaDeVuelos = [vuelo1, vuelo2, vuelo3, vuelo4]
>
>     mostrarMenu = True
>
>     while mostrarMenu:
>
>         print("================================================")
>
>         print("        VOLS DE L'AEROPUERTO DE VALENCIA       ")
>
>         print("================================================")
>
>         print("1 - Imprimir tots els vols")
>
>         print("2 - Cercar un nombre de vol")
>
>         print("3 - Cercar vol por clau")
>
>         print("4 - Afegir vol nou")
>
>         print("5 - Esborrar vol per nombre")
>
>         print("0 - EIXIR")
>
>         print("------------------------------------------")
>
>
>
>         opcio = int(input("Donam l'opció: "))
>
>         if opcio == 1:
>
>             imprimirVols(llistaDeVols)
>
>         elif opcio == 2:
>
>             cercarNombreDeVol(llistaDeVols)
>
>         elif opcio == 3:
>
>             cercarVolPerClau(llistaDeVols)
>
>         elif opcio == 4:
>
>             afegirVolNou(llistaDeVols)
>
>         elif opcio == 5:
>
>             esborrarVolPerNombre(llistaDeVols)
>
>         elif opcio == 0:
>
>             mostrarMenu = False
>
>         else:
>
>             print("Opció no reconeguda")
>
>         print("\n")
>
> main()
> ```

> **✍️ Activitat Pràctica 0.8 — Práctica 3**
> ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Módulos, estructuras y tipos de datos Ejercicios voluntarios Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.
>
> Autora: María Paz Segura Valero (mpazprofe@gmail.com)
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios CONTENIDO
>
> - Introducción.....................................................................................................................................2
> - Ejercicios voluntarios......................................................................................................................2
>
> 2.1. Ejercicio 1: Validar credenciales..............................................................................................2 2.2. Ejercicio 2: Colores.................................................................................................................2 2.3. Ejercicio 3: Multiplicando.......................................................................................................3 2.4. Ejercicio 4: Chatbot.................................................................................................................4 2.4.1. Chatbot mejorado.............................................................................................................6 2.5. Ejercicio 5: Lista de números..................................................................................................6 2.6. Ejercicio 6: Jugadores on-line..................................................................................................7 2.7. Ejercicio 7: Vuelo..................................................................................................................10
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios
>
> En este documento puedes encontrar una serie de ejercicios voluntarios para que pongas en práctica lo aprendido durante esta unidad. En el aula virtual dispondrás de las soluciones pero te recomiendo que intentes solucionarlos por ti mismo/a porque, aunque no sean obligatorios para superar el curso, sí pueden ayudarte a enfrentarte al ejercicio obligatorio del final.
>
> Puedes utilizar el foro del curso para consultar tus dudas.
>
> ### 2. Ejercicios voluntarios
>
> #### 2.1. Ejercicio 1: Validar credenciales
>
> Escribe un programa que pida por teclado un nombre de usuario y una contraseña. Si se ha introducido el nombre de usuario “ana” y la contraseña “12345” mostrará el mensaje “Bienvenid@ al sistema”, si no aparecerá el mensaje de error “Acceso no autorizado”. Figura 1: Ejecuciones del programa En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer1_validar_credenciales.py.
>
> #### 2.2. Ejercicio 2: Colores
>
> Escribe un programa que pida el color favorito del/de la usuario/a y muestre por pantalla la palabra asociada, según la siguiente tabla: Color Palabra asociada rojo PASIÓN amarillo FELICIDAD
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios verde ESPERANZA azul CALMA morado CREATIVIDAD Un color distinto de los anteriores Mensaje de error Consejo: convierte el texto introducido por el usuario a minúsculas (función lower()) para que te resulte más sencillo aceptar todas las formas de escritura de la misma palabra.
>
> Figura 2: Ejecuciones del programa En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer2_colores.py.
>
> #### 2.3. Ejercicio 3: Multiplicando
>
> Escribe un programa que pida al usuario un número entero del 1 al 10 y muestre por pantalla su tabla de multiplicar. Deberás convertir el texto introducido por el usuario al tipo entero (int) y validar que se encuentre en el rango correcto. Si no es así, mostraremos un error al usuario y acabará el programa.
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Figura 3: Ejemplo de ejecución En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer3_multiplicando.py.
>
> #### 2.4. Ejercicio 4: Chatbot
>
> Vamos a escribir un programa que se comporte como un chatbot o bot conversacional. Este tipo de programas simulan mantener conversaciones con el usuario basándose en respuestas automáticas a la información ofrecida por el usuario. Para familiarizarte con el uso de un chatbot, puedes probar el del siguiente enlace que está programado en Python: https://trinket.io/python/d535629467?outputOnly=true Nuestro chatbot será sencillo y seguirá el siguiente comportamiento
>
> ### 1. Saludo
>
> el programa preguntará el nombre al usuario y lo saludará. Por ejemplo
>
> ### 2. Conversación
>
> el programa estará preguntando continuamente al usuario qué quiere saber sobre la Informática hasta que el usuario decida acabar la conversación. • El usuario podrá introducir las palabras CITA, DATO o ANÉCDOTA para acceder a la información y el programa reaccionará de la siguiente manera
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Elección Respuesta CITA Mostrará por pantalla: “Si piensas que los usuarios de tus programas son idiotas, sólo los idiotas usarán tus programas” – Linus Torvalds DATO Mostrará por pantalla: “El código binario es el lenguaje de las máquinas.” ANÉCDOTA Mostrará por pantalla: “Ada Lovelace fue una matemática británica considerada la primera persona que escribió un algoritmo destinado a ser procesado por una máquina.” blanco Si pulsara la tecla Intro/Enter sin introducir ningún valor (cadena vacía) entonces el programa saldrá del bucle de la conversación.
>
> Otro valor Mostrará por pantalla: “--> Opción incorrecta. Prueba otra vez.”
>
> ### 3. Despedida
>
> el programa escribirá una frase de despedida y acabará. Por ejemplo: A continuación puedes ver un ejemplo completo de ejecución del programa: Figura 4: Ejemplo de ejecución
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer4_chatbot.py.
>
> #### 2.4.1. Chatbot mejorado
>
> Vamos a mejorar el chatbot incluyendo una frase más en cada opción. Para decidir qué frase mostrar en cada momento, puedes utilizar variables lógicas para cada una de las opciones e ir intercalando los mensajes. Si la variable es True entonces mostraremos la primera frase y si es False entonces mostraremos la segunda.
>
> A continuación puedes ver un ejemplo completo de la ejecución del programa: Figura 5: Ejemplo de ejecución del programa En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer4_chatbot_mejorado.py.
>
> #### 2.5. Ejercicio 5: Lista de números
>
> Crea un programa que lea una lista de números enteros por teclado hasta que se introduzca un número negativo. El número negativo no se añadirá a la lista, sólo lo utilizaremos para saber cuando acabar de pedir datos.
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Después muestra la siguiente información: la lista de números introducida, la cantidad de números leídos, la suma de todos los números, el número más grande y el más pequeño e indica si la lista está ordenada de menor a mayor.
>
> Aquí tienes un ejemplo de ejecución del programa: Figura 6: Ejemplo de ejecución En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer5_numeros.py.
>
> #### 2.6. Ejercicio 6: Jugadores on-line
>
> Vamos a crear un programa que gestione la lista de jugadores on-line de un juego. Para simplificar su gestión simularemos una cola FIFO (First In First Out), de tal forma que, cuando llegue un jugador lo añadiremos al final de la cola y cuando se vaya un jugador siempre se irá el de la primera posición.
>
> mario mafalda luigi esther Heidi El programa debe funcionar de la siguiente forma
>
> ### 1. Inicio
>
> podemos tener una lista creada de jugadores on-line con varios de ellos. Si es así, la mostraremos al principio del programa para que el usuario sepa con qué jugadores cuenta ya la lista.
>
> ### 2. Cuerpo
>
> mostraremos un menú como en el que se muestra a continuación.
>
> IN OUT
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Figura 7: Menú del programa Según la opción seleccionada, el programa reaccionará como se indica en la siguiente tabla: Opción Respuesta Se pide el nombre del nuevo jugador al usuario, se le da la bienvenida y se añade al final de la lista de jugadores.
>
> Además, se muestra la lista actual de jugadores. Se extrae el jugador del principio de la lista y se muestra un mensaje informativo. Por ejemplo: “El jugador Pepito se va”. Además, se muestra la lista actual de jugadores. Se muestra la lista actual de jugadores y acaba el programa.
>
> otra Se mostrará un mensaje de error y se seguirá pidiendo la opción.
>
> ### 3. Final
>
> mostraremos un mensaje de despedida. A continuación puedes ver un ejemplo completo de ejecución del programa
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Figura 8: Añadimos dos jugadores nuevos Figura 9: Eliminamos dos jugadores Figura 10: Salimos del programa
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios Puedes crear el programa desde cero o basarte en el esquema que tienes en el fichero ud2_ejer6_jugadores_online (ESQUEMA).py del aula virtual. En este caso, deberás sustituir las instrucciones pass por las instrucciones adecuadas para que funcione el programa según el enunciado.
>
> En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer6_jugadores_online.py.
>
> #### 2.7. Ejercicio 7: Vuelo
>
> Crear un programa que utilice un diccionario para gestionar la información de un vuelo. Originalmente el diccionario contendrá la siguiente información: Clave Valor origen valencia destino menorca día 15-08 clase turista El programa mostrará el siguiente menú: Según la opción seleccionada, el programa reaccionará como se indica en la siguiente tabla
>
> Opción Respuesta Se imprimen las claves y valores del diccionario. Se pregunta al usuario el nombre de la clave de la que quiere
>
> Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicios voluntarios consultar el valor. Si es una clave correcta, se muestra el valor asociado. Si no, se avisa del error. Se pide el número de pasajeros del vuelo y se crea la clave “pasajeros” con el valor introducido por el usuario.
>
> Se imprimen las claves del diccionario. Se pregunta al usuario el nombre del clave que quiere borrar del diccionario. Si es una clave correcta, se borra el par (clave:valor) del diccionario. Si no, se avisa del error. El programa acaba. Después de realizar las tareas correspondientes a la opción seleccionada, se volverá a mostrar el menú al usuario.
>
> Puedes crear el programa desde cero o basarte en el esquema que tienes en el fichero ud2_ejer7_vuelo (ESQUEMA).py del aula virtual. En este caso, deberás sustituir las instrucciones pass por las instrucciones adecuadas para que funcione el programa según el enunciado.
>
> En el aula virtual dispones de la solución del ejercicio en el fichero ud2_ejer7_vuelo.py.

> **✍️ Activitat Pràctica 0.9 — Práctica 4**
> ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Organizando código y datos Ejercicios voluntarios Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.
>
> Autora: María Paz Segura Valero (mpazprofe@gmail.com)
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios CONTENIDO
>
> - Introducción.....................................................................................................................................2
> - Ejercicios voluntarios......................................................................................................................2
>
> 2.1. Ejercicio 1: Validar opción de menú........................................................................................2 2.2. Ejercicio 2: Operando con listas..............................................................................................3 2.3. Ejercicio 3: Cambiar la contraseña..........................................................................................4 2.4. Ejercicio 4: Validar credenciales..............................................................................................5 2.5. Ejercicio 5: Datos de un jugador..............................................................................................6 2.5.1. Función cargar_datos().....................................................................................................7 2.5.2. Función modificar_datos()...............................................................................................8 2.5.3. Función guardar_datos()..................................................................................................8 2.5.4. Algunos consejos..............................................................................................................9
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios
>
> En este documento puedes encontrar una serie de ejercicios voluntarios para que pongas en práctica lo aprendido durante esta unidad. En el aula virtual dispondrás de las soluciones pero te recomiendo que intentes solucionarlos por ti mismo/a porque, aunque no sean obligatorios para superar el curso, sí pueden ayudarte a enfrentarte al ejercicio obligatorio del final.
>
> Puedes utilizar el foro del curso para consultar tus dudas.
>
> #### 2.1. Ejercicio 1: Validar opción de menú
>
> Escribe un programa en Python que contenga una función llamada valida_opcion(). Esta función mostrará un menú por pantalla y validará que la opción elegida por el usuario es una de las correctas. Para ello, habrá que tener en cuenta los siguientes puntos: • La función no recibirá ningún parámetro.
>
> • Estará mostrando el menú y pidiendo la opción al usuario continuamente hasta que se asegure de que la opción elegida está dentro de las correctas. • Devolverá la opción elegida en la llamada. • Documenta la función con un docstring donde expliques para qué sirve y cómo se utiliza.
>
> El menú que debe mostrar es el que aparece a continuación
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios En la imagen siguiente podemos ver algunos ejemplos de ejecución del programa: Figura 1: Opción no válida
>
> Figura 2: Opción válida En el aula virtual dispones de la solución del ejercicio en el fichero ud3_ejer1_valida_opcion.py.
>
> #### 2.2. Ejercicio 2: Operando con listas
>
> Crea un programa que incluya una función llamada operando() a la que se le pase una lista de números enteros para operar con ellos y devuelva una tupla donde aparezcan los siguientes resultados: • La longitud de la lista. • Una copia de la lista con los números ordenados de menor a mayor.
>
> • Un número seleccionado al azar de la lista. Para ello deberás utilizar la función choice() del módulo random que tiene esta sintaxis: random.choice(lista) Figura 3: Ejemplo de uso de random.choice()
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios Recuerda documentar la función con un docstring donde expliques para qué sirve y cómo se utiliza. Aquí puedes ver un ejemplo de ejecución del programa
>
> Figura 4: Ejecución del programa En el aula virtual dispones de la solución del ejercicio en el fichero ud3_ejer2_operando_listas.py.
>
> #### 2.3. Ejercicio 3: Cambiar la contraseña
>
> Escribe un programa que utilice una función llamada cambio_pwd() y gestione el cambio de contraseña de un usuario. Para ello, ten en cuenta los siguientes puntos: • La función recibirá como parámetro la contraseña actual. • La función pedirá al usuario que introduzca la contraseña actual (para asegurarnos que se la sabe) y la nueva contraseña.
>
> ◦Si la contraseña actual introducida por pantalla es correcta, permitiremos el cambio. ◦Si no lo es, daremos error y volveremos a solicitar los datos hasta un máximo de 3 intentos. • Si se ha aceptado el cambio entonces la función devolverá la nueva contraseña. En otro caso, devolverá una cadena vacía.
>
> Recuerda documentar la función con un docstring donde expliques para qué sirve y cómo se utiliza. A continuación puedes ver algunos ejemplos de ejecución del programa.
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios Figura 5: Cambio correcto
>
> Figura 6: Error y cambio satisfactorio Figura 7: Agotamos el número de intentos permitidos En el aula virtual dispones de la solución del ejercicio en el fichero En el aula virtual dispones de la solución del ejercicio en el fichero ud3_ejer2_operando_listas.py.
>
> #### 2.4. Ejercicio 4: Validar credenciales
>
> Escribe un programa que valide las credenciales de un usuario. Para ello, pedirá por pantalla el nombre de usuario y contraseña y comprobará si existen en el fichero de texto credenciales.txt. En cada línea del fichero aparece un nombre de usuario y una contraseña separados por un guión (-), como se puede ver a continuación
>
> Figura 8: Contenido "credenciales.txt" Utiliza las cláusulas try necesarias para gestionar las posibles excepciones que se puedan presentar. Por ejemplo: que no se pueda abrir el fichero.
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios A continuación puedes ver algunos ejemplos de ejecución del programa. Figura 9: Acceso autorizado Figura 10: Acceso no autorizado En el aula virtual dispones de la solución del ejercicio en el fichero ud3_ejer4_validar_credenciales.py.
>
> #### 2.5. Ejercicio 5: Datos de un jugador
>
> Vamos a crear un programa que permita gestionar los datos de un jugador en un juego de rol determinado. Utilizaremos un fichero de texto llamado datos_jugador.txt que contendrá los datos actualizados del jugador: nombre del jugador, nombre del personaje, lista de herramientas y vida.
>
> El programa utilizará una función llamada valida_opcion() que mostrará el siguiente menú y comprobará que la opción elegida por el usuario es correcta: Cada opción seleccionada ejecutará una función que responderá a la tarea. Opción Función ejecutada cargar_datos() modificar_datos() guardar_datos() Si se selecciona la opción 0 entonces el programa acabará.
>
> Cuando se acabe de ejecutar una acción, el programa volverá a mostrar el menú al usuario. En los siguientes apartados se explica cada una de esta funciones.
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios
>
> #### 2.5.1. Función cargar_datos
>
> Cuando se seleccione la opción ‘1’, el programa leerá los datos del fichero datos_jugador.txt y los almacenará en un diccionario con las siguientes claves: Clave Descripción nombre_jugador Nombre del jugador. Podría corresponderse con un nombre de usuario. personaje Nombre del personaje que utiliza el jugador.
>
> herramientas Lista de herramientas con las que puede jugar. Para facilitar el diseño del programa, vamos a suponer que esta lista de herramientas siempre tiene, al menos, una herramienta. vida Número entero que indica la vida que le queda al personaje. La función no recibirá ningún parámetro pero devolverá un diccionario nuevo con los datos leídos del fichero.
>
> Originalmente, el fichero contendrá la siguiente información: Figura 11: Contenido de "datos_jugador.txt" Los campos del registro están separados entre sí por un guión (-). Los valores de los distintos campos son los siguientes: Campo Valor nombre del jugador Sergio personaje sabio lista de herramientas varita, conjuro, sombrero, búho vida Existe una función de cadenas de texto llamada split() que nos permite obtener una lista con todos los elementos de una cadena teniendo en cuenta un carácter de separación (blanco por defecto). Su sintaxis es la siguiente: mi_cadena.split(carácter_separación) Figura 12: Aplicamos split() a la línea de texto del fichero
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios Fíjate que la lista de herramientas contiene varios elementos dentro y para separar los unos de los otros utilizamos la coma (,). Así, la lista estaría formada de la siguiente forma
>
> varita conjuro sombrero búho Si aplicamos nuevamente la función split() sobre el elemento de la posición 2 de la lista original entonces podremos obtener una nueva lista con todas las herramientas: Figura 13: Aplicamos la función split() A la hora de leer la línea del fichero, recuerda quitar el carácter de fin de línea ‘\n’ antes de procesarla.
>
> #### 2.5.2. Función modificar_datos
>
> Esta función se ejecutará cuando el usuario seleccione la opción ‘2’ y permitirá modificar un valor del diccionario. Para ello, el programa realizará las siguientes acciones
>
> - Mostrará una lista de las claves que tiene el diccionario.
> - Pedirá la clave y el nuevo valor al usuario.
> - Si todo es correcto, se cambiará el valor en el diccionario.
>
> Esta función recibirá como parámetro el diccionario actual del programa y devolverá una copia del mismo con los datos actualizados.
>
> #### 2.5.3. Función guardar_datos
>
> Esta función se ejecutará cuando el usuario elija la opción ‘3’ y se encargará de leer los datos del diccionario y volcarlos al fichero datos_jugador.txt Para ello, recibirá como parámetro de entrada el diccionario del programa y no devolverá ningún valor. Cuando tengas que formar la cadena que escribirás en el fichero, te puede ser útil utilizar el operador + para concatenar los valores con los separadores.
>
> Escuela de programación - Python Organizando código y datos: ejercicios voluntarios
>
> #### 2.5.4. Algunos consejos
>
> Para poder hacer el seguimiento del funcionamiento del programa, te aconsejo que incluyas una instrucción print(diccionario) al final de cada opción para comprobar si se ha modificado el diccionario del programa correctamente. Como el usuario no tiene por qué ejecutar las opciones en orden, es posible que intente modificar un dato antes de cargar los datos del fichero, con lo cual, el diccionario estará vacío. Deberás contemplar este tipo de errores y otros que se te ocurran. En algunos casos hará falta manejar excepciones y, en otros, solo será necesario imprimir un aviso al usuario.
>
> Puedes crear el programa desde cero o basarte en el esquema que tienes en el fichero ud3_ejer5_datos_jugador (ESQUEMA).py del aula virtual. Busca los comentarios #PROFE para leer mis indicaciones. En el aula virtual dispones de la solución del ejercicio en el fichero ud3_ejer5_datos_jugador.py.

> **✍️ Activitat Pràctica 0.10 — Entregable: Projecte Videojoc**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
