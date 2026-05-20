/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.

const contaVocali= (parola) => {
    let total=0;
    for (let i= 0; i<parola.length; i+=1){
        if (vocali.includes(parola[i])){
            total+=1
        }
    }
    return total;
}

// Invoca la funzione qui e stampa il risultato in console


console.log(contaVocali(word)); 
//Risultato atteso se si passa 'javascript': 3 (a, a, i)