const marvelHeros = ['Thor','Ironman','spiderman']
const dc = ['superman','flash','batman']

// marvelHeros.push(dc)
// console.log(marvelHeros[3][1])

//marvelHeros.concat(dc)    => this is returing sth so it must be encased in consolelog
console.log(marvelHeros.concat(dc));

                                            //, ...anotherArray
// const all_new_heros =[...marvelHeros, ...dc]
// console.log(all_new_heros)


const anotherArr = [1,2,3,[34,33,333], 5,[6,44, [7,8]]]
console.log(anotherArr.flat(Infinity))


console.log(Array.isArray('hitesh'))
console.log(Array.from('hitesh'))

console.log(Array.from({name:'manish'})) //interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
