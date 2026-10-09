---
layout: default
title: "UD7 — Web Services · Temari Complet"
course_root: ".."
badge: "2n DAW · Grau Superior · UT7 Completa"
prev_url: "../ut06/ut0603.html"
prev_label: "⬅️ 6.3 How to clone a Laravel project from Github"
next_url: "../ut07/ut0701.html"
next_label: "7.1 Web Services ➡️"
---

# 📘 UD7 — Web Services (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 Web Services**](./ut0701.md)

---

# 7.1 Web Services

> **📌 🏷️ Apunt de la Unitat**
> #### Resources

> **🔗 Recurs Web: Public REST API's (to use as clients)**
> [**🌐 Obrir recurs extern (https://github.com/public-api-lists/public-api-lists) ↗️**](https://github.com/public-api-lists/public-api-lists)

> **📌 🏷️ Apunt de la Unitat**
> #### Tasks

---

Unit 7 Web Services 2nd DAW - DWES

2 DAW - DWES What is a web service?

- A web service (WS) is a web application that can communicate with

another web application no matter the platform used (language, platform, etc)

- You can develop a WS and use it from a web using PHP or ajax directly and

you can also use this service from an iOS application or an Android application using their languages.

- A WS developed in PHP, can be used by an C# (Windows property)

application.

2 DAW - DWES What is a web service?

2 DAW - DWES What is a web service?

- A service does not generate HTML.
- Human can not interact directly with the response of the WS.
- WS can interact with other WS.
- Based on Client-Server architecture.

2 DAW - DWES Messages

- WS exchange information using two standards: XML and JSON
- Historically, XML was very important.
- Nowadays, JSON is the most used format due to its simplicity and

facility to use.

2 DAW - DWES Messages

2 DAW - DWES Messages

- WS exchange information using two standards: XML and JSON
- Historically, XML was very important.
- Nowadays, JSON is the most used format due to its simplicity and

facility to use.

2 DAW - DWES Types of WS

- There are two principal approaches to develop WS. SOAP and REST.
- SOAP
- Single Object Access Protocol
- Maintained by W3C
- Standarized
- SSL/TSL compatible
- Requires a “Contract” between client and server
- Only admits XML

2 DAW - DWES Types of WS

- There are two principal approaches to develop WS. SOAP and REST.
- SOAP
- Single Object Access Protocol
- Maintained by W3C
- Standarized
- SSL/TSL compatible
- Requires a “Contract” between client and server
- Only admits XML

2 DAW - DWES SOAP

- SOAP uses a file named WSDL (Web Services Description Language) to

define the structure of the webservice.

- This file is written in XML and is very tedious to write and understand

by a human.

- Usually, after writing the WS, a library is used to generate the WSDL.

2 DAW - DWES SOAP

- Let’s create our first WS using SOAP.
- It will be a very basic service using native PHP (not Laravel).
- It will return XML.
- We’ll go deep with REST services.

2 DAW - DWES SOAP

- In our example, server will be written in native PHP. For testing the

WS we can write a client (in PHP, for example) or we can also check it by using Postman or calling it through Ajax.

- We are going to program a webservice where the clients can ask for a

list of cars brands and for the models associated to an specific brand.

```php
• obtenerMarcas();
• obtenerModelos($marca);
```

2 DAW - DWES SOAP

- As you can see, names of methods are not standardized (in REST they

are).

- Client must know how to use the server. This can be done through the

WSDL or using documentation where the server specify how are the methods named.

- We’ll start programming the server part.

2 DAW - DWES SOAP

- We’d need a class to encapsulate the methods that are callable from

the client.

- Exercise: Create a class named GestionAutomoviles.class.php with the

functions on it. Functions will return an array with the data obtained after querying the database.

2 DAW - DWES SOAP

2 DAW - DWES SOAP

- As you can see, this class has nothing different than what we’ve

studied until now. It only contains methods for accessing the database and the result of them.

- We need to create our WS entrypoint. This is a file where the client

will query.

- Our entrypoint will be named “webservice.php” (can be another).

2 DAW - DWES SOAP

- This entrypoint, will create a SoapServer object (which is already

existing in PHP since version 5) aiming to our class that contains the methods (GestionAutomoviles).

- As you can see, SoapServer class admits two arguments.
- First one is to define where the WSDL file is (we don’t have it in our example).
- Second one is to define the URI of our server. As in our case client and server

will be in the same server, localhost will be used.

2 DAW - DWES SOAP

- We just need to set the class where the functions of our webservices

are and to tell the server to start listening for requests.

- Now, our webservice is up and running waiting for requests from the

clients.

2 DAW - DWES SOAP

- Testing a SOAP service without a client is tedious.
- Best option is to prepare a simple client. In our case, we’ll do it using

PHP.

- Now, we are going to user the class SoapClient, very similar to

SoapServer.

2 DAW - DWES SOAP

- SoapClient expect two arguments.
- First one is the WSDL file (which we don’t have) .
- Second one is an array with uri of our webservice (same than in server) and

the location of the entrypoint (the whole path until our webservice.php file).

2 DAW - DWES SOAP

- Once the connection is stablished, we can call the functions of the

server and use the responses as if we were in the same server.

- Despite seeing response as “arrays”, you have to take into account

that internally, responses are being transferred using XML.

2 DAW - DWES REST

- Representational State Transfer.
- Mechanism to exchange information between clients and servers.
- Data oriented. This means that the data is always the same with no

possibility of defining new operations.

- REST: Data oriented
- SOAP: Process oriented

2 DAW - DWES REST

- The actions of the service are based on the http verbs

Operation Meaning Verb URL Example index Show all products GET https://server/products/ show Show one product GET https://server/products/id create Show creating form GET https://server/products/create store Create a product with the form data POST https://server/products/store edit Show a editing form GET https://server/products/create/id update Update a product with the form data PUT/POST https://server/products/update/id destroy Remove a product DELETE/POST https://server/products/destroy/id

2 DAW - DWES REST

2 DAW - DWES REST

- Sometimes, create, edit and destroy are not available for operational

purposes.

- The set of services offered by the webservice is called an API

(Application Programming Interface)

- And API following the REST principles (verbs) is a RESTful API.
- Every RESTful API returns data in JSON

2 DAW - DWES REST

- RESTful is very used in OVA applications (One View Application).
- Once the main view is loaded, all the communications with the server is done

through AJAX, without leaving the view.

- In native PHP we can force the methods to return a JSON by using the

following function

2 DAW - DWES API REST as a client

- For better understanding of how API REST work, we’ll going to use

third-party API REST from native PHP and Laravel.

- Let’s start with native PHP.
- We are going to use a public API.
- https://github.com/public-apis/public-apis

2 DAW - DWES API REST as a client

- For better understanding of how API REST work, we’ll going to use third-party API

REST.

- We are going to use a public API.
- https://github.com/public-apis/public-apis
- https://publicapis.dev/
- https://free-apis.github.io/#/
- https://publicapis.io/
- https://api.chucknorris.io/#!
- https://www.omdbapi.com/
- https://pokeapi.co/
- https://swapi.dev/

2 DAW - DWES API REST as a client

- As you can see, some of the public API’s requires some kind of

authentication (apiKey or oAuth) and some others don’t.

2 DAW - DWES API REST as a client

- APIKey is basically a user identifier. The API gives us a key linked to

our user and we have to use it in every request.

- http://www.omdbapi.com/?apikey=[yourkey]&type=movie
- Oauth - Open Authorization: standard for access delegation. Used to

```php
grant websites or applications to other websites without giving their
```

passwords.

- I have a website named “elperello.com” which require a user to be registered.

It can be done through facebook or gmail so the authorization is delegated on them and “elperello.com” does not store any password from the users, giving them much more security.

2 DAW - DWES API REST as a client

- Before testing the API with code, we can test it by using POSTMAN.
- We’ll use the random number API which does not need APIkey nor

Oauth.

- http://www.randomnumberapi.com/api/v1.0/random?min=100&ma

x=1000&count=5

2 DAW - DWES API REST as a client

2 DAW - DWES API REST as a client

- When using and API where is needed an APIKEY, usually we need to

sign up to get one.

- Once you have an APIKEY, you just need to use it the way the

documentation

- i.e. https://spoonacular.com/food-api

2 DAW - DWES API REST as a client

- Exercise U7A2

2 DAW - DWES API REST as a client: Native PHP

- Now we already know the basics of calling an API.
- We have an URL
- We can add headers
- We can add body
- It’s time to implement it using PHP.
- We’ll use the cURL library included in PHP.

2 DAW - DWES API REST as a client: Native PHP

- First of all we set the URL and the data to be sent (if any).
- Initialize the new cURL session

2 DAW - DWES API REST as a client: Native PHP

- We can set different options (check documentation).

2 DAW - DWES API REST as a client: Native PHP

- You can also do it together

2 DAW - DWES API REST as a client: Native PHP

- Once the cURL is configured, we need to execute and wait for the

response

2 DAW - DWES API REST as a client: Laravel

- Laravel by defaults uses a library named Guzzle which is also available

in native PHP.

- The use of the library is fully described here
- https://laravel.com/docs/10.x/http-client
- Basic use is very simple

2 DAW - DWES API REST as a client: Laravel

- The get method returns an instance of “Response” which can be

accessed using many options

- And also directly to the field

2 DAW - DWES API REST as a client: Laravel

- When performing GET requests, if any data has to be sent you can

either append it to the URL or add it as an array as second argument

2 DAW - DWES API REST as a client: Laravel

- Performing POST request is quite simple too

2 DAW - DWES API REST as a client: Laravel

- Headers are also accepted in requests

2 DAW - DWES API REST as server

- Creating a basic API in Laravel is very easy.
- We just need to define a route returning a message.
- This code works (you can check it on Postman) but is not correct for

developing correctly.

2 DAW - DWES API REST as server

- To create a correct basic example we’d need to
- Define the http code
- Return data in a array or an object
- Return the array in JSON

2 DAW - DWES API REST as server

- We can also define a route and a response in case the user go to a

route that does not exists.

- This is called a fallback route

2 DAW - DWES API REST as server

- However, as we’ve studied, methods in an API Restful are standard

(index, create, store, update, etc) so the method used in previous slides is not valid for a real API.

- We’d need to create a controller to manage our webservice.
- This controller is going to be special.

2 DAW - DWES API REST as server

- A “resource” controller is a special type of controller for CRUD

operations with the predefined REST API operations already included.

2 DAW - DWES API REST as server

- If you want different behaviour or different methods, you can create a

normal controller.

- The advantatge of creating a controller from the scratch is that you

can control the error messages.

- Api controllers can not be mixed with other controllers. We’ll create

into a folder name api.

2 DAW - DWES API REST as server

- Remember
- index -> Listing
- create -> Create templates (we’re not going to use them)
- store -> Save data
- update -> Update data
- delete -> Delete data

2 DAW - DWES API REST as server

- As we’ve done in other Controllers, we need to perform the “query”

through the Model in order to manage the DB.

- As the controller is a resource, the return value will always be a data

array in JSON. You don’t have to explicitly convert it.

2 DAW - DWES API REST as server

- Once the methods are filled, we just need to configure the routes for

each method.

- In this case, we are not going to use the web.php file to configure the

routes. We are going to use the api.php file.

- The use of the file is specific for api’s and the syntax is the same.

2 DAW - DWES API REST as server

- Now you can access to your API using postman or a code client by

adding the “api” keyword before the request itself.

2 DAW - DWES API REST as server

- As we’ve said, one of the main advantages of using “classic”

controllers is to set our own message.

2 DAW - DWES API REST as server

- In case we need to create/update, is very similar as we did on

“normal” web application.

- Validate data sent
- If validation fails
- Return validation error in json format
- If validation ok
- Create
- If creation OK
- Return OK
- If not
- Return not OK

2 DAW - DWES API REST as server

2 DAW - DWES API REST as server

- Remember that when setting the route, the method has to be set to

POST.

- Now create the show, edit and destroy functions
- Take into account that edit will use PUT method
- Take into account that destroy will use DELETE method

2 DAW - DWES Questions?

---
