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

     nivel = 0;

    let jugadaMaquina =[];
    
    let jugadaUsuario = []; 
    
   // let indicadorSecuencia;
    
    $estado.innerText = "Estas en el nivel " + nivel;    
    bloquearCuadrosUsuario();

    jugar(jugadaMaquina);



    
}


    function jugar(){
        
        //borrar estados anteriores
        //iniciar jugada de la máquina

       agregarCuadroAleatorio(jugadaMaquina);
       

      //jugadaMaquina =[$cuadroAmarillo,$cuadroRojo,$cuadroAzul,$cuadroVerde,$cuadroRojo];

      //jugadaMaquina =[$cuadroRojo];

        console.log(jugadaMaquina);

        //let retrasoIluminacionJugadaMaquina= (indicadorSecuencia + 1) * 1000 ;

        let retrasoJugador = (jugadaMaquina.length + 1) * 1000;


        jugadaMaquina.forEach(function(cuadro,indice){

        let retrasoMaquina = (indice+1)*1000;
        
        

        setTimeout(function(){

           
            
            resaltarCuadros(cuadro) ;
            

              
            
            
           
            
            
        },retrasoMaquina);

        
        
    });
        
        setTimeout ( function (){

            $estado.innerText = "Ahora es tu turno !"

            
            manejarCuadrosUsuario();

            setTimeout(function(){

                revisarJugadas(jugadaMaquina,jugadaUsuario);


                if ( nivel === 3){
    
    
                    
                    
                    
                    $estado.innerText = "Bien ! Ganaste ! Toca Start para empezar una nueva partida";
        
                    jugadaMaquina = [];
                    
                    jugadaUsuario = [];
        
                    nivel= 0;
                }


            }
            ,retrasoJugador);

           

        },retrasoJugador);

        
        jugadaUsuario = [];

        nivel++;

        $estado.innerText = "Estas en el nivel " + nivel;

            
          //manejarCuadrosUsuario();
            
         
         //setTimeout(function(){

            
            //revisarJugadas(jugadaMaquina, jugadaUsuario);

            ///if ( nivel === 3){


                
                
                //alert ("Terminó el juego");
                //$estado.innerText = "Bien ! Ganaste ! Toca Start para empezar una nueva partida";
    
                //jugadaMaquina = [];
                
                //jugadaUsuario = [];
    
                //nivel= 0;
                
            
    
    
    
             //}



         //},(retrasoJugador + 3000)); /// jugadausuario.lenght(?)



         

         
        //if( nivel === 3){


           // $estado.innerText = "Bien ! Ganaste ! Toca Start para empezar una nueva partida";

            //jugadaMaquina = [];
            //jugadaUsuario = [];
            //nivel= 0;
            
       // }
      
    }


    function revisarJugadas(jugadaMaquina, jugadaUsuario){

        let evaluacion;

        let bien = "ACERTASTE";

        let mal = "FALLASTE"

        for (let i = 0 ; i<jugadaMaquina.length; i++){

            

            if(jugadaMaquina[i] === jugadaUsuario[i]){

                evaluacion = bien;

                


            }

            else {

                evaluacion = mal;
               
            }


        }

        


       

            if(evaluacion === bien ){



                setTimeout(jugar,2000);
       
                }
                
                
                else if(evaluacion === mal){
    
                    setTimeout(function(){
    
                        $estado.innerText = "ERROR PERDISTE";
                    },2000);
       
                   
       
       
                }


        

        
        
        


            
    }

    function bloquearCuadrosUsuario(){


        

        $cuadroRojo.onclick = function (){

           console.log("No puedes jugar todavia ROJO");
            //jugadaUsuario.push($cuadroRojo);
        }

        $cuadroAzul.onclick = function (){

            console.log("No puedes jugar todavia AZUL");
            //jugadaUsuario.push($cuadroAzul);
        }

        $cuadroAmarillo.onclick = function (){

            console.log("No puedes jugar todavia AMARILLO");
            //jugadaUsuario.push($cuadroAmarillo);
        }

        $cuadroVerde.onclick = function (){

            console.log("No puedes jugar todavia VERDE");
           // jugadaUsuario.push($cuadroVerde);
        }
                    
    


    }
    function manejarCuadrosUsuario(){

        
        $cuadroRojo.onclick = function (){

            console.log("Tocaste ROJO");
            jugadaUsuario.push($cuadroRojo);
        }

        $cuadroAzul.onclick = function (){

            console.log("Tocaste AZUL");
            jugadaUsuario.push($cuadroAzul);
        }

        $cuadroAmarillo.onclick = function (){

            console.log("Tocaste AMARILLO");
            jugadaUsuario.push($cuadroAmarillo);
        }

        $cuadroVerde.onclick = function (){

            console.log("Tocaste VERDE");
            jugadaUsuario.push($cuadroVerde);
        }

        
       
        
        


        



    }

    function agregarCuadroAleatorio (jugadaMaquina){



        let $jugadaMaquina = jugadaMaquina;

         let $cuadros = document.querySelectorAll(".cuadro");

        let indiceAleatorio = Math.round(Math.random() * 3); 

        let cuadroAleatorio = $cuadros[indiceAleatorio];
       

            $jugadaMaquina.push(cuadroAleatorio);

            
        return $jugadaMaquina;

        



    }

    function resaltarCuadros(cuadro){ //toma la del usuario o la de la maquina

        
            if (cuadro === $cuadroRojo){

                $cuadroRojo.style.background = "#fc8787";
                $cuadroRojo.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroRojo.style.background = "red";
                    $cuadroRojo.style.transform = "scale(1)";

                },800);
            }
    
            if(cuadro === $cuadroAzul){
    
                $cuadroAzul.style.background = " #717dfa ";
                $cuadroAzul.style.transform = "scale(1.1)";
                setTimeout (function(){

                    $cuadroAzul.style.background = "blue";
                    $cuadroAzul.style.transform = "scale(1)";

                },800);


            }
            
            if( cuadro === $cuadroVerde){
    
    
                $cuadroVerde.style.background = " #62f64e ";
                $cuadroVerde.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroVerde.style.background = "green";
                    $cuadroVerde.style.transform = "scale(1)";

                },800);
            }
    
            if(cuadro === $cuadroAmarillo){
    
                $cuadroAmarillo.style.background = "#fafa8e ";
                $cuadroAmarillo.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroAmarillo.style.background = "yellow";
                    $cuadroAmarillo.style.transform = "scale(1)";

                },800);
            }
              
          //enciende y apaga los cuadros
           
            
            

            


            
        

        

        
        
        
    

        }

    
       