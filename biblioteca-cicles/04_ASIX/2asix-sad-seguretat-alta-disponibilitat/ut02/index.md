---
layout: default
title: "UD2 — Biometria, Seguretat Física i Còpies de Seguretat · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut0105.html"
prev_label: "⬅️ 1.3 Elements vulnerables"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Biometria - Seguretat Física - Còpies de Seguret ➡️"
---

# 📘 UD2 — Biometria, Seguretat Física i Còpies de Seguretat (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Biometria - Seguretat Física - Còpies de Seguret**](./ut0201.md)
- [**2.2 Concienciació en ciberseguretat**](./ut0202.md)
- [**2.3 Preparació Màquines Virtuals per a pràctiques po**](./ut0203.md)

---

# 2.1 Biometria - Seguretat Física - Còpies de Seguret

---

SEGURETAT FÍSICA Control d’Accés

DISSENY D'INSTAL·LACIONS ● Amenaces físiques externes – Inundacions – Incendis – Terratrémols – Huracans – Tsunamis – ……. ● Amenaces físiques internes – Sobrecalfament – Camps electromagnètics – Humitat – Pols – Pressió

CONTROL D’ACCÉS ● Aplicació de contramesures tals com barreres físiques o procediments de control que previnguen amenaces contra els recursos que es pretenen protegir, disminuint els riscs – Robatoris – Sabotatges – Fraus Control d’accés físic (portes amb dispositiuos d’autenticació) Control d’accés a espais virtuals (pag. Web, aplicació, servei de correu, etc...)

BIOMETRIA

BIOMETRIA ● Definició: Reconeixement inequívoc de persones basat en un o més trets conductuals o físics intrínsecs ● l'«autenticació biomètrica» o «biometria informàtica» és l'aplicació de tècniques matemàtiques i estadístiques sobre els trets físics o de conducta d'un individu, per a la seua autenticació, és a dir, «verificar» la seua identitat ● (estàtiques) Les empremtes dactilars, la retina, l'iris, els patrons facials, ● (dinàmiques) pas, tecleig, veu

Identificació vs Autenticació Usuari, password Targeta , PIN Petjada dactilar

Autenticació vs Autorització

Factors d’autenticació ● Alguna cosa que saps: Contrasenya ● Alguna cosa que tens: Token (tg, usb, dipositiu,...) ● Alguna cosa que eres: Tret físic, o dinàmic ➔ A2F (2FA) ➔ AMF (MFA) ➔ TOTP MFA (video)

SEGURETAT FÍSICA Còpies de Seguretat

Còpies de Seguretat Definició: Una còpia de seguretat és un procés mitjançant el qual es duplica la informació existent d'un suport a un altre, amb la finalitat de poder recuperar-los en cas de fallada del primer allotjament de les dades ¿ Perquè fer CS ? Continuïtat de negoci ¿ De que fer CS ? Classificar informació (confidencial, útil, impacte) ¿ Quan?

◆ RAID (en temps real) --> És una CS ? ◆ Núvol (en temps real) --> És una CS ? ◆ Completa (definir temps entre CS) ◆ Diferencial (definir temps entre CS) ◆ Incremental (definir temps entre CS)

Còpies de Seguretat ¿ On ? ◆Dins de l’organització ( Cinta, HD extern, NAS ) ◆Fora de la organització (Cloud) ◆Mixtes ● D2D2T (Disk-Disk-Tape) ● D2D2C (Disk-Disk-Cloud) Controlar el temps necessari Controlar l’espai necessari ◆Estratègia 3-2-1 Sempre s'han de realitzar i mantindre tres còpies de seguretat de les dades a recolzar. S'utilitzaran almenys dos suports diferents per a realitzar aquestes còpies i un d'ells ha d'estar sempre fora de l'empresa (en l'entorn actual de treball, en el núvol).

Còpies de Seguretat ¿ És necessari xifrar/encriptar ? ¿ Quan Revisar, Comprovar còpies ? ¿ Quan de temps conservar còpies? ¿ Com controlar/identificar las còpies? ¿ Com informar del èxit/fracàs de una tasca de CS ? ¿ Com gestionar l’esborrat segur ? ¿ Com protegir magatzems de CS davant atacs ransom?

Còpies de Seguretat Últims passos  Automatitzar processos de CS al màxim  Designar a responsable de supervisió  Designar a operador de còpia (canvis de suports, etc...)  Assignar permisos de còpia a la informació definida  Revisar copia d’informació “bloquejada” (BBDD, etc.. )  Documentar els processos de còpia i de restauració

El plan de Backup És la definició i descripció de tots els punts anteriorment exposats i la seua oficialització per part dels responsables de l'àrea de seguretat. És un document oficial dins de l’organització

Snapshots També denominades instantànies de volum o VSS (volum snapshot service) són un element de seguretat informàtica complementàries a les còpies de seguretat o còpies de seguretat “mai es recomana una VSS com a únic sistema de seguretat “

SEGURETAT FÍSICA Fonts d’alimentació

SAI , UPS Problemes amb el subministre elèctric ◆Tall ◆Baixada de tensió momentània ◆Pics de tensió ◆Baixada de tensió sostinguda ◆Pujada de tensió sostinguda ◆Soroll elèctric ◆Variació de freqüència ◆Transitoris, micropics ◆Distorsió armònica

SAI , UPS Tipus ◆SAI offlline ◆SAI inline ( interactiu ) ◆SAO online

SAI , UPS ◆SAI offlline

SAI , UPS ◆SAI inline

SAI , UPS ◆SAI online

SAI , UPS Càlcul potència Els fabricants solen utilitzar el concepte de potencia aparent, que se mesura en VA (voltampere), Volts x Amperes KVA (llig kàbeas) = 1000 VA Potencia eficaç, Watt = W

w=VA⋅0,75 VA= W 0,75

SAI , UPS Altres tipus de SAI

- AVR: Un AVR és un regulador de voltatge automàtic. el funcionament

és similar al d'un SAI interactiu però aquests dispositius no disposen de bateries.

- SAI DC: SAI de corrent continu a 12V - encaminador, switch, VOIP,

alarmes, descodificadors, videovigilància

- SAI Trifàsic: Entrada trifàsica i eixida monofàsica o trifàsica, també

anomenats Sais Tri-bonic o Tri-tri

- SAI Escalable: Ofereix la possibilitat de connexió en paral·lel que

permet maximitzar la seua potència i redundància. En un armari estàndard es poden instal·lar diferents mòduls per a sumar potència. Permeten la substitució dels mòduls en calent sense deixar de subministrar energia

PDU Power Distribution Unit Des de simples regletes de connexió fins a complexes estructures per a centres de dades (CPD) que permeten monitoratge i gestió remota de càrrega elèctrica

Grups Electrògens Davant un tall prolongat d'energia, el SAI pot resultar insuficient, i un grup electrogen pot ser l'element autònom que ens subministre energia fins que es restablisca el subministrament normal. Definició: És un aparell la funció del qual és convertir la capacitat calorífica en energia mecànica i posteriorment en elèctrica Utilitzen combustibles fòssils (Dièsel, Gasolina, Gas ) ● Arranc manual (Fins 5 KVA) ● Arranc automàtic

SEGURETAT FÍSICA Disseny del CPD

CPD Centre de Processament de Dades ● Requisits geogràfics – Possibilitat de creixement del CPD – Entrades àmplies i accessibles (nous equips) – Regió sísmicament estable – Zona allunyada d'inundacions (estàndard TIA 942) – Protecció davant incendis – Accés restringit a personal no autoritzat

CPD ● Requisits tècnics – Temperatura i humitat – Pols i pressió – Redundància subministre elèctric – Redundància accés a internet – Monitoratge – Equip humà de suport 24/7

CPD ● Components – Computació – Emmagatzematge – Xarxes – Seguretat

CPD Segons ANSI, TIA ( TIA-942-Standard_OnePager-110220.pdf ) ● Tipus – Rated-1: Basic Site Infrastructure – Rated-2: Redundant Component Site Infrastructure – Rated-3: Concurrently Maintainable Site Infrastructure – Rated-4: Fault Tolerant Site Infrastructure

---

# 2.2 Concienciació en ciberseguretat

AVL hacker [hákeɾ] [angl.] m. i f. INFORM. Persona que té un gran coneixement de les xarxes i els sistemes informàtics i un viu interés per explorar-ne les característiques i detectar- ne les vulnerabilitats.

CiberSeguretat ¿ Món digital vs Món real ? Món digital vs Món físic No faces en internet el que no faries en el món físic

CiberSeguretat On ? Ordinadors Mòbils Núvol Instal·lacions ( CPD ) Xarxes telemàtiques Persones (enginyeria social) I més .....

CiberSeguretat Hacker ≠ Ciberdelinqüent Atacs a persones Atacs a corporacions Atacs a estats

Motius Guanyar diners Ciberactivisme Ciberespionatge Ciberguerra Desafiament tècnic Venjança (corea del nord 2021) Altres .....

Exemples recents Atac a Ajuntament de Sevilla (setembre 23) Atac a Hospital Clínic de Barna (març 2023) Euskaltel ( maig 2023) Atacs a persones amb SMS,email,telefonades.. ¡ ¡ C O N T I N U A M E N T ! !

Exemples recents Uber, nvidia, microsoft, rockstar ( octubre2022) Atac a govern de Costa Rica (abril 2022) Distribuidora de fuel en Alemania ( feb 2022) Infraestructures crítiques Ucraina (feb 2022) ¡ ¡ C O N T I N U A M E N T ! !

Exemples recents Atac a UOC (desembre 21) Atac a MediaMarkt (novembre 21) Atac a UAB (octubre 21) Atac a SEPE (març 21) Atacs a persones amb SMS,email,telefonades.. ¡ ¡ C O N T I N U A M E N T ! !

Exfiltracions Informació, passwords, .. Phone House ( abril ) Facebook, LinkedIn, NetFlix Fedex Dark Web 8,400 mill passwords (juny) ¿¿LastPass?? (desembre) Have I been pwned

Incidents i Atacs ●Vulnerabilitat (Instal·lacions, Hw , Sw, Xarxes, Persones) ●Amenaça (Cibernètica, Humana, Ambiental) ●Atac / CiberAtac / Incident ●Explotació

Vulnerabilitat en persones ●Reciprocitat ●Urgència ●Consistència o costum ●Confiança ●Autoritat com a via per a la suplantació d'identitat ●Validació social o necessitat d'aprovació del col·lectiu

Tipus d’atacs ●Ciberassetjament ●Spam ●Phishing, smishing, vishing, (Enginyeria social) exemple ●Spear phishing incibe ●Deep fake incibe ●Baiting (pendrive en pàrquing) ●Dumpster Diving o Trashing (rebuscar en el fem)

Desinformació ●Fake News ●Deep Fake

https://bit.ly/3AKYSaG https://www.osi.es/es/actualidad/blog//02/el-peligro-de-las-urls-acortadas-vigila-donde-haces-clic

Pixel fantasma / spam / scam / phising

●Password complexa ●Password diferent per a serveis/apps diferents ●Canvia password cada cert temps ●Tanca la sessió, sobretot en ordinadors compartits ●No reutilitzes passwords, sobretot el del teu compte estrela Protexeig el teu compte estrela

GRATIS ??? !!!!!! ●Comprova autenticitat / nom no sospitós ●Comprova password del local ●Utilitza VPN Xarxes wifi públiques

Wallapop, Facbook marketplace, WhatsApp, Instagram, ... ●¡¡ Ni tan sols si ens envien un altre DNI per que ens fiem !!! (pot ser fals, o d’altra persona estafada) NO Facilitar DNI per internet

Aquesta estafa està tornant-se cada vegada més comuna en plataformes com *Milanuncios, *Vinted o *Wallapop El delinqüent (comprador) opta per demanar els diners en compte de donar-li'ls al venedor i aquest últim, sense adonar-se, accepta l'operació. Bizum Invers Perill , estafa !!

Cas: Rebem un correu electrònic des d’un suposat advocat o notari estranger on ens informa que un avantpassat nostre en ha deixat una herència Estafa nigeriana

Cas: Rebem un correu electrònic, o sms, o missatge d’una xarxa social, on, bé siga real o simulat, un actor maliciós intenta fer-nos xantatge amb la finalitat d'obtindre diners o favors sexuals. Sexting, Grooming, Xantatge

Molta gent dona per fet que una connexió HTTPS significa que una web és segura. La veritat és que els llocs maliciosos, especialment els de phishing, usen cada vegada més HTTPS. El protocol HTTPS no garanteix la seguretat

Detenidos por cambiar sus notas tras hackear el sistema informático de la universidad (2018, UPV) 21 meses de prisión para los dos estudiantes de la UPV acusados de hackear a 40 profesores y cambiar sus notas (2020, Valencia) Hasta 20 años de cárcel por cambiar notas y robar exámenes mediante hackeos (2016, Iowa) . . .

Keylogger

Pendrives perduts ???

Consisteix a mirar a la víctima per damunt del muscle mentre utilitza el seu dispositiu per a aconseguir informació confidencial (num. PIN, clau d’accés, ...) Shoulder Surgfing

Ès quan algú es cola en una àrea restringida utilitzant a una altra persona Els tailgaters solen aprofitar-se dels empleats incauts Tailgating

Comprova sovint la petjada digital ● Utilitza un altre navegador a l’habitual Practica l’EgoSearch

El typosquatting és un fenomen pel qual un usuari acaba en una pàgina web que no és la que estava buscant pel fet de teclejar malament per error la URL en el seu navegador. Els cibercriminals sovint aprofiten aquesta situació per a portar a l'usuari a una pàgina web maliciosa en reservar dominis similars als legítims Compte amb el Typosquatting

Airtag o similars ...

Els estafadors que usen aquesta estafa realitzen trucades internacionals i deixen una trucada perduda, amb l'esperança que se'ls retorne la cridada. Alguns usuaris opten per retornar la crida i acaben cobrant-los per cridar a l'estranger i a un número premium. Wangiri ??¿¿??¿¿ Cridada perduda d’un desconegut

és un atac que implica la transferència del número de telèfon d'algú a una nova targeta SIM, utilitzada pels actors d'amenaces per a obtindre accés a comptes protegits amb autenticació de dos factors (2FA) basada en SMS SIM Swap

Tècnica de pixelar

Cas: Rebem un correu electrònic des del nostre proveïdor demanant l'abonament de la factura que ja li devem, amb la particularitat que sol·liciten el pagament en un un compte bancari diferent a l'habitual . . . Man in the Middle

Mai haurem de copiar comandos des de la web directament en la nostra terminal. Atac de Copia & Pega https://youtu.be/LFXZqQL4vTY

Temps entre atacs 2020 2021 +435 %

Però, .. i que podem fer una vegada hem sigut atacats ??

Demanar ajuda

Si cal denunciar...

Preparar-se per a futurs atacs...

Resiliència La resiliència és el procés d'adaptar-se bé a l'adversitat, a un trauma, tragèdia, amenaça, o fonts de tensió significatives, com a problemes familiars o de relacions personals, problemes seriosos de salut o situacions estressants del treball o financeres En persones ●Conscienciació ●Formació ●Entrenament

CTFs – Capture the flag !! una sèrie de desafiaments informàtics enfocats a la seguretat !! Atenea.CCN-CERT incibe.es/academiahacker (juny) CiberLiga (Novembre) JNIC (Maig-Juny) HackOn (Febrer) TomatinaCon (Agost) CyberCamp CTFBatoi CTFMorteruelo .... i més ....

Disciplines Criptografia Forense Hardening Osint Enginyeria inversa Seguretat web Esteganografia Explotació (msf) Programació

Conceptes Malware, virus, cuc, troià, backdoor, bomba lògica Smshing, vishing, phishing, stalkeware, deepfake

```bash
Apt (stuxnet)
```

Conceptes Ciberdelinqüència Ciberpatrullatge Ciberguerra Ciberespai (camps de batalla)

Conceptes Cryptos Blockchain Mineria - núvol (45.000€ !! ) Smart Contracts Smart Property

Conceptes Deep Web – Dark Web – DarkNet Anonimat (TEDx) TOR Freenet I2P Honeypots

Conceptes Sniffing MitM WiFi oberta SDR ( Ràdio Definida per Software ) Atac a GSM amb RTL-SDR

Compliance La reforma del nostre Codi Penal de 2010, en la qual es va introduir per primera vegada la responsabilitat penal de les persones jurídiques, ha reforçat la necessitat que les empreses espanyoles de qualsevol grandària compten amb «compliance programmes» o programes de compliment

Consells finals ●Formarse ●Desconfiar ●Previndre ●No dir / donar «mai» claus ni dades ●Ser assertiu

creative commons MOLTES GRÀCIES PER LA VOSTRA ATENCIÓ Presentació elaborada per Enrique Iborra Llicència Creative Commons Imatges amb llicència d’ús gratuïta Reconeixement-CompartirIgual 4.0 Internacional

---

# 2.3 Preparació Màquines Virtuals per a pràctiques po

En esta activitat no cal entregar document, però servirà de preparació per a futurs treballs

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: Preparar MV’s per a pràctiques Aquesta activitat consta de la instal·lació de Màquines Virtuals preparades per a ser utilitzades en les pràctiques del curs.

¡¡ ATENCIÓ !! NO REUTILITZAR MÀQUINES D'ALTRES MÒDULS

### 1. Instal·lació d’ Hipervisor VirtualBox (si no la teniu ja)

### 2. Instal·lació d'extensions del VirtualBox (si no la teniu ja)

### 3. Instal·lació d'una Màquina Virtual amb Kali Linux 64 bits (des d’imatge .iso)

### 4. Instal·lació d'una Màquina Virtual amb Windows 10 Professional 64bits. (No farà

falta activar-ho ja que ho utilitzarem per fer proves)

### 5. Actualitzar els Sistemes Operatius de les Màquines Instal·lades

### 6. Realitzar OVAs, (exportar màquines)

- Realitzar snapshots de les màquines.

Posteriorment, en començar una pràctica, tornarem a l'estat inicial, amb la màquina recentment instal·lada i actualitzada. • Tornant enrere a una snapshot “estable” • Restaurant la OVA

---
