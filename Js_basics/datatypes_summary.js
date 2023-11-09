// Primitive datatypes( call by value)

// 7 types: string, number, boolean, null, undefined, symbol, bigint


const score = 100 //false
const scoreValue = 10.1

const isLoggedIn = false
const outsideTemp = null
let userEmail; //let userEmail = undefined, is also fine

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

const bigNumber = 2632671673763173131n




// Non-Primitve(refrence type)

// Arrays, Objects, Funcions

const heros = ['shaktiman','naagraj','doga'];

let myObj = {
    name:'Manish',
    age: 22

}

const myfunc=function(){
    console.log('Hello World');

}

// console.log(typeof bigNumber);
console.log(typeof null);
console.log(typeof scoreValue);
console.log(typeof myfunc);
console.log(typeof anotherId);














