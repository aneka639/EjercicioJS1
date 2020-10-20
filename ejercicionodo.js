/* function funcionJavascript() {
    prompt("ingrese su DNI")
} */

// con el boton se repetira el programa
function funcionJavascript() {
    //crea un nodo HTML
    let variableH1 = document.createElement("h1");    
    variableH1.innerHTML = "<span>hola dentro del span</span>";

    let variableImg = document.createElement("img");
    variableImg.src = "elfo.jpg";
    variableImg.alt = "imagen elfo mujer";

       // crea un nodo html
       let div2 = document.getElementById("idDiv2");
       div2.appendChild(variableH1); //con esto le agrega el hijo h1
       div2.appendChild(variableImg);



}


function imgJavascript() {
    let div = document.createElement("div"); // <div></div>
    div.className = "divInterno" // <div class="divInterno">

    let img = document.createElement("img");
    img.src ="elfo.jpg";


    div.appendChild(img);

    let div2 = document.getElementById("idDiv2");
    div2.appendChild(div);
}

