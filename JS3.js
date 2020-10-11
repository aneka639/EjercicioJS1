let cantidadVentas = prompt("Ingrese la cantidad de ventas");
for(let i = 0; i < cantidadVentas; i++) {
    let temp = i;
        if(i == 3 || i == 4) {
            continue
        }
    alert("Esta es la venta número " + (++temp));
    let montoIngresado = prompt("Ingrese el monto a pagar")
    let iva = montoIngresado*0.215;
    let importeTotal = montoIngresado + iva;
    alert("Debe abonar $" + iva + " en concepto de IVA.");
    confirm("¿Quiere ver el resumen?");
        if(confirm) {
            alert("Importe sin IVA: $" + montoIngresado + "\nMonto IVA: $" + iva + "\nImporte TOTAL: $" + importeTotal);            
        }
    let salir = confirm("¿queres salir del programa?");
    if(salir)
        alert("Fin del programa.")
         break;
 }




/* function validarIngresoPorPantalla(mensaje) {

    let input;


    do {

        input = prompt(mensaje); // '1' 

    // true cuando NO es numero. - false cuando es numero.
    } while(isNaN(input))

    return input;

}
 */

//EJEMPLO DE WHILE
/* let condicion = false;
while(condicion) {
    condicion = confirm("¿querés seguir?");
    alert("alert del while");
} */


// EJERCICIO PARA PRACTICAR FOR:
/* let iteraciones = prompt("Ingrese cuantas veces quiere mostrar el alert")
for(let i = 0; i < iteraciones; i++) {
    let temp = i;
        if(i == 3 || i == 4) {
            continue
        }
    alert("Esta es la vez número " + (++temp) + " que se muestra");
    let salir = confirm("¿queres salir del bucle?");
    if(salir)
         break;
 }        */      

/* let montoTotal = prompt("Ingrese el monto TOTAL");
let iva = montoTotal*0.215;


let valorIva = montoTotal+iva;
 */