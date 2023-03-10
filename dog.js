import chalk from "chalk";
export default function Dog(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};

Dog.prototype.sayHi = function () {
  console.log("Hi! I am a dog. My name is " + chalk.red.bold(this.name));
};
