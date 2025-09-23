calcularPromedioNotas=function(){
    //variables para recuperar variables
    let caja1;
    let caja2;
    let caja3;
    let promedio;

    // 1. Recuprar valor de caja1 como float 
    caja1=recuperarFloat("txtNota1");
    // 2. Recuprar valor de caja1 como float
    caja2=recuperarFloat("txtNota2");
    // 3. Recuprar valor de caja1 como float
    caja3=recuperarFloat("txtNota3");

    // Invoca a la funcion calcularPromedio, pasandolecomo parametros las 3 notas
    //Guarda el retorno en una variable llamada promedio.
    promedio=calcularPromedio(caja1,caja2,caja3);
    //mostrar texto
    mostrarTexto("lblResultado", promedio.toFixed(2));
    if(promedio>7){
        mostrarTexto("lblAprobado","APROBADO");
        mostrarImagen("imgen","goku-goku-happy.gif");
    } else {
        mostrarTexto("lblAprobado","REPROBADO");
        mostrarImagen("imgen","reprobado.gif");
    }
}