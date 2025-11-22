

// querySelector "#name", ".name"

document.querySelector("#title").style.color = "red";
document.querySelector(".subtitle").style.color = "green";

let products = document.querySelectorAll(".product");

let productPrices = document.querySelectorAll(".productPrice");

for(let product of products){
    product.style.color = "#535353";
}

for(let price of productPrices){

    if(price.textContent >= 5000){
        price.style.color = "red";
    }
    else {
        price.style.color = "green";
    }
}