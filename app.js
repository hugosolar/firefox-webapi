/*
    Algunas funciones para jugar con la web API de firefox
*/
window.addEventListener("deviceproximity", function (event) { 
    // detector de proximidad... no es muy preciso con los centimetros
    // sólo muestra 0 y 5
    if (!event.value) {
	console.log('Telefono en la oreja');
	} else {
	 console.log('Telefono Alejado');
	}
 });


window.addEventListener("devicelight", function (event) { 
    /* El nivel de luz ambiental
       testeado en un galaxy nexus entrega valores entre 0 y 24
       siendo 24 el mas luminoso y 0 el mas oscuro
    */
    console.log(event.value); 
    if (event.value > 0 && event.value <= 5) {
        document.body.style.background = '#000';
    }
    if (event.value >5 && event.value <= 7) {
        document.body.style.background = '#161616';
        document.body.getElementsByTagName("h1")[0].style.color='#FFF';
    }
    if (event.value >7 && event.value <= 10) {
        document.body.style = '#333333';
        document.body.getElementsByTagName("h1")[0].style.color='#FFF';
    }
    if (event.value >10 && event.value <= 13) {
        document.body.style.background = '#4A4A4A';
        document.body.getElementsByTagName("h1")[0].style.color='#FFF';
    }
    if (event.value >13 && event.value <= 16) {
        document.body.style.background = '#4A4A4A';
        document.body.getElementsByTagName("h1")[0].style.color='#FFF';
    }
    if (event.value >16 && event.value <= 19) {
        document.body.style.background = '#656565';
        document.body.getElementsByTagName("h1")[0].style.color='#000';
    }
    if (event.value >21 && event.value <= 24) {
        document.body.style.background = '#828282';
        document.body.getElementsByTagName("h1")[0].style.color='#000';
    }
    if (event.value >24) {
        document.body.style.background = '#C0C0C0';
        document.body.getElementsByTagName("h1")[0].style.color='#000';
    }
});
/*
    Hacer vibrar el telefono
*/
document.querySelector('#vibrar').addEventListener('touchstart',
    function() {
        navigator.vibrate(200);
    }
);