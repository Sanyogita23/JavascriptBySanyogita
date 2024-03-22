

var mySym = Symbol("Key1")

var jSanUser =
 {
   name: "Sanyogita",
   age : 23,
   "Full Name":  "Sanyoigta Singh",   //not able to access through (.) in console
   symObj : mySym,
   [mySym] : "myKey1"
 }

 //console.log(jSanUser.name)   //1 way
// console.log(jSanUser["Full Name"])   //2 way
 //console.log(jSanUser.Full Name)  throw error


 //console.log(jSanUser[mySym]) 
 //console.log( typeof jSanUser[mySym]) 

 //console.log(jSanUser)
//let frz_ele = 90
// Object.freeze(jSanUser)
jSanUser.age = 90
console.log(jSanUser.age)
console.log(jSanUser.age)

//console.log(`The name of the user is ${jSanUser["Full Name"]} & age is ${jSanUser.age}`) //string Integ=rpolation method

jSanUser.Greeting = function()
{
  // console.log("Hello Sanyogita! you are so beautiful")

}
//jSanUser.Greeting()
//console.log(`jSanUser.Greeting ,${jSanUser.Greeting()}`)//function can not be dierctly consoled
let a = jSanUser.Greeting()                               //function should be assigned to variable for console
// console.log(a)  //

jSanUser.MyName = function()
{
 // console.log(`my name is ${this.name}`)
}
let tempName = jSanUser.MyName()

//singleton

const singlobj = new Object()
singlobj.UserName = "Sanyogita@"
singlobj.Pass = "San23"
singlobj.isLOggedId = "0"

console.log(singlobj)


const obj = {}

obj.UseID = 123
obj.UserCode = "san"
obj.UserEmpCode = "SAM23"

const bothobj = {...singlobj , ...obj}  //spread
console.log(bothobj)


const assobj = Object.assign({}, singlobj, obj)
console.log(assobj)

const keysan = Object.keys(singlobj, obj)
console.log(keysan)

const valsan = Object.values(singlobj, obj)
console.log(valsan)

const ensan = Object.entries(singlobj, obj)
console.log(ensan)


const obj1 = {

  details: {
    fullName: {
      firstName: {
        Lastname: "Singh"
      }
    }
  }

}

const val1 = obj1.details.fullName.firstName.Lastname
console.log(val1)

const arr1 = [{
  name: "san",
  id: 12
  
},
{
  name: "san",
  id: 12
  
},
{
  name: "arun",
  id: 12
  
}

]

const val5 = arr1[2].name

console.log(val5)


const gang = obj1.hasOwnProperty("details")

console.log(gang)