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
 *                >> INTERFACES AND PROPERTIES <<
 *
 * Now if I pass an "object literal" directly without assigning it to a "const"
 * first.
 *
 *    greet(firstName: "gannat", age: 31);
 *
 * I get an error message that special check performed by Typescript. Even
 * thought I'm doing the same in the "const person" when I assigning object
 * literal to a constant, this does not get check strictly as "greet({})" does.
 *
 * So once you pass object literal directly it's check much more strictly, and
 * here TypeScript recognizes that this "age" properties isn't define in the
 * "interface". So "age" properties in "constant" is not a problem, it is
 * a problem here when you pass in "object literal" directly in "greet({})".
 *
 * Just important think to know, better you create your interfaces 'explicit' as
 * possible, so if you want to make sure that each properties is possible but
 * not required, you can do this,
 *
 *    interface namePerson {
 *      firstName: string;
 *      age?: number;   // the "?" is mean an optional argument
 *    }
 *
 * An important, is in when we call directly in "greet({})" is not connected
 * directly to optional argument ("age?: number"), that object-literal getting
 * pass as argument directly are check much more strictly then if you assign it
 * into a constant first.
 *
 * Now what if you have an interface you might some properties where you don't
 * know the "name of the properties" in advance. You know there might be some
 * properties but you don't want to get any errors just because you don't know
 * the "name" of them yet.
 *
 * For such a case, Typescript have a special notation you may use, you can use
 * square-bracket "[]" as a "key-name", this is not an array just special
 * notation.
 *
 *    [propName: string]: any; // the "[]" nothing to do with an array
 *
 * The different with the "optional" properties "?" with "special-notation" "[]"
 * that "optional" we clearly state key-name and type of the value, where
 * "special-notation" we don't know the kye-name yet and state of the value.
 *
 * So in this situation we can add some value in constant "person".
 *
 *    const person = {
 *      firstName: "Max";
 *      hobbies: [running, reading];
 *      }
 *
 *      >>> INTERFACES AND METHODS <<<
 *
 * Well so far we only consider "properties" on the interface, but that's not
 * only we can do, we can also add a "method".
 *
*/
interface NamedPerson {
  firstName: string;
  age?: number;   // the "?" is optional argument
  [propName: string]: any; // the "[]" is special notation 

  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const person: NamedPerson = {
  firstName: "Max",
  hobbies: ["running", "reading"],
  greet(lastName:string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
    console.log(`Hi I am ${this.firstName}  ${lastName} // with template string`);
  }
};

//greet({firstName: "gannat", age:28});
changeName(person);
greet(person);
person.greet("Anything");

