const Name = "Karam"
const value = 55
// console.log(Name + value); //this is not used in modern day so avoid it

//Modern way
// console.log(`My name is ${Name} and value is ${value}`); // string intopolation bola jata hai
// console.log(`My name is ${Name.toUpperCase()} and value is ${value}`); // string intopolation bola jata hai


const gameName = new String('Sibbu_Babu')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);//. two times underscore proto again two times underscore -> object
// console.log(gameName.length);
// console.log(gameName.at(3));
// console.log(gameName.indexOf('u'));
// console.log(gameName.toLowerCase());
const newName = gameName.substring(0,4) // we get output 0 to 3 indices
console.log(newName)
// const news = gameName.slice(0,5); // isme negative index v de skte hai negative ke case me ulta dega
const news = gameName.slice(-8,5); // isme negative index v de skte hai negative ke case me ulta dega

console.log(news)
const nameOne = "   Rohit   "
console.log(nameOne);
console.log(nameOne.trim()); // unnecessary  space ho hata dega
console.log(nameOne.trimStart()); // remove whitespace from begining
console.log(nameOne.trimEnd()); // remove whitespace from end
let url = "https://Karambabu%20dotcom"
console.log(url.replace('%20','_'))

console.log(url.includes("Karam"))
console.log(url.includes("Karamchand"))


let nam = "Karam Chand is cse student"
console.log(nam.split(' '))




