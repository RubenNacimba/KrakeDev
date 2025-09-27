calcularTasaInteres = function (ingresoAnual){
    let tasaInteres;
    if(ingresoAnual<3000){
        tasaInteres=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=14;
    } else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=13;
    }else if(ingresoAnual>=2000000){
        tasaInteres=12;
    }
    return tasaInteres;
}
calcularCapacidadPago = function (edad, ingresos, egresos){
    let total= ingresos-egresos; // Calcular el ingreso disponible
    if(edad>50){        //Si edad es >50 su capacidad es del 30%
        total=total*0.30;
    } else if(edad<=50){    //Si su edad es <=50 su capacidad es del 40%
        total=total*0.40;
    }
    return total;           // DEvuelve el resultado
}
calcularDescuento = function(precio, cantidad){
    let resultadoDescuento;
    if (cantidad<3){
        resultadoDescuento=0;
    } else if(cantidad>=3 && cantidad<=5){
        resultadoDescuento=precio*cantidad*0.02;
    } else if(cantidad>=6 && cantidad<=11){
        resultadoDescuento=precio*cantidad*0.03;
    } else if(cantidad>=12){
        resultadoDescuento=precio*cantidad*0.04;
    }
    return precio * cantidad - resultadoDescuento;  //Total con descuento aplicado
}
determinarColesterolLDL = function(nivelColesterol){
    let resultadoColeterol;
    if(nivelColesterol<100){
        resultadoColeterol="Optimo";
    } else if(nivelColesterol>=100 && nivelColesterol<130){
        resultadoColeterol="Casi Optimo";
    } else if(nivelColesterol>=130 && nivelColesterol<160){
        resultadoColeterol="Limite Alto";
    }else if(nivelColesterol>=160 && nivelColesterol <190){
        resultadoColeterol="Alto";
    }else if(nivelColesterol>=190){
        resultadoColeterol="Muy Alto";
    }
    return resultadoColeterol;
}
// Valida la clave ingresada por el usuario 
// la considera valida si cumple la siguiente condicion
//tiene al menos 8 caracteres
// tiene maximo 16 caracteres
validarClave= function(clave){
    let resultadoClave;
    if(clave.length>=8 && clave.length<=16){
        resultadoClave=true;
    }else {
        resultadoClave=false;
    }
    return resultadoClave;
}
esMayuscula = function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65 && codigo<=90){
        return true;
    } else {
        return false;
    }
    
}
esMinuscula = function(caracter){
    let codigoMinuscula=caracter.charCodeAt(0);
    if(codigoMinuscula>=97 && codigoMinuscula<=122){
        return true;
    }else {
        return false;
    }
}
esDigito = function(caracter){
    let Digito=caracter.charCodeAt(0);
    if(Digito>=48 && Digito<=57){
        return true;
    }
        return false;
}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    
    if(notaMatematica>90 && notaFisica>90 && notaGeometria>90){
        return true;
    }
        return false;
}
otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }
        return false;

}
dejarSalir= function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && (notaFisica>notaMatematica)){
        return true;
    }
        return false;
}
mostrarResultado = function(){
    var mostrarTasa = calcularTasaInteres(600000);
    console.log("La tassa de interes es:" + mostrarTasa);
    var total= calcularCapacidadPago(45,5000,2000);
    console.log("La capacidad de pago es  de :"+ total);
    var resultadoDescuento=calcularDescuento(100,10);
    console.log("El total con descuento es de :"+resultadoDescuento);
    var resultadoColeterol=determinarColesterolLDL(180);
    console.log("El nivel de colesterol es :"+resultadoColeterol)
    var resultadoClave=validarClave("12345678");
    console.log("La clave es valda? :"+resultadoClave);
    var codigo=esMayuscula("b");
    console.log("Es mayuscula?"+ codigo);
    var codigoMinuscula=esMinuscula("A");
    console.log("Es minuscula?"+ codigoMinuscula);
    var Digito=esDigito("5");
    console.log("Es digito?"+ Digito);
    var permiso = darPermiso(95,92,93);
    console.log("Tiene permiso?"+ permiso);
    var permiso2 = otorgarPermiso(85,91,81);
    console.log("Tiene permiso?"+ permiso2);
    var permiso3= dejarSalir(91,95,92);
    console.log("Tiene permiso?"+ permiso3);
}