const accountId = 144553
let accountEmail = "uzma@google.com"
var accountPassword = "12345"
accountCity = "Shmila"

// accountId = 2
accountEmail = "uz@uz.com"
accountPassword = "1342221"
accountCity = "delhi" //not recommended
let accountState;

console.log(accountId);

/* 
prefere not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])
