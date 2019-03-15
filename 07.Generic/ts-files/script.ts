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
 */

// SIMPLE GENERIC

function echo(data: any) {
  return data;
}

console.log(echo("Gannat"));
console.log(echo("Gannat").length);
console.log(echo(30));
console.log(echo(30).length);
console.log(echo({name: "Gannat", age: 30}));
console.log(echo({name: "Gannat", age: 30}).length);
