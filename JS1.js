let montoTotal = prompt("Ingrese el monto Total");
let valorIVA = montoTotal*0.215;
alert("El valor de IVA es: $" + valorIVA);
let sinIVA = montoTotal-valorIVA;
let verResumen = confirm("¿Quieres ver el resumen de tu compra?");
if(verResumen){
    alert(" Importe sin IVA: $" + sinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + montoTotal) }
 

    /*problema 1:
Teniendo en cuenta que el porcentaje de iva para una venta es de 21.5%
Hacer un programa donde el usuario ingrese el monto total de una venta 
y me informe por pantalla cuanto debe abonar en concepto de iva.
Luego de mostrar cuanto abona en concepto de iva,
preguntar si quiere ver un resumen de los montos de la venta. 
Si el usuario indica que si, realizar la operacion y mostrar el resultado final como
Importe sin iva: $xxx
Monto Iva: $xxx
TOTAL: $ xxxx
Ayuda: en un string el caracter \n indica un salto de linea. 
Ejemplo: 
alert("Hola este es un \n texto en un alert.") 
Va a mostrar lo siguiente:
 
 Hola este es un
 texto en un alert. */