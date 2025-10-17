esMayuscula = function (caracter) {
    let letraMayuscula;
    letraMayuscula = caracter.charCodeAt(0);
    if (letraMayuscula >= 65 && letraMayuscula <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let esDigito;
    esDigito = caracter.charCodeAt(0);
    if (esDigito >= 48 && esDigito <= 57) {
        return true;
    } else {
        return false;
    }
}
esGuion = function (caracter) {
    let guion;
    guion = caracter.charCodeAt(0);
    if (guion == 45) {
        return true;
    } else {
        return false;
    }
}




















