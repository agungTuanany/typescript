// Creating Classes and Class Properties.
console.log(" 01. CREATING CLASSES AND CLASS PROPERTIES")
/*
 * Basically "class" is allow us to prepare some kind of blueprint for object,
 * so you can later on create object base on a "class" to then make sure this
 * object already has some properties or methods which again you define in this
 * "class".
 *
 *  == Private & Protected props ==
 *
 *  Private props are only available or accessible from the object you create
 *  base on grand "class".
 *
 *  Protected props are accessible from any object or classes which inherit from
 *  grand class.
 *
 * For example, if were you inherit from this "Person-class", then the
 * 'child-class' which inherited from the 'Person-class' would also have access
 * to "protected props" but not to "private" one.
 *
 * It's important to understand we should set the properties directly in the
 * class body and not in the constructor.
 *
 * as a side note there's a quick short cut that TypeScript over for setting up
 * properties which you want to set on the constructor.
 *
 * Imagine we have something like a "username" so we also have "name", then we
 * could also say "public" for "username" of type "string",
 *
 *    constructor (name: string, public username: string) {};
 *
 * Notice the "public" keyword on "username" whit that I'm telling TypeScript,
 * not only expect to get "username" argument in the "constructor" function but
 * also automatically create a "public" properties in this "Person" class and
 * assign the argument you get pass into the constructor to this "username"
 * properties.
 *
 * so the "public username: string" expression here basically is a shortcut for
 * creating a properties on the "Person" class, getting the argument ("name:
 * string"), and then assign the argument ("this.name = name;).
 *
 * put in another words, the "Person" class can be like:
 *
 *  class Person {
 *    private type!: string;
 *    protected age!: number;
 *
 *    constructor(public name: string, public username: string) {}
 *  }
 *
 * but I leave this setup to have a good example of above possible ways of
 * creating and assigning properties.
 */

class Person {
  name: string;
  private type!: string;  // adding "!" to prevent an error for strictPropertyInitialization @ts-2.7
  protected age!: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }
};

const person = new Person("Gannat", "gannat");
console.log(person);

/*
 * As you can see here uses the "constructor" function is able to assign the
 * "username" with this shorter setup syntax, as well as the "name" with the
 * longer setup syntax.
 *
 * And to prove here I can also access "name" and "username" with this syntax:
 *
 *  console.log(person.name, person.username);
 */

console.log("this is calling with person.name and person.username: ", person.name, person.username);

console.log(`this is calling with
person.name: " ${person.name}" and
person.username:" ${person.username}"`);


console.log();
console.log("02. CLASS METHOD AND ACCESS MODIFIER");
/*
 * To setup the method is like a function without the "function" keyword.
 *
 * This how you can access "private" properties inside your "class"
 *
 *    printAge() {
 *      // ...
 *    }
 *
 * If I want to set a private or protected from outside class, I could create
 * setter inside the class.
 *
 * This how you create method which you may access them from outside class.
 *
 *    setType() {
 *      // ...
 * }
 *
 * I don't have to initialize "protected" properties through the constructor,
 * I can initialize in right on up to.
 *
 * so this is how you can initialize properties when you declaring them.
 *
 *    class Person1 {
 *      ....
 *      protected age: number = 73;
 *    }
 *
 * One important to notice, "method" can also be "private" or "protected", which
 * serve the same purpose as "private" or "protected" properties. You can't
 * access them from outside but you can use them inside of your class.
 *
 *    private setType(type: string) {
 *      // ...
 *    }
 *
 *    or
 *
 *    protected setType(type: string) {
 *      // ...
 *    }
 *
 * Also important you have to use "this" keyword if you want to access
 * properties or method of an object when you inside of it.
 *
 * like in the constructor:
 *
 *    constructor() {
 *      this.name = name;
 *    }
 *
 * like in in method when we print the age:
 *
 *    printAge() {
 *      console.log(this.age);
 *    }
 * like we assign the type:
 *
 *    private setType() {
 *      this.type = type;
 *    }
 *
 * With "private" and "protected" MODIFIERS you can powerful ways of controlling
 * how's able to access your properties and method in a class.
 */

class Person1 {
  name: string;
  private type: string = "";
  protected age: number = 73;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
};

const person1 = new Person1("Gannat", "gannat");
console.log(person1.name, person1.username);
person1.printAge();
person1.setType("THINKER GUY");


class Person2 {
  name: string;
  private type: string = "";
  protected age: number = 31;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("THINKER GUY")
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
};

const person2 = new Person2("Gannat", "gannat");
console.log();
console.log(person2.name, person2.username);
person2.printAge();
//person1.setType("THINKER GUY"); // won't work with private method.

console.log();
console.log("03. INHERITANCE ");

/*
 * Re-writing the whole "Person" class will be duplicated the code, and the code
 * less reusable. So for inherit all "Person" class I use the keyword "extends"
 *
 * What does mean is, take the "Person" class and use all of code inside the
 * "Person" class and what ever I specified in "child" class get ever appended
 * if isn't included in "Person" class, or overwritten if it was included.
 *
 * even thought I pass "Matahari" to the Constructor from "Person" class which
 * set "this.name = name" (constructor from "Person" class), it's get over
 * written by "name = "Gannat in the "Gannat" class.
 *
 * So the content define in the main class ("Gannat") always over write
 * the content of superclass ("Person") of your parent class.
 *
 * None the less I have solve this issue by adding the constructor in the next
 * lecture.
 */

// INHERITANCE

class Gannat extends Person {
  name = "Gannat";   // this will overwrite the name properties in the "Person" class
}

const gannat = new Gannat("Matahari", "gannat"); // "Matahari" will be over-written.
console.log(gannat);

console.log();
console.log("04. INHERITANCE AND CONSTRUCTOR");

/*
 * Now we added the constructor to make sure that we do not have to pass a "name"
 * here because the "name" properties set and stow (load) anyways. But it has to
 * pass the user class.
 *
 * When extending the class you always call the "super()" first, which call all
 * the constructor of your "parents" class. I didn't have to do that in the last
 * example, In such a case a parent constructor will always be called.
 *
 * But if I do define my own constructor in extended class, the "super()" refer
 * to the "parent" class, and pass an arguments.
 */

// INHERITANCE AND CONSTRUCTOR

class Gannat1 extends Person1 {
  //name = "Gannat"


  constructor(username: string) {
    super("Gannat", username);
  }
}

const gannat1 = new Gannat1("gannat");
console.log(gannat1);

console.log();
console.log("05. INHERITANCE WRAP UP")

/*
 * Now what if I want to change the age of my "Person" class here, notice the
 * "age" properties is "protected" variable, which mean it's available in "child"
 * class to.
 *
 * I can access "age" properties with "this" keyword and then set the number.
 *
 * Just always keep on mind you inherit everything from your base (master) class
 * except for "private" method, and then you can extended by writing your own
 * logic, or overwrite it if you have to define method ("printAge")
 */

// INHERITANCE WRAP UP

class Gannat2 extends Person1 {

  constructor(username: string) {
    super("Gannat", username);
    this.age = 30;
  }
}

const gannat2 = new Gannat2("gannat");
console.log(gannat2);

console.log();
console.log("06. GETTERS AND SETTERS");

/*
 * In vanilla JavaScript also have some ways to create "getter" and "setter",
 * but TypeScript make it's really easy.
 *
 * In generally you shouldn't prefix "private" properties with underscore "_",
 * the underscore is the style guide on TypeScript.
 *
 * I want to over a control to access, which mean through the "getter" and
 * "setter" which allow me to execute some code before actually returning or
 * setting the value.
 *
 * Let say, whenever I set the value, I want to check if the string provided is
 * longer then 3 characters, so I don't want to set "_species" to anything which
 * has only 3 characters or less.
 *
 * So I can create a "setter" for that which allows me to execute some code
 * whenever I try to set a value. I do it with the "set" keyword, in the set
 * properties name, it's accessible from the outside class later on.
 *
 * I do it parenthesis here "()", but I will not call it like a method from
 * outside that important to understand. I will called like a properties but it
 * setup like a method because I can execute some code here like a method which
 * get called.
 *
 * It will actually get a parameter, and TypeScript will pass this parameter for
 * me kind of, and the end will be JavaScript code will be look differently
 * anyways but you can think of this "value" being pass to this kind of only
 * theoretically existent method here automatically.
 *
 * So again you only see like the properties, but behind the scene will give me
 * the value I want to assign as an argument to this methods it will execute
 * automatically.
 *
 *    set species(value: string") {
 *      if (value.length > 3) {
 *        this._species = value;
 *      } else {
 *          this._species = "Default";
 *      }
 *    }
 *
 * this allow me to "set" it, but I also want to "read" it, for this I'll setup
 * a "getter". So I use the "get" keyword with "species" here, again like
 * a method but in this time without an argument. And then here I decide what
 * I want to return, I do have to return something because I try to get
 * something in the end, but I could also return "Hello!", and then I always see
 * "Hello!" when I try to access "species".
 *
 *    get species() {
 *      return "Hello!";
 *    }
 *
 * But I can also write the code be like:
 *
 *    get species() {
 *      return this._species;
 *    }
 *
 * or transform it before showing it, whatever I want do.
 *
 * So this the convenience way to use "getter" and "setter" to control access to
 * your properties, and make sure that certain criteria met before assigning
 * a value or returning a value.
 */

// GETTER AND SETTER
class Plant {
  private _species: string = "Default";

  get species() {
    //return "Hello";
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species," //will return 'Default' because I assign only Two characters for plant name.");
plant.species = "Green Joint";
console.log(plant.species, ` //this the third test, and result is "Green Joint" `);

console.log();
console.log("0.7 STATIC PROPERTIES AND METHODS");

/*
 * The "static" properties is you may use it even if you don't instantiate the
 * class, or you don't need to instantiate a constructor method.
 *
 * The "properties" also can use in method.
 *
 * "Static" method mostly useful for some helper class which bundle some helper
 * tools you want to create for your app.
 */

// STATIC PROPERTIES AND METHODS

class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

console.log();
console.log("08. ABSTRACT CLASSES");

/*
 * Abstract class are mark with the "abstract" keyword, and abstract classes
 * cannot instantiated directly, so what the essence of the "abstract" classes
 * then, well you have to inherit from them, always.
 *
 * There basically just to be "inherit from". Why you want to create a class
 * that you can't instantiate? Which need to be extend, well maybe because this
 * class never need to be instantiated, but only provide some basic setup, other
 * more specialize classes which stand will be instantiated need.
 *
 * For make abstract method, we don't have curly braces "()", we don't have
 * function body we just say what it should return. So we only define how the
 * function (method) type should look like, we not implementing any logic.
 *
 *    abstract class Project {
 *      projectName: string = "Default";
 *      budget: number;
 *
 *
 *      abstract changeName(name: string): void;  // abstract method
 *
 *      calcBudget() {    // regular method.
 *        return this.budget * 2;
 *      }
 *    }
 *
 * So abstract on the class mean, this class need to be extended.
 *
 * So abstract on the method mean, when we extended this class we need to
 * implement a method we are require to do so, but we will have to write a logic
 * which executed in the child class. In simple way, it's need to be overwritten
 * or implemented in the first place.
 *
 * So again an "abstract" class need to be inherited, it provide a base class in
 * cases you know that you will need such as general blueprint but it you will
 * never use this blueprint on its own, instead need some specialize version of
 * that blueprint. But if you want bundle some general functionality or logic in
 * this "abstract" base class.
 */

// ABSTRACT CLASS
abstract class Project {
  projectName: string = "Default";
  budget!: number;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

console.log();
console.log("09. PRIVATE CONSTRUCTOR SINGLETONS ADDED WITH TYPESCRIPT 2.0")

/*
 * Isn't make sense and confusing thing, is the constructor here is "private"
 * constructor. How can we use a class if we can't construct it? If we can
 * create an "instance" of it? And we need constructor for that.
 * All code above when we use "new" keyword, we were using our class or at the
 * constructor each class has to create a copy of them, blueprint the class
 * provide us.
 *
 * Well turns out here, we having a pattern calls "singleton" class, you could
 * already create this before without this "private" accessory. That allow you to
 * setup a class were you only want to have one instance during run-time, this
 * pattern you see in a lot of languages it's nothing TypeScript specific, a lot
 * of all object oriented languages offer this pattern.
 *
 * Singleton might be useful, well I want to have an instance of this class and
 * not a static, but I only need one instances because I want to have let say, an
 * array of data in this class, and this array has to be the same in my come all
 * application, so that will be were you use such a singleton and again you
 * could create this before. But now since you can mark constructor as private
 * you can force this class to only be use as a "singleton", which means you
 * can't instantiate this class from outside anymore.
 *
 * Indeed if I run, I get an error, the code I need to use create an instance
 * can be found inside of this class in this "public static" method "getInstance"
 * which I call it,
 *
 *    let right = OnlyOne.getInstance();
 *
 * so, when I call, I check if I already have such "instance", so if it has been
 * instantiated it will return "instance" otherwise I create a new instance and
 * there after no more "instance" will be created and I can control this since
 * no "instance" can be created form outside due to this private accessory here
 * added to the constructor.
 *
 * important notice here, A class with a private constructor can not be
 * inherited, and secondly you cannot create an object of the class which has
 * private constructor.
 */

// PRIVATE CONSTRUCTOR SINGLETONS
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('The Only Wrong One'); // it will get an error due to private accessory
let right = OnlyOne.getInstance();
console.log(right.name);
console.log(wrong.name);
