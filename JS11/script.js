const cities = [
    "Svi",
    "Beograd",
    "Novi Sad",
    "Podgorica",
    "Sarajevo",
    "Zagreb",
    "Subotica",
    "Osijek",
    "Niš",
    "Kragujevac",
    "Banja Luka",
    "Mostar",
    "Tuzla",
    "Zenica",
    "Split",
    "Rijeka",
    "Zadar",
    "Dubrovnik",
    "Šibenik",
    "Kotor",
    "Herceg Novi",
    "Bar",
    "Tivat",
    "Skoplje",
    "Bitola",
    "Ohrid",
    "Ljubljana",
    "Maribor",
    "Tirana"
];
const types =  [
    "Stanovi",
    "Kuce",
    "Poslovni prostori",
    "Placevi",
    "Garaze/parking"
];
const rooms =  [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4.5 i vise soba"
];

const realEstates = [
    {
        city: "Beograd",
        option: "Prodaja",
        type: "Kuce",
        price: 120000,
        size: 85
    },
    {
        city: "Novi Sad",
        option: "Izdavanje",
        type: "Stanovi",
        price: 600,
        size: 55
    },
    {
        city: "Zagreb",
        option: "Prodaja",
        type: "Stanovi",
        price: 135000,
        size: 70
    },
    {
        city: "Podgorica",
        option: "Prodaja",
        type: "Kuce",
        price: 110000,
        size: 100
    },
    {
        city: "Sarajevo",
        option: "Izdavanje",
        type: "Poslovni prostori",
        price: 900,
        size: 120
    },
    {
        city: "Beograd",
        option: "Prodaja",
        type: "Stanovi",
        price: 160000,
        size: 75
    },
    {
        city: "Banja Luka",
        option: "Prodaja",
        type: "Placevi",
        price: 45000,
        size: 400
    },
    {
        city: "Niš",
        option: "Prodaja",
        type: "Kuce",
        price: 78000,
        size: 130
    },
    {
        city: "Skoplje",
        option: "Prodaja",
        type: "Stanovi",
        price: 185000,
        size: 95
    },
    {
        city: "Skoplje",
        option: "Izdavanje",
        type: "Poslovni prostori",
        price: 1500,
        size: 160
    },
    {
        city: "Ljubljana",
        option: "Prodaja",
        type: "Garaze/parking",
        price: 25000,
        size: 20
    },
    {
        city: "Tirana",
        option: null,
        type: "Stanovi",
        price: 98000,
        size: 68
    }
];

let citiesSelector = document.querySelector("#citiesSelector");
let typeSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");

for(let city of cities){
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;



    let cityFound = false;
    let cityCount = 0;

    for(let estate of realEstates){
        if(estate.city === city){
            cityFound = true;
            cityCount++;
        }
    }

    if(city === "Svi") {
        cityCount = realEstates.length;
    }

    cityOption.innerHTML += "("+cityCount+")";
    cityOption.value = city;
    citiesSelector.appendChild(cityOption);


    if(!cityFound && city !== "Svi"){
        cityOption.setAttribute("disabled", "true");
    }
}

for(let type of types){
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;
    typeSelector.appendChild(typeOption);
}

for(let room of rooms){
    let roomOptions = document.createElement("option");
    roomOptions.innerHTML = room;
    roomSelector.appendChild(roomOptions);
}

let currentCity = null;
let currentType = null;
let currentRoom = null;

citiesSelector.addEventListener("change", function(event){
    currentCity = event.currentTarget.value;

    let allEstates = document.getElementsByClassName("realEstate");

    for(let realEstate of allEstates){

     let estateCity = realEstate.querySelector(".city").textContent;

     realEstate.classList.remove("hidden");

     if(estateCity !== currentCity && currentCity !== "Svi"){
         realEstate.classList.add("hidden");
     }
    }
});

typeSelector.addEventListener("change", function(event){
    currentType = event.currentTarget.value;
});

roomSelector.addEventListener("change", function(event){
    currentRoom = event.currentTarget.value;
});



for(let estate of realEstates){
     let estateHolder = document.createElement("div");
     estateHolder.classList.add("realEstate");

     let estateTitle = document.createElement("p");
     estateTitle.innerText = estate.city;
     estateTitle.classList.add("city");

     let estateOption = document.createElement("p");
     if(estate.option == null){
         estateOption.innerText = "--";
     }
     else {
         estateOption.innerText = estate.option;
     }
     let estatePrice = document.createElement("p");
     estatePrice = estate.price;
    let estateSize = document.createElement("p");
    estateSize = estate.size;

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);

    document.querySelector("#estates").appendChild(estateHolder);
}













