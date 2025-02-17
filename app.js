let etiquetaH1 = document.querySelector('h1');
etiquetaH1.innerHTML = "Hora del desafío";

function mostrarMensaje () {
    console.log("El botón fue clicado");
}

function mostrarCiudad() {
    ciudad = prompt("Ingresa el nombre de una ciudad de brasil: ")
    alert(`Estuve en ${ciudad} y me acordé de ti.`)
}

function mensaje (){
    alert("Yo amo JS");
}

function suma(){
    num1 = parseInt(prompt("Ingresa el primer número a sumar: "));
    num2 = parseInt(prompt("Ingresa el segundo número: "));
    num = num1+ num2;
    alert(`La suma de ${num1} y ${num2} es ${num}`)
}