 
let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);
console.log(palabra);


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    if(intento.length !=5){
        alert("Debe ingresar una palabra de 5 letras");
    } else{
            return intento
        }
    }

    for (let i in palabra){
        console.log(palabra[i]);
    }

    function intentar(){
        const INTENTO = leerIntento();
        if (INTENTO === palabra ) {
            terminar ("<h1>GANASTE</h1>")
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

function terminar (mensaje){
    const INPUT = document.getElementById ("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const GRID = document.getElementById("grid"); 

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE</h1>");
        return;
    }
    const ROW = document.createElement("div");
    ROW.className = "row";
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }
}