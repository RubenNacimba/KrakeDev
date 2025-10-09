// Variables globales para llevar el puntaje
let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function (seleccionado) {
    let eleccion = generarElemento();
    let rutaJugador1 = generarRuta(seleccionado);
    let rutaJugador2 = generarRuta(eleccion);

    cambiarImagen("imgJugador", rutaJugador1);
    cambiarImagen("imgComputador", rutaJugador2);

    let resultado = determinarGanador(seleccionado, eleccion);
    let mensaje;

    // Primero actualizamos puntajes
    if (resultado == "EMPATE") {
        mensaje = "EMPATE";
    } else if (resultado == "GANA JUGADOR 1") {
        puntosUsuario++;
        mensaje = "GANASTE LA PARTIDA";
    } else if (resultado == "GANA JUGADOR 2") {
        puntosComputador++;
        mensaje = "PERDISTE LA PARTIDA";
    }

    // Luego mostramos puntajes actualizados
    cambiarTexto("lblPuntosUsuario", "Usuario: " + puntosUsuario);
    cambiarTexto("lblPuntosComputador", "Computador: " + puntosComputador);

    // Validación final del juego
    if (puntosUsuario == 5) {
        mensaje = "HAS GANADO EL JUEGO";
    } else if (puntosComputador == 5) {
        mensaje = "EL COMPUTADOR TE HA VENCIDO";
    }

    // Finalmente mostramos el mensaje
    cambiarTexto("lblResultado", mensaje);
}



 limpiar = function () {
    // Reiniciar puntajes
    puntosUsuario = 0;
    puntosComputador = 0;

    // Limpiar imágenes
    cambiarImagen("imgJugador", "");
    cambiarImagen("imgComputador", "");

    // Limpiar textos
    cambiarTexto("lblResultado", "");
    cambiarTexto("lblPuntosUsuario", "Usuario: 0");
    cambiarTexto("lblPuntosComputador", "Computador: 0");
}
