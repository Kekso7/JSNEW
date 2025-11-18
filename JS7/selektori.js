/**
 * getElementById - prosledi ID, dobijam element
 * getElementByClassName - Prosledi klasu i dobijam array sa elementima
 */

let elements = document.getElementsByClassName("description");
elements[0].style.color = "red";
elements[1].style.color = "blue";

for(let element in elements){
    elements[element].innerText = element;
}

let hTitle = document.getElementsByClassName("title");
hTitle[0].style.color = "green";

// koliko elemenata imamo sa klasom "description"
console.log(elements.length);


/**
 * querySelector -"#name", ".name" - vraca 1 element
 * querySelectorAll - "#name", ".name" - vraca array sa elementima
 */








