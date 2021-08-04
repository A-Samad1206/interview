function* gen() {
  const First = { age: 78 };
  yield "First";
  yield "Second";
  // console.log("Four");
  yield "Third";
  return "All Done";
  // console.log("object");
}
const myGen = gen();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
// myGen.next();
