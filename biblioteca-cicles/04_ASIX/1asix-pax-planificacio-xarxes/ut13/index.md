---
layout: default
title: "UD12 — Capa de transport i aplicació · Temari Complet"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT13 Completa"
prev_url: "../ut12/ut1202.html"
prev_label: "⬅️ 11.2 Exemple Enrutament Estàtic"
next_url: "../ut13/ut1301.html"
next_label: "12.1 U12 Nivell de Transport i Aplicació ➡️"
---

# 📘 UD12 — Capa de transport i aplicació (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**12.1 U12 Nivell de Transport i Aplicació**](./ut1301.md)

---

# 12.1 U12 Nivell de Transport i Aplicació

---

PAX - U12 – Capes de transport i aplicació 1er ASIX

1 ASIX - PAX Capa de transport

- Responsable d’establir una

sessió de comunicació temporal entre dos aplicacions i transmetre dades entre elles.

- Enllaç entre les capes

d’aplicació i les capes inferiors que s’encarreguen de la transmissió a través de la xarxa

1 ASIX - PAX Protocols de la capa de transport

- Els TCP/IP proporciona dos protocols de capa de transport
- TCP: Transfer Control Protocol. Considerat confiable asegura que les dades

apleguen al destí. Per a això calen camps addicionals en la capçalera que aumenten així el tamany i el temps d’entrega.

- UDP: User datagram protocol. No propociona confiabilitat. Té més camps i per

tant és més ràpid que TCP.

1 ASIX - PAX TCP

- El transport del TCP es similar a enviar paquets amb seguiment.
- Si es divideix un pedido d’enviament en varios paquets, el client pot

revisar en línia l’ordre d’entrega.

1 ASIX - PAX TCP

1 ASIX - PAX TCP

1 ASIX - PAX TCP

1 ASIX - PAX TCP

- TCP té tres funcions
- Numeració i seguiment de segments de dades
- Reconeixement de les dades rebudes
- Retransmissió de les dades sense reconeixement després d’un temps

determinat.

1 ASIX - PAX UDP

- UDP sobrecarrega menys i redueix les possibles demores.
- Entrega amb millor esforç (no confiable)
- Cap reconeixement (ACK)
- Similar a una carta no certificada

1 ASIX - PAX TCP VS UDP

- Es gasta TCP a les bases de dades, navegadors web, clients de correu

electrònic i en general qualsevol aplicació que requereix que totes les dades que s’envien apleguen al destí en el seu format original.

- Es gasta UDP quan no és tan important l’ordre o si en cas que es

perda un paquet pot no ser perceptible per l’usuari, com per exemple a una transmissió de vídeo en directe.

1 ASIX - PAX TCP VS UDP

1 ASIX - PAX TCP VS UDP

1 ASIX - PAX Capçalera TCP

1 ASIX - PAX Capçalera UDP

1 ASIX - PAX Números de port

- Els usuaris poden rebre i enviar

correu electrònic, navegar per la Web, vore un vídeo i cridar per VoIP al mateix temps.

- Açò es fa gràcies a que tant TCP com

UDP administren múltiples conversacions al mateix temps mitjançant identificadors únics anomenats números de port.

1 ASIX - PAX Números de port

- El port d’origen és generat dinàmicament pel dispositiu emissor.
- El port de destí informa al destí del servici que es sol·licita.
- Ambdós ports s’inclouen en les capçaleres.
- S’anomena socket al conjunt d’IP + port. Per exemple, es comú vore el

següent: 192.168.1.7:80

- Refereix al port 80 (web) de la direcció 192.168.1.7

1 ASIX - PAX Números de port

1 ASIX - PAX Números de port

1 ASIX - PAX Números de port

1 ASIX - PAX Números de port

- Per a vore les comunicacions establides al nostre equip, es gastarà el

comandament netstat.

1 ASIX - PAX Capa d’aplicació

- 7a i última capa del model OSI.
- És la més propera a l’usuari final.
- S’utilitza per intercanviar les dades entre els programes que

s’executen en els hosts d’origen i de destí.

- Proporciona servicies a l’usuari de qualsevol tipus.

1 ASIX - PAX Capa d’aplicació: Servicis i protocols

1 ASIX - PAX DHCP

- Dynamic host configuration protocol.
- Protocol que la funció principal és proveir una configuració de xarxa

de forma automàtica, evitant així que el administrador tinga que configurar-los manualment a cada equip.

- Estalvi de temps, millor servici al usuario, evita errades humanes.
- El servici pot estar instal·lat a un servidor o bé al router.

1 ASIX - PAX DNS

- Domain name system.
- Base de datos jeràrquica que emmagatzema informació sobre els

noms de domini en la intranet d’una empresa i en Internet.

- Converteix els noms de domini a direccions IP.
- Necessari per al Internet tal i com el coneguem hui en dia.

1 ASIX - PAX FTP

- File transfer protocol.
- Protoco, multiplataforma que serveix per transferir grans blocs de

dades per la xarxa.

- Les pàgines web es ”pugen” a servidor mitjançant aquest protocol.

1 ASIX - PAX HTTP/HTTPS

- Hyper Text Transfer Protocol.
- Disenyat per transferir pàgines web des d’un servidor fins un client.
- HTTPS és la versió segura de HTTP

1 ASIX - PAX SMTP, POP i IMAP

- SMTP és un protocol per a enviar correus electrònics.
- POP i IMAP són protocols per a rebre correus electrònics.
- Es diferencien en que el POP borra el missatge una vegada llegit i el

IMAP no.

1 ASIX - PAX Altres protocols

- Existeixen molts altres protocols de nivell d’aplicació.
- SNMP – Monitorització de la xarxa.
- LDAP – Directori actiu
- RTSP – Streaming
- SIP - VoIP

1 ASIX - PAX Dubtes?

---
