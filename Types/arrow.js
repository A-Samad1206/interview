this.name = "XXXX";
class Person {
  constructor(name) {
    this.name = name;
  }
  arrName() {
    setTimeout(() => {
      console.log("Arrow" + window.name);
      console.log("Arrow" + this.name);
    }, 100);
  }
  funName() {
    setTimeout(function () {
      console.log("Arrow" + this.name);
    }, 100);
  }
}
const p = new Person("Samad");

// p.arrName().apply();
p.arrName();
p.funName();
