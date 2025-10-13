//Declaración de un arregla vacio llamad 'notas' para almecenar valore numéricos
let notas= []; // variable tipo arreglo

//Función que agrega elementos al arreglo  'notas' y muestra su longitud
agregarElementos=function(){
    notas.push(5); //Agrega el número 5 al final del arreglo
    notas.push(10); // Agrega el número 10 al final del arreglo
    console.log(notas.length); //Muestra en consola cuantos elementos hay en el arreglo   
}
//Función que recorre el arreglo 'notas' y muestra cada elemento en consola
recorrerArreglo=function(){
    let notaR; //Variable para almacenar temporalmente cada nota
    for (let indice=0; indice<notas.length;indice++){ //Recorre desde el indice 0 hasta el último
        notaR=notas[indice]; //Asigna a 'notaR' el valor en la posición actual del arreglo
        console.log(notaR); //Muestra en consola el valor de 'notaR'
    }
}
//Función que calcula el promedio de las notas y lo muestra en pantalla
ejecutarPromedio=function(){
    R=calcularPromedio(); //Llama a la función 'calcularPromedio' y guarda el resultado en 'R'
    mostrarTexto("lblPromedio",R); //Muestra el valor de 'R' en el elemento con id 'lblPromedio'
}
//Función que recupera una nota desde un campo de texto y la agrega al arreglo
probarAgregar=function(){
    let notaRecuperada; // Variable para almacenar la nota ingresada por el usuario
    notaRecuperada=recuperarInt("txtNota");  //Recupera el valor entero del campo con id 'txtNota'
    agregarNota(notaRecuperada); // llama a la función 'agregarNota' para añadir la nota al arreglo  
}
// Función que agrega una nota al arreglo 'notas'
agregarNota=function(nota){
    notas.push(nota); // Inserta la nota recibida al final del arreglo
}
//Función que calcula el promedio de todas las notas almacenadas en el arreglo
calcularPromedio=function(){
    let sumaNotas=0; //Inicializa la suma total de notas en 0
    let promedio=0; //Inicializa la varible promedio en 0
    //Recorre el arreglo  'notas' y acumula la suma de todos sus elementos
    for(let n=0; n<notas.length;n++){
        sumaNotas=sumaNotas+notas[n]; //Suma el valor de cada nota a 'sumaNotas'
    }
    //Calcula el promedio dividiendo la suma total entre la cantidad de notas
    promedio = sumaNotas/notas.length;

    return promedio; // Retorna el valor calculado del promedio
}


