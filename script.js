// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1- Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
        "nome" : "Roberto",
        "cognome" : "Galli",
        "eta" : "32"
    };

// 2- Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// for ( i = 0; i < studente.length; i++) {
//     console.log(studente[i]);
// }
for ( var key in studente) {
    console.log(studente[key]);
}











    // {
    //     "nome" : "Sara",
    //     "cognome" : "Belloni",
    //     "eta" : "23"
    // }
    // {
    //     "nome" : "Carlo",
    //     "cognome" : "Cigli",
    //     "eta" : "28"
    // }