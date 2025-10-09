ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
//Agregar otra función ejecutarPrueba2, desde la cual tomamos el valor de la caja de texto, invocamos a invertirCadena y mostramos el resultado en pantalla. 
ejecutarPrueba2 = function () {
    let mensaje;
    let mensajeInvertido;
    mensaje= recuperarTexto("txtCadena");
    mensajeInvertido =invertirCadena(mensaje);
    mostrarTexto("lblResultado",mensajeInvertido);
}


recorrerCadena = function (cadena) {
    //0123456
    //Juan
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion" + posicion);
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion" + posicion);
    }
}
// En el mismo archivo ejercicioCadenas.js agregar una función invertirCadena, que recibe una cadena y retorna la cadena invertida.
invertirCadena = function (cadena) {
    let cadenaInvertida = "";
    let caracter;
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        cadenaInvertida = cadenaInvertida + caracter;
    }
    return cadenaInvertida;

}
buscarLetra = function (cadena, letra){
    let letraalterada;
    let existeLetra=false;
    for(let i=0; i < cadena.length;i++ ){
        letraalterada = cadena.charAt(i);
        if(letraalterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    } else {
        return false;
    }
}
contarMayusculas=function(cadena){

    let letra;
    let contadorMayusculas=0;
    for(let i =0; i < cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas=contadorMayusculas+1;
        }
    }
    console.log(contadorMayusculas);

}







