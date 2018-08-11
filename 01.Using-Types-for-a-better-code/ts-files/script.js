"use strict";
/**
function Greeter(greeting: string) {
  this.greeting = greeting;
}

Greeter.prototype.greet = function() {
  return "Hello," + this.greeting;
}

// Oops, we're passing an object when want a string. This will print
// "hello," [object Object] = "Say Hello";
let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet());
}

document.body.appendChild(button);
 **/
// string
var myName = 'Max';
// myName = 28;     // result will get
// myName = 'Don'
// number
var myAge = 27;
// myAge = 'Max'
// bolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
//myRealAge = "27"
// array
var hobbies = ["Cooking", "Sport"];
//hobbies = [100]
//hobbies = ["100"]
//console.log(hobbies[0]);
//console.log(typeof hobbies);
//console.log(hobbies)
//console.log(typeof hobbies);
// tuples
var address = ["Superstreet", 89];
/**
 * **enum** is a cool features to make number more expressive. Consider this
 * case, get a couple of color you want to switch or check which statement was
 * choose. Check on typescript documentation for more information.
 */
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["White"] = 101] = "White";
    Color[Color["Yellow"] = 102] = "Yellow"; // 102
})(Color || (Color = {}));
var myColor = Color.Yellow;
console.log(myColor + " this is from enum");
/**
 * **any** is the flexible type in typescript, and there for you should really
 * carefully use it, it should be really exception when you use it. Try to be
 * explicit, try to avoid it, try to really find out which type you want to
 * use and only if you really can't tell and need all the flexibility then use
 * **any** because **any** basically give up all the features or advantages
 * typescript offers you.
 */
// The Any Type
var car = "BMW";
console.log(car + " this is from **any** types");
car = { brand: "BMW", series: 3 };
console.log(car);
console.log(car + " this is from **any** types");
/**
 * What function all did is give back to us a **string**, so we can be explicit
 * about this, we can also add a ** : ** after the function name and parenthesis
 * and then assign type to it.
 *
 * Now this type is always refers to the return value, so not to the value any
 * possible argument comeback to the soon, but instead only to what the value of
 * what return to be.
 */
// function
function returnMyName() {
    return myName;
    // return myAge; // this will result an error.
}
console.log(returnMyName() + " this from function");
/**
 * The special type regarding the return function or return type here is the
 * **void** type. If I have a new function simply name **sayHello**, and all it
 * does is print ** "Hello!" ** to the console, well this function doesn't
 * return anything, it does have return statement.
 *
 * Now I can be explicit about this by adding a type here to be **void**, which
 * means there's nothing to be return, what is does is, give an error if trying
 * to return something.
 *
 * This is another useful type especially **conjunction** with function when you
 * want to be **clear** that this function shouldn't return anything, of course
 * is nice to know what a function return but often time you will have
 * a function with some arguments and you want to be sure that this arguments
 * have specific type so that your function is able to work correctly
 */
// void
function sayHello() {
    console.log("Hello!");
    // return myName;
}
/**
 * If I have function **multiply** and here I have **value1** and **value2** and
 * I know should return a **number**, and then I simply return **value1** times
 * **value2**, if I now console.log
 *
 *    console.log(multiply(6, 'Max'));
 *
 * It will not result an error but we get **NaN**, which is a special type of
 * JavaScript to indicate, yeah we are expecting a number but it isn't. We could
 * avoid this problem if we knew that this function should always takes numbers
 * enchanted get a warning at the time we try to compile this code.
 *
 * So I can assign type to my argument too,
 *
 *    function myFunction(value1: number, value2: number): number{};
 *
 * This is great because prevent from doing this mistakes.
 */
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(20, 10) + " this is from argument types");
/*
 * This is how I can call the function, or assigned it, but it's looks kind of
 * wrong to be able to assign **myMultiply** to **sayHello**. Maybe it's great
 * to say **myMultiply** should be able to take **multiply** format or type, not
 * of **sayHello** type.
 *
 * Now to get idea of how we could tell it let see what makes up **sayHello**
 * function and what makes up **multiply** function. At **sayHello** function
 * the specific characteristic are we have no arguments and return nothing. At
 * **multiply** we have two arguments where both arguments are number and we
 * return a number.
 *
 * So it will be great if we could set the type to be something like have two
 * arguments which are both number and return a number.
 *
 *    let myMlutiply: (val1: number, val2: number) => number;
 *
 * This indicate which function this variable (myMultiply) will be able to hold.
 * Also notice that now we getting an error in:
 *
 *    myMultiply = sayHello;
 *
 * Also notice the name of argument totally ignored, that could be **a** and
 * **b**, the types are important type. With this setup we're able to define
 * which type of function a variable may hold.
 */
// function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 6) + " this is from function types");
/**
 * Typescript inverse **userData** variables should have. It's first type to be
 * an **object** with a **name** field which is type string, and a **age** field
 * which is type is number.
 *
 * This all objects turn into a type, the **name** of property are important, so
 * if I create a new object here:
 *
 *    userData = {
 *      a: "hello",
 *      b: 22,
 *    }
 *
 * and try to compile this, I still get an error cause the name of property
 * didn't match.
 *
 * As example before at **function types** the name didn't match at function
 * argument, only the types and the order of the types that matter. In Object
 * **names** of object do matter, and the reason for this is in the function the
 * **order** is important thing. In the object the order isn't clear, the order
 * might change behind the skin, so we can't say the first property should be
 * a string, the second property should be a number, instead the **names of the
 * property** are important to really identify the properties we are talking
 * about.
 *
 * The important thing to understand in the value (the real object) after the **
 * = ** we do have **key value pairs**. The **key** is property name, and the
 * **value** is the value of property and the are separated by ** : ** not
 * ** = **.
 *
 * So we have type definition
 *
 *    {name: string, age: string}
 *
 * and in type definition we also have **key value pairs**, but is not really
 * like properties and their values, instead just properties and type of
 * properties should have. That just important to keep on mind.
 */
//Objects and Types
var userData = {
    name: "max",
    age: 27
};
//userData = {
//  a: "hello",
//  b: 22
//}
// complex object
var complex = {
    data: [100, 3, 99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 99, 10],
    output: function (all) {
        return this.data;
    }
};
/**
 * Before using the union type or ** | **, we can assign variable
 * **MyRealRealAge** into like this:
 *
 *    let myRealRealAge: any = true;
 *
 * This assign type is **bad**, so to concatenate we use union type, be like:
 *
 *    let myRealRealAge: number | string = 27;
 *
 * this can be a number or a string but not a boolean. It's not like excluding
 * types, we just being explicit which types is maybe a number or string.
 */
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// Check types
var finalValue = "string";
if (typeof finalValue == "string") {
    console.log("Final value is a 'String'" + "" + ",this from check types");
}
;
var finalValue2 = 32;
if (typeof finalValue2 == "number") {
    console.log("final value from variable 'finalValue2' is a 'Number'");
}
;
var finalValue3 = 32;
if (typeof finalValue3 == "string") {
    // this console.log will not be called in DOM, because the **value** and the
    // **type** of value is mismatch, not a string and not a boolean, instead
    // a number
    console.log("final value from variabe 'finalValue3' is a boolean");
}
var finalValue4 = true;
if (typeof finalValue4 == "boolean") {
    console.log("final value from variabe 'finalValue4' is a boolean");
}
/**
 * The **never** types is kind of means it's never irrelevant, consider the
 * function **neverReturn** it's simple throw a new error with any error
 * messages. you could assign **never** to **neverReturn** function, and this
 * types (never) in typescript compiler **2.0** automatically inverse.
 *
 * Now why is **never**, because this function never finishes, it doesn't return
 * **void**. Don't mistake it for a function with should return void, for
 * example if you would simply console.log, this function return an error.
 *
 * So it's not return **nothing** it's never return **anything** that the **key
 * different** to understand here.
 *
 * So this is where you could specified never to make your intention clear, that
 * being said it something you probably wouldn't use all over the place, but you
 * might use it in function or in parts of your code where you know it's should
 * never be reach because the kind of them is **stack** and never return and as
 * here throw an error, well that probably is not the place you want to get with
 * your code in the first place, non then less if you want to define such places
 * in your application were you know, if I go there then I never return. Well
 * this is the type you gonna use or typescript automatically inverse anyway.
 */
// never types
function neverReturn() {
    throw new Error('An error!');
}
/**
 * non nullable type, which means you should be able to assign a **null** to
 * **types** except for you explicitly state that you want to do this.
 *
 * By default in typescript 2.0 if we create a new variable:
 *
 *    let canBeNull = 12;
 *    canBenull = null;
 *
 * As a side note if we initialize a new variable and not assign any value, by
 * default will in typescript will assign **any** by default, but it also has
 * the value **undefined**. so
 *
 *    let canAlsoBenull;
 *
 * **canAlsoBenull** by default is undefined, it true for all uninitialised
 * JavaScript and there for all of typescript variables.
 *
 * It's might you may already use a lot in your code if you want to reset
 * a value, if you want yo clear a value. The issue with this is that also can
 * lead to a problem because you might have null in a place where you want to
 * use this variables do a calculation or imagine is not a simple number but are
 * more complex object you try to access the properties on this object and since
 * it maybe null you might run into a problem, because if it's null you can't
 * access the properties. So you always to check first if it's null or not, or
 * find some other word around.
 *
 * In typescript 2.0 you might be explicit about which maybe null, and which
 * should never be null. You can indeed force this behavior by config the
 * **tsconfig.json** by adding :
 *
 *    "stricNullChekcs": true
 *
 * If I compile this code here, we will see an error "type  'null' is not
 * assignable to type 'number'". So the issue here is since we just added to
 * this compiler flag here, or compiler options, now typescript give us an error
 * because we try to assign null here. Again prior to typescript 2.0 this was
 * perfectly fine this compiler options just use didn't even exist, now is exist
 * if we add it can wipe this, we can now make sure we don't accidentally assign
 * null somewhere in our code to a variable which theoretically should only hold
 * a number, also **notice** that **canAlsoBeNull** doesn't give us an error,
 * because is it undefined by default and this is kind of exception if your
 * variable is undefined it might also be null since null undefined already two
 * special values in JavaScript.
 *
 * So only the first case or any case where we have specific type over then
 * undefined will not allow us to assign null there after. Now maybe we want
 * this check we want this extra layer of protection but we still want to assign
 * null this specific properties or variable here. In such a case you can use
 * a **union** type.
 *
 *    let canBeNull: number | null = 12;
 *
 * So null got like it's own type now, since a I set:
 *
 *    let canThisBeAny = null
 *
 * this **canThisBeAny** can now be a null, of course this might not be very
 * useful and you might thing about assigning **null** initially that will be
 * only type null will typescript compile **canThisBeAny**, at least if you have
 * **stricNullChecks : true**, if it's set to false that will still be wide to
 * **any** as was before.
 *
 * If you initialize a value with **null** it's not assume of type **any**, you
 * would have to overwrite like :
 *
 *    let canThisBeAny: any = null; //or
 *    let canThisBeAny: number | any = null;
 */
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
