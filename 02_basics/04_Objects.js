// const tinderUser = new Object()
const tinderUser={}

tinderUser.id='123abc'
tinderUser.name='sammy'
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser ={
    email: 'some@gmail.com',
    fullname:{
        usersName:{
            firstname:'Manish',
            lastname:'Rajput'
        }
    }
}

// console.log(regularUser.fullname.usersName.firstname)

//Combining objects

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'ss', 6: 'tt'}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 1,
        email: 'h@gmail.com'
    }
]
console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser).length)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))


