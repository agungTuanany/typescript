"use strict";
// Creating Classes and Class Properties.
console.log(" 01. CREATING CLASSES AND CLASS PROPERTIES");
/*
 * Basically "class" is allow us to prepare some kind of blueprint for object,
 * so you can later on create object base on a "class" to then make sure this
 * object already has some properties or methods which again you define in this
 * "class".
 *
 *  == Private & Protected props ==
 *
 *  Private props are only available or accessible from the object you create
 *  base on grand "class".
 *
 *  Protected props are accessible from any object or classes which inherit from
 *  grand class.
 *
 * For example, if were you inherit from this "Person-class", then the
 * 'child-class' which inherited from the 'Person-class' would also have access
 * to "protected props" but not to "private" one.
 *
 * It's important to understand we should set the properties directly in the
 * class body and not in the constructor.
 *
 * as a side note there's a quick short cut that TypeScript over for setting up
 * properties which you want to set on the constructor.
 *
 * Imagine we have something like a "username" so we also have "name", then we
 * could also say "public" for "username" of type "string",
 *
 *    constructor (name: string, public username: string) {};
 *
 * Notice the "public" keyword on "username" whit that I'm telling TypeScript,
 * not only expect to get "username" argument in the "constructor" function but
 * also automatically create a "public" properties in this "Person" class and
 * assign the argument you get pass into the constructor to this "username"
 * properties.
 *
 * so the "public username: string" expression here basically is a shortcut for
 * creating a properties on the "Person" class, getting the argument ("name:
 * string"), and then assign the argument ("this.name = name;).
 *
 * put in another words, the "Person" class can be like:
 *
 *  class Person {
 *    private type!: string;
 *    protected age!: number;
 *
 *    constructor(public name: string, public username: string) {}
 *  }
 *
 * but I leave this setup to have a good example of above possible ways of
 * creating and assigning properties.
 */
class Person {
    constructor(name, username) {
        this.username = username;
        this.name = name;
    }
}
;
const person = new Person("Gannat", "gannat");
console.log(person);
/*
 * As you can see here uses the "constructor" function is able to assign the
 * "username" with this shorter setup syntax, as well as the "name" with the
 * longer setup syntax.
 *
 * And to prove here I can also access "name" and "username" with this syntax:
 *
 *  console.log(person.name, person.username);
 */
console.log("this is calling with person.name and person.username: ", person.name, person.username);
console.log(`this is calling with
person.name: " ${person.name}" and
person.username:" ${person.username}"`);
console.log();
console.log("02. CLASS METHOD AND ACCESS MODIFIER");
/*
 * To setup the method is like a function without the "function" keyword.
 *
 * This how you can access "private" properties inside your "class"
 *
 *    printAge() {
 *      // ...
 *    }
 *
 * If I want to set a private or protected from outside class, I could create
 * setter inside the class.
 *
 * This how you create method which you may access them from outside class.
 *
 *    setType() {
 *      // ...
 * }
 *
 * I don't have to initialize "protected" properties through the constructor,
 * I can initialize in right on up to.
 *
 * so this is how you can initialize properties when you declaring them.
 *
 *    class Person1 {
 *      ....
 *      protected age: number = 73;
 *    }
 *
 * One important to notice, "method" can also be "private" or "protected", which
 * serve the same purpose as "private" or "protected" properties. You can't
 * access them from outside but you can use them inside of your class.
 *
 *    private setType(type: string) {
 *      // ...
 *    }
 *
 *    or
 *
 *    protected setType(type: string) {
 *      // ...
 *    }
 *
 * Also important you have to use "this" keyword if you want to access
 * properties or method of an object when you inside of it.
 *
 * like in the constructor:
 *
 *    constructor() {
 *      this.name = name;
 *    }
 *
 * like in in method when we print the age:
 *
 *    printAge() {
 *      console.log(this.age);
 *    }
 * like we assign the type:
 *
 *    private setType() {
 *      this.type = type;
 *    }
 *
 * Whit "private" and "protected" MODIFIERS you can powerful ways of controlling
 * how's able to access your properties and method in a class.
 */
class Person1 {
    constructor(name, username) {
        this.username = username;
        this.type = "";
        this.age = 73;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
;
const person1 = new Person1("Gannat", "gannat");
console.log(person1.name, person1.username);
person1.printAge();
person1.setType("THINKER GUY");
class Person2 {
    constructor(name, username) {
        this.username = username;
        this.type = "";
        this.age = 31;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType("THINKER GUY");
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
;
const person2 = new Person2("Gannat", "gannat");
console.log();
console.log(person2.name, person2.username);
person2.printAge();
//person1.setType("THINKER GUY"); // won't work with private method.
