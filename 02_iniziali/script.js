/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const getInit= (ar) => {
    for (let i = 0; i < ar.length; i++) {
        ar[i] = ar[i][0];
    }
    return ar;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInit(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]