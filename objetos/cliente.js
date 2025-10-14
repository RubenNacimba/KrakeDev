// Arreglo de objetos que representa una lista de clientes con sus datos personales
let clientes=[
    {cedula:"123456",nombre:"Juan",edad:20}, // Cliente 1
    {cedula:"222222",nombre:"Mario",edad:50}, // Cliente 2
    {cedula:"66666",nombre:"Pepe",edad:22}    // Cliente 3
];

// Función que guarda los cambios realizados a un cliente existente
guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula"); // Recupera la cédula desde el campo de texto
    let valorNombre=recuperarTexto("txtNombre"); // Recupera el nombre desde el campo de texto
    let valorEdad=recuperarFloat("txtEdad");     // Recupera la edad como número decimal

    let datosCliente={}; // Crea un objeto vacío para almacenar los datos del cliente
    datosCliente.cedula=valorCedula; // Asigna la cédula al objeto
    datosCliente.nombre=valorNombre; // Asigna el nombre al objeto
    datosCliente.edad=valorEdad;     // Asigna la edad al objeto

    modificarCliente(datosCliente); // Llama a la función para modificar los datos del cliente
    mostrarClientes();              // Actualiza la tabla visual con los datos actualizados
}

// Función que modifica los datos de un cliente si existe en el arreglo
modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula); // Busca el cliente por su cédula
    if(clienteEncontrado != null){ // Si se encuentra el cliente
        clienteEncontrado.nombre=cliente.nombre; // Actualiza el nombre
        clienteEncontrado.edad=cliente.edad;     // Actualiza la edad
    }else{
        // No hace nada si el cliente no existe
    }
}

// Función que busca un cliente por cédula y muestra sus datos en los campos de texto
ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda"); // Recupera la cédula ingresada para búsqueda
    let cliente=buscarCliente(valorCedula); // Busca el cliente en el arreglo
    if(cliente == null){ // Si no se encuentra el cliente
        alert("Cliente no encontrado"); // Muestra alerta
    }else{ // Si se encuentra el cliente
        mostrarTextoEnCaja("txtCedula", cliente.cedula); // Muestra la cédula en el campo correspondiente
        mostrarTextoEnCaja("txtNombre", cliente.nombre); // Muestra el nombre en el campo correspondiente
        mostrarTextoEnCaja("txtEdad", cliente.edad);     // Muestra la edad en el campo correspondiente
    }
}

// Función que crea un nuevo cliente a partir de los datos ingresados
crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula"); // Recupera la cédula desde el campo de texto
    let valorNombre=recuperarTexto("txtNombre"); // Recupera el nombre desde el campo de texto
    let valorEdad=recuperarFloat("txtEdad");     // Recupera la edad como número decimal

    let nuevoCliente={}; // Crea un objeto vacío para el nuevo cliente
    nuevoCliente.cedula=valorCedula; // Asigna la cédula
    nuevoCliente.nombre=valorNombre; // Asigna el nombre
    nuevoCliente.edad=valorEdad;     // Asigna la edad

    agregarCliente(nuevoCliente); // Llama a la función para agregar el cliente al arreglo
}

// Función que agrega un cliente al arreglo si no existe previamente
agregarCliente=function(cliente){
    let resultado; // Variable para almacenar el resultado de la búsqueda
    resultado=buscarCliente(cliente.cedula); // Busca si ya existe un cliente con esa cédula
    if(resultado == null){ // Si no existe
        clientes.push(cliente); // Agrega el nuevo cliente al arreglo
        alert("Cliente agregado"); // Muestra mensaje de confirmación
        mostrarClientes(); // Actualiza la tabla visual
    }else{ // Si ya existe
        alert("Ya existe un usuario con la cedula"+cliente.cedula); // Muestra mensaje de error
    }
}

// Función que busca un cliente por su cédula en el arreglo
buscarCliente=function(cedula){
    let elementoCliente; // Variable para recorrer cada cliente
    let clienteEncontrado=null; // Variable para almacenar el cliente encontrado
    for(let i=0;i<clientes.length;i++){ // Recorre el arreglo de clientes
        elementoCliente=clientes[i]; // Obtiene el cliente actual
        if(elementoCliente.cedula== cedula){ // Compara la cédula
            clienteEncontrado=elementoCliente; // Si coincide, guarda el cliente
            break; // Sale del ciclo
        }
    }
    return clienteEncontrado; // Retorna el cliente encontrado o null
}

// Función que muestra todos los clientes en una tabla HTML
mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes"); // Obtiene el elemento HTML donde se mostrará la tabla
    let contenidoTabla="<table><tr>"+ // Inicializa la tabla con encabezados
    "<th> CEDULA </th>"+
    "<th> NOMBRE </th>"+
    "<th> EDAD </th>"+
    "</tr>";
    let elementoCliente; // Variable para recorrer cada cliente
    for(let i=0;i<clientes.length;i++){ // Recorre el arreglo de clientes
        elementoCliente=clientes[i]; // Obtiene el cliente actual
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>" // Agrega la cédula en una celda
        +"<td>"+elementoCliente.nombre+"</td>" // Agrega el nombre en una celda
        +"<td>"+elementoCliente.edad+"</td>" // Agrega la edad en una celda
        +"</tr>" // Cierra la fila
    }
    contenidoTabla+="</table>" // Cierra la tabla

    cmpTabla.innerHTML=contenidoTabla; // Inserta la tabla generada en el elemento HTML
}
