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
    if(salir){
        alert("Fin del programa.");
         break;
    }
 }

/*Agregarle las siguientes mejoras al punto 1.
- Validar que el monto de venta ingresado sea valido (numerico), si no lo es, pasar a la siguiente iteracion.
- En cada iteracion ir mostrando en que iteracion estoy. Esto puede hacerse al momento de solicitar el monto de la venta, por ejemplo mostrando
	algo como "Ingrese el monto para la venta 1:", "Ingrese el monto para la venta 2", etc.
- Agregar el codigo necesario para que al momento de ingresar el monto de venta, si el usuario ingresa -1 el programa finalice.
- Al finalizar el programa mostrar un resumen con lo siguiente:
Tentas cargadas: xxx
Total de ventas: $xxx


ayuda: 
- recordar que para validar si un string es numerico se puede usar la funcion isNaN().
- para controlar las iteraciones dentro de una estructura de iteracion tenemos break y continue.*/