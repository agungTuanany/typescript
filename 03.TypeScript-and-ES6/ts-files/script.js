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
let variable = "Test";
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
const maxLevels = 100;
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
    let variable = null;
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
const addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
/*
 * This at the upper side is the regular function
 */
const multiplyNumbers = (number1, number2) => number1 * number2;
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
const dividedNumber = (number1, number2) => number1 / number2;
console.log(dividedNumber(10, 3));
// arrow function without parameters
const greet = () => {
    console.log("Hello Console!");
};
const greet2 = () => console.log("Hello console2!");
greet();
console.log();
greet2();
// arrow function with 1 parameter
const greetFriend = (friend) => console.log(friend);
greetFriend("gannat");
console.log();
console.log(">>> eg: DEFAULT PARAMATERS <<<");
// Not using Default Parameter
const countdown = (start) => {
    while (start > 0) {
        start--;
    }
    console.log("Done!=", start);
};
countdown(30);
// Using Default Parameter
const countdown2 = (start = 30) => {
    while (start > 0) {
        start--;
    }
    console.log("Great!=", start);
};
countdown2();
console.log();
console.log(">>> eg: THE REST & SPREAD OPERATOR <<<");
/*
 * Basically the "rest" and "spread" parameter do kind of similar things, there
 * are closely related. Above allow you to work with "Arrays" and "list of data"
 * and difference of course is an array a kind of "object" where you store
 * multiple values, where's list of value is just well "list of values", that's
 * all.
 *
 * You pass a list of number to function like "Math.max" function, and you don't
 * pass an array as the arguments, you pass a list of number you want to check.
 *
 *    Math.max(33, 99, -5, 1);    // this is not an array, just a list of number
 *
 * So that is how you use the "max" function on the "Math" object here.
 *
 * But what if we want to check the number of an array, if we just pass
 * a parameter which is "numbers", won't work we do get compilation error,
 * because we can't assign a 'number[]' (number array) to the "max" function to
 * expect a list of numbers.
 *
 *    const numbers = [1, 10, 99, -5, 35];
 *    console.log(Math.max(numbers));   // will get an error
 *
 * The solution is the "spread" operator which is "..." (three dots).
 *
 *    console.log(Math.max(...numbers));
 *
 * It's basically spread out out the "numbers array" into single values. In
 * simple language is turn an array into a list of value, kind removing the
 * square bracket "[]", or in more simple word is just fetches an array into
 * list of value.
 *
 * The "spread" operator really useful there for because allows you to flexibly
 * transform your array without having to write any complicated loops or
 * something like that, instead you just add three dot ("...").
 */
const numbers = [1, 10, 89, -5, 35];
console.log(Math.max(33, 99, 10, -3), " this is from a list of value");
console.log(Math.max(...numbers), " this is from number an array with spread operator");
/*
 * The "rest" operator.
 *
 * Imagine we going to write our own function makeArray(), we expect to get some
 * argument which should be number but this should be a list of arguments.So
 * I return this "args" here, and "args" should be an array.
 *
 *    function makeArray(args: number) {
 *        return args;
 *    };
 *
 * At this moments this doesn't work, I only have one element (parameter) which
 * only fetch the first value. For that reason I can make more than one
 * parameter to fetch into an array, by example,
 *
 *    function makeArray(args1: number, args2: number) {
 *        return [args1, args2];    // return as an array.
 *    };
 *    console.log(makeArray(1,2));  // [1, 2] << result on console.
 *
 * But how to make this function more flexible way, it's only allow two values
 * (parameter) here, but how if we want put 100 values. Well that of course will
 * be an issue, and there for there's simple way,
 *
 *    function makeArray(args: number) {    // in (args: number) I want to get
 *    a list of elements.
 *        return args;
 *    };
 *
 * so first of all that should be a flexible amount of were number of element
 * I get, could be more than two values, and also I want to return an array.
 *
 * Well I can use the "rest" paramater ("...").
 *
 *    function makeArray(...args: number[]) {
 *        return args;
 *    };
 *
 *      == DIFFERENT BETWEEN REST AND SPREAD OPERATOR ==
 *
 * if we use in a function call,
 *
 *    Math.max(...args);    // this is a SPREAD OPERATOR.
 *
 * So we call a function and pass something to the function then I use the
 * "spread" operator. Because will spread out an array. It wouldn't turn a list
 * of numbers into an array because it does not work, because how it should look
 * like.
 *
 * We can't do something like this:
 *
 *    Math.max(..1, 3, 99);
 *
 * it will be separate arguments. The ("...") will refer to the first parameter.
 *
 * Now When we create our own function,
 *
 *    function makeArray(...args: number[]) => args;
 *
 * the ("...") means whatever "args" is, and it can very well multiple arguments
 * turn them into an array. Because it will fetch all the parameters we pass to
 * make array function ' (..args: number[]) '.
 *
 * It will take all the parameter when we call the function and put them into in
 * one array.
 *
 * What it does simply depends on the place the code where you use ("...") it.
 */
function makeArray(...args) {
    return args;
}
;
console.log(makeArray(3, 4, 1, 99, 88), " this is an array from the REST operator");
const makeArray2 = (...args) => args;
console.log(makeArray(88, 99, 1, 4, 3), " This is an array from the Rest operator, and from makeArray2 function");
/*
 * So if you want to combine some of the parameter to pass to the function like:
 *
 *    function makeArray(name: string, ...args: number[]) {
 *      return args;
 *    };
 *
 * and I have rewrite or recall a function like:
 *
 *    console.log(makeArray("gannat", 88, 99, 1, 4, 3));
 */
console.log();
console.log(">>> eg: DESTRUCTURING ARRAYS <<<");
/*
 * What is "DESTRUCTURING" all about?, consider you have an array which look
 * like this,
 *
 *    const myRoutine =["prayer", "reading", "writing"];
 *
 * and I want printout myRoutine in console,
 *
 *    console.log(myRoutine[0], myRoutine[1], myRoutine[2]);
 *
 * and if you want to store it into a variable,
 *
 *    const routine1 = myRoutine[0];
 *    const routine2 = myRoutine[1];
 *    const routine3 = myRoutine[2];
 *
 * It's work but we have to write quite a lot of lines, we have a shorter
 * syntax in ES6 that also support the TypeScript is "destructuring", we create
 * a new constant and then we use this array notation "[]" but on the left side
 * of the equal sign "=", on the right side we assign this array which we want
 * to destructure so if want to get element out of it and then we have routine1,
 * routine2, routine3 in the left side, look like,
 *
 *    const [routine1, routine2, routine3] = myRoutine;
 */
const myRoutine = ["prayer", "reading", "writing"];
console.log(myRoutine[0], myRoutine[1], myRoutine[2]);
console.log(myRoutine);
// UNDESTRUCTURING
const routine1 = myRoutine[0];
const routine2 = myRoutine[1];
const routine3 = myRoutine[2];
console.log(routine1, routine2, routine3, " ,This is from const routine1-routine3");
// using DESTRUCTURING,
const myHobbies = ["prayer", "reading", "writing"];
const [hobbies1, hobbies2, hobbies3] = myHobbies;
console.log("destructuring my hobbies ", myHobbies);
console.log("This is from desctructuring arrays, my hobbies is: ", hobbies1, hobbies2, hobbies3);
console.log();
console.log(" >>> eg: DESTRUCTURING OBJECT <<<");
/*
 * Destructuring is not only available for arrays, it also available for an
 * object, let say I have an object "userData",
 *
 *    const userData = {userName: "gannat", age: 27};
 *    const userName = userData.userName;
 *    const age = userData.age;
 *
 *    console.log(userName, age);
 *
 * So far so traditional, that how you know how to access the values. Now if the
 * goal is simply to extract the value of my object (userData) and assign them
 * to the new variables or constant and of course destructuring does only work
 * with the "let" keyword, well I have short syntax available too.
 *
 * Since I'm using an object I'm not using square bracket "[]" this is syntax
 * for destructuring an array, for destructuring an object U'm using
 * curly-braces "{}". Then I assign the value I want to extract.
 *
 */
// UNDESTRUCTURING
const userData = { userName: "gannat", age: 27 };
const userName = userData.userName;
const age = userData.age;
console.log(userName, age);
// DESCTRUCTURING
const userData1 = { userName1: "gannat", age1: 27 };
const { userName1, age1 } = userData1;
console.log("This is from DESCTRUCTURING OBJECT: ", userName1, age1);
/*
 * It's important the name in Destructuring matches with the "key-name" in the
 * object, otherwise TypeScript and ES6 has no chance of knowing which "key" you
 * want to assign to which variable or constant here. Because the order doesn't
 * really matter here, and the order something you can relay on, just because you
 * wrote it. This order doesn't mean that, this will be the order the object has
 * internally once your code run.
 *
 * As a side-note if you want to use different name for your constant you can
 * put an alias, Notice that I no longer can access "userName" and "age" thought
 * because the variables already constant created are "myName" and "myAge" not
 * "userName" or "age". This the alternative syntax available but this is purely
 * optionally.
 *
 *  const {userName: myName, age: myAge} = userData1;
 */
const userData2 = { userName2: "gannat", age2: 27 };
const { userName2: myName, age2: myAge } = userData2;
console.log("This is from DESTRUCTURING OBJECT with userData2: ", myName, myAge);
console.log();
console.log(">>> eg: TEMPLATE LITERALS <<<");
/*
 * Template literal is a kind of extended string or string with more features.
 * In a normal string I could print the "clientName" like:
 *
 *    const clientName = "gannat";
 *    const greeting = "hello " + clientName;
 *
 * This is works, but it's get some trouble if I want to use "clientName" in
 * multiple place in the string because each time I have to skip out the string
 * with a plus sign "+" and there after I have to re-enter and type whatever
 * I want to type and I also can't write multiple line string, so that really is
 * kind of cumber some and not always the best choice.
 *
 * If I want store more complex text in my "greeting" constant here, I could use
 * a "template literal" instead, and I create one with the Backticks (``), this
 * are the character allow me to make more complex string, including multi line
 * string.
 *
 *
 */
const clientName = "gannat";
const greeting = "hello " + clientName;
console.log(greeting, ", This is Normal string");
const greetingTemplate = `THIS IS A HEADING
THIS IS A TEMPLATE STRING WITH ES6 FEATURES
HELLO THERE!, ${clientName};
THIS IS HOW TO MAKE A STRING MORE COMFY
`;
console.log();
console.log(greetingTemplate);
