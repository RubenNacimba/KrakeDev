
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}


mostrarTexto = function(id, texto) {
    let componente = document.getElementById(id);
    if (componente) {
        componente.innerText = texto;
    } else {
        console.warn(`⚠️ No se encontró el componente con id="${id}"`);
    }
}






mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}
function escribirTexto(id, valor) {
    document.getElementById(id).value = valor;
}

recuperarTextoDiv = function(idComponente){
    let componente = document.getElementById(idComponente);
    if (!componente) {
        console.error(`⚠️ No se encontró el componente con id="${idComponente}"`);
        return "";
    }
    return componente.textContent;
}

recuperarFloatDiv = function(idComponente){
    let texto = recuperarTextoDiv(idComponente);
    return parseFloat(texto);
}

recuperarIntDiv = function(idComponente){
    let texto = recuperarTextoDiv(idComponente);
    return parseInt(texto);
}
