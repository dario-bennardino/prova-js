
const etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);

const annoNascitaUtente = parseInt(prompt('In che anno sei nato?'));
console.log(annoNascitaUtente);

const annoAttuale = etaUtente + annoNascitaUtente;
console.log(annoAttuale);

const output = 'Siamo nel ' + annoAttuale

document.getElementById('messaggio').innerHTML = output ;