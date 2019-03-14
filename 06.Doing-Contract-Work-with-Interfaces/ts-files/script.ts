console.log("01. THE BASIC ABOUT INTERFACES");

/*
 * If I change the constant of person into,
 *
 *    const person = {
 *      firtsName = "Max",
 *      age: 27
 *    };
 *
 * So when we call "greet" function the Person.name will be undefined. When we
 * get on this situation, or when we have a function or whatever the code, which
 * need to know that what is uses? Has a certain properties or method or
 * whatever then we might need an "interfaces".
 *
 * Because an "interfaces" basically is a 'contract' sign by an object which
 * says I guarantee you that I have certain properties function whatever.
 *
 * So our "greet" function here, will get require our first object to have
 * assign a such contract. So let create the necessary contract.
 *
 * I set or change the "person" type here, from type "any" to type "object", and
 * to type object which has a name which then is a type string.
 *
 *    function greet(person: {name: string}) {
 *      //... Function body
 *    }
 *
 * What I'm saying here, the "person" argument should be an "object", which has
 * the "name" field where the value is a "string". It might more fields then
 * that by the way, this doesn't mean only should have a name, but it needs at
 * least have a "name". Whit that when I compile this I get an error:
 *
 * error tells me that the argument that I pass in to the function my "person"
 * doesn't have a "name". But the function require to have a "name"
 *
 * So now we get a warn at the compile time, and not when our application runs,
 * so I can change the "firstName" into "name".
 *
 * So that is Basically what "interfaces", we define a type where we want to
 * make sure that a certain field is available. Now since this definition here
 * is very annoying,
 *
 *    greet(person: {name: string}){}
 *
 * I might have a different function,
 *
 *    function changeName(person: {name:string}) {
 *      person.name = "Anna";
 *    }
 *
 * It's so annoying because we have to change into two places if we want to
 * change everything to use "firstName" we should change all the "name" all over
 * the place. So the better way is to create an "interface" by using a keyword
 * "interface".
 *
 * inside the interface you define how the contract should look like, what your
 * requirement are.
 *
 *    interface NamedPerson {
 *      firstName: string;
 *    }
 *
 * So "interfaces" are a way to guarantee your code that certain properties or
 * method or what ever are available 
 *
*/
interface NamedPerson {
  firstName: string;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const person = {
  firstName: "Max",
  age: 27
};

greet(person);
changeName(person);
greet(person);

