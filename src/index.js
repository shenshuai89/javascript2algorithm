import foo from "./foo.js";
console.log(foo);
function index() {
  console.log(foo);
  return foo;
}
index();
document.getElementById("app").innerText = index();
