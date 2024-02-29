let palabra = "APPLE"; 
let intentos = 6;
let verde = "#79b851"
let amarillo= "#f3c237"
let gris = "#a4aec4"

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);
console.log(palabra);

const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    const INTENTO = "[i]"
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    if(intento.length !=5){
        alert("Debe ingresar una palabra de 5 letras");
    } else{
        return intento;
    }
}

for (let i in palabra){
	console.log(palabra[i]);
}

function terminar (mensaje){
    const INPUT = document.getElementById ("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar ("<h1>GANASTE!</h1>")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }
}


