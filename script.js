let numAzar = Math.floor(Math.random() * 100) + 1;

let numEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


function chequearResultado() {

    intentos++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 a 100'
        mensaje.style.color = 'black'
        return
    }

    if (numeroIngresado === numAzar) {
        mensaje.textContent = 'Felicitaciones adivinaste el Numero';
        mensaje.style.color = 'green';
        numEntrada.disabled = true;
    } else if (numeroIngresado < numAzar) {
        mensaje.textContent = '!Más alto¡ El numero que elegiste esta por debajo de la meta.';
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = 'Mas abajo! El numero que elegiste esta por encima de la meta';
        mensaje.style.color = 'red'
    }
}