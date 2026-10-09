---
layout: default
title: "✍️ Activitats pràctiques UT4 — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT4 — Unit 4 - Data access"
prev_url: "../ut04/ut0403.html"
prev_label: "⬅️ 4.3 U4 Class exercises"
next_url: "../ut05/index.html"
next_label: "📘 UT5 Completa ➡️"
---

# ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — Task 1 - Login with security**
> DWES – U4A1
>
> U
>
> Unit 4 – Task 1 Login and register with security
>
> Objectives
>
> - Create a register and login form
> - Investigate password_hash and password_verify function.
> - Access to the database for storing user data with security (previous
>
> functions)
>
> - Check user password with security (previous functions).
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> all the files of the task (database included).
>
> - Remember to use relative paths.
>
> For this task we are going to need 3 pages and a database with one table (users)
>
> - signup.php: Contains a form to create a user. Only username, password and
>
> confirm password are asked. When you press the save button, you must verify in the server part (for this exercise you don’t have to check in client), at least the following criteria
>
> - Not empty.
> - Both passwords are equal.
> - Username does not exist.
> - Username > 4 chars
> - Password contains >8 chars and with a combination of chars,
>
> numbers and symbols (you can use a library here). - If everything is ok, the user will be created taking into account that the password cannot be stored in plain text using the functions previously indicated. Once the user has been created, you must redirect to index.php.
>
> If it has some error, you have to inform the user of the error.
>
> - index.php: Contains the typical user-password form, a button for login and a
>
> button for sign-up. - Sign-up button will redirect the user to signup.php. - If the user fills both fields, you must check with the database if the user and password are correct. Remember to use functions to check the password with security. - If user and password are not correct, you must inform the user of the error.
>
> If user and password are correct, you must start session and redirect the user to main.php
>
> DWES – U4A1
>
> - main.php: Only accessible by identified user. If the user is not identified,
>
> you must show a message and a link to the index.php webpage. If the user is identified, you must show a welcome message with his name and a link for logout and redirect to index.php.

> **✍️ Activitat Pràctica 4.2 — Task 2 - Programming in turns (Groups)**
> DWES – Shift programming
>
> Shifts programming - Instructions
>
> - The mark of this activity is 50% activity – 25% classification - 25% co
>
> evaluation.
>
> - The activity has to be uploaded to Aules before the closing time. If not, the
>
> mark will be a 0.
>
> - The activity will be done completely off-line.
>
> - It’s a good practice to pre-analyze the group members skills in order to
>
> organize shifts better.
>
> - Download, prepare and organize the material you could need during the
>
> problem (remember that you won’t have network).
>
> - Every shift is 6 minutes.
>
> - When you are not programming, it’s completely forbidden
>
> o Check computers. o Check mobile phones. o Speak with members of your group. o Speak aloud with other colleagues.
>
> - If somebody is caught violating these rules, the group will be penalized
>
> with a shift without programming (nobody).
>
> - If you see somebody from the other group violating these rules, you must
>
> say it (remember that 25% of the mark depends of being better than other groups).
>
> - At the beginning of the activity, you’ll have 10 minutes with all the group to
>
> analyze the problem and organize shifts and tasks.
>
> - The group has 2 wildcards during the process of developing. These
>
> consists in having one of the members of your groups with
>
> - At the end of the activity, you’ll have 5 minutes with all the group to upload
>
> the task to Aules. Only one member has to upload it.
>
> - The day after the activity, you have to evaluate you colleagues. The co
>
> evaluation form will be uploaded to Aules and it’s mandatory to fill it.

> **✍️ Activitat Pràctica 4.3 — Task 2 - Programming in turns (Individual)**
> Shifts Programming - 1st quarter The food game
>
> You are asked to develop a game for kids where they have to classify different foods into different categories.
>
> - At the beginning of the game, you’ll have some pre-created food loaded at the
>
> food column. Besides every food, you’ll find a select element with the categories loaded in it. The appearance is as follows: (2 pts)
>
> - When you click on the “Move” button, every food you have previously selected
>
> a category will be moved into the corresponding category. Those you haven’t selected any, will be kept in the food column. (2,5 pts)
>
> - If the category is correct, the food will appear in green and the select won’t
>
> appear, if not, the food will appear in red and the select will appear and will respond to the “Move” button as the other do. (2,5 pts)
>
> - The movements label will show how many movements are made into the
>
> game. Every time you click on “Move” this counter will be incremented. (1,5 pt)
>
> - When you click into the "Reset” button everything will be back as it was at
>
> the beginning (food into food column, movements to 0, etc) (1,5 pt)
>
> WILDCARD
>
> I need 2 minutes of my colleague WILDCARD
>
> I need 2 minutes of my colleague

> **✍️ Activitat Pràctica 4.4 — Task 2 - Co-Evaluation - Programming in turns**
> DWES – U3A2
>
> Shifts Programming – 1st Quarter Co-Evaluation
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
