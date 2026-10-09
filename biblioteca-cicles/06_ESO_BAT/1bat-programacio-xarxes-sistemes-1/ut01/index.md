---
layout: default
title: "UD1 — Programació · Temari Complet"
course_root: ".."
badge: "1r Batxillerat · UD1 — Programació"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Conceptos básicos ➡️"
---

# 📘 UD1 — Programació (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Conceptos básicos**](./ut0101.md)
- [**1.2 Condicionales**](./ut0102.md)
- [**1.3 Listas y tuplas**](./ut0103.md)
- [**1.4 Bucles**](./ut0104.md)

---

# 1.1 Conceptos básicos

PROGRAMACIÓN

### 1. Conceptos básicos y variables

Índice

- Hola mundo
- Variables
- Strings
- Números
- Comentarios
- Zen de Python
Python: 1. Conceptos básicos y variables

Hola mundo

- Función print(): Mostrar por pantalla
- SyntaxError
- Errores tipográficos
- Paréntesis incompletos
- Falta de comillas…

print ("Hola mundo") Hola mundo pint ("Hola mundo") Traceback (most recent call last): File "<stdin>", line 1, in <module> NameError: name 'pint' is not defined

- Las variables guardan los valores que le asignamos
- Python diferencia entre mayúsculas y minúsculas
- Podemos cambiar los valores de las variables en cualquier momento

mensaje = "Hola mundo" print(mensaje) Hola mundo mensaje = "Hola mundo" print(mensaje) mensaje = "Estoy estudiando Python" print (mensaje) Hola mundo Estoy estudiando Python mensaje = "Hola mundo" print(Mensaje) ERROR Variables

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

mensaje = "Hola mundo" print(mensaje) Hola mundo mensaje = 'Hola mundo' print(mensaje) Hola mundo mensaje = 'Le dije a un amigo: "Python es mi lenguaje favorito"' print(mensaje) Le dije a un amigo: "Python es mi lenguaje favorito".

"La innovación es lo que distingue a un líder de un seguidor", Steve Jobs. Python: 1. Conceptos básicos y variables

Variables - Strings FORMATO

- Primera letra en mayúscula .title()
- Todas las letras en mayúscula .upper()
- Todas las letras en minúscula .lower()

nombre = "rebeca VIDAL" print(nombre.title()) Rebeca Vidal nombre = "rebeca VIDAL" print(nombre.upper()) REBECA VIDAL nombre = "rebeca VIDAL" print(nombre.lower()) rebeca vidal

Variables - Strings CONCATENACIÓN

- Concatenar variables en otra variable
- Concatenar texto y variables

nombre = "rebeca" apellido = "vidal" nombre_completo = nombre + " " + apellido print(nombre_completo) rebeca vidal nombre = "rebeca" apellido = "vidal" nombre_completo = nombre + " " + apellido print("Hola, " + nombre_completo.title()) Hola, Rebeca Vidal

Python: 1. Conceptos básicos y variables

Variables - Strings ESPACIOS

- Añadir una tabulación \t
- Añadir un salto de línea \n

print ("\tHola") Hola print ("Hola. \nEscriba nombre y apellidos.") Hola. Escriba nombre y apellidos.

Variables - Strings

- La función input() sirve para que el usuario haga una entrada de

datos. La información se guarda siempre en una variable. nombre_completo = input("Escriba nombre y apellido: ") print("Hola, " + nombre_completo) >>>rebeca vidal Hola, rebeca vidal

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

#saludar a todo el mundo print("Hola a todos") Hola a todos '''saludar a todo el mundo y dar las gracias''' print("Hola a todos, gracias por venir.") Hola a todos, gracias por venir.

Zen de Python

- 19 principios que debe seguir un programador. Escritos por Tim

Peters en 1999. import this Bonito es mejor que feo Explícito es mejor que implícito. Simple es mejor que complejo. Complejo es mejor que complicado. Plano es mejor que anidado. Disperso es mejor que denso. La legibilidad importa. Los casos especiales no son lo suficientemente especiales como para romper las reglas.

Practicidad vence a la pureza. Los errores nunca deberían ocurrir silenciosamente. A no ser que se silencien explícitamente. En el caso de ambigüedad, rechaza la tentación de adivinar Debería haber una, y preferiblemente solo una, forma obvia de hacerlo. Aunque la forma no parezca obvia a la primera, a no ser que seas Holandés.

Ahora es mejor que nunca. Aunque nunca es a menudo mejor que ahora mismo Si la implementación es difícil de explicar, es una mala idea. Si la implementación es fácil de explicar, puede que sea una buena idea. Los espacios de nombres son una gran idea, ¡tengamos más de esos!

https://elpythonista.com/zen-de-python Python: 1. Conceptos básicos y variables

---

# 1.2 Condicionales

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

---

# 1.3 Listas y tuplas

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
Python: 3. Listas y tuplas

Crear una lista

- Una lista es un conjunto de elementos en un determinado orden.
- Sintaxis
- Elementos separados por comas dentro de corchetes.
- Elementos entrecomillados
- Recomendación
- plural y minúscula (Ej: coches).
- espacio después de coma.

coches = ['ford', 'audi', 'peugeot'] print(coches) ['ford', 'audi', 'peugeot']

Acceder a un elemento de la lista

- Accedemos a un elemento de la lista por su índice de posición.
- El primero es [0]
- El último se puede acceder directamente utilizando [-1]

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches[0]) ford coches = ['ford', 'audi', 'peugeot'] print("Voy a comprarme un " + coches[1].title()) Voy a comprarme un Audi

Modificar listas

- Para modificar elementos utilizamos el índice de posición
- Para añadir elementos utilizamos la función insert() e indicamos la posición

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) coches[1] = 'seat' print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'seat', 'peugeot'] coches = ['ford', 'audi', 'peugeot'] print(coches) coches.insert(0,'toyota') print(coches) ['ford', 'audi', 'peugeot'] ['toyota', 'ford', 'audi', 'peugeot']

Modificar listas

- Para añadir elementos al final utilizamos la función append()

Podemos empezar con una lista vacía e ir añadiendo elementos: Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) coches.append('opel') print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'audi', 'peugeot', 'opel'] coches = [] coches.append('ford') coches.append('audi') coches.append('peugeot') print(coches) ['ford', 'audi', 'peugeot']

Modificar listas

- Para borrar elementos, sabiendo su posición, utilizamos la instrucción del
- Para borrar elementos, sabiendo su valor, utilizamos la función remove()

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) del coches[1] print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'peugeot'] coches = ['ford', 'audi', 'peugeot'] print(coches) coches.remove('audi') print(coches) ['ford', 'audi', 'peugeot'] ['ford', 'peugeot'] Si queremos reservar un valor antes de borrarlo, lo podemos guardar en una variable

Modificar listas

- Para quitar de la lista elementos que vamos a utilizar más tarde,

usamos la función pop(). Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] print(coches) popped_coche = coches.pop(0) print(coches) print(popped_coche) ['ford', 'audi', 'peugeot'] ['audi', 'peugeot'] ford Si no ponemos número de índice coches.pop(), por defecto borra el último de la lista.

Ordenar listas

- Para mostrar la lista en orden inverso al inicial, utilizamos la función reverse().

Python: 3. Listas y tuplas coches = ['ford', 'audi', 'peugeot'] coches.sort() print(coches) ['audi', 'ford, 'peugeot'] coches = ['ford', 'audi', 'peugeot'] coches.reverse() print(coches) ['peugeot', 'audi', 'ford'] coches = ['ford', 'audi', 'peugeot'] coches.sort(reverse=True) print(coches) ['peugeot', 'ford', 'audi']

- Para ordenar alfabéticamente,

utilizamos sort().

- Para ordenar alfabéticamente al

contrario, utilizamos sort(reverse=True).

Crear listas numéricas

- Para crear una lista numérica utilizamos la función list() y range()
- Podemos añadir otro valor a la función range() para indicar la

distancia entre números: Python: 3. Listas y tuplas numeros = list(range(1,8)) print(numeros) [1, 2, 3, 4, 5, 6, 7] numeros = list(range(1,8,3)) print(numeros) [1, 4, 7]

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

---

# 1.4 Bucles

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

Python: 4. Bucles for y while for valor in range(1,5): print(valor)

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

---
