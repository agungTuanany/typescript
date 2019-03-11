namespace MyMath {
  export namespace Circle {

    const PI = 3.14; // this PI is MyMath-scope

    export function calcCircumference(diameter: number) {
      return diameter * PI;
    }
  }
}
