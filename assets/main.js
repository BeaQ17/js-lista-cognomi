//chiedi cognome all'utente
var surname = prompt("Scrivi il tuo cognome:");

//inseriscilo in un array con altri cognomi
var others = ["Rossi", "Verdi", "Bianchi", "Neri"];
others.push(surname);

//stampa la lista in ordine alfabetico
others.sort();
console.log(others);