---
layout: default
title: "Aplicacions Web — UT01 Arquitectura d'Aplicacions Web i Pila LAMP"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT01"
---

# UT01 — Arquitectura d'Aplicacions Web i la Pila LAMP / WAMP

Les aplicacions web han substituït el programari tradicional d'escriptori en la majoria de processos d'empresa (facturació, ERP, botigues en línia, aules virtuals). Per a allotjar i executar aquestes aplicacions es necessita una infraestructura especialitzada coneguda com a **pila de servidors web**.

---

## 📌 1. L'Arquitectura de 3 Capes (*Three-Tier Architecture*)

Una aplicació web moderna s'estructura en tres capes lògiques i independents que cooperen entre si:

```mermaid
graph TD
    subgraph "1️⃣ CAPA DE PRESENTACIÓ (Client / Front-End)"
        C["🌐 Navegador Web (Chrome / Firefox)<br/>Renderitza HTML5, fulls d'estil CSS3 i scripts JavaScript"]
    end

    subgraph "2️⃣ CAPA DE LÒGICA D'APLICACIÓ (Servidor / Back-End)"
        W["🖥️ Servidor Web (Apache2 / Nginx)"] <--> P["⚙️ Motor d'Execució (PHP 8.3 / Python)"]
    end

    subgraph "3️⃣ CAPA DE DADES (Persistència)"
        DB[("🗄️ Sistema Gestor de Bases de Dades<br/>(MySQL / MariaDB)")]
    end

    C -->|Peticions HTTP/HTTPS (Port 80/443)| W
    P -->|Consultes SQL (Port TCP 3306)| DB
    DB -->|Joc de Resultats SQL| P
    P -->|Codi HTML generat dinàmicament| W
    W -->|Resposta HTTP 200 OK| C
```

---

## 📌 2. Piles de Programari: LAMP vs WAMP/XAMPP

Perquè una aplicació web funcione, cal que el sistema operatiu, el servidor web, el motor de base de dades i l'intèrpret de llenguatge estiguen perfectament integrats:

| Pila | Sistema Operatiu | Servidor Web | Base de Dades | Llenguatge | Àmbit d'Ús Recomanat |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **LAMP** | **L**inux (Ubuntu/Debian) | **A**pache | **M**ariaDB / MySQL | **P**HP | **Estàndard corporatiu en producció i servidors cloud**. |
| **WAMP** | **W**indows | **A**pache | **M**ySQL | **P**HP | Desenvolupament local en estacions de treball Windows. |
| **XAMPP** | Multiplataforma (**X**) | **A**pache | **M**ariaDB | **P**HP + **P**erl | Entorn portàtil ideal per a estudiants i proves de laboratori. |

---

## 📌 3. Desplegament de la Pila LAMP en Ubuntu Server 24.04

```bash
# 1. Actualitzar el repositori i instal·lar Apache2
sudo apt update && sudo apt install apache2 -y

# 2. Instal·lar el gestor de bases de dades MariaDB
sudo apt install mariadb-server mariadb-client -y

# 3. Assegurar la instal·lació de la base de dades (establir contrasenya de root i eliminar BD de prova)
sudo mysql_secure_installation

# 4. Instal·lar el motor PHP 8.3 i els mòduls clau d'integració
sudo apt install php libapache2-mod-php php-mysql php-curl php-gd php-mbstring php-xml php-zip php-intl -y
```

---

## 📌 4. Configuració del Motor PHP (`php.ini`)

El fitxer `/etc/php/8.3/apache2/php.ini` controla els recursos del sistema i els límits de seguretat aplicats als scripts PHP. Cal editar-lo amb privilegis de superusuari:

```ini
; /etc/php/8.3/apache2/php.ini

; Límit màxim de memòria RAM per a un sol script
memory_limit = 256M

; Mida màxima permesa per a un fitxer pujat a través de formulari
upload_max_filesize = 64M

; Mida màxima permesa per a tota la petició POST (ha de ser >= upload_max_filesize)
post_max_size = 64M

; Temps màxim d'execució d'un script abans que el servidor el mate (en segons)
max_execution_time = 300

; En entorns de producció MAI s'han de mostrar errors a la pantalla de l'usuari!
display_errors = Off
log_errors = On
```

```bash
# Reiniciar Apache per a aplicar els canvis de php.ini
sudo systemctl restart apache2
```

---

## 📌 5. Verificació del Funcionament i phpMyAdmin

Per a comprovar que Apache processa correctament els fitxers `.php` en cooperació amb MariaDB, es crea un script de verificació:

```bash
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
```

Accedint des del navegador a `http://IP_SERVIDOR/info.php` es mostra la taula completa amb la versió de PHP, extensions actives i paràmetres de memòria.

> [!WARNING]
> Un cop comprovada la instal·lació, **cal esborrar el fitxer `info.php` immediatament** (`sudo rm /var/www/html/info.php`). Si es deixa accessible, qualsevol atacant pot conèixer la versió exacta del programari i vulnerabilitats potencials del servidor.

### Administració Gràfica amb phpMyAdmin:
L'eina phpMyAdmin ofereix una interfície web amigable per a crear bases de dades, usuaris, taules i fer exportacions en fitxers `.sql` sense necessitat d'utilitzar comandes de consola:
```bash
sudo apt install phpmyadmin -y
```
Durant l'assistent es tria el servidor web `apache2` i es permet configurar automàticament la base de dades del servei mitjançant `dbconfig-common`.
