let personas =[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5},
];

agregarPersona= function(){
    let nombre=recuperarTexto("txtNombre");
    let edad =recuperarInt("txtEdad");
    let hayError=false;
    //Validacion de nombre
    if(nombre.length<3){
        mostrarTexto("lblError1", "Debe tener al menos 3 caracteres");
        hayError=true;
    } else {
        mostrarTexto("lblError1", "");
    }
    //Validacion de la edad
    if(isNaN(edad) || edad<0 || edad>100){
        mostrarTexto("lblError2", "Edad debe ser entero entre 0 y 100");
        hayError=true;
    } else {
        mostrarTexto("lblError2", "");
    }
    //Si encuentra un error detiene ejecucion
    if(hayError){
        return
    }
    //Crear un objeto
    let nuevapersona = {}; //objeto vacio
    //Agregar a a NuevaPersona los atributos Noombre y edad y edad del objeto con los valores recuperados de pantalla
    nuevapersona.nombre= nombre;
    nuevapersona.edad= edad;
    //Agrega al arreglo personas
    personas.push(nuevapersona);
    //Mensaje
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarTablaPersonas();
}
//Mostrar tabla en pantalla
mostrarTablaPersonas = function(){
    let tabla = "<table class='estiloTabla'>";
    tabla += "<thead><tr><th>EDAD</th><th>Nombre</th></tr></thead>";
    tabla += "<tbody>";

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        tabla += "<tr>";
        tabla += "<td>" + persona.edad + "</td>";
        tabla += "<td>" + persona.nombre + "</td>";
        tabla += "</tr>";
    }

    tabla += "</tbody></table>";
    mostrarTexto("tablaPersonas", tabla);
};
let personaMayor = personas[0];
for(let i=1;i< personas.length;i++){
    let personaActual = personas[i];
    //Comparar edades
    if(personaActual.edad>personaMayor.edad){
        //Actualiza persona mayor
        personaMayor=personaActual;
    }
}
console.log("Persona Mayor es:", personaMayor);
encontrarMayor=function(){
    let personaMayor= personas[0];
    for(let i=1;i<personas.length;i++){
        let elementoPersona= personas[i]; //Recupera el valor actual
        console.log("Comparando", elementoPersona.nombre, elementoPersona.edad);
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor = elementoPersona; //Actualiza si es mayor
        }
    }
    return personaMayor; // retornamos a la persona de mayor edad
}
determinarMayor=function(){
    let mayor=encontrarMayor();
    let mensaje = `Mayor:${mayor.nombre},Edad:${mayor.edad}`;
    mostrarTexto("lblResultado", mensaje);
}

encontrarMenor=function(){
    let personaMenor= personas[0];
    for(let i=1;i<personas.length;i++){
        let elementoPersona= personas[i]; //Recupera el valor actual
        console.log("Comparando", elementoPersona.nombre, elementoPersona.edad);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor = elementoPersona; //Actualiza si es mayor
        }
    }
    return personaMenor; // retornamos a la persona de mayor edad
}
determinarMenor=function(){
    let menor=encontrarMenor();
    let mensaje = `Menor:${menor.nombre},Edad:${menor.edad}`;
    mostrarTexto("lblResultado", mensaje);
}