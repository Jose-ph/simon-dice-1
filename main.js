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

    let nivel =2;

    let jugadaMaquina =[];
    
    let jugadaUsuario = []; 
    
    let indicadorSecuencia;
    
    $estado.innerText = "Estas en el nivel " + nivel;    

    jugar(jugadaMaquina);


    
}


    function jugar(jugadaMaquina , jugadaUsuario , indicadorSecuencia , nivel){
        
        
        //iniciar jugada de la máquina

        agregarCuadroAleatorio(jugadaMaquina);

        console.log(jugadaMaquina);

        let retrasoIluminacionJugadaMaquina= ($jugada.length + 1) * 1000 ;

        let retrasoIluminacionJugadaUsuario;

         setTimeout(function(){
             manejarIluminacionCuadros(jugadaMaquina);

            
         }, retrasoIluminacionJugadaMaquina);// aca se prenden y apagan los cuadros con un error se prenden y apagan al mismo tiempo


       
    }

    function agregarCuadroAleatorio (jugadaMaquina){



        let $jugadaMaquina = jugadaMaquina;

         let $cuadros = document.querySelectorAll(".cuadro");

        let indiceAleatorio = Math.round(Math.random() * 3); 

        let cuadroAleatorio = $cuadros[indiceAleatorio];
       

            $jugadaMaquina.push(cuadroAleatorio);

            
        return $jugadaMaquina;

        



    }

    function manejarIluminacionCuadros(jugada){ //toma la del usuario o la de la maquina

        let $jugada = jugada;

        

        $jugada.forEach(cuadro => { //enciende y apaga los cuadros
           
            if (cuadro === $cuadroRojo){

                $cuadroRojo.style.background = "#fc8787";

                setTimeout (function(){

                    $cuadroRojo.style.background = "red";

                },800);
            }
    
            if(cuadro === $cuadroAzul){
    
                $cuadroAzul.style.background = " #717dfa ";
                setTimeout (function(){

                    $cuadroAzul.style.background = "blue";

                },800);


            }
            
            if( cuadro === $cuadroVerde){
    
    
                $cuadroVerde.style.background = " #62f64e ";

                setTimeout (function(){

                    $cuadroVerde.style.background = "green";

                },800);
            }
    
            if(cuadro === $cuadroAmarillo){
    
                $cuadroAmarillo.style.background = "#fafa8e ";

                setTimeout (function(){

                    $cuadroAmarillo.style.background = "yellow";

                },800);
            }
            

            


            
        });

        

    }