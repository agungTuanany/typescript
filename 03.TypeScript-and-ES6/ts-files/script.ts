// let & const
console.log(">>> eg: LET & CONST <<<")

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
console.log(maxLevels, "this example for 'const'" );
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
console.log(">>> eg: BLOCK SCOPE <<<")
function reset() {
  //  console.log(variable)     // the result is "undefined"
  let variable = null;
  console.log(variable);
}
reset();    // call the function
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
console.log(">>> eg: ARROW FUNCTION <<<")
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));
/*
 * This at the upper side is the regular function
 */

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
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

const dividedNumber = (number1: number, number2: number) => number1 / number2;
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
const greetFriend = (friend: string) => console.log(friend);
greetFriend("gannat");

console.log();
console.log(">>> eg: DEFAULT PARAMATERS <<<");

// Not using Default Parameter
const countdown = (start: number): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done!=", start);
};
countdown(30);

// Using Default Parameter
const countdown2 = (start: number = 30): void => {    //(start = 30) is default parameter
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
console.log(Math.max(33, 99, 10, -3,)," this is from a list of value");
console.log(Math.max(...numbers,), " this is from number an array with spread operator");

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

function makeArray(...args: number[]) {
  return args;
};

console.log(makeArray(3, 4, 1, 99, 88), " this is an array from the REST operator");

const makeArray2 = (...args: number[]) => args;
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



