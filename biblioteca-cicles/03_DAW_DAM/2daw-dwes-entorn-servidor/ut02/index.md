---
layout: default
title: "UT2 — Unit 2 - Basic PHP — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 U2 Basic PHP ➡️"
---

# 📘 UT2 — Unit 2 - Basic PHP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 U2 Basic PHP**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**2.2 U2 Class exercises**](#ut0202) (o [obrir en pàgina individual ➡️](./ut0202.md) )
> - [**2.3 Images exercise 2**](#ut0203) (o [obrir en pàgina individual ➡️](./ut0203.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 U2 Basic PHP

> **📌 🏷️ Apunt de la Unitat**
> #### Resources

> **🔗 Recurs Web: Flexbox guide**
> [**🌐 Obrir recurs extern (https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ↗️**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

> **📌 🏷️ Apunt de la Unitat**
> #### Tasks

---

Unit 2 Basic PHP 2nd DAW - DWES

2 DAW - DWES What is PHP?

- Personal Home Page.
- Created in 1995 by Rasmus Lerdof.
- Nowadays, maintained by The PHP Group.
- Current version is 8.

2 DAW - DWES What is PHP?

- It’s needed an interpreter in the web server.
- In Apache, you need the php module.
- PHP is the most used server-side language (79,2% of the webpages

include PHP code).

- Can be used within other frameworks (Symfony, Laravel, etc.)

2 DAW - DWES What is PHP?

- “There are only two kinds of languages: the ones people complain

about and the ones nobody uses” C++ Creator

2 DAW - DWES How is it used?

- It’s very common to use PHP embedded into the HTML file.
- To do so, you need to use the tag <?php for opening the block and the

tag ?> for closing it.

2 DAW - DWES How is it used?

- What happens if we check the source code of the webpage in the

browser?

- Yes, the PHP code is not there, because the server has interpreted the

code and translate it IN THE SERVER.

- Client (browser), receives only HTML. No matter what happened on

the other side.

2 DAW - DWES How is it used?

2 DAW - DWES How is it used?

- You can not write HTML tags into PHP blocks without PHP commands.
- Neither PHP commands out of the PHP block.

2 DAW - DWES How is it used?

- You can add comments as you did in Java.
- // this is a one-line comment
- /*This is a

multiline comment*/

- Every instruction ends with ;

2 DAW - DWES Variables and data types

- PHP is not strong-typed.
- No needed to set the data type when declaring a variable.
- But it is recommended…why?
- In PHP, variable identifiers are preceded by the character $
- PLEASE, use meaningful names for variables!!!

2 DAW - DWES Variables and data types

2 DAW - DWES Variables and data types

- The data type is set when we assign a value

2 DAW - DWES Variables and data types

- The type can change. Execute this code

2 DAW - DWES Variables and data types

- For concatenate strings, we’ll use the operator .
- The are some predefined variables in PHP accessible from everywhere
- $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION…
- https://www.php.net/manual/es/language.variables.superglobals.php

2 DAW - DWES Casts

- We can cast some values to other types
- (int)
- (bool)
- (float)
- (string)
- (array)
- (object)

2 DAW - DWES Copy and reference assignment

- Same as Java.
- $a = $b creates a copy of the value of $a in that moment into $b. If $a

changes, $b will not be affected.

- If we need to create a copy by reference
- $a=&$b
- Example.

2 DAW - DWES Variable scopes

- Local: declared within a function. Cannot be accessed outside the

function.

- Global: declared outside function and can be accessed anywhere. To

access the global variable within a function, use the GLOBAL keyword.

2 DAW - DWES Constants

- Same use than Java.
- Can’t be changed during the executing.
- There are algo magic constants
- https://www.javatpoint.com/php-magic-constants

2 DAW - DWES Operators

- Almost identic than Java
- &&, ||, !=, !, >=, <=, <,>, ++,
- === and !==
- Compares not only the value but also the data type

2 DAW - DWES Control structures

- Very similar to Java.
- if, if-else, if-elseif, switch

2 DAW - DWES Loops

- for
- do-while
- while

2 DAW - DWES Arrays

- Arrays are very powerful in PHP. It unifies basic arrays, lists,

dictionaries, etc.

- Elements are identified by a key, that can be an integer(ordered array)

or a string (associative array).

- The order of the array is determined by the order when you declare

the array.

2 DAW - DWES Arrays

- We can declare arrays by using brackets [ ]
- Or using the keywork array

2 DAW - DWES Arrays

- You can also set the key for each value when you declare the array
- All the previous declarations are exactly the same.

2 DAW - DWES Arrays

- We can combine types in the same array
- For accessing to the value of the array, we’ll use $arr[key] as we did in

other languages.

2 DAW - DWES Arrays

- We can combine types in the same array
- For accessing to the value of the array, we’ll use $arr[key] as we did in

other languages.

2 DAW - DWES Arrays

2 DAW - DWES Arrays

- Adding elements to an array
- At the end of the array
- At a specific position
- Removing elements

2 DAW - DWES Arrays

- We can go through an array as always
- Or we can use the foreach sentence

```php
• foreach($arr as $value){…};
• foreach($arr as $key=>$value){…};
```

2 DAW - DWES Arrays

2 DAW - DWES Arrays

- When using foreach, the copy of the array by default is not by

reference so if you need to modify the original array, you must use the copy by reference.

2 DAW - DWES Arrays

- Comparisons
- $arr1 === $arr2
- Identic: True if both arrays have same keys, same values, same order, same

types

- Not identic !==
- $arr1==$arr2
- Equal: True if both arrays have same key and values
- Not equal !=

2 DAW - DWES Arrays

- Comparisons
- $arr1 === $arr2
- Identic: True if both arrays have same keys, same values, same order, same

types

- Not identic !==
- $arr1==$arr2
- Equal: True if both arrays have same key and values
- Not equal !=

2 DAW - DWES Functions

- PHP supports both function and OO.
- Very similar to Java.
- Can return a value (or not).
- We can set the type of the value by

adding : type at the end of the header.

- function factorial($numero) : int

2 DAW - DWES Functions

- Functions work with arguments by value or by reference
- Arguments can have a predefined value

```php
• function sayHello($name=”Juanra"){
```

- Function can have a variable number of arguments

```php
• function add(...$numbers) {
```

- It admits recursivity

2 DAW - DWES Predefined functions

- Related with a variables
- is_null($var)
- isset($var)
- is_int($var), is_bool($var) …
- var_dump($var)
- print_r($var)
- Code example

2 DAW - DWES Predefined functions

- Related with strings
- strlen($cad)
- strcmp($cad1, $cad2)
- https://www.javatpoint.com/php-string-functions
- Related with arrays
- sort($arr)
- count($arr)
- https://www.javatpoint.com/php-array-functions

2 DAW - DWES Basic working with forms

- Forms send data via GET or POST.

2 DAW - DWES Basic working with forms

- There are some magic variables to get the data sent.
- $_GET[“parameterName”]
- $_POST[“parameterName”]
- This will be studied with more detail in the next unit.

2 DAW - DWES Include and require

- Including other files
- include “myfile.php”
- require “myfile.php”
- The difference is the error handling. If used require and the file is not found, it

generates an E_FATAL error and the script finishes meanwhile include generates an E_NOTICE

- Code example

2 DAW - DWES Errors and exceptions

- Since PHP 7 works nice thanks to the class Error.
- We can handle how PHP behaves in the php.ini config file.
- error_reporting: E_ALL (you can also change it in code

```php
error_reporting(VALUE);
```

- display_errors: YES (only in development)
- log_errors: YES (only in development)
- error_log: path_to_file

2 DAW - DWES Errors handler

- We can write our own error handler.
- We have to take into account that every error has their own

arguments.

2 DAW - DWES Exceptions

- Same structure than Java: try-catch-finally
- You can launch your own exceptions by using throw.

2 DAW - DWES Exceptions

- We can create our own Exceptions as we do in Java.
- When we run this code, the output is…

2 DAW - DWES Classes and objects

- Very similar to Java

2 DAW - DWES Classes and objects

- For accessing to methods and attributes we’ll use the =>

2 DAW - DWES Classes and objects

- Magic methods: They execute without requesting them.
- Always start with double _
- __construct(): When the object is created
- __destruct(): When the object is destroyed
- __toString(): When an object is printed.
- For accessing to constants and static methods we’ll use

```php
• parent::__construct($dni);
```

2 DAW - DWES Classes and objects

2 DAW - DWES Classes and objects

- What can we improve in the previous code?
- We must encapsulate the properties!!!
- public setProperty($param)
- public getProperty()

2 DAW - DWES Classes and objects

2 DAW - DWES Classes and objects

- Interfaces exists and the functionality is the same than in Java.

2 DAW - DWES Questions?

---

## 2.2 U2 Class exercises

1. Write a program that stores in a variable your name and show it in a <h1>.
2. Write a program that shows 16 "cards" using the design written in the whiteboard. Odds and even cards have to have different background colors.
3. Write a program that calculates the factorial of a number. Remember!! Factorial it's only for integer numbers >=0.
4. Write a program that checks if a word is a palindrome.
5. Write a program that writes a triangle with a given number. i.e. Number 5. Codi / Terminal 📋 Copiar PHP `x x x x x x x x x x x x x x x`
6. Write an associative array named *users* where the key is the username and the value is the password. Add at least 5 users to the array and show the users information using a foreach loop. Add two new users at the end of the array and show again the information.
7. Create an array with 10 random numbers. Then using a for loop, sum up all the numbers, find the max, min and show all the results in a <p> label. Besides, create a new array with all the numbers that are even and show the result with a print_r.
8. Create a multidimensional array for representing students mark. First column will be the name of the student and three exam marks the next columns. Using a foreach loop, show in a table the name of the students and the three marks. Calculate the average for each student and show it at the end of each row. Calculate the average for all students and show it at the end of the table. Table has to be centered in the webpage.
9. Create a bidimensional array of 6 rows and 9 columns with random numbers between 100 and 999 (both included). Numbers can not be repeated. After that, print the content of the array in a table with the following criteria: - Column of the maximum has to have blue background. - Row of the minimum has to have green background.
10. Create a file named sumaresta.php that includes a function named "suma" that receives two numbers and returns the result of the sum and a function named "resta" that receives two numbers and returns the result of the substract. Then, from a file named result.php include the file sumaresta.php and use the functions created.
11. Create the following functions: - Function that receives a number and returns y the number is even or not. - Function that receives an array of numbers passed by reference and return the quantity of even numbers on it.
12. Create a function that counts how many vocals there are in a word.
13. Create a function that converts any phare into "cani" language: oF cOuRsE yEs My FrIeNd
14. Create a file named utils.php with a function named fileExtension that receives a filename (i.e. myFile.pdf) and returns the extension of it. After that, creates a webpage with a form where you can fill the filename and send it to the server. The file in the server will be named check.php and using the function fileExtension of the file utils.php will show the user the extension of the file.
15. [endif]Create a class called “Student” with these properties: • Name • License Number • An Array with 3 positions containing 3 marks (1 per trimester) The properties must be private, so you will need to provide set and get methods and the following functions • Function with 2 parameters (mark and trimester). The method will save the mark in the required position. • Function with 1 parameter (trimester). The method will return the mark pertaining to the required trimester. • Function to return the average score. Use the class “Student” to create a couple of objects, and fill them using a form. List the students with their names, trimester marks and average score
16. Create a class “Person” with a property “Name” and its get and set methods. Modify the previous exercise so that Student is a child class of Person.

---

## 2.3 Images exercise 2

> **💡 📦 Contingut del paquet comprimit (images_exercise.zip)**
> - `__MACOSX/._img0.png`
> - `__MACOSX/._img1.png`
> - `__MACOSX/._img10.png`
> - `__MACOSX/._img11.png`
> - `__MACOSX/._img12.png`
> - `__MACOSX/._img13.png`
> - `__MACOSX/._img14.png`
> - `__MACOSX/._img15.png`
> - `__MACOSX/._img16.png`
> - `__MACOSX/._img17.png`
> - `__MACOSX/._img18.png`
> - `__MACOSX/._img19.png`
> - `__MACOSX/._img2.png`
> - `__MACOSX/._img20.png`
> - `__MACOSX/._img3.png`
> - `__MACOSX/._img4.png`
> - `__MACOSX/._img5.png`
> - `__MACOSX/._img6.png`
> - `__MACOSX/._img7.png`
> - `__MACOSX/._img8.png`
> - `__MACOSX/._img9.png`
> - `img0.png`
> - `img1.png`
> - `img10.png`
> - `img11.png`
> - `img12.png`
> - `img13.png`
> - `img14.png`
> - `img15.png`
> - `img16.png`

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — Task 1 - Basic PHP**
> DWES – U2A1
>
> Unit 2 – Task 1 Basic PHP
>
> Objectives
>
> - Learn basics of PHP.
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> all the files of the task.
>
> Classes
>
> ### 1. Create the following class’s structure (using English words). Take the
>
> following considerations and additions: 1.1. Person
>
> #### 1.1.1. Is an abstract class
>
> #### 1.1.2. Add attribute age
>
> #### 1.1.3. Add getters and setters for every attribute
>
> #### 1.1.4. Add public method getWholeName:string
>
> #### 1.1.5. Add an abstract method named toHTML(Person $p):string. . This
>
> method will return an html string with all data of the employee. Phones must be listed ordered in a table.
>
> 1.2. Employee: 1.2.1. maxSalary is a constant 1.2.2. mustPayTaxes method. Taxes are paid when the salary> maxSalary and age > 21. 1.2.3. listPhones returns the phones separated by comas.
>
> ### 2. Create a new class named Company that has as attributes name, address
>
> and an array of Employees. 2.1. Encapsulate attributes 2.2. Add methods for adding/deleting/listing employees. 2.3. Add a method getTotalPayroll():float that calculate the total amount of money to pay of payrolls.
>
> ### 3. Create webpage with a form for adding a new Employee and a button for
>
> showing data of all Employees. Data must be shown in a fancy way (not a table).
>
> DWES – U2A1
