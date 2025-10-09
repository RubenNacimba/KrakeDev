ejecutarValidacion = function (){
    let mensaje;
    mensaje= recuperarTexto("txtPassword");
    let errores=validarPassword(mensaje);
    if(errores==""){
        mostrarTexto("lblResultado", "Password correcto");
    } else {
        mostrarTexto("lblResultado",errores);
    }
}



validarPassword = function(password){
    console.log("Inicializando validacion de password");
    //Variable para acumular los mensajes de error
    let errores="";
    //Validacion de longitud minima
    if(password.length<8){
        errores += "La contraseña debe tener al menos 8 caracteres \n";
    }
    //Validcación de loncgitud maxima 
    if(password.length>16){
        errores += "La contraseña no debe tener mas de 16 caracteres \n";
    }
    //Validacion de al menos una letra mayuscula
    let tieneMayuscula=false;
    for(let i =0;i<password.length;i++){
        //Obtiene el caracter en la posicion i
        let caracter = password.charAt(i) ;
        if(caracter === caracter.toUpperCase() && /[A-Z]/.test(caracter)){
            tieneMayuscula = true;
            break;
        }
    }
    if(!tieneMayuscula){
        errores += "Debe contener al menos una letra mayuscula \n";
    }
    //Validar al menos un digito
    let tieneDigito = false;
    for(let i=0;i<password.length;i++){
        let caracter= password.charAt(i);
        if(/[0-9]/.test(caracter)){
            tieneDigito=true;
            break;
        }
    }
    if (!tieneDigito){
        errores += "Debe contener al menos un digito (0-9). \n";
    }
    // Validar al menos un caracter especial (*,-,_)
    let tieneEspecial= false;
    for(let i =0;i<password.length;i++){
        let caracter = password.charAt(i);
        if(caracter === "*" || caracter === "-" || caracter === "_" ){
            tieneEspecial = true;
            break;
        }
    }
    if (!tieneEspecial){
        errores += "Debe contener al menos uno de los siguientes caracteres especiales: *, -,_,\n";
    }
    return errores;
}