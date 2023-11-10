// Singleton 
Object.create 

// Object literals

// myArray =['h','i']
// console.log(myArray[0])
// console.log(myArray[1])


const mySym= Symbol('key1')

const jsUSer = {
    name: 'manish',       // system perceives name as 'name' by deault.
    'full name': 'manish rajput',
    [mySym]: 'mykey1',
    age: 23,
    location: 'Noida',
    email: 'manish@google.com' ,
    isLoggedOn:  false,
    LastLoginDays: ['Monday','Saturday']
}


console.log(jsUSer.email)
console.log(jsUSer['email'])    //this can be also used
console.log(jsUSer["full name"])

// console.log(typeof(jsUSer[mySym]))

// jsUSer.email='manish@chatgpt.com'
// Object.freeze(jsUSer)
// jsUSer.email='manish@microsoft.com'
// console.log(jsUSer)

//_____________________Functions______

jsUSer.greeting=function(){
    console.log('Hello Js User')
}

jsUSer.greeting2=function(){
    console.log(`Hello Js user ${this.name}` )
}
// console.log(jsUSer)
console.log(jsUSer.greeting());
console.log(jsUSer.greeting2());

