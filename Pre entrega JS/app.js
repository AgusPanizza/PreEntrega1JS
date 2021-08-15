class cafe{
    constructor(marca, tipo_cafe, precio){
        this.marca = marca;  
        this.tipo_cafe = tipo_cafe;  
        this.precio = precio;
    }
}

const cafe1 = new cafe ("Rambla", "Nicaragua", 1400);
const cafe2 = new cafe ("Puerto Blest", "Colombia", 1200);
const cafe3 = new cafe ("Puerto Blest", "Guatemala", 1200);
const cafe4 = new cafe ("Puerto Blest", "Peru", 1200);
const cafe5 = new cafe ("Puerto Blest", "El salvador", 1200);

console.log(cafe1);

//carrito
let carrito = [];

let agrega = confirm ("¿Te gustaría agregar un café a tu lista?")

while (agrega){

    const selection = prompt ("Elegí entre 1-5 el número de café que deseas llevar");

    switch  (selection){
        case "1":
            carrito.push(cafe1);
            alert (`Ingresaste café ${cafe1.marca} de ${cafe1.tipo_cafe} por un precio de $ ${cafe1.precio}`)
            agrega= confirm (`Querés agregar otro café?`);
            break;

        case "2":
            carrito.push(cafe2);
            alert (`Ingresaste café ${cafe2.marca} de ${cafe2.tipo_cafe} por un precio de $ ${cafe2.precio}`)
            agrega= confirm (`¿Querés agregar otro café?`);
            break;
        
        case "3":
            carrito.push(cafe3);
            alert (`Ingresaste café ${cafe3.marca} de ${cafe3.tipo_cafe} por un precio de $ ${cafe3.precio}`)
            agrega= confirm (`¿Querés agregar otro café?`);
            break;

        case "4":
        carrito.push(cafe4);
        alert (`Ingresaste café ${cafe4.marca} de ${cafe4.tipo_cafe} por un precio de $ ${cafe4.precio}`)
        agrega= confirm (`¿Querés agregar otro café?`);
        break;

        case "5":
        carrito.push(cafe5);
        alert (`Ingresaste café ${cafe5.marca} de ${cafe5.tipo_cafe} por un precio de $ ${cafe5.precio}`)
        agrega= confirm (`¿Querés agregar otro café?`);
        break;

        default:
            alert(`Numero de café incorrecto, por favor elija uno nuevamente`)
    }
}

console.log(carrito)

function totalCarrito(){
    let carritoTotal = 0;
    for (const producto of carrito){
        carritoTotal += producto.precio;
    }
    return carritoTotal;                  
    }

alert(`El total de cafés ingresados es de ${carrito.length} por un monto de $${totalCarrito()}`); 