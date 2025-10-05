validarEstructura = function (placa) {
    let errores = ""; //Variable donde vamos acumulando los mensajes de error
    //Validar la longitud de la placa (debe ser 7 u 8 caracteres)
    if (placa.length !== 7 && placa.length !== 8) {
        errores += "La placa debe tener entre 7 y 8 caracteres."
    }
    // Validar las 3 letras mayusculas
    let pos0 = placa.charCodeAt(0);
    if (!(pos0 >= 65 && pos0 <= 90)) {  //Comprueba si no esta entre A(65) y Z(90)
        errores+="El primer caracter debe ser una letra mayuscula. ";  //Error si no es mayuscula
    }
    let pos1= placa.charCodeAt(1);
    if(!(pos1 >=65 && pos1<=90)) {  // Comprueba si no esta entre A y Z
        errores +="El segundo caracter debe ser una letra mayuscula. "; //Error si no es mayuscula  
    }
    let pos2= placa.charCodeAt(2);
    if(!(pos2 >=65 && pos2<=90)) {  // Comprueba si no esta entre A y Z
        errores +="El tercer caracter debe ser una letra mayuscula. "; //Error si no es mayuscula  
    }
    //Validadr guion en la cuarta posición
    let guion=placa.charCodeAt(3);
    if(guion !==45  ){
        errores += "El cuarto caracter debe ser guión. "; //Error si no es "-"
    }
    //Validar digitos en 5ta, 6ta, y 7ma posición 
    let digito4 = placa.charCodeAt(4);
    if(!(digito4>=48 && digito4<=57)) {
        errores +="El quinto caracter debe ser un digito. "; //Error si no es numero
    }
     let digito5 = placa.charCodeAt(5);
    if(!(digito5>=48 && digito5<=57)) {
        errores +="El sexto caracter debe ser un digito. "; //Error si no es numero
    }
     let digito6 = placa.charCodeAt(6);
    if(!(digito6>=48 && digito6<=57)) {
        errores +="El séptimo caracter debe ser un digito. "; //Error si no es numero
    }
    //Validar 8vo caracter opcional
    if (placa.length==8){
        let digito7=placa.charCodeAt(7);
        if(!(digito7 >=48 && digito7<=57)){ //comprueba si no es un número
            errores += "El octavo caracter debe ser un digito. "; // Error si no es numero
        }
    }
    // 6. Retornar resultado
    if(errores === ""){    // Si no se acumulo ningun error 
        return null; //La placa es valida (no hay errores)
    }else{
        return errores; // Retorna el string con toos los errores concatenados
    }
}

obtenerProvincia= function(placa){
    //Extrae la primera letra de la placa
    let letra = placa.charAt(0); //Se asume que la placa ya esta en mayúscula por validación previa
    //Inicializa la variable que almacenará el nombre de la provinvia
    let provincia=null;
    //Tabla de provincia por placa
    let provincias = {
        A: "Azuay",
        B: "Bolivar",
        C: "Carchi",
        U: "Cañar",
        X: "Cotopaxi",
        H: "Chimborazo",
        O: "El oro",
        E: "Esmeraldas",
        W: "Galápagos",
        G: "Guayas",
        I: "Imbabura",
        L: "Loja",
        R: "Los Rios",
        M: "Manabi",
        V: "Morona Santiago",
        N: "Napo",
        S: "Pastaza",
        P: "Pichincha",
        K: "Sucumbios",
        Q: "Orellana",
        T: "Tungurahua",
        Z: "Zamora Chinchipe",
        Y: "Santa Elena"
    };
    // Veridicación si la letra existe como clave en el objeto provincias 
    if(provincias[letra]){
        //Si existe, asigna el nombre de la provincia a la variable
        provincia=provincias[letra];
    }
    //Retorna el nombre de la provincia si fue encontrada , o null si no existe 
    return provincia;
}
obtenerTipoVehiculo = function(placa){
    //Extraer la segunda letra de la placa
    let letra = placa.charAt(1);
    //Inicializa la variable que almacenara el nombre del tipo del vehiculo
    let tipoVehiculo = null;
    //Tabla de tipo de vehiculos
    let tiposdeVehiculos ={
        E: "Vehiculo Gubernamental",
        X: "Vehiculo de uso oficial",
        S: "Vehiculo del gobierno provincial",
        M: "Vehiculo municipal",
        A: "Vehiculo comercial (taxi, bus)",
        Z: "Vehiculo comercial (taxi, bus)"
    };
    // Verifica si la letra esta en una tabla de tipos definidos
    if(tiposdeVehiculos[letra]){
        // Si existe, asigna el tipo correspondiente desde la tabla
        tipoVehiculo= tiposdeVehiculos[letra];
    }
    // si no esta en la tabla pero es una letra válida (A-Z), se considera vehiculo particular
    else if(letra>="A" && letra <="Z"){
        tipoVehiculo="Vehiculo Particular";
    }
    // Retorna el tipo de vehiculo identificado, o null si no se pudo determinar
    return tipoVehiculo;
}
obtenDiaPicoYPlaca = function(placa){
    //Obtener el dia actual (0)

    //Extraer la ultima letra de la placa (posición final = longitud -1)
    let ultimonumero = placa.charAt(placa.length-1);
    //inicializar la variable que almacenara el dia de restricción
    let picoYPlaca= null;
    //Evalua el último digito y asignar el dia correspondiente 
    switch (ultimonumero) {
        case "1":
        case "2":
            picoYPlaca="LUNES";
            break;
        case "3":
        case "4":
            picoYPlaca="MARTES";
            break;
        case "5":
        case "6":
            picoYPlaca="MIERCOLES";
            break;
        case "7":
        case "8":
            picoYPlaca="JUEVES";
            break;
        case "9":
        case "0":
            picoYPlaca="VIERNES";
            break;
        default:
            //Si el ultimo caracter no es un digito valido, no hay restricción
            picoYPlaca=null;
    }
    //Retorna el dia correspondiete o null si no aplica
    return picoYPlaca;
}