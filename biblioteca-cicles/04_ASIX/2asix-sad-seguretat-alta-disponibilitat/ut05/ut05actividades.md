---
layout: default
title: "✍️ Activitats pràctiques UT5 — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UD5 — Criptografia de Clau Pública i Certificats Digitals"
prev_url: "../ut05/ut0501.html"
prev_label: "⬅️ 5.1 Criptografia de clau pública"
next_url: "../ut07/index.html"
next_label: "📘 UD6 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — (SAD) Hack a doble signatura**
> ### 📄 activitat hack doble signatura en PDF.pdf
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: doble signatura PDF En aquesta activitat s'utilitzarà el certificat digital per a signar un document en format PDF per més d'un signant. Necessitem
>
> 1 document signat ( utilitza este ) Programari de signatura ( autofirma, pdf ) Certificat electrònic (el teu) Hex Editor o https://hexed.it/ per editar/modificar un fitxer signat. Punt 1. Utilitza este document, signat pel professor Punt 2 Realitza una còpia del document signat i modifica-la amb HexEditor (canvia un bit o dos) Punt 3. Signa amb el teu certificat digital, per segona vegada (doble signatura) el document signat, i el document signat-modificat Punt 4. Observa i comenta els resultats Punt 5. Envia el document PDF doble-signat correcte adjunt al treball Documenta tot el procés i lliura un document en format PDF.
>
> Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”
>
> ### 📄 activitat hack doble signatura en PDF_signed.pdf
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: doble signatura PDF En aquesta activitat s'utilitzarà el certificat digital per a signar un document en format PDF per més d'un signant. Necessitem
>
> 1 document signat ( utilitza este ) Programari de signatura ( autofirma, pdf ) Certificat electrònic (el teu) Hex Editor o https://hexed.it/ per editar/modificar un fitxer signat. Punt 1. Utilitza este document, signat pel professor Punt 2 Realitza una còpia del document signat i modifica-la amb HexEditor (canvia un bit o dos) Punt 3. Signa amb el teu certificat digital, per segona vegada (doble signatura) el document signat, i el document signat-modificat Punt 4. Observa i comenta els resultats Punt 5. Envia el document PDF doble-signat correcte adjunt al treball Documenta tot el procés i lliura un document en format PDF.
>
> Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de Aules “Com fer un treball” Firmado por ENRIQUE MELCHOR IBORRA SANJAIME - NIF:***6325** el día 11/11/2023 con un certificado emitido

> **✍️ Activitat Pràctica 5.2 — (SAD) Suite GPG**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: xifrat asimètric amb gpg Aquesta activitat consisteix en utilitzar la suite gpg per a generar claus asimètriques, xifrar missatges, desxifrar missatges, generar certificats de revocació, signar missatges i familiaritzar-se amb les funcions criptogràfiques asimètriques.
>
> Passos a seguir Crear claus (privada y pública) Crear claus amb el comando/opció --full-generate-key tipus RSA i RSA grandària: 4096 validesa: 6meses Nomb: El teu nom email: El teu email (no es pot inventar, ha de ser real) Clau de protecció Moure el ratolí fins que es genere.
>
> Crear 2 parells de claus. Llistar / Comprovar que s’ha creat be Esborrar un dels dos parells de claus i quedar-se amb u Anotar el ClaveID (de la subclau) del parell no descartat. Exportar la clau pública i enviar al professor (per mail, no esperar a entregar el treball).
>
> Adjunt a este pdf trobaràs la clau pública del professor, descarrega i importa la clau pública del professor al teu clauer Crear un fitxer.txt amb l’editor nano, on introduirem un missatge secret Xifrar el fitxer amb la clau pública del professor i adjunta’l a la entrega del treball.
>
> Rebrem un fitxer xifrat del professor El desxifrem i veiem el missatge secret. Guardem la nostra clau secreta (privada) en un fitxer per a després fer una copia de seguretat fora de l’equip. Crearem un certificat de revocació de la nostra clau i el guardem també. Signem un fitxer amb gpg i l’enviem al professor (adjunta al treball) Rebem i comprovem els fitxers signats Documenta tot el procés i lliura un document en format PDF.
>
> Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Resum de comandos. Xifrat simètric Des de la consola de linux.: comando: gpg opcions : -c (xifrat simètric) Genera un arxiu amb extensió pgp , -d (desxifrat) Exemple
>
> gpg -c arxiu gpg -d arxiu.gpg Xifrat asimètric Generar claus. gpg --gen-key → gpg --full-generate-key Tipus de xifratge. L'opció DSA i ElGamal ens permet encriptar i signar ➔ Grandària de les claus. Per defecte es recomana 2048 (a major grandària mes seguretat ➔ Temps de validesa de la clau. 1y indicarà que caduque en un any.
>
> ➔ Frase de pas (o passphrase) Contrasenya que ens assegurarà que ningú mes que nosaltres mateixos ➔ podrà usar la nostra clau privada. Comprovar les claus que tenim instal·lades. Vore las claus públiques disponibles gpg --list-keys Vore las claus privades gpg –list-secret-keys Obtenir la ClaveID gpg --list-key --keyid-format SHORT Esborrar claus ➔ Necessitem el ClaveID Esborrar la clau privada: gpg --delete-secret-key ClaveID Esborrar la clau pública: gpg --delete-key ClaveID Abans de xifrar necessitem tindre la clau publica del destinatari.
>
> Si la tenim/rebem en un fitxer, l’haurem d’importar Importar la clau pública d’un altre des d’un fitxer (clau que ens envien) gpg --import fichero (també podem utilitzar aquesta funció per a recuperar la nostra clau privada guardada) Però també podem pujar les claus(públiques) a un servidor de claus.
>
> Pujar la nostra clau pública: gpg --send-keys --keyserver pgp.rediris.es ClaveID Per buscar las claus públiques en el servidor gpg --keyserver NombreDelServidor --search-keys ClaveID/nombre/email Per a descarregar la clau pública d’un destinatari del servidor de claus gpg --keyserver NombreDelServidor --recv-keys ClaveID
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Si volem enviar-la per correu o en suport físic (USB, CD/DVD …) La bolquem en un fitxer de text i enviem el fitxer. gpg --armor --output fichero --export ClaveID
>
> - Fer una còpia de la nostra clau privada per a poder recuperar-la si la perdem
>
> o si anem a un altre equip: (NO ENVIAR A NINGÚ MAI, ESTA ES LA NOSTRA CLAU SECRETA PRIVADA) gpg --armor --output fichero --export-secret-key ClaveID ******* ----------------------------------------------------------------------------------------------- Esborrar las nostra clau pública pujada als servidors públics. (revocació) gpg -o revocacion.asc --gen-revoke ClaveID
>
> - Crear certificat de revocació : gpg -o revocacion.asc --gen-revoke claveID
>
> (És convenient crear aquest certificat a continuació de la generació de claus i guardar-lo en lloc segur al costat de la clau privada). Revocar la clau (importació a la nostra relació de claus) gpg --import revocacion.asc
>
> - Comunicar als servidors que la nostra clau ja no es vàlida
>
> gpg --keyserver NombreDelServidor --send-key ClaveID ----------------------------------------------------------------------------------------------- Xifrar documents Encriptar un fitxer amb la clau pública d’un destinatari: gpg --encrypt --recipient claveID documento.txt Desencriptar un fitxer dirigit a nosaltres amb la clave privada nostra gpg -d documento.txt.gpg gpg -d documento.txt.gpg > document_en_clar.txt ----------------------------------------------------------------------------------------------- Signar documents Signar un fitxer amb la clau privada gpg --output fichero.firmado –sign fichero.txt Verificar de qui és el fitxer signat gpg --verify fichero.firmado Desxifrar fitxer signat gpg --output fichero.txt –decrypt fichero.firmado Signar un fitxer amb la clau privada, i deixant el text llegible gpg --output fichero.firmado –clearsign fichero.txt
