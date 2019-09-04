//Constructors
function Apple (color, weight){
  this.color = color;
  this.weight = weight;
  //we don't have to use return it's gonna return the context by
  //default on the place where we're invoking the constructor
}

Apple.prototype = {
  //eat: function(){return "eat the apple"; },
  eat: function(){return this; },
  throw: function(){return "throw the apple"; }
}

var apple1 = new Apple('red', 99);
var apple2 = new Apple('green', 109);
var apple3 = new Apple('yellow', 299);
