//В данном коде происходит нарушение Interface Segregation принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.
var AirPlane = /** @class */ (function () {
    function AirPlane() {
    }
    AirPlane.prototype.fly = function () {
        console.log("I can fly");
    };
    AirPlane.prototype.drive = function () {
        console.log("I can drive");
    };
    return AirPlane;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("I can drive");
    };
    return Car;
}());
var myPlane = new AirPlane();
var myCar = new Car();
console.log(myPlane.drive());
console.log(myPlane.fly());
console.log(myCar.drive());
