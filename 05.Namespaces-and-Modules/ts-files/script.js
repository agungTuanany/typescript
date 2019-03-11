var MyMath;
(function (MyMath) {
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14; // this PI is MyMath-scope
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
/*
 * NAMESPACES AND MODULES
 *
 * Why could we need "Namespaces" or why would we need to kind of structure our
 * code, or improve the structure our code?
 *
 * Lets consider this example, we want to work with a couple of tools regarding
 * mathematical operation,
 *
 *    const PI = 3.14;
 *
 *    function calcCircumference(diameter: number) {
 *      return diameter * PI;
 *    }
 *
 *    function calcRectangle(width: number, length: number) {
 *      return width * length;
 *    }
 *
 * At this moment, the code is kind mathematically group, another word the two
 * function related to math. So on we want to group all this mathematical
 * things, because consider for our application we then want to use all this
 * things and we might want to create a new "rectangle" and calculate something,
 * and we might simply want to log, and that can quickly get bit to "big" and
 * "unstructured" in our "global-scope", because consider we won't have two
 * functions, let say we have more functions and couple on constant variable,
 * so our code structure get quite messy to work with all this function, and to
 * ensure not using "duplicate name".
 *
 * There for we introduce "namespace" keyword, is kind like JavaScript Object we
 * have here, and we take the things we want to put on "namespace" and put all
 * on there,
 *
 *    namespace MyMath {
 *      const PI = 3.14;
 *
 *      function calcCircumference(diameter: number) {
 *        return diameter * PI;
 *      }
 *
 *      function calcRectangle(width: number, length: number) {
 *        return width * length;
 *      }
 *    }
 *
 * So that exactly "namespace" there for, we don't want to pollute our
 * "global-scope" instead I would have to access it at the "MyMath." namespcae,
 *
 *    console.log(myMath.calcRectangle(10, 20));
 *
 * Still it doesn't work, cause when we're using "namespace" here we also have
 * to add the "export" keyword, for make available outside in the global-scope.
 *
 *    namespace MyMath {
 *      const PI = 3.14;
 *
 *      export function calcCircumference(diameter: number) {
 *        return diameter * PI;
 *      }
 *
 *      export function calcRectangle(width: number, length: number) {
 *        return width * length;
 *      }
 *    }
 *
 * So "PI" for example will still only available within the "namespace" but all
 * the function can be use outside, which then allows me to log.
 *
 * So that is how we reorganize our mathematical function here and so on, and
 * make sure we're not polluting the 'global namespace'.
 *
 * In the end, with "namespace" we can split-up our code, and of course we can
 * have a multiple "namespaces", and we can there for "restructure our code, and
 * make sure that not everything is registered in our global-scope which tends
 * to get polluted pretty quickly on JavaScript since everything is registered
 * there by default.
 *
*/
console.log("AN INTRODUCTION TO NAMESPACES");
var PI = 3.41; // this PI is global-scope
console.log(MyMath.calcRectangle(10, 20), " // This calcRectangle");
console.log(MyMath.calcCircumference(3), "// This calcCircumference");
console.log(PI, " // This the PI from global-scope const");
console.log();
console.log("02. NAMESPACES AND MULTIPLE FILES");
/*
 * The convenient way to bundle all JavaScript Files together into one single
 * file. How do we bundle it into one file? Run the TypeScript CLI:
 *
 *    tsc --outFile <specified a bundle file>  <specified the .ts for bundle
 *    | can more then two files or more>
 *
 * --outFile: create one single file,
 *
*/
