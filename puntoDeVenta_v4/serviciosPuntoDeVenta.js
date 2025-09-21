calcularValorDescuento=function(monto, porcentajeDescuento){
    let totalDescuento;
    totalDescuento=(monto*porcentajeDescuento)/100;
    return totalDescuento;
}
calcularIva=function(monto){
    let valorIva;
    valorIva=monto*0.12;
    return valorIva;
}
calcularSubtotal=function(precio, cantidad){
    let valorSubtotal;
    valorSubtotal=precio*cantidad;
    return valorSubtotal
}
calcularTotal=function(subtotal, descuento,IVA){
    let valorTotal;
    valorTotal=subtotal-descuento+IVA;
    return valorTotal;
}
