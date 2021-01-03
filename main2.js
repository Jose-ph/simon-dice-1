const $tablero= document.querySelector('#tablero');
let $estado = document.querySelector('#estado');
const $botonStart= document.querySelector('#boton-start');
let $cuadros = document.querySelectorAll(".cuadro");
const $cuadroRojo = document.querySelector('#rojo');
const $cuadroAzul= document.querySelector('#azul');
const $cuadroVerde = document.querySelector('#verde');
const $cuadroAmarillo = document.querySelector('#amarillo');

let nivel;

let jugadaMaquina = [];

let jugadaUsuario = []; 

let indicadorSecuencia;

$estado.innerText = "Toca START para empezar el juego";



$botonStart.onclick = function (){

   /* let nivel =1;

    let jugadaMaquina =[];
    
    let jugadaUsuario = []; 
    
    let indicadorSecuencia;
    
    $estado.innerText = "Estas en el nivel " + nivel;    

    jugar(jugadaMaquina);*/

    let arraySaludos = ["HOLA 1 " , "HOLA 2 ", "Hola 3 "];
    let indice=1;

    arraySaludos.forEach(function(elemento,indice){

        let retraso = (indice+1)*1000;

        setTimeout(function(){

            console.log(elemento  + " tiempo " +  retraso + " segundos" );




        },retraso);

       // indice++;
        
    });


    
}

