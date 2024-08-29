// Snack 1

// Creo la lista degli invitati
const tableName = 'Tavolo vip'
const guessList = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 
    'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
]

guessList.forEach((guess, i) => {
    // Creo OGGETTI guest ed assegno le relative proprietà
        guess = {
        tableName : tableName,
        guessName : guess,
        place : i
    }
    console.table(guess)
});

