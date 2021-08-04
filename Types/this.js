this.table = "Global Table";
let myRoom = {
  table: "myTable",
  clean() {
    console.log("object", this.table);
  },
};
//myRoom.clean();
function clean() {
  // this.table = "Function Table";
  console.log("Clean", table);
}

// clean();
// on calling class fun this will have the scope from where it was called
//
