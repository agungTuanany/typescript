// MODULES ON TYPESCRIPT
/*
 * How can we import all the files with "modules"? It's simply add the "export"
 * keyword with file that we want to use in our main JavaScript file, in this
 * example I use "script.ts". I can simply "export" a "const", "function",
 * "variable", "class", basically all the objects.
 *
 * Now the "const PI", and "function calculate" are above made available for
 * outside "circle.ts" files.
 *
 * So on, in "script.js" I import them with the "import-syntax".
 *
 *    import { PI,calculateCircumference } from "../math/circle";
 *
 * TypeScript automatically reserve the ".ts" extension for Typescript file, and
 * in the curly braces "{}" we specify what we want to import.
 *
 * When we compile the ".ts" file in "tsc" CLI, we caught an error said:
 *
 *    uncaught ReferenceError: require is not defined.
 */
import { PI,calculateCircumference } from "../math/circle";
console.log(PI);
console.log(calculateCircumference(10));
