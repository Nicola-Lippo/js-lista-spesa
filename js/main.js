'use strict';
console.log('sono collegato');
//creo un array per contenere la mia lista spesa
const listaSpesa = ['pasta', 'pane', 'pizze', 'frutta', 'tonno', 'uova'];


console.log(listaSpesa);

// Numero stabilito di volte
//creo un ciclo for per leggere la lista automaticamente
const ul = document.getElementById('lista')
console.log(ul);
for (let i = 0; i <listaSpesa.length; i++) {
    const li = document.createElement('li'); // <li></li> (nodo HTML - object )
    li.innerText = listaSpesa[i];
    li.classList.add('elemento-lista'); // <li class="elemento-lista">pasta</li>
    ul.append(li);
}

// Da 0 a # volte
//creo un while for per leggere la lista automaticamente
let numeratore = 0;
while (numeratore < listaSpesa.length) {
    console.log(listaSpesa[numeratore]);
    const li = document.createElement('li');
    li.classList.add('elemento-lista'); 
    li.append(listaSpesa[numeratore]);
    ul.append(li);
    numeratore++;
}
