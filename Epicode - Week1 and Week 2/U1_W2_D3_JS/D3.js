const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 320,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

let charactersNames = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  character = starWarsCharacters[i];
  charactersNames.push(character.name);
  console.log("Character name added:", character.name);
}
console.log("____________");

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

femaleCharacters = [];
for (i= 0; i< starWarsCharacters.length; i++) {
  character = starWarsCharacters[i];
  if (character.gender === 'female'){
    femaleCharacters.push(character);
    console.log("Female Character added:", character.name);
  }
}

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blueGray: [],
}

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

console.log("____________");


for (i=0; i< starWarsCharacters.length; i++) {
  character = starWarsCharacters[i];
  switch (character.eye_color) {
    case 'blue':
      eyeColor.blue.push(character);
      console.log("Character with blue eyes added:", character.name);
      break;
    case 'yellow':
      eyeColor.yellow.push(character);
      console.log("Character with yellow eyes added:", character.name);
      break;
    case 'brown':
      eyeColor.brown.push(character);
      console.log("Character with brown eyes added:", character.name);
      break;
    case 'red':
      eyeColor.red.push(character);
      console.log("Character with red eyes added:", character.name);
      break;
    case 'blue-gray':
      eyeColor.blueGray.push(character);
      console.log("Character with blue-gray eyes added:", character.name);
      break;
    default:
      console.log("Unknown eye color for character:", character.name);
  }
}


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

console.log("____________");

let crewMass = 0

for (i=0; i<starWarsCharacters.length; i++) {
		crewMass += starWarsCharacters[i].mass
};

console.log("Total crew mass:", crewMass);


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

Starship = {
  mass: crewMass,
};

if (Starship.mass < 500) {
  console.log("Ship is under loaded");
}
else if (Starship.mass >= 500 && Starship.mass < 700) {
  console.log("Ship is half loaded");
}
else if (Starship.mass >= 700 && Starship.mass < 900) {
  console.log("Warning: Load is over 700");
}
else if (Starship.mass >= 900 && Starship.mass < 1000) {
  console.log("Critical Load: Over 900");
}
else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for (i = 0; i< starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'n/a') {
    starWarsCharacters[i].gender = 'robot';
    console.log("Character gender changed to robot:", starWarsCharacters[i].name);
    console.log(starWarsCharacters[i]);
  }
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

femaleNames = []

for (i=0; i< femaleCharacters.length; i++) {
  femaleNames.push(femaleCharacters[i].name);
}
i=0;
while (femaleNames.length>0){
  for (i=0; i<charactersNames.length; i++){
    if (charactersNames[i] === femaleNames[0]) {
      console.log("Removed", charactersNames[i], "from charactersNames");
      charactersNames.splice(i, 1);
      femaleNames.splice(0, 1);
    }
  }
}


/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

j = Math.floor(Math.random() * starWarsCharacters.length);
console.log(`Il personaggio selezionato casualmente è ${starWarsCharacters[j].name}. È alto ${starWarsCharacters[j].height} cm e pesa ${starWarsCharacters[j].mass} kg. Ha i capelli di colore ${starWarsCharacters[j].hair_color}, la pelle di colore ${starWarsCharacters[j].skin_color} e gli occhi di colore ${starWarsCharacters[j].eye_color}. È nato nell'anno ${starWarsCharacters[j].birth_year} e il suo genere è ${starWarsCharacters[j].gender}.`);

