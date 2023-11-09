const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(2))

const hundreds = 100000
console.log(hundreds.toLocaleString()) //this gives international no

console.log(hundreds.toLocaleString('en-IN')) //this is indian sys

//__________________Maths_module_________________________________

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.abs(-4.43));

// console.log(Math.round(4.43));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));

// console.log(Math.min(13,5,6,7,99));
// console.log(Math.max(13,5,6,7,99));
// console.log(Math.pow())

// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))



