---
layout: default
title: "UD5 — Introduction to frameworks. Laravel I · Temari Complet"
course_root: ".."
badge: "2n DAW · Grau Superior · UD5 — Introduction to frameworks. Laravel I"
prev_url: "../ut04/ut0401.html"
prev_label: "⬅️ 4.1 U4 Data Access"
next_url: "../ut05/ut0501.html"
next_label: "5.1 Frameworks. Laravel I ➡️"
---

# 📘 UD5 — Introduction to frameworks. Laravel I (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 Frameworks. Laravel I**](./ut0501.md)
- [**5.2 How to install npm (node) into our existing cont**](./ut0502.md)

---

# 5.1 Frameworks. Laravel I

> **🔗 Recurs Web: Laravel official reference**
> [**🌐 Obrir recurs extern (https://laravel.com/docs/10.x) ↗️**](https://laravel.com/docs/10.x)

> **🔗 Recurs Web: Laravel official videotutorials**
> [**🌐 Obrir recurs extern (https://laracasts.com/browse/all) ↗️**](https://laracasts.com/browse/all)

> **🔗 Recurs Web: Laravel form validations**
> [**🌐 Obrir recurs extern (https://laravel.com/docs/10.x/validation#available-validation-rules) ↗️**](https://laravel.com/docs/10.x/validation#available-validation-rules)

---

Unit 5 Frameworks. Laravel I 2nd DAW - DWES

2 DAW - DWES What is a framework?

- Frameworks offers structures for creating specific projects.
- Similar than a template.
- Reduces errors, saves time, increases the code quality, better

maintenance, increases security.

- Summarizing: Increase productivity.

2 DAW - DWES What is a framework?

- Before start working with a

framework for a specific language, we must be sure that we understand the language. If not, a framework can be a nightmare.

- PHP frameworks force you to

use the MVC pattern.

2 DAW - DWES What is a framework?

- Model: Business logic and app data.
- View: Presentation layer.
- Controller: Interacts with the view and the user.
- M: Database, V: HTML+CSS, C: Functions

2 DAW - DWES How do we pick a framework?

- Learning curve.
- HW requirements.
- Features of the framework.
- Sometimes, it’s better go to some place with a 49cc scooter than with a

Ferrari.

- Documentation, community, etc.

2 DAW - DWES PHP frameworks

2 DAW - DWES Laravel

- Most used framework in PHP.
- Nowadays version 10.

2 DAW - DWES Creating a Laravel project

- Requirements
- PHP
- Composer
- This instruction will create a folder so take into account that to

previously created folder won’t be necessary.

- composer create-project laravel/laravel myFirstLaravelApp

2 DAW - DWES Creating a Laravel project

2 DAW - DWES Running a Laravel project

- For running a Laravel Project
- We can access through the public folder of the project
- localhost/dws/myLaravelProject/public
- Or we can run this command from the directory of the project
- php artisan serve --host 0.0.0.0
- The last part of the instruction is because we are in a docker container. If we aren’t its not

necessary.

2 DAW - DWES Running a Laravel project

- As you can see, the Laravel’s port is 8000. However, it’s into the

container so for accesing to it we must use the port we’ve previously mapped to the 8000 port (8888).

2 DAW - DWES Front Controller

- public folder
- Entrypoint to our app.
- Only folder visible and accessible for users (css, js, etc)
- Only one php file. index.php
- No matter what you put on your URL, index.php will always be the entrypoint

of your application.

- This is made thanks to mod_rewrite module of Apache.
- This is called FrontController pattern.

2 DAW - DWES Front Controller

- For checking that no matter what you punt on the URL, you can check

it yourself.

2 DAW - DWES Routes

- As Laravel uses the Front Controller to redirect requests, when you

need to create a new page, you don’t need to create a new .php file buy you need a way to tell the app where to go.

- You need to create a Route.
- All Web Routers are located into routers->web.php

2 DAW - DWES Routes

- Every time you access to “/” through the URL, Laravel will look for a

view called “welcome” and then will be shown.

- What happens if we comment this lines? Why?

2 DAW - DWES Routes

- So, we can conclude, we are defining what to show when we access

to “/”.

- We can change things to see what happen

2 DAW - DWES Routes

- We can define as many routes as we

need.

- Routes can return views or text

(among others).

- The order matters.

2 DAW - DWES Routes with parameters

- When we need to pass arguments to an URL in Laravel, we could use

the old-style PHP $GET[‘myarg’];

2 DAW - DWES Routes with parameters

- Fortunately, Laravel provides us a cleanest way of doing the same, by using

the parameter as part of the URL

- Activity: Add now a route to see the detail of a mark
- What happens if we put the route at the beginning of the file? And at the end? Why?

2 DAW - DWES Routes with parameters

- Remember: Order matters
- Remember: put dynamic routes AFTER static routers.
- Parameters, by default, accept alphanumeric values so the program

does not know if you are giving a route or a parameter.

- Unless…

2 DAW - DWES Routes with parameters

- We force the parameter in the route to be a number

2 DAW - DWES Controllers

- MVC

2 DAW - DWES Controllers

- We must create them in app/http/controllers
- We could create manually the file and “create” the structure

ourselves or create the file via a command in the terminal and let Laravel do the job.

- From the project folder
- php artisan make:controller MyController

2 DAW - DWES Controllers

2 DAW - DWES Controllers

- We must have a controller for every route.
- We just need to replace the function in the web.php with the name of

the controller. (Remember to add the controller at the top of the file).

- Note that the controller have been “imported” at the top of the file.
- use App\Http\Controllers\HomeController;

2 DAW - DWES Controllers

- There is a magic method (runs automatically) in Laravel controllers

named __invoke that will be automatically executed when someone tries to access to the route that use it.

2 DAW - DWES Controllers

- What happen if we want to use the same controller for different

routes?

- CourseController

2 DAW - DWES Controllers

- In the controller we need a function for

every route.

- By convention, the name of the

functions for this “typical” functions are index, show and create.

2 DAW - DWES Controllers

- And now, we must replace in the web.php the function for the

controller as we did with the home.

- In this case, we must also set the function we want to execute. If not,

it will try to reach the “invoke” function and it does not exist in this file.

- We’ll use an array where the first position is the name of the

controller and the second is the name of the function(string).

2 DAW - DWES Controllers

2 DAW - DWES Classes

- Classes have no special behaviour in Laravel.
- If we need to use them, we just need to create them as we did on PHP.
- Must be in the app folder. For better organization, it’s recommendable to

create a folder. i.e. /app/classes or /app/objects

- When you need to use it, remember to “import” it by using the use

keywork at the top of the file as we do in Controllers.

2 DAW - DWES Views

- We must create them in resources/views

2 DAW - DWES Views

- If we want to show the view when we enter to the route, we must

change the controller.

- The view method will find the views into the views folder. We don’t

need to include the extension of the file

2 DAW - DWES Views

- Now we can do the same with the other webpages.
- We can group views under folders.

2 DAW - DWES Views

- When we have views into folders, we must set the view method

including also the name of the folder

2 DAW - DWES Views

- When a parameter is passed to the view, we must set it using an

associative array where the key is the name you can use into the view.

2 DAW - DWES Views - Introducing Blade

- Laravel includes a powerful template engine named Blade.
- Helps the developer to develop faster, easier and more efficiently.
- Blade files are included are included in the view folders.
- Uses their own directives and value interpolation.

2 DAW - DWES Creating a Blade template

- Usually, most parts of the webpages are common.
- In PHP, we used the “include” function.
- In Blade, we’ll use blade templates.
- All blade files finish with .blade.php

2 DAW - DWES Creating a Blade template

- We can create a blade file for being the structure (template) for our

webpages.

- These are created into views folder.

2 DAW - DWES Creating a Blade template

- We have to copy the structure of our webpages and use the

directive @yield(‘key’) for the variable content.

2 DAW - DWES Using blade

- Now, in every webpage where we want to use this template, we must

use the directive @extends(‘templateName’) at the beginning of the file.

- In our case, as we have the template inside a folder, we must indicate

it.

2 DAW - DWES Using blade

- In every file we are going to use blade, we must rename the file to

whatever.blade.php.

- home.php -> home.blade.php
- Automatically, directives will be recognized (if plugin installed)

2 DAW - DWES Using blade

- Next we must do in the file where we are using the template, is to set

all the yield directives.

- We had two yields in the template, one for the title and one for the

body content.

- We must use the directive @section(‘key’, ‘value’) or @section(’key’)

@endsection.

2 DAW - DWES Using blade

- Activity. Do the same with others webpages created.
- How do we use the variable with this method?

2 DAW - DWES Using blade

- For print a variable in a Blade file, we need to use value interpolation.
- Is a technique used in many languages where the variable goes

between brackets and is processed automatically.

2 DAW - DWES Using blade

- Blade has its own control structures.
- @foreach ~ @endforeach
- @if ~ @endif
- @switch ~ @endswitch
- @case define la casuística del switch
- @break rompe la ejecución del código en curso
- @default si ninguna casuística se cumple
- @php ~ @endphp
- And helpers.
- https://laravel.com/docs/10.x/helpers

2 DAW - DWES Using blade

- To reference other webpages (in forms, links, etc), it’s recommended

to use the route function.

- First, we have to add an alias to our route.
- And using the alias we’ll reference it using the route funcion

2 DAW - DWES Requests

- As we’ve studied, there are

many request types: GET, POST, PUT, PATCH…

- Laravel allows us to define a

route for the same “URL”, changing what to do depending of the request type.

2 DAW - DWES Requests

2 DAW - DWES Requests

- Laravel has XSS security implemented by default.
- In every form we have, we need to add the directive @csrf at the

beginning. If not, the form is not going to work.

- https://laravel.com/docs/10.x/csrf
- This will be replaced by a hidden input by Laravel to control malicious code

for us.

2 DAW - DWES Forms

- Reading information from our post

after a POST request is different than in PHP.

- We do it using the class Request,

already imported in our controller by default.

- dd function is like a var_dump

2 DAW - DWES Form validations

- For accessing to an specific value of an element of the form
- $req->get(’name’)
- Laravel includes data validation for forms. It has to be done into the

controller by using the function validate

```php
• this->validate($req, [validationRules];
```

- https://laravel.com/docs/10.x/validation#available-validation-rules

2 DAW - DWES Form validations

2 DAW - DWES Sticky form

- For having an sticky form in Laravel you just need to add into the

value attribute of the input element the following

```php
• {{old(‘nameOfTheInput’)}}
```

2 DAW - DWES Questions?

---

# 5.2 How to install npm (node) into our existing cont

**Extracted from the official node webpage: https://github.com/nodesource/distributions#installation-instructions**

apt-get update

apt-get install -y ca-certificates curl gnupg

mkdir -p /etc/apt/keyrings

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

NODE_MAJOR=20

echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

apt-get update

apt-get install nodejs -y

---
