---
layout: default
title: "UD4 — Data access · Temari Complet"
course_root: ".."
badge: "2n DAW · Grau Superior · UD4 — Data access"
prev_url: "../ut03/ut0301.html"
prev_label: "⬅️ 3.1 U3 Advanced PHP"
next_url: "../ut04/ut0401.html"
next_label: "4.1 U4 Data Access ➡️"
---

# 📘 UD4 — Data access (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**4.1 U4 Data Access**](./ut0401.md)

---

# 4.1 U4 Data Access

> **🔗 Recurs Web: PDO documentation**
> [**🌐 Obrir recurs extern (https://www.php.net/manual/es/book.pdo.php) ↗️**](https://www.php.net/manual/es/book.pdo.php)

> **🔗 Recurs Web: PDO tutorial**
> [**🌐 Obrir recurs extern (https://www.phptutorial.net/php-pdo/) ↗️**](https://www.phptutorial.net/php-pdo/)

---

### 📊 1. Unit 4 Data access

- 2nd DAW - DWES
- 1

### 📊 2. Connecting to a database

- There are many alternatives for working with a database.
- Easiest is MySQLi.
- Specific of the DBMS.
- If we change our database system, we need to change the code.
- Not secure.
- It’s easy to inject code.
- Old.
- 2

### 📊 3. Connecting to a database

- PDO
- PHP Data Object
- We can migrate from one DBMS to another without changing the code.
- Avoid SQL Injection.
- More secure.
- Easy to work using objects.
- Excellent error management.
- 3

### 📊 4. Connecting to a database

- First thing we need to do is to configure the connection
- We must do it in separated files (security).
- This file won’t be (normally) uploaded to Git.
- 4

### 📊 5. Querying the database

- Once you are connected to database, you can start to perform different operations.
- First operation we are going to study is the query for getting data from the database.
- SQL injection problem
- 5

### 📊 6. Querying the database

- To avoid SQL injection, PDO offers us what is called prepared statements.
- https://www.php.net/manual/es/pdo.prepared-statements.php
- What is $result?
- 6

### 📊 7. Querying the database

- By default, it returns an associative array where the keys are the names of the columns.
- Take into account that fetch() is only used for returning one row.
- If we cant to return more than one row, we’ll use fetchAll() which will return an array of associative arrays.
- 7

### 📊 8. Querying the database

- 8
- fetch()
- fetchAll()

### 📊 9. Querying the database

- If we want to read from the database and create objects on the fly, we must set the property setFetchMode to FETCH_OBJ.
- statement->setFetchMode(PDO::FETCH_OBJ);
- 9

### 📊 10. Querying the database

- If we want know how many rows has fetched, we’ll use the function rowCount.
- statement->rowCount();
- 10

### 📊 11. Querying the database

- If we want to map the query to one of our classes we must set the property setFetchMode to FETCH_CLASS
- statement->setFetchMode(PDO::FETCH_CLASS, “YourClassName”);
- Names of the private attribute of our class have to match exactly (upper and lowercase included) with the names of the columns of our table.
- Complete documentation
- https://phpdelusions.net/pdo/objects
- 11

### 📊 12. Querying the database

- 12

### 📊 13. Querying the database

- Mapping to classes doesn’t work very well when the class has a constructor.
- If you really need to use a constructor in your class, the solution is to indicate to the fetch that have to fill the properties later.
- 13

### 📊 14. Inserting data

- We prepare the SQL statement binding the params and execute.
- We can get the ID of the inserted row with lastInsertId();
- 14

### 📊 15. Inserting data

- We can also bind de params by using an array.
- 15

### 📊 16. Updating data

- Update is very similar to insert (and to delete)
- 16

### 📊 17. Deleting data

- Same deleting data
- 17

### 📊 18. DB management

- Usually, functions for accessing the database are isolated from views.
- You can do this by having a db.php with all the functions inside.
- Or you can do this by having different controllers for different databases
- User_db.php
- Article_db.php
- …
- 18

### 📊 19. Files

- 19

### 📊 20. Questions?

- 20

---
