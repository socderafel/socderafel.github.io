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

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de 3 Capes en la Pila LAMP</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Separació de responsabilitats: Front-End (Client), Back-End (Apache+PHP) i Persistència (MariaDB)</p>
  </div>
  <svg viewBox="0 0 860 270" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="c1GradAwe" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="c2GradAwe" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="c3GradAwe" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Capa 1: Front-End -->
    <rect x="20" y="25" width="240" height="190" rx="8" fill="url(#c1GradAwe)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="140" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1️⃣ CAPA PRESENTACIÓ</text>
    <text x="140" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Navegador Web (Front-End)</text>
    <line x1="35" y1="85" x2="245" y2="85" stroke="#334155"/>
    <text x="35" y="110" fill="#cbd5e1" font-size="10.5">• HTML5 Estructura visual</text>
    <text x="35" y="132" fill="#cbd5e1" font-size="10.5">• CSS3 Disseny i maquetació</text>
    <text x="35" y="154" fill="#cbd5e1" font-size="10.5">• JavaScript Interactiu / DOM</text>
    <text x="140" y="195" fill="#38bdf8" font-size="10" text-anchor="middle" font-weight="bold">Executat a la CPU de l'usuari</text>

    <!-- Fletxa 1-2 -->
    <path d="M 265 110 L 295 110" stroke="#38bdf8" stroke-width="2"/>
    <text x="280" y="100" fill="#38bdf8" font-size="8" text-anchor="middle">HTTP/S</text>
    <path d="M 295 130 L 265 130" stroke="#34d399" stroke-width="2"/>
    <text x="280" y="145" fill="#34d399" font-size="8" text-anchor="middle">HTML</text>

    <!-- Capa 2: Lògica -->
    <rect x="300" y="25" width="260" height="190" rx="8" fill="url(#c2GradAwe)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="430" y="52" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2️⃣ CAPA LÒGICA D'APLICACIÓ</text>
    <text x="430" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Servidor d'Aplicacions (Back-End)</text>
    <line x1="315" y1="85" x2="545" y2="85" stroke="#334155"/>
    <text x="315" y="110" fill="#cbd5e1" font-size="10.5">• <tspan fill="#38bdf8" font-weight="bold">Apache2 / Nginx:</tspan> Reconeix HTTP</text>
    <text x="315" y="132" fill="#cbd5e1" font-size="10.5">• <tspan fill="#c084fc" font-weight="bold">PHP 8.3 / FPM:</tspan> Processa lògica</text>
    <text x="315" y="154" fill="#cbd5e1" font-size="10.5">• Gestió de sessions i galetes</text>
    <text x="430" y="195" fill="#c084fc" font-size="10" text-anchor="middle" font-weight="bold">Generació dinàmica de codi</text>

    <!-- Fletxa 2-3 -->
    <path d="M 565 110 L 595 110" stroke="#c084fc" stroke-width="2"/>
    <text x="580" y="100" fill="#c084fc" font-size="8" text-anchor="middle">SQL</text>
    <path d="M 595 130 L 565 130" stroke="#34d399" stroke-width="2"/>
    <text x="580" y="145" fill="#34d399" font-size="8" text-anchor="middle">Dades</text>

    <!-- Capa 3: Persistència -->
    <rect x="600" y="25" width="240" height="190" rx="8" fill="url(#c3GradAwe)" stroke="#34d399" stroke-width="1.5"/>
    <text x="720" y="52" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3️⃣ CAPA DE DADES</text>
    <text x="720" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Persistència SGBD (MariaDB)</text>
    <line x1="615" y1="85" x2="825" y2="85" stroke="#334155"/>
    <text x="615" y="110" fill="#cbd5e1" font-size="10.5">• Port TCP 3306 (Localhost)</text>
    <text x="615" y="132" fill="#cbd5e1" font-size="10.5">• Usuaris, taules, relacions</text>
    <text x="615" y="154" fill="#cbd5e1" font-size="10.5">• Transaccions ACID (InnoDB)</text>
    <text x="720" y="195" fill="#34d399" font-size="10" text-anchor="middle" font-weight="bold">Custòdia segura en disc</text>

    <!-- Franja Inferior -->
    <rect x="20" y="225" width="820" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="247" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Seguretat de la Pila: <tspan fill="#f59e0b" font-weight="bold">La base de dades MariaDB MAI s'ha d'exposar directament a Internet; només accepta connexions locals de PHP!</tspan></text>
  </svg>
</div>

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

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi de Rendiment, Dimensionament i Seguretat Web
1. **Dimensionament de Memòria RAM per a PHP:**
   - Un servidor web té assignada una capacitat de **$4\text{ GB}$ de memòria RAM** per al servei Apache amb PHP 8.3.
   - Si a `php.ini` s'ha configurat la directiva `memory_limit = 256M`:
     - Quants scripts PHP pesats podrien executar-se de forma simultània abans que el servidor esgote la memòria RAM física i comence a utilitzar swap o col·lapse?
     - Si la majoria de pàgines d'un CMS només consumeixen entre $30\text{ MB}$ i $50\text{ MB}$ de RAM per petició, quin valor de `memory_limit` recomanaries per a optimitzar la concurrència?
2. **Seguretat de la Informació en Entorns de Producció:**
   - Quina diferència hi ha entre `display_errors = On` i `display_errors = Off`? Quin risc crític de revelació d'informació interna (com rutes absolutes de fitxers, consultes SQL i credencials) suposa deixar `display_errors = On` en un servidor web públic?
   - On es desen els errors quan `log_errors = On` està habilitat a Ubuntu Server?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Desplegament

#### Repte 1: Creació d'una Base de Dades i Usuari Dedicat a MariaDB
En entorns professionals està totalment prohibit que una aplicació web utilitze l'usuari `root` de la base de dades. Cada aplicació ha de disposar del seu usuari exclusiu amb permisos limitats:
1. Accedeix a la consola de MariaDB com a administrador:
   ```bash
   sudo mysql -u root
   ```
2. Executa les següents sentències SQL per a crear la infraestructura d'un portal corporatiu:
   ```sql
   CREATE DATABASE IF NOT EXISTS bd_portal_smx CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'usuari_portal'@'localhost' IDENTIFIED BY 'ClauWeb2026!';
   GRANT ALL PRIVILEGES ON bd_portal_smx.* TO 'usuari_portal'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   ```
3. Comprova que l'usuari pot connectar-se a la seua base de dades però no té permisos per a veure les bases de dades del sistema:
   ```bash
   mysql -u usuari_portal -pClauWeb2026! bd_portal_smx -e "SHOW TABLES;"
   ```

#### Repte 2: Script de Validació de Connexió PHP-PDO amb Gestió d'Excepcions
1. Crea un script de prova a `/var/www/html/test_db.php`:
   ```php
   <?php
   $host = 'localhost';
   $db   = 'bd_portal_smx';
   $user = 'usuari_portal';
   $pass = 'ClauWeb2026!';

   try {
       $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
           PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
       ]);
       echo "<h2 style='color:green;'>✅ Connexió amb èxit a la base de dades MariaDB mitjançant PDO!</h2>";
       echo "<p>Versió del servidor de BD: " . $pdo->getAttribute(PDO::ATTR_SERVER_VERSION) . "</p>";
   } catch (PDOException $e) {
       echo "<h2 style='color:red;'>❌ Error de connexió a la base de dades.</h2>";
       // En producció no mostrem $e->getMessage() a l'usuari!
       error_log("Error PDO: " . $e->getMessage());
   }
   ?>
   ```
2. Assigna la propietat al servei web: `sudo chown www-data:www-data /var/www/html/test_db.php`.
3. Obre el navegador a `http://IP_SERVIDOR/test_db.php` i verifica que la connexió és satisfactòria.

#### Repte 3: Ajust de Paràmetres de Càrrega de Fitxers a `php.ini`
1. Edita `/etc/php/8.3/apache2/php.ini` i modifica les directives per a permetre pujar documents de fins a $32\text{ MB}$:
   ```ini
   upload_max_filesize = 32M
   post_max_size = 32M
   max_execution_time = 120
   ```
2. Reinicia Apache: `sudo systemctl restart apache2`.
3. Comprova des de la consola que els valors s'han aplicat correctament:
   ```bash
   php -i | grep -E "upload_max_filesize|post_max_size"
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura de 3 capes i LAMP** | Explica detalladament el flux entre client, Apache, PHP i MariaDB, calculant RAM. | Coneix els components de la pila però dubta en el rol del motor PHP front a Apache. | Confon el programari de client amb el de servidor o no entén la capa de dades. |
| **Administració segura de MariaDB** | Crea usuaris específics amb privilegis mínims necessaris i jocs de caràcters UTF-8. | Crea la base de dades però empra l'usuari `root` per a connectar des de PHP. | No sap utilitzar la consola SQL per crear taules o gestionar usuaris. |
| **Configuració de PHP i PDO** | Ajusta `php.ini` amb coherència (`post_max_size >= upload_max`) i empra PDO amb `try-catch`. | Modifica `php.ini` però oblida reiniciar Apache o configura `post_max` menor que `upload_max`. | Errors en el fitxer PHP que provoquen errors 500 sense saber consultar els logs. |
