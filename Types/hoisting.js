// console.log(counter); // undefined
// var counter = 1;

// console.log(counter);

// let counter = 1;
/**Function Hoisting */
// let x = 20,
//   y = 10;

// let result = add(x, y);
// console.log(result);

// function add(a, b) {
//   return a + b;
// }
// const resul = 0 * 0;
// console.log(isNaN(resul)); // true
// console.log(resul);
// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };
// const brand=car.getBrand()

// console.log(brand); // Honda
// const fun = () => this;
// console.log(fun().innerWidth);
// function Car(brand) {
//   this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//   return this.brand;
// };

// var car = new Car("Honda");
// console.log(car.getBrand());
// const cust = {
//   speed: 400,
//   fun: () => this,
// };
// console.log(cust.fun());
