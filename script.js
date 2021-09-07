// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1- Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
        nome : "Carlo",
        cognome : "Lambretti",
        eta : "22"
    };


// 2- Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente) {
    console.log(studente);
}


// 3- Creare un array di oggetti di studenti.
var listaStudenti = [
    {
        nome : "Roberto",
        cognome : "Galli",
        eta : 32
    },

    {
        nome : "Sara",
        cognome : "Magulli",
        eta : 28
    },

    {
        nome : "Gianni",
        cognome : "Rosetti",
        eta: 29
    }
];


// 4- Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( i = 0; i < listaStudenti.length; i++) {
    console.log(listaStudenti[i]["nome"]+ " " + listaStudenti[i]["cognome"]) ;
}

// 5- Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studenteNuovo = {};
studenteNuovo.nome = prompt("Inserisci il nome");
studenteNuovo.cognome = prompt("Inserisci il cognome");
studenteNuovo.età = parseInt(prompt("Inserisci l'età"));

listaStudenti.push(studenteNuovo);

// mostro la lista "studenti" aggiornata
console.log(listaStudenti);





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