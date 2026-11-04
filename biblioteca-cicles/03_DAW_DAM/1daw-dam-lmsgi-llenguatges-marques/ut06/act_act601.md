---
layout: default
title: "Actividad Práctica ACT601 — Ejercicios Validación de documentos — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT06"
prev_url: "./ut0606.html"
prev_label: "⬅️ 6.6 Herramientas específicas para la validación"
next_url: "../ut07/index.html"
next_label: "UD7 ➡️"
---

# **Ejercicios Validación de documentos**

## **DTD**

### **Ejercicio 1 - DTD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un DTD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
    <recetas>
        <!-- El tiempo está en minutos -->
        <receta id="r01" nombre="ensalada" preparacion="5">
            <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
            <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
            <ingrediente nombre="lechuga" unidad="gramo" cantidad="150" />
            <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
            <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
            <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
        </receta>

        <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
            <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
            <ingrediente nombre="anchoa" unidad="pieza" cantidad="3" />
        </receta>

        <!-- Más recetas -->
    </recetas>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT recetas (receta+)>

<!ELEMENT receta (ingrediente+)>
<!ATTLIST receta id              ID                #REQUIRED
                nombre          CDATA             #REQUIRED
                preparacion     CDATA             #IMPLIED>

<!ELEMENT ingrediente EMPTY>
<!ATTLIST ingrediente nombre     CDATA             #REQUIRED
                    unidad     (pieza|gramo|cc)  #REQUIRED
                    cantidad   NMTOKEN           #REQUIRED>
```

</details>

### **Ejercicio 2 - DTD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un DTD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
<cadena nombre="Burriquín">

<recetas>
    <!-- El tiempo está en minutos -->
    <receta id="r01" nombre="ensalada" preparacion="5">
        <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
        <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
        <ingrediente nombre="lechuga" unidad="gramo" cantidad="350" />
        <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
        <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
        <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
    </receta>

    <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
        <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
        <ingrediente nombre="anchoa" unidad="pieza" cantidad="lata" />
    </receta>

    <!-- Más recetas -->
</recetas>

<restaurante id="re01" nombre="El tragón feliz">
    <domicilio>
        <direccion>c/ Callo, nº 25. Bajo.</direccion>
        <municipio>Vallecito frondoso</municipio>
        <cp>12345</cp>
    </domicilio>
    <carta>
        <!-- Este plato se sirve como ración o como media o como tapa -->
        <plato ref="r01">
            <tipo>racion</tipo>
            <tipo>media</tipo>
            <tipo>tapa</tipo>
        </plato>
        <plato ref="r02">
            <tipo>media</tipo>
        </plato>
        <!-- Más platos -->
    </carta>
</restaurante>
<!-- Más restaurantes de la cadena -->
</cadena>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ENTITY % recetas SYSTEM "recetas.dtd">
%recetas;

<!ELEMENT cadena (recetas, restaurante+)>
<!ATTLIST cadena nombre       CDATA          #REQUIRED>

<!ELEMENT restaurante (domicilio, carta)>
<!ATTLIST restaurante id      ID             #REQUIRED
                    nombre  CDATA          #IMPLIED>

<!ELEMENT domicilio (direccion, municipio, cp)>

<!ELEMENT direccion (#PCDATA)>
<!ELEMENT municipio (#PCDATA)>
<!ELEMENT cp        (#PCDATA)>

<!ELEMENT carta (plato+)>

<!ELEMENT plato EMPTY>
<!ATTLIST plato ref           IDREF          #REQUIRED
                tipo          NMTOKENS       #REQUIRED>
```

</details>

### **Ejercicio 3 - DTD**

> **📌 Enunciado**
> 

> 1. Diseña un DTD que valide:

>   - un elemento raíz usuarios.

>   - uno o más elementos usuario.

>   - cada usuario debe tener nombre y correo.

> 1. Asocia el DTD al documento XML.

<details markdown="1">

<summary>💡 XML</summary>

```html
<usuarios>
<usuario>
    <nombre>Ana</nombre>
    <correo>ana@email.com</correo>
</usuario>
<usuario>
    <nombre>Carlos</nombre>
    <correo>carlos@email.com</correo>
</usuario>
</usuarios>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT usuarios (usuario+)>
<!ELEMENT usuario (nombre, correo)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT correo (#PCDATA)>
```

</details>

### **Ejercicio 4 - DTD**

> **📌 Enunciado**
> 

> 1. Crear un DTD que:

>   - obligue al atributo isbn

>   - valide que libro contenga titulo y autor

> 1. Indicar si el orden de los elementos es obligatorio..

<details markdown="1">

<summary>💡 XML</summary>

```html
<biblioteca>
<libro isbn="1234">
    <titulo>Java Básico</titulo>
    <autor>Juan Pérez</autor>
</libro>
</biblioteca>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor)>
<!ATTLIST libro isbn CDATA #REQUIRED>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

</details>

### **Ejercicio 5 - DTD**

> **📌 Enunciado**
> 

> Crear un DTD y comprobar si el siguiente XML sería válido:

<details markdown="1">

<summary>💡 XML</summary>

```html
<curso>
    <horas>120</horas>
    <nombre>Lenguajes de Marcas</nombre>
</curso>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT curso (nombre, horas)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT horas (#PCDATA)>
```

</details>

## **XSD**

### **Ejercicio 1 - XSD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un XSD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
    <recetas>
        <!-- El tiempo está en minutos -->
        <receta id="r01" nombre="ensalada" preparacion="5">
            <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
            <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
            <ingrediente nombre="lechuga" unidad="gramo" cantidad="150" />
            <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
            <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
            <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
        </receta>

        <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
            <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
            <ingrediente nombre="anchoa" unidad="pieza" cantidad="3" />
        </receta>

        <!-- Más recetas -->
    </recetas>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="recetas">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="receta" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="ingrediente" maxOccurs="unbounded">
                                <xs:complexType>
                                    <xs:attribute name="nombre" type="xs:string" use="required"/>
                                    <xs:attribute name="unidad" type="xs:string" use="required"/>
                                    <xs:attribute name="cantidad" type="xs:decimal" use="required"/>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="id" type="xs:string" use="required"/>
                        <xs:attribute name="nombre" type="xs:string" use="required"/>
                        <xs:attribute name="preparacion" type="xs:integer" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

</details>

### **Ejercicio 2 - XSD**

> **📌 Enunciado**
> 

> A partir del XML sobre un restaurante, que tenemos a continuación, hay que crear un XSD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
<cadena nombre="Burriquín">

<recetas>
    <!-- El tiempo está en minutos -->
    <receta id="r01" nombre="ensalada" preparacion="5">
        <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
        <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
        <ingrediente nombre="lechuga" unidad="gramo" cantidad="350" />
        <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
        <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
        <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
    </receta>

    <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
        <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
        <ingrediente nombre="anchoa" unidad="lata" cantidad="1" />
    </receta>

    <!-- Más recetas -->
</recetas>

<restaurante id="re01" nombre="El tragón feliz">
    <domicilio>
        <direccion>c/ Callo, nº 25. Bajo.</direccion>
        <municipio>Vallecito frondoso</municipio>
        <cp>12345</cp>
    </domicilio>
    <carta>
        <!-- Este plato se sirve como ración o como media o como tapa -->
        <plato ref="r01">
            <tipo>racion</tipo>
            <tipo>media</tipo>
            <tipo>tapa</tipo>
        </plato>
        <plato ref="r02">
            <tipo>media</tipo>
        </plato>
        <!-- Más platos -->
    </carta>
</restaurante>
<!-- Más restaurantes de la cadena -->
</cadena>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Tipos simples -->

    <xs:simpleType name="tipoIdReceta">
        <xs:restriction base="xs:string">
            <xs:pattern value="r[0-9]{2}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoIdRestaurante">
        <xs:restriction base="xs:string">
            <xs:pattern value="re[0-9]{2}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoUnidad">
        <xs:restriction base="xs:string">
            <xs:enumeration value="pieza"/>
            <xs:enumeration value="gramo"/>
            <xs:enumeration value="cc"/>
            <xs:enumeration value="lata"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoCantidad">
        <xs:restriction base="xs:decimal">
            <xs:minExclusive value="0"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoPreparacion">
        <xs:restriction base="xs:positiveInteger"/>
    </xs:simpleType>

    <xs:simpleType name="tipoCP">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{5}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoServicio">
        <xs:restriction base="xs:string">
            <xs:enumeration value="racion"/>
            <xs:enumeration value="media"/>
            <xs:enumeration value="tapa"/>
            <xs:enumeration value="racion media tapa"/>
            <xs:enumeration value="racion media"/>
            <xs:enumeration value="racion tapa"/>
            <xs:enumeration value="media tapa"/>
        </xs:restriction>
    </xs:simpleType>

    <!-- Elemento raíz -->

    <xs:element name="cadena">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="recetas">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="receta" maxOccurs="unbounded">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="ingrediente" maxOccurs="unbounded">
                                            <xs:complexType>
                                                <xs:attribute name="nombre" type="xs:string" use="required"/>
                                                <xs:attribute name="unidad" type="tipoUnidad" use="required"/>
                                                <xs:attribute name="cantidad" type="tipoCantidad" use="required"/>
                                            </xs:complexType>
                                        </xs:element>
                                    </xs:sequence>
                                    <xs:attribute name="id" type="tipoIdReceta" use="required"/>
                                    <xs:attribute name="nombre" type="xs:string" use="required"/>
                                    <xs:attribute name="preparacion" type="tipoPreparacion" use="required"/>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>

                <xs:element name="restaurante" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="domicilio">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="direccion" type="xs:string"/>
                                        <xs:element name="municipio" type="xs:string"/>
                                        <xs:element name="cp" type="tipoCP"/>
                                    </xs:sequence>
                                </xs:complexType>
                            </xs:element>

                            <xs:element name="carta">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="plato" maxOccurs="unbounded">
                                            <xs:complexType>
                                                <xs:attribute name="ref" type="tipoIdReceta" use="required"/>
                                                <xs:attribute name="tipo" type="tipoServicio" use="required"/>
                                            </xs:complexType>
                                        </xs:element>
                                    </xs:sequence>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="id" type="tipoIdRestaurante" use="required"/>
                        <xs:attribute name="nombre" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>

            <xs:attribute name="nombre" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

</details>

### **Ejercicio 3 - XSD**

> **📌 Enunciado**
> 

> 1. Crear un XSD que:

>   - obligue a que la edad sea ≥ 18

>   - defina tipos de datos adecuados

<details markdown="1">

<summary>💡 XML</summary>

```html
<empleado>
    <nombre>María</nombre>
    <edad>30</edad>
</empleado>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="empleado">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="edad">
        <xs:simpleType>
            <xs:restriction base="xs:integer">
            <xs:minInclusive value="18"/>
            </xs:restriction>
        </xs:simpleType>
        </xs:element>
    </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>
```

</details>

### **Ejercicio 4 - XSD**

> **📌 Enunciado**
> 

> 1. Precio decimal positivo

> 1. Stock entero ≥ 0

<details markdown="1">

<summary>💡 XML</summary>

```html
<producto>
    <nombre>Monitor</nombre>
    <precio>199.99</precio>
    <stock>10</stock>
</producto>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="producto">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="precio" type="xs:decimal"/>
        <xs:element name="stock">
        <xs:simpleType>
            <xs:restriction base="xs:integer">
            <xs:minInclusive value="0"/>
            </xs:restriction>
        </xs:simpleType>
        </xs:element>
    </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>
```

</details>

### **Ejercicio 5 - XSD**

> **📌 Enunciado**
> 

> 1. Definir tipos complejos

> 1. Permitir uno o más empleados

<details markdown="1">

<summary>💡 XML</summary>

```html
<empresa>
    <nombre>Tech S.L.</nombre>
    <empleados>
        <empleado>Ana</empleado>
        <empleado>Carlos</empleado>
    </empleados>
</empresa>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:element name="empresa">
<xs:complexType>
    <xs:sequence>
    <xs:element name="nombre" type="xs:string"/>
    <xs:element name="empleados">
        <xs:complexType>
        <xs:sequence>
            <xs:element name="empleado" type="xs:string" minOccurs="1" maxOccurs="unbounded"/>
        </xs:sequence>
        </xs:complexType>
    </xs:element>
    </xs:sequence>
</xs:complexType>
</xs:element>
```

</details>

## **JSON Schema**

### **Ejercicio 1 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Edad ≥ 18.

> 1. Ambos campos obligatorios.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"nombre": "Ana",
"edad": 25
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"$schema": "https://json-schema.org/draft/2020-12/schema",
"type": "object",
"properties": {
    "nombre": { "type": "string" },
    "edad": { "type": "integer", "minimum": 18 }
},
"required": ["nombre", "edad"]
}
```

</details>

### **Ejercicio 2 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Precio positivo.

> 1. No permitir propiedades extra.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"nombre": "Teclado",
"precio": 49.9,
"disponible": true
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "nombre": { "type": "string" },
    "precio": { "type": "number", "exclusiveMinimum": 0 },
    "disponible": { "type": "boolean" }
},
"required": ["nombre", "precio"],
"additionalProperties": false
}
```

</details>

### **Ejercicio 3 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Validar tipos.

> 1. Total > 0.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"id": 1001,
"total": 250.5
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "id": { "type": "integer" },
    "total": { "type": "number", "exclusiveMinimum": 0 }
},
"required": ["id", "total"]
}
```

</details>

### **Ejercicio 4 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Validar formato email.

> 1. Password mínimo 6 caracteres.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"email": "usuario@email.com",
"password": "abc123"
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "email": { "type": "string", "format": "email" },
    "password": { "type": "string", "minLength": 6 }
},
"required": ["email", "password"]
}
```

</details>

### **Ejercicio 5 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Si rol = admin → permisos obligatorios

> 1. Si rol ≠ admin → permisos opcionales

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"rol": "admin",
"email": "admin@email.com",
"permisos": ["crear", "editar"]
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "rol": { "enum": ["admin", "usuario"] },
    "email": { "type": "string", "format": "email" },
    "permisos": {
    "type": "array",
    "items": { "type": "string" }
    }
},
"required": ["rol", "email"],
"if": {
    "properties": {
    "rol": { "const": "admin" }
    }
},
"then": {
    "required": ["permisos"]
}
}
```

</details>
