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


   function remove2(string){
    return string.split('!').join('') + '!'
}


// Student's Final Grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//     90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//     75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//     0, in other cases



function finalGrade (exam, projects) {
    return exam > 90 || projects > 10 ? 100 : 
    exam > 75 && projects >= 5 ? 90 : 
    exam > 50 && projects >=2 ? 75 
    : 0
  }

//   Credit Card Mask

//   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//   Your task is to write a function maskify, which changes all but the last four characters into '#'.

  function maskify(cc) {
    return cc
      .split("")
      .map((e, i) => (i > cc.length - 5 ? e : "#"))
      .join("");
  }