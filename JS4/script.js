

let name = "admin";
let password = "tajnasifra";
let userType = "moderator";

if (name == "admin" && password == "tajnasifra") {
    console.log("Vasi podaci su tacni");
}
else {
    console.log("Vasi podaci nisu tacni");
}

if(userType == "admin" || userType === "moderator"){
    console.log("Vi ste administrator");
}
else{
    console.log("Vi ste obican clan");
}

let allowedTypes = ["moderator", "admin"];
let typeCheck = allowedTypes.includes(userType);

if(typeCheck){
    console.log("Vi ste administrator");
}
else{
    console.log("Vi niste administrator");
}

// VEZBA

let dayOfTheWeek = "utorak";

if(dayOfTheWeek == "petak"){
    console.log("Weekend is coming");
}
else if(dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja"){
    console.log("Weekend");
}
else{
    console.log("Work work");
}










