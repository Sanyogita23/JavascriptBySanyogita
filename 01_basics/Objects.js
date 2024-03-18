

var mySym = Symbol("Key1")

var jSanUser =
 {
   name: "Sanyogita",
   age : 23,
   "Full Name":  "Sanyoigta Singh",   //not able to access through (.) in console
   symObj : mySym,
   [mySym] : "myKey1"
 }

 console.log(jSanUser.name)   //1 way
 console.log(jSanUser["Full Name"])   //2 way
 //console.log(jSanUser.Full Name)  throw error


 console.log(jSanUser[mySym]) 
 console.log( typeof jSanUser[mySym]) 

 console.log(jSanUser)
//let frz_ele = 90
Object.freeze(jSanUser)
jSanUser.age = 90
console.log(jSanUser.age)
console.log(jSanUser.age)

console.log(`The name of the user is ${jSanUser["Full Name"]} & age is ${jSanUser.age}`) //string Integ=rpolation method

jSanUser.Greeting = function()
{
   console.log("Hello Sanyogita! you are so beautiful")

}
//jSanUser.Greeting()
console.log(`jSanUser.Greeting ,${jSanUser.Greeting()}`)//function can not be dierctly consoled
let a = jSanUser.Greeting()                               //function should be assigned to variable for console
// console.log(a)  //




