// arrays 

const myArr = [0, 1, 2, 3, 4, 5, true, 'manish', Boolean(3)]
// console.log(myArr)

// console.log(myArr[0])
// console.log(myArr[6])

// shallow copy and deep copy


// const myHeros = ['shaktiman','naagraaj']

// const myArr2 = new Array(1, 2, 3, 5)
// console.log(myArr2)

// Array_methods

myArr.push(22)
myArr.push(23)
myArr.pop()         //jo bhi last element hoga that'll be removed
myArr.unshift(4)    // computer pr load ni ane dena hai kisi bhi haal mai.
myArr.shift()       // 4 vanished

// console.log(myArr.includes(4))


// console.log(myArr.includes(5))
// console.log(myArr.indexOf(7))  // -1 means function ko ni pta 


// const newArray = myArr.join()

// console.log(myArr)
// console.log(newArray)
// console.log(typeof newArray)  //are values to vahi ayi hai, bs sting ho jayegi.

// slice n splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log(myArr);


const myn2 = myArr.splice(1,3)
console.log(myArr);
console.log(myn2)


