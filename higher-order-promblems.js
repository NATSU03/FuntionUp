// write your own find and findIndex function
// (Hint: using for loop and if else)

const something =[3,4,5,67,8,8,9,]

newsomething = something.find(A=> A==4)

newsomething2 = something.findIndex(A=> A>4)

console.log(newsomething);
console.log(newsomething2);

// ======================================================== //



const practiceData = [[14,21,23,64],[33,46,51,65]]
//
//  * requirement one
//  * increment each number by one and output the resultant array using a higher order method and for loop
//  * HINT: use nesting
//  * solution =  [[15,22,24,65], [34,47,52,66]]
 
  
const practiceData1 = practiceData.map( x => x.map(x2 => x2 + 1));

console.log(practiceData1);

//  * requirement two
//  * from the above array, create an array of array of even numbers using a higher order method and for loop
//  * solution = [[14,64], [46]]



const practiceData3 = practiceData.map(x => x.filter(even))

function even (x2){

  if (x2%2==0){
    return true
  }else return false
}
console.log(practiceData3);

// // ======================================================== //

//     // problem => return an array such that numbers at odd idex are multiplied by 2
//     // and numbers at even index are multiplied by 10

const array = [23 , 45,467, 789, 34, 989, 56]


function sort (){
  for (let i = 0 ; i < array.length;i++){
    if (i%2==0){
       console.log(array[i]*2)
     
    }else console.log(array[i]*10)
  }
  
}
console.log(sort());




// // ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
 const carObject = carBrands.reduce((result, i, i1) => {
  return {...result, [i]: carModel[i1]};}, {});

console.log(carObject);

// const cars={}
// function final(){
//   for(let i= 0 ; i< carBrands.length; i++){
//      cars[carBrands[i]]  = carModel[i]
//   }
// console.log(cars)
// }
// final()



//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
 
 
// ======================================================== //

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(array.flat());

 /**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];

 // result =  [1, 2, 3, 4, 5, 6]


//======================================================== //
 */
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const uppercase = countries.map(U => {console.log(U.toUpperCase())})
  // * 
  // * return an array with all words converted into uppercase using higher order function
  // * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  // * 
  // * 
  // * 
  // */

// ======================================================== //