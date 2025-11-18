// VEZBA

let name = "admin";
let samoglasnici =  ["a","e","i","o","u"];
name = name.toLowerCase();

if (name == "admin") {
    console.log("Pozdrav Admine!");
}
else{
    console.log("Vi niste administrator!");
}
if (name[0] == "a") {
    console.log("Vase ime pocinje samoglasnikom");
}
if (samoglasnici.includes(name[0])) {
    console.log("Vase ime pocinje nekim samoglasnikom");
}
else {
    console.log("Vase ime ne pocinje nekim samoglasnikom");
}

let number = "2";
if (number === 2) {
    console.log("Broj je 2");
}
else {
    console.log("Broj nije 2");
}
