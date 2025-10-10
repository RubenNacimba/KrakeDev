//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let intentos=0;
let coincidencias=0;
let errores=0;
let palabraSecreta = ""; // Variable global para almacenar la palabra secreta

esMayuscula = function (caracter) {
    let ascii = caracter.charCodeAt(0);  //Obtiene el codigo ASCII del caracter usando chatCodeAt(0)
    if (ascii >= 65 && ascii <= 90) { //Verifica si el codigo esta entre 65 y 90 (Rango de letras mayusculas A-Z)
        return true; // Retorna true si el caracter es es una letra mayuscula
    } else {
        return false; // Retorna false si no esta en el rango de mayuscula
    }
}
guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta"); // Recuperar el texto ingresado de la caja de texto (txtSecreta)
    //Validar que la palabra ingresada tenga examctamente 5 
    if (palabra.length != 5) {
        alert("Debe ingresar una palabra de 5 letras"); // muestra aletra si no cumple la longitud
        return; // sale de la funcion sin continuar
    }
    let esValida=true; //Variable para verificar si todos los caracteres son mayusculas
    for(let i=0;i<palabra.length;i++){ //Recorre cada caracter de la palabra
        let caracter=palabra.charAt(i); // Extrae el caracter de la posicion 1 actual
        if (!esMayuscula(caracter)){ //Verifica si el caracter no es mayuscula usando la funcion esMayuscula
            esValida=false; //Si encuentra uno que no es mayuscula cambia la variable a false
            break; //Sale del cliclo porque  ya no  es necesario seguir revisando 

        }
    }
    if (!esValida){
        alert("Debe ingresar una palabra de 5 letras mayusculas"); //Muestra alerta indicando que no cumple
        return; //Sale de la funcion sin guardar
    }
    palabraSecreta = palabra; //Guarda la palabra secreta en la variable global palabraSecreta 
}
mostrarLetra = function (letra, posicion){
    let id = "div" + posicion; //Construye el id del componente usando la posicion (ej: div0, div1, etc)
    mostrarTexto(id,letra); //Muestra la letra en el componente correspondiente usando mostrarTexto
}
validar = function (letra){
    let letrasEncontradas=0;  //Variable local para contar cuantas veces se encuentra la letra en la palabra secreta
    for (let i=0; i< palabraSecreta.length;i++ ){
        if (palabraSecreta.charAt(i) === letra){
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
    console.log("Letras encontradas:", letrasEncontradas);
    return letrasEncontradas;
}


let letrasUsadas = [];

ingresarLetra = function(){
    let letra = recuperarTexto("txtLetra");

    if(letra.length !== 1){
        alert("Debe ingresar UNA sola letra");
        return;
    }
    if(!esMayuscula(letra)){
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        return;
    }
    if(letrasUsadas.includes(letra)){
        alert("Ya ingresaste esa letra");
        return;
    }

    letrasUsadas.push(letra);
    intentos++;

    let encontradas = validar(letra);
    if(encontradas === 0){
        errores++;
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado();
    } else {
        coincidencias += encontradas;
    }

    if(coincidencias === 5){
        mostrarImagen("ahorcadoImagen", "ganador.gif");
        return;
    }
    if(intentos === 10){
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
        return;
    }

    mostrarTextoEnCaja("txtLetra", "");
    console.log("Intentos:", intentos, "Coincidencias:", coincidencias, "Errores:", errores);
}

//Función mostrar ahorcado
mostrarAhorcado = function (){
    if (errores >=1 && errores <=10 ){
          let numero = errores.toString().padStart(2, '0'); // convierte 1 → "01"
        let ruta = "Ahorcado_" + numero + ".png";
        mostrarImagen("ahorcadoImagen", ruta);
    }
}
window.onload = function(){
    mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
}



