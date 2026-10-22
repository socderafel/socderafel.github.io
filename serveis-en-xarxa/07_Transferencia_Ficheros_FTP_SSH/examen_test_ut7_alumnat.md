# EXAMEN TEÒRIC-PRÀCTIC DE LA UNITAT 7: SERVEIS DE TRANSFERÈNCIA DE FITXERS (FTP) I ACCÉS REMOT (SSH)

**Mòdul:** Serveis en Xarxa (2n SMX)  
**Institut:** IES Mestre Ramón Esteve (Catadau)  
**Curs acadèmic:** 2026 / 2027  
**Avaluació:** Segona Avaluació — Criteri `RA3-CEa` (Serveis de transferència de fitxers)  

---

**Nom i Cognoms de l'Alumne/a:** ___________________________________________________________  
**Data:** __________________________ **Grup:** 2n SMX **Puntuació:** _________ / 10 punts  

---

### Instruccions generals de la prova:
1. La prova consta de **20 preguntes tipus test** d'opció múltiple (A, B, C, D) amb una única resposta correcta.
2. Cada resposta correcta suma **0,5 punts** (puntuació màxima: 10 punts).
3. Marca clarament la lletra de la teua resposta en la **Graella de Respostes** situada al final de l'examen. En cas de rectificació, tatxa la casella errònia i encercla la vàlida.
4. Temps màxim disponible: **45 minuts**.

---

### PREGUNTES DE L'EXAMEN

#### 1. Quin és el port TCP estàndard utilitzat pel protocol FTP per al seu canal de control?
* **A)** Port 20 TCP
* **B)** Port 21 TCP
* **C)** Port 22 TCP
* **D)** Port 80 TCP

#### 2. Quines dues connexions independents TCP s'estableixen entre el client i el servidor en una sessió FTP?
* **A)** Canal d'àudio i canal de vídeo
* **B)** Canal de comandes local i canal de xarxa remota
* **C)** Canal de control (ordres) i canal de dades (transferència de fitxers)
* **D)** Canal de xifrat i canal d'autenticació

#### 3. Quina és la funció principal del canal de control en FTP?
* **A)** Enviar ordres de l'usuari (USER, PASS, LIST) i rebre codis d'estat del servidor
* **B)** Transmetre el contingut binari dels fitxers descarregats
* **C)** Xifrar la clau privada del servidor
* **D)** Comprovar la velocitat de connexió de la línia

#### 4. Per quin motiu el mode FTP Actiu sol fallar en connexions a través d'Internet domèstiques?
* **A)** Perquè el protocol FTP ja no admet adreces IPv4
* **B)** Perquè els encaminadors (routers) amb NAT i els tallafocs dels clients bloquegen les connexions entrants iniciades pel servidor cap al client
* **C)** Perquè exigeix obligatòriament un certificat digital SSL instal·lat al client
* **D)** Perquè només permet pujar arxius de text pla de menys d'1 MB

#### 5. En el mode FTP Passiu (PASV), qui és l'encarregat d'iniciar la connexió TCP per al canal de dades?
* **A)** Sempre el servidor cap al client
* **B)** Sempre el client cap a un port obert pel servidor
* **C)** L'encaminador intermedi del proveïdor d'Internet
* **D)** Ambdós equips simultàniament pel port 20

#### 6. Quan despleguem un servidor FTP en un entorn al núvol com AWS EC2, quin requisit és necessari per al mode passiu?
* **A)** Desactivar per complet el tallafocs de la màquina
* **B)** Connectar-se mitjançant un cable creuat virtual
* **C)** Definir un rang de ports passius, indicar la IP pública del servidor i obrir eixos ports al grup de seguretat (Security Group)
* **D)** Fer que tots els usuaris siguen membres del grup Administradors

#### 7. Quin és el principal risc de seguretat del protocol FTP tradicional sense xifrar?
* **A)** Que només permet connectar un usuari alhora
* **B)** Que les credencials (usuari i contrasenya) i els arxius viatgen en text clar, podent ser capturats fàcilment amb eines com Wireshark
* **C)** Que les contrasenyes no poden tindre més de 6 caràcters
* **D)** Que s'esborren els fitxers del servidor automàticament en descarregar-los

#### 8. Quina diferència fonamental hi ha entre els protocols FTPS i SFTP?
* **A)** Són exactament el mateix protocol amb dos noms comercials distints
* **B)** FTPS és el protocol FTP tradicional xifrat mitjançant TLS/SSL (utilitza certificats digitals), mentre que SFTP és un subservei natiu del protocol SSH
* **C)** SFTP viatja en text pla i FTPS viatja xifrat
* **D)** FTPS opera pel port 80 i SFTP opera pel port 21

#### 9. Quin port estàndard per defecte utilitzen els serveis SSH i SFTP?
* **A)** Port 20 TCP
* **B)** Port 21 TCP
* **C)** Port 22 TCP
* **D)** Port 443 TCP

#### 10. Quin programari servidor FTP ve integrat de manera nativa en els sistemes Microsoft Windows Server?
* **A)** vsftpd
* **B)** FileZilla Server
* **C)** Internet Information Services (IIS)
* **D)** Apache HTTP Server

#### 11. En sistemes Linux com Ubuntu Server, quin dimoni de servidor FTP és el més utilitzat per la seua seguretat i lleugeresa?
* **A)** vsftpd
* **B)** IIS Server
* **C)** OpenSSH Server
* **D)** PuTTYgen

#### 12. Quina de les següents eines és un client gràfic de transferència de fitxers multiplataforma (Windows, Linux, macOS)?
* **A)** Wireshark
* **B)** FileZilla Client
* **C)** Server Manager
* **D)** PuTTYgen

#### 13. En la gestió de servidors FTP, en què consisteix l'enjaulament o aïllament d'usuaris (`chroot` / `LocalUser`)?
* **A)** En bloquejar la compta de l'usuari si falla tres vegades la contrasenya
* **B)** En impedir que l'usuari puga navegar per damunt de la seua carpeta assignada i accedir a fitxers sensibles del sistema operatiu
* **C)** En obligar l'usuari a canviar la contrasenya cada 30 dies
* **D)** En limitar la velocitat de descàrrega a 100 KB/s

#### 14. Per a què s'utilitza habitualment el compte d'usuari anònim (`anonymous`) en un servidor FTP?
* **A)** Per a tasques de manteniment i actualització del sistema operatiu
* **B)** Per a permetre l'accés públic a documents de lliure distribució (com catàlegs o manuals), típicament amb permisos de només lectura
* **C)** Per a obtindre privilegis d'administració de la màquina
* **D)** Per a xifrar la informació del disc dur

#### 15. Si un usuari FTP intenta pujar o esborrar un fitxer en una carpeta on no té permisos d'escriptura, quin codi d'error típic retorna el servidor?
* **A)** 200 Command okay
* **B)** 230 User logged in
* **C)** 550 Access is denied (o Permís denegat)
* **D)** 226 Transfer complete

#### 16. En la seguretat del protocol SSH amb parella de claus asimètriques, quina clau s'instal·la al servidor i quina conserva el client?
* **A)** La clau privada s'instal·la al servidor i la clau pública la guarda el client
* **B)** La clau pública s'instal·la al servidor (al fitxer `authorized_keys`) i la clau privada es guarda de manera secreta al client
* **C)** Ambdues claus s'han d'enviar per correu a tots els usuaris
* **D)** El protocol SSH no utilitza claus, només contrasenyes curtes

#### 17. En què consisteix el bastionat (hardening) d'un servidor OpenSSH desactivant l'opció `PasswordAuthentication`?
* **A)** En impedir que ningú puga connectar-se al servidor
* **B)** En forçar que l'accés només es permeta mitjançant claus criptogràfiques autoritzades, bloquejant atacs de força bruta per contrasenya
* **C)** En canviar el sistema operatiu de Windows a Linux
* **D)** En reiniciar el servidor cada hora de manera automàtica

#### 18. Quina eina s'utilitza habitualment en entorns Windows per a generar parelles de claus SSH i convertir-les a format `.ppk` per a PuTTY?
* **A)** Wireshark
* **B)** PuTTYgen
* **C)** FileZilla Client
* **D)** Internet Information Services (IIS)

#### 19. Quina utilitat de línia d'ordres integrada en sistemes moderns permet copiar fitxers de forma xifrada a través del canal SSH?
* **A)** `telnet`
* **B)** `ping`
* **C)** `scp` (Secure Copy Protocol)
* **D)** `ftp` clàssic

#### 20. En un laboratori al núvol com AWS Academy, quina acció és fonamental en acabar cada classe per a evitar consumir els crèdits?
* **A)** Formatejar el disc dur de les màquines
* **B)** Detindre les instàncies EC2 (`Stop instance`) des de la consola web d'AWS
* **C)** Canviar la contrasenya del correu electrònic
* **D)** Desinstal·lar el navegador web

---

### GRAELLA DE RESPOSTES DE L'ALUMNE/A

*Emplena la casella de cada pregunta amb la lletra de la teua resposta (A, B, C o D):*

| Pregunta | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Resposta** | | | | | | | | | | |

| Pregunta | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Resposta** | | | | | | | | | | |

---
**Puntuació final:** Respostes correctes: ______ x 0,5 = **______ / 10 punts**
