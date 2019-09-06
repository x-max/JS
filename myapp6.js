var el = document.getElementById('style');

/*el.style.background = "blue";
el.style.color = "white";
el.style.width = "200px";
*/

//Bolje koristiti nacin ispod, jer u prvobitnom nacinu svaka promena nekog
//propertia zahteva renderovanje!!! i usporava stranu
//Zato koristitti cssText!

/*
el.style.cssText = "background: blue; color:white; width: 200px;"
el.style.cssText += " height: 100px;"
*/

console.log(getComputedStyle( el ));
