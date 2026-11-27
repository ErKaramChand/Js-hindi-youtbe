const score = 900
const gateScore = new Number(1000) // fix hai 1000 number data type hai
// console.log(gateScore);

// console.log(gateScore.toString());
// console.log(typeof(gateScore.toString()));
// console.log(gateScore.toString().length);

// console.log(gateScore.toFixed(2)); // 2 decimal places tk
const anotherNumber = 900.56
// console.log(anotherNumber.toPrecision(4));


const hundreds = 10000000
// console.log(hundreds.toLocaleString());// according to us standard
// console.log(hundreds.toLocaleString('en-IN'));// according to india standard

// +++++++++++++++  Maths  ++++++++++++++++++++++++++

// console.log(Math.abs(-1))
// console.log(Math.round(5.4)); // roundoff ho jayega
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.1));
// console.log(Math.sqrt(256));
// console.log(Math.max(65,43,6,3))
// console.log(Math.min(65,43,6,3))

// console.log(Math.random()); // math.random 0 se 1 ke bich value deti hai 
// console.log(Math.floor(((Math.random()) * 10) + 1)); // jaise 0.02 ke case me Math.random()*10 ki value ka floor lene pr garanted int nahi aata isliye 1 kiya hai aur chahe 0.00003 krke kitna v decimal ke bad ho 10 se multiply krke plus 1 krne pr 1 se above or equal ho hi jata hai

/// 0 <= Math.random() < 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min)// learn this formulla very very important 


