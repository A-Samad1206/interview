// for (var index = 1; index <= 3; index++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log("after " + index + " second(s):" + index);
//     }, index * 1000);
//   })(index);
// }
console.log("================");
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
let counter = false;
console.log("!!counter", !!counter); // true
let eligible = false,
  required = true;

console.log(1 / 0); // true
