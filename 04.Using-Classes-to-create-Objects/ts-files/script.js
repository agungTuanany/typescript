"use strict";
// Creating Classes and Class Properties.
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
