# React
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT_CISCO

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

node --version
```
1) Introduction of Env and SSR vs CSR
2) Introduction to Build tools and REACT
3) REACT components
4) Testing REACT components - UNIT testing
5) Functional Components and HOOKS
6) Start using React with TypeScript
6) React Context
7) React Router DOM
8) State Management using REDUX / RTK
9) Introduction to NextJS [ Full stack React]

================================

Server Side Rendering Vs Client Side Rendering

SSR:
Pros
1) Good for SEO
2) Speed [FCP]

Cons
1) Heavy payload
2) Client is tightly coupled

CSR:
Pros:
1) Client Server Architecture Seperation [ clients can evolve ]
2) light payload

Cons:
1) Issues with SEO
2) Session tracking

=================

JavaScript needs JavaScript engine for execution.
Every Browser provides JavaScript engine
Chrome --> V8 Js engine
FireFox --> SpiderMonkey
Safari --> JavaSCript engine
Nashorn, IonMonkey, Rhino, ...

What is NodeJS?
* NodeJS is a platform with V8 JS engine and libuv libraries

libuv provides the same functionalites as WebApis [ provided by browsers]
* whenever we use setInterval, setTimeout, reading files, socket, Promise API

Why nodeJS?
1) Building client side applications
a) We can choose different programming languages to write code: TypeScript, CoffeeScript, LiveScript , DART, latest version of JS
JS engine understands only JS
NodeJS provides a platform to covert your code to JS
Product.ts --> tsc --> Product.js

TypeScript: statically typed language, we can write type-safe code
JS:
var age = 50;
age = "fifty one"; // valid

if(age > 50) {

}

TS:
var age:number = 50;
age = "fifty one"; // tsc throws error

--> Compile / Transcompiler [latest version of JS to lower version of JS]
https://caniuse.com/

b) Testing: Unit testing / Integration Testing / E2E testing
c) Minify and Uglify code --> main purpose is less payload
```
function getProducts() {
    let connection = db.getConnection();
    let products = connection.db.find(...);
    return products;
}

Minify:
function getProducts(){let connection=db.getConnection();let products=connection.db.find(...);return products;}

Uglify:
function _gp(){let _c=db.getConnection();let _p=_c.db.find(...);return products;}
```
d) Bundle
Project might have aprox: 60+ js files
```
index.html
<script src="product.js"></script>
<script src="customer.js"></script>
<script src="order.js"></script>
<script src="payment.js"></script>
<link rel="stylesheets" href="product.css">
<link rel="stylesheets" href="order.css">

With this
1 Network call to index.html
4 networks calls to js files
2 network calls to css files

Issue 2: order of script tags are important

Solution: Bundle
index.html
<script src="bundle.js"></script>
<link rel="stylesheets" href="styles.css" >

Total 3 network calls
```

2) Use NodeJS to build APIs [ RESTful / GraphQL WS]
3) Use it to build Realtime applicaitons [ ChatBot]
4) Streaming APIs

==========

NodeJS and package managers: for installing dependencies, running scripts,
publishing modules
1) NPM [default]
npm --version
2) YARN
npm install yarn -g
3) PNPM
npm install pnpm -g

Usage:
npm i react
yarn add react
pnpm i react

==================================

