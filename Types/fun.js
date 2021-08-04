// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     // console.log("arguments[i]", arguments[i]);
//     sum += arguments[i];
//   }
//   return sum;
// }
// let sum = add;
// // let result = add(10, 20);
// let result = sum(10, 20);
// console.log(result);

function compareBy(propName) {
  return function (a, b) {
    // console.log("x", a);
    // console.log("y", b);
    let x = a[propName],
      y = b[propName];
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
  { name: "Sony Xperia1", price: 700 },
  { name: "Sony Xperia3", price: 800 },
  { name: "Sony Xperia4", price: 850 },
  { name: "Sony Xperia5", price: 900 },
  { name: "Sony Xperia2", price: 750 },
];
console.log("Products sorted by name:");
products = products.sort(compareBy("price"));

console.table(products);
let numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]
