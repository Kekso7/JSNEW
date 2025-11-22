const cars = [
    {
        name: "Toyota Corolla",
        price: 27500,
        year: 2025,
        image: "https://cdn.pixabay.com/photo/2023/12/13/07/58/car-8446529_1280.jpg"
    },
    {
        name: "Honda Civic",
        price: 18900,
        year: 2019,
        image: "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg"
    },
    {
        name: "Ford Focus",
        price: 15500,
        year: 2018,
        image: "https://cdn.pixabay.com/photo/2021/08/22/04/01/car-6564067_1280.jpg"
    },
    {
        name: "BMW 3 Series",
        price: 34900,
        year: 2022,
        image: "https://cdn.pixabay.com/photo/2016/10/04/05/17/stance-1713598_1280.jpg"
    },
    {
        name: "Audi A4",
        price: 36500,
        year: 2021,
        image: "https://cdn.pixabay.com/photo/2017/05/07/01/58/audi-2291508_1280.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 49900,
        year: 2025,
        image: "https://cdn.pixabay.com/photo/2017/03/27/14/02/auto-2178926_1280.jpg"
    },
    {
        name: "Volkswagen Golf 7",
        price: 19900,
        year: 2017,
        image: "https://cdn.pixabay.com/photo/2017/07/04/21/16/golf-2472672_1280.jpg"
    },
    {
        name: "Škoda Octavia",
        price: 15500,
        year: 2018,
        image: "https://cdn.pixabay.com/photo/2019/07/12/12/37/skoda-4332791_1280.jpg"
    },
    {
        name: "Peugeot 308",
        price: 14200,
        year: 2019,
        image: "https://cdn.pixabay.com/photo/2022/01/29/17/34/peugeot-308-6978160_1280.jpg"
    },
    {
        name: "Mazda 3",
        price: 18900,
        year: 2020,
        image: "https://cdn.pixabay.com/photo/2022/10/04/11/48/mazda-7498005_1280.jpg"
    },
    {
        name: "Kia Ceed",
        price: 17500,
        year: 2021,
        image: "https://cdn.pixabay.com/photo/2018/04/09/22/07/car-3305699_1280.jpg"
    }
    ,
    {
        name: "Mercedes GT 63",
        price: 117500,
        year: 2025,
        image: "https://cdn.pixabay.com/photo/2019/08/20/08/58/mercedes-amg-gt-63s-4418195_1280.jpg"
    }
    ,
    {
        name: "Audi A5",
        price: 21000,
        year: 2020,
        image: "https://cdn.pixabay.com/photo/2019/02/09/17/34/audi-3985578_1280.jpg"
    }
    ,
    {
        name: "Mercedes G",
        price: 107500,
        year: 2023,
        image: "https://cdn.pixabay.com/photo/2020/06/06/01/47/mercedes-benz-5264948_1280.jpg"
    }
    ,
    {
        name: "Tesla",
        price: 57500,
        year: 2025,
        image: "https://cdn.pixabay.com/photo/2019/07/02/09/32/tesla-4311968_1280.jpg"
    }
];


const container = document.querySelector("#carDiv");

for (const car of cars) {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car-card");

    const carImg = document.createElement("img");
    carImg.src = car.image;
    carImg.alt = car.name;

    const carName = document.createElement("p");
    carName.textContent = car.name;

    const spanPrice = document.createElement("span");
    spanPrice.className = "price";
    spanPrice.textContent = `${car.price.toLocaleString()} €`;

    const year = document.createElement("span");
    year.className = "year";
    year.textContent = `${car.year}. god.`;

    carDiv.appendChild(carImg);
    carDiv.appendChild(carName);
    carDiv.appendChild(year);
    carDiv.appendChild(spanPrice);

    if (car.year >= 2025) {
        const productionYearSpan = document.createElement("span");
        productionYearSpan.textContent = "NOVO";
        productionYearSpan.className = "productionYear";
        carDiv.appendChild(productionYearSpan);
    }

    container.appendChild(carDiv);
}
