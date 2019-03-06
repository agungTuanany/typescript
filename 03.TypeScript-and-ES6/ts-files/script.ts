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
  let variable = null;
  console.log(variable);
}
reset();    // call the function
console.log("the variable was called::", variable);

/*
 * The "let variable" in the function is contain in function context. Which mean
 * the fact that I set the "let variable" in this function doens't overwrite
 * variable outside this function.
 *
 * They have same name but technically the're two different variables and there
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
 * finally have with JS and TypeScript(TS) as well. And this is just ES6 sytanx
 * of course, but it is available in TS too, and there for using "let" and
 * "const" definetely is the way to go.
 */
