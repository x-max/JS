var carsLeft =1,
    carsRight = 0,
    greenMan = "no";

  if ( greenMan === "yes" )
  {
      console.log("cross the road");
  }
  else if (carsLeft===0)
  {
      console.log('All clear! Cross the road');
  }
  else {
    console.log("Stay where you are");
  }

var classRegister = ["Nemanja", "Stefan", "Milos"]

for (i=0; i < classRegister.length; i++){
  console.log( classRegister[i]);
}

for (var z=classRegister.length-1; z >= 0; z--){
  console.log( classRegister[z]);
}

//Kraci zapis manje robustan
for(var index = 0 in classRegister){
  console.log(classRegister[index]);
}

document.getElementById('hello').innerText='Test1 changed to this';
