// definition
let name = 'noname';
let surname= 'nosurname';
let color= 'nocolor';

//input
name = prompt("Inserisci il tuo nome: ");
surname= prompt("Inserisci il tuo cognome: ");
color= prompt("Inserisci il tuo colore preferito: ");

// output
document.getElementById('my_id').innerHTML= name + surname + color + "23";

