//Elementos del juego
const $tablero = document.querySelector('#tablero');

const $botonJugar = document.querySelector('#boton-jugar')

const $botonResetear = document.querySelector('#boton-resetear');

let $estado = document.querySelector('#estado');

const $cuadroRojo = document.querySelector('#rojo');

const $cuadroVerde = document.querySelector('#verde');

const $cuadroAzul = document.querySelector('#azul');

const $cuadroAmarillo = document.querySelector('#amarillo');

// variables para jugar

//let secuenciaMaquina =[$cuadroRojo , $cuadroAzul , $cuadroVerde,$cuadroAmarillo ];    //cambiar a ILUMINARJUGADA

//let secuenciaJugador =[];

//let jugadaMaquina = [];

//let turnoMaquina = true;


$botonJugar.onclick = function(){

    let turnoMaquina = true;

    let cuadrosDisponibles =[$cuadroRojo , $cuadroAzul , $cuadroVerde,$cuadroAmarillo ];

    let jugadaMaquina = [];

    let nivel = 0;
    


   for( let i=0 ; i < 5 ; i++){ // numero de ROUNDS para ganar
    
    
     jugadaMaquina.push(obtenerCuadroAleatorio());
      
   }
   console.log(jugadaMaquina);

   iluminarJugadaMaquina(jugadaMaquina, cuadrosDisponibles, nivel);
  
   nivel++;

   console.log(nivel);



} 
   





















function obtenerCuadroAleatorio(){

    let cuadros = document.querySelectorAll('.cuadro');
    let cuadroElegido ;
   let indiceAleatorio = Math.round(Math.random() *3) // esto pone el rango para que salga el índice




        cuadroElegido = cuadros[indiceAleatorio];


   
     

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


function iluminarJugadaMaquina(jugadaMaquina, cuadrosDisponibles , nivel){

    let $jugadaMaquina = jugadaMaquina;
    let $cuadrosDisponibles = cuadrosDisponibles;

    let $nivel=nivel;

    

   /// for (let i = 0 ; i< $jugadaMaquina.length ; i++){
        if ($jugadaMaquina[$nivel] ===  $cuadrosDisponibles[0]){
    
           //setTimeout(encenderCuadroRojo, 1000);
           encenderCuadroRojo();
       }
    
       if ($jugadaMaquina[$nivel] ===  $cuadrosDisponibles[1]){
    
           //setTimeout(encenderCuadroAzul, 2000);
           encenderCuadroAzul();
        }
    
        if ($jugadaMaquina[$nivel] === $cuadrosDisponibles[2]){
    
          // setTimeout(encenderCuadroVerde, 3000);
           encenderCuadroVerde();
        }
        if ($jugadaMaquina[$nivel] === $cuadrosDisponibles[3]){
    
            //setTimeout(encenderCuadroAmarillo,4000);
            encenderCuadroAmarillo();
        }
    
      //  }




}

    




    




