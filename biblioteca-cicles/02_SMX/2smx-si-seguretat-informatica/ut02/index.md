---
layout: default
title: "UT2 — Criptografia — Seguretat Informàtica | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Continguts i Recursos ➡️"
---

# 📘 UT2 — Criptografia (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 Continguts i Recursos**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 Continguts i Recursos

> **🔗 Recurs Web: VIDEO: Steganography, Hide Data in Media Files (Mr. Robot Hack)**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=4EwFNYcOazQ) ↗️**](https://www.youtube.com/watch?v=4EwFNYcOazQ)

> **🔗 Recurs Web: Firma Digital en documents Libreoffice**
> [**🌐 Obrir recurs extern (https://geekland.eu/firmar-digitalmente-documento-libreoffice/) ↗️**](https://geekland.eu/firmar-digitalmente-documento-libreoffice/)

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — 02.01 Xifrar ZIP i Password Recovery**
> Comprimeix un arxiu ZIP amb contrasenya i prova de recuperar-la utilitzant l'aplicació Password Recovery (o similar). Prova amb dues contrasenyes diferents, una més segura que l'altra. Quina seria una contrasenya acceptable segons el temps que ha tardat en trencar el ZIP?
>
> [Advanced ZIP Password Recovery](https://www.krylack.com/free-zip-password-recovery/)
>
> [ARCHPR](https://www.malavida.com/es/soft/advanced-rar-password-recovery/)

> **✍️ Activitat Pràctica 2.2 — 02.02 Esteganografia i Watermarking amb OpenStego**
> Utilitza l'aplicació [OpenStego](https://www.openstego.com/)per ocultar un missatge a una imatge. Prova també de posar un watermark i vore si el detecta després de fer alguna modificació lleu de la imatge. Quin ús li pots donar a l'estaganografia? I al watermarking?

> **✍️ Activitat Pràctica 2.3 — 02.03 Xifrat simètric amb GPG**
> GnuPG (la versión libre de PGP o mejor dicho Pretty Good Privacy), nos permite cifrar cualquier tipo de archivo que podremos mandar “libremente” con cierta seguridad de que nadie lo podrá leer.
>
> Como ya sabéis el cifrado simétrico es el tipo de cifrado más sencillo que hay, es más rápido de procesar y por desgracia menos seguro que el cifrado asimétrico.
>
> Para empezar la prueba tenemos que tener un archivo de cualquier tipo e introducir en la terminal de Linux el comando `gpg` con el parámetro `-c` para cifrar y `-d` para descifrar.
>
> Por ejemplo para cifrar el fichero fichero.txt
>
> ```bash
> gpg -c fichero.txt
> ```
> Nos pide la clave de encriptación y nos genera el fichero `fichero.txt.gpg`.
>
> Para desencriptar el fichero simplemente ejecutamos
>
> ```bash
> gpg -d fichero.txt.gpg
> ```
> Nos pide la clave y nos muestra el contenido del fichero original (**Nota: si estaís usando gnome al introducir la clave para realizar la encriptación se guarda en una cache, por lo que no os va a pedir la clave a la hora de desencriptar**)
>
> Si queremos recuperar el fichero original
>
> ```bash
> gpg -d fichero.txt.gpg > fichero2.txt
> ```
> ## Ejercicios
>
> 1. Crea un documento de texto con cualquier editor o utiliza uno del que dispongas.
> 2. Cifra este documento con alguna contraseña acordada con el compañero de al lado.
> 3. Haz llegar por algún medio al compañero de al lado el documento que acabas de cifrar.
> 4. Descifra el documento que te ha hecho llegar tu compañero de al lado.
> 5. Instala gpg en windows ( [Gpg4win](https://gnupg.org/download/) ), repite el ejercicio en Windows. Puedes encriptar un mensaje en linux y desencriptarlo en windows y al contrario.
> 6. `openssl` es otra herramienta que nos permite cifrar mensajes de forma simetríca, investiga como se realiza este ejercicio utilizando esta herramienta.

> **✍️ Activitat Pràctica 2.4 — 02.04 Xifrat Asimètric amb GPG**
> En esta práctica vamos a cifrar ficheros utilizando cifrado asimétrico utilizando el programa gpg. Puedes encontrar el resumen de comando en esta [chuleta](https://elbauldelprogramador.com/chuleta-de-comandos-para-gpg/) o buscar información en internet.
>
> ## Generación de claves
>
> Los algoritmos de cifrado asimétrico utilizan dos claves para el cifrado y descifrado de mensajes. Cada persona involucrada (receptor y emisor) debe disponer, por tanto, de una pareja de claves pública y privada.
> Para generar nuestra pareja de claves con gpg utilizamos la opción --gen-key
>
> Para esta práctica no es necesario que indiquemos frase de paso en la generación de las claves (al menos para la clave pública).
>
> 1. Genera un par de claves (pública y privada). ¿En que directorio se guarda las claves de un usuario?
> 2. Lista las claves públicas que tienes en tu almacén de claves. Explica los distintos datos que nos muestra. ¿Cómo deberías haber generado las claves para indicar, por ejemplo, que tenga un 1 mes de validez?
> 3. Lista las claves privadas de tu almacén de claves.
>
> ## Importar / exportar clave pública
>
> Para enviar archivos cifrados a otras personas, necesitamos disponer de sus claves públicas. De la misma manera, si queremos que cierta persona pueda enviarnos datos cifrados, ésta necesita conocer nuestra clave pública. Para ello, podemos hacérsela llegar por email por ejemplo. Cuando recibamos una clave pública de otra persona, ésta deberemos incluirla en nuestro keyring o anillo de claves, que es el lugar donde se almacenan todas las claves públicas de las que disponemos.
>
> 1. Exporta tu clave pública en formato ASCII y guardalo en un archivo `nombre_apellido.asc` y envíalo al compañero con el que vas a hacer esta práctica.
> 2. Importa las claves públicas recibidas de vuestro compañero.
> 3. Comprueba que las claves se han incluido correctamente en vuestro keyring.
>
> ## Cifrado asimétrico con claves públicas
>
> Tras realizar el ejercicio anterior, podemos enviar ya documentos cifrados utilizando la clave pública de los destinatarios del mensaje. (**Nota: No es necesario indicar el emisor con la opción `-u`)
>
> 1. Cifraremos un archivo cualquiera y lo remitiremos por email a uno de nuestros compañeros que nos proporcionó su clave pública.
> 2. Nuestro compañero, a su vez, nos remitirá un archivo cifrado para que nosotros lo descifremos.
> 3. Tanto nosotros como nuestro compañero comprobaremos que hemos podido descifrar los mensajes recibidos respectivamente.
> 4. Por último, enviaremos el documento cifrado a alguien que no estaba en la lista de destinatarios y comprobaremos que este usuario no podrá descifrar este archivo.
> 5. Para terminar, indica los comando necesarios para borrar las claves públicas y privadas que posees.

> **✍️ Activitat Pràctica 2.5 — 02.05 Firma digital amb GPG**
> Una firma digital certifica un documento y le añade una marca de tiempo. Si posteriormente el documento fuera modificado en cualquier modo, el intento de verificar la firma fallaría. La utilidad de una firma digital es la misma que la de una firma escrita a mano, sólo que la digital tiene una resistencia a la falsificación.
>
> Para la creación y verificación de firmas, se utiliza el par público y privado de claves en una operación que es diferente a la de cifrado y descifrado. Se genera una firma con la clave privada del firmante. La firma se verifica por medio de la clave pública correspondiente.
>
> Puedes seguir el [manual de GPG para firmar y verificas firmas](https://www.gnupg.org/gph/es/manual/x154.html) y realizar los siguientes ejercicios:
>
> ## Ejercicios
>
> 1. Selecciona un documento pdf y encríptalo y fírmalo(opción `--sign` ). Envíalo a un compañero, que debe en primer lugar verificar la firma y posteriormente descifrar el documento.
> 2. Realiza el mismo ejercicio pero obteniendo una firma ASCII.
> 3. Ahora sólo queremos firmar un documento. Firma un documento (opción `--detach-sig` ). A continuación envía el documento original y la firma a un compañero para que verifique que el documento está firmado por tí.

> **✍️ Activitat Pràctica 2.6 — 02.06 Certificats ACCV (Opcional)**
> Mira d'obtenir el teu certificat digital personal a: [https://www.accv.es/](https://www.accv.es/)
>
> ## Instalación del certificado
>
> ### Ejercicio 1
>
> Una vez que hayas obtenido tu certificado, explica brevemente como se instala en tu navegador favorito. Muestra una captura de pantalla donde se vea las preferencias del navegador donde se ve instalado tu certificado. ¿Cómo puedes hacer una copia de tu certificado?, ¿Como vas a realizar la copia de seguridad de tu certificado?. Razona la respuesta.
>
> Investiga como exportar la clave pública de tu certificado.
>
> ### Ejercicio 2
>
> Instala en tu ordenador el software [autofirma](https://firmaelectronica.gob.es/Home/Descargas.html) y desde la página de VALIDe valida tu certificado. Muestra capturas de pantalla donde se comprueba la validación.
>
> ## Firma electrónica
>
> ### Ejercicio 3
>
> Utilizando la página VALDe y el programa autofirma, firma un documento con tu certificado y envíalo por correo a un compañero.
>
> Tu debes recibir otro documento firmado por un compañero y utilizando las herramientas anteriores debes visualizar la firma (**Visualizar Firma**) y (**Verificar Firma**). ¿Puedes verificar la firma aunque no tengas la clave pública de tu compañero?, ¿Es necesario estar conectado a internet para hacer la validación de la firma?. Razona tus respuestas.
>
> ### Ejercicio 4
>
> Entre dos compañeros, firmar los dos un documento, verificar la firma para comprobar que está firmado por los dos.
>
> ## Autentificación
>
> ### Ejercicio 5
>
> Utilizando tu certificado accede a alguna página de la administración pública )cita médica, becas, puntos del carnet,…). Entrega capturas de pantalla donde se demuestre el acceso a ellas.

> **✍️ Activitat Pràctica 2.7 — 02.07 Activitats de Repàs**
> Agrupeu-se per parelles i realitzeu el test de repàs de la unitat justificant les respostes i les activitats per comprovar l'aprenentatge fent un resum dels conceptes i mesures més importants que es comenten (Pàgines 59 i 60)

> **✍️ Activitat Pràctica 2.8 — Examen UD1-UD2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
