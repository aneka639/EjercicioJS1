/* function funcionJavascript() {
    prompt("ingrese su DNI")
} */


function funcionJavascript() {
    let variableH1 = document.createElement("h1");
    
    variableH1.innerHTML = "<span>hola dentro del span</span>";


    let div2 = document.getElementById("idDiv2");

    div2.appendChild(variableH1); //con esto le agrega el hijo h1

}

