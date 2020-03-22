 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// utente1 inserisce la parola al prompt
var Userword1 = prompt("Ciao Frenzo, tenta la fortuna ed inserisci la parola fortunata")

// utente2 inserisce la parola al prompt
var Userword2 = prompt("Ciao Pasquale, tenta la fortuna ed inserisci la parola fortunata")


if (Userword1 < Userword2) {
  document.getElementById('LengthWordWin').innerHTML = "Ciao Frenzo hai vinto!!, hai inserito la parola:" + Userword1;

  document.getElementById('WordLose').innerHTML =  Userword2 ;
}

else if (Userword2 < Userword1) {
  document.getElementById('LengthWordWin').innerHTML = "Ciao PASQUALE hai vinto!!, hai inserito la parola:" + Userword2;

  document.getElementById('WordLose').innerHTML =  Userword1 ;
}

else {
document.getElementById('LengthWordWin').innerHTML = "Avete inserito parole della stessa lunghezza"
}
