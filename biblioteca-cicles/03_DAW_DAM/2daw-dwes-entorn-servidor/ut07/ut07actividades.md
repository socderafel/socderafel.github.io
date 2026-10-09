---
layout: default
title: "✍️ Activitats pràctiques UT7 — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT7 — Unit 7 - Web Services"
prev_url: "../ut07/ut0702.html"
prev_label: "⬅️ 7.2 U7 Class exercises"
next_url: "../ut08/index.html"
next_label: "📘 UT8 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT7

> **✍️ Activitat Pràctica 7.1 — Task 1 - SOAP Web Service with WSDL**
> DWES – U7A1
>
> Unit 7 – Task 1 SOAP Web Service with WSDL
>
> Objectives
>
> - Investigate the structure of the WSDL file
> - Know how to implement WSDL into PHP project
> - Know how to use third party libraries to generate the WSDL
> - Know how the webservice responds to errors.
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> the project.
>
> For this exercise you are going to create a very simple webservice that allow you to sum and subtract two numbers. The functions will be
>
> ```php
> • addNumbers(num1, num2);
> • subtractNumbers(num1, num2);
> ```
>
> When you subtract numbers, num1 has to be greater than num2. If not, an error message has to be returned.
>
> Once the functions are defined, it’s time to generate a WSDL associated to that service.
>
> WSDL file describes a SOAP webservice. This means that includes all the functions that are included in it and the parameters. This will help clients to communicate with it. WSDL file is intended to be read by a machine and not by the user so creating it by us is quite tricky and is not usually done by humans.
>
> Best option is to let third party applications to deal with it.
>
> Investigate tools to generate the WSDL file from the class with the functions and once you have your WSDL file host in your server, test it from the client.
>
> Upload also a pdf file with a mini tutorial explaining the third party tool used and the steps taken to generate the WSDL file.

> **✍️ Activitat Pràctica 7.2 — Task 2 - REST as a client - POSTMAN**
> DWES – U7A2
>
> Unit 7 – Task 2 REST as a client - Postman
>
> Objectives
>
> - Know how to use Postman tool with REST services
> - Search public APIS on the Internet
> - Know how to query a public REST service
> - Know how to use an APIKey in a public REST service
> - Investigate how OAuth works.
> - Know how to use an OAuth in a public REST service
>
> Instructions
>
> - You can check the rubric at the end of the exercise.
> - Once finished, upload to Aules a PDF file with exercise completed.
>
> Introduction We already know what is a webservice and the existing types. As we’ve studied, REST services are most popular nowadays and you can find many of them which are public and accessible to everybody from everywhere. You can find different topics in the webservices, from sports to movies or music.
>
> Some of the most popular webpages to find public REST APIs are: • https://github.com/public-apis/public-apis • https://publicapis.dev/ • https://free-apis.github.io/#/ • https://publicapis.io/ • https://rapidapi.com/hub
>
> Feel free to investigate other webpages for yourself.
>
> API REST with no credentials (15%) Pick one API where no credentials are needed (no APIKEY, no OAuth) and after reading the documentation, try it from the Postman service. Add a screenshot of the API response.
>
> API REST with APIKEY (35%) Pick one API where an APIKEY is needed and after reading the documentation, try it from the Postman service. Add a little tutorial of how the APIKEY was obtained and screenshot of the API response.
>
> API REST with OAuth (50%) Investigate what an OAuth is. Then pick one API where an OAuth is needed and after reading the documentation, try it from the Postman service. Add a little tutorial explaining how OAuth works and what you’ve done to get it working.
>
> DWES – U7A2
>
> Rubric
>
> Very good 9 to 10 Well 6 to 9 Regular 4 to 6 Bad 0 to 4
>
> API REST with no credentials
>
> 15%
>
> Full functionality. Call and response of the webservice OK. Call is well done but the response of the webservice is not fully OK. Call is not fully well formed and the response of the webservice is not OK. Both call and response are wrong. No data is displayed.
>
> API REST with APIKEY 35%
>
> Full functionality. Tutorial is detailed, with screenshots and well explained. Full functionality. Tutorial is not detailed or with no examples or screenshots. APIKEY is well obtained but
>
> ```php
> service does not
> ```
>
> work well. Tutorial is not detailed or with no examples or screenshots. APIKEY does not obtained or
>
> ```php
> service call and
> ```
>
> response wrong. No data is displayed. No tutorial.
>
> API REST with OAuth 35%
>
> Full functionality. Tutorial is detailed, with screenshots and well explained. Full functionality. Tutorial is not detailed or with no examples or screenshots. OAuth has some problems but
>
> ```php
> service works
> ```
>
> well. OAuth is not working but the service responses well. Tutorial is not detailed or with no examples or screenshots. OAuth is not working and both call and service responses are wrong. No data is displayed. No tutorial

> **✍️ Activitat Pràctica 7.3 — Task 3 - Rest as server with Laravel + Auth**
> ### 📄 U7_A3.pdf
>
> DWES – U7A3
>
> Unit 7 – Task 3 API REST with Laravel
>
> Objectives
>
> - Know how to create a complete REST API
> - Understand Laravel Auth through WS
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> the project.
>
> ### 1. Using the given database (nba.sql), create a webservice with all the
>
> studied functions (get all, get specific, create, update, delete).
>
> These methods will return a status code and the result. (5 pts)
>
> ### 2. Investigate how authorizations work in Laravel and let only logged users
>
> access to create, update and delete registers. (5 pts) TIP: https://laravel.com/docs/10.x/sanctum
>
> ### 📄 nba.sql
>
> ```sql
> -- phpMyAdmin SQL Dump
> -- version 5.2.0
> -- https://www.phpmyadmin.net/
> --
> -- Servidor: localhost
> -- Tiempo de generación: 01-02-2024 a las 12:41:17
> -- Versión del servidor: 10.4.24-MariaDB
> -- Versión de PHP: 8.1.6
>
> SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
> START TRANSACTION;
> SET time_zone = "+00:00";
>
> /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
> /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
> /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
> /*!40101 SET NAMES utf8mb4 */;
>
> --
> -- Base de datos: `nba`
> --
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `failed_jobs`
> --
>
> CREATE TABLE `failed_jobs` (
>   `id` bigint(20) UNSIGNED NOT NULL,
>   `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
>   `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
>   `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
>   `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
>   `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `jugadores`
> --
>
> CREATE TABLE `jugadores` (
>   `codigo` int(255) NOT NULL,
>   `procedencia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `Altura` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `Peso` int(11) DEFAULT NULL,
>   `Posicion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `Nombre_equipo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `created_at` timestamp NULL DEFAULT NULL,
>   `updated_at` timestamp NULL DEFAULT NULL
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `migrations`
> --
>
> CREATE TABLE `migrations` (
>   `id` int(10) UNSIGNED NOT NULL,
>   `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `batch` int(11) NOT NULL
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> --
> -- Volcado de datos para la tabla `migrations`
> --
>
> INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
> (1, '2014_10_12_000000_create_users_table', 1),
> (2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
> (3, '2019_08_19_000000_create_failed_jobs_table', 1),
> (4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
> (5, '2023_12_12_184633_add_username_to_users_table', 1),
> (6, '2023_12_12_190237_create_jugadors_table', 1);
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `password_reset_tokens`
> --
>
> CREATE TABLE `password_reset_tokens` (
>   `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `created_at` timestamp NULL DEFAULT NULL
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `personal_access_tokens`
> --
>
> CREATE TABLE `personal_access_tokens` (
>   `id` bigint(20) UNSIGNED NOT NULL,
>   `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `tokenable_id` bigint(20) UNSIGNED NOT NULL,
>   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `last_used_at` timestamp NULL DEFAULT NULL,
>   `expires_at` timestamp NULL DEFAULT NULL,
>   `created_at` timestamp NULL DEFAULT NULL,
>   `updated_at` timestamp NULL DEFAULT NULL
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> -- --------------------------------------------------------
>
> --
> -- Estructura de tabla para la tabla `users`
> --
>
> CREATE TABLE `users` (
>   `id` bigint(20) UNSIGNED NOT NULL,
>   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `email_verified_at` timestamp NULL DEFAULT NULL,
>   `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
>   `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
>   `created_at` timestamp NULL DEFAULT NULL,
>   `updated_at` timestamp NULL DEFAULT NULL,
>   `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
>
> --
> -- Índices para tablas volcadas
> --
>
> --
> -- Indices de la tabla `failed_jobs`
> --
> ALTER TABLE `failed_jobs`
>   ADD PRIMARY KEY (`id`),
>   ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);
>
> --
> -- Indices de la tabla `jugadores`
> --
> ALTER TABLE `jugadores`
>   ADD PRIMARY KEY (`codigo`);
>
> --
> -- Indices de la tabla `migrations`
> --
> ALTER TABLE `migrations`
>   ADD PRIMARY KEY (`id`);
>
> --
> -- Indices de la tabla `password_reset_tokens`
> --
> ALTER TABLE `password_reset_tokens`
>   ADD PRIMARY KEY (`email`);
>
> --
> -- Indices de la tabla `personal_access_tokens`
> --
> ALTER TABLE `personal_access_tokens`
>   ADD PRIMARY KEY (`id`),
>   ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
>   ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);
>
> --
> -- Indices de la tabla `users`
> --
> ALTER TABLE `users`
>   ADD PRIMARY KEY (`id`),
>   ADD UNIQUE KEY `users_email_unique` (`email`);
>
> --
> -- AUTO_INCREMENT de las tablas volcadas
> --
>
> --
> -- AUTO_INCREMENT de la tabla `failed_jobs`
> --
> ALTER TABLE `failed_jobs`
>   MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
>
> --
> -- AUTO_INCREMENT de la tabla `jugadores`
> --
> ALTER TABLE `jugadores`
>   MODIFY `codigo` int(255) NOT NULL AUTO_INCREMENT;
>
> --
> -- AUTO_INCREMENT de la tabla `migrations`
> --
> ALTER TABLE `migrations`
>   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
>
> --
> -- AUTO_INCREMENT de la tabla `personal_access_tokens`
> --
> ALTER TABLE `personal_access_tokens`
>   MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
>
> --
> -- AUTO_INCREMENT de la tabla `users`
> --
> ALTER TABLE `users`
>   MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
> COMMIT;
>
> /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
> /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
> /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
> ```
