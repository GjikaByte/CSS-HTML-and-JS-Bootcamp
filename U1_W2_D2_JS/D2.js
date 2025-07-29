/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(num1); // Stampa il numero più grande
} else {
  console.log(num2); // Stampa il numero più grande
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number = 7;
if (number !== 5) {
  console.log("non uguale");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let num = 15;
if (num % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 8;
let b = 16;
if (a === 8 || b === 8 || a + b === 8 || (a - b) === 8 || (b - a) === 8) {
  console.log("Uno dei valori è 8 o la loro somma/sottrazione è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let shoppingCart = [15, 25, 20];
let totalShoppingCart = 0;
for (let i = shoppingCart.length - 1; i >= 0; i--) {
  totalShoppingCart += shoppingCart[i];
}
let totalAmount = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
console.log(totalAmount); // Stampa l'importo totale considerando la spedizione gratuita o il costo di spedizione

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart = totalShoppingCart * 0.8; // Applica lo sconto del 20%
totalAmount = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10; // Calcola il totale considerando la spedizione
console.log(totalAmount); // Stampa l'importo totale con lo sconto e la spedizione

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numbers = [15, 10, 20];
let sortedNumbers = [];

while (numbers.length > 0) {
  let smallest = Math.min(...numbers);
  sortedNumbers.push(smallest);
  numbers.splice(numbers.indexOf(smallest), 1);
}

console.log(sortedNumbers.reverse());

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let value = "hello";
if (typeof value === typeof 1) {
  console.log("It is a number");
} else {
  console.log("It is not a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let checkNumber = 4;
if (checkNumber % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numberArray = [];
for (let i = 1; i <= 10; i++) {
  numberArray.push(i);
}
console.log(numberArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numberArray[numberArray.length - 1] = 100;
console.log(numberArray);