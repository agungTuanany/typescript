"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// import { PI,calculateCircumference } from "../math/circle";
const Circle = __importStar(require("../math/circle"));
const rectangle_1 = __importDefault(require("../math/rectangle")); //use "calc" name cause only export 1 things by default
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1.default(2, 10));
