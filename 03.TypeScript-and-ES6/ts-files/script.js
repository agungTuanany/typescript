"use strict";
// let & const
console.log(">>> eg: LET & CONST <<<");
/*
 * The differences between "var" and "let" is the "scope" of variable. The "let"
 * keyword create a "block-scope" variable which mean it's contain in the block
 * which you find this variables.
 *
 * The "var" variable create a "global-scope" variable. Which can call in
 * block-scope.
 *
 * The "let" keyword is prefer way and a better then "var" keyword since only
 * has advantages and no disadvantages.
 */
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
/*
 * In this upper example we reassign the "let variable" to another value, and
 * it's possible of course, the only different is the "scope" where "variable"
 * sits-on, and the end of course you possibly change the value.
 *
 * You should keep on your mind the type of variable ("Test") has to equal the
 * type ("Another Value") had before ("Test"), as automatically.
 */
var maxLevels = 100;
console.log(maxLevels, "this example for 'const'");
// maxLevels = 99;    // Won't work
/*
 * "const" is immutable data structure or data variable.
 *
 * Well it's good practice to use "const" keyword whenever you know the value is
 * not going to change, because then you make clear in your code and you also
 * get compilation support and get warning errors if you indeed trying to change
 * even thought you didn't well want to do so.
 */
console.log();
console.log(">>> eg: BLOCK SCOPE <<<");
function reset() {
    //  console.log(variable)     // the result is "undefined"
    var variable = null;
    console.log(variable);
}
reset(); // call the function
console.log("the variable was called is::", variable);
/*
 * The "let variable" in the function is contain in function context. Which mean
 * the fact that I set the "let variable" in this function doesn't overwrite
 * variable outside this function.
 *
 * They have same name but technically there two different variables and there
 * for I can't evaluate their values independently.
 *
 * I can also to log "variable" in:
 *
 *    function reset() {
 *        console.log(variable);     // the result is "undefined"
 *        let variable = null;
 *        console.log(variable);
 *    }
 *
 * The reason for that because, the "variable" I try to access is defined
 * outside the function. There for I don't have access to it inside of my
 * function, I should pass it as parameter to the function.
 *
 * That's the behavior you know from a lot of different languages, and now we
 * finally have with JS and TypeScript(TS) as well. And this is just ES6 syntanx
 * of course, but it is available in TS too, and there for using "let" and
 * "const" definitely is the way to go.
 */
console.log();
console.log(">>> eg: ARROW FUNCTION <<<");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
/*
 * This at the upper side is the regular function
 */
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
/*
 * The arrow function "=>".
 *
 * for Arrow function we do not have to declare "function" keyword. We just
 * start with the list parameters, The only exception here if you just have one
 * argument then you don't need parenthesis around it, thought you won't leave
 * it if you want also to declare the type which you should.
 *
 * the "=>" is to point the function body. If you only have one line,
 *
 *    const multiplyNumbers = () => {
 *      return number1 * number2;
 *    }
 *
 * You could simply write,
 *
 *    const multiplyNumbers = () => number1 * number2;
 */
var dividedNumber = function (number1, number2) { return number1 / number2; };
console.log(dividedNumber(10, 3));
// arrow function without parameters
var greet = function () {
    console.log("Hello Console!");
};
var greet2 = function () { return console.log("Hello console2!"); };
greet();
console.log();
greet2();
// arrow function with 1 parameter
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("gannat");
console.log();
console.log(">>> eg: DEFAULT PARAMATERS <<<");
// Not using Default Parameter
var countdown = function (start) {
    while (start > 0) {
        start--;
    }
    console.log("Done!=", start);
};
countdown(30);
// Using Default Paramater
var countdown2 = function (start) {
    if (start === void 0) { start = 30; }
    while (start > 0) {
        start--;
    }
    console.log("Great!=", start);
};
countdown2();
