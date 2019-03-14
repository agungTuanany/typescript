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
    age: 27
};
greet(person);
changeName(person);
greet(person);
