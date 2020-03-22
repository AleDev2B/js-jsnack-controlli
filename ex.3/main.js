// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// il sistema ti chiede di inserire un numero

var Num1 = parseInt(prompt ("Caro Frenzo inserisci per 5 volte un numero a tua scelta"))

var Num2 = parseInt(prompt ("Adesso inserisci il secondo"))

var Num3 = parseInt(prompt ("Adesso inserisci il terzo"))

var Num4 = parseInt(prompt ("Adesso inserisci il quarto"))

var Num5 = parseInt(prompt ("Adesso inserisci il quinto"))

// il sistema somma tutti i numeri inseriti
var TotalNumCount = Num1 + Num2 + Num3 + Num4 + Num5;

// il sistema stampa il risultato
document.getElementById('insertNum').innerHTML = TotalNumCount;
