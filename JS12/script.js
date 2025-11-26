

function calculateTax(amount, tax = 0.15) {

    return amount+(amount*tax);
}
calculateTax(500,0.2);

calculateTax(100);

function getFullName(firstName, lastName, middleName = '') {

    return firstName+" "+lastName+" "+middleName;
}
let marina = getFullName("Marina", "Krajcik", "Mila");
let ivan = getFullName("Ivan", "Ivancic");

console.log(marina, ivan);



let smokesTax = calculateTax(500,0.1);
smokesTax = smokesTax * 3;
console.log(smokesTax);





















