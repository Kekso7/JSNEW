

let products = ["hleb", "mleko","jogurt"];

for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}
// FOR IN
for(let product in products){ // ispisuje 0,1,2
    console.log(product);
}
for(let i in products){ // ispisuje hleb, mleko, jogurt
    console.log(products[i]);
}

/**
 * Kako da ispisem koliko kosta prvi proizbod (hleb?
 * Gde su podaci? korpa
 * Kako da izvucem prvi zadatak iz niza? korpa[0]
 * Sta sam dobila iz korpa[0]?
 * Sta sadrzi objekat?  {name: "Hleb", price: 90, amount: 1}
 * Sta mi treba? - price
 */

let korpa = [
    {
        name: "Hleb",
        price: 90,
        amount: 1
    },
    {
        name: "Luk",
        price: 150,
        amount: 3
    },
    {
        name: "Mleko",
        price: 250,
        amount: 1
    }

];

console.log(korpa[0]["price"]);

// ispisati sve cene iz korpe



for(let proizvod in korpa){

    let productPrice = korpa[proizvod]["price"];

    if(productPrice > 200) {
        break;
    }
    console.log(productPrice);
};














