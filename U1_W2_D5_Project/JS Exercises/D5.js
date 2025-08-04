/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log('1. Dato il seguente array, scrivi del codice per stampare ogni elemento dell array in console.');

const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

console.log('-------------------------------------------------- ');

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('2. Scrivi del codice per ordinare alfabeticamente gli elementi dell array "pets".')

sortedPets= [...pets].sort();
console.log("Sorted pets: ", sortedPets);
console.log('Pets: ', pets);
console.log('-------------------------------------------------- ');


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.

*/

console.log('3. Scrivi del codice per stampare nuovamente in console gli elementi dell array "pets", questa volta in ordine invertito.');

invertedPets = structuredClone(pets).reverse(); //Usando funtione reverse() di array
console.log("Array invertito con reverse(): ", invertedPets);


// Creando una funzione che solo stampa l'array invertito
console.log("Stampa array invertito con funzione creata da me: ");
for (let i=pets.length-1; i>=0 ; i--){
	console.log(pets[i])
};

console.log("pets: ", pets);

console.log('-------------------------------------------------- ');

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log('4. Scrivi del codice per spostare il primo elemento dall array "pets" in ultima posizione.')

newPets = [...pets];
firstElement = newPets.shift();
newPets.push(firstElement);
console.log("Pets shifted: ", newPets);
console.log("Pets: ", pets);

console.log('-------------------------------------------------- ');

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log('5. Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.');

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i] = { ...cars[i], licensePlate: "ABC-" + Math.floor(Math.random() * 100) };
};
console.log("Auto  license plates: ", cars[0].licensePlate, cars[1].licensePlate, cars[2].licensePlate);

console.log('-------------------------------------------------- ');

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log('6. Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell array "cars", rispettando la struttura degli altri elementi. Successivamente, rimuovi l ultimo elemento della proprietà "trims" da ogni auto.');

cars.push({
  brand: 'Fiat',
  model: 'Panda',
  color: 'Green',
  trims: ['rock', 'easy', 'coupe'],
  licensePlate: "ABC00"
});

console.log("Auto dopo aver aggiunto Fiat Panda: ", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("Auto dopo aver rimosso l'ultimo elemento di trims: ", cars);

console.log('-------------------------------------------------- ');

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log('7. Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.');

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log("Just trims: ", justTrims);


console.log('-------------------------------------------------- ');

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('8. Cicla l array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".');

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

console.log('-------------------------------------------------- ');

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log('9. Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.');
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

console.log('-------------------------------------------------- ');

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      positionsArray.push(1);
      break;
    case 'b':
      positionsArray.push(2);
      break;
    case 'c':
      positionsArray.push(3);
      break;
    case 'd':
      positionsArray.push(4);
      break;
    case 'e':
      positionsArray.push(5);
      break;
    case 'f':
      positionsArray.push(6);
      break;
    case 'g':
      positionsArray.push(7);
      break;
    case 'h':
      positionsArray.push(8);
      break;
    case 'i':
      positionsArray.push(9);
      break;
    case 'l':
      positionsArray.push(10);
      break;
    case 'm':
      positionsArray.push(11);
      break;
    case 'n':
      positionsArray.push(12);
      break;
    case 'o':
      positionsArray.push(13);
      break;
    case 'p':
      positionsArray.push(14);
      break;
    case 'q':
      positionsArray.push(15);
      break;
    case 'r':
      positionsArray.push(16);
      break;
    case 's':
      positionsArray.push(17);
      break;
    case 't':
      positionsArray.push(18);
      break;
    case 'u':
      positionsArray.push(19);
      break;
    case 'v':
      positionsArray.push(20);
      break;
    case 'z':
      positionsArray.push(21);
      break;
    default:
      positionsArray.push(0);
  }
}

console.log("Posizioni delle lettere: ", positionsArray);