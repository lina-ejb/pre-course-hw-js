// code
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress2 = {
    ...passportMarried,
    address: {
        ...passportMarried.address
    },
    married: true
}

console.log(passportWithAddress)
console.log(passportWithAddress2)