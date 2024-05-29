// code
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress2 = {...passportWithAddress,married: true, address: {...passportWithAddress.address}}

console.log(passportWithAddress)
console.log(passportWithAddress2)