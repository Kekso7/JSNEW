

let cars = ['Audi', 'BMW', 'Mercedes'];

function checkCar(carList, CarName) {
    for(let name of carList)
        if(name.toLowerCase() === CarName.toLowerCase()) {
            return true;
        }
    return false;
}

let result = checkCar(cars, "MeRcEDEs");
console.log(result);

let result2 = cars.includes("BMW");
console.log(result2);





















