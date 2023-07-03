/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// I principali datatype in JavaScript sono 5: null, undefined, number, string e booleani.
// Null: rappresenta l'assenza di un valore, questo valore è volontariamente non inserito da parte del programmatore.
// Undefined: rappresenta l'assenza di un valore quando questo non viene inserito involontariamente.
//Number: tutti i numeri (compresi i decimali) possono essere inseriti in JavaScript.
// String: parti di testo inseriti tra gli apici, possono comprendere anche i numeri.
// Booleani: i dati booleani possono avere solo due valori: vero o falso.
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Flavio"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 12
let secNumber = 20
let thirdNumber = firstNumber + secNumber
console.log(thirdNumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = "Neri"
// Una volta avviato il programma, spunta il messaggio "Uncaught TypeError: Assignment to constant variable."

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newNumber = x - 4
console.log(newNumber)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log("NAME", name1 === name2)

// EXTRA
console.log(name2.toLocaleLowerCase())
console.log("Lowercase", name2.toLocaleLowerCase() === name1)    
