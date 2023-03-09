function Mouse(name) {
  this.name = name;
  this.death = false;
}

Mouse.prototype.death = function () {
  this.death = true;
};

module.export = Mouse;
