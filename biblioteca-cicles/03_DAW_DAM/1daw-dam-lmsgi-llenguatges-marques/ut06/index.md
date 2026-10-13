---
layout: default
title: "UD6: Sistemes Empresarials de Gestió d'Informació i Continguts (CMS) — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD6"
---

# UD6: Sistemes Empresarials de Gestió d'Informació i Continguts (CMS)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-arch" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tax" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ext" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm6)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SISTEMES EMPRESARIALS DE GESTIÓ D'INFORMACIÓ I CONTINGUTS (CMS)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura LAMP/LEMP, model relacional de continguts, taxonomies, ecosistema de mòduls i seguretat RBAC</text>

  <!-- Bloc 1: Arquitectura CMS -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arch)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arquitectura CMS</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Pila Tecnològica</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Pila LAMP (Apache/MySQL)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Pila LEMP (Nginx/MariaDB)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• CMS, ERP (Odoo) i CRM</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Arquitectura Headless</text>
  </g>

  <!-- Bloc 2: Gestió & Taxonomies -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-tax)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🗂️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Informació &amp; Dades</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Model de Continguts</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Entrades (posts) i Pàgines</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Categories vs Etiquetes (tags)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Custom Post Types (CPT)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Metadades i camps ACF</text>
  </g>

  <!-- Bloc 3: Temes & Connectors -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ext)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🧩</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Temes &amp; Plugins</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Ecosistema Extensible</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Jerarquia de plantilles</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cicle de vida de plugins</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Sistema de Hooks (Acció/Filtre)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Administració amb WP-CLI</text>
  </g>

  <!-- Bloc 4: Seguretat & Manteniment -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sec)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seguretat &amp; Còpies</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Hardening &amp; Backup</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Rols d'usuari i RBAC</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Còpies de BD (.sql) i fitxers</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Protecció contra atacs brute-force</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Memòria cau &amp; Rendiment</text>
  </g>
</svg>
</div>

Els **Sistemes de Gestió de Continguts (*Content Management Systems - CMS*)** i els sistemes integrats de gestió empresarial (**ERP** i **CRM**) constitueixen la columna vertebral de la presència digital corporativa. En aquesta unitat s'analitza l'arquitectura de servidors web basada en la pila LAMP/LEMP, el model de dades relacional que suporta la informació, la classificació jeràrquica mitjançant taxonomies, l'extensibilitat mitjançant temes i connectors, i les polítiques crítiques de seguretat, control d'accés i còpies de seguretat.

---

## 6.1 Tipologia de sistemes empresarials de gestió

En l'entorn empresarial conviuen diferents plataformes de programari especialitzat:
1. **CMS (*Content Management System*):** Plataforma per a la creació, edició, publicació i manteniment de continguts web (notícies, blogs, portals corporatius, catàlegs). Exemples: **WordPress**, **Drupal**, **Joomla**.
2. **ERP (*Enterprise Resource Planning*):** Sistema de planificació de recursos empresarials que integra comptabilitat, vendes, compres, estoc, recursos humans i facturació en una base de dades unificada. Exemples: **Odoo**, **SAP**, **Openbravo**.
3. **CRM (*Customer Relationship Management*):** Sistema centrat en la gestió del cicle de vida de les relacions amb els clients, suport postvenda i seguiment comercial. Exemples: **HubSpot**, **Salesforce**, **Odoo CRM**.
4. **Headless CMS:** Plataforma desacoblada on el CMS només actua com a gestor de continguts exposats a través d'una API REST o GraphQL, deixant que el front-end es desenvolupe amb tecnologies modernes com React, Vue o Angular. Exemples: **Strapi**, **Contentful**.

---

## 6.2 Arquitectura d'un CMS i la pila tecnològica LAMP / LEMP

Un CMS tradicional segueix una arquitectura client-servidor de tres capes:

```
[ Client Web / Navegador ]
            │ HTTP / HTTPS (Port 80 / 443)
            ▼
[ Servidor Web: Apache o Nginx ]
            │ FastCGI / PHP-FPM
            ▼
[ Motor d'Aplicació: PHP 8.x (WordPress Core / Drupal) ]
            │ TCP 3306 (Connexió PDO / MySQLi)
            ▼
[ Base de Dades Relacional: MySQL 8.0 / MariaDB 10.x ]
```

### El model de dades relacional d'un CMS (Exemple WordPress)
Les dades s'organitzen en un conjunt normalitzat de taules SQL:
- `wp_posts`: Emmagatzema tot el contingut: articles de blog, pàgines estàtiques, elements multimèdia i tipus personalitzats.
- `wp_postmeta`: Model clau-valor per emmagatzemar metadades addicionals de cada publicació (`post_id`, `meta_key`, `meta_value`).
- `wp_users` i `wp_usermeta`: Comptes d'usuari, claus xifrades i perfils de permisos.
- `wp_terms`, `wp_term_taxonomy` i `wp_term_relationships`: Taules normalitzades que gestionen les categories, etiquetes i la seua associació amb els continguts.

---

## 6.3 Gestió de continguts, estructuració i taxonomies

Un dels avantatges dels CMS és la capacitat de separar el contingut de la seua representació visual:

### Tipus de contingut
- **Entrades (*Posts*):** Continguts dinàmics, ordenats cronològicament de més recent a més antic, associats a un autor, data i taxonomies.
- **Pàgines (*Pages*):** Continguts estàtics i atemporals que no pertanyen a un flux cronològic (Ex. "Qui som", "Contacte", "Política de privadesa").
- **Tipus de Publicació Personalitzats (*Custom Post Types - CPT*):** Estructures de dades creades per a cobrir necessitats de negoci concretes (Ex. "Cursos", "Docents", "Productes", "Inmobles").

### Taxonomies: Organització de la informació
- **Categories (Jeràrquiques):** Poden tindre pares i fills (Ex. `Informàtica` $\rightarrow$ `Desenvolupament Web` $\rightarrow$ `Frontend`). Tot article sol requerir almenys una categoria.
- **Etiquetes / Tags (Planes):** No tenen jerarquia ni relacions pare-fill. S'utilitzen com a paraules clau lliures (Ex. `html5`, `flexbox`, `css3`).

---

## 6.4 Ecosistema d'extensibilitat: Temes, connectors i Hooks

Els CMS moderns apliquen el principi de disseny obert/tancat (*Open/Closed Principle*), permetent ampliar les seues funcionalitats sense modificar el codi font del nucli (*Core*).

### Jerarquia de plantilles (*Themes*)
El tema controla la capa de presentació. El motor del CMS selecciona el fitxer de plantilla més específic seguint una jerarquia establida:
- Si l'usuari visita una entrada individual: `single-{post_type}.php` $\rightarrow$ `single.php` $\rightarrow$ `singular.php` $\rightarrow$ `index.php`.
- Si visita un arxiu de categoria: `category-{slug}.php` $\rightarrow$ `category.php` $\rightarrow$ `archive.php` $\rightarrow$ `index.php`.

### Arquitectura basada en esdeveniments (*Hooks*)
Els connectors interactuen amb el nucli mitjançant dos mecanismes:
1. **Accions (*Action Hooks*):** Executen codi personalitzat quan es produeix un esdeveniment específic del cicle de vida.
   ```php
   // Executar codi quan s'inicialitza el sistema
   add_action('init', 'registrar_meu_post_type');
   ```
2. **Filtres (*Filter Hooks*):** Reben una dada, la transformen o modifiquen i la retornen abans que s'imprimeixi o s'emmagatzeme a la base de dades.
   ```php
   // Modificar el títol afegint un prefix corporatiu
   add_filter('the_title', function($titol) {
       return "TecnoWeb | " . $titol;
   });
   ```

---

## 6.5 Seguretat, control d'accés (RBAC) i còpies de seguretat

En ser els sistemes més estesos a la web, els CMS són l'objectiu principal d'atacs informàtics automatitzats.

### Control d'accés basat en rols (*Role-Based Access Control - RBAC*)
| Rol d'Usuari | Capacitats i Privilegis |
| :--- | :--- |
| **Administrador** | Accés complet a configuració, temes, plugins, usuaris i base de dades. |
| **Editor** | Pot crear, editar, publicar i eliminar qualsevol entrada o pàgina (seues o d'altres). |
| **Autor** | Pot crear, editar i publicar exclusivament les seues pròpies entrades. |
| **Col·laborador** | Pot escriure i editar els seus propis articles, però no pot publicar-los directament. |
| **Subscriptor** | Només té accés de lectura i gestió del seu perfil personal. |

### Bones pràctiques d'enduriment (*Hardening*)
- **Actualitzacions regulars:** Mantenir el nucli, temes i connectors en l'última versió estable. El 90% de les infeccions s'originen en extensions obsoletes.
- **Protecció contra atacs de força bruta:** Limitar intents d'inici de sessió fallits i utilitzar autenticació de doble factor (2FA).
- **Prefix de base de dades:** Canviar el prefix per defecte `wp_` per una cadena aleatòria (`cx7a_`).
- **Permisos de fitxers al servidor:** Directoris a `755` i arxius a `644`. El fitxer crític de configuració (`wp-config.php`) a `400` o `440`.

### Estratègia de còpies de seguretat (*Backup & Disaster Recovery*)
Una còpia de seguretat completa d'un CMS ha de capturar dos elements:
1. **La Base de Dades Relacional:** Exportació neta de totes les taules en fitxer SQL (`mysqldump`).
2. **El Sistema de Fitxers:** La carpeta de mitjans, imatges, temes i plugins (`wp-content/`).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Càlcul de dimensionament i creixement d'una base de dades CMS
Un diari digital compta amb les següents dades acumulades a la seua base de dades MariaDB:
- $N_p = 15.000\text{ entrades}$ a `wp_posts`. Cada entrada té un pes mitjà de registre de $4,2\text{ KB}$ (títol, contingut HTML, extracte).
- Cada publicació té una mitjana de $12\text{ metadades}$ associades a `wp_postmeta`. Cada registre de metadada ocupa $120\text{ bytes}$.
- $N_c = 120.000\text{ comentaris}$ a `wp_comments`, amb una mida mitjana de $500\text{ bytes}$ per comentari.
- Els índexs de les taules (`INDEX`) afegeixen una sobrecàrrega del $35\%$ sobre el pes net de les dades.

1. Calcula el volum net en Megabytes ($\text{MB}$) que ocupen les dades de `wp_posts`, `wp_postmeta` i `wp_comments`.
2. Calcula la mida total de la base de dades sumant la sobrecàrrega dels índexs.
3. Si el diari publica $40$ articles diaris i rep $300$ comentaris nous cada dia, calcula l'espai d'emmagatzematge addicional en $\text{MB}$ que creixerà la base de dades al llarg d'un any natural ($365\text{ dies}$).

#### Exercici 2: Disseny d'una matriu de control d'accés (RBAC)
Una empresa de formació implanta un CMS amb 4 nous llocs de treball:
1. **Docent Autor:** Redacta continguts dels seus cursos i puja exercicis en PDF.
2. **Revisor de Qualitat:** Revisa faltes d'ortografia i valida que els continguts complisquen el pla d'estudis abans de la seua publicació pública.
3. **Coordinador Pedagògic:** Té potestat per publicar o retirar continguts i gestionar les categories i taxonomies de tot el centre.
4. **Tècnic de Sistemes:** S'encarrega de les actualitzacions, gestió de connectors de seguretat i còpies de seguretat.

- Dissenya una matriu de privilegis en format taula assignant a cadascun dels 4 perfils els permisos (`Crear`, `Editar Propis`, `Editar Altres`, `Publicar`, `Eliminar`, `Gestionar Taxonomies`, `Instal·lar Plugins`). Justifica la teua elecció seguint el principi del mínim privilegi.

#### Exercici 3: Càlcul de rendiment: Servidor dinàmic vs Memòria cau de pàgina completa
Un servidor web allotja un CMS amb Apache i PHP-FPM.
- Sense memòria cau, cada petició a un article requereix executar el codi PHP i fer 18 consultes SQL a la base de dades, amb un temps de generació de $180\text{ ms}$ i consumint el $4\%$ d'un nucli de CPU.
- Amb un connector de memòria cau estàtica (*Page Cache* com WP Super Cache o Nginx FastCGI Cache), les pàgines es guarden com a fitxers HTML pregenerats en disc. La resposta triga només $6\text{ ms}$ i consumeix el $0,1\%$ de CPU.

1. Si el lloc web rep una allau de $200\text{ peticions per segon}$ (*requests per second - RPS*):
   - Quants nuclis de CPU complets requeriria el servidor sense memòria cau? És viable en un servidor d'entrada de 4 nuclis?
   - Quants nuclis de CPU requereix la solució amb memòria cau activada tenint un índex d'encert (*Cache Hit Ratio*) del $95\%$?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Desplegament complet d'un CMS empresarial amb Docker Compose
- **Objectiu:** Crear un entorn aïllat de desenvolupament per a un CMS mitjançant contenidors.
- **Procediment de taller:**
  1. Dissenya el fitxer `docker-compose.yml`:
     ```yaml
     version: '3.8'

     services:
       db:
         image: mariadb:10.11
         restart: always
         environment:
           MYSQL_ROOT_PASSWORD: root_secure_pass_2026
           MYSQL_DATABASE: cms_database
           MYSQL_USER: cms_user
           MYSQL_PASSWORD: cms_user_pass_2026
         volumes:
           - db_data:/var/lib/mysql

       wordpress:
         image: wordpress:6.4-php8.2-apache
         restart: always
         ports:
           - "8080:80"
         environment:
           WORDPRESS_DB_HOST: db:3306
           WORDPRESS_DB_USER: cms_user
           WORDPRESS_DB_PASSWORD: cms_user_pass_2026
           WORDPRESS_DB_NAME: cms_database
         volumes:
           - wordpress_data:/var/www/html

     volumes:
       db_data:
       wordpress_data:
     ```
  2. Alça els contenidors mitjançant la comanda:
     ```bash
     docker compose up -d
     ```
  3. Accedeix mitjançant el navegador a `http://localhost:8080`, completa l'assistent d'instal·lació en valencià i verifica que la base de dades connecta satisfactòriament.

#### Repte 2: Administració avançada amb la consola WP-CLI
- **Objectiu:** Gestionar el CMS de manera automatitzada sense entrar al panell gràfic.
- **Comandes a executar des del terminal del contenidor:**
  ```bash
  # 1. Comprovar la versió i estat del CMS
  wp core version --allow-root

  # 2. Instal·lar i activar un connector de seguretat
  wp plugin install two-factor --activate --allow-root

  # 3. Crear una categoria nova per a notícies tecnològiques
  wp term create category "Intel·ligència Artificial" --slug="ia" --allow-root

  # 4. Publicar una entrada automàticament des de la línia d'ordres
  wp post create --post_type=post --post_title="Nou curs de desenvolupament web" \
                 --post_content="Oberta la matrícula per al curs de DAW i DAM." \
                 --post_status=publish --post_category=ia --allow-root
  ```

#### Repte 3: Script de còpia de seguretat automatitzada (Base de dades + Mitjans)
- **Objectiu:** Escriure un guió en Bash/Shell per a automatitzar el backup periòdic del CMS.
- **Procediment de taller:**
  1. Redacta l'script `backup_cms.sh`:
     ```bash
     #!/bin/bash
     set -e

     DATA=$(date +%Y%m%d_%H%M%S)
     DESTI="/var/backups/cms"
     mkdir -p "$DESTI"

     echo "==> Iniciant còpia de seguretat del CMS [$DATA]..."

     # 1. Backup de la base de dades MariaDB/MySQL
     docker compose exec -T db mysqldump -u cms_user -pcms_user_pass_2026 cms_database > "$DESTI/db_$DATA.sql"
     gzip "$DESTI/db_$DATA.sql"
     echo "  [+] Base de dades exportada i comprimida: db_$DATA.sql.gz"

     # 2. Backup dels arxius multimèdia wp-content/uploads
     tar -czf "$DESTI/uploads_$DATA.tar.gz" -C /var/lib/docker/volumes/wordpress_data/_data wp-content/uploads
     echo "  [+] Directori d'imatges empaquetat: uploads_$DATA.tar.gz"

     # 3. Eliminar còpies amb més de 7 dies d'antiguitat
     find "$DESTI" -type f -name "*.gz" -mtime +7 -delete
     echo "==> Còpia finalitzada amb èxit i depuració de fitxers antics realitzada."
     ```
  2. Atorga permisos d'execució (`chmod +x backup_cms.sh`) i programa'l al tauler `crontab` per a executar-se diàriament a les 03:00 AM.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat les funcions i camps d'aplicació d'un CMS, ERP, CRM i Headless CMS.
- [ ] He comprès la interacció de la pila tecnològica LAMP/LEMP entre servidor web, PHP i base de dades.
- [ ] He identificat les taules clau d'un CMS (`posts`, `postmeta`, `terms`, `users`).
- [ ] He organitzat continguts utilitzant taxonomies jeràrquiques (categories) i no jeràrquiques (etiquetes).
- [ ] He configurat rols d'usuari seguint el principi del mínim privilegi (RBAC).
- [ ] He administrat el CMS tant des de la interfície d'administració com mitjançant la consola `wp-cli`.
- [ ] He creat i programat còpies de seguretat duals (base de dades `.sql` i arxius multimèdia).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura de Sistemes CMS** | Comprèn profundament la pila LAMP/LEMP, el model de dades relacional i els avantatges dels CMS desacoblats (Headless). | Explica la connexió entre el servidor web, el motor PHP i la base de dades en un CMS clàssic. | Reconeix els components d'una pila LAMP però té dubtes sobre com s'emmagatzemen les metadades. | Desconeix el funcionament d'un servidor web o confon el CMS amb un editor de text local. |
| **Gestió de Continguts i Taxonomies** | Dissenya estructures complexes de contingut combinant Custom Post Types, camps avançats i taxonomies coherents. | Organitza la informació correctament diferenciant entrades, pàgines, categories i etiquetes. | Crea continguts bàsics però assigna categories i etiquetes de manera redundant o caòtica. | Publica tot el contingut en una sola categoria sense cap tipus d'estructura ni etiquetatge. |
| **Seguretat i Rols d'Usuari (RBAC)** | Aplica tècniques avançades d'enduriment (hardening), 2FA, protecció contra atacs de força bruta i matriu de rols estricta. | Assigna rols d'usuari adequats segons el perfil i manté el sistema actualitzat contra vulnerabilitats conegudes. | Configura usuaris però atorga rols d'administrador de manera innecessària a massa perfils. | Deixa credencials per defecte o instal·la plugins dubtosos sense cap control de seguretat. |
| **Còpies de Seguretat i Manteniment** | Automatitza còpies de seguretat de base de dades i fitxers mitjançant scripts i cron, verificant la integritat de restauració. | Realitza exportacions periòdiques tant de la base de dades SQL com del directori de mitjans. | Fa còpies de seguretat manuals només de la base de dades oblidant els fitxers i imatges del servidor. | No realitza cap tipus de còpia de seguretat o desconeix com exportar una base de dades SQL. |
