probarAtributos=function(){
    let persona ={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}
crearProducto= function(){
    let producto1 ={
        nombre: "Carro",
        precio: 5040.25,
        stock: 10,
    }
    let producto2 ={
         nombre: "Casa",
        precio: 20090.75,
        stock: 5,
    }
    console.log(producto1.nombre);
    console.log(producto2.nombre)
    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    } else if(producto1.stock<producto2.stock){
        console.log("Producto2 tiene mayor stock");
    } else{
        console.log("Ambos tienen el mismo stock");
    }
}