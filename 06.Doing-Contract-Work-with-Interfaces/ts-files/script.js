"use strict";
console.log("01. THE BASIC ABOUT INTERFACES");
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    hobbies: ["running", "reading"]
};
greet({ firstName: "gannat", age: 28 });
changeName(person);
greet(person);
