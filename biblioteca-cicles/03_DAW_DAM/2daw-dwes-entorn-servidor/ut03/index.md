---
layout: default
title: "UT3 — Unit 3 - Advanced PHP — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 U3 Advanced PHP ➡️"
---

# 📘 UT3 — Unit 3 - Advanced PHP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 U3 Advanced PHP**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 U3 Class exercises**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**3.3 Code examples**](#ut0303) (o [obrir en pàgina individual ➡️](./ut0303.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 U3 Advanced PHP

> **📌 🏷️ Apunt de la Unitat**
> #### Resources

> **🔗 Recurs Web: Libraries 1**
> [**🌐 Obrir recurs extern (https://www.cloudways.com/blog/php-libraries/) ↗️**](https://www.cloudways.com/blog/php-libraries/)

> **🔗 Recurs Web: Libraries 2**
> [**🌐 Obrir recurs extern (https://www.imaginacolombia.com/articulos/7-librerias-de-php-que-todo-desarrollador-web-deberia-conocer) ↗️**](https://www.imaginacolombia.com/articulos/7-librerias-de-php-que-todo-desarrollador-web-deberia-conocer)

> **📌 🏷️ Apunt de la Unitat**
> #### Tasks

---

Unit 3 Advanced PHP 2nd DAW - DWES

2 DAW - DWES Server variables

- $_ENV: Information about environment.
- $_GET: Parameters sent via GET.
- $_POST: Parameters sent via POST.
- $_SERVER: Information about the server.
- $_COOKIE, $_SESSSION , $_FILES: We’ll study them later.
- https://www.php.net/manual/es/reserved.variables.server.php
- Class Activity 1.

2 DAW - DWES Response headers

- Besides the response itself, the server also includes a header with

multiple info.

- We can set these headers in the server part for
- Set the content type.
- Expiration time.
- Redirection.
- Avoid cache queries.
- Force cache renovation
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_responses

2 DAW - DWES Response headers

2 DAW - DWES PHP layout

- As we’ve studied, require and include functions are similar to copy

paste, but with the advantage that we don’t need to duplicate code.

- We can reuse algo fragments of html/css/php in different webs.
- i.e. We create a file named header.php with the part that is common

to every webpage and we include that file into every webpage instead of repeating code.

2 DAW - DWES Forms - Data collection

- When using multiple value html elements we need to use arrays as

names.

- select multiple
- checkbox

2 DAW - DWES Forms - Validation

- Validations must be done always in the client (HTML+JS) AND in the

server.

- Some libraries help us to validate forms. respect/validation or

particle/validation. Will be studied in U6.

2 DAW - DWES Forms - Validation

- To avoid XSS attacks, we must use htmlspecialchars and htmlentities

functions.

- https://www.php.net/manual/en/function.htmlentities.php
- https://www.php.net/manual/en/function.htmlspecialchars.php
- Forms can call to themselves. To do that, we need to set the action to
- Name of the file
- “<?php echo $_SERVER[‘PHP_SELF’];?>”
- Set to blank (“”)

2 DAW - DWES Forms - Sticky form

- A sticky form is a form that remembers its values. To do that, we must

set the “value” attribute.

- Activity

2 DAW - DWES Forms - Uploading files

- Sending files through a form is a special case of sending information.
- You can set the types of file accepted via HTML (new)
- We must set the attribute enctype of the form element to Content

Type: multipart/form-data

- You have to use POST method for sending the file.

2 DAW - DWES Forms - Uploading files

- Client part
- Sending files through a form is a special case of sending information.
- You can set the types of file accepted via HTML (new).
- https://developer.mozilla.org/en

US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers

- We must set the attribute enctype of the form element to enctype

multipart/form-data

- You have to use POST method for sending the file.

2 DAW - DWES Forms - Uploading files

- Client part

2 DAW - DWES Forms - Uploading files

- Server part
- Temporary uploaded files are stored in the supervariable (array) $_FILES, using the

name provided in the name attribute of the form.

- Every file into the array, has some “properties”
- name: original name of the file
- tmp_name: temp path where the file is stored in the server
- size: in bytes
- type: MIME type
- error: if ok, 0. If not ok, error message.
- Some predefined functions used

```php
• is_uploaded_file(path_to_file);
• move_uploaded_file(path_from, path_to);
```

2 DAW - DWES Forms - Uploading files

- Server part

2 DAW - DWES Forms - Uploading files

- Configuration part (php.ini)
- file_uploads: on / off
- upload_max_filesize: 2M
- upload_tmp_dir: temporary directory.
- post_max_size: Max. size of the post request. Must be > upload_max_filesize.
- max_file_uploads: Max. number of files that can be load at once.
- max_input_time: Maximum time used in the load of the file (default 60)
- memory_limit: 128M
- Activity

2 DAW - DWES Cookies and sessions

- HTTP is a stateless protocol. We need to keep the state by using

cookies, tokens or sessions.

- This state is necessary for processes like shoping cart, keep user

logged, etc.

- PHP manage the session using cookies.
- Cookies are stored in the browser and the sessions are stored in the

web server.

2 DAW - DWES Cookies

- Cookies are text files stored in the client.
- They are exchanged between client and server to keep information

between both.

2 DAW - DWES Cookies

- Sessions in server are stored in the global array $_COOKIE.
- All we put inside will be stored in the client (unless he decide not to).
- There is a limit of 20 cookies per domain and 300 per browser.
- Creating cookies in PHP is quite easy, using the function

```php
• setcookie(name [ , value =“ ” [ , options = [ ] ] ] );
```

2 DAW - DWES Cookies

- The name of the cookie can’t contain spaces.
- Content of the cookies can be > 4 KB.
- We can check the content of the cookies in Dev Tools of the browser

2 DAW - DWES Cookies

- Expiration time of cookies is important. By default is 0 which is

deleted when the browser is closed.

- We can set the expiration time for a specific period.
- For delete a cookie we just set the expiration time in the past.

2 DAW - DWES Cookies

2 DAW - DWES Cookies

- Cookies are used for
- Sessions
- Store temp values for user
- Set specific configurations for user.
- Nowadays, in client we also have LocalStorage in browsers., which can

store up to 20 MB.

- Arrays have special treatment when used in cookies (studied in U5).

2 DAW - DWES Cookies

- Can we store an Array into a cookie? Yes…but
- It is necessary to serialize the array by using the function

json_encode(array)

2 DAW - DWES Cookies

- To deserialize we need to use the function json_decode(encoded_var)
- Remember that cookies have a limited size, so don’t store big

amounts of data.

2 DAW - DWES Sessions

- Used for keeping http state info.
- Used always from server. Server creates a session (which is basically a

cookie with an ID)

2 DAW - DWES Sessions

- Operations

2 DAW - DWES Sessions

- Example with two different webpages

2 DAW - DWES User Auth

- A session stablish a connection between user and website if logged

correctly.

- Basic Auth system
- Login-password form.
- Check sent data.
- Set login to session.
- Check login in the session every time user wants to do something.
- Delete login when close session.

2 DAW - DWES User Auth

- Login live example.
- Passwords are never stored in plain text.
- Basic version for secure password is by using the function

password_hash(“mypassword”, PASSWORD_DEFAULT). This returns you a hash that you need to keep for decrypt.

- When need to check passwords, use password_verify(“mypassword”,

```php
$storedHash);
```

2 DAW - DWES User Auth

- These passwords are not secure anymore.
- Nowadays, developers use specific frameworks or other auth

mechanisms as Oauth or 3rd party Auth.

- We’ll study them in Unit 5.

2 DAW - DWES Libraries

- Sometimes, coding is tedious.
- Time consuming.
- Every single function written from the beginning.
- Libraries were created to make things easier to developers.
- Basically is a file with a set of functions already created which can be

used from our program by importing them (including, requiring, etc)

- We can also create our own libraries.

2 DAW - DWES Libraries - Example

- For creating PDF’s from PHP, there are many libraries available. We

just need to find on the internet, read the documentation, understand some examples, watch a Youtube video of a random guy explaining how to implement it and try it out ourselves. The random guy

2 DAW - DWES Composer

- When an application uses a library, then it’s called a dependency.
- If I use the library ”cook”, I have a dependency of the library “cook”
- Using libraries without a manager is old and ugly, but easy. However,

maintain these dependencies is not easy at all.

- Best manager for PHP applications is Composer.

2 DAW - DWES Composer

- We can check if composer is installed in our computer or docker by

running the following command into the terminal

```php
composer --version
```

- If not installed, best way for installing it is to follow the official

instructions, depending on the OS

- https://getcomposer.org/doc/00-intro.md

2 DAW - DWES Composer

- If we’re using a docker, best option is to include the composer

installation into the dockerfile: COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

- If at some point an error “php command not found” is thrown, we

need to link the php to the user path: ln -s /opt/lampp/bin/php /usr/bin/php

2 DAW - DWES Composer

- Composer is configured in each project. To do that, we need to init

```php
composer into the main folder of the project we want to use
composer in.
composer init
```

2 DAW - DWES Composer

- We’ll fill all the fields required.

2 DAW - DWES Composer

- As you can see, almost all fields can be left blank.
- When you are asked if you want to define your dependencies

interactively you have to response yes if you already know the dependencies you want to include in your project (easier than after).

2 DAW - DWES Composer

- After that, finish the generation

2 DAW - DWES Composer

2 DAW - DWES Composer

- If you need to install dependencies after the project has been

created, from the project folder you have two options

### 1. From the project folder where composer has already been initialized

previously, run the following command

```php
composer require libraryToInstall
composer require nesbot\carbon
```

### 2. Add the dependency directly into the composer.json file and install it using

```php
composer install and composer update
```

2 DAW - DWES Composer

- Once libraries are installed, using them depends completely on the

library.

- Every library has different methods, functions and documentation.
- You have to go to the official documentation and learn there how to

use them.

2 DAW - DWES Composer

- In general terms, for using a library we need to load the composer

libraries into the PHP file by using: require ‘vendor/autoload.php’

- And set the packages where the classes of our library are (these is

defined in every documentation). use Carbon\Carbon;

2 DAW - DWES Sending emails from PHP

- PHP includes its own functions for sending mails, but is tedious to

configure. https://www.php.net/manual/en/function.mail.php

- Usually, a library is used for this purpose. You can find many of them

around the Internet.

- We are going to use phpmailer, which is one of the most used.

2 DAW - DWES Sending emails from PHP

- First of all, if composer is not installed in our project, we need to init

it by running composer init into the folder.

- We need to install de phpmailer/phpmailer library.
- We can install it through the init process
- We can install it after the init process be running
- composer require phpmailer/phpmailer

2 DAW - DWES Sending emails from PHP

2 DAW - DWES Sending emails from PHP

- As we don’t have our own mail server, we need to use one third party

server like Gmail or similar.

- Unfortunately(or not), this “big” email servers have nowadays

security features that don’t allow to login only by using user/password.

- There are many free SMTP servers online that can provide us the

email sending without any cost.

- SMTP2GO, Elastic Email, Mailgun, etc…

2 DAW - DWES Sending emails from PHP

- For our example, we’ll use an outlook account. We just need to know

the smtp server URL. In our case is smtp.office365.com

2 DAW - DWES Sending emails from PHP

- As in every library, we have to check the official documentation.

https://github.com/PHPMailer/PHPMailer

2 DAW - DWES Sending emails from PHP

2 DAW - DWES Questions?

---

## 3.2 U3 Class exercises

1. Using the reserved variables, create a dynamic webpage that shows: - IP of the server. - IP if the requester (client). - Method used in the request. - Hour of the request. - Webpage where the request come from (requester). - The query string (if exists) - Day and month of the request (not the year). - Loop for showing all the vars and values of the array $_SERVER - Add in the utils.php a function where you pass as argument the name of the variable and the function returns the value of it (of the $_SERVER array).
2. Create a web page with the structure header-body-footer. Header and footer have to be in another file and included via function (require or include). Reuse this files into another webpage.
3. Add to the form an error control, showing near the element an error if its empty or none is selected (in case of checkboxes).
4. Create a form for sending your name. This name must have more than 3 chars. If it's correct, show a welcome message with the name and if not, show again the form with the previous value and showing the corresponding error.
5. Create an online calculator. This must contain two input for the values and one select for the operator. If data it's correct, show the result and if not, keep the values and show the error message.
6. Create a list using ul and li. The list will be initially empty but with a form you can add elements to the list.
7. Modify the previous exercise for adding a button that delete the last element shown.
8. Modify the previous exercise to delete the element selected previously in a select with the list values.
9. Create an application that reads all the cookies sent by the client and show them in a webpage.
10. Create an application that counts how many visits there are in the webpage. It has to have a button to reset the counter.
11. We want to create a webpage for knowing the favorite color of a user. If the user hasn't chosen one, we must show a form with a select filled of colors. If the user has already chosen one, we must show a text with his favorite color and the form (where he can change the favorite color). The background color of the webpage have to change with the favourite color of the user.
12. Create an application with the following functions: - login: shows a login form with user and password. - auth: saves user and password in a cookie and go to home. - home: shows a welcome message with the name and a link for closing the session. - logout: delete all cookies and go to login. *Extra: in login, check if there is user. if not, show the form and if there is, go to home
13. Repeat exercise 11 using sessions instead of cookies.
14. Using one of the login forms you have, add sessions. If the auth is correct, go to a webpage where you can close the session. If not, inform the user. Remember to check in every webpage of the website if the session is started.
15. Using composer, install the library *Validator Chains* and apply it to one of your forms. At least validate a date, an email, an string (any validation) and choose another one freely. *https://docs.laminas.dev/laminas-validator/validator-chains/*
16. Create for sending an email that reads from the form the data of the email and send it using a library.

---

## 3.3 Code examples

```php
<?php
if (!empty($_POST['modulos']) && !empty($_POST['nombre'])) {
  // Aquí se incluye el código a ejecutar cuando los datos son correctos
} else {
  // Generamos el formulario
  $nombre = $_POST['nombre'] ?? "";
  $modulos = $_POST['modulos'] ?? [];
  ?>
  <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
   <p><label for="nombre">Nombre del alumno:</label>
    <input type="text" name="nombre" id="nombre" value="<?= $nombre ?>" /> 
   </p>
   <p><input type="checkbox" name="modulos[]" id="modulosDWES" value="DWES"
    <?php if(in_array("DWES",$modulos)) echo 'checked="checked"'; ?> />
    <label for="modulosDWES">Desarrollo web en entorno servidor</label>
   </p>
   <p><input type="checkbox" name="modulos[]" id="modulosDWEC" value="DWEC"
    <?php if(in_array("DWEC",$modulos)) echo 'checked="checked"'; ?> />
    <label for="modulosDWEC">Desarrollo web en entorno cliente</label>
   </p>
   <input type="submit" value="Enviar" name="enviar"/>
  </form>
<?php } ?>
```

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — Task 1 - Advanced forms**
> DWES – U3A1
>
> U
>
> Unit 3 – Task 1 Advanced forms
>
> Objectives
>
> - Create a sticky form.
> - Upload files
> - Get attributes from uploaded files
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> all the files of the task.
>
> - Remember to use relative paths.
>
> ### 1. Modify the form used in the task of the unit 1 to
>
> 1.1. Add a new input for uploading a file. This file only can be a pdf file. 1.2. Validate data in the form. 1.3. If something is wrong, remember values and show the error. 1.4. If everything is fine
>
> #### 1.4.1. Move the uploaded file to a folder named uploads and set the name
>
> with the current date (DDMMYYYY) followed by the name written in the form. i.e., 13102024Juanra.pdf
>
> #### 1.4.2. Relocate to another webpage where you show the complete path
>
> of the file and its size. 1.4.3. Add a button in this page for downloading the file. 1.5. Limit the size of the file(bill) to 10 MB

> **✍️ Activitat Pràctica 3.2 — Task 2 - Libraries (groups)**
> ### 📄 U3_A2_Groups.pdf
>
> DWES – U3A2
>
> U
>
> Unit 3 – Task 2 Libraries
>
> Objectives
>
> - Investigate popular libraries
> - Install libraries using Composer
> - Use of PHP libraries
>
> Instructions
>
> - This task has three marks, the technical part (40%), the exposition part
>
> (40%) and the co evaluation part (10%)
>
> Libraries are like having a treasure of ready-made tools and solutions at your disposal. Instead of reinventing the wheel with every project, libraries empower you to tap into the collective wisdom and experience of developers worldwide.
>
> These libraries not only expedite your development process but also enable you to build more robust, feature-rich applications. Libraries save you time, fuel innovation, and elevate your web development skills.
>
> In groups of 2, investigate and select at least 2-3 PHP libraries (only one will be finally selected).
>
> Once the library has been selected, prepare an exposition of 5 minutes maximum with, as minimum, the following points
>
> - Library purpose
> - Integration of the library (installation, dependencies, etc)
> - Where to find documentation.
> - How to use it. Best practices.
> - Live example
>
> Besides, you can add some extra points like “problems found” or “alternatives to the library”, depending on the library selected and time available, among others.
>
> At the end of the exposition, you’ll have to evaluate your group colleagues.
>
> You will also have to evaluate the other groups by ranking them.
>
> Take into account that questions can be asked by the teacher or other groups at the end of the exposition. Good questions by other groups can increase the group’s mark.
>
> ### 📄 Groups Ranking.pdf
>
> U3A2
>
> Evaluate the other groups
>
> Names of your group: __________________________________________
>
> Instructions
>
> - Write your favourite groups in descendent order (1st is your
>
> favorite)
>
> - Your group cannot be part of the ranking
>
> - ________________________________________________
>
> - ________________________________________________
>
> - ________________________________________________
>
> - ________________________________________________
>
> - ________________________________________________
>
> ### 📄 Co-Evaluation.pdf
>
> DWES – U3A2
>
> U
>
> Unit 3 – Task 2 Evaluate your group
>
> You have finished the work. As in all the companies, some people contribute more than others.
>
> Now is time to evaluate them, yourself included.
>
> Instructions
>
> - You have limited points to distribute (Number of people * 8). Ex. 3
>
> people in the group à 24 points to distribute.
>
> - You can assign 10 points as maximum to each person.
> - The comment is mandatory.
> - The mark has to be different for each colleague (at least 0,5 of
>
> difference).
>
> NAME MARK COMMENT
>
> ### 📄 groups.txt
>
> Grup 1 - DOMPdf Abde Ivan Sergio Luis A.
>
> Grup 2 - Faker Javi Pau R. Jon
>
> Grup 3 - Php spreadsheet Giancarlo David Pau N.
>
> Grup 4 - Egulias email validator Marta Ruben Alejandro
>
> Grup 5 - Image workshop Toni Carlos Pau C.
>
> Grup 6 - PHP code coverage Marc Curro Carles Elena

> **✍️ Activitat Pràctica 3.3 — Task 2 - Libraries Ranking (groups)**
> DWES – U3A2
>
> U
>
> Unit 3 – Task 2 Evaluate your group
>
> You have finished the work. As in all the companies, some people contribute more than others.
>
> Now is time to evaluate them, yourself included.
>
> Instructions
>
> - You have limited points to distribute (Number of people * 8). Ex. 3
>
> people in the group à 24 points to distribute.
>
> - You can assign 10 points as maximum to each person.
> - The comment is mandatory.
> - The mark has to be different for each colleague (at least 0,5 of
>
> difference).
>
> NAME MARK COMMENT

> **✍️ Activitat Pràctica 3.4 — Task 2 - Libraries Co-evaluation (groups)**
> DWES – U3A2
>
> U
>
> Unit 3 – Task 2 Evaluate your group
>
> You have finished the work. As in all the companies, some people contribute more than others.
>
> Now is time to evaluate them, yourself included.
>
> Instructions
>
> - You have limited points to distribute (Number of people * 8). Ex. 3
>
> people in the group à 24 points to distribute.
>
> - You can assign 10 points as maximum to each person.
> - The comment is mandatory.
> - The mark has to be different for each colleague (at least 0,5 of
>
> difference).
>
> NAME MARK COMMENT
