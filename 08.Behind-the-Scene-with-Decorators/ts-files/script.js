"use strict";
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
 *      >> A FIRST SUMMARY <<
 *
 * The "KEY" take away is just a function, a normal function, any function could
 * be a 'decorator' in theory, but then it depends when and where you want o attach
 * this function as 'decorator? And what does depends on that? Which argument
 * can use on to this function. Then you simply attach decorator  with attach
 * sign "@", and you can even directly attach the kind of final decorator you
 * wanna use by leaving out prenthesis "()", in this case you have to make sure
 * that the parameter pass to the function match the parameters TS will give you
 * for this type of decorators.
 *
 * The alternative way is to use "factory", you have to execute by adding
 * parenthesis and any potential argument you specified. And this "factory" has
 * return a function which can be use as decorator which mean a function with
 * the right parameters.
 *
 *    >> METHOD DECORATOR <<
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
let Person = class Person {
    constructor() {
        console.log("HI!");
    }
};
Person = __decorate([
    logged
], Person);
// FACTORY
function logging(value) {
    return value ? logged : null;
}
let Car = class Car {
};
Car = __decorate([
    logging(true)
], Car);
// ADVANCED
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = class Plant {
    constructor() {
        this.name = "GREEN JOINT";
    }
};
Plant = __decorate([
    logging(true),
    printable
], Plant);
const plant = new Plant();
plant.print();
// METHOD DECORATOR
// PROPERTY DECORATOR
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwriteable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
class Project {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    editable(false)
], Project.prototype, "calcBudget", null);
const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(Project);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Targer: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course("Super Course");
course.printStudentNumbers("ANYTHING", true);
course.printStudentNumbers("ANYTHING", false);
