// // Snack 1

// // Creo la lista degli invitati
// const tableName = 'Tavolo vip'
// const guessList = [
//     'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 
//     'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
// ]

// guessList.forEach((guess, i ) => {
//     // Creo OGGETTI guest ed assegno le relative proprietà
//         guess = {
//         tableName : tableName,
//         guessName : guess,
//         place : i
//     }
//     console.table(guess)
// });

// Snack 1 con metotdo.map()
// Creo la lista degli invitati
let consol = document.getElementById('console')
const tableName = 'Tavolo vip'
const guessList = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 
    'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
]

const guest = guessList.map((guestName, index) => ({
        tableName,
        guestName,
        place : index
    }
));
console.table(guest)


// Snack 2 

// Preparo l'elenco degli studenti
const student = [
    { ID: 213, name: 'Marco della Rovere', grades: 78 },
    { ID: 110, name: 'Paola Cortellessa', grades: 96 },
    { ID: 250, name: 'Andrea Mantegna', grades: 48 },
    { ID: 145, name: 'Gaia Borromini', grades: 74 },
    { ID: 196, name: 'Luigi Grimaldello', grades: 68 },
    { ID: 102, name: 'Piero della Francesca', grades: 50 },
    { ID: 120, name: 'Francesca da Polenta', grades: 84 }
];

// Trasformo i nomi in MAIUSCOLO
const studentUpperCase = student.map(student => student.name.toUpperCase());
console.table(studentUpperCase)

// Creo la lista dei soli studenti che hanno voti > 70
const student70 = student.filter(student => student.grades > 70)
console.table(student70)

// Creo la lista dei soli studenti che hanno voti > 70 e ID > 120
const student120 = student.filter(student => student.grades > 70 && student.ID > 120)
console.table(student120)

