"use strict";
// Exercise 1 -class
/*
  function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
      console.log("Tooooot!");
    };

    this.accelerate = function(speed) {
      this.accelration = this.acceleration + speed;
    }
  }

  var car = new Car("BMW");
  car.honk();
  console.log(car.acceleration);
  car.accelerate(10);
  console.log(car.acceleration);
*/
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log("Tooooooot!");
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 -Inherit
/*
var baseObject = {
  width: 0;
  legth: 0;
};

var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
}
console.log(rectangle.calcSize());

*/
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
        //  constructor(width: number, length: number) {
        //    this.width = width;
        //    this.length = length;
        //  }
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
console.log(rectangle);
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
class BaseObject2 {
    constructor(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
}
class Rectangle2 extends BaseObject2 {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle2 = new Rectangle2(3, 3);
console.log(rectangle2.calcSize());
console.log(rectangle2);
// Exercise 3 - Getter & Setter
/*
var person = {
  _FirstName: ""
};

Object.defineProperty(person, "firstName", {
  get: function() {
    return this._firstName;
  },
  set: function (value) {
    if (value.length > 3) {
      this._firstName = value;
    }
    else {
    this._firstName = "";
    }
  },
  enumerable: true;
  configurable: true;
});

console.log(person.firstName);
person.firstName = "Ma";
person.firsName = "Maximilian";
console.log(person.firstName);
*/
class PersonExercise {
    constructor() {
        this._firstName = ""; // "_" is to get implement "setter" and "getter"
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "---";
        }
    }
}
const personExercise = new PersonExercise();
console.log(personExercise.firstName, " //exercise-3 the name was NULL");
personExercise.firstName = "GANNS";
console.log(personExercise.firstName, ` //exercise-3 the name was ${personExercise.firstName}`);
