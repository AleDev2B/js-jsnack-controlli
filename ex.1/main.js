
// appare un prompt all'utente 1, dove si chiede di inserire un numero
var UserNum1 = parseInt(prompt("Ciao Frenzo, tenta la fortuna ed inserisci il numero vincente"))

// appare un prompt all'utente 2, dove si chiede di inserire un numero
var UserNum2 = parseInt(prompt("Ciao Pasquale, fai come il tuo avversario, tenta la fortuna ed inserisci il numero vincente"))

// il sistema decide quale dei due è piu grande ed appare un messaggio di vittoria all'utente che ha inserito il numero più alto
if (UserNum1 > UserNum2) {
  document.getElementById('BigNumWin').innerHTML = "Complimenti Frenzo hai vinto un par de ......i"
}
 else if (UserNum1 < UserNum2) {
   document.getElementById('BigNumWin').innerHTML = "Complimenti Pasquale hai vinto un par de ......i"
 }

else {
  document.getElementById('BigNumWin').innerHTML = "Per quanto sia altamente improbabile, sappiate che avete scelto lo stesso numero, quindi ....ritenta;-)"
}
