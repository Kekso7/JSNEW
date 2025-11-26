
function login(userName, password) {

    return userName.toLowerCase() === "admin" && password.toLowerCase() === "admin";
}

let result = login('adMin', 'aDmin');
console.log(result);

