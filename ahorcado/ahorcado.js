//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (caracter){
    let ascii = caracter.charCodeAt(0);  //Obtiene el codigo ASCII del caracter usando chatCodeAt(0)
    if (ascii >=65 && ascii <=90){ //Verifica si el codigo esta entre 65 y 90 (Rango de letras mayusculas A-Z)
        return true; // Retorna true si el caracter es es una letra mayuscula
    }else {
        return false; // Retorna false si no esta en el rango de mayuscula
    }
}