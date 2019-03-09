Sun 12:45, jakarta.

# Objective | Understanding-the-TypeScript-Compiler

### Videos :

- How code gets compiled
- Changing the Compiler Behavior on Errors
- Debugging your TypeSCript Code using Source Maps
- Avoiding implicit Any
- More Compiler Options
- Compiler improvements with TypeScript 2.0
- Resource Compiler Documentation


##### 28-feb 2019 13:36 - Changing the compiler Behavior on Errors

Make tsconfig.json is from cli: tsc --init

    "noEmitOnError": true   >> It's behavior for simple option, for not compile an error behavior


##### 04 Mar 2019 21:12 - Debugging your TypeScript Code using Source Maps

If you are developing a project, you probably might to use this for developing
in production more easy.

By config your tsconfig.json at:

    "sourceMap": "true"


##### 04 Mar 2019 27:27 - Avoiding implicit Any

Kind of reminder to developer that should be implicit in any describe variables.

    eg: let anything; / it should be

    let anything: any;

    "noImplicitAny": "true"


##### 05 Mar 2019 10:10 - Compiler Improvements with TypeScript 2.0

    "strictNullChecks": true,              /* Enable strict null checks. */
    "noUnusedParameters": true,            /* Report errors on unused parameters. */

