
let paragraphElements = document.getElementById("name");

let name = prompt("Unesite svoje ime");
let backgroundColor = prompt("Koju boju pozadine zelile");
let textColor = prompt("Koju boju texta zelile");

paragraphElements.style.color = textColor;
paragraphElements.style.backgroundColor = backgroundColor;
paragraphElements.innerText = name;

