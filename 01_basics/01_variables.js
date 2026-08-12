const accountId = 25034
let accountEmail = "em012@gmail.com"
var accountPassword = "1234"
accountCity = "delhi"
let accountState;

//accountId = 2 "it will show you an error  here not allowed to change const value"

accountEmail = "ej011@gmail.com"
accountPassword = "3421"
accountCity = "bengluru"


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and function scope
*/