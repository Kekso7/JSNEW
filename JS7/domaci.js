
let cars = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://cdn.pixabay.com/photo/2019/07/12/12/37/skoda-4332791_1280.jpg",
    },
    {
        title: "Audi A4",
        price: 9000,
        image: "https://cdn.pixabay.com/photo/2021/01/12/14/58/audi-5911690_1280.jpg",
    }
];

let carsElements = document.getElementById("products");

for (let car of cars) {
    carsElements.innerHTML += car.title + " " + car.price + " " +"<br/>"+ car.image + "<br/>";
}

