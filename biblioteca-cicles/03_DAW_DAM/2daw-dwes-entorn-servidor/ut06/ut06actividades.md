---
layout: default
title: "✍️ Activitats pràctiques UT6 — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT6 — Unit 6 - Laravel II"
prev_url: "../ut06/ut0604.html"
prev_label: "⬅️ 6.4 U6 Class exercises"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT6

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
