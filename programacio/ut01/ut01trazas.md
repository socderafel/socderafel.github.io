---
layout: default
title: "Trazas de ejecución UT1 — Programació (1r DAW)"
course_root: ".."
badge: "1a Avaluació · RA1 (a-i) · Elements bàsics i Operadors"
prev_url: "../ut01/ut01retos.html"
prev_label: "⬅️ Retos de programación UT1"
next_url: "../ut01/ut01pi.html"
next_label: "Proyecto Intermodular UT1 ➡️"
---

# Trazas

> **📌 Empaquetar trazas**
> Empaqueta las actividades, dentro de la carpeta **`ut01`**, en la carpeta **`trazas`**.
>
> Las actividades programadas en esta sección **trazas** no son obligatorias.

### Traza 01

**Datos de entrada: 2 y 5**

#### 1.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x+y;
    System.out.println(a);
}
```

#### 2.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,a;
    x = sc.nextInt();
    x = sc.nextInt();
    a= x+x;
    System.out.println(a);
}
```

#### 3.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x+y;
    a = x*y;
    System.out.println(a);
}
```

#### 4.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x+y;
    System.out.println(a);
    a = x*y;
    System.out.println(a);
}
```

#### 5.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x+y;
    a = a+x+y;
    a = a+a;
    System.out.println(a);
}
```

#### 6.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x;
    a = doble(x);
    System.out.format ("%d%n%d%n%d",x,y,a);
}
public static int doble(int num){
    return 2*num;
}
```

#### 7.

```java
public static void main (String[] args) {
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = x;
    doble(a);
    System.out.format("%d%n%d%n%d%n",x,y,a);
}
public static void doble(int x){
    x = 2*x;
}
```

#### 8.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    a = calcular(y,x);
    System.out.format("%d%n%d%n%d%n",x,y,a);
}
public static int calcular (int x, int y){
    return x-y;
}
```

#### 9.

```java
public static void main (String[] args){
    Scanner sc = new Scanner(System.in);
    int x,y,a;
    x = sc.nextInt();
    y = sc.nextInt();
    y = calcular(x);
    a = calcular(y);
    System.out.format("%d%n%d%n%d%n",x,y,a);
}
public static int calcular (int x){
    return x*x;
}
```

---
