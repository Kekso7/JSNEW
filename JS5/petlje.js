

let cars = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Volvo",
    "Peugeot",
    "Renault",
    "Fiat",
    "Skoda",
    "Seat",
    "Opel",
    "Lexus",
    "Infiniti",
    "Acura",
    "Mitsubishi",
    "Suzuki",
    "Jeep",
    "Land Rover",
    "Jaguar",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Alfa Romeo",
    "Mini",
    "Chrysler",
    "Dodge",
    "Buick",
    "Cadillac",
    "GMC",
    "Lincoln",
    "Bentley",
    "Rolls-Royce",
    "Aston Martin",
    "Genesis",
    "Citroën",
    "Saab",
    "Tata",
    "Geely",
    "Daewoo",
    "Hummer"
];

for (let i = 0; i < cars.length; i++) {

    let firstLetter = cars[i][0].toLowerCase();

    if (firstLetter === "a") {
        continue;
}
    console.log(cars[i]);
}

// FOR OF
for (let car of cars) {
    let firstLetter = car[0].toLowerCase();

    if (firstLetter === "a")
        continue;

    console.log(car);
}