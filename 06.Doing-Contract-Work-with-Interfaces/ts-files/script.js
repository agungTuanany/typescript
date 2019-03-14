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
    hobbies: ["running", "reading"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
        console.log("Hi I am " + this.firstName + "  " + lastName + " // with template string");
    }
};
//greet({firstName: "gannat", age:28});
changeName(person);
greet(person);
person.greet("Anything");
