/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un algoritmo per trovare il più grande tra due numeri interi");

let numero1 = 1;
console.log("Numero1: "+numero1);
let numero2 = 9;
console.log("Numero2: "+numero2);

if (numero1 > numero2) {
  console.log("Il numero1 è maggiore");
}else {
  console.log("Il numero2 è maggiore");
}

console.log("\n");
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un algoritmo che mostri \"not equal\" in console se un numero intero fornito è diverso da 5");

let numero = 45;
console.log("numero: " + numero);

if (numero!=5) {
  console.log("il numero != 5");
} else {
  console.log("il numero è 5");
}

console.log("\n");
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Scrivi un algoritmo che mostri \"divisible by 5\" in console se un numero fornito è perfettamente divisibile per 5");

let modulo = 100;
console.log("numero: " + modulo + " modulo " + 5);

if ((modulo % 5)===0) {
  console.log(modulo + " divisible by 5");
} else {
  console.log(modulo + " not divisible by 5");
}

console.log("\n");
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.");

let a = 0;
console.log("a == " + a);
let b = 8;
console.log("b == " + b);

if (a === 8) {
  console.log("hey, a == 8");
} else if (b === 8) {
  console.log("hey, b == 8");
}else {
  console.log("nessun numero è 8");
}

if (b + a === 8) {
  console.log("a + b == 8");
} else if (b - a === 8) {
  console.log("a - b == 8");
} else {
  console.log("a + b != 8 e a - b != 8");
}

console.log("\n");
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile \"totalShoppingCart\".");
console.log("C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).");
console.log("Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.");

let totalShoppingCart = 43;
console.log("Totale nel carrello: " + totalShoppingCart + "€");
let spedizione = 10;
let total = 0; 

if (totalShoppingCart >= 50) {
  total = totalShoppingCart
  console.log("Ottimo hai diritto alla spedizione gatuita!");
  console.log("il Totale ammonta a " + total + "€");
} else {
  total = totalShoppingCart + spedizione
  console.log("Purtroppo non hai diritto alla spedizione gatuita!");
  console.log("il Totale ammonta a " + total + "€");
}

console.log("\n");
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.");
console.log("Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.");

console.log("Heyy, oggi è il black-friday... hai diritto al 20% di sconto!");
let sconto = 0;
sconto.toFixed(2);
sconto = total * (20 / 100);
console.log("Lo sconto applicato è: " + parseInt(sconto));
total = total - sconto;
console.log("Il tuo nuovo totale è: " + total);

console.log("\n");
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea tre variabili, e assegna un valore numerico a ciascuna di esse.");
console.log("Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.");
console.log("Alla fine mostra il risultato in console.");

let c = 313;
console.log("Il primo numero è " + c);
let d = 535;
console.log("Il secondo numero è " + d);
let e = 234;
console.log("Il terzo numero è " + e);

if (c > d && d > e) {
  console.log("I numeri in ordine sono: " + c + " " + d + " " + e);
} else if (d > c && c > e) {
  console.log("I numeri in ordine sono: " + d + " " + c + " " + e);
} else if (e > c && c > d) {
  console.log("I numeri in ordine sono: " + e + " " + c + " " + d);
} else if (c > e && e > d) {
  console.log("I numeri in ordine sono: " + c + " " + e + " " + d);
} else if (d > e && e > c) {
  console.log("I numeri in ordine sono: " + d + " " + e + " " + c);
} else if (e > d && d > c) {
  console.log("I numeri in ordine sono: " + e + " " + d + " " + c);
} 

console.log("\n");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea un algoritmo per verificare che un numero fornito sia un intero oppure no");

let f = 298;
console.log("La prima variabile è " + f);
let g = "Pippo";
console.log("La seconda variabile è '" + g + "'");
console.log("\n");

if (typeof f === "number" && typeof g === "string") {
  console.log("La prima variabile è un numero");
  console.log("la seconda variabile è una stringa");
} else if (typeof g === "number" && typeof f === "string") {
  console.log("La seconda variabile è un numero");
  console.log("la prima variabile è una stringa");
} else {
  console.log("nessuna delle variabili è un numero o una stringa");
}

console.log("\n");
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea un algoritmo per controllare se un numero fornito sia pari o dispari");

let x = 12;
console.log("Il numero da considerare è: " + x);

if ((x % 2) != 0) {
  console.log("Il numero: " + x + " è dispari");
} else {
  console.log("Il numero: " + x + " è pari");
}

console.log("\n");
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.");

let val = 10
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

console.log("\n");
/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.")

let num = 21;
console.log("Il numero da considerare è: " + num);

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
}  else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
} else {
  console.log("Non è stato inserito alcun numero");
}

console.log("\n");
/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Usa un operatore ternaio per assegnare ad una variabile chiamata \"gender\" i valori \"male\" o \"female\".");
console.log("La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.");

let gender = "male";

let isMale = (gender==="male") ?"male":"female";
console.log("The gender is: " + isMale);

console.log("\n");
/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.");

let i = 0; 
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("\n");
/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.");

for (let z=10 ; z >= 0 ; z--) {
  console.log(z);
}

console.log("\n");
/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.");

for (let v=10 ; v >= 0 ; v--) {
  if ((v < 3 || v > 3) && (v < 8 || v > 8)) {
    console.log(v);
  }
}

console.log("\n");
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.");

for (let l=0 ; l<=15 ; l++) {
  if ((l % 2) == 0) {
    console.log("Il numero: " + l + " è pari");
  } else {
    console.log("Il numero: " + l + " è dispari");
  } 
}

console.log("\n");
/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola \"Fizz\" e se il numero è multiplo di 5, stampa \"Buzz\". Se le condizioni si verificano entrambe, stampa \"FizzBuzz\".");

for (let j=1 ; j<=100 ; j++) {
  if ((j % 3) == 0 && (j % 5) == 0){
    console.log("FizzBuzz");
  } else if ((j % 3) == 0) {
    console.log("Fizz");
  } else if ((j % 5) == 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }
}

console.log("\n");
/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile \"day\", che può avere un valore da 1 a 7.");
console.log("Ad esempio, se il valore di \"day\" è 1, stampa in console \"Lunedì\"; se il valore fosse 3, in console dovrebbe comparire \"Mercoledì\".");

let day = 5;

switch (day) {
  case 1 : 
    i = "Lunedì";
    console.log(i);
    break;
  case 2 :  
    i = "Martedì";
    console.log(i);
    break;
  case 3 : 
    i = "Mercoledì";
    console.log(i);
    break;
  case 4 : 
    i = "Giovedì";
    console.log(i);
    break;
  case 5 :
    i = "Venerdì";
    console.log(i);
    break;
  case 6 :
    i = "Sabato";
    console.log(i);
    break;
  case 7 :
    i = "Domenica";
    console.log(i);
    break;
}

console.log("\n");