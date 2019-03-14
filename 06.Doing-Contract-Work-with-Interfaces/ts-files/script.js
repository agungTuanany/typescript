"use strict";
console.log("01. THE BASIC ABOUT INTERFACES");
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
const person = {
    firstName: "Max",
    hobbies: ["running", "reading"],
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
        console.log(`Hi I am ${this.firstName}  ${lastName} // with template string`);
    }
};
//greet({firstName: "gannat", age:28});
changeName(person);
greet(person);
person.greet("Anything");
class Person {
    constructor() {
        this.firstName = this.firstName;
        this.lastName = this.lastName;
    }
    greet(lastName) {
        console.log(`Hi I am ${this.firstName}  ${lastName} // with template string`);
    }
    ;
}
const myPerson = new Person();
myPerson.firstName = "Gannat";
myPerson.lastName = "Something-else";
greet(myPerson); // this "greet" method not a method in the "Person" class, but a Method at "function greet(person: NamedPerson){}"
myPerson.greet(myPerson.lastName);
