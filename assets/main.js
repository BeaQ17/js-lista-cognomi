//chiedi cognome all'utente
var surname = prompt("Scrivi il tuo cognome:");

//inseriscilo in un array con altri cognomi
var others = ["Rossi", "Verdi", "Bianchi", "Neri", "Almi"];
surname = surname.charAt(0).toUpperCase() + surname.slice(1);
others.push(surname);


//stampa la lista in ordine alfabetico
others.sort();
console.log(others);

//scrivi la posizione in cui si trova il cognome dell'utente nella lista
//(partendo da 1)
var post = others.indexOf(surname) + 1;
document.getElementById("position").innerHTML = "La tua posizione in elenco è " + post;