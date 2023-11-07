 const accountId = 23112
 let accountEmail ='manish11@gamil.com'
 var accountPassword = '1234'
 var accountState;
 accountCity='Jaipur'
 
 // accountId = 2 , not allowed we cant change the constant

 accountEmail='hc@hc.com'
 accountPassword='22322'
 accountCity='Bengaluru'

 /*
 Prefer not to use var
 because of issue in block scope and functional scope.
 */
 
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
