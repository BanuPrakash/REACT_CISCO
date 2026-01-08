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

JSX: JavaScript and XML

React Demystify:
Using JSX without React library:

npm i @babel/preset-react -D


// props --> attributes like width, height, src in img tag
// <img src=".." width="200px" height="150px" />

// children: <h1> and <h2> are children to div
// Age, {person.age} are children to h2

// react expects children also as props
```

MVC: model view and controller

React: is a View Library unlike Angular / Backbone which is based on MVC Architerctural pattern
Angular --> Framework --> total solution

React is simple and easy
https://www.youtube.com/watch?v=8pDqJVdNa44
History: XHP, FauxJS, ...

Advantages of Using React as view library.
Easy to convert your web application to Mobile / Tv / Desktop
React with NextJS/ Remix allows you to write FullStack application:
we can have  React components written for client side as well as Server side.

For example if we consider Angular instead of React.
1) Client side code is in Angular
2) Server side code has to be done using ExpressJS or Spring Boot, ..

=========



React:
1) createElement() is the core API for React -> converts JSX to JS object
2) class component : render() returns JSX -> createElement() -> convert JSX to JS object
3) functional components: return JSX -> createElement() -> convert JSX to JS object [99%]

we can create scaffolding using webpack / vite

Webpack:
npx create-react-app my-app
As of February 2025, the React team officially deprecated

Vite:
npm create vite@latest

vite is a next generation build tool, fast updates, HMR, built-in support for TypeScript, JSX, CSS and static assets like images [ in webpack we need to configure file-loader/png-loader just like babel-loader]

====

npm create vite@latest
```

> npx
> create-vite

│
◇  Project name:
│  react-basic
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
```

Thinking in React:
1) ATOMS: Basic building blocks, such as button, input, image
99% of the time we use them based on libraries of your choice.
https://primereact.org/
https://react-bootstrap.netlify.app/
https://react-spectrum.adobe.com/index.html
https://mui.com/material-ui/react-button/
KendoUI --> paid

2) Molecules: Grouping atoms like Card, table --> most of the time we use ready to use from library.

3) Organisms: Combining Molecules --> Navigation bar, list of Cards
4) Templates
5) Pages

files: Components should end with "jsx" or "tsx"
files "js" are helpers / libraries / testing 

Component files should use CamelCase conventions and start with UpperCase

Folder structures:
```
    src
        |
        features
            |
            products
                ProductList.jsx [container]
                ProductCard.jsx
                ProductForm.jsx
                ProductList.test.js
                ProductCard.test.js
            |
            cart
                CartList.jsx
                CartRow.jsx
                CartRow.test.js

```

We are building Customer application with events

Class Component should inherit from Component/PureComponent and override render()

Class component can have 
1) state
2) life-cycle methods
3) behaviour

map() to transform 

props --> mechanism using which data is passed from parent to child [ think attributes of HTML tags]

Warning: Each child in a list should have a unique "key" prop. --> Reason -> Better reconcilliation

React reconciliation is the process by which React efficiently updates the actual DOM to match the latest changes in component state or props.

```
    <ul>
        <li key="a">One</li>
        <li key="b">Two</li>
    <ul>
```

Object: state and behaviour/actions/methods
state has to be changed by actions/behaviour

props -> data passed from parent to child.

Reconcilliation: whenever state or props change, execute diffing algorithim and do re-rendering of screen by updating DOM thro VDOM

=======

React Life-cycle methods
Mounting: constructor() -> render() -> componentDidMount()
Mounting: intial data -> render with initial data --> Make API calls
Never make API calls in constructor() --> this leads to FCP issues - Core Web Vital
componentDidMount() -> Makes API call and updates the state


Updating Phase: whenever state / props change
shouldComponentUpdate() -> false
shouldComponentUpdate() -> true -> render() re-rendering with new state -> componentDidUpdate()

componentDidUpdate() --> MAKE Api calls on dependend data /side effects

Unmounting: called when component is getting destroyed
componentWillUnmount() -> unsubscribe()

================================================

```
npm create vite@latest

◇  Project name:
│  react-trial
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes

```

npm install @faker-js/faker

=============================

Prop drilling in React is the process of passing data or state from a parent component down through multiple layers of intermediate components in the component tree to reach a deeply nested child component that actually needs the data.

React 16.4+ version:
The React Context API is a built-in feature that allows components to share data throughout the entire component tree without manually passing props at every level, a problem known as "prop drilling". 

understadning children props
```
A and B are children
<UserContextProvider>
    <A />
    <B />
</UserContextProvider>

Here E, D and F are children
<UserContextProvider>
    <E />
    <D />
    <F />
</UserContextProvider>

```

```
    let person = {
        "name": "Tim",
        "getName": function() {
            return this.name
        }
    }
person.getName() // works
let ref = person.getName; // context is lost, no idea what "this" keyword is
ref(); // not working

Solution:
let ptr = person.getName.bind(person); // bind the function definition to person
ptr(); // works
```

"test": "vitest --coverage --coverage.include=src/components/*.jsx"
npm i @testing-library/dom @testing-library/react vitest jsdom

===================

Day 2

Functional components are lightweight compared to class components
Upto React 16.7 we used Class component if we had state / life-cycle methods
else functional components

From 16.8+ onwards ---> 99% of components are functional components

React Hooks:
React Hooks are special functions introduced in React 16.8 that allow you to use state and other React features, such as lifecycle methods and context, within functional components without writing a class. 
React Hooks:
1) useState() : to introduce state 
2) useEffect(): to simulate life-cycle methods
```
    //empty depdendency means works like componentDidMount
    
    useEffect(() => {

    },[])

    // dependendency on name, called whenever name changes => works like componentDidUpdate
    
    useEffect(() => {

    },[name])

      //dependendency on name and age, called whenever name or age changes => works like  componentDidUpdate
    useEffect(() => {

    },[name, age])
```
3) useReducer()
4) useContext()
5) useMemo()
6) useRef()
7) useCallback()

Not a Hook but a HOC:
React.memo() for shouldComponentUpdate() alternative
...


```
 export default class StateExampleComponent extends Component {
    state = {
        "name": "Sunny",
        "age": 18
    }

    updateName(name) {
        this.setState({
            name
        })
    }

    updateAge(age) {
        this.setState({
            age
        })
    }
 }

```
CSS Framework, for Response Web Design
npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

Row contains 12 columns / grids irrespective of view port



Closure: Whenver a function returns a function, returned function can access all the members of outer function.

====
useReducer(): instead of  useState() to manage state in case of:
1) state is complex
2) state mutation depends on previous state
3) conditionally mutate the state

```
    cart: {
        items: [
            {"id":4, "name": "A", qty: 2, "amount": 822},
            {"id":7, "name": "Y", qty: 1, "amount": 981}
        ],
        qty: 2,
        total: 17891
    }

```
We will use Action Objects to mutate;
1) {type: 'ADD_TO_CART', payload: {id: 901, "name": "P", qty: 1, amount: 100}};
Take previous state and update
```

```
    cart: {
        items: [
            {"id":4, "name": "A", qty: 2, "amount": 822},
            {"id":7, "name": "Y", qty: 1, "amount": 981},
            {id: 901, "name": "P", qty: 1, amount: 100}
        ],
        qty: 3,
        total: 18891
    }

```

2) Action is increment
{type:'INCREMENT', payload: 7}


```
    cart: {
        items: [
            {"id":4, "name": "A", qty: 2, "amount": 822},
            {"id":7, "name": "Y", qty: 2, "amount": 1800},
            {id: 901, "name": "P", qty: 1, amount: 100}
        ],
        qty: 3,
        total: <<>>
    }

```

useReducer() hook needs reducer function:
reducer function takes (state, action) and returns new state


Build application:

1) NavbarComponent
2) ProductList
3) ProductCard
4) CartList
5) CartRow
6) Details
7) Default

Functionalities in this application:
1) react-router-dom
Different URL should render different Component
http://localhost:3000/products
http://localhost:3000/cart
http://localhost:3000/details/3
http://localhost:3000/aaga

Lazy loading of components
In Production level code, we should not bundle all components into one.
That leads to FCP --> if size of bundle.js is more then blank screen appears for longer duration until bundle.js is loaded to client.
Solution: put only essential components in bundle.js which is commonly required.
Other components we. can lazily load.

2) Use only functional components with React hooks
3) Context for state managment
4) react-bootstrap can also use mui, kendoUI, Adobe React Spectrum,...
5) bootstrap - CSS Framework
6) axios instead of fetch for API calls
7) TypeScript

=====
```
npm create vite@latest

◇  Project name:
│  shopapp
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
```

shopapp % npm i bootstrap react-bootstrap react-router-dom axios

React Fragment to avoid div pollution:
```
 <>
            <img src = {product.image} /> <br />
            Name: {product.title} <br />
 </>

```

Resume after 1 hour Lunch Break

