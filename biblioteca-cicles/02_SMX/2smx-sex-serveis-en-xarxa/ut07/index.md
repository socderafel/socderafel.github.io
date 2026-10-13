---
layout: default
title: "Serveis en Xarxa — UT07 Serveis de Correu Electrònic (SMTP, IMAP, POP3)"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT07"
---

# UT07 — Serveis de Correu Electrònic (SMTP, IMAP, POP3)

El correu electrònic és un dels sistemes de comunicació més antics i utilitzats d'Internet. Funciona com un sistema distribuït de bústies i encaminament de missatges estructurat en tres capes d'agents i diversos protocols especialitzats.

---

## 📌 1. Arquitectura del Servei de Correu

L'enviament i recepció d'un correu electrònic requereix la interacció coordinada de tres components bàsics:

```mermaid
graph LR
    subgraph "ORGANITZACIÓ EMISSORA"
        MUA1["👤 Client Emissor (MUA)<br/>Outlook / Thunderbird"] -->|Envia per SMTP (Port 587)| MTA1["🖥️ Servidor Correu Emissor (MTA)<br/>Postfix / Exchange"]
    end

    MTA1 -->|Envia per SMTP (Port 25)<br/>Consulta registre MX a DNS| MTA2["🖥️ Servidor Correu Receptor (MTA)<br/>Postfix"]

    subgraph "ORGANITZACIÓ RECEPTORA"
        MTA2 -->|Lliurament intern| MDA["📬 Agent de Bústies (MDA)<br/>Dovecot"]
        MDA -->|Emmagatzema a la bústia| BOX["📁 /var/mail/ o Maildir/"]
        MUA2["👤 Client Receptor (MUA)"] -->|Consulta per IMAP/POP3 (Port 993/995)| MDA
    end
```

### Components de l'Arquitectura:
- **MUA (*Mail User Agent*):** El client de correu de l'usuari final (Mozilla Thunderbird, Microsoft Outlook o aplicacions web com Roundcube/Gmail).
- **MTA (*Mail Transfer Agent*):** El servidor que s'encarrega d'encaminar i transmetre els correus d'un servidor a un altre a través d'Internet mitjançant el protocol **SMTP** (ex.: Postfix, Sendmail, Exim).
- **MDA (*Mail Delivery Agent*):** El servidor encarregat d'agafar el correu rebut pel MTA i dipositar-lo físicament a la bústia de l'usuari al disc, així com oferir accés als clients mitjançant **IMAP o POP3** (ex.: Dovecot).

---

## 📌 2. Protocols de Transport de Correu i Ports Estàndard

| Protocol | Nom Complet | Funció Principal | Ports Estàndard |
| :--- | :--- | :--- | :---: |
| **SMTP** | *Simple Mail Transfer Protocol* | Enviament i relleu de missatges entre servidors. | **25** (servidors), **587** (enviament autenticat STARTTLS), **465** (SMTPS) |
| **POP3** | *Post Office Protocol v3* | **Descarrega els correus** al client i normalment els esborra del servidor. | **110** (clar), **995** (POP3S xifrat) |
| **IMAP** | *Internet Message Access Protocol* | **Sincronitza les bústies** i carpetes mantenint sempre els correus al servidor. Permet múltiples dispositius alhora. | **143** (clar), **993** (IMAPS xifrat) |

---

## 📌 3. Seguretat Antispam en DNS: SPF, DKIM i DMARC

Per a evitar que tercers puguen enviar correus falsificant el nostre nom de domini (*Email Spoofing*), s'incorporen tres mecanismes basats en registres DNS públics:

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura del Servei de Correu i Tríada Antispam DNS</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Flux complet de missatgeria des del client emissor fins a la bústia amb validació SPF, DKIM i DMARC</p>
  </div>
  <svg viewBox="0 0 860 270" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="mailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Secció Esquerra: Flux de Correu -->
    <rect x="20" y="20" width="410" height="230" rx="8" fill="url(#mailGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="225" y="46" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">AGENTS DEL SERVEI DE CORREU</text>
    <line x1="35" y1="60" x2="415" y2="60" stroke="#334155"/>

    <text x="35" y="85" fill="#e2e8f0" font-size="11" font-weight="bold">1. MUA (Mail User Agent):</text>
    <text x="35" y="103" fill="#94a3b8" font-size="10">Thunderbird / Outlook / Webmail. Envia per SMTP (587).</text>

    <text x="35" y="130" fill="#e2e8f0" font-size="11" font-weight="bold">2. MTA (Mail Transfer Agent):</text>
    <text x="35" y="148" fill="#94a3b8" font-size="10">Postfix / Exchange. Encaminament entre servidors (SMTP 25).</text>

    <text x="35" y="175" fill="#e2e8f0" font-size="11" font-weight="bold">3. MDA (Mail Delivery Agent):</text>
    <text x="35" y="193" fill="#94a3b8" font-size="10">Dovecot. Diposita a Maildir/ i serveix per IMAP (993) / POP3.</text>

    <rect x="35" y="210" width="380" height="28" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="225" y="228" fill="#34d399" font-size="9.5" text-anchor="middle">Format Maildir: Cada correu és un fitxer individual (sense bloquejos de disc)</text>

    <!-- Secció Dreta: Validació DNS Antispam -->
    <rect x="445" y="20" width="395" height="230" rx="8" fill="url(#secGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="642" y="46" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">PROTECCIÓ ANTISPAM BASADA EN DNS</text>
    <line x1="460" y1="60" x2="825" y2="60" stroke="#334155"/>

    <rect x="460" y="75" width="365" height="45" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="475" y="94" fill="#38bdf8" font-size="11" font-weight="bold">🛡️ SPF (Sender Policy Framework)</text>
    <text x="475" y="110" fill="#cbd5e1" font-size="9.5">TXT a DNS: v=spf1 ip4:192.168.1.10 -all (Llista blanca d'IPs)</text>

    <rect x="460" y="130" width="365" height="45" rx="6" fill="#1e293b" stroke="#c084fc" stroke-width="1"/>
    <text x="475" y="149" fill="#c084fc" font-size="11" font-weight="bold">🗝️ DKIM (DomainKeys Identified Mail)</text>
    <text x="475" y="165" fill="#cbd5e1" font-size="9.5">Firma criptogràfica asimètrica a la capçalera (integritat del cos)</text>

    <rect x="460" y="185" width="365" height="45" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
    <text x="475" y="204" fill="#fbbf24" font-size="11" font-weight="bold">📋 DMARC Policy</text>
    <text x="475" y="220" fill="#cbd5e1" font-size="9.5">Instrucció al receptor: p=reject o p=quarantine si falla SPF/DKIM</text>
  </svg>
</div>

- **SPF (*Sender Policy Framework*):** Registre de tipus TXT que indica: `v=spf1 ip4:192.168.1.10 -all`.
- **DKIM (*DomainKeys Identified Mail*):** Signatura digital amb clau privada al servidor emissor que es verifica amb la clau pública publicada al DNS.
- **DMARC:** Informa els servidors de destí de la política estricta que han d'aplicar davant missatges sospitosos.

---

## 📌 4. Desplegament de Postfix i Dovecot en Ubuntu Server

```bash
# Instal·lar el servidor SMTP (Postfix) i el servidor IMAP/POP3 (Dovecot)
sudo apt update && sudo apt install postfix dovecot-imapd dovecot-pop3d -y
```

### Configuració bàsica de Postfix (`/etc/postfix/main.cf`):
```text
myhostname = correu.iesrafel.internal
mydomain = iesrafel.internal
myorigin = $mydomain
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 192.168.1.0/24
home_mailbox = Maildir/
```

```bash
# Reiniciar els serveis
sudo systemctl restart postfix dovecot

# Verificar que els ports estan en escolta
sudo ss -tulpn | grep -E ':(25|143|993|587)'
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi d'Arquitectura de Correu i Protocols Antispam
1. **Diferenciació de Formats de Bústia: `mbox` vs `Maildir`:**
   - En sistemes antics, Postfix emmagatzemava tots els correus d'un usuari en un únic fitxer gegant (`/var/mail/usuari`). Quins problemes de bloqueig d'escriptura (*file locking*) i corrupció de dades sorgien si un correu entrava mentre l'usuari n'esborrava un altre?
   - Com soluciona `Maildir/` aquesta situació creant les tres subcarpetes `cur`, `new` i `tmp` on cada missatge és un fitxer autònom amb un nom únic?
2. **Prioritat en els Registres DNS MX:**
   - Si un domini té dos registres MX:
     ```text
     @ IN MX 10 correu-principal.empresa.cat.
     @ IN MX 20 correu-backup.empresa.cat.
     ```
   - Quin servidor intentarà contactar primer qualsevol remitent extern d'Internet? Quan s'enviarà el tràfic cap al servidor amb prioritat 20?
3. **Mecanisme de Falsificació (*Spoofing*) i DMARC:**
   - Com impedeix un registre SPF combinat amb DMARC que un atacant extern puga enviar un correu des d'un servidor rus fent-se passar pel director general de l'empresa?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Enviament Manual

#### Repte 1: Enviament Interactiu de Correu per Terminal amb Netcat / Telnet
A la màquina de laboratori, interactuarem directament amb el protocol SMTP com ho faria un programa informàtic:
1. Connecta't al port 25 de Postfix:
   ```bash
   nc localhost 25
   ```
2. Executa seqüencialment les ordres del diàleg SMTP canònic:
   ```text
   HELO smx.internal
   MAIL FROM: <administrador@iesrafel.internal>
   RCPT TO: <alumne@iesrafel.internal>
   DATA
   Subject: Prova de Protocol SMTP en Directe
   From: Administrador de Sistemes <administrador@iesrafel.internal>
   To: Alumne <alumne@iesrafel.internal>

   Hola! Aquest es un correu enviat interactuant directament amb el servidor Postfix.
   .
   QUIT
   ```
3. Comprova la resposta del servidor (ha de retornar `250 2.0.0 Ok: queued as ...`).
4. Revisa que el missatge ha arribat a la bústia de l'usuari examinant el directori `Maildir`:
   ```bash
   ls -l /home/alumne/Maildir/new/
   cat /home/alumne/Maildir/new/*
   ```

#### Repte 2: Configuració de Dovecot per a Bústies IMAP
1. Edita el fitxer `/etc/dovecot/conf.d/10-mail.conf` per a indicar el format de bústia Maildir:
   ```text
   mail_location = maildir:~/Maildir
   ```
2. Edita `/etc/dovecot/conf.d/10-auth.conf` per a permetre autenticació d'usuaris del sistema (`auth_mechanisms = plain login`).
3. Reinicia Dovecot: `sudo systemctl restart dovecot`.
4. Des de la màquina client, obre el client **Thunderbird** i afegeix el compte `alumne@iesrafel.internal` especificant la IP del servidor com a servidor IMAP (port 143/993) i servidor SMTP (port 25/587). Comprova que el missatge enviat manualment en el Repte 1 apareix correctament a la safata d'entrada.

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura de correu i antispam** | Domina MUA/MTA/MDA, registres MX i els mecanismes SPF, DKIM i DMARC amb precisió. | Distingeix SMTP d'IMAP/POP3 però té dubtes sobre la sintaxi dels registres SPF o DKIM. | Confon els rols dels servidors o no comprèn la diferència entre SMTP i IMAP. |
| **Comandes SMTP interactives** | Executa el diàleg complet SMTP (`HELO`, `MAIL FROM`, `RCPT TO`, `DATA`) sense errors. | Envia el correu però oblida el punt sol en una línia (`.`) per a tancar el bloc DATA. | No aconsegueix connectar-se per consola al port 25 de Postfix. |
| **Configuració de bústies i clients** | Configura Maildir a Postfix i Dovecot, arrenca els dimonis i sincronitza Thunderbird. | Configura Postfix però Dovecot no troba la carpeta de bústia per incompatibilitat mbox/Maildir. | Errors de permisos en la carpeta personal de l'usuari que bloquegen el lliurament del correu. |
