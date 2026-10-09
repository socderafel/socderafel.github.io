---
layout: default
title: "UD1 — Sistemes de Fitxers Linux · Temari Complet"
course_root: ".."
badge: "4t ESO · UD1 — Sistemes de Fitxers Linux"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Sistema d'arxius ➡️"
---

# 📘 UD1 — Sistemes de Fitxers Linux (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Sistema d'arxius**](./ut0101.md)
- [**1.2 Gestió de Fitxers**](./ut0102.md)
- [**1.3 Permisos**](./ut0103.md)

---

# 1.1 Sistema d'arxius

Classe 1: Estructura del sistema d’arxius en Linux Objectiu Comprendre l’organització del sistema d’arxius en Linux, identificar els princi- pals directoris i entendre el concepte de rutes absolutes i relatives. Teoria El sistema d’arxius de Linux s’organitza en forma d’arbre jeràrquic que comença en el directori arrel, representat per /. Tots els fitxers i directoris del sistema pengen d’aquest punt únic.

A diferència d’altres sistemes operatius, Linux integra tots els dispositius (discos durs, USB, etc.) dins d’aquest arbre, mitjançant punts de muntatge, que són directoris on es connecten aquests dispositius. Principals directoris del sistema (segons l’estàndard FHS)

- / – Arrel del sistema.
- /home – Directoris personals dels usuaris.
- /bin – Programes i ordres bàsiques accessibles a tots els usuaris.
- /sbin – Ordres d’administració del sistema.
- /etc – Fitxers de configuració del sistema.
- /usr – Programes, llibreries i documentació addicional.
- /lib – Llibreries essencials pel sistema i programes.
- /var – Dades variables: registres (logs), cues d’impressió, etc.
- /tmp – Fitxers temporals.
- /root – Directori personal de l’usuari administrador (root).
- /media i /mnt – Punts de muntatge per a dispositius externs.

Rutes en Linux Ruta absoluta: comença sempre per / i indica el camí complet fins al fitxer o directori. Exemple: /home/alumne/Documents/text.txt. Ruta relativa: indica el camí respecte del directori actual. Exemples: - . és el directori actual. - .. és el directori pare. - ~/Documents fa referència al directori Documents de l’usuari actual.

Ordres bàsiques de navegació

- pwd – mostra el directori actual.
- ls – llista el contingut.

- cd – canvia de directori.
- tree – mostra l’estructura jeràrquica d’un directori.

---

# 1.2 Gestió de Fitxers

Classe 2: Gestió de fitxers i directoris Objectiu Dominar les ordres fonamentals per crear, copiar, moure, visualitzar i eliminar fitxers i directoris. Teoria En Linux, la major part d’operacions es poden fer des de la línia d’ordres, la qual cosa permet automatitzar tasques i treballar de manera eficient.

Ordres principals de gestió

- mkdir nom – crea un directori.
- rmdir nom – elimina un directori buit.
- cp origen destí – copia fitxers o directoris.
- mv origen destí – mou o canvia el nom.
- rm fitxer – elimina fitxers.
- rm -r directori – elimina directoris i el seu contingut (ús amb precau

ció).

- touch fitxer – crea un fitxer buit o actualitza la marca de temps.
- cat fitxer – mostra el contingut complet del fitxer.
- more / less – mostren el contingut de manera paginada.
- man ordre – mostra el manual d’una ordre.

Comodins (metacaràcters)

- * – qualsevol seqüència de caràcters.

> **💡 Apunt Tècnic**
> Exemple: rm *.txt elimina tots els .txt del directori actual.

- ? – exactament un caràcter.

> **💡 Apunt Tècnic**
> Exemple: cp foto?.jpg /backup copia foto1.jpg, foto2.jpg, etc. Opcions d’ordres Moltes ordres permeten opcions per modificar el seu comportament

- ls -l – llistat llarg amb permisos i propietaris.
- cp -r dir1 dir2 – còpia recursiva de directoris.
- rm -i fitxer – demana confirmació abans d’esborrar.

---

# 1.3 Permisos

Classe 3: Permisos i propietaris Objectiu Comprendre el sistema de permisos i propietats dels fitxers i directoris en Linux i aprendre a modificar-los. Teoria Cada fitxer o directori té associats

- Un usuari propietari.
- Un grup de pertinença.
- Tres conjunts de permisos (usuari, grup, altres).

Permisos possibles

- r (read) – lectura del fitxer o llistat del directori.
- w (write) – escriptura/modificació del fitxer o del contingut del directori.
- x (execute) – execució d’un fitxer o accés al directori.

Visualització de permisos Quan es mostra un llistat detallat amb ls -l, apareix una línia similar a: -rwxr-xr-- Interpretació

- El primer caràcter indica el tipus

fitxer normal. – d directori. – l enllaç simbòlic.

- Els següents tres caràcters (rwx) són els permisos de l’usuari propietari.
- Els següents tres (r-x) són els permisos del grup.
- Els últims tres (r--) són els permisos per a la resta d’usuaris.

Permisos en mode numèric Cada permís té un valor

- r = 4
- w = 2
- x = 1

La suma defineix els permisos per a cada rol

- 7 = 4+2+1 = rwx
- 6 = 4+2 = rw

- 5 = 4+1 = r-x
- 4 = 4 = r

> **💡 Apunt Tècnic**
> Exemple

```bash
chmod 755 fitxer
```

- Usuari: 7 →rwx
- Grup: 5 →r-x
- Altres: 5 →r-x

Ordres principals de permisos

- ls -l – mostra permisos, propietari i grup.
- chmod – modifica permisos.
- chown – canvia el propietari.
- chgrp – canvia el grup.

Exemples d’ús de chmod Mode simbòlic: - chmod u+x script.sh – afegeix execució a l’usuari. - chmod g-w document.txt – lleva escriptura al grup. - chmod o-r fitxer.txt – lleva lectura als altres. Mode numèric: - chmod 600 fitxer.txt – només l’usuari pot llegir i escriure.

- chmod 644 fitxer.txt – l’usuari pot llegir i escriure, la resta només llegir.

---
