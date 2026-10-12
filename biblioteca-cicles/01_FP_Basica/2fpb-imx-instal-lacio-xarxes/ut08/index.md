---
layout: default
title: "UD8: Manteniment, Diagnòstic i Seguretat en Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD8"
next_url: "ut0801.html"
next_label: "8.1 ➡️"
---

# UD8: Manteniment, Diagnòstic i Seguretat en Xarxa

Avaries físiques i lògiques, metodologia sistemàtica de resolució per capes, seguretat bàsica amb tallafocs personal, manteniment preventiu en racks i equips, i resolució de supòsits pràctics d'incidències.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **8.1** | **Tipus d'avaries en xarxa: fallades físiques vs lògiques** | [**Llegir apartat →**](./ut0801.html) |
| **8.2** | **Metodologia de resolució d'avaries pas a pas (de baix a dalt)** | [**Llegir apartat →**](./ut0802.html) |
| **8.3** | **Seguretat bàsica perimetral: el tallafocs (Firewall)** | [**Llegir apartat →**](./ut0803.html) |
| **8.4** | **Manteniment preventiu: neteja, etiquetatge i còpies de suport** | [**Llegir apartat →**](./ut0804.html) |
| **8.5** | **Pràctica: Resolució de supòsits d'incidències en xarxa** | [**Llegir apartat →**](./ut0805.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 8.1 Tipus d'avaries en xarxa: fallades físiques vs lògiques

Quan un usuari comunica que "no li funciona Internet" o que "ha caigut la xarxa", el problema pot deure's a múltiples causes. Per poder reparar la incidència amb rapidesa i eficiència, el primer pas és saber classificar l'avaria entre **física** o **lògica**.

### 1. Avaries Físiques (de maquinari o cablejat)
Són aquelles relacionades amb el suport material, els connectors, els equips electrònics o l'alimentació elèctrica:
- **Cable de xarxa danyat:** Aixafament per la pota d'una cadira o taula, estirades brusques que trenquen els fils interns de coure.
- **Pestanya del connector RJ45 trencada:** El connector no queda subjectat a la roseta o a la targeta i queda solt, perdent contacte amb el moviment.
- **Fallada en el port del Switch o targeta NIC danyada:** LEDs d'enllaç completament apagats.
- **Font d'alimentació del switch o router avariada o desendollada:** L'aparell no s'encén.
- **Distància excessiva del cable:** Tirades superiors a 100 metres que degraden el senyal per atenuació.

### 2. Avaries Lògiques (de programari o configuració)
El cablejat i els equips físics funcionen perfectament, però hi ha un error en els paràmetres de comunicació:
- **Adreça IP duplicada:** Dos ordinadors tenen assignada la mateixa IP manualment.
- **Màscara de subxarxa incorrecta:** L'ordinador creu que equips de la seua pròpia aula estan a una altra xarxa externa.
- **Porta d'enllaç (Gateway) errònia:** L'ordinador pot parlar amb els altres equips de l'aula, però no pot eixir a Internet.
- **Servidors DNS caiguts o mal configurats:** L'equip té connexió a Internet però no pot traduir noms com `google.es`.
- **Tallafocs (*Firewall*) massa restrictiu:** Bloqueja els ports necessaris per a les aplicacions.
- **Controlador de la targeta de xarxa desactualitzat o danyat** al sistema operatiu.

---

## 8.2 Metodologia de resolució d'avaries pas a pas (de baix a dalt)

Davant d'un problema de xarxa, un tècnic mai ha de canviar paràmetres a l'atzar. La metodologia professional més eficient és seguir el model de **resolució ascendent (*Bottom-Up*)**, comprovant capa a capa des de la més bàsica física fins a la superior d'aplicació:

```
[ Capa 4: Aplicació ]  --> 4. Navegador, DNS, credencials
[ Capa 3: Xarxa ]      --> 3. Ping al Gateway, IP i màscara
[ Capa 2: Enllaç ]     --> 2. Adreça MAC, port del switch, ARP
[ Capa 1: Física ]     --> 1. LEDs, cables RJ45, tensió elèctrica
```

---

### Protocol d'actuació pas a pas

#### Pas 1: Verificació de la Capa Física (Capa 1)
- L'ordinador i el switch estan encesos?
- El cable de xarxa està ben endollat als dos extrems fins a fer clic?
- S'encén el LED verd d'enllaç (*Link*) a la targeta de xarxa de l'ordinador i al port del switch?
- Si el LED està apagat: canvia el cable de pegat per un altre que sàpigues que funciona, o prova a endollar el cable en un altre port lliure del switch.

#### Pas 2: Verificació de la Capa d'Enllaç i Xarxa local (Capes 2 i 3)
- Obre la consola i executa `ipconfig`. L'ordinador té una IP vàlida de l'aula (com `192.168.1.XX`) o té una IP que comença per `169.254.X.X`?
  > [!WARNING]
  > Si un equip té una IP del tipus `169.254.X.X` (adreces APIPA), significa que **no ha pogut comunicar-se amb el servidor DHCP**.
- Fes `ping 127.0.0.1` per verificar la targeta interna.
- Fes `ping 192.168.1.1` (a la porta d'enllaç). Si respon, la connexió física i lògica amb el router és perfecta!

#### Pas 3: Verificació de l'eixida a Internet i DNS (Capes 3 i 4)
- Fes ping a una IP pública numèrica coneguda a Internet:
  ```cmd
  ping 8.8.8.8
  ```
  - Si respon `8.8.8.8`: Tens connexió directa a Internet!
- Ara fes ping pel nom de domini:
  ```cmd
  ping www.google.es
  ```
  - Si no respon pel nom però sí per IP numèrica: **L'avaria és exclusivament del servidor DNS!** (Revisa la configuració dels servidors DNS de l'equip).

---

## 8.3 Seguretat bàsica perimetral: el tallafocs (Firewall)

El **tallafocs** o **Firewall** és un mecanisme de seguretat fonamental que inspecciona tot el trànsit de xarxa que intenta entrar o eixir d'un equip o d'una xarxa local, permetent o bloquejant el pas dels paquets segons un conjunt de regles de seguretat establertes.

### Tipus de tallafocs

1. **Tallafocs de maquinari (perimetral):**
   - Dispositiu físic dedicat o integrat al router d'eixida de l'institut o empresa.
   - Protegeix tota la xarxa local corporativa davant d'intents d'atac o escanejos massius provinents d'Internet.

2. **Tallafocs personal (per programari):**
   - Aplicació integrada dins del sistema operatiu de cada ordinador (com ara el **Tallafocs de Windows Defender** o `ufw` en Linux).
   - Protegeix l'equip fins i tot davant d'amenaces provinents d'altres ordinadors infectats de la mateixa xarxa local de l'aula.

---

### Regles de filtratge en el tallafocs de Windows
El tallafocs avalua els paquets basant-se en:
- **Direcció del trànsit:**
  - *Regles d'entrada (*Inbound*):* Controlen qui pot connectar-se als serveis de l'equip des de fora (per exemple, si tenim una carpeta compartida o un servidor web local).
  - *Regles d'eixida (*Outbound*):* Controlen a quins servidors exteriors tenen permís per connectar-se les aplicacions del nostre ordinador.
- **Tipus de xarxa o perfil:**
  - *Perfil de Xarxa pública:* Aplica màxima seguretat (bloqueja carpetes compartides i ping) per quan ens connectem a Wi-Fi d'aeroports o cafeteries.
  - *Perfil de Xarxa privada:* Permet compartir fitxers i impressores entre equips de confiança de la mateixa llar o oficina.
- **Ports i protocols:**
  - Permet obrir ports específics (per exemple el port 80/443 per a web, o port 445 per a carpetes compartides) o bloquejar aplicacions concretes.

---

## 8.4 Manteniment preventiu: neteja, etiquetatge i còpies de suport

El **manteniment preventiu** comprèn el conjunt de tasques planificades periòdicament per mantindre la infraestructura de xarxa en condicions òptimes de funcionament, allargant la vida dels equips i evitant avaries imprevistes abans que arriben a produir-se.

### Tasques essencials de manteniment preventiu

#### 1. Neteja i control tèrmic de l'armari Rack
- Els ventiladors dels servidors i switches aspiren contínuament aire de l'aula, acumulant pols i borrissol als filtres, reixetes i circuits interns.
- **Accions:** Netejar periòdicament els filtres del rack amb un aspirador adequat o pots d'aire comprimit sec. Comprovar que els ventiladors de sostre giren suaument i que la temperatura interior es manté entre 18°C i 24°C.

#### 2. Etiquetatge i gestió del cablejat
- Un armari rack amb desenes de cables penjant sense identificar és un malson per a qualsevol reparació.
- **Normativa d'etiquetatge (TIA-606):**
  - Cada presa de roseta d'usuari ha de portar una etiqueta clara (Exemple: `RACK1-P01-ROS12`).
  - El mateix codi ha d'estar marcat a l'altre extrem del cable al panell de pegat.
  - S'han d'utilitzar guies horitzontals i brides de velcro (evitant brides de plàstic molt estretes que puguen aixafar els cables de dades).

#### 3. Còpies de seguretat de la configuració de routers i switches
- Si un router o switch es fa malbé per una tempesta elèctrica i cal substituir-lo per un de nou, configurar-lo des de zero pot costar hores de feina.
- **Bona pràctica:** Guardar sempre un fitxer de còpia de seguretat (*backup config file*) de la configuració de cada dispositiu de xarxa en un llapis de memòria o al núvol del departament.

---

## 8.5 Pràctica: Resolució de supòsits d'incidències en xarxa

### Objectiu de la Pràctica
Posar en pràctica les habilitats de diagnòstic i resolució d'avaries enfrontant-se a tres supòsits pràctics d'incidències reals provocades en l'aula de laboratori.

---

### Cas 1: L'equip de Maria no navega ni connecta amb ningú
- **Simptomatologia:** El navegador dóna error de connexió. A la barra de tasques apareix la icona de la bola del món o el triangle groc de xarxa sense connexió.
- **Diagnòstic del tècnic:**
  1. Mirada a la part posterior de la torre: El LED verd de la targeta de xarxa està **completament apagat**.
  2. Seguiment del cable: En revisar el conectoritzat, es descobreix que la pestanya de plàstic del connector RJ45 estava trencada i el cable s'havia descavalcat 2 mil·límetres en moure la cadira.
- **Resolució:** Es canvia el cable per un altre o es crimpa un nou connector RJ45 mascle. El LED s'encén en verd i la xarxa torna a funcionar immediatament.

---

### Cas 2: L'equip de Joan fa ping a 8.8.8.8 però no obre cap web
- **Simptomatologia:** En escriure `ping 8.8.8.8` al CMD, la resposta és correcta (`Temps = 18 ms`). En canvi, quan intenta entrar a `www.elpais.com` o `www.google.es`, el navegador diu *"No s'ha pogut trobar l'adreça IP del servidor (DNS_PROBE_FINISHED_NXDOMAIN)"*.
- **Diagnòstic del tècnic:**
  1. L'eixida a Internet funciona (perquè respon la IP de Google).
  2. S'executa `ipconfig /all`: Al camp *Servidors DNS* apareix l'adreça `192.168.1.250` (un servidor antic que ja no existeix o està apagat).
- **Resolució:** Es modifiquen les propietats de la targeta de xarxa i es posen els servidors DNS de Google (`8.8.8.8` i `8.8.4.4`) o s'activa DHCP automàtic. La navegació es restableix al segon.

---

### Cas 3: IP configurada fora de subxarxa
- **Simptomatologia:** L'equip té configurada manualment la IP `192.168.2.45` amb màscara `255.255.255.0`, mentre que tota la resta de l'aula i el router estan a la xarxa `192.168.1.0/24` (router `192.168.1.1`).
- **Diagnòstic:** En fer ping a la porta d'enllaç diu *"Host de destinació inaccessible"*.
- **Resolució:** Es canvia l'adreça a `192.168.1.45`, dins del rang de la mateixa subxarxa. El ping respon correctament.

---

