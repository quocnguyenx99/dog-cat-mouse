import Cat from "./cat.js";
import Mouse from "./mouse.js";
import Dog from "./dog.js";

var cat = new Cat();
var mouse = new Mouse("Micky");
var dog = new Dog("Bard");

try {
  cat.eat(Dog);
} catch {
  console.log("Error while cat eating Dog");
}
console.log(cat);
