const name='Manish'
const repoCount = 50
// console.log(name+repoCount+'Value'); this syntax is not recommended

//This is known as string interpolation(using ``) This is more readable
console.log(`Hello, This is ${name} and my repo count is ${repoCount}`);

// another way for declaring a string

const gameName = new String('Manish-hc-com')

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]); //accessing key-value pairs

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));   //shows the characters at specified index.
console.log(gameName.indexOf('M'));// shows the index of specified character.
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
// const anotherString = gameName.slice(2,4)
console.log(anotherString);

const newString1 = '   regression  '
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimEnd());
console.log(newString1.trimStart());

const url = 'https://hitesh.com/hitesh%20chaudhary'
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'));
console.log(url.includes('%20'));

console.log(gameName.split('-'));







  


