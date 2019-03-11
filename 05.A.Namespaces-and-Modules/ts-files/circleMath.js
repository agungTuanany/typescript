"use strict";
var MyMath;
(function (MyMath) {
    const PI = 3.14; // this PI is MyMath-scope
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
