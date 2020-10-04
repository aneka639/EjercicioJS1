
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
        let cantidadCuotas = prompt("Seleccione la cantidad de cuotas");
        if (cantidadCuotas >0 && cantidadCuotas <13){    
            let valorCuota = montoTotal/cantidadCuotas;     
            alert(" Importe sin IVA: $" + SinIVA + "\n Monto IVA: $" + valorIVA + "\n TOTAL: $" + montoTotal + "\n Cantidad de cuotas: " + cantidadCuotas + "\n Importe por cuota: $" + valorCuota);
        }
        else {
            alert("cantidad inválida")
        }
}




/*
Problema 2: 
Teniendo en cuenta que el porcentaje de iva para una venta es de 21.5%.
Hacer un programa donde el usuario ingrese el monto total de una venta, 
y seguido de eso, pueda especificar una forma de pago
1 - Efectivo
2 - Debito
3 - Tarjeta Credito
Si el usuario selecciona Efectivo. Mostrar un resumen donde se detalle lo siguiente
Importe sin iva: $xxx
Monto Iva: $xxx
TOTAL: $ xxxx
Si el usuario selecciona Debito Agregar un recargo del 5% sobre la venta mas el iva. y mostrar lo siguiente:
Importe sin iva: $xxx
Monto Iva: $xxx
Recargo (mostrar aca el % de recargo)%: $xxx
TOTAL: $ xxxx
Si el usuario selecciona Tarjeta Credito. La aplicacion debe preguntar en cuantas cuotas (de 1 a 12). 
Si ingresa un numero fuera de este rango mostrar una alerta que diga "Las cuotas seleccionadas son invalidas", fin del programa.
Si ingresa una cuota valida, hacer la division del total y mostrar el siguiente resumen.
Importe sin iva: $xxx
Monto Iva: $xxx
TOTAL: $ xxxx
Cuotas: x
Valor cada cuota: $x
Ayuda: 
- De momento no validamos lo que se ingresa en el prompt. Suponemos que siempre va a ingresar numeros.
- Recuerden que asi como el prompt devuelve un valor ingresado, el confirm muestra una pregunta y retorna true o false en funcion de la respuesta
del usuario.
- El if que evalua una condicion puede evaluar mas de una condicion a la vez. por ejemplo para validar que un numero sea mayor
Y menor a algo, usamos el operador and (interseccion de algebra de bool) se representa con &&
if(x > 5 && x < 10) // se lee como x mayor a 5 y menor a 10.
en este caso el if se ejecutaria por verdadero solo cuando x vale 6, 7, 8 ,9
Supongamos que la condicion fuese x igual a 2 o x igual a 3.
Usamos el operador or (conjuncion de algebra de bool) se representa con ||
if(x == 2 || x == 3) // se lee como x es igual a 2 o x es igual a 3
En este caso el if se ejecutaria por verdadero si x contiene el valor 2 o el valor 3. para el resto de los casos seria falso. */