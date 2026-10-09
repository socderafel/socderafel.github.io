---
layout: default
title: "Trazas de ejecución UT2 — Programació (1r DAW)"
course_root: ".."
badge: "1a Avaluació · RA3 (a-i) · Condicionals, Bucles i Excepcions"
prev_url: "../ut02/ut02retos.html"
prev_label: "⬅️ Retos de programación UT2"
next_url: "../ut02/ut02pi.html"
next_label: "Proyecto Intermodular UT2 ➡️"
---

# Trazas

> **📌 Empaquetar trazas**
> Empaqueta las actividades, dentro de la carpeta **`ut02`**, en la carpeta **`trazas`**.
>
> Las actividades programadas en esta sección **trazas** no son obligatorias.

### Traza 02

**Datos de entrada: 2, 5, 7**

```java
public static void main (String[] args){
    int k,l,m,x,y,z;
    k = tec.nextInt();
    l = tec.nextInt();
    m = tec.nextInt();
    x = k+l;
    if (x != m) {
        y = k*l;
        z = 0;
    } else {
        y = 0;
        z = k-l;
    }
    if (z < 0) z = -z;
    System.out.format("%d%n%d%n%d%n",x,y,z);
}
```

---

### Traza 03

**Datos de entrada: 2, 5, 7, 9, -9, -7, -5, -2**

```java
public static void main (String[] args){
    int x,y;
    x = 0;
    y = tec.nextInt();
    while(!(y<0)) {
        x += -y;
        y = tec.nextInt();
        System.out.format("%d, %d",x,y);
    }
}
```

```java
public static void main (String[] args){
    int x,y,z,a;
    x = y = z = a = 0;
    x = tec.nextInt();
    while(x>0) {
        if (y < z) y = tec.nextInt();
        else z= tec.nextInt();
        a = a-x+y*z;
        x = tec.nextInt();
        System.out.format("%d, %d, %d, %d",a,x,y,z);
    }
}
```

---

### Traza 04

**Datos de entrada: 5, 5, 7, -5, -4, 2**

```java
public static void main (String[] args){
    int x, y, a=0;
    x = 0;
    y = 99;
    while (x >= 0) {
        x = tec.nextInt();
        y = tec.nextInt();
        a = a + x*y;
    }
    System.out.println(a);
}
```

```java
public static void main (String[] args){
    int x, y, a=0;
    x = 0;
    y = 99;
    while (x >= 0 && y >= 0) {
        x = tec.nextInt();
        y = tec.nextInt();
        a = a + x*y;
    }
    System.out.println(a);
}
```

```java
public static void main (String[] args){
    int x, y, a=0;
    x = 0;
    y = 99;
    while (x >= 0 && y <= 0) {
        x = tec.nextInt();
        y = tec.nextInt();
        a = a + x*y;
    }
    System.out.println(a);
}
```

```java
public static void main (String[] args){
    int x, y, a=0;
    x = 0;
    y = 99;
    while (x >= 0 || y >= 0) {
       x = tec.nextInt();
       y = tec.nextInt();
       a = a + x*y;
    }
    System.out.println(a);
}
```

---

### Traza 05

**Datos de entrada: 5, 5, 7, -5, -4, 2**

```java
public static void main(String[] args) {
    int x, y;

    x = 2;
    y = 3;
    while (x + y > 0) {
        x = tec.nextInt();
        y = tec.nextInt();
        x += y;
        y = x - y;
        System.out.format("%d, %d", x, y);
    }
}
```

---

### Traza 06

**Datos de entrada: 2, 4, 7, 5, -6, -3, 6, 6**

```java
public static void main (String[] args){
    int a, b;
    do{
        a = tec.nextInt();
        b = tec.nextInt();
        for (int i=a ; i<=b ; i++)
            System.out.println(i);
    } while (a!=b)
}
```

```java
public static void main (String[] args){
    int a, b;
    a = 5;
    b = 5;
    do {
        for (int i=a ; i<=b ; i++)
           System.out.println(i);
        a = tec.nextInt();
        b = tec.nextInt();
    } while (a!=b);
}
```

---

### Traza 07

**Datos de entrada: 3, 3, 5, 5, -3, -7, 2, 2**

```java
public static void main (String[] args){
    int x, y;
    do {
        x = tec.nextInt();
        b = tec.nextInt();
    } while (x==y);
    if (x>y) {
        x=y;
        y=x;
    }
    System.out.format("%d %d %n",x,y);
}
```

---

### Traza 08

**Datos de entrada: 3, 2, 1, 4**

```java
public static void main (String[] args){
    int a=0,b;
    b = tec.nextInt();
    for(int i=1;i<=b,i++) a=(a+i)*i;
    System.out.println(a);
}
```

---

### Traza 09

**Datos de entrada:**

```java
public static void main (String[] args){
    int x,y;
    for (x=3; x>=1; x--){
        for(y=1; y<=x; y++) System.out.println(x);
            System.out.println();
    }
}
```

---

### Traza 10

**Datos de entrada:**

```java
public static void main (String[] args){
    int x,y;
    x=0;
    y=0;
    for (int i=1; i<=2; i++) {
        for (int j=1; j<=3; j++) x=(x+i)*j;
            y+=x;
    }
    System.out.println("%d %d %n",x,y);
}
```

---

### Traza 11

**Datos de entrada: 4, 5, 6, 7, 8, 9**

```java
public static void main (String[] args){
   int x,y;
   do x = tec.nextInt();

   while (x<=5);
       y=0;

   for (int i=12; i>=x; i-=2)  y += (x*i);
       System.out.println(y);
}
```
