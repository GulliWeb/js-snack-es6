// Snack 1

// Creo la lista degli invitati
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

// Funzione per mostrare i res nel dom
const container = document.getElementById('console')

let h1 = document.createElement('h1')

function Dom(res, title, string) {
h1.innerHTML = title
container.parentNode.insertBefore(h1, container);

res.forEach(res => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerText = `Tavolo: ${res.tableName}, Nome: ${res.guestName}, Posto: ${res.place}`
    container.appendChild(card)
})
}
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
const title = 'SNACK'
Dom(guest, title)

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
const studentUpperCase = student.map(s => s.name.toUpperCase());
console.table(studentUpperCase)
console.log('NOMI STUDENTI IN MAIUSCOLO')

// Creo la lista dei soli studenti che hanno voti > 70
const student70 = student.filter(s => s.grades > 70)
console.table(student70)
console.log('NOMI STUDENTI CON VOTI > 70')

// Creo la lista dei soli studenti che hanno voti > 70 e ID > 120
const student120 = student70.filter(s => s.ID > 120)
console.table(student120)
console.log('NOMI STUDENTI CON VOTI > 70 E ID > 120')


// Snack 3 

// Creo array di oggetti ( biciclette )
const bikes = [
    { brandName: 'Cannondale V6', weight: 101 },
    { brandName: 'Giant', weight: 75 },
    { brandName: 'Cannondale Rotterdam', weight: 25 },
    { brandName: 'Giant', weight: 43 },
    { brandName: 'Btwin', weight: 25 },
    { brandName: 'Cannondale', weight: 121 },
    { brandName: 'Btwin', weight: 92 },
    { brandName: 'Montana', weight: 46 },
    { brandName: 'Specialized', weight: 44 },
    { brandName: 'Montana', weight: 168 },
] 
console.table(bikes)

// Stampo in console la bici con il peso minore utillizando template literals
let lighterBike = bikes[0]
bikes.forEach((bike, i) => {
    const { weight } = bike
    weight < lighterBike.weight ? lighterBike = bike : null
})
const { brandName, weight} = lighterBike
let mess = console.log(`La bici più leggera è la bici: '${brandName}' con peso: ${weight}`)
// Snack 4

// Funzione che genera numeri random
const rndGenerator = () => Math.floor(Math.random() * 99 ) + 1

// Creo array di oggetti ( squadre da calcio )
const footballTeams = [
        { name: 'Juventus', puntiFatti: 0, falliSubiti: 0 } ,
        { name: 'Inter', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Milan', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Roma', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Fiorentina', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Lazio', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Empoli', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Cagliari', puntiFatti: 0, falliSubiti: 0 },
        { name: 'Bra', puntiFatti: 0, falliSubiti: 0 }
]
console.table(footballTeams)

// Richiamo funzione che gernera numeri ramndom da mettere nella prprietà 
let string
footballTeams.forEach(team => {
    team.puntiFatti = rndGenerator(),
    team.falliSubiti = rndGenerator()

    string = document.createElement('div')
    string.classList.add('card')
    string.style.borderColor = ('blue')

    string.innerHTML = `Nome squadra: ${team.name}, Punti fatti: ${team.puntiFatti}, Falli subiti: ${team.falliSubiti}`
    container.appendChild(string)
});

console.table(footballTeams)


