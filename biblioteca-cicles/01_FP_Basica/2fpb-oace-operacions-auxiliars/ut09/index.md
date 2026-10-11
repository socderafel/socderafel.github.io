---
layout: default
title: "UD9: Seguretat Informàtica, Protecció i Projecte d'Explotació — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD9"
next_url: "ut0901.md"
next_label: "9.1 ➡️"
---

# UD9: Seguretat Informàtica, Protecció i Projecte d'Explotació

Principals amenaces de seguretat (virus, ransomware, phishing), protecció antivirus amb Windows Defender, gestió de contrasenyes robustes i 2FA, navegació segura i projecte integrador de posada a punt d'un equip informàtic.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **9.1** | **Amenaces de seguretat: virus, ransomware i phishing** | [**Llegir apartat →**](./ut0901.md) |
| **9.2** | **Protecció activa: l'antivirus Windows Defender** | [**Llegir apartat →**](./ut0902.md) |
| **9.3** | **Gestió de contrasenyes robustes i autenticació 2FA** | [**Llegir apartat →**](./ut0903.md) |
| **9.4** | **Navegació segura, certificats web i descàrregues fiables** | [**Llegir apartat →**](./ut0904.md) |
| **9.5** | **Projecte integrador d'explotació i posada a punt** | [**Llegir apartat →**](./ut0905.md) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 9.1 Amenaces de seguretat: virus, ransomware i phishing

La seguretat informàtica (**ciberseguretat**) no és només qüestió d'experts: la immensa majoria d'atacs i infeccions que pateixen les petites empreses i usuaris domèstics tenen èxit a causa de descits humans o falta de coneixement de les amenaces bàsiques.

### Principals tipus de programari maliciós (*Malware*)

1. **Virus informàtic clàssic:**
   - Programa dissenyat per infectar altres fitxers de l'ordinador i reproduir-se, provocant fallades de sistema o esborrat de dades.
2. **Cuc (*Worm*):**
   - No necessita la intervenció de l'usuari per propagar-se: aprofita fallades de seguretat de la xarxa local per saltar automàticament d'un ordinador infectat a tots els altres ordinadors connectats a la mateixa xarxa d'aula o d'oficina.
3. **Troià (*Trojan*):**
   - Es camufla sota l'aparença d'un programa aparentment útil o desitjable (com un joc gratuït, una pel·lícula o un activador pirata). En executar-lo, obre una porta posterior (*backdoor*) perquè els ciberdelinqüents prenguen el control remot de l'equip.
4. **Segrestador de dades (*Ransomware*):**
   - **L'amenaça més destructiva actualment per a empreses i institucions públiques.**
   - Xifra en silenci tots els documents, fotos i bases de dades de l'equip i de la xarxa mitjançant claus criptogràfiques complexes, i exigeix el pagament d'un rescat milionari en criptomonedes (Bitcoin) per recuperar les dades.
5. **Engany o pesca de dades (*Phishing*):**
   - No és un programa, sinó una tècnica d'**enginyeria social**.
   - Els atacants envien correus electrònics o SMS falsos suplantant bancs, empreses de missatgeria (Correus, SEUR) o l'Agència Tributària, induint la víctima a fer clic en un enllaç fraudulent per robar-li la contrasenya o les dades bancàries.

---

## 9.2 Protecció activa: l'antivirus Windows Defender

En versions antigues de Windows era obligatori instal·lar un antivirus de tercers per estar protegit. En els sistemes actuals Windows 10 i 11, Microsoft inclou de sèrie la suite de seguretat **Seguretat del Windows (*Windows Defender*)**, una de les més potents i ben valorades del món segons els laboratoris independents de ciberseguretat (AV-Test).

### Components clau de Seguretat del Windows
1. **Protecció en temps real:**
   - Inspecciona cada fitxer que es descarrega d'Internet o s'introdueix en un llapis USB abans que s'arribe a obrir. Si detecta la firma d'un virus conegut o un comportament sospitós, el bloqueja a l'instant i el posa en **quarantena**.
2. **Protecció basada en el núvol:**
   - Si apareix un virus nou mai vist abans, envia una mostra anònima als servidors d'intel·ligència artificial de Microsoft per analitzar-lo en segons.
3. **Protecció contra ransomware (Control d'accés a les carpetes):**
   - Impedeix que aplicacions no autoritzades puguen modificar o xifrar els fitxers guardats a les carpetes personals com *Documents* o *Imatges*.

---

### Tipus d'anàlisi manual amb Windows Defender
- **Anàlisi ràpida:** Revisa les carpetes d'arrencada i els processos actius en memòria RAM (triga uns 2-3 minuts).
- **Anàlisi completa:** Escaneja absolutament tots els fitxers de tots els discs durs connectats (triga entre 30 minuts i 2 hores).
- **Anàlisi personalitzada:** Permet fer clic amb el botó dret sobre un llapis de memòria USB o una carpeta concreta de descàrregues i triar: *"Analitza amb el Microsoft Defender"*.

---

## 9.3 Gestió de contrasenyes robustes i autenticació 2FA

Més del 80% dels accessos no autoritzats a comptes personals o corporatius es produeixen per l'ús de **contrasenyes febles o repetides** (com `123456`, `password` o la data de naixement).

### Regles d'or per a una contrasenya robusta
1. **Longitud mínima:** Un mínim de **12 a 16 caràcters** (la longitud és molt més important per frenar atacs de força bruta que la complexitat d'un sol símbol).
2. **Combinació de caràcters:** Barreja lletres majúscules (`A-Z`), minúscules (`a-z`), números (`0-9`) i caràcters especials (`#`, `!`, `?`, `%`).
3. **La tècnica de la frase de pas (*Passphrase*):** En lloc d'intentar recordar una combinació incomprensible de lletres, recorda una frase llarga i afegeix símbols:
   Exemple: `ElMeuGosSalvaLaClasse#2026!`
4. **MAI reutilitzis la mateixa contrasenya:** Si una web xicoteta de jocs pateix una filtració, els atacants provaran eixa mateixa clau al teu correu d'empresa o banc.

---

### Autenticació de Doble Factor (2FA - *Two-Factor Authentication*)
El doble factor és la mesura de seguretat més eficient que existeix:
- A més de la contrasenya habitual (allò que **saps**), el sistema demana un segon pas de verificació que només tu tens (allò que **tens**): un codi temporal de 6 xifres al teu telèfon mòbil (generat per aplicacions com Google Authenticator o Microsoft Authenticator) o una notificació d'aprovació.
- Encara que un ciberdelinqüent esbrine la teua contrasenya, **no podrà entrar al teu compte** perquè no tindrà el teu mòbil físic per posar el segon codi.

---

## 9.4 Navegació segura, certificats web i descàrregues fiables

El navegador web és la finestra principal de comunicació amb el món exterior, però també la principal via d'entrada d'amenaces si no es tenen hàbits prudents.

### Protocols web: HTTP vs HTTPS
- **HTTP (*HyperText Transfer Protocol*):** Les dades viatgen en text pla sense xifrar a través de la xarxa. Si et connectes a un formulari HTTP des del Wi-Fi d'una cafeteria, qualsevol persona connectada a la mateixa xarxa pot llegir la teua contrasenya o missatges.
- **HTTPS (*HTTP Secure*):** La connexió està xifrada mitjançant protocols criptogràfics **TLS/SSL**.
  - A la barra d'adreces apareix el símbol del **cadenat tancat**.
  - Garanteix dues coses: **privacitat** (ningú pot espiar la conversa) i **autenticitat** (un certificat digital emès per una autoritat de certificació reconeguda valida que realment estem parlant amb el servidor legítim i no amb un suplantador).

---

### Consells pràctics per a descàrregues fiables
1. **Descarrega sempre des de la font oficial:** Si vols instal·lar LibreOffice, ves a `libreoffice.org`; si vols VLC, ves a `videolan.org`. Evita pàgines intermediàries de descàrrega sospitoses que afegeixen instal·ladors amb publicitat enganyosa (*adware*).
2. **Desactiva les notificacions abusives:** Molts llocs web dubtosos demanen *"Fes clic a Permetre per demostrar que no ets un robot"*. En realitat estan demanant permís per inundar el teu escriptori d'anuncis emergents d'infeccions falses.
3. **Comprova les extensions dels fitxers descarregats:** Si has baixat un suposat document de text i l'arxiu acaba en `.exe`, `.scr` o `.vbs`, no l'obris sota cap concepte.

---

## 9.5 Projecte integrador d'explotació i posada a punt

### Objectiu del Projecte Final d'OACE
Com a projecte de final de curs de 2n d'FP Bàsica, cada alumne o parella rep un ordinador de taller en blanc i ha de completar tot el protocol professional de **posada a punt, explotació de programari i lliurament del servei tècnic**.

---

### Fases d'execució del Projecte

#### Fase 1: Recepció i comprovació de maquinari
1. Comprovació visual dels components: neteja de pols interna amb aire comprimit sec.
2. Arrencada de l'equip a la BIOS/UEFI: verificació que el processador, la memòria RAM i el disc dur són reconeguts amb els valors correctes.
3. Comprovació de salut S.M.A.R.T. del disc dur.

#### Fase 2: Instal·lació neta del Sistema Operatiu
1. Connexió de la memòria USB d'arrencada de taller.
2. Particionament del disc dur en format GPT.
3. Instal·lació neta de Windows 10/11 o Ubuntu Desktop.
4. Creació de dos comptes d'usuari:
   - Compte `administrador` protegit amb contrasenya forta de manteniment.
   - Compte `usuari` estàndard d'ús diari sense permisos administratius.

#### Fase 3: Instal·lació de controladors i actualitzacions
1. Execució de l'Administrador de dispositius per verificar que no queda cap triangle groc d'avaria (!).
2. Càrrega dels controladors de xarxa, so i targeta gràfica.
3. Execució de Windows Update fins que no queden pegats de seguretat pendents.

#### Fase 4: Paquet bàsic d'utilitats d'explotació
Instal·lació de les aplicacions d'oficina i suport imprescindibles:
- Paquet ofimàtic: **LibreOffice** (Writer, Calc, Impress, Draw).
- Compressor de fitxers: **7-Zip**.
- Navegador d'Internet secundari: **Mozilla Firefox** o Google Chrome.
- Lector de documents: **Adobe Acrobat Reader**.
- Reproductor multimèdia: **VLC Media Player**.
- Eina de suport remot: **AnyDesk**.

#### Fase 5: Seguretat i imatge de fàbrica final
1. Verificació de la protecció en temps real de Windows Defender.
2. Neteja de fitxers temporals d'instal·lació (`cleanmgr`).
3. Arrencada amb Clonezilla i **creació d'una imatge de seguretat neta de fàbrica** guardada al servidor de còpies de l'institut.

#### Fase 6: Redacció de la Memòria Tècnica de Lliurament
Lliurament del dossier d'explotació amb el full de característiques de l'equip, comprovacions realitzades, contrasenyes de lliurament en sobre tancat i signatura del tècnic responsable.

---

