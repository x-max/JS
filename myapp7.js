var select = document.getElementsByName('cars')[0];

//1st way
select.onclick = function ( event ) {
  console.log( event );
};


//2nd way
select.addEventListener( 'click', function( event ) {

  console.log('clicked by event listener');

});


//3rd way
//Funkcija koju zovemo dole
function ClickCallBack(event) {
  console.log('clicked by event listener last');
}

select.addEventListener( 'click', ClickCallBack)

//select.removeEventListener('click', ClickCallBack)
