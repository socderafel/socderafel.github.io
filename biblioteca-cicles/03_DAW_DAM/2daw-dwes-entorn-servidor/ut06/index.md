---
layout: default
title: "UT6 — Unit 6 - Laravel II — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT6 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut06/ut0601.html"
next_label: "6.1 U6 - Frameworks. Laravel II ➡️"
---

# 📘 UT6 — Unit 6 - Laravel II (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**6.1 U6 - Frameworks. Laravel II**](#ut0601) (o [obrir en pàgina individual ➡️](./ut0601.md) )
> - [**6.2 How to use Tailwind CSS into a Laravel project**](#ut0602) (o [obrir en pàgina individual ➡️](./ut0602.md) )
> - [**6.3 How to clone a Laravel project from Github**](#ut0603) (o [obrir en pàgina individual ➡️](./ut0603.md) )
> - [**6.4 U6 Class exercises**](#ut0604) (o [obrir en pàgina individual ➡️](./ut0604.md) )
> - [**✍️ Activitats pràctiques UT6**](#ut06actividades) (o [obrir en pàgina individual ➡️](./ut06actividades.md) )

---

## 6.1 U6 - Frameworks. Laravel II

> **📌 🏷️ Apunt de la Unitat**
> #### Resources

📎 **Material de laboratori (Docker Laravel + Node):** `Archivo.zip`

> **🔗 Recurs Web: Laravel migrations (DB)**
> [**🌐 Obrir recurs extern (https://laravel.com/docs/10.x/migrations) ↗️**](https://laravel.com/docs/10.x/migrations)

> **🔗 Recurs Web: Eloquent ORM (DB)**
> [**🌐 Obrir recurs extern (https://laravel.com/docs/10.x/eloquent) ↗️**](https://laravel.com/docs/10.x/eloquent)

> **🔗 Recurs Web: Images manipulation library (Laravel)**
> [**🌐 Obrir recurs extern (https://intervention.io/) ↗️**](https://intervention.io/)

> **📌 🏷️ Apunt de la Unitat**
> #### Tasks

---

Unit 6 Frameworks. Laravel II 2nd DAW - DWES

2 DAW - DWES Sessions

- Basic usage of sessions in Laravel are very easy once we know how the session

works in PHP.

- session(‘key’); //gets the value from the session. We can add a default value as a

second parameter.

- session([’key’ => ’value’]; //puts the value into the session
- session is also accessible via Request object with more functionalities.
- https://laravel.com/docs/10.x/session

2 DAW - DWES Data access

- DB configuration in app/config/database.php
- As you can see, the env function is being used to assign values to the

parameters.

- env(key, defaultValue)
- Look into the env file the specific key
- If exists -> assign the value found in the env file
- If not exists -> assign the default value

2 DAW - DWES Migrations

- Migrations are known as the version control for databases.
- Every change you make in the database keeps registered.
- You can rollback changes.
- If you work with more people, if somebody changes something, it will be

applied to everyone without having to modify explicitly the database.

- https://laravel.com/docs/10.x/migrations
- Folder database/migrations

2 DAW - DWES Migrations

- As you can see, there are some existing migrations. These are not

examples, these are used by Laravel so we DO NOT DELETE THEM.

- For execute the migrations, we’ll run in the terminal the following

instruction

- php artisan migrate

2 DAW - DWES Migrations

- We can go back to the last

version by running

- php artisan migrate:rollback
- Or we can go back to the

beginning by running

- php artisan migrate:reset

2 DAW - DWES Migrations

- As we’ve studied, migrations are the version control for databases.
- Thus, we may create a new version before make any changes in our

initial database.

- php artisan make:migration name_of_migration

2 DAW - DWES Migrations

2 DAW - DWES Migrations

- In the up method we must

add the “new” changes of the database

- In the down method it’s

always a rollback for the changes made on the up method

2 DAW - DWES Migrations

- Now you have the migration ready and can be executed.
- php artisan migrate

2 DAW - DWES Migrations

- Take into account that we must modify the User model to add the

username to the fillable array.

2 DAW - DWES Migrations

- We can check it by inserting a new register.
- For inserting data, we can use the create function (inserting data will

be studied with more detail).

2 DAW - DWES User authentication

- Authentication in Laravel is a very simple process by using the helper

auth::Attempt

- We can check it by using auth()->user()
- https://laravel.com/docs/10.x/authentication

2 DAW - DWES User authentication

- Once we have the authentication done, we can check the user

authenticated in auth()->user().

- dd(auth()->user)
- For closing the session, we can use the helper too
- auth()->logout()
- If we have some routes we want to restrict the access to

authenticated users, we just have to add a middleware

2 DAW - DWES User authentication

- This will check if the user is logged. If it’s logged, the controller will be executed

as always.

- If it’s not, it will be redirect to the route ‘login’.
- This is the default behaviour.
- You may modify this behavior by updating the redirectTo function in your

application's app/Http/Middleware/Authenticate.php file.

2 DAW - DWES Working with data

- Laravel includes its own ORM (Object Relational Mapper). It’s called

Eloquent.

- It helps developers to work and connect the code with the database.
- Each table has its own model.
- The model has the functions for getting, updating and deleting data for the

table.

2 DAW - DWES Models

- The instruction for create a new model is
- php artisan make:model tableName -m
- The name is always in lowercase and singular
- m parameter is to create the migration associated to that model

2 DAW - DWES Models

- If everything is OK, a new migration will be created automatically

when creating the model.

- As you can see, the new migration file has the same structure than

the others.

2 DAW - DWES Models

- The create function is where we need to define every column of our

new table.

- We usually did this directly in the database, but the essence of Laravel and

the model it uses, is to do it in files.

- There are many options for creating tables.
- https://laravel.com/docs/10.x/migrations#tables

2 DAW - DWES Models

2 DAW - DWES Models

- One we have our model defined in the create method, we have to re

run the migration command for apply this changes to our database.

- php artisan migrate

2 DAW - DWES Retrieving data

- Laravel providers us several functions for retrieving data thanks to the

Eloquent library.

```php
• Model::all();
• Review::all();
```

- Returns all the data of the Review table.
- compact() functions compacts data into an associative array.

2 DAW - DWES Retrieving data

2 DAW - DWES Retrieving data

2 DAW - DWES Retrieving data

- As we’ve said, there can use other functions for retrieving data

```php
• all();
```

- find($id); //Returns a register with specific id
- findOrFail($id); //Same but returning an exception if not found
- We can also filter the data using clauses
- where(‘column’, 2)
- orderBy(‘column’)
- …
- https://laravel.com/docs/10.x/eloquent
- https://laravel.com/docs/10.x/queries

2 DAW - DWES Inserting and updating data

- Inserting data and updating data using the model it’s quite simple.
- We just need to fill the data of the model and use the save() function.

2 DAW - DWES Inserting and updating data

- For updating we’ll do the same but getting first the object to be

updated, modifying the attributes and saving it as we did when inserting.

- https://laravel.com/docs/10.x/eloquent#inserts

2 DAW - DWES Deleting data

- To delete data via the model, you may use the delete() function.
- If you know the primary key, you can use the destroy() function.

2 DAW - DWES Existing database

- If our database already exists, we just need to create the model and

fill it.

- Activity
- https://medium.com/@mohansharma201.ms/laravel-working-with-an

existing-database-d9eba86aa941

2 DAW - DWES Existing database

- First of all we need to set the table name and the primary key
- If table name is not set, same than model in lowercase and plural will be

taken.

- If the PK is ’id’ we can omit it.
- If the PK is not an Integer, we must set it too.

2 DAW - DWES Existing database

- By default, Eloquent expects created_at and updated_at columns to

exist on your model's corresponding database table

- If you don’t have them, set the $timestamps to false.
- By default, a newly instantiated model instance will not contain any

attribute value

- If you would like to define the default values for some of your model's

attributes, you may define an $attributes property on your model..

2 DAW - DWES Existing database

- Lastly, we need to set all the fields of our database we want to interact

with using the attribute fillable as we did on the other models.

- Once is done, we can access to the already existing table as we did on the

other models

```php
• MyNewModel::all();
```

- etc.

2 DAW - DWES Questions?

---

## 6.2 How to use Tailwind CSS into a Laravel project

For this tutorial you need a Docker container with Node installed and some ports exposed. You can find the Docker in the Resources section.

**Installing Tailwind**
First of all, we need to install Tailwind library into our Laravel project following this tutorial:
*https://tailwindcss.com/docs/guides/laravel*

**Runnfing the application**Set the content of the vite.config.js as follows:

*import { defineConfig } from 'vite';**import laravel from 'laravel-vite-plugin';**export default defineConfig({**plugins: [**laravel({**input: ['resources/css/app.css', 'resources/js/app.js'],**refresh: true,**}),**],**server: {**host: true**}**});*

**Running the application**We need to open 2 terminals. In each terminal we must connect to the docker container and run one of the following instructions in each terminal:
*php artisan serve --host 0.0.0.0**npm run dev --host*
Once you have run both commands, you can access your project by using the following URL:
*localhost:8000*

---

## 6.3 How to clone a Laravel project from Github

Follow these steps:
1.- git clone repositoryURL
2.- From the project folder into the Docker terminal:
 2.1.- composer install
 2.2.- cp .env.example .env.
 2.3.- php artisan key:generate
 2.4.- *php artisan migrate

*If any

---

## 6.4 U6 Class exercises

1. Create a Laravel project for the jardineria database

---

## ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — Task 1.2 - Forms, migrations and auth**
> DWES – U5A1
>
> U
>
> Unit 5 – Task 1.2 Dawstragram
>
> Objectives
>
> - Work with value interpolation.
> - Work with blade directives.
> - Work with migrations.
> - Create registers
> - Work with authentication .
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> the project.
>
> We start from our devstagram webpage created on Task 1.1.
>
> ### 1. Add a new page named main where the authenticated user will be
>
> redirected when the authentication is OK.
>
> - Add validations and sticky form to both forms. Be wise about validations.
>
> ### 3. Create a new database named devstagram. Once the database is
>
> created from phpMyAdmin, the tool cannot be used again for modify the database.
>
> - Add the column username and user_img. user_img can be nullable.
>
> ### 5. Register has to be functional. Once the register has been created,
>
> redirect to login.
>
> ### 6. Login has to be functional. When the user authenticates correctly,
>
> redirect to main. If there is some problem in the authentication, show an error in the login form.
>
> DWES – U5A1
>
> ### 7. Main webpage will contain the image of the user and its name aside. If
>
> there is no user
>
> ### 8. Navigation menu will change depending if the user is authenticated or
>
> not. If it’s authenticated, we’ll show the username and a link for closing session and if not, we’ll show the initial navigation menu.
>
> - Close session will disconnect the user and return to home.
>
> ### 10. Be sure that you cannot access to “protected” routes if you’re not
>
> authenticated. If use tries to access to a protected route, we’ll have to redirect to ‘home’ (not login).
>
> ### 11. Investigate how to upload a file from a form and add a new field to do it
>
> from the register form. The file you upload will be a image associated to the user_img field and, if filled, will be shown in the main page and if not, a default image will be shown.

> **✍️ Activitat Pràctica 6.2 — Task 2 - CRUD with existing DB**
> DWES – U6A1
>
> U
>
> Unit 6 – Task 2 Gardaw
>
> Objectives
>
> - Work with Eloquent
> - Work with existing databases
> - Work with emails
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> the project.
>
> - You can also upload it to github and upload only the link to the Github
>
> repository. Remember to include the user as collaborator.
>
> You are going to create a basic webpage to perform CRUD operations on the table “Clientes” of the database “jardineria” (you have it available in the unit 4 section).
>
> - Main page will have a table with all the data of the client. As last column will
>
> have 2 icons to delete and to edit. * (check optional at the end)
>
> - Delete button will delete the row.
>
> - Edit button will open a form with the data loaded on it and you can set new
>
> values to the register. o Validations, errors and sticky form is mandatory.
>
> - You can also create a new client. This form will be accessible through the
>
> main page. o Validations, errors and sticky form is mandatory. o If everything is correct, a email will be send to the administrator (you email, for example).
>
> *Optional: When you click on the edit button, the home page will be reloaded and input text will be shown in the row with the values on it instead of redirect you to a new webpage.
