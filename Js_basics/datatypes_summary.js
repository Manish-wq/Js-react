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


//_____________________Game of memory_ and_threads________________________

// There are two types of memory
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = 'manishfuturist'
 
let anothername = myYoutubename
anothername = 'chaiaurcode'

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: 'user@google.com',
    upi: 'user@paytm'

}
let userTwo = userOne

userTwo.email = 'manish@google.com'

console.log(userOne.email)
console.log(userTwo.email)













