/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const arrLet= (ar, letter) => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i][0] !== letter) {
            ar.splice(i, 1);
            i--;
        }
    }
    return ar;
}

// Invoca la funzione qui e stampa il risultato in console

let lettera = prompt("Inserisci una lettera:").toUpperCase();
while (!isNaN(lettera) || lettera.length !== 1) {
    alert("Per favore, inserisci una singola LETTERA.");
    lettera = prompt("Inserisci una lettera:").toUpperCase();
}
console.log(arrLet(names, lettera));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]