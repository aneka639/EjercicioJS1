
let montoTotal = prompt("Ingrese el monto total");


let medioPago = prompt("Seleccione su método de pago: \n1- Efectivo. \n2- Débito \n3- Crédito");
let valorIVA = montoTotal*0.215;
let SinIVA = montoTotal-valorIVA;
let recargo = montoTotal*0.05;
//let totalRecargo = montoTotal+recargo;
//let valorCuota = montoTotal/cuotas;

if (medioPago==1) {
    alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + montoTotal);
}
let totalRecargo = montoTotal+recargo;

if (medioPago==2) {
    alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\nRecargo del 5%: $" + recargo + "\nTotal: $" + totalRecargo)
}
if (medioPago==3) {
        let cantidadCuotas = prompt("cuotas??");
        if (cantidadCuotas >0 && cantidadCuotas <13){    
            let valorCuota = montoTotal/cantidadCuotas;     
            alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + montoTotal + "\n Cantidad de cuotas: " + cantidadCuotas + "\n Importe por cuota: $" + valorCuota);
        }
        else {
            alert("cantidad inválida")
        }
}




/*if (medioPago==3) {
    let cuotas = prompt("¿En cuántas cuotas financiarás?")
    
    if (cuotas>=1){
        alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + montoTotal);
    }
    else {
        alert("Las cuotas ingresadas son inválidas.")
    }
}



//"\nCantidad de cuotas: " + cuotas + "\nValor por cuota: $" valorCuota);
*/