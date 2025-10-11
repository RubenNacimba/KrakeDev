//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let intentos = 0;
let coincidencias = 0;
let errores = 0;
let palabraSecreta = "";
let letrasUsadas = [];


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
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras"); // muestra aletra si no cumple la longitud
        return; // sale de la funcion sin continuar
    }
    let esValida = true; //Variable para verificar si todos los caracteres son mayusculas
    for (let i = 0; i < palabra.length; i++) { //Recorre cada caracter de la palabra
        let caracter = palabra.charAt(i); // Extrae el caracter de la posicion 1 actual
        if (!esMayuscula(caracter)) { //Verifica si el caracter no es mayuscula usando la funcion esMayuscula
            esValida = false; //Si encuentra uno que no es mayuscula cambia la variable a false
            break; //Sale del cliclo porque  ya no  es necesario seguir revisando 
        }
    }
    if (!esValida) {
        alert("Debe ingresar una palabra de 5 letras mayusculas"); //Muestra alerta indicando que no cumple
        return; //Sale de la funcion sin guardar
    }
    palabraSecreta = palabra; //Guarda la palabra secreta en la variable global palabraSecreta 
    //Reiniciar las variables globales para nueva partida
    intentos = 0;
    coincidencias = 0;
    errores = 0;
    letrasUsadas = [];
    //Limpiar los divs visuales
    for (let i = 0; i < 5; i++) {
        mostrarTexto("div" + i, "");
    }
    //Mostrar imagen inicial del ahorcado
    mostrarImagen("ahorcadoImagen", "Ahorcado_00.png");
}
mostrarLetra = function (letra, posicion) {
    let id = "div" + posicion; //Construye el id del componente usando la posicion (ej: div0, div1, etc)
    mostrarTexto(id, letra); //Muestra la letra en el componente correspondiente usando mostrarTexto
}
validar = function (letra) {
    for (let i = 0; i < palabraSecreta.length; i++) {
        let id = "div" + i;
        let contenidoActual = recuperarTextoDeDiv(id);
        if (palabraSecreta.charAt(i) === letra && contenidoActual === "") {
            mostrarLetra(letra, i);
            return 1; // Solo una coincidencia revelada
        }
    }
    return 0; // no se encontró ninguna coincidencia nueva
}



ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");

    if (letra.length !== 1) {
        alert("Debe ingresar una sola letra");
        return;
    }
    if (!esMayuscula(letra)) {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        return;
    }
    intentos++; //Siempre cuenta como intento
    if (!letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
    }
    let encontradas = validar(letra);
    if (encontradas == 0) {
        errores++;
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado();
    } else {
        coincidencias += encontradas;
    }
    if (coincidencias >= 5) {
        alert("HA GANADO");
        mostrarImagen("ahorcadoImagen", "ganador.gif");
        return;
    }
    if (intentos === 10) {
        alert("HA PERDIDO");
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
        return;
    }
    mostrarTextoEnCaja("txtLetra", "");
    console.log("Intentos:", intentos, "Coincidencias:", coincidencias, "Errores:", errores);

}



//Función mostrar ahorcado
mostrarAhorcado = function () {
    if (errores >= 1 && errores <= 10) {
        let numero = errores.toString().padStart(2, '0'); // convierte 1 → "01"
        let ruta = "Ahorcado_" + numero + ".png";
        mostrarImagen("ahorcadoImagen", ruta);
    }
}




