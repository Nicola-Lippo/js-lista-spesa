'use strict';
console.log('sono collegato');
//creo un array per contenere la mia lista spesa
const listaSpesa = ['pasta', 'pane', 'pizze', 'frutta', 'tonno', 'uova'];
console.log(listaSpesa);
//creo un ciclo while per leggere la lista automaticamente
const ul = document.getElementById('lista')
for (let i = 0; i <listaSpesa.length; i++) {
    const li = document.createElement('li');
    li.innerText = listaSpesa[i];
    li.classList.add('elemanto-lista');
    ul.append(li);
}

let numeratore = 0;
while (numeratore < listaSpesa.length) {
    console.log(listaSpesa[numeratore]);
    const li = document.createElement('li');
    li.append(listaSpesa[numeratore]);
    ul.append(li);
    numeratore++;
}
