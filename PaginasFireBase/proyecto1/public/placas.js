validarPlaca=function(){
    //Declaración de variables
    let placa;
    let erroresEstructura;
    let provincia;
    let mensaje;
    let tipoVehiculo;
    let diaPicoyPlaca;
    //Obtener el valor ingresado por el usuario en la caja de texto
    placa=recuperarTexto("txtPlaca");
    //Invocar a validarEstructura y guardar el retorno en la variable erroresEstructira
    erroresEstructura=validarEstructura(placa);
    //Mostrar resultado en pantalla 
    if(erroresEstructura=== null){
        //Mostrar mensaje de validación
        mostrarTexto("lblResultado", "Estructura Valida");
        //Obtener la provincia segun la primera letra
        provincia= obtenerProvincia (placa);
        //Veridicar si la provincia es valida 
        if(provincia !==null){
            mensaje= "Provincia de "+ provincia;
        }else {
            mensaje="Provincia incorrecta: La letra inicial no corresponde a ninguna provincia válida.";
        }
        //Mostrar el mensaje de provincia
        mostrarTexto("lblProvincia", mensaje);
        //Obtener el tipo de vehiculo segun la segunda letra
        tipoVehiculo=obtenerTipoVehiculo(placa);
        //Mostrar tipo de vehiculo si es valido, o mensaje de error si no 
        if(tipoVehiculo !==null){
            mostrarTexto("lblTipoVehiculo", "El tipo de vehiculo es: "+ tipoVehiculo);
        } else {
            mostrarTexto("lblTipoVehiculo","Tipo de vehiculo incorrecto: La segunda no corresponde a ningun tipo reconocido");
        }

        //invocar a obtenerDiaPicoYplaca y mostrar resultado
        diaPicoyPlaca=obtenDiaPicoYPlaca(placa);
        mostrarTexto("lblPicoYPlaca", 
    "El día que le corresponde pico y placa es el día: " + diaPicoyPlaca + 
    ".<br>Recuerda que los sábados, domingos y feriados hay libre circulación.");


        
    } else {
        
        mostrarTexto("lblResultado", "Estructura incorrecta: " + erroresEstructura);
        mostrarTexto("lblProvinvia", "");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblPicoYPlaca", "");
    }
    limpiar = function(){
    // Limpiar la caja de texto
    mostrarTextoEnCaja("txtPlaca", "");
    // Limpiar todos los mensajes en pantalla
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblPicoYPlaca", "");
}

}
