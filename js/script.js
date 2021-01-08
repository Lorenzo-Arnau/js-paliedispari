//----------------------------------1
// Chiedere all’utente di inserire una parola
var parolaUtente = prompt('inserisci una parola per vedere se è palindroma');
//creo ciclo per la lunghezza della parola che la divide in caratteri
for (var i = 0; i < parolaUtente.length; i++) {
  listaLettere.push(parolaUtente[i]);
}
console.log(listaLettere);
//Creare una funzione per capire se la parola inserita è palindroma
function isPalindroma(parola) {
  var listaLettere=[];
  var reverse = listaLettere.reverse();
  console.log(reverse);
  var sommaLettere="";
  for (var i = 0; i < reverse.length; i++) {
    sommaLettere += reverse[i]
  }
  console.log(sommaLettere);
  if (sommaLettere === parola) {
    alert('è palindroma!')
  }else{
    alert('non è palindroma')
  }
}
// //eseguo la funzione
isPalindroma(parolaUtente);

//------------2
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
function pari(num){
  if (num % 2 === 0) {
    return true;
  }else{
    return false;
  }
}

var scelta = prompt('scegli,pari o dipari?');
var numeroUtente = parseInt(prompt('ora sceli un numero da 1 a 5'));
var sceltaComputer = randomNumber(1,5);
var vincita;
var somma = numeroUtente + sceltaComputer;
console.log(numeroUtente);
console.log(sceltaComputer);
console.log(somma);
if (pari(somma)=== true) {
  vincita = 'pari';
  alert('è pari')
}else {
  vincita = 'dispari';
  alert('è dispari')
}

if (vincita === scelta) {
  alert('hai vinto')
}else{
  alert('hai perso')
}
