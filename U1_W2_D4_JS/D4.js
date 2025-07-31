/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(5, 10))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return num1 + num2;
}

console.log(crazySum(5, 5)); 
console.log(crazySum(5, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    if (num > 19) {
        return Math.abs(num - 19) * 3;
    }
    return Math.abs(num - 19);
}

console.log(crazyDiff(10));
console.log(crazyDiff(25)); 

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
    if (!Number.isInteger(n)) {
        return "Serve un numero intero come parametro.";
    }
    if (n>= 20 && n <= 100) {
        return true;
    }
    if (n === 400) {
        return n;
    }
}
console.log(boundary(50));
console.log(boundary(400));
console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (typeof str !== "string") {
        return "Serve stringa come parametro.";
    }
    if (str.slice(0, 7) === "EPICODE") {
        return str;
    }
    return "EPICODE" + str; 
}

console.log(epify("EPICODE fa paura!")); 
console.log(epify(" fa paura!")); 

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
    if (num < 0 || typeof num !== "number") {
        return "Serve un numero positivo come parametro.";
    }
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    }
    return false;
}

console.log(check3and7(21));
console.log(check3and7(10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    if (typeof str !== "string") {
        return "Serve stringa come parametro.";
    }
    revStr= "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;  
}

console.log(reverseString("EPICODE"));
console.log(reverseString("JS & HTML & CSS"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
    if (typeof str !== "string") {
        return "Serve stringa come parametro.";
    }
    uppStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i=== 0) { 
            uppStr += str[i].toUpperCase();
            i++
        }
        if (str[i] === " ") {
            uppStr += " " 
            i++
            uppStr += str[i].toUpperCase();
        }
        else {
            uppStr += str[i];
        }
    }
    return uppStr;
}

console.log(upperFirst("epicode fa paura"));
console.log(upperFirst("guarda come mi diverto con le functions"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    if (typeof str !== "string") {
        return "Serve stringa come parametro.";
    }
    newStr = "";
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i];
    }
    return newStr;
}

console.log(cutString("EPICODE"));
console.log(cutString("JS & HTML & CSS"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    if (typeof n !== "number" || n <= 0) {
        return "Serve un numero intero positivo come parametro.";
    }
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}

console.log(giveMeRandom(5));
console.log(giveMeRandom(3));
