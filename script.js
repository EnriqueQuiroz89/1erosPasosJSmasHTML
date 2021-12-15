let start = Date.now();


let lista = document.createElement("ul");
let first = document.createElement("li");
let textnode = document.createTextNode("Water");
first.appendChild(textnode);
lista.appendChild(first);
document.getElementById("area_1").appendChild(lista);

function timeFuncion() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(Date.now());
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}

function dateFuncion() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(Date.now());
    node.appendChild(textnode);
    document.getElementById("listaOrdenada").appendChild(node);
}

function addParrafosFuncion() {
    let node = document.createElement("p");
    node.textContent = 'Paragraph -->' + Date.now();
    document.getElementById("area_3").appendChild(node);
}

function myFunction() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

function miFuncion() {
    let node = document.createElement("p");
    //  let textnode = document.createTextNode("Japon Campeon");
    node.textContent = 'Catalogoda pevia mente como tortura';
    ///    node.appendChild(textnode);
    document.body.appendChild(node);
}
