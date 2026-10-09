---
layout: default
title: "UT9 — Annual Project — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT9 Completa"
prev_url: "../ut08/ut08actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT8"
next_url: "../ut09/ut0901.html"
next_label: "9.1 Annual Project ➡️"
---

# 📘 UT9 — Annual Project (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**9.1 Annual Project**](#ut0901) (o [obrir en pàgina individual ➡️](./ut0901.md) )
> - [**9.2 Annual project (English)**](#ut0902) (o [obrir en pàgina individual ➡️](./ut0902.md) )
> - [**9.3 Project planning. Distribution by units**](#ut0903) (o [obrir en pàgina individual ➡️](./ut0903.md) )
> - [**9.4 Database Diagram**](#ut0904) (o [obrir en pàgina individual ➡️](./ut0904.md) )
> - [**9.5 Database evaluation**](#ut0905) (o [obrir en pàgina individual ➡️](./ut0905.md) )
> - [**9.6 bandaw.sql 1st quarter**](#ut0906) (o [obrir en pàgina individual ➡️](./ut0906.md) )
> - [**9.7 bandaw.sql 2nd quarter**](#ut0907) (o [obrir en pàgina individual ➡️](./ut0907.md) )
> - [**✍️ Activitats pràctiques UT9**](#ut09actividades) (o [obrir en pàgina individual ➡️](./ut09actividades.md) )

---

## 9.1 Annual Project

PROJECTE ANUAL

Projecte anual

Gestió d’instruments a les bandes de música

Instruccions

- Al present document es troba tant la presentació del problema i el

context com les especificacions demanades.

- Llig detingudament l’enunciat de l’activitat i completa-la al teu

ordinador. Pots fer ús de totes les ferramentes que necessites. A cada unitat disposaràs de sessions per a poder treballar l’aprés en aquesta.

- Al finalitzar, cal entregar el projecte Web a la tasca Projecte

transversal que trobaràs a Aules.

- El projecte es presentarà la setmana d’avaluacions.
- Al final de l’activitat trobaràs la rúbrica d’avaluació.

Les bandes de música són un element vertebrador a la societat valenciana. Sols al nostre territori, les societats musicals i les escoles de música representen més del 50% del total estatal, tenint presència al 95% dels municipis d’Alacant, València i Castelló. Aquestes conformen un projecte social i educatiu únic al mon.

Un dels principals esculls que es troben els alumnes i futurs músics per començar (tant xiquets i xiquetes com adults), és que els instruments tenen preus elevats de compra i per a la majoria, els suposa una gran barrera fer una inversió en una cosa que no saben si serà l’instrument definitiu o si, en uns mesos, no voldran seguir amb ell.

Es per això, pel que la gran majoria d’escoles i societats musicals tenen instruments propis que poden prestar als nous alumnes durant un període determinat de temps, amb l’objectiu d’eliminar eixa barrera d’entrada.

Es de vital importància per a aquestes, saber quins instruments estan disponibles, quins estan prestats i mantindre un seguiment de l’estat del mateix i les revisions que es van fent.

Aquest seguiment, a la gran majoria d’associacions i escoles es porta de forma manual, mitjançant fitxes de paper en les que es va anotant les dades importants. No obstant això, a mesura que creix el nombre d’instruments i alumnes, es fa cada vegada més costós el seu manteniment que, sumat al problema de possible pèrdua d’aquests, ha fet plantejar-se a moltes associacions informatitzar tota aquesta tasca.

PROJECTE ANUAL

Es per això, que la Federació de Societats Musicals de la Comunitat Valenciana (FSMCV) ens ha encomanat la tasca de crear una Web que puga ser utilitzada per qualsevol usuari (associació o escola) que es done d’alta i amb l’objectiu de portar un seguiments d’aquests instruments.

De forma general la Web ha de ser capaç de: - Identificació i registre d’usuaris - Alta, modificació i eliminació de instruments - Gestió d’historial de prestataris de cada instrument. - Gestió de manteniment de instrument.

Després d’una primera reunió amb el client, s’ha dissenyat el primer esbós de l’aparença de la pàgina principal per a tenir una idea de com poden estar organitzats els elements a la pàgina Web, però ens ha donat total llibertat per a poder afegir, eliminar i modificar elements al nostre parèixer.

PROJECTE ANUAL A continuació, es detalla el que es demana en cadascuna de les pàgines

#### 1- Pàgina inicial – Usuari no identificat

A la pàgina inicial sols és d’interés l’apartat d’identificació i registre d’usuari. Aquest cal que continga un formulari de login amb un enllaç per a recordar la contrasenya i un botó que ens permeta crear un nou compte. L’aparença bàsica del formulari serà el següent

Si l’usuari s’identifica correctament, es redirigirà a la pàgina principal (2). - Si l’usuari no s’identifica correctament, cal mostrar un missatge al propi formulari indicant quin ha estat el problema. - En prémer l’enllaç Ha oblidat la contrasenya, es demanarà el correu electrònic mitjançant un modal. Si el correu està associat a un usuari, es farà la gestió d’enviament de restabliment de contrasenya, i en cas contrari s’informarà del error a l’usuari.

En prémer l’enllaç Registrar-se, s’obrirà una finestra en la que es mostraran els camps d’interés necessaris per a enregistrar un nou usuari (creant-lo a la base de dades) - Cal validar les dades tant en la identificació com en el registre per evitar problemes de seguretat així com encriptar les contrasenyes.

PROJECTE ANUAL

#### 2- Pàgina principal – Usuari identificat

La pàgina principal, com el seu nom indica, és la més important. Partint del projecte web proporcionat amb la següent aparença, cal afegir les funcionalitats que es detallen a continuació

PROJECTE ANUAL

- El botó tancarà sessió i tornarà a la pàgina inicial (1).

### 2. El botó redirigeix a la pàgina de nou instrument (3)

3.

- Per defecte, la part central de la pàgina web mostrarà tots els

instruments que té donats d’alta l’usuari. De forma obligatòria cal que mostre la imatge de l’instrument(si no té cap posàrem una imatge per defecte), la marca, el model i el nº de sèrie.

- Es pot afegir qualsevol comportament més que es crega

interessant i d’utilitat per a l’usuari: diferent color depenent de l’estat, funcionalitat d’esborrar o modificar en la pròpia vista, etc.

### 4. Formulari de cerca. Cal que tinga, com a mínim els paràmetres que es

mostren a la imatge. Si apliquem diversos filtres, es tindran en compte tots ells. Al llevar els filtres, es netejarà el formulari i es mostraran tots els instruments de nou.

- El botó redirigeix a la pàgina de detall d’instrument (4).

### 6. S’implementarà un botó per crear un pdf amb el llistat i l’estat dels

instruments.

### 7. Cal afegir anuncis de Google Ads a la part inferior de la pàgina web

#### 3- Pàgina nou instrument – Usuari identificat

A la pàgina de nou instrument sols s’haurà de controlar que el formulari siga vàlid així com mostrar els possibles errors que puga donar camps (tots els camps son obligatoris) de forma eficient i correcta. Una vegada l’instrument es done d’alta correctament, tornarem a la pàgina principal (2).

#### 4- Pàgina detall instrument – Usuari identificat

Segons l’esbós presentat, una proposta seria la següent on, centrant-se en la part central

### 1. Es mostraran les dades de l’instrument seleccionat. Per a passar les

dades de una pàgina a altra podeu gastar el mètode que volgau.

### 2. L’opció de modificar permetrà modificar les dades de l’instrument (les

mateixes que es necessiten per a donar d’alta). Cal validar que les dades siguen correctes al igual que quan el donem d’alta.

### 3. Abans d’eliminar l’instrument definitivament, caldrà mostrar un missatge

de confirmació a l’usuari.

### 4. La vista de préstecs i revisions és molt similar. En ambdues caldrà vore

els detalles del préstec o la revisió en qüestió i permetrà tant modificar les ja creades, com eliminar-les i crear-ne de noves. Els camps fi de préstec i observacions son opcionals i la resta obligatoris. Cal fer una correcta gestió de les dates.

### 5. Per a crear un nou préstec o revisió, es mostrarà finestra modal on

s’emplenen les dades i al tancar-la, ja apareixerà a la web.

### 6. A la finestra de revisions es pot adjuntar un document des de qualsevol

ferramenta en el núvol que estarà associada a la revisió.

- Cal revisar bé la seguretat dels formularis.

PROJECTE ANUAL

---

## 9.2 Annual project (English)

ANNUAL PROJECT

Annual project

Instrument management in bands

Instructions

- In this document you will find both the presentation of the problem the

global specifications.

- Read the statement of the activity carefully and complete it on your

computer. You can make use of all the tools you need. In each unit you will have sessions to work on what you have learned in it.

- You’ll work with GitHub so the delivery of the task will be through it.
- The project will be presented in the week of the exam.
- At the end of the document, you will find the global evaluation rubric.

Bands are a backbone of Valencian society. Only in our territory, musical societies and music schools represent more than 50% of the state total, being present in 95% of the municipalities of Alicante, Valencia and Castellón. These make up a unique social and educational project in the world.

One of the main obstacles that students and future musicians face to begin with (both children and adults), is that instruments have high purchase prices and for most, it is a great barrier to make an investment in something that they do not know if it will be the definitive instrument or if, in a few months, they won't want to continue with it.

That is why the vast majority of schools and musical societies have their own instruments that they can lend to new students for a certain period of time, with the aim of eliminating this barrier to entry.

It is of vital importance for them to know which instruments are available, which ones are on loan and to keep track of their status and the revisions that are being made.

This monitoring, in the vast majority of associations and schools, is carried out manually, using paper sheets on which the important data is noted. However, as the number of instruments and students grows, their maintenance becomes harder, added to the problem of possible loss of these, has made many associations consider computerizing all this work.

ANNUAL PROJECT

That is why the Federation of Musical Societies of the Valencian Community (FSMCV) has entrusted us with the task of creating a website that can be used by any user (association or school) with the aim of keeping track of these instruments.

In general, the Web must be able to: - User identification and registration - Registration, modification and removal of instruments - Management of borrower history for each instrument. - Instrument maintenance management.

After a first meeting with the client, the first sketch of the appearance of the main page has been designed to get an idea of how the elements on the website can be organized, but we have been given total freedom to add, remove and modify the appearance.

ANNUAL PROJECT Below is a detail of what is requested on each of the pages

#### 1- Home page – Unidentified user

On the home page, only the section of user identification and registration is of interest. This must contain a login form with a link to remember the password and a button that allows us to create a new account. The basic appearance of the form will be as follows

If the user is correctly identified, he will be redirected to the main page (2). - If the user is not correctly identified, a message must be displayed on the form itself indicating what the problem was. - When you click on the Forgot password link, the email will be asked using a modal window. If the email is associated with a user, the management of sending a password reset will be carried out, otherwise the user will be informed of the error.

When you click on the Register button, a window will open showing the fields of interest necessary to register a new user (creating it in the database). - It is necessary to validate the data both in the identification and in the registration to avoid security problems as well as encrypt the passwords.

ANNUAL PROJECT

#### 2- Main page – Identified user

The main page, as the name suggests, is the most important webpage. Starting from the following appearance, it is necessary to add the functionalities detailed below

ANNUAL PROJECT

- The button will log out and return to the home page (1).

### 2. The button redirects to the new instrument page (3)

3.

- By default, the central part of the website will show all the

instruments registered by the user. It is mandatory to show the image of the instrument (if it has none, we must put a default image), the brand, the model and the serial number.

- You can add any other behavior that you think is interesting and

useful for the user: different color depending on the state, functionality to delete or modify in the view itself, etc.

### 4. Search form. It must have, at least, the parameters shown in the image. If

we apply multiple filters, all of them will be taken into account. Removing the filters will clear the form and show all instruments again.

- The button redirects to the instrument detail page (4).

### 6. A button will be implemented to create a pdf with the list and status of the

instruments.

### 7. You need to add Google Ads at the bottom of the web page

#### 3- New instrument page – User identified

In the new instrument page, you will only have to check that the form is valid and show possible errors, efficiently and correctly. Once the instrument is registered correctly, we will return to the main page (2).

#### 4- Instrument detail page – Identified user

According to the outline presented, a proposal would be the following

### 1. The data for the selected instrument will be displayed. To move the data

from one page to another you can use the method you want.

### 2. The option to modify will allow you to modify the instrument data (the same

data that is needed to register). It is necessary to validate that the data is correct as when we register it.

### 3. Before permanently removing the instrument, it will be necessary to show

a confirmation message to the user.

### 4. The view of loans and reviews is very similar. In both you will have to see

the details of the loan or the revision and allow modifications and removals. The end of loan and observations fields are optional and the rest mandatory. It is necessary to make a correct management of the dates.

### 5. To create a new loan or review, a modal window will be displayed where

the data is filled in and when closed, it will appear on the web.

### 6. In the revisions window you can attach a document from any cloud tool

that will be associated with the review.

- The security of the forms must be carefully reviewed.

ANNUAL PROJECT

ANNUAL PROJECT Evaluation rubric

Very good 9 to 10 Well 6 to 9 Regular 4 to 6 Bad 0 to 4

User identification and registration

15%

Full functionality. with WS. Identification without any errors and registration well validated and managed. It works correctly but has some errors in the use of the WS or in the validation of the data Identification and registration work but do not use WS or validate data. Identification and/or registration do not work properly.

Main page. Instruments and search 30%

Full functionality with WS. Items are displayed dynamically. The search engine works well. Ads are implemented. The elements are displayed dynamically via WS. The search engine has a problem or the ads are not implemented. Items are displayed dynamically but the search engine fails regularly or the ads are not implemented.

Items are not displayed or displayed non dynamically. Search engine not implemented or non- functional. Unsupported ads

Instrument detail page. Loans and reviews 30%

Full functionality with WS. Correctly implemented loans, reviews and instrument details. Most functionality is complete. It fails in some modification or elimination and / or in small details. There is a missing section to implement but the vast majority works correctly. Sections are missing. The operation of these is not correct.

PDF generation and integration with the cloud

15%

Full functionality. It generates the pdf correctly and integrates with the cloud. The creation of the pdf works but contains errors. Cloud integration does not work properly. The creation of the pdf works but not the integration with cloud service It does not generate the pdf or integrate

```php
service in the
```

cloud General operation 5% In general, the page behaves as expected Some redirect doesn't work well or some inconsistency is found in the forms. Redirects do not work properly, the session is not saved well. Redirects are missing. The sessions do not work properly

ANNUAL PROJECT Code quality

5% The code is readable, clean, well identated, with commentary and well modularized. Use patterns. The code is correct, but it could be improved with some things. The code has few comments. There are no indentations. Not very modularized. It's hard to understand the code. There are no comments.

---

## 9.3 Project planning. Distribution by units

| Unit 1 | Project creation. Git initialization. Database modeling. Task in Aules. MAX DATE 9/10/2023 23:59. Webpages design (UI). |
| --- | --- |
| **Unit 2** | Login UI. Main Webpage UI. Classes creation. Basic logic with objects and arrays. |
| **Unit 3** | Errors and sticky form in login. Errors and sticky form in sign up. Errors and sticky form in instrument creation Band and instruments image management. Session and cookies management. Basic search form in main page. Composer integration. Libraries. Forgot your password email. |
| **Unit 4** | DB integration. |
| **Unit 5** | Laravel project creation Integrate some frontend library (Tailwind, Bootstrap, etc) Create views. It's mandatory to use at least one template. Routes definition. Controllers definition. Classes definition. Github repo creation |
| **Unit 6** | Getting instruments Sessions User auth and register Integrate database Image uploading PDF generation Same than 1st quarter (finished) |
| **Unit 7** | API RESTLogin + register serviceAll instruments service (logged user)Intrument by ID (logged user) |
| **Unit 8 (Optional)** | Third Party Login (Google / Facebook / Github...)Other integrations (Dropbox, Drive, Paypal, etc) |

---

## 9.4 Database Diagram

Project – DB diagram and script

Project - Database diagram and script

Diagram

Project – DB diagram and script

Script

phpMyAdmin SQL Dump -- version 5.2.0 -- https://www.phpmyadmin.net/ -- -- Servidor: localhost -- Tiempo de generación: 13-10-2023 a las 19:10:26 -- Versión del servidor: 10.4.24-MariaDB -- Versión de PHP: 8.1.6

```php
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
```

START TRANSACTION;

```php
SET time_zone = "+00:00";
```

```php
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
```

/*!40101 SET NAMES utf8mb4 */;

Base de datos: `bandaw`

Estructura de tabla para la tabla `bands`

```php
CREATE TABLE `bands` (
```

`id` int(11) NOT NULL, `username` varchar(20) NOT NULL, `password` varchar(100) NOT NULL, `name` varchar(50) NOT NULL, `mail` varchar(30) NOT NULL, `logo` varchar(50) DEFAULT NULL

```php
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Volcado de datos para la tabla `bands`

```php
INSERT INTO `bands` (`id`, `username`, `password`, `name`, `mail`, `logo`)
```

VALUES (1, 'perello', 'perellopass', 'Agrupació Musical El Perelló', 'agruppere@banda.com', '/uploads/bands/perello.png'), (2, 'algemesi', 'algemesipass', 'Societat Musical d\'Algemesí',

```php
'socmusalg@band.com', '/uploads/bands/algemesi.png');
```

Project – DB diagram and script

Estructura de tabla para la tabla `instruments`

```php
CREATE TABLE `instruments` (
```

`id` int(11) NOT NULL, `family` varchar(50) NOT NULL, `type` varchar(50) NOT NULL, `brand` varchar(30) NOT NULL, `model` varchar(30) NOT NULL, `serial_number` varchar(50) DEFAULT NULL, `acquisition_date` date DEFAULT NULL, `state` varchar(50) NOT NULL, `comment` text DEFAULT NULL, `image` varchar(50) DEFAULT NULL, `band_id` int(11) NOT NULL

```php
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Volcado de datos para la tabla `instruments`

```php
INSERT INTO `instruments` (`id`, `family`, `type`, `brand`, `model`,
```

`serial_number`, `acquisition_date`, `state`, `comment`, `image`, `band_id`) VALUES (1, 'Brass', 'Trombone', 'Yamaha', 'YSL 354', '10941248912', '-30', 'lent', 'Does not have the case.', '/uploads/instruments/10941248912.png', 1), (2, 'Brass', 'Trumpet', 'Yamaha', 'TML-322', '812u451239u', '-22', 'available', NULL, '/uploads/instruments/812u451239u.png', 1), (3, 'Wood', 'Saxophone', 'Serlmer', 'Axos ', 'se190123', '-15', 'available', 'Lend only to adults', '/uploads/instruments/se190123.png', 1), (4, 'Brass', 'Trombone', 'King', '2102', 'ki210212412', '-01', 'lent', 'Perfect for advanced studies', '/uploads/instruments/ki210212412.png', 1), (5, 'Wood', 'Clarinet', 'Startone', 'SCL 65', 'st129i41', '-13',

```php
'available', 'Perfect for beginners', '/uploads/instruments/st129i41.png', 2);
```

Estructura de tabla para la tabla `loans`

```php
CREATE TABLE `loans` (
```

`id` int(11) NOT NULL, `start_date` date NOT NULL, `end_date` date DEFAULT NULL, `observations` text DEFAULT NULL, `musician_name` varchar(100) NOT NULL, `instrument_id` int(11) NOT NULL

Project – DB diagram and script

```php
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Volcado de datos para la tabla `loans`

```php
INSERT INTO `loans` (`id`, `start_date`, `end_date`, `observations`,
```

`musician_name`, `instrument_id`) VALUES (1, '-27', '-12', 'Lent until the end of the course', 'Carlos Castelló', 3), (2, '-29', NULL, NULL, 'Vicent Villegas', 1), (3, '-03', NULL, 'Only for 23-24 course', 'Carla Marín', 4), (12, '-02', '-29', 'Until the end of the course', 'Vicen

```php
Martínez', 5);
```

Estructura de tabla para la tabla `revisions`

```php
CREATE TABLE `revisions` (
```

`id` int(11) NOT NULL, `revision_date` date NOT NULL, `company` varchar(50) NOT NULL, `observations` text NOT NULL, `price` float NOT NULL, `receipt` varchar(50) NOT NULL, `instrument_id` int(11) NOT NULL

```php
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Volcado de datos para la tabla `revisions`

```php
INSERT INTO `revisions` (`id`, `revision_date`, `company`, `observations`,
```

`price`, `receipt`, `instrument_id`) VALUES (1, '-08', 'Brass Repair', 'Repair hit on the chine', 60, '/uploads/docs/rev_1.pdf', 2), (2, '-21', 'Repair Music Store', 'Tuning and minor fixes', 45.76, '/uploads/docs/rev_2.pdf', 3), (3, '-03', 'Sanganxa', 'Fine tunning', 30, '/uploads/docs/rev_3.pdf',

```php
5);
```

Índices para tablas volcadas

Indices de la tabla `bands`

Project – DB diagram and script

```php
ALTER TABLE `bands`
  ADD PRIMARY KEY (`id`);
```

Indices de la tabla `instruments`

```php
ALTER TABLE `instruments`
```

ADD PRIMARY KEY (`id`),

```php
ADD KEY `fk_band_id` (`band_id`) USING BTREE;
```

Indices de la tabla `loans`

```php
ALTER TABLE `loans`
```

ADD PRIMARY KEY (`id`),

```php
ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;
```

Indices de la tabla `revisions`

```php
ALTER TABLE `revisions`
```

ADD PRIMARY KEY (`id`),

```php
ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;
```

AUTO_INCREMENT de las tablas volcadas

AUTO_INCREMENT de la tabla `bands`

```php
ALTER TABLE `bands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
```

AUTO_INCREMENT de la tabla `instruments`

```php
ALTER TABLE `instruments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
```

AUTO_INCREMENT de la tabla `loans`

```php
ALTER TABLE `loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
```

AUTO_INCREMENT de la tabla `revisions`

```php
ALTER TABLE `revisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
```

Project – DB diagram and script

Restricciones para tablas volcadas

Filtros para la tabla `instruments`

```php
ALTER TABLE `instruments`
```

ADD CONSTRAINT `instruments_ibfk_1` FOREIGN KEY (`band_id`) REFERENCES

```php
`bands` (`id`) ON UPDATE CASCADE;
```

Filtros para la tabla `loans`

```php
ALTER TABLE `loans`
```

ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES

```php
`instruments` (`id`) ON UPDATE CASCADE;
```

Filtros para la tabla `revisions`

```php
ALTER TABLE `revisions`
```

ADD CONSTRAINT `revisions_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES

```php
`instruments` (`id`) ON UPDATE CASCADE;
```

COMMIT;

```php
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

---

## 9.5 Database evaluation

Project – DB correction

Project Database - Evaluation

Objectives

- Self-evaluation.

Instructions

- Read the criteria, apply it to the exercise and justify your answer.

### 1. Using the teacher’s solution, the rubric and your criteria, set the mark for the

database design between 0 to 10. Add a detailed explanation of your decision on the back of the solution.

Nice Work!!! Not Bad... Awful

### 1. Number of

tables

The number of tables is the same or, if more, are well designed and the functionality is not being affected. Requirements are fulfilled but there are tables that have no sense or are not necessary. With the tables designed, the requirements cannot be fulfilled.

### 2. Relationships

and foreign keys

Relationships and foreign keys are well designed. More foreign keys and/or relationships than necessary but requirements fulfilled. Requirements not fulfilled with the current relationships.

### 3. Table details

(fields)

At least, same attributes than the solutions. Almost all the attributes. Lack of lot attributes.

### 4. Requirements

With the solution provided, the requirements of the project are fulfilled. With the solution provided, the requirements of the project are almost fulfilled. With the solution provided, the requirements of the project <75% fulfilled.

---

## 9.6 bandaw.sql 1st quarter

```sql
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-10-2023 a las 19:10:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bandaw`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bands`
--

CREATE TABLE `bands` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `logo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bands`
--

INSERT INTO `bands` (`id`, `username`, `password`, `name`, `mail`, `logo`) VALUES
(1, 'perello', 'perellopass', 'Agrupació Musical El Perelló', 'agruppere@banda.com', '/uploads/bands/perello.png'),
(2, 'algemesi', 'algemesipass', 'Societat Musical d\'Algemesí', 'socmusalg@band.com', '/uploads/bands/algemesi.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instruments`
--

CREATE TABLE `instruments` (
  `id` int(11) NOT NULL,
  `family` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `serial_number` varchar(50) DEFAULT NULL,
  `acquisition_date` date DEFAULT NULL,
  `state` varchar(50) NOT NULL,
  `comment` text DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `band_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `instruments`
--

INSERT INTO `instruments` (`id`, `family`, `type`, `brand`, `model`, `serial_number`, `acquisition_date`, `state`, `comment`, `image`, `band_id`) VALUES
(1, 'Brass', 'Trombone', 'Yamaha', 'YSL 354', '10941248912', '2019-07-30', 'lent', 'Does not have the case.', '/uploads/instruments/10941248912.png', 1),
(2, 'Brass', 'Trumpet', 'Yamaha', 'TML-322', '812u451239u', '2018-02-22', 'available', NULL, '/uploads/instruments/812u451239u.png', 1),
(3, 'Wood', 'Saxophone', 'Serlmer', 'Axos ', 'se190123', '2022-12-15', 'available', 'Lend only to adults', '/uploads/instruments/se190123.png', 1),
(4, 'Brass', 'Trombone', 'King', '2102', 'ki210212412', '2018-08-01', 'lent', 'Perfect for advanced studies', '/uploads/instruments/ki210212412.png', 1),
(5, 'Wood', 'Clarinet', 'Startone', 'SCL 65', 'st129i41', '2022-03-13', 'available', 'Perfect for beginners', '/uploads/instruments/st129i41.png', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loans`
--

CREATE TABLE `loans` (
  `id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `musician_name` varchar(100) NOT NULL,
  `instrument_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `loans`
--

INSERT INTO `loans` (`id`, `start_date`, `end_date`, `observations`, `musician_name`, `instrument_id`) VALUES
(1, '2022-12-27', '2023-06-12', 'Lent until the end of the course', 'Carlos Castelló', 3),
(2, '2022-11-29', NULL, NULL, 'Vicent Villegas', 1),
(3, '2023-09-03', NULL, 'Only for 23-24 course', 'Carla Marín', 4),
(12, '2023-04-02', '2023-06-29', 'Until the end of the course', 'Vicen Martínez', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `revisions`
--

CREATE TABLE `revisions` (
  `id` int(11) NOT NULL,
  `revision_date` date NOT NULL,
  `company` varchar(50) NOT NULL,
  `observations` text NOT NULL,
  `price` float NOT NULL,
  `receipt` varchar(50) NOT NULL,
  `instrument_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `revisions`
--

INSERT INTO `revisions` (`id`, `revision_date`, `company`, `observations`, `price`, `receipt`, `instrument_id`) VALUES
(1, '2023-10-08', 'Brass Repair', 'Repair hit on the chine', 60, '/uploads/docs/rev_1.pdf', 2),
(2, '2023-02-21', 'Repair Music Store', 'Tuning and minor fixes', 45.76, '/uploads/docs/rev_2.pdf', 3),
(3, '2023-10-03', 'Sanganxa', 'Fine tunning', 30, '/uploads/docs/rev_3.pdf', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bands`
--
ALTER TABLE `bands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `instruments`
--
ALTER TABLE `instruments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_band_id` (`band_id`) USING BTREE;

--
-- Indices de la tabla `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;

--
-- Indices de la tabla `revisions`
--
ALTER TABLE `revisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bands`
--
ALTER TABLE `bands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `instruments`
--
ALTER TABLE `instruments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `loans`
--
ALTER TABLE `loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `revisions`
--
ALTER TABLE `revisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `instruments`
--
ALTER TABLE `instruments`
  ADD CONSTRAINT `instruments_ibfk_1` FOREIGN KEY (`band_id`) REFERENCES `bands` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `loans`
--
ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `revisions`
--
ALTER TABLE `revisions`
  ADD CONSTRAINT `revisions_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

---

## 9.7 bandaw.sql 2nd quarter

```sql
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-01-2024 a las 08:22:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bandaw`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instruments`
--

CREATE TABLE `instruments` (
  `id` int(11) NOT NULL,
  `family` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `serial_number` varchar(50) DEFAULT NULL,
  `acquisition_date` date DEFAULT NULL,
  `state` varchar(50) NOT NULL,
  `comment` text DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `band_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `instruments`
--

INSERT INTO `instruments` (`id`, `family`, `type`, `brand`, `model`, `serial_number`, `acquisition_date`, `state`, `comment`, `image`, `band_id`) VALUES
(1, 'Brass', 'Trombone', 'Yamaha', 'YSL 354', '10941248912', '2019-07-30', 'lent', 'Does not have the case.', '/uploads/instruments/10941248912.png', 1),
(2, 'Brass', 'Trumpet', 'Yamaha', 'TML-322', '812u451239u', '2018-02-22', 'available', NULL, '/uploads/instruments/812u451239u.png', 1),
(3, 'Wood', 'Saxophone', 'Serlmer', 'Axos ', 'se190123', '2022-12-15', 'available', 'Lend only to adults', '/uploads/instruments/se190123.png', 1),
(4, 'Brass', 'Trombone', 'King', '2102', 'ki210212412', '2018-08-01', 'lent', 'Perfect for advanced studies', '/uploads/instruments/ki210212412.png', 1),
(5, 'Wood', 'Clarinet', 'Startone', 'SCL 65', 'st129i41', '2022-03-13', 'available', 'Perfect for beginners', '/uploads/instruments/st129i41.png', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loans`
--

CREATE TABLE `loans` (
  `id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `musician_name` varchar(100) NOT NULL,
  `instrument_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `loans`
--

INSERT INTO `loans` (`id`, `start_date`, `end_date`, `observations`, `musician_name`, `instrument_id`) VALUES
(1, '2022-12-27', '2023-06-12', 'Lent until the end of the course', 'Carlos Castelló', 3),
(2, '2022-11-29', NULL, NULL, 'Vicent Villegas', 1),
(3, '2023-09-03', NULL, 'Only for 23-24 course', 'Carla Marín', 4),
(12, '2023-04-02', '2023-06-29', 'Until the end of the course', 'Vicen Martínez', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `revisions`
--

CREATE TABLE `revisions` (
  `id` int(11) NOT NULL,
  `revision_date` date NOT NULL,
  `company` varchar(50) NOT NULL,
  `observations` text NOT NULL,
  `price` float NOT NULL,
  `receipt` varchar(50) NOT NULL,
  `instrument_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `revisions`
--

INSERT INTO `revisions` (`id`, `revision_date`, `company`, `observations`, `price`, `receipt`, `instrument_id`) VALUES
(1, '2023-10-08', 'Brass Repair', 'Repair hit on the chine', 60, '/uploads/docs/rev_1.pdf', 2),
(2, '2023-02-21', 'Repair Music Store', 'Tuning and minor fixes', 45.76, '/uploads/docs/rev_2.pdf', 3),
(3, '2023-10-03', 'Sanganxa', 'Fine tunning', 30, '/uploads/docs/rev_3.pdf', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bandname` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `bandname`, `email`, `email_verified_at`, `password`, `logo`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'perello', 'Agrupació Musical El Perelló', 'agruppere@banda.com', NULL, '$2y$12$ExUgHpaBUlHHijpTl5ywWelLs83FsJarCRW8MS.tcePjcvGFbuk7a', 'uploads/bands/perello.png', NULL, '2024-01-11 18:04:30', '2024-01-11 18:04:30'),
(2, 'algemesi', 'Societat Musical d\'Algemesí', 'socmusalg@band.com', NULL, '$2y$12$yqeRHUFevrj7REyRCGCKIeDh5QODmHNHxRMws4wB/lwi5u5lL4jRm', 'uploads/bands/algemesi.png', NULL, '2024-01-11 18:05:16', '2024-01-11 18:05:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `instruments`
--
ALTER TABLE `instruments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_band_id` (`band_id`);

--
-- Indices de la tabla `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `revisions`
--
ALTER TABLE `revisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_instrument_id` (`instrument_id`) USING BTREE;

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `instruments`
--
ALTER TABLE `instruments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `loans`
--
ALTER TABLE `loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `revisions`
--
ALTER TABLE `revisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `loans`
--
ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `revisions`
--
ALTER TABLE `revisions`
  ADD CONSTRAINT `revisions_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

---

## ✍️ Activitats pràctiques UT9

> **✍️ Activitat Pràctica 9.1 — Database modeling**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 9.2 — Project 1st quarter**
> Remember to upload Web Project to GitHub.
>
> You can also upload your .sql export if you want your data to be used.
>
> ANNUAL PROJECT. 1st quarter specs
>
> Annual project – 1st quarter specs
>
> Instrument management in bands
>
> Instructions
>
> - In this document you will find both the presentation of the problem and
>
> the context as well as the specifications requested.
>
> - Read the statement of the activity carefully and complete it on your
>
> computer. You can use all the tools you need. In each unit you will have some sessions to work on what you have learned in it.
>
> - At the end, you must submit the upload the project to GitHub.
> - At the end of this document, you will find the evaluation rubric.
>
> - Based on the main requirements and the problems stated, the first approach
>
> of the web application must cover the following sections
>
> ### 1. Home Page – Unidentified User – Full Functionality
>
> ### 2. Main page - Identified user - Full functionality except
>
> ### 5. Redirect button to instrument detail (button without
>
> functionality)
>
> ### 6. PDF generation (optional)
>
> - Google Ads.
>
> ### 3. New tool page - Identified user - Full functionality
>
> - Remember that you must start from the DB provided and its structure
>
> CANNOT be modified under any circumstances. Failure to comply with this part will imply the failure of the project.
>
> - For each section, it is necessary to take into account which are the fields that
>
> are in the database and use them.
>
> - To keep track of the user, it is necessary to use sessions.
>
> - Remember to use clean code.
>
> ANNUAL PROJECT. 1st quarter specs Rubric 1st quarter
>
> Very good 9 to 10 Well 6 to 9 Regular 4 to 6 Bad 0 to 4
>
> User identification
>
> 15%
>
> It works correctly with all requirements. It works correctly but some requirements are not met correctly. It works correctly but does not report bugs well and/or requirements remain to be met The identification does not work correctly or has many errors.
>
> User registration
>
> 20%
>
> It works correctly with all requirements. Some of the validations are not correct or any of the requirements are not met. There is a lack of requirements to meet. The validations are not correct. The registration is not done correctly or contains many errors.
>
> Main page. Instruments and search
>
> 35%
>
> Full functionality with. Items are displayed dynamically. The search engine works well. Items are displayed dynamically. The search engine has a problem. Items are displayed dynamically but the search engine fails regularly Items are not displayed or displayed non dynamically. Search engine not implemented or non- functional.
>
> New instrument page
>
> 20%
>
> It works correctly with all requirements. When he returns to the main one, the new one appears. Some of the validations are not correct or any of the requirements are not met. There is a lack of requirements to meet. The validations are not correct. The registration is not done correctly or contains many errors.
>
> General operation and appearance
>
> 5% In general, the page behaves as expected and the user experience is good. Some redirect doesn't work well or some inconsistency is found in the forms. The appearance can be improved but good user experience. Redirects don't work properly. The session has problems. Bad appearance. User experience is good.
>
> Redirects are missing. The sessions do not work properly. Bad user experience and bad appearance. Code quality
>
> 5% The code is clean with comments and well modularized. The code is correct, but it could be improved with some things. The code has few comments. There are no indentations. Not very modularized. It's hard to understand the code. There are no comments.

> **✍️ Activitat Pràctica 9.3 — Project 2nd quarter**
> You can also upload your .sql export if you want your data to be used.
>
> ANNUAL PROJECT. 2nd quarter specs
>
> Annual project – 2nd quarter specs
>
> Instrument management in bands
>
> Instructions
>
> - In this document you will find both the presentation of the problem and
>
> the context as well as the specifications requested.
>
> - Read the statement of the activity carefully and complete it on your
>
> computer. You can use all the tools you need. In each unit you will have some sessions to work on what you have learned in it.
>
> - At the end, you must submit the upload the project to GitHub.
> - At the end of this document, you will find the evaluation rubric.
>
> - You have to develop the same functionalities you did on the 1st quarter but
>
> using the Larevel framework.
>
> - Remember to use the new provided DB and its structure CANNOT be
>
> modified under any circumstances. Failure to comply with this part will imply the failure of the project.
>
> - Remember, as in the 1st quarter, to use sessions, validations, clean code, etc.
>
> You can re-check the rubric of the 1st quarter project to check if everything is completed.
>
> - Besides, you have to add the PDF generation funcionallity. Add a button in
>
> the main page for generating it. It will generate a pdf with a list of all the instruments of the band and their details.
>
> - Implement in the same project an API REST with the following functionalities
>
> o Login and Register o Get all instruments (only logged users) o Get instrument by id (only logged users)
>
> - Optional
>
> o Implement one or more third party login-register systems (Google, Facebook, Apple, etc) o Implement any other third party application like Dropbox, Google Drive, One Drive, Paypal, etc.
>
> ANNUAL PROJECT. 2nd quarter specs
>
> Rubric 2nd quarter
>
> - 1st quarter project in Laravel – 60%
> - WS – Login and register – 20%
> - WS – All instruments and instruments by ID – 15%
> - General operation and clean code – 5%
