let Mydate = new Date(); // My date ka type object hai (very imp for interview)
// console.log(Mydate);
// console.log(typeof Mydate); // object
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleString());

// let MyCreatedDate = new Date(2007,0,7)   //  javascript me months 0(zero) se start hote hai qki array ki tarh hai na
// console.log(MyCreatedDate.toDateString());
// let MyCreatedDate = new Date(2007,0,7,6,30) 
// let MyCreatedDate = new Date("2027-11-27") // is format me month 1 se hi start hota hai
let MyCreatedDate = new Date("01-01-2001") // is format me v month 1 se hi hai aur ye india me use hota hai format
// console.log(MyCreatedDate.toLocaleString());

let MyTimeStamp = Date.now()
// console.log(MyTimeStamp);  //1 jan 1970 se ab tk ka time milisec me hai
// console.log(MyCreatedDate.getTime());

// console.log(Date.now())  // 1 jan 1970 se ab tk ka time milisec me dega 
// console.log(Math.floor(Date.now()/1000)); // mili sec to sec convert kiya (important for interview)


let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getHours())  // since newDate is an object so we can get value inside object
console.log(newDate.getMonth()+1) // exact month aayega 1 add krne pr qki usually newDate() declare nahi kiya hai to 0 se start hoga na

// console.log(`Date is ${newDate} `)

console.log(newDate.toLocaleString( 'default',{
    weekday: "short"                            //control space click krne se property aati hai
}))




