obtenerAleatorio = function(){
    //Obtener un numero aleatorio entero, del 1 al 3
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // Enntre 0 y 1
    numeroMultiplicado=aleatorio*3;
    numeroEntero=parseInt(numeroMultiplicado); // entre 0 y 2;
    valorDado=numeroEntero +1;
    return valorDado;   
}
generarElemento = function(){
    //Generar randomicamente las cadenas "piedra", "papel" o "tijera"
    //Algoritmo:
    //Genera un numero randomico del 1 al 3, invocando a la funcion obtenerAleatorio
    //Si el numero es 1, retorna "piedra", si es 2 retorna "papel", y si es 3 retorna "tijera"
    let numeroAleatorio;
    numeroAleatorio=obtenerAleatorio();
    if(numeroAleatorio==1){
        return "piedra";
    } else if(numeroAleatorio==2){
        return "papel";
    } else if(numeroAleatorio==3){
        return "tijera";
    } 
}
determinarGanador = function(eleccionJugador1, eleccionJugador2){
    //Determinar cual de los jugadores gana el piedra papel o tijera 
    let mensaje;
    if (eleccionJugador1==eleccionJugador2){
        mensaje="EMPATE";
    } else if (eleccionJugador1=="piedra" && eleccionJugador2== "tijera"){
        mensaje="GANA JUGADOR 1";
    } else if (eleccionJugador1=="piedra" && eleccionJugador2=="papel"){
        mensaje="GANA JUGADOR 2";
    } else if (eleccionJugador1=="papel" && eleccionJugador2=="piedra"){
        mensaje="GANA JUGADOR 1";
    } else if(eleccionJugador1=="papel" && eleccionJugador2=="tijera"){
        mensaje="GANA JUGADOR 2";
    } else if (eleccionJugador1=="tijera" && eleccionJugador2=="papel"){
        mensaje="GANA JUGADOR 1";
    } else if(eleccionJugador1=="tijera" && eleccionJugador2=="piedra"){
        mensaje="GANA JUGADOR 2";
    }
    return mensaje; 
}
generarRuta=function(nombre){
    //Genera la ruta de la imagen, en base al nombre que recibe. La ruta es: /imagenes/ <nombre>.png
    let ruta;
    ruta="imagenes/" + nombre + ".png";
    return ruta;
}   

