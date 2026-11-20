const accountId = 56134
let accountEmail = "karam@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

//accountId = 456   // not allowed
// console.log(accountId);

accountEmail = "sibbu.gmail.com"
accountPassword = "25"
accountCity = "Bombay"

let accountState;

/*
Prefer not to use var
because of issue in block scope and fucntion scope

we use let and cont only

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
