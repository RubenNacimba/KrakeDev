//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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

    for (let i =0;i<palabraSecreta.length;i++){  //Recorre cada caracter de la palabra secreta
        let caracter = palabraSecreta.charAt(i); //Estrae el caracter actual  en la posicion i
        if (caracter===letra){ // Verifica si el caracter coincide con la letra ingresada
            mostrarLetra(letra, i); //Si coincide, llama a mostrarLetra para mostrarla en la posicion correspondiente
            letrasEncontradas++; //Incrementa el contador de letras encontradas
        }

    }
    // Puedes usar letrasEncontradas para mostrar un mensaje o tomar desiciones
    console.log("Letras encontradas:"+ letrasEncontradas); //Mostrar en consola cuantas veces se encontro la letra
}
ingresarLetra = function(){
    let texto = recuperarTexto("txtletra"); //Recupera letra ingresada
    if(esMayuscula(texto)){ // verifica si es mayuscula
        validar(texto); //Invoca validar con la letra
    }else{
        alert("SOLO SE ACEPTAN MAYÚSCULAS"); //Muesra alerta si no es mayuscula
    }
}
