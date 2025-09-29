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
calcularDescuentoPorVolumen=function(subtotal, cantidad){
    let descuento;
    let valorDescuento;
    if(cantidad<3){
        descuento=0;
    } else if (cantidad>=3 && cantidad<=5){
        descuento=3;
    } else if (cantidad>5 && cantidad<=11){
        descuento=4;
    } else if(cantidad>11){
        descuento=5;
    }
    valorDescuento=(subtotal*descuento)/100;
    return valorDescuento; 
}