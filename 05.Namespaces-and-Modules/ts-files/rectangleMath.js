"use strict";
var MyMath;
(function (MyMath) {
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
