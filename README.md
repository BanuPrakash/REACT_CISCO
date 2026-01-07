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

JS Build Tools:
1) Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, bundle and linting.
2) GULP
3) Webpack [learn] --> most preffered until FEB 2025
4) Vite [veet] --> New projects after MAR 2025 [ everything is abstract]

=======
Module System: Better modularity to code [ private and public]
1) CommonJS module system [default for NodeJS]
```
    product.js
    var products = []; // private
    function addProduct(product) {
        if(validateProduct(product)) {
            products.push(product);
        }
    }
    function validateProduct(product) { // private
        ...
    }

    module.exports = {
        addProduct
    }

    other.js
    const {addProduct} = require('./product');
==
Other JS files which import product.js can only use addProduct
```
2) ESM [ ECMAScript 6 Module System] --> we are going to use
3) AMD [ Async Module Definition]
4) SystemJS

===========
1) initialize the project
webpack_example % npm init --y

creates package.json file
file where scripts, dependecies, devDependencies, peerDependencies are configured.

webpack_example % npm i lodash
"lodash": "4.17.21" ==> exact version
"lodash": "^4.17.21" ==> version 4.17.21 or latest
"lodash": "~4.17.21" => major version has to be 4, minor and patch can be latest.

install the module in "node_modules" folder along with transitive depenendencies.

webpack_example % npm i jest -D [ testing library]

When code is built for production it includes only dependecies and not developer dependecncies

===
Team members: clone/pull the project
webpack_example % npm i

webpack_example % npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env -D

NodeJs understands CommonJS module system.
We will use ESM [ECMAScript 6 - JS 6 module system]
Example of ESM:
```
lib.js
export function add(x,y) {

}

export function subtract(x,y) {

}
// private
function multiply(x,y) {

}

other.js
import {add, subtract} from './lib'
``
import {add, subtract} from './lib'
babel-loader: understands ESM and helps import files [ here loads lib.js into memory]
loaded file is given to transcompiler @babel/core
@babel/core: uses @babel/preset-env
@babel/preset-env: @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

```
Syntax Transform:
let add = (x,y) => x + y;
let data = [4,5,7];
let [x,y] = data;

gets converted to

function add(x,y) {
    return x + y;
}

var data = [4,5,7];
var x = data[0];
var y = data[1];
```

browser polyfills
```
    My Code: Promise.resolve(() => "Hello World");
    Older Browsers don't understand Promise

    Alternate:
    import 'core-js/actual/promise';
    Promise.resolve(() => "Hello World");
```
npm i css-loader style-loader

css-loader: allows you to import css files in JS, just like importing js

index.js
import 'styles.css'

style-loader places the loaded css within style tag
```
<style>
    body {}
    .card{}
</style>
```
Configuration files has to be in "CommonJS" module system

```
npm run dev

asset bundle.js 5.61 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 709 bytes
  ./src/index.js 298 bytes [built] [code generated]
  ./src/Person.js 197 bytes [built] [code generated]
  ./src/lib.js 214 bytes [built] [code generated]
webpack 5.104.1 compiled successfully in 270 ms

npm run prod

> webpack_example@1.0.0 prod
> webpack --mode production

asset bundle.js 308 bytes [emitted] [minimized] (name: main)
orphan modules 411 bytes [orphan] 2 modules
./src/index.js + 2 modules 709 bytes [built] [code generated]
webpack 5.104.1 compiled successfully in 312 ms
```

HtmlWebpackPlugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

npm i html-webpack-plugin -D 

npm i webpack-dev-server -D

npm start

===========================


