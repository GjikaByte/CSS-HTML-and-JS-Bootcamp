// Oggetti in JS

// Struttura delimitata da Graffe con all'interno coppie Chiave_Valore separate da virgole

/*

const nomeVar = {
    nomeProprieta' : valore,
    altraProprieta' : valore
}

*/

const professor = {
    name: "Andi",
    surname: "Gjika",
    age: 30,
    toBeDeleted: "Cancellami",
    subjects: {sb1: "math", sb2: "phisics"}
};

// Come accedere a questi valori?
// dot notation o square bracket

console.log(professor)

// Crea nuovo oggetto con la stessa struttura
const professor3a = Object.assign({}, professor); // clona shallow
const professor3b = { ...professor }; // clona shallow
const professor3c = { ...professor, subjects: { ...professor.subjects } }; // clona profondo dei subjects

const professor4 = structuredClone(professor) // Deep copy
professor4.age= 37


//Array
//Gli array sono liste di elementi possibilmente omogenei

const students = [ "R", "A", "M"]
console.log("Primo studente", students[0])
console.log("Quanti studenti?", students.length)
console.log("Ultimo studente", students[students.length-1])

const movies = [
    {title:"Superman", year:2010},
    {title: "Batman", year: 2008}
]

const matrice = [
    [1, 2, 4],
    [3, 4, 5]
]

secondMovie= movies[1]
console.log("Anno del secondo film? ",secondMovie.year);
console.log("Array position 2,3 " , matrice[1][2]);

// Manipolare array

//Push() - Aggiungere element alla fine dell'array
students.push("E");
console.log("students", students)

// .unshift - Aggiunge un elemento all'inizio dell'array
// .pop() - Rimuove l'ultimo elemto della lista
// .shift() - Rimuove il primo elemento della lista
// .slice() - Crea un Nuovo Array a partire da una posizione di inizio e fine sull'originale
const selectedStudents = students.slice(1, 2);
console.log(selectedStudents)
const lastTwo = students.slice(-2);
console.log(lastTwo)
// creazione di una copia (shallow) di un array
const studentClone = students.slice(); // prende tutte le posizioni da 0 a fine
console.log("studentClone", studentClone);
// .splice() - serve a modificare l'array sul quale lo si utilizza. Sia per rimuovere posizioni interne, o per aggiungere elementi in posizioni interne
studentClone.splice(1,1) //elimina a partire da indice 1
console.log("studentClone", studentClone);
studentClone.splice(2,0, "DM") // aggiunge DM in terza position, usato terzo argomento
console.log("studentClone", studentClone);

//Conditional

/*
    if(condition da valutare) {
        Questo blocco si verifica solo se la condition si verifica
    }
*/

const ppl = {
    name: "M",
    age: 19,
    eyeColor:"g"
}

if(ppl.age>=18) {
    if(ppl.eyeColor === "b" || ppl.eyeColor==="g")
        console.log("Ok")
    else {
        console.log("blue g")
    }
}
else {
    console.log("not 18");
}

