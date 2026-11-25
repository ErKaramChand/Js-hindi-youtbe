// Primitive data type ->7 hai aur ye call by reference hote hai 
// String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.9 // number data type hoga isme float nahi hota 
const isLoggedIn = false; // boolean
const outsideTemp = null; // empty
let userEmail;  // undefined
// console.log(typeof(scoreValue))
// console.log(typeof(isLoggedIn))
// console.log(typeof(outsideTemp))
// console.log(typeof(userEmail))

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof(id));

// console.log(id === anotherId)
// the primary purpose of symbol() is to create a completely unique identifier .Even though both id and anotherId are given the same string description ('123'),each Symbol()call generates a distinct,unique value in memory .therefore ,comapring them with strictly equilty (===)always evaluates to false.

const veryLargeNumber = 123456789112345666n; // lase me n add kr do automatically smjh jayega bigInt hai


// Non primitive (Reference)
//Array,function,objects

let heros = ["Shaktiman","superhero","spiderman"]; // array
// console.log((typeof(heros)));  //object because array koi alag data type nahi hai ye khas trah ka object hi hai



//object create
let MyProfile = {
    name: "Karam",
    age: 19,
    Proffesion: "ProblemSolving"
}

// console.log((MyProfile));
// console.log(typeof(MyProfile));


//Function

let Myfunction = function(){
    console.log("Hello World")
}
// console.log(typeof(Myfunction));



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  ,Heap (NonPrimitive data types)
// means Primitive data type Stack memory me store hoti hai yani ye call by value hoti hai
// and NonPrimitive data type heap ke ander store hoti hai aur ye call by referenc hoti hai
//Example =>

let MyYouTubeNameIs = "Coding Baba"  // ye stack  memory me store hoga 
let anotherYtName = MyYouTubeNameIs // stack memory  me store hoga
anotherYtName = "Coding Fun"

// console.log(MyYouTubeNameIs);
// console.log(anotherYtName);

let UserOne = {
    email : "SibbuBabu@gmail.com",
    id : 12
}
let UserTwo = UserOne;
UserTwo.email = "KaramJod@gmail.com" //allocate in Heap memory(call by reference not call by value) 
console.log(UserOne.email);
console.log(UserTwo.email);



