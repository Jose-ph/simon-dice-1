//Elementos del juego
const $tablero = document.querySelector('#tablero');

const $botonJugar = document.querySelector('#boton-jugar')

const $botonResetear = document.querySelector('#boton-resetear');

let $estado = document.querySelector('#estado');
let $cuadroRojo = document.querySelector('#rojo');

let $cuadroVerde = document.querySelector('#verde');

let $cuadroAzul = document.querySelector('#azul');

let $cuadroAmarillo = document.querySelector('#amarillo');


$botonJugar.onclick = function(){
    console.log("QUE EMPIECE EL JUEGO");
}

$botonResetear.onclick = function(){

    console.log("TOCASTE RESETEAR");
}

$estado.innerText = "El juego está en preparación";