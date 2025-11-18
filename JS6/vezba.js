
alert("Dobrodosli na sajt");

let name = prompt("Upisite vase ime").toLowerCase();

let names = ["admin", "administrator", "marina"];

if(names.includes(name)){
    alert("Dobrodosao administratore");
}
else {
    alert("Nemate pristup sajtu");
}
