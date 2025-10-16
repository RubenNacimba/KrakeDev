let roles = [];

let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0801123456", nombre: "Carlos", apellido: "Mendoza", sueldo: 750.0 }
];

mostrarEmpleados = function () {
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
};

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();  // se llama aquí para que se muestre al cargar
    deshabilitarCamposEmpleado();
};

deshabilitarCamposEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
};

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardar");
};

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    mostrarRoles();
    mostrarTotales();
};

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
};

// Función que busca a un empleado en el arreglo 'empleados' según su cédula
buscarEmpleado = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula) {
            return empleados[i];
        }
    }
    return null;
};

// Función que agrega un nuevo empleado al arreglo 'empleados'
agregarEmpleado = function (empleado) {
    let existente = buscarEmpleado(empleado.cedula);
    if (existente == null) {
        empleados.push(empleado);
        return true; // Se agregó correctamente
    } else {
        return false; // Ya existe un empleado con esa cédula
    }
};

// Función que guarda un nuevo empleado si esNuevo es true
guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let valido = true;
    if (cedula.length !== 10 || !/^\d{10}$/.test(cedula)) {
        mostrarTexto("lblErrorCedula", "Cédula inválida");
        valido = false;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    if (nombre.length <= 3 || !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "Nombre inválido");
        valido = false;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }
    if (apellido.length <= 3 || !/^[a-zA-Z]+$/.test(apellido)) {
        mostrarTexto("lblErrorApellido", "Apellido inválido");
        valido = false;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }
    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "Sueldo inválido");
        valido = false;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    if (!valido) return;
    if (esNuevo) {
        let nuevoEmpleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };
        let agregado = agregarEmpleado(nuevoEmpleado);
        if (agregado) {
            mostrarTexto("lblErrorBusquedaEmpleado", "EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarCamposEmpleado();
        } else {
            mostrarTexto("lblErrorBusquedaEmpleado", "YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula);
        }
    }
};

ejecutarBusquedaEmpleo = function () {
    let cedulaBuscada = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedulaBuscada);
    if (empleado === null) {
        alert("Empleado no existe");
        return;
    }
    escribirTexto("txtCedula", empleado.cedula);
    escribirTexto("txtNombre", empleado.nombre);
    escribirTexto("txtApellido", empleado.apellido);
    escribirTexto("txtSueldo", empleado.sueldo);
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
    esNuevo = false;
};

modificarEmpleado = function (empleadoModificado) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === empleadoModificado.cedula) {
            // Se corrigen los operadores para asignar nuevos valores
            empleados[i].nombre = empleadoModificado.nombre;
            empleados[i].apellido = empleadoModificado.apellido;
            empleados[i].sueldo = empleadoModificado.sueldo;
            return true;
        }
    }
    return false;
};

limpiar = function () {
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
};

buscarPorRol = function () {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }
    mostrarTexto("infoCedula", empleado.cedula);
    mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
    mostrarTexto("infoSueldo", empleado.sueldo.toFixed(2));
};

calcularAporteEmpleado = function (sueldo) {
    return sueldo * 0.0945;
};

calcularAporteEmpleador = function (sueldo) {
    return sueldo * 0.1115;
};

calcularValorAPagar = function (sueldo, aporte, descuento) {
    return sueldo - aporte - descuento;
};

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let valido = true;
    if (isNaN(descuento) || descuento < 0 || descuento >= sueldo) {
        mostrarTexto("lblErrorDescuentos", "Descuento inválido");
        valido = false;
    } else {
        mostrarTexto("lblErrorDescuentos", "");
    }
    if (!valido) return;
    let aporte = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporte.toFixed(2));
    let total = calcularValorAPagar(sueldo, aporte, descuento);
    mostrarTexto("infoPago", total.toFixed(2));
    habilitarComponente("btnGuardar");
};

buscarRol = function (cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
};

agregarRol = function (rol) {
    let existente = buscarRol(rol.cedula);
    if (existente == null) {
        roles.push(rol);
        alert("ROL GUARDADO CORRECTAMENTE");
    } else {
        alert("YA EXISTE UN ROL PARA CÉDULA " + rol.cedula);
    }
};

guardarRol = function () {
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    let rol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };
    agregarRol(rol);
    deshabilitarComponente("btnGuardar");
};

mostrarRoles = function () {
    let tabla = "<table class='tablaEstilo tablaResumen'>";
    // Se ajusta el encabezado a 5 columnas
    tabla += "<thead><tr><th>Cédula</th><th>Nombre</th><th>Valor a Pagar</th><th>Aporte Empleado</th><th>Aporte Empleador</th></tr></thead>";
    tabla += "<tbody>";
    for (let i = 0; i < roles.length; i++) {
        let r = roles[i];
        tabla += "<tr>";
        tabla += "<td>" + r.cedula + "</td>";
        tabla += "<td>" + r.nombre + "</td>";
        tabla += "<td>" + r.valorAPagar.toFixed(2) + "</td>";
        tabla += "<td>" + r.aporteEmpleado.toFixed(2) + "</td>";
        tabla += "<td>" + r.aporteEmpleador.toFixed(2) + "</td>";
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";
    document.getElementById("tablaResumen").innerHTML = tabla;
};

mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }
    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));
};