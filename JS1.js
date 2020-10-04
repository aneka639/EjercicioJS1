let MontoTotal = prompt("Ingrese el monto Total");
let valorIVA = MontoTotal*0.215;
alert("El valor de IVA es: $" + valorIVA);
let SinIVA = MontoTotal-valorIVA;
let avanzar = confirm("¿Quieres ver el resumen de tu compra?");
if(true){
    alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + MontoTotal) } 