//Elementos del juego
const $tablero = document.querySelector('#tablero');

const $botonJugar = document.querySelector('#boton-jugar')

const $botonResetear = document.querySelector('#boton-resetear');

let $estado = document.querySelector('#estado');
let $cuadroRojo = document.querySelector('#rojo');

let $cuadroVerde = document.querySelector('#verde');

let $cuadroAzul = document.querySelector('#azul');

let $cuadroAmarillo = document.querySelector('#amarillo');

let secuenciaMaquina = [];


$botonJugar.onclick = function(){
    console.log("QUE EMPIECE EL JUEGO");


    

    secuenciaMaquina.push(obtenerCuadroAleatorio());

    console.log(secuenciaMaquina);
    
    //setTimeout(encenderCuadroRojo, 500);
    //setTimeout(apagarCuadroRojo,1000);
    //setTimeout(encenderCuadroAzul, 500);
    //setTimeout(apagarCuadroAzul,1000);
    //setTimeout(encenderCuadroVerde, 500);
    //setTimeout(apagarCuadroVerde,1000);
    //setTimeout(encenderCuadroAmarillo, 500);
   // setTimeout(apagarCuadroAmarillo,1000);
   // setInterval(apagarCuadroRojo,1500 );
    
}

$botonResetear.onclick = function(){
    //acaponercosasparavolver todo a cero
    console.log("TOCASTE RESETEAR");

    $estado.innerText = "El juego está en preparación";
}



function obtenerCuadroAleatorio(){

    let cuadros = document.querySelectorAll('.cuadro');
    let cuadroElegido ;
   let indiceAleatorio = Math.round(Math.random() * 3) // esto pone el rango para que salga el índice


   for(i=0 ; i< cuadros.length ; i++){

        cuadroElegido = cuadros[indiceAleatorio];


   
     }

     return cuadroElegido;
}






function encenderCuadroRojo(evento){

    let $cuadroRojo = document.querySelector('#rojo');

    $cuadroRojo.style.backgroundColor = "#f95b5b"


}

function apagarCuadroRojo(evento){

    let $cuadroRojo = document.querySelector('#rojo');

    $cuadroRojo.style.backgroundColor = "red";
}

function encenderCuadroAzul (evento){

    let $cuadroAzul = document.querySelector('#azul');

    $cuadroAzul.style.backgroundColor = "#7779f9";


}

function apagarCuadroAzul (evento){

    let $cuadroAzul = document.querySelector('#azul');

    $cuadroAzul.style.backgroundColor = "blue";


}

function encenderCuadroVerde (evento){

    let $cuadroVerde = document.querySelector('#verde');

    $cuadroVerde.style.backgroundColor = "#57d16d";


}

function apagarCuadroVerde (evento){

    let $cuadroVerde = document.querySelector('#verde');

    $cuadroVerde.style.backgroundColor = "green";


}

function encenderCuadroAmarillo (evento){

    let $cuadroAmarillo = document.querySelector('#amarillo');

    $cuadroAmarillo.style.backgroundColor = " #fcfc7c ";
    


}

function apagarCuadroAmarillo (evento){

    let $cuadroAmarillo = document.querySelector('#amarillo');

    $cuadroAmarillo.style.backgroundColor = "yellow";


}


$estado.innerText = "";