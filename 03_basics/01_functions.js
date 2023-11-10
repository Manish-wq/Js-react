function sayMyName(){
    console.log('M')
    console.log('A')
    console.log('N')
    console.log('I')
    console.log('S')
    console.log('H')
}

sayMyName()
    
    
// function addTwoNumbers(num1, num2){
//         console.log(num1+num2)

// }

function addTwoNumbers(num1, num2){
    // let result=(num1+num2)
    //return return
    return num1+num2
    console.log('Manish') //unreachable code

}

const result = addTwoNumbers(2,4)
// console.log('result', result)


function loginUserMessage(username='sam'){
    if(!username){
        console.log('Please enter the username');
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage('Manish '))
// console.log(loginUserMessage('Mnish'))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(300, 300, 20, 4, 600));

const user = {
    username: 'manish',
    prices: 199
}

function handleObj(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObj(user)

handleObj({
    username: 'sam',
    price:299
})

const myArr = [200, 400, 100, 600]
function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myArr))
console.log(returnSecondValue([2,3,4,5]))