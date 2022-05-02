//Grasshopper - Check for factor

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.
// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

//     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder

// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.



function checkForFactor (base, factor) {
    return base % factor === 0
  }


//Enumerable Magic #20 - Cascading Subsets
//   Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    let arr = []
    for (let i = 0; i <= array.length - n; i++){
      arr.push(array.slice(i,n+i))
    }
    return arr
  }

//    Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//    Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"



  function remove (string) {
    return string.split('').map((e,i) => {
       if (e === '!' && i != string.length - 1){
         return ''
       } else if(e === '!' && i === string.length - 1){
         return e
       } else if(e !== '!' && i === string.length - 1){
         return e + '!'
       }
      else { return e }
     }).join('')
   }



