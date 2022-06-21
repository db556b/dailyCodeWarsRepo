// parameters- one number
// return- the sum of all numbers below parameter that are divisible by 3 or 5
// examples
// PseudoCode

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    //declare acc
    let acc = 0
    //for loop to check if incrementor is divisible by 3 or 5
    for (let i = 3; i < number; i++){
      //check for multiple of 3 or 5
      if(i % 3 === 0 || i % 5 === 0){
        //add i tio the acc
        acc += i
      }
    }
    //return acc
    return acc
  }





  solution(10) // should return => 23)