import foo from "./foo.js";
import letterCombinations from "./17letterCombinations.js";
console.log(foo);
function index() {
  console.log(letterCombinations("234"));

  return foo;
}
index();
document.getElementById("app").innerText = index();
