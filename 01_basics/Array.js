//Array is a collection of elements of different data-type or same data-type, array is resizable in javascript  

var sanArray = ['A', 'B', 'C', 'D' , 'E']  //Array declaraction

console.log(sanArray[0]) //to access elements of array  using Index 

/* There are two types of copies of array
 1. Shallow Copy : if we change in shoallow copy of array, the same changes get reflect in original copy.
 2. Deep Copy    : In deep copy of array if we change anything, the changes will not get relect in original copy. */
  



 const sanVowel = new Array('a', 'e', 'i', 'o', 'u') //syntax ---Array 
 console.log(sanVowel[3])


console.log(sanVowel.push(5, 6)) //push function is used to add element in the array
console.log(sanVowel)

console.log(sanVowel.pop())  //pop just delete the last elemet of array, if we pass any element of array for poping it will not delete 
console.log(sanVowel)

console.log(sanVowel.unshift(3))  //unshift is used to add elements at the begin of the array 
console.log(sanVowel)


console.log(sanVowel.shift())  //unshift is used to remove elements at the begin of the array 
console.log(sanVowel)

console.log(sanVowel.includes('e'))  //check the array element, weather present or not
console.log(sanVowel.indexOf('e'))  // to check index of elements

