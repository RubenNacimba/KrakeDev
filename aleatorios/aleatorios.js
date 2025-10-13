// crear una funcion que no reciba parametros y retorne un numero aleatorio entre 1 y 100 (incluidos)
aleatorioNumero = function () {
    let aleatorio; // Variable para almacenar el número aleatorio decimal entre 0 y 1
    let numeroMultiplicado; // Variable para almacenar el número escalado entre 0 y 100
    let numeroEntero; // Variable para almacenar el numero entero truncado
    let valor; // Varible final que contendrá el numero entre 1 y 100
    aleatorio = Math.random(); //Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    numeroMultiplicado = aleatorio * 100; // Escala el número aleatorio al rango 0-100
    numeroEntero = parseInt(numeroMultiplicado); //Convierte el numero decimal a entero truncado decimales
    valor = numeroEntero + 1; //Ajusta el rango para que sea de 1 a 100 (en lugar de 0 a 99)
    return valor; //Retorna el número aleatorio entre 1 y 100
}
// Crear una funcion llamada generarAleatorios que no reciba parámetros y realice la siguiente lógica:
generarAleatorios = function () {
    let aleatorio = []; // Arreglo para almacenar los números aleatorios generados 
    let limite = recuperarTexto("txtLimite"); //Recuperar el valor ingresado por el usuario desde el campo con id 'txtLimite'
    if (limite >= 5 && limite <= 20) { // Verifica que el valor ingresado esté dentro del rango permitido (entre 5 y 20)
        for (let l = 0; l < limite; l++) { // Repite el proceso 'limite' veces
            //Console.log(l); linea opcional para depuración opcional
            let res = aleatorioNumero();  //Genera un numero aleatorio entre 1 y 100
            aleatorio[l] = res; // Almacena el número generado en la posición correspondiente del arreglo 
        }
        mostrarResultados(aleatorio); // Llama  a la función para mostrar los resultados en pantalla
    }
}
mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla"); // Obtiene el elemento HTML donde se mostrará la tabla
    let contenidoTabla= "<table><tr><th>ARREGLO</th></tr>"; //Inicializa el contenido HTML de la tabla con encabezado
    for (let i=0; i<arregloNumeros.length;i++ ){ //Recorre el arreglo de números aleatorios
        contenidoTabla +="<tr><td>" + arregloNumeros[i] + "</td></tr>"; //Agrega cada número como una fila en la tabla
    }
    contenidoTabla += "</table>"; // Cierra la etiqueta de la tabla
    cmpTabla.innerHTML = contenidoTabla; // Inserta la tabla generada dentro del elemento HTML 
}