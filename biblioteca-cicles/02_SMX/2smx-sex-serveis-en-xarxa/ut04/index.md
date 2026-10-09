---
layout: default
title: "UD5 — Servidor Web (HTTP / Virtual Hosting) · Temari Complet"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT4 Completa"
prev_url: "../ut05/ut0501.html"
prev_label: "⬅️ 4.1 UD3 Servidor de Nombres de Dominio SMX"
next_url: "../ut04/ut0402.html"
next_label: "5.1 Introducción virtual hosting ➡️"
---

# 📘 UD5 — Servidor Web (HTTP / Virtual Hosting) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 Introducción virtual hosting**](./ut0402.md)
- [**5.2 Configuración Virtual hosting**](./ut0403.md)

---

# 5.1 Introducción virtual hosting

Introducción virtual hosting

APACHE 2.4 Virtual Hosting

¿Qué es Virtual Hosting? El término Hosting Virtual se refiere a hacer funcionar más de un sitio web (tales como www.pagina1.com y www.pagina2.com) en una sola máquina. Los sitios web virtuales pueden estar: ●"basados en direcciones IP", lo que significa que cada sitio web tiene una dirección IP diferente ●"basados en nombres diferentes", lo que significa que con una sola dirección IP están funcionando sitios web con diferentes nombres (de dominio).

/etc/apache2/sites-available/000-default.conf <VirtualHost *:80> #ServerName www.example.com ServerAdmin webmaster@localhost DocumentRoot /var/www/html ErrorLog ${APACHE_LOG_DIR}/error.log CustomLog ${APACHE_LOG_DIR}/access.log combined </VirtualHost>

---

# 5.2 Configuración Virtual hosting

Configuración Virtual hosting

APACHE 2.4 Configuración de Virtual Hosting

Configuración del virtualhost Cada sitio web tendrá nombres distintos. Cada sitio web compartirán la misma dirección IP y el mismo puerto (80).

Configuración del virtualhost apache1.openwebinars.net (/var/www/apache1) apache1.openwebinars.net (/var/www/apache2)

Creamos ficheros de configuración

```bash
cd /etc/apache2/sites-available
```

cp 000-default.conf apache1.conf cp 000-default.conf apache2.conf Modificamos ficheros de configuración DocumentRoot, ServerName ErrorLog,CustomLog

Activamos la configuración a2ensite apache1 a2ensite apache2 Creamos los DocumentRoot y le damos propietarios adecuados

```bash
# chown -R www-data:www-data /var/www/apache1
# chown -R www-data:www-data /var/www/apache2
```

> **💡 Apunt Tècnic**
> Ejemplo: apache1.conf <VirtualHost *:80> ServerName apache1.openwebinars.net ServerAdmin webmaster@localhost DocumentRoot /var/www/html/apache1 ErrorLog ${APACHE_LOG_DIR}/error_apache1.log CustomLog ${APACHE_LOG_DIR}/access_apache1.log combined </VirtualHost>

---
