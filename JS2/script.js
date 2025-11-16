

//               0          1        2
let products = ["Bread", "Milk", "Yogurt"];
console.log(products, products[3]); // products 3 undefined zato sto smo ga dodali posle

//                  3
products.push("Newspaper");

products.splice(0, 1); // obrisati hleb
console.log(products);

let cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);

cars[0] = "Zastava";
cars.sort();
console.log(cars);

let personalID = {
    name: "Marina",
    lastName: "Krajcik",
    dateOfBirth: "11.01.1992",
    hobbies: ["Snowboarding", "Gym", "Runing"],
};

console.log(personalID.name,personalID.dateOfBirth);

personalID.height = 175;
console.log(personalID);

console.log(personalID.hobbies[0]);

// Sentence - Name has gone (Hobby)

let sentence = personalID.name +" has gone "+ personalID.hobbies[2];
console.log(sentence);

let name = "Marina";
console.log(name);

name = "Marko";
console.log(name);

/**
 * shop:
 * name, products, openingHours, closingHours
 */

let shop = {
    name: "Makik Shoes",
    products: ["Nike","Adidas","Puma","New Balance"],
    openingHours: "08:00",
    closingHours: "20:00",
};

console.log(shop);
















