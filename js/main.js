'use strict';
console.log('sono collegato');
//creo un array per contenere la mia lista spesa
const listaSpesa = ['pasta', 'pane', 'pizze', 'frutta', 'tonno', 'uova'];
console.log(listaSpesa);
//creo un ciclo while per leggere la lista automaticamente
const ul = document.getElementById('lista')
let numeratore = 0;
while (numeratore < listaSpesa.length) {
    const li = document.createElement('li');
    li.innerText = listaSpesa;
}
