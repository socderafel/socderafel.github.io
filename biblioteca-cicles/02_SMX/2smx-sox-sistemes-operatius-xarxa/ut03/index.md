---
layout: default
title: "Sistemes Operatius en Xarxa — UD3 UP3. Administración y gestión de usuarios y grupos - RA2"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UD3"
---

# UD3 — UP3. Administración y gestión de usuarios y grupos - RA2



---

## 📌 3.1 Teoría (còpia) (còpia)

Teoría 📚

---

## 📌 3.2 UP3.1. Configuración y gestión de cuentas de usuario - CE2.a)

Continguts i activitats didàctiques de **UP3.1. Configuración y gestión de cuentas de usuario - CE2.a)**.

---

## 📌 3.3 UP3.3. Configuración y gestión de cuentas de equipo - CE2.c)

Continguts i activitats didàctiques de **UP3.3. Configuración y gestión de cuentas de equipo - CE2.c)**.

---

## 📌 3.4 UP3.4. Grupos, tipos y ámbitos - CE2.d)

Continguts i activitats didàctiques de **UP3.4. Grupos, tipos y ámbitos - CE2.d)**.

---

## 📌 3.5 UP3.5. Configuración y gestión de grupos - CE2.e)

Continguts i activitats didàctiques de **UP3.5. Configuración y gestión de grupos - CE2.e)**.

---

## 📌 3.6 UP3.6. Características de usuarios y grupos predeterminados y especiales - CE2.g)

Continguts i activitats didàctiques de **UP3.6. Características de usuarios y grupos predeterminados y especiales - CE2.g)**.

---

## 📌 3.7 UP3.7. Perfiles móviles de usuarios - CE2.h)

Continguts i activitats didàctiques de **UP3.7. Perfiles móviles de usuarios - CE2.h)**.

---

## 📌 3.8 Actividades y tests (còpia) (còpia)

Actividades📝

---

## 📌 3.9 📤ENTREGA📤 Actividad UP3.1. Configuración y gestión de cuentas de usuario - CE2.a)

Continguts i activitats didàctiques de **📤ENTREGA📤 Actividad UP3.1. Configuración y gestión de cuentas de usuario - CE2.a)**.

---

## 📌 3.10 📚NOTA EXAMEN📚 UP3.2. Configuración y gestión de perfiles de usuario - CE2.b)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.2. Configuración y gestión de perfiles de usuario - CE2.b)**.

---

## 📌 3.11 📤ENTREGA📤 Actividad UP3.3. Configuración y gestión de cuentas de equipo - CE2.c)

Continguts i activitats didàctiques de **📤ENTREGA📤 Actividad UP3.3. Configuración y gestión de cuentas de equipo - CE2.c)**.

---

## 📌 3.12 📚NOTA EXAMEN📚 UP3.4. Grupos, tipos y ámbitos - CE2.d)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.4. Grupos, tipos y ámbitos - CE2.d)**.

---

## 📌 3.13 📤ENTREGA📤 Actividad UP3.5. Configuración y gestión de grupos - CE2.e)

#Línea 7

New-ADGroup -Name "Presencial" -GroupScope Global -Path "OU=Presencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

Add-ADGroupMember $group -Members "CN=Presencial,OU=Presencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

$grupo_presencial = Get-ADGroup "CN=Presencial,OU=Presencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

#Línea 27

New-ADGroup -Name "Semipresencial" -GroupScope Global -Path "OU=Semipresencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

Add-ADGroupMember $group -Members "CN=Semipresencial,OU=Semipresencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

$grupo_semipresencial= Get-ADGroup "CN=Semipresencial,OU=Semipresencial,OU=Instituto,DC=SOR2025,DC=LOCAL"

---

## 📌 3.14 📚NOTA EXAMEN📚 UP3.6. Características de usuarios y grupos predeterminados y especiales - CE2.g)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.6. Características de usuarios y grupos predeterminados y especiales - CE2.g)**.

---

## 📌 3.15 📚NOTA EXAMEN📚 UP3.7. Perfiles móviles de usuarios - CE2.h)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.7. Perfiles móviles de usuarios - CE2.h)**.

---

## 📌 3.16 📚NOTA EXAMEN📚 UP3.8. Herramientas para la administración de usuarios y grupos - CE2.i)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.8. Herramientas para la administración de usuarios y grupos - CE2.i)**.

---

## 📌 3.17 📚NOTA EXAMEN📚 UP3.8. Herramientas para gestionar la pertenencia de usuarios y grupos - CE2.f)

Continguts i activitats didàctiques de **📚NOTA EXAMEN📚 UP3.8. Herramientas para gestionar la pertenencia de usuarios y grupos - CE2.f)**.

---

## 📌 3.18 Recursos (còpia) (còpia)

Recursos 💻

---

## 📌 3.19 Examen (còpia)

🔔🔔 Examen UP3 -> UP3.2, UP3.4, UP3.6, UP3.7 y UP3.8 🔔🔔

Examen Teoría (2 diciembre 2025, de 19h a 19:55h)

➜ Se evaluarán las UP3.4, UP3.6 y UP3.7 de manera teórica a papel.

Examen Práctico (3 diciembre 2025, de 16:00h a 17:50h)

➜ Se evaluarán las UP3.2 y UP3.8, donde se crearán y configurarán UO, usuarios, equipos y grupos utilizando las máquinas virtuales Windows Server, Windows 10, Ubuntu Server y Ubuntu Desktop del alumnado.

---

## 📌 3.20 Ejemplo para practicar con PowerShell

Continguts i activitats didàctiques de **Ejemplo para practicar con PowerShell**.
