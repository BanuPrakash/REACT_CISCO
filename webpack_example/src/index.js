import Person from "./Person"; // babel-loader
import filter, {add} from "./lib";

// we are importing CSS file :-)
import './styles.css'

console.log(add(4,5));
console.log(add(41,5));

let data = [5,2,7,9,11,23,78];

let evens = filter(data, (val) => val %2 === 0);

console.log(evens);

let person = new Person("Roger", 24);
console.log(person.getName(), person.getAge());


// used by @babel/preset-react
let React = {
    // should convert JSX to JS object, which can be handled by engine
    createElement:(tag, props, ...children) => {
     var element = {tag, props: {...props, children}};
     console.log(element);
     return element;
    }
}

// JSX
let PersonCard = <div className="card">
    <h1 className="card-header">{person.getName()}</h1>
    <h2 className="card-body">Age: {person.age}</h2>
</div>

console.log(PersonCard);