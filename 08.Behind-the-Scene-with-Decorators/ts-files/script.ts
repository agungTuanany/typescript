/*
 *      >> INTRODUCTION <<
 *
 * Basically "decorators" are function you can attach to classes, to method, to
 * properties, and then work with this class, method, properties, or transform
 * them. Is kind "meta-programming". Decorators give you a chance of extending
 * a class, adding a extra functionality simply by adding little thing and then
 * all of suddenly introducing of a lot of new functionality to a class, to
 * a properties.
 *
 *      >> Creating a Class Decorator <<
 *
 * When "decorator" attach to class will get one argument by TypeScript, keep in
 * mind decorator are TypeScript features, so TypeScript manages which argument
 * will be pass to a decorator depending on to what this decorator is attach to.
 *
 *      function logged(constructorFn : Function) // 
 *
 * That just what TypeScript pass to a "decorator". If you attach "decorator" to
 * a class it will get one argument and this one argument is the constructor
 * function of this class.
 *
 *      >> DECORATORS FACTORIES <<
 *
 * "logging" is not really decorator attach, I'm attach logging result since
 * I executing  the "logging" function, and the result whatever "logging"
 * function return is the "logged" function which again is a valid function to
 * be use as a class decorators "(constructorFn: Function)" because it's get
 * constructor argument.
 *
 * Keep this in mind, "@logging" means attach the result of this function for
 * execution which is "null" if we set it to false, so no decorator was attached.
 *
 *        >> CREATING A USEFUL DECORATOR <<
 *
 * It's important to keep in mind, at "Plant" class that "decorator" attach the
 * class get the "constructorFn" were basically is this blueprint of  "Plant"
 * class, that how's JS work, the class just syntactic sugar, we have
 * a "constructorFn" at the background.
 *
 * And the ".prototype" on this "constructorFn", kind of parent class of all
 * object, I add the ".print" method that allow to print it self.
 *
 * So with that I add more little bit more useful 'decorator' to the class, to
 * show what you can do with decorator.
 *
 *
 */

function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log("HI!");
  }
}

// FACTORY
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}

// ADVANCED
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@printable
class Plant {
  name = "GREEN JOINT";
}

const plant = new Plant();
(<any>plant).print();
