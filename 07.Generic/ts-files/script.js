"use strict";
/*
 * The important to realize in the "echo" function is kind of generic function
 * because we have "any" type. But we do have big disadvantage here with this
 * "any" type, you see I get back any data I enter.
 *
 * So since I enter a "string" in the first "echo" call, I could not only log
 * the data I entered, I could also enter ".length", because a string like an
 * array has a length the number of character.
 *
 *    console.log(echo("Gannat").length);
 *
 * now what the issue I get here, well it's pretty clear, if I just enter the
 * dot ".",  my IDE is not offering me "length", yes I can type it, and end up
 * with appears, but it's not fatty written here, which mean my IDE doesn't know
 * that we getting back a string here, you might say IDE magic, not really that
 * important, but maybe the problem becomes clear with the next example,
 *
 *    console.log(echo("30").length); // get "undefined" result
 *
 * So, the issue I got here, a "number" doesn't have a "length" which why I get
 * undefined and that has a certain problem to it, if I do the some on the
 * object here
 *
 *    console.log(echo({name: "Gannat", age: 30}).length); // get "undefined"
 *
 * So the issue here, clearly is that we don't know the type here, and would be
 * nice here if we get a compilation error, if we try to access "length" on this
 * number, but we can't get this because "data type" is "any", and there for
 * TypeScript doesn't know any better then we do if this "data type" actually
 * has a length property for example.
 *
 * So we might want generic function like this, which can handle all kind of
 * "data", but once we get back to "data" it would be nice if TypeScript would
 * be aware of the exact data type and not of type any.
 *
 *
 *        >>> CREATING A GENERIC FUNCTION <<<<
 *
 * The "<T>" strain construct make "betterEcho" function is a generic function,
 * it's tell TypeScript this is a generic function. With this "<T>" character
 * here were telling TypeScript when using this function give the type, and then
 * I will be able to use this type.
 *
 *    function betterEcho<T>() {}
 *
 * There for I can use "T" here as a type, and we know the data we get will be
 * of type "T", because again that what we will assign when we using this
 * function.
 *
 *      (data: T)
 *
 * Since TypeScript aware of the result type, I can't do any operation with it
 * that aren't support it by it's type. By the way you can also explicitly state
 * which type you will use it in this function. Right now TypeScript is
 * inferring it by the type of the argument but it could also state number here
 * "<number>".
 *
 *    console.log(betterEcho<number>(30));
 *
 * with "<number>" keyword I make clear that I want to have a number, if I then
 * pass not an number in "data-argument", I will have a TypeScript error.
 * Because I explicitly said that this will be a generic function using the
 * number type but the data I pass in doesn't match this type.
 *
 * And that is a light types or generic types, generic function, generic in
 * general are powerful tool to improve your code, make your code flexible and
 * yet manageable by the TypeScript compiler.
 *
 *
 *        >>> A BUILT-IN GENERIC TYPE ARRAY <<<
 *
 * The most prominent built in generic probably is the array. By explicitly
 * setting the type "<number>" in an array, I'm getting the compiler support
 * which make sure that I'm not accidentally pushing something on that array
 * which doesn't work. Now I explicitly set which values this array will be able
 * to hold, normally you can make "string", "number", but if you want to be
 * explicit and don't want to have a mix array this is how you do.
 *
 * So array is generic type by default.
 *
 *
 *          >>>> GENERIC TYPES AND ARRAYS <<<<
 *
 * Speaking of an arrays, you can also assign a generic type to be in array for
 * example.
 *
 *            >>> USING GENERIC TYPES <<<<
 *
 * So generic types is not this thing "<T>". Everything after the column ":" but
 * before the equal sign "=" is a "type assignment".
 *
 *      <T>(data: T) => T = betterEcho;
 *
 * So I just write the better "echo" function, but I'm assigning this all
 * generic things here "<T>(data: T) => T = betterEcho;" The generic function
 * types to a normal constant making this a type assignment.
 *
 *          >>> CREATING A GENERIC CLASS <<<
 *
 * The issues we got here is, if I change the input value from "baseValue" or
 * "multiplyValue" into a 'string', I'm not getting any compilation error, but
 * of course I get "NaN" as a result.
 *
 * By adding "+" keyword on
 *
 *    return +this.baseValue * +this.mutiplyValue;
 *
 * I explicitly tell TypeScript I use a number.
 *
 *
 *
 *          >>> CONSTRAINT <<<
 *
 * In this lecture, you can control the constrain on the generic type, and in
 * a class.
 *
 * You can create a generic class that you have "extends" keyword, and with that
 * you can control which values can be pass.
 */
// SIMPLE GENERIC
function echo(data) {
    return data;
}
console.log("SIMPLE GENERIC");
console.log(echo("Gannat"));
console.log(echo("Gannat").length);
console.log(echo(30));
console.log(echo(30).length);
console.log(echo({ name: "Gannat", age: 30 }));
console.log(echo({ name: "Gannat", age: 30 }).length);
console.log();
// BETTER GENERIC
function betterEcho(data) {
    return data;
}
console.log("BETTER GENERIC");
console.log(betterEcho("Gannat"));
console.log(betterEcho("Gannat").length);
console.log(betterEcho(30));
console.log(betterEcho({ name: "Gannat", age: 30 }));
// BUILT-IN GENERIC
const testResult = [1.34, 2.32];
console.log();
console.log("BUILT-IN GENERIC");
console.log(testResult);
testResult.push(-2.54);
console.log(testResult);
// GENERIC TYPES AND ARRAYS
function printAll(args) {
    args.forEach((element) => console.log(element));
}
;
console.log();
console.log("GENERIC TYPES AND ARRAYS");
printAll(["Apple", "Cinamon", "papaya"]);
// USING GENERIC TYPES
const echo2 = betterEcho;
console.log();
console.log("USING GENERIC TYPES");
console.log(echo2("EITHER SOME NEW ELSE"));
// CREATING A GENERIC CLASS
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 2;
console.log();
console.log("GENERIC CLASS");
console.log(simpleMath.calculate(), "//will show you 'NaN' cause multiplyValue unvalid");
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
