---
layout: default
title: "UT1 — Programació — Programació, Xarxes i Sistemes Informàtics I | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r Batxillerat · UT1 Completa"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 01_Conceptos básicos ➡️"
---

# 📘 UT1 — Programació (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 01_Conceptos básicos**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**1.2 02_Condicionales**](#ut0102) (o [obrir en pàgina individual ➡️](./ut0102.md) )
> - [**1.3 03_Listas y tuplas**](#ut0103) (o [obrir en pàgina individual ➡️](./ut0103.md) )
> - [**1.4 04_Bucles**](#ut0104) (o [obrir en pàgina individual ➡️](./ut0104.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 01_Conceptos básicos

PROGRAMACIÓN

### 1. Conceptos básicos y variables

Índice

- Hola mundo
- Variables
- Strings
- Números
- Comentarios
- Zen de Python
- Ejercicios

Python: 1. Conceptos básicos y variables

Hola mundo

- Función print(): Mostrar por pantalla
- SyntaxError
- Errores tipográficos
- Paréntesis incompletos
- Falta de comillas…

print ("Hola mundo") Hola mundo pint ("Hola mundo") Traceback (most recent call last): File "<stdin>", line 1, in <module> NameError: name 'pint' is not defined Ejercicio Escribe un programa que muestre por pantalla: ¡Hola mundo! Python: 1. Conceptos básicos y variables

- Las variables guardan los valores que le asignamos
- Python diferencia entre mayúsculas y minúsculas
- Podemos cambiar los valores de las variables en cualquier momento

mensaje = "Hola mundo" print(mensaje) Hola mundo mensaje = "Hola mundo" print(mensaje) mensaje = "Estoy estudiando Python" print (mensaje) Hola mundo Estoy estudiando Python mensaje = "Hola mundo" print(Mensaje) ERROR Variables Ejercicio Escribe un programa que

### 1. Guarde el mensaje: "Estoy en

clase" en una la variable

### 2. Muestre el mensaje

### 3. Cambia el valor de la variable

a: "Estudio Python".

### 4. Muestra el mensaje

Python: 1. Conceptos básicos y variables

Variables SINTAXIS VARIABLES

- No podemos usar palabras "reservadas" del propio lenguaje de programación (print,

input…)

- No deben incluir espacios (edad del usuario edad_usuario)
- Sólo pueden contener letras, números y el guion bajo
- No pueden empezar con un número (se puede usar mensaje1 pero no 1mensaje)
- Nombre representativo (contador, edad, nombre) en lugar de usar x, azz32, c3
- Convención: las variables deben empezar con minúsculas

Python: 1. Conceptos básicos y variables

Variables - Strings

- Strings son cadenas de texto.
- Texto entre comillas dobles o simples
- Esto permite usar textos entrecomillados

mensaje = "Hola mundo" print(mensaje) Hola mundo mensaje = 'Hola mundo' print(mensaje) Hola mundo mensaje = 'Le dije a un amigo: "Python es mi lenguaje favorito"' print(mensaje) Le dije a un amigo: "Python es mi lenguaje favorito". Ejercicio: Busca una cita famosa y muéstrala entre comillas junto con el nombre del autor. Por ejemplo

"La innovación es lo que distingue a un líder de un seguidor", Steve Jobs. Python: 1. Conceptos básicos y variables

Variables - Strings FORMATO

- Primera letra en mayúscula .title()
- Todas las letras en mayúscula .upper()
- Todas las letras en minúscula .lower()

nombre = "rebeca VIDAL" print(nombre.title()) Rebeca Vidal nombre = "rebeca VIDAL" print(nombre.upper()) REBECA VIDAL nombre = "rebeca VIDAL" print(nombre.lower()) rebeca vidal Ejercicio: Guarda tu nombre y apellidos y muéstralo en pantalla: • En mayúsculas • En minúsculas • Cada palabra que comience por mayúscula Python: 1. Conceptos básicos y variables

Variables - Strings CONCATENACIÓN

- Concatenar variables en otra variable
- Concatenar texto y variables

nombre = "rebeca" apellido = "vidal" nombre_completo = nombre + " " + apellido print(nombre_completo) rebeca vidal nombre = "rebeca" apellido = "vidal" nombre_completo = nombre + " " + apellido print("Hola, " + nombre_completo.title()) Hola, Rebeca Vidal Ejercicio: Repite el ejemplo de la izquierda con tu nombre y apellidos.

Python: 1. Conceptos básicos y variables

Variables - Strings ESPACIOS

- Añadir una tabulación \t
- Añadir un salto de línea \n

print ("\tHola") Hola print ("Hola. \nEscriba nombre y apellidos.") Hola. Escriba nombre y apellidos. Ejercicio: Utiliza print() para mostrar por pantalla tus 3 asignaturas favoritas. Cada asignatura debe estar en una línea diferente (utiliza \n) Python: 1. Conceptos básicos y variables

Variables - Strings

- La función input() sirve para que el usuario haga una entrada de

datos. La información se guarda siempre en una variable. nombre_completo = input("Escriba nombre y apellido: ") print("Hola, " + nombre_completo) >>>rebeca vidal Hola, rebeca vidal Ejercicio: Escribe un programa que pida tu edad y lo guarde en una variable [edad]. Luego debe mostrar por pantalla: Tu edad es [edad].

Python: 1. Conceptos básicos y variables

Variables - Números

- Enteros (int)

sumar(+), restar(-), multiplicar (*), dividir (/), potencia (**)

- Decimales (float)

print(2+3) print(2.3+3.3) 5.6 Python: 1. Conceptos básicos y variables

Variables - Números ERRORES CON NÚMEROS

- Convertir a texto para mostrar dentro de un string
- Convertir a entero para operar

edad = 15 print ("Tengo " + str(edad) + " años") Tengo 15 años edad = 15 print ("Tengo " + edad + " años") ERROR euros = input ("¿Cuántos euros tienes? ") dolares = 1.08*euros print("Dólares:") print(dolares) ERROR euros = input ("¿Cuántos euros tienes? ") dolares = 1.08*int(euros) print("Dolares:") print(dolares) >>>5 Dolares

5.4 Python: 1. Conceptos básicos y variables

Comentarios

- Útiles para entender el código
- Comentarios en una línea: #
- Comentarios en un párrafo: abrir y cerrar con tres comillas '''

#saludar a todo el mundo print("Hola a todos") Hola a todos '''saludar a todo el mundo y dar las gracias''' print("Hola a todos, gracias por venir.") Hola a todos, gracias por venir. Ejercicio: Escribe un comentario en el ejercicio anterior Python: 1. Conceptos básicos y variables

Zen de Python

- 19 principios que debe seguir un programador. Escritos por Tim

Peters en 1999. import this Bonito es mejor que feo Explícito es mejor que implícito. Simple es mejor que complejo. Complejo es mejor que complicado. Plano es mejor que anidado. Disperso es mejor que denso. La legibilidad importa. Los casos especiales no son lo suficientemente especiales como para romper las reglas.

Practicidad vence a la pureza. Los errores nunca deberían ocurrir silenciosamente. A no ser que se silencien explícitamente. En el caso de ambigüedad, rechaza la tentación de adivinar Debería haber una, y preferiblemente solo una, forma obvia de hacerlo. Aunque la forma no parezca obvia a la primera, a no ser que seas Holandés.

Ahora es mejor que nunca. Aunque nunca es a menudo mejor que ahora mismo Si la implementación es difícil de explicar, es una mala idea. Si la implementación es fácil de explicar, puede que sea una buena idea. Los espacios de nombres son una gran idea, ¡tengamos más de esos!

https://elpythonista.com/zen-de-python Python: 1. Conceptos básicos y variables

Ejercicios Enviar un solo archivo con los 3 programas. Utilizar comentarios para identificar cada ejercicio. 1. País y ciudad. Crear un programa donde se guarde en dos variables

- nombre de un país
- nombre de su capital

y que muestre por pantalla: La capital de [país] es [capital]. Utiliza la función .title() para mostrar el nombre del país y capital. 2. Calcular IMC. Crear un programa que solicite

- Altura
- Peso

y que calcule y muestre por pantalla: Tu IMC es: [IMC] 3. Calcular descuento. Crear un programa que solicite

- Precio inicial de un artículo
- Porcentaje de descuento a aplicar

y que muestre por pantalla: El precio final del artículo es de [precio_final]. Python: 1. Conceptos básicos y variables

---

## 1.2 02_Condicionales

PROGRAMACIÓN

### 2. Condicionales

Índice

- Condicional if
- Comparaciones numéricas
- Comparaciones con "strings"
- Operador %
- Condicional if-else
- Condicional if-elif-else

Python: 2. Condicionales

Condicional if

- Si determinada condición se cumple se ejecutará una instrucción.
- Sintaxis
- if
- dos puntos (:)
- Todo lo que vaya dentro del if va indentado

Python: 2. Condicionales if se cumple la condición: ____ejecuta una instrucción

Condicional if

- Comparaciones numéricas

Python: 2. Condicionales edad = 19 if edad > 18: print("Mayor de edad") Mayor de edad Sintaxis Signo Valor igual que == Valor distinto de != Valor mayor que > Valor menor que < Valor Mayor o igual >= Valor menor o igual <= ¡Cuidado! Doble signo para la igualdad Recomendación: Dejar espacio entre el número y el signo para mayor claridad.

> **💡 Apunt Tècnic**
> Ejemplo: edad>18 edad > 18

Condicional if

- Comparaciones en "strings"

Python diferencia entre mayúsculas y minúsculas: Python: 2. Condicionales coche = 'ford' if coche != 'peugeot': print("Mi coche no es un peugeot") Mi coche no es un peugeot Sintaxis Signo Valor igual que == Valor distinto de != Longitud mayor que > Longitud menor que < Longitud Mayor o igual >= Longitud menor o igual <= coche = 'Ford' if coche == 'ford'

print("Mi coche es un ford") (Vacío) coche = 'Ford' if coche.lower() == 'ford': print("Mi coche es un ford") Mi coche es un ford

Condicional if

- Condiciones múltiples

Varias condiciones se deben cumplir a la vez (and): Una condición u otra se debe cumplir (or): Python: 2. Condicionales edad = 13 if edad > 6 and edad < 65: print("Entrada a precio habitual") Entrada a precio habitual edad = 5 if edad <= 6 or edad >= 65: print("Entrada con descuento") Entrada con descuento

Condicional if

- Operador %
- Calcula el resto de dividir un número por otro.
- Por ejemplo: 3 % 2 1
- Utilizando % podemos saber si un número es par (resto 0) o impar (resto 1)

Python: 2. Condicionales numero = 3 if numero % 2 == 1: print("número impar") número impar

Condicional if-else

- if-else: si se cumple la condición1, ejecuta la instrucción1, pero si no se cumple,

ejecuta la instrucción2.

- Sintaxis
- Ejemplo

Python: 2. Condicionales if se cumple la condición1: ejecuta la instrucción1 else: ejecuta instrucción2 edad = 13 if edad >= 18: print("Mayor de edad") else: print("Menor de edad") Menor de edad

Condicional if-elif-else

- if-elif-else
- Si se cumple condición1 ,ejecuta instrucción1.
- Si no se cumple condición1 pero se cumple condición2, ejecuta instrucción2.
- Si no se cumple nada, ejecuta instrucción 3
- Sintaxis

Python: 2. Condicionales if se cumple condición: ejecuta instrucción1 elif se cumple condición: ejecuta instrucción2 else: ejecuta instrucción3 edad = 13 if edad < 6: print("Entrada gratuita") elif edad < 18: print("Precio de la entrada: 5€") else: print("Precio de la entrada: 10€") Precio de la entrada: 5€

- Ejemplo

Condicional if-elif-else

- Puede haber varios elif encadenados
- No es obligatorio acabar con un else. Por ejemplo, podemos formar una cadena if-elif-elif

Python: 2. Condicionales edad = 13 if edad < 6: precio = 0 elif edad < 12: precio = 3 elif edad < 18: precio = 5 else: precio = 10 print("Coste de la entrada: " + str(precio) + "€") Precio de la entrada: 5€

Ejercicios Enviar un solo archivo con los 3 programas. Utilizar comentarios para identificar cada ejercicio. 1. Par o impar (else-if). Crea un programa que solicite un número. Después, el programa debe indicar si el número es par o impar. 2. Fases de la vida (if-elif-else). Crea una variable que sea edad y asígnale un número. Para cada tramo de edad, se debe mostrar un mensaje indicando

- Si la edad es menor de 13: la persona es un niño
- Si la edad está entre 14 y 20: la persona es un adolescente
- Si la edad está entre 20 y 60 la persona es un adulto
- Si la edad es mayor de 60: la persona es un anciano

3. Calculadora. Crea un programa que solicite elegir una operación

- suma
- resta
- multiplicación
- división

Si el usuario no introduce ninguna de las opciones disponibles, debe informar de que no ha elegido ninguna opción correcta. A continuación, el programa debe pedir al usuario que introduzca dos números. Finalmente, el programa debe mostrar por pantalla el resultado de la operación.

Python: 2. Condicionales

---

## 1.3 03_Listas y tuplas

PROGRAMACIÓN

### 3. Listas y tuplas

Índice

- Crear una lista
- Acceder a un elemento de la lista
- Modificar listas
- Ordenar listas
- Crear listas númericas
- Fórmulas estadísticas básicas
- Cortar un trozo de lista
- Copiar una lista
- Tuplas
- Condicional if
- Ejercicios

Python: 3. Listas y tuplas

Crear una lista

- Una lista es un conjunto de elementos en un determinado orden.
- Sintaxis
- Elementos separados por comas dentro de corchetes.
- Elementos entrecomillados
- Recomendación
- plural y minúscula (Ej: coches).
- espacio después de coma.

coches = ['ford', 'audi', 'peugeot'] print(coches) ['ford', 'audi', 'peugeot'] Ejercicio Escribe un programa que muestre una lista de 4 marcas de ropa. Python: 3. Listas y tuplas

Acceder a un elemento de la lista

- Accedemos a un elemento de la lista por su índice de posición.
- El primero es [0]
- El último se puede acceder directamente utilizando [-1]

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches[0]) ford coches = ['ford', 'audi', 'peugeot'] print("Voy a comprarme un " + coches[1].title()) Voy a comprarme un Audi Ejercicio Muestra por pantalla el segundo elemento de tu lista.

Modificar listas

- Para modificar elementos utilizamos el índice de posición
- Para añadir elementos utilizamos la función insert() e indicamos la posición

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) coches[1] = 'seat' print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'seat', 'peugeot'] coches = ['ford', 'audi', 'peugeot'] print(coches) coches.insert(0,'toyota') print(coches) ['ford', 'audi', 'peugeot'] ['toyota', 'ford', 'audi', 'peugeot'] Ejercicio Modifica el tercer elemento de tu lista.

Modificar listas

- Para añadir elementos al final utilizamos la función append()

Podemos empezar con una lista vacía e ir añadiendo elementos: Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) coches.append('opel') print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'audi', 'peugeot', 'opel'] coches = [] coches.append('ford') coches.append('audi') coches.append('peugeot') print(coches) ['ford', 'audi', 'peugeot'] Ejercicio Partiendo desde una lista vacía, utiliza la función append para crear una listado de 4 ciudades

Modificar listas

- Para borrar elementos, sabiendo su posición, utilizamos la instrucción del
- Para borrar elementos, sabiendo su valor, utilizamos la función remove()

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) del coches[1] print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'peugeot'] coches = ['ford', 'audi', 'peugeot'] print(coches) coches.remove('audi') print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'peugeot'] Si queremos reservar un valor antes de borrarlo, lo podemos guardar en una variable

Modificar listas

- Para quitar de la lista elementos que vamos a utilizar más tarde,

usamos la función pop(). Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) popped_coche = coches.pop(0) print(coches) print(popped_coche) ['ford', 'audi', 'peugeot'] ['audi', 'peugeot'] ford Si no ponemos número de índice coches.pop(), por defecto borra el último de la lista.

Ejercicio Borra el tercer elemento de tu lista utilizando pop() y muestra por pantalla la nueva lista. A continuación muestra el elemento borrado

Ordenar listas

- Para mostrar la lista en orden inverso al inicial, utilizamos la función reverse().

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] coches.sort() print(coches) ['audi', 'ford, 'peugeot'] coches = ['ford', 'audi', 'peugeot'] coches.reverse() print(coches) ['peugeot', 'audi', 'ford'] coches = ['ford', 'audi', 'peugeot'] coches.sort(reverse=True) print(coches) ['peugeot', 'ford', 'audi']

- Para ordenar alfabéticamente,

utilizamos sort().

- Para ordenar alfabéticamente al

contrario, utilizamos sort(reverse=True). Ejercicio Ordena alfabéticamente tu lista.

Crear listas numéricas

- Para crear una lista numérica utilizamos la función list() y range()
- Podemos añadir otro valor a la función range() para indicar la

distancia entre números: Python: 3. Listas y tuplas numeros = list(range(1,8)) print(numeros) [1, 2, 3, 4, 5, 6, 7] numeros = list(range(1,8,3)) print(numeros) [1, 4, 7] Ejercicio Utilizando list() y range(), crea una lista que muestre los 5 primeros números pares y muéstrala.

El rango para antes de llegar a las segunda posición. Por tanto, en el ejemplo, acaba en 7 en vez de en 8.

Fórmulas estadísticas básicas

- Máximo: max()
- Mínimo: min()
- Suma: sum()
- Número de elementos: len()

Python: 3. Listas y tuplas numeros = [1,5,8,6,4,7] maximo = max(numeros) print(maximo) numeros = [1,5,8,6,4,7] print(min(numeros))

Cortar una trozo de lista (slicing a list)

- Definimos un rango de una lista para utilizar solo esa parte
- Si no definimos el primer número del rango, por defecto empieza

desde 0. Ej: coches[:3] coches[0:3]

- Si no definimos el segundo número del rango, por defecto toma el

último: Ej: coches [1:] coches[1:5]

- Para que muestre los n últimos, utilizamos [-n:]

Ej: coches[-2:] coches [3:5] Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot', 'seat', 'toyota'] print(coches[1:3]) ['audi', 'ford']

Copiar una lista

- Utilizamos [:] para copiar una lista. De este modo, podemos hacer

cambios en la nueva lista que no afecten a la primera.

- Si no utilizo [:], los cambios que haga en la segunda lista afectarán a la

primera y viceversa. Python: 3. Listas y tuplas mis_asignaturas = ['tecno', 'mates', 'informatica'] asignaturas_amigo = mis_asignaturas[:] asignaturas_amigo.append('ingles') print(mis_asignaturas) print(asignaturas_amigo) ['tecno', 'mates', 'informatica'] ['tecno', 'mates', 'informatica', 'ingles']

Tuplas

- Una tupla es un conjunto de elementos que no pueden ser modificados.
- Se define como una lista pero con () en vez de [].
- Por ejemplo, si quiero definir las dimensiones de una habitación que no

van a cambiar, puedo utilizar una tupla

- Si intento modificar un elemento de una tupla, aparecerá ERROR.
- No podemos modificar los elementos de una tupla pero sí redefinirla

entera Python: 3. Listas y tuplas medidas = (5, 3) print(medidas[0]) print(medidas[1])

Condicional if in: not in: Comprobar lista no vacía: Python: 3. Listas y tuplas usuarios = ['raul', 'luis', 'sandra'] if 'sandra' in usuarios: print("Hola, sandra") Hola sandra Sintaxis Signo Está en in No está en not it usuarios_baneados = ['juan', 'andrea', 'lucas'] if 'noelia' not in usuarios_baneados

print("Hola, noelia") Hola, noelia. usuarios = ['raul', 'luis', 'sandra'] if usuarios: print("Usuarios disponibles") Usuarios disponibles

Ejercicios Enviar un solo archivo con los 3 programas. Utilizar comentarios para identificar cada ejercicio. 1. Crea una lista con 4 elementos. 1. Muestra el segundo elemento por pantalla 2. Modifica el tercer elemento y muestra la lista por pantalla 3. Borra el último elemento y muestra la lista por pantalla 4.

Utiliza la función "sort" para ordenar la lista alfabéticamente y muéstrala por pantalla 2. Producto escalar. Crea un programa que guarde estos vectores en dos tuplas (2,5,4) y (1,3,6) y calcule su producto escalar. 3. A partir de esta lista: materiales_actuales= ['lapiz', 'goma', 'libreta'].

1. Utilizando "input", solicita al usuario que escriba un nuevo material. Si el material está en la lista, muestra por pantalla "Material disponible"; si no está en la lista, muestra "Material no disponible". 2. Realiza una copia utilizando [:] y añade un nuevo elemento. Muestra ambas listas por pantalla.

Python: 3. Listas y tuplas

---

## 1.4 04_Bucles

PROGRAMACIÓN

### 4. Bucles for y while

Índice

- Bucles (loops)
- Bucle for
- Mostrar de forma ordenada elementos de una lista
- Hacer que algo se repita
- Crear series numéricas
- Bucle while
- Crear series numéricas
- Crear bucles infinitos
- variables + condicionales
- variable = True
- while True + break
- Ejercicios

Python: 4. Bucles for y while

Bucles (loops)

- Un bucle es una secuencia de operaciones que se ejecuta repetidas

veces hasta que la condición asignada a dicho bucle deja de cumplirse.

- En programación, los más usados son for y while.

Python: 4. Bucles for y while

Bucle for El bucle for se utiliza especialmente en las listas y las tuplas para

### 1. Mostrar de forma ordenada los elementos de una lista

### 2. Hacer que algo se repita

### 3. Crear series numéricas

Python: 4. Bucles for y while

Bucle for

Python: 4. Bucles for y while coches = ['ford', 'audi', 'peugeot'] for coche in coches: print(coche) ford audi peugeot Importante: • Lo que va dentro del bucle va indentado. • No olvidar los dos puntos (:)

Bucle for

Python: 4. Bucles for y while coches = ['ford', 'audi', 'peugeot'] for coche in coches: print("Me voy a comprar un " + coche.title()) print("\nSon demasiados coches") Me voy a comprar un Ford Me voy a comprar un Audi Me voy a comprar un Peugeot Son demasiados coches

Bucle for

- Listado ordenado de números utilizando la función range()
- Series numéricas. Por ejemplo, 10 primeros cuadrados perfectos

Python: 4. Bucles for y while for valor in range(1,5): print(valor) Ejercicio Crea un listado que llegue hasta mil. cuadrados = [] for valor in range(1,11): cuadrado = valor**2 cuadrados.append(cuadrado) print(cuadrados) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Bucle while

- El bucle for ejecuta un boque de código un número definido de veces.
- El bucle while hace que un código se repita indefinidamente mientras

se cumpla una condición. Cuando dicha condición deja de cumplirse, el bucle para de repetirse.

### 1. Series numéricas

### 2. Hacer que un programa se ejecute hasta que el usuario quiera

1. Utilizando únicamente condicionales 2. Utilizando variable = True 3. Utilizando while True (bucle infinito) y break para parar. Python: 4. Bucles for y while

Bucle while

Python: 4. Bucles for y while numero_actual = 1 while numero_actual <=5: print(numero_actual) numero_actual +=1 numero_actual +=1 equivale a escribir: numero_actual = numero_actual + 1

Bucle while

### 2. Permitir a un usuario salir del programa

2.1. Estableciendo una variable vacía (Ej: nombre) y condicionales Python: 4. Bucles for y while #programa que saluda respuesta = "\n¿Cómo te llamas?: " respuesta += "\nEscribe 'salir' para cerrar el programa. " nombre = "" while nombre != 'salir': nombre = input(respuesta) if nombre != "salir"

print("Hola, " + nombre)

Bucle while

2.2. Utilizando una variable = True Python: 4. Bucles for y while #programa que saluda respuesta = "\n¿Cómo te llamas?: " respuesta += "\nEscribe 'salir' para cerrar el programa. " activo = True while activo: nombre = input(respuesta) if nombre != 'salir': print("Hola, " + nombre) else

activo = False

Bucle while

2.3. Utilizando while True (bucle infinito) y break para parar. Python: 4. Bucles for y while #programa que saluda respuesta = "\n¿Cómo te llamas?: " respuesta += "\nEscribe 'salir' para cerrar el programa. " while True: nombre = input (respuesta) if nombre != 'salir'

print("hola, "+ nombre) else: break

Ejercicios Enviar cada programa en un archivo (3 archivos) 1. Calculadora. Modifica la práctica que hiciste de la calculadora de manera que tras realizar el cálculo, el programa pida de nuevo 2 números y la operación (bucle infinito). 2. Listas numéricas. Crea un programa que calcule los números impares entre 1-20.

(Crea la lista dos veces. Una vez utilizando el bucle for, y otra vez utilizando el bucle while). Muéstralas por pantalla en forma de columna. 3. Lista de la compra.

- Empieza con una lista vacía.
- El programa debe solicitar al usuario que introduzca un producto de la compra hasta que escriba

"salir" (utiliza while). Cada producto que introduzca el usuario debe guardarse en la lista. (Utiliza la función "append" del tema anterior).

- Muestra por pantalla la lista de forma ordenada en una columna (utiliza el bucle for).

4. EJERCICIO VOLUNTARIO: Crea una lista numérica que calcule los números primos entre 1-20 Python: 4. Bucles for y while

---

## ✍️ Activitats pràctiques UT1

> **✍️ Activitat Pràctica 1.1 — Activitat 1**
> Resol els exercicis de la pàgina 4.

> **✍️ Activitat Pràctica 1.2 — Activitat2_Formato_Concatenación**
> Ejercicis diapositives pag 7 i 8

> **✍️ Activitat Pràctica 1.3 — ActFinal_Problemes Introducció**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 1.4 — Act4_If i operadors**
> **Objetivo:** Practicar operadores relacionales (`<`, `==`, `>`)
>
> Enunciado: Pide al usuario su edad y muestra los siguientes mensajes según corresponda
>
> - Si tiene menos de 18 años → *“No puedes votar todavía.”*
> - Si tiene exactamente 18 años → *“¡Acabas de cumplir la edad para votar!”*
> - Si tiene más de 18 años → *“Ya puedes votar.”*

> **✍️ Activitat Pràctica 1.5 — Act5_if i operadors**
> **Objetivo:** Practicar operadores lógicos (`and`, `or`, `not`)
>
> **Enunciado:**
> Pide al usuario su **nombre de usuario** y **contraseña**.
> Solo podrá acceder si el usuario es `"admin"` **y** la contraseña es `"1234"`.
> Si alguna de las condiciones no se cumple, muestra un mensaje de error.

> **✍️ Activitat Pràctica 1.6 — Act6_If/elif/else i operador**
> **Objetivo:** Practicar operadores relacionales (`<`, `==`, `>`)
>
> Enunciado: Pide al usuario su edad y muestra los siguientes mensajes según corresponda
>
> - Si tiene menos de 18 años → *“No puedes votar todavía.”*
> - Si tiene exactamente 18 años → *“¡Acabas de cumplir la edad para votar!”*
> - Si tiene más de 18 años → *“Ya puedes votar.”*

> **✍️ Activitat Pràctica 1.7 — ActFinal_Condicionals**
> Fer les últimes activitats del document "Condicionals"

> **✍️ Activitat Pràctica 1.8 — Act8_Listas**
> pàgina 3 i 4

> **✍️ Activitat Pràctica 1.9 — Act9_append i insert**
> pàgina 5 i 6.

> **✍️ Activitat Pràctica 1.10 — Act10_eliminar elementos**
> Usar funciones POP, del y remove.
>
> página 7 y 8.

> **✍️ Activitat Pràctica 1.11 — Act11_organizar listas**
> página 9, 10 y 11

> **✍️ Activitat Pràctica 1.12 — Act12_ListasFinal**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 1.13 — Figuras_Bucles**
> El programa debe pedir por pantalla.
>
> - Para el cuadrado: el **LADO** .
> - para el rectángulo: **BASE** y **ALTURA** .
> - para el triangulo: **ALTURA** (será un triangulo rectángulo).
>
> Dependiendo de estas variables el programa dibujará las figuras.

> **✍️ Activitat Pràctica 1.14 — TascaFinal_Bucles**
> 4 últimes activitats del tema
