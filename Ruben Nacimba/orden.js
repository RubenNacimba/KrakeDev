// Arreglo de personas
let personas = [
    //Posicion 0 
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benia", edad: 5 },
];

agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    let hayError = false;
    //Validación del nombre: minimo 3 caracteres
    if (nombre.length < 3) {
        mostrarTexto("lblError1", "El nombre debe tener al menos 3 caracteres.");
        hayError = true;
    } else {
        mostrarTexto("lblError1", ""); //Limpia el error si es correcro
    }
    //Validación edad: debe ser entero entre 0 y 100
    if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTexto("lblError2", "La edad debe ser un número entre 0 y 100");
        hayError = true;
    } else {
        mostrarTexto("lblError2", "");  // Limpiar error si está correcto
    }
    //Si hay algun error detener ejecucion
    if (hayError) {
        return;
    }
    // Si pasa todas las validaciones, crear el objeto
    let nuevaPersona = {}; // Objeto vacio
    // Agregar atributos al objeto
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    //Agregar al arreglo personas
    personas.push(nuevaPersona);
    //Confirmación visual
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarTablaPersonas(); // Refresca la tabla
};
//Funcion que genera y kuestra una tabla HTML con los datos del arreglo  'personas'
mostrarTablaPersonas = function () {
    //Inicializa el contenido HTML de la tabla con clase para aplicar estilos
    let tablaHTML = "<table class = 'estiloTabla'>";
    // Agrega la fila de encabezado con las columnas EDAD y NOMBRE
    tablaHTML += "<tr><th>EDAD</th><th>NOMBRE</th></tr>";
    // Recorre el arregla 'personas' para construir cada fila de la tabla
    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i]; //Recupera el objeto persona en la posicion actual
        // Agrega una fila con los datos de edad y nombre
        tablaHTML += `<tr><td>${persona.edad}</td><td>${persona.nombre}</td></tr>`;
    }
    //Cierra la etiqueta de la tabla
    tablaHTML += "</table>";
    //Insertar el HTML generado en el contenedor con id 'tablapersona'
    mostrarTexto("tablaPersonas", tablaHTML);
}
let personaMayor = personas[0];
//Recorrer el arreglo desde la posicion 1 en adelante
for (let i = 1; i < personas.length; i++) {
    let personaActual = personas[i];
    // Comparar edades
    if (personaActual.edad > personaMayor.edad) {
        //si edad actual es mayor, actualizar personamayor
        personaMayor = personaActual;
    }
}
console.log("P.Mayor", personaMayor);

encontrarMayor = function () {
    let personaMayor = personas[0]; //Paso1: inicializar con el primer elemento
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i]; //Recupera el valor actual
        console.log("Comparando:", elementoPersona.nombre, elementoPersona.edad);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona; //Actualiza si es mayor
        }
    }
    return personaMayor; // retornamos a la persona mayor de edad
}
determinarMayor = function () {
    let mayor = encontrarMayor(); // Llama a encontrar mayor y guarda el resultado
    let mensaje= `Mayor:${mayor.nombre}, Edad: ${mayor.edad}`;
    mostrarTexto("lblResultado", mensaje); // muestra en pantalla
}
encontrarMenor=function(){
    let personaMenor= personas[0]; // Inicializa con el primer elemento
    for(let i = 1;i< personas.length;i++){
        let elementoPersona= personas[i];
        console.log("Comparando:", elementoPersona.nombre, elementoPersona.edad);
        if(elementoPersona.edad  < personaMenor.edad){
            personaMenor= elementoPersona; //Actualiza si es menor
        }

    }
    return personaMenor;
}
determinarMenor= function(){
    let menor = encontrarMenor(); //Llama a encontrar menor
    let mensaje = `Menor: ${menor.nombre}, Edad: ${menor.edad}`;
    mostrarTexto("lblResultado", mensaje); //Muestra el resultado en pantalla
}






