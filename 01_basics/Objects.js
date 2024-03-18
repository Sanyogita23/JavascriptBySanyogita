

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



