let serial_No = 100;   //let const var 
let name = 'Sanyogita'
//console.log(name)
name = 'Arun'  //let and var allows to change the value of variable
const sub1Marks = 20
const sub2Marks = 50

//sub1Marks = 30  //cannot change the value of const  it will throw error


// console.log(serial_No)
// console.log(name)
// console.log(typeof serial_No)
// console.log(typeof name)
// console.table([typeof serial_No, typeof name, typeof sub1Marks, typeof sub2Marks])
// console.table([serial_No, name, sub1Marks, sub2Marks])

// var and let variable

var nameofStudent = 'Sanyogita'
let nameofParent = 'Shylu'
console.log(nameofStudent, "var before")
console.log(nameofParent, "let before")
if (nameofStudent === nameofStudent)
{
    nameofStudent = 'Aryan'  
    console.log(nameofStudent , "var after")
    nameofParent = 'Santosh'
    console.log(nameofParent, "let after")
}
console.log(nameofStudent, "var after scope")
console.log(nameofParent, "let after scope")

//Null is a stand alone value 
var val = null
// console.log(val)
// console.log(typeof val)//type of null is object
// var val1 = undefined
// console.log(val1)
// console.log(typeof val1)
//type conversion

const aint = 100
// console.log(aint)
// console.log(typeof aint)
var num = String(aint)  //to string
// console.log(num)
// console.log(typeof num)
