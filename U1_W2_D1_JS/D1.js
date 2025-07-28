/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
/* SCRIVI QUI LA TUA RISPOSTA */
/* 
  Tipi Primitivi (semplici):
*/

// String → una parola o una frase
let nome = "Giulia"; // esempio di stringa

// Number → un numero (intero o decimale)
let eta = 9;         // numero intero
let altezza = 1.35;  // numero con la virgola

// Boolean → vero o falso, come un interruttore acceso o spento
let haFame = true;   // oppure false

// Undefined → la variabile esiste ma non ha ancora un valore
let zaino; // scatola esiste ma è vuota

// Null → indica che non c'è nulla, volontariamente
let merenda = null; // qui abbiamo messo "nulla" di proposito

/* 
  Tipi Strutturati (più complessi):
*/

// Array → una lista di elementi
let frutti = ["mela", "banana", "arancia"]; // lista di frutti

// Object → una scatola con tante informazioni
let persona = {
  nome: "Andi",
  eta: 10,
  haCane: true
};



// Function → una ricetta che dice al computer cosa fare
function saluta() {
  console.log("Ciao!");
}


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Andi";



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20;
console.log(sum); // Output: 32



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Gjika";



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());