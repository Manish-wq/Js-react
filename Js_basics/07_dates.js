// Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2023,0,23, 5,3)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("12-01-2023")
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime())

// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)

console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: 'long'
})