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






/* function importeVenta {
    let montoIngresado = prompt("Ingrese el monto a pagar")
    let iva = montoIngresado*0.215;
    let importeTotal = montoIngresado + iva;
    alert("Debe abonar $" + iva + " en concepto de IVA.");
    confirm("¿Quiere ver el resumen?");
        if(confirm) {
            alert("Importe sin IVA: $" + montoIngresado + "\nMonto IVA: $" + iva + "\nImporte TOTAL: $" + importeTotal);            
        }
        else{
            alert("Cantidad inválida")
        }
} */



/*Teniendo el problema 1 de la clase pasada como base:

problema anterior:
Teniendo en cuenta que el porcentaje de iva para una venta es de 21.5%
Hacer un programa donde el usuario ingrese el monto total de una venta 
y me informe por pantalla cuanto debe abonar en concepto de iva.
Luego de mostrar cuanto abona en concepto de iva,
preguntar si quiere ver un resumen de los montos de la venta. 
Si el usuario indica que si, realizar la operacion y mostrar el resultado final como
Importe sin iva: $xxx
Monto Iva: $xxx
TOTAL: $ xxxx


Hacerle las modificaciones necesarias para que previo al popup donde se ingresa el monto total de la venta, se ingrese la cantidad de ventas que se van a cargar.
Por ejemplo, si el usuario ingresa un numero 3, nuestro programa debe ejecutarse 3 veces. 
Al finalizar la ejecucion, mostrar una alerta que indique el fin del programa. */