jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado()
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblNumero2","Es mayor a 3");
        cambiarTexto("lblNumero2","GANASTE");
    }else {
         cambiarTexto("lblNumero2","Es MENOR a 3");
         cambiarTexto("lblNumero2","ESTAS DE MALAS");
    }

}
//Crear una funcion llamada lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valoDado;
    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //Entre 0 y 5
    valoDado=numeroEntero +1; //entre 0 y 6
    return valoDado;
}

