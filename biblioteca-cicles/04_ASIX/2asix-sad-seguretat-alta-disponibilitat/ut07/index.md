---
layout: default
title: "UD6 — Tipus de Malware i Programari Antimalware · Unitat Completa"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT7 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut07/ut0702.html"
next_label: "7.2 UD5-1 Tipus de malware ➡️"
---

# 📘 UD6 — Tipus de Malware i Programari Antimalware (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.2 UD5-1 Tipus de malware**](./ut0702.md)
- [**7.3 UD5-2 Programari anti malware**](./ut0703.md)
- [**✍️ Activitats pràctiques UT7**](./ut07actividades.md)

---

# 7.2 UD5-1 Tipus de malware

TIPUS DE MALWARE

MALWARE Definició: Un programa maliciós (de l'anglés malware), també conegut com a programa maligne, programa malèvol, programa malintencionat o codi maligne, és qualsevol tipus de programari que realitza accions nocives en un sistema informàtic de manera intencionada i sense el coneixement ni el permís de l'usuari.

Abans que el terme malware fora encunyat,​ el programari maligne s'agrupava sota el terme «virus informàtic» (un virus és en realitat un tipus de programa maliciós).

Virus de Boot Virus del sector d’arrancada Un dels primers tipus de virus conegut, el virus de boot infecta la partició d'inicialització del sistema operatiu. El virus s'activa quan la computadora és encesa i el sistema operatiu es carrega. Exemples: Form, Disk killer, Michelangelo (esborra els primers 100 sectors del disc)

Time Bomb Els virus del tipus «bomba de temps» són programats perquè s'activen en determinats moments, definit pel seu creador. Una vegada infectat un determinat sistema, el virus solament s'activarà i causarà algun tipus de mal el dia o l'instant prèviament definit. Alguns virus es van fer famosos, com el «Viernes 13» i el «Michelangelo (6 de març) ». Viernes 13 destrueix els arxius .com .exe i .sys

Cuc informátic / Worm En atacar la computadora, no sols es replica, sinó que també es propaga per internet enviant-se als e-mail que estan registrats en el client d'e-mail , infectant les computadores que òbriguen aquell e- mail, reiniciant el cicle. A diferència dels virus, els cucs no infecten arxius. Exemples són: “El cuc de morris” anys 80’s , “IloveYou” (destrueix fitxers de diverses extensions ,es porpaga per IRC i Outlook), Confiker (ataca SO Windows) Responsable de la creació del primer CERT

Troians Uns certs virus porten en el seu interior un codi a part, que li permet a una persona accedir a la computadora infectada o recol·lectar dades i enviar-los per Internet a un desconegut, sense que l'usuari s’adone d'això. Actualment, els cavalls de Troia ja no arriben exclusivament transportats per virus, ara són instal·lats quan l'usuari baixa un arxiu d'Internet i l'executa (phishing).

Exemples: Back orifice, Sub7, MEMZ,.. Hi ha molts tipus de troians !!

Hijackers Els hijackers són programes o scripts que «segresten» navegadors d'Internet, principalment a Internet Explorer. Quan això passa, el hijacker altera la pàgina inicial del navegador i impedeix a l'usuari canviar-la, mostra publicitat en pop-ups o finestres noves, instal·la barres d'eines en el navegador i poden impedir l'accés a determinades webs (com a webs de programari antivirus, per exemple).

Hi ha variants. IP Hijacking, Page Hijacking, Domain Hijacking, Session Hijacking,..

Backdoors La paraula significa, literalment, «porta posterior» i es refereix a programes similars al cavall de Troia. Com el nom suggereix, obrin una porta de comunicació amagada en el sistema. Aquesta porta serveix com un canal entre la màquina afectada i l'intrús, que pot, així, introduir arxius malèfics en el sistema o robar informació privada dels usuaris.

Exemples: Sticky Attacks, DoublePulsar, ..

Virus de Macro Els virus de macro vinculen les seues accions a models de documents i a altres arxius de manera que, quan una aplicació carrega l'arxiu i executa les instruccions contingudes en l'arxiu, les primeres instruccions executades seran les del virus. Exemples: Concept, Melissa, Chanitor,..

Keylogger L'Enregistrador de teclat és una de les espècies de virus existents, el significat dels termes en anglés que més s'adapta al context seria: Capturador de tecles. Quan són executats, normalment, els enregistradors de teclat queden amagats en el sistema operatiu, de manera que la víctima no té com saber que està sent monitorada.

Exemples: KidLogger, BlackBox, Revealer,..

Virus de Pendrive En connectar una memòria USB infectada a un equip, el malware s'executa automàticament usant la manera Auto-run que per defecte se li assigna als dispositius USB en els sistemes Windows. No intenta reproduir- se sinó més aviat es manté discretament en el dispositiu esperant que l'atacant el recupere i extraga la informació robada.

Exemples: Ramnit, Conficker, ..

Zombi L'estat zombi en una computadora ocorre quan és infectada i està sent controlada per tercers. Poden usar-ho per a disseminar virus , enregistradors de teclat, i procediments invasius en general. Es poden crear “exèrcits” de bots, per a després llançar atacs conjunts “DdoS”.

Exemples: Metulji, Kelihos, Mariposa, Waledac, ..

Virus de Ransomware El ransomware és un programa de programari maliciós que infecta la teua computadora i mostra missatges que exigeixen el pagament de diners per a restablir el funcionament del sistema. Aquest tipus de malware és un sistema criminal per a guanyar diners que es pot instal·lar a través d'enllaços enganyosos inclosos en un missatge de correu electrònic, missatge instantani o lloc web. El ransomware té la capacitat de xifrar arxius importants predeterminats amb una contrasenya.

Exemples. Gameover Zeus + Cryptolocker ,WannaCry, Ryuk, Petya, Jigsaw

APT Són les sigles del terme anglés Advanced Persistent Threat (Amenaça Avançada Persistent). La seua fi és comprometre un equip en concret, el qual conté informació de valor. Una APT utilitza tècniques de hacking contínues, clandestines i avançades per a accedir a un sistema i romandre allí durant un temps prolongat, amb conseqüències potencialment destructives. Exemple. Stuxnet, (que ataca a equips SCADA i PLC), Duqu, Flame, Red October

RootKit Un rootkit es defineix com un conjunt de programari que permet a l'usuari un accés de "privilegi" a un ordinador, però manté la seua presència inicialment oculta al control dels administradors. Usualment, un atacant instal·la un rootkit en una computadora després de primer haver obtingut drets d'escriptura en qualsevol part de la jerarquia del sistema de fitxers (hackeig, enginyeria social,...). Exemples son TDSS, ZeroAccess, Alureon, ..

Criptominat maliciós Cryptojacking: És un tipus de programa maliciós que s'oculta en un ordinador i s'executa sense consentiment utilitzant els recursos de la màquina (CPU, memòria, amplada de banda, ...) per a la mineria de criptomonedes i així obtindre beneficis econòmics. Aquest tipus de programa es pot executar directament sobre el sistema operatiu de la màquina o des de plataforma d'execució com el navegador

Malware de Robatori de Criptomonedes És un programa maliciós especialment dissenyat per al robatori de criptomonedes. Per a aquesta comesa és habitual l'ús de Clipper ''malware'', (control del portaretalls i quan detecta una direcció de criptomonedes, automàticament la reemplaça per la de l'atacant. D'aquesta manera, si volem realitzar una transferència a la direcció que creiem que tenim en el portaretalls, en aquest cas, aniria a la direcció de l'atacant.42​ Altres malware, com HackBoss, se centren en robar claus de carteres de criptomonedes

Rogueware És un fals programa de seguretat que no és el que diu ser, sinó que és un malware. Per exemple, falsos antivirus, antiespia, tallafocs o similar. Aquests programes solen promocionar la seua instal·lació usant tècniques de scareware, és a dir, recorrent a amenaces inexistents com, per exemple, alertant que un virus ha infectat el dispositiu. A vegades també són promocionats com a antivirus reals sense recórrer a les amenaces en la computadora.

Una vegada instal·lats en la computadora, és freqüent que simulen ser la solució de seguretat indicada, mostrant que han trobat amenaces i que, si l'usuari vol eliminar-les, és necessari la versió de completa, la qual és de pagament Exemples: WinWebSec, Chameleon, FakeScanti,..

DeepfakeMalware És una forma de programari maliciós que aprofita la tecnologia d'Intel·ligència Artificial per a manipular imatges i vídeos i així produir representacions molt convincents però falses de persones, situacions o esdeveniments amb una fi maliciosa com el de difondre desinformació, cometre fraus financers o realitzar ciberespionatge Tipus: Deepvoice i Deepface

INDICIS D’EXISTÈNCIA DE MALWARE

SOSPITA DE INFECCIÓ ✔ Equip lent, amb erros o es bloqueja, sobrecalfament, esgotament de bateria ✔ Pantalla blava «de la mort» ✔ Programes que s’obrin i tanquen automàticament ✔ Falta d’espai d’emmagatzemament ✔ Finestres emergents, barres de ferramentes i programes no desitjats ✔ Correus electrònics i missatges que s’envien sense el teu consentiment ✔ Esborrat de documents sense el teu consentiment ✔ Redirecció del navegador a pàgines desconegudes ✔ Canvi de nom de documents ( xifratge: ransomware en procés ) ✔ Processos del sistema que acaparen massa recursos (administrador de tasques)

Com pot entrar la INFECCIÓ ✔ Navegació per llocs web «modificats» ✔ Fer clic en anuncis maliciosos ✔ Descarregar un arxiu infectat ✔ Instal·lar aplicacions d’un proveïdor desconegut ✔ Facilitar dades en llocs web poc fiables ( als que t’ha dirigit un enllaç sospitos )

Com es pot evitar la INFECCIÓ ✔ No cliques en publicitat emergent ✔ No òbrigues documents adjunts de correu no desitjat o sospitós ✔ Manté sempre actualitzat el sistema operatiu i els navegadors (i altres programes) ✔ Presta atenció a les terminacions dels dominis (.com .es .org etc...), no habituals ✔ Descarrega i instal·la aplicacions de proveïdors coneguts (informa’t abans) ✔ No faces clic en enllaços sospitosos ✔ Utilitza dos comptes per usar el sistema ( amb privilegis i sense) ✔ Utilitza contrasenyes fortes ✔ Fes-te en un bon antivirus i fes còpies de seguretat regularment ✔ Forma’t en ciberseguretat

Com es pot propagar la INFECCIÓ ✔ Correus electrònics ✔ Suports físics ✔ Alertes emergents ✔ Vulnerabilitats ✔ Portes posteriors (backdoors) ✔ Descarregues ocultes ✔ Escalada de privilegis ✔ Amenaces combinades

Com es pot eliminar la INFECCIÓ ✔ Us de programes antivirus / antimalware d'escriptori ✔ Us de ferramentes especialitzades ✔ Us d’antivirus Online ✔ Us d’antimalware de rescate o Antivirus Live (arrancable des de USB / CD ) ✔ Reinstal·lant i restaurant l’última còpia de seguretat ✔ Ací radica la importància de fer còpies de seguretat !!

---

# 7.3 UD5-2 Programari anti malware

PROGRAMARI ANTIMALWARE

PROGRAMARI MALICIÓS MALWARE = MALicius softWARE Virus, cucs, troians i en general tots els tipus de programes per accedir a ordinadors sense autorització i produir efectes no desitjats. EVOLUCIÓ HISTÒRICA ➔Començaments: ◆Motivació principal dels creadors de virus: reconeixement públic ◆Quanta + rellevància tinguera el virus + reconeixement ◆Les accions a realitzar per el virus devien ser visibles per l’usuari i suficientment nociu (eg: formatar HD, eliminar fitxers …) ➔Actualment

◆Malware com un negoci creatiu ◆Els creadors de virus han passat a tindre una motivació econòmica

PROGRAMARI MALICIÓS EVOLUCIÓ HISTÒRICA ➔1987-1999: Virus clàssics, els creadors no tenien ànim de lucre, motivació intel·lectual i protagonisme ➔ : explosió dels cucs en Internet, propagació de correu electrònic, aparició de les botnets ➔: clar ànim de lucre, professionalització del malware, explosió de troians bancaris i programes espies ➔2010… : casos avançats d’atacs dirigits, espionatge industrial i governamental, atac a infraestructures crítiques, proliferació d’infeccions en dispositius mòbils Historia del Malware Video: Malware mes devastador 1971:Creeper

PROGRAMARI MALICIÓS ¿Cóm obtindre un benefici? ➔Robar informació sensible de l’ordinador infectat: dades personals, contrasenyes, credencials d’accés a diferents entitats, mail, banca online etc ➔Crear una xarxa d’ordinadors infectats (botnet o red zombi) L’atacant pot manipular-los tots simultàniament i vendre servicis: enviament d’spam, missatges phishing, accedir a comptes bancaris, realitzar DoS etc ➔Vendre falses solucions de seguretat (rogueware, fakeAv) Exemple: Falsos antivirus que mostren missatges amb publicitat informant que l’ordinador està infectat la infecció es el fals virus ➔Xifrar el contingut dels fitxers de l’ordinador i sol·licitar un rescat econòmic per a recuperar la informació (criptovirus o ransomware)

CLASSIFICACIÓ DEL MALWARE Clasificació clásica

Els 6 tipus de malwares que existeixen ➔Virus ◆Infecten altres arxius (com els virus reals) ◆Només poden existir dins d'un fitxer ,generalment executables (.exe, .bat...) ◆Infecten a un sistema quan s'executa el fitxer infectat ➔Cucs ◆Característica principal: realitzar el màxim núm. de còpies possibles de si mateix per a facilitar la seva propagació. No infecta altres programes.

◆Mètodes de propagació: correu electrònic, arxius falsos descarregats P2P, missatgeria instantània etc ➔Troia ◆Codi amb capacitat de crear una porta posterior (backdoor) que permet l'administració remota d'un usuari no autoritzat ◆Formes d'infecció: en visitar una web maliciosa, descarregat per un altre malware, dins de programes que simula ser inofensiu etc

CLASSIFICACIÓ DEL MALWARE ➔spyware ◆S'instal·la per si sol o mitjançant la interacció d'un altre programa. Solen treballar d'amagat. ◆Finalitat: monitoren i recopilen informació de les accions d'usuari, el contingut del disc dur, les aplicacions instal·lades ➔adware ◆No danya els ordenadors ◆Finalitat: mostrar anuncis mentre es navega per Internet o s'executen aplicacions ◆Alguns poden enviar dades personals (spyware) ➔ransomware ◆Segresta les dades d'un ordinador per a demanar un rescat ◆Xifren les dades i demanen un rescat per la clau per a desxifrar-los ◆Entra en l'ordinador a través d'una altra mena de malware Activitat :busca un exemple de cadascun dels tipus de virus

CLASSIFICACIÓ DEL MALWARE Classificacions genèriques que engloben diversos tipus de malware ➔Lladres d’informació (infostealers) ◆Roben informació de l’equip infectat ◆Capturadors de pulsacions de teclat (keyloggers), espia d’hàbits d’ús d’informació (spyware) i lladres de contrasenyes (PWstealer) ➔Códi delictiu (crimeware) ◆Realitzen una acció delictiva amb fins lucratius ◆Lladres de contrasenyes bancaries(phishing) propagats por spam amb clickers a falses pàgines bancaries, estafes electròniques (scam), venda de falses eines de seguretat (rogueware), portes de darrere (backdoor) o xarxes zombies (botnets) ➔Greyware (o grayware) ◆Inofensiu. Realitzen alguna acció que no es nociva, sols molesta o no desitjable ◆Visualització de publicitat no desitjada (adware), espies (spyware) que roben informació de costums d’usuari per a publicitat (págines per les que naveguen,temps que naveguen…) bromes(joke) y bulos (hoax)

CLASSIFICACIÓ DEL MALWARE ●BotNets: Botnet és el nom genèric que denomina a qualsevol grup d'ordinadors infectats i controlats per un atacant de manera remota ●Ordenadors Zombis vore video ●/servicio-antibotnet ●https://youtu.be/S-8tfS0uK98

CLASSIFICACIÓ DEL MALWARE 2016: Distribució de malware sobre el S.O. Windows.

CLASSIFICACIÓ DEL MALWARE ENISA Threat Landscape 2023

CLASSIFICACIÓ DEL MALWARE Windows és el sistema operatiu més atacat no perquè siga el més senzill de vulnerar, sinó perquè és el més usat, per la qual cosa hi ha més probabilitats d'èxit per als cibercriminals 2021: https://www.unocero.com/software/sistemas-operativos-mas-atacados-por-ransomware-2021/

CLASSIFICACIÓ DEL MALWARE

CLASSIFICACIÓ DEL MALWARE

CLASSIFICACIÓ DEL MALWARE

MÈTODES D’INFECCIÓ Com arriba a l'ordinador el malware i com prevenir-los? ➔Explotant una vulnerabilitat software Desenvolupadors de malware aprofiten vulnerabilitats de versions de SOTA o programes per a prendre el control. Solució: Actualitzar versions periòdicament ➔Enginyeria social Tècniques d'abús de confiança per a fer que l'usuari realitzi una determinada acció, generalment busca el benefici econòmic. Solució: Preparar a les persones per evitar estes tècniques.

➔Per un arxiu maliciós Arxius adjunts en spam, execució d'aplicacions web, arxius de descàrrega P2P, generadors de claus i cracks de SW pirata etc

Solució: Preparar a les persones per evitar detectar-los

+ Instal·lació de programari antimalware p.e. RDP p.e. Phishing p.e. Adjunt

MÈTODES D’INFECCIÓ Com arriba a l'ordinador el malware i com prevenir-los? ➔Dispositius extraïbles Molts cucs deixen còpies en dispositius extraïbles, que mitjançant l'execució automàtica quan el dispositiu es connecta a un ordinador, poden executar-se i infectar el nou equip i a nous dispositius que es connectin ➔Cookies malicioses Petits fitxers de text en carpetes temporals del navegador en visitar pàgines web que emmagatzemen informació facilitant la navegació de l'usuari. Les cookies malicioses monitoren i registren les activitats en Internet amb finalitats maliciosos (capturar dades de l'usuari, contrasenyes d'accés a determinades webs, vendre els hàbits de navegació a empreses de publicitat etc) Prevenir la infecció resulta relativament fàcil coneixent-les

KEYLOGGER Revealer keylogger Programa de recuperació de pulsacions de teclat que s'executa a l'inici i es troba ocult, podent enviar notificacions remotament per FTP o email Prement CTRL+ALT+F9 es pot mostrar l'estat del registre podent veure que s'ha teclejat Recomanació: Realitzar escanejos periòdics antimalware amb una o diverses eines actualitzades, controlar els accessos físics i limitar els privilegis dels comptes d'usuaris per a evitar instal·lacions no desitjades

KEYLOGGER Activitat: ● Instal·lar la extensió de navegador Revealer keylogger i comprovar que i com funciona ● Revisar les opcions de configuració i seguretat ● Busca i instal·la un antimalware que detecte el keylogger ● Desinstal·la el keylogger Activitat: ● Busca en internet el preu de un USB-Keylogger

KEYLOGGER Activitat: Provar eina SpyShelter https://www.spyshelter.com/

CLASSIFICACIÓ DEL PROGRAMARI ANTIMALWARE ➔Les eines antimalware es troben més desenvolupades per a entorns més utilitzats per usuaris no experimentats i, per tant més vulnerables (p.e. entorns Windows ➔Cada vegada és major el nombre d'infeccions en arxius allotjats en servidors GNU/Linux i aplicacions cada vegada més usades, per exemple el navegador Mozilla Firefox

PROTECCIÓ I DESINFECCIÓ

PROTECCIÓ I DESINFECCIÓ Recomanacions de seguretat ➔Mantín-te informat sobre les novetats i les alertes de seguretat. ➔Mantingues actualitzat el teu equip, sistema operatiu i aplicacions. ➔Fes còpies de seguretat amb una certa freqüència, guarda-les en un lloc i suport segur ➔Utilitza programari legal, que sol oferir major garantia i suport.

➔Utilitza contrasenyes fortes en tots els serveis ➔Crea diferents usuaris en el teu sistema, cada un d'ells amb els permisos mínims necessaris per a poder realitzar operacions permeses ➔Utilitza eines de seguretat antimalware actualitzades periòdicament ➔Analitza el sistema de fitxers amb diverses eines antimalware per a contrastar ➔Realitzar periòdicament escaneig de ports, test de velocitat de les connexions de xarxa per a analitzar si les aplicacions que els empren són autoritzades ➔No fiar-se de totes les eines antimalware, Ull amb el rogueware ➔Accedir a serveis d'Internet que ofereixin seguretat (HTTPS) i comprova el certificat

CONTRASENYES FORTES ●Visita la pàgina https://password.kaspersky.com/es/ i comprova la rapidesa amb la que pot ser trencada una contrasenya de longitud 4,6,8,10. ●Busca altres pàgines web que realitzen la mateixa funció ●Reflexiona: Estan gravant contrasenyes per a afegir-les a llistes de cerca?

Antivirus ➔Programa informàtic dissenyat per a detectar, bloquejar i eliminar codis maliciosos ➔Els fabricants solen tenir diferents versions perquè es puguin provar els seus productes de manera gratuïta i a vegades per a poder desinfectar serà necessari comprar llicencies ➔Variants

 Antivirus d'escriptori: instal·lat com una aplicació permet el control en temps real  Antivirus en línia: aplicació web que permet mitjançant la instal·lació de *plugins en el navegador, analitzar el sistema d'arxius complet  Anàlisis de fitxers en línia: servei gratuït de fitxers sospitosos mitjançant l'ús de múltiples motors antivirus  Antivirus portable: no requereix instal·lació en el nostre sistema consumeix una petita quantitat de recursos  Antivirus Live: Permet arrencar des d'una unitat USB, CD o DVD analitzant el disc dur en cas de no poder arrencar el SOTA a causa del sistema d'arrencada estigui infectat Tasca: Busca un exemple de cada variant (gratis o de pagament) CLASSIFICACIÓ DEL PROGRAMARI ANTIMALWARE

Altres eines específiques: ➔Antispyware ◆Spyware = Programa espia, són aplicacions que recopilen informació del sistema per a enviar-la a través d'Internet, generalment a empreses de publicitat ◆Antispyware = Eina d'escriptori i en línia, que analitzen les nostres connexions de xarxa a la recerca de connexions no autoritzades ➔Ferramentes de bloqueig web ◆Informen de la perillositat dels llocs web que visitem ◆Diversos tipus: els que realitzen una anàlisi en línia, els que es descarrega com a extensió / plugin de la barra del navegador t els que s'instal·len com una eina d'escriptori Busca un exemple de cada ferramenta CLASSIFICACIÓ DEL PROGRAMARI ANTIMALWARE

Altres ferramentes específiques: ➔Ransomware ◆ransomware = el terme “ransom”, és una paraula anglesa que significa “rescat”. El ransomware és un programari d’extorsió: la seva finalitat és impedir-te usar el teu dispositiu fins que hagis pagat un rescat ◆Desxifradors de Ransomware = Eines per a recuperar arxius xifrats / segrestats per un malware de tipus ransomware Visita : https://noransom.kaspersky.com/es/ CLASSIFICACIÓ DEL PROGRAMARI ANTIMALWARE

ANTIVIRUS GNU/LINUX ClamAV és un antivirus que detecta troians, virus, malware i altres amenaces ➔http://www.clamav.net/ ➔Instal·lar clamAV : sudo apt install clamav ➔Actualitzar la base de dades ◆Parar el servei: sudo systemctl stop clamav-freshclam ◆Actualitzar la base de dades: $ sudo freshclam ◆Iniciar el servei: $ sudo systemctl start clamav-freshclam ➔Ejecutar l’ scan: $ clamscan -i -r /home ¿Qué signifiquen -i -r?

¿Qué es clamdtop? ¿Qué es freshclam? Scan Kali For Viruses With ClamAV

ANÀLISI ANTIMALWARE LIVE Antivirus LIVE CD són un conjunt independent d'eines que es poden iniciar des d'un CD o un disc flaix USB. ➔Pot utilitzar-se per a recuperar equips que no permeten el reinici o que estiguin infectats i no puguin funcionar amb normalitat ➔GNU/Linux i eina antivirus preinstal·lada

LIVE CD/USB Activitat: ● Instal·lar un antivirus LIVE CD ● Tria una distribució, instal·la i prova com funciona ● https://www.lifewire.com/free-bootable-antivirus-tools-2625785

LA MILLOR EINA ANTIMALWARE ➔A vegades, les eines antimalware no suposen una solució a una infecció: Detecten possibles amenaces però no corregeixen el problema ◆En aquests casos, és més efectiu fer tasques de monitoratge i control a fons dels processos d'arrencada, els que es troben en execució i els arxius que facin ús de les connexions de xarxa.

WINDOWS ➔Control de processos d’arrancada automàtica en l’inici: msconfig ➔Suite de ferramentes de microsoft tasques de manteniment, monitoratge i per a resoldre alguns problemes que podem trobar-nos amb Windows : sysinternals página oficial sysinternals ➔Control de connexions de xarxa amb netstat

¿Qué ferramenta s’ajusta millor a les meues necessitats? ➔Empreses desenvolupadores d’antimalware mostren estudis en els seus web demostrant que són millors que la seva competència ➔Usuaris que poden realitzar estudis, però la mostra de virus sol ser petita o poden malinterpretar els resultats ➔La tasa de detecció pot variar de mes a mes per el gran nombre de malware que se crea.

Cap antivirus és perfecte (no existeix el 100% de detecció) Els estudis amb més validesa, fets per empreses o laboratoris independents: ➔AV Comparatives ➔AV-Test.org ➔Virus Bulletin Els estudis perden validesa LA MILLOR EINA ANTIMALWARE

EDR o ED&R ➔Un sistema EDR, acrònim en anglès de Endpoint Detection & Response, és un sistema de protecció dels equips i infraestructures de l'empresa. Combina l'antivirus tradicional juntament amb eines de monitoratge i intel·ligència artificial per a oferir una resposta ràpida i eficient davant els riscos i les amenaces més complexes.

ED&R - INCIBE LA MILLOR EINA ANTIMALWARE

```bash
APT (Advanced Persistent Threat)
```

➔Advanced Threat Protection ➔ Consisteix en una mena d'atac informàtic que es caracteritza per realitzar-se amb sigil, romanent actiu i ocult durant molt de temps, utilitzant diferents formes d'atac LA MILLOR EINA ANTIMALWARE

---

# ✍️ Activitats pràctiques UT7

> **✍️ Activitat Pràctica 7.1 — (SAD) Antivirus Live**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: Antivirus Live També coneguts com antivirus usb, o antivirus portable
>
> ### 1. Cerca d'informació sobre que és un Antivirus Live, com s'utilitza i quins
>
> podem trobar disponibles per al seu ús gratuït Confecciona una llista d’almenys 6
>
> ### 2. Tria un d'ells
>
> - Realitza el procés d'instal·lació i prova de l'antivirus triat.
>
> Necessitarem arrancar un ordinador des d’un USB Les captures de la pràctica en este moment podem fer-les amb fotos de la càmera del mòbil. Documentar tot el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF.
>
> Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”

---
