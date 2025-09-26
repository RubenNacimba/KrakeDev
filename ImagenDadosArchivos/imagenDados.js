let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
     modificarLanzamientos(resultado);
   
}
modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //Si el jugador obtiene mas de 20 puntos 
    //mostrar en pantalla un mensaje GANASTE!!!
    //invocar a limpiar
     if(puntos>20){
        cambiarTexto("lblPuntos3","GANASTE");
        setTimeout(limpiar, 2000);
    }

}
//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
// y muestra en pantalla
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblPuntos2",lanzamientos);

    //si lanzamiento llega a 0
    //mostrar en pantalla GAME OVER
    //invoca a limpiar
     if(lanzamientos==0){
        cambiarTexto("lblPuntos3","GAME OVER")
        setTimeout(limpiar, 2000);
    }
}
limpiar=function(){
    //Colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    //quitar imagen ""
    // Reiniciar puntaje y lanzamientos en variables
    puntos = 0;
    lanzamientos = 5;
    // Mostrar en pantalla
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblPuntos2", lanzamientos);
    // Borrar mensaje de victoria o derrota
    cambiarTexto("lblPuntos3", "");
}
//función mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
// no retorna nada
mostrarCara= function(numero){
    if(numero==1){  //con doble == se compara, mientras que con solo un = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}