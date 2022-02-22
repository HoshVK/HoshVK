const displayValorAnterior = document.getElementById('historial');
const displayValorActual = document.getElementById('valores');
const numeros = document.querySelectorAll('.numero');
const operador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

numeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

operador.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});