//console.log(this);

var object = {
  prop: this,
  method: function(){return this;}
}

var array = [
  this,
  function(){return this;}
]

function global(){
  console.log('from global', this);

  function sub(){console.log('from sub', this)}
  sub();
}

//Constructors
function Apple ( x, y, color, score){
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
  //we don't have to use return it's gonna return the context by
  //default on the place where we're invoking the constructor
}


var apple1 = new Apple(10,20,'red',200);
var apple2 = new Apple(10,25,'green',100);
var apple2 = new Apple(10,25,'green',100);
