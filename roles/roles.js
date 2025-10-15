let esNuevo=false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0801123456",nombre:"Carlos",apellido:"Mendoza",sueldo:750.0}
]

mostrarEmpleados = function() {
    let tabla = "<table class='tablaEstilo tablaEmpleados'>";
    tabla += "<thead><tr><th>Cédula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr></thead>";
    tabla += "<tbody>";

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        tabla += "<tr>";
        tabla += "<td>" + emp.cedula + "</td>";
        tabla += "<td>" + emp.nombre + "</td>";
        tabla += "<td>" + emp.apellido + "</td>";
        tabla += "<td>" + emp.sueldo.toFixed(2) + "</td>";
        tabla += "</tr>";
    }

    tabla += "</tbody></table>";
    document.getElementById("tablaEmpleados").innerHTML = tabla;

}

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();  // se llama aqui para que se muestre al cargar
     deshabilitarCamposEmpleado();

    
}
deshabilitarCamposEmpleado=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");


}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}
//Función que busca a un empleado en el arreglo 'empleados' segun su cedula
buscarEmpleado = function(cedula){
    for(let i =0; i< empleados.length;i++ ){
        //Verificamos si la cedula del empleado actual coincide con la cedula buscada
        if(empleados[i].cedula==cedula){
            //Si coincide, retornamos el objeto empleado encontrado
            return empleados[i];
        }
    }
    // Si no encuentra ningun empleado con esa cédula, retornamos null
    return null;
}
//Función que agrega un nuevo empleado al arreglo 'empleados'
agregarEmpleado=function(empleado){
    //Verificar si ya existe un empleado con la misca cedula
    let existente = buscarEmpleado(empleado.cedula);
    //Si no existe, lo agregamos al arreglo
    if(existente==null){
        empleados.push(empleado);
        return true; // Se agrego correctamente
    } else {
        return false; // Ya existe un empleado con esa cédula
    }
}
// Función que guarda un nuevo empelado si esNuevo es true
guardar= function(){
    //Recuperar valores desde la caja de texto
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let valido= true;
    //Validación de cedula: 10 digitos exactos
    if(cedula.length !==10 || !/^\d{10}$/.test(cedula)){
        mostrarTexto("lblErrorCedula", "Cédula invalida");
        valido=false;
    }else {
        mostrarTexto("lblErrorCedula", "");
    }
    //Validación de nombre: más de 3 letras
    if(nombre.length <=3 || !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)){
        mostrarTexto("lblErrorNombre", "Nombre inválido");
        valido= false;
    }else{
        mostrarTexto("lblErrorNombre", "");
    }
    //Validación de apellido: más de 3 letras
    if(apellido.length<=3 || !/^[a-zA-Z]+$/.test(apellido)){
        mostrarTexto("lblErrorApellido", "Apellido invalido ");
        valido= false;
    }else {
        mostrarTexto("lblErrorApellido", "");
    }
    // Validacion de suelo: número entre 400 y 500
    if(isNaN(sueldo) || sueldo<400 || sueldo>5000){
        mostrarTexto("lblErrorSueldo", "Sueldo inválido");
        valido=false;
    }else{
        mostrarTexto("lblErrorSueldo", "");
    }
    // Si alguna validación falla, no continua
    if(!valido) return;
    //Si es un nuevo registro 
    if(esNuevo){
        // Crear objeto empleado
        let nuevoEmpleado={
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };
        //Intentar agregar al arreglo 
        let agregado = agregarEmpleado(nuevoEmpleado);
        //mostrar mensaje segun resultado
        if(agregado){
            mostrarTexto("lblErrorBusquedaEmpleado","EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados(); //Actualizar la tabla
            deshabilitarCamposEmpleado(); //Solo si se guardo
        } else{
            mostrarTexto("lblErrorBusquedaEmpleado", "YA EXISTE UN EMPLEADO CON LA CÉDULA" + cedula);
        }
    }
}
ejecutarBusquedaEmpleo= function(){
    //1. Recuperar la cedula desde la caja de busqueda
    let cedulaBuscada = recuperarTexto("txtBusquedaCedula");
    // Buscar el empleado en el arreglo
    let empleado= buscarEmpleado(cedulaBuscada);
    // si no existe, mostrar alerta
    if(empleado=== null){
        alert("Empleado no existe");
        return;
    }
    // Si existe, mostrar sus datos en las cajas
    escribirTexto("txtCedula", empleado.cedula);
    escribirTexto("txtNombre", empleado.nombre);
    escribirTexto("txtApellido", empleado.apellido);
    escribirTexto("txtSueldo", empleado.sueldo);
    // habilitar campos para edicion (excepto cedula)
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    deshabilitarComponente("txtCedula"); // no se puede cambiar la cedula
    // marcar que no es nuevo
    esNuevo= false;
}
modificarEmpleado= function(empleadoModificado){
    for(let i=0; i < empleados.length;i++){
        if(empleados[i].cedula === empleadoModificado.cedula){
            empleados[i].nombre=== empleadoModificado.nombre;
            empleados[i].apellido=== empleadoModificado.apellido;
            empleados[i].sueldo=== empleadoModificado.sueldo;
            return true;
        }
    }
    return false;
}
limpiar = function(){
     escribirTexto("txtCedula", "");
    escribirTexto("txtNombre", "");
    escribirTexto("txtApellido", "");
    escribirTexto("txtSueldo", "");
    escribirTexto("txtBusquedaCedula", "");

    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
    mostrarTexto("lblErrorBusquedaEmpleado", "");

    esNuevo = false;
    deshabilitarCamposEmpleado();

}


