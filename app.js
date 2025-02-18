//variables
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
//aqui se ejecuta la funcion para recopilar la informacion del box y guardarla en la variable listaAmigos
function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("No se ha ingresado información");
        return; // Detiene la ejecución si no hay input
    }

    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = ""; // Limpia el input después de agregar el amigo
}
// esta funcion se encarga del sorte del amigo secreto con la libreria de math floor y amth random
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;//esta es la salida en la pagina del amigo secreto
}
