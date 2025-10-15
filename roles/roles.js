let resumenRoles=[]; //Arreglo para almacenar los roles calculados
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
