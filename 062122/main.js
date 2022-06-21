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


//   Find the odd int
//   Given an array of integers, find the one that appears an odd number of times.

//   There will always be only one integer that appears an odd number of times.
//   Examples
  
//   [7] should return 7, because it occurs 1 time (which is odd).
//   [0] should return 0, because it occurs 1 time (which is odd).
//   [1,1,2] should return 2, because it occurs 1 time (which is odd).
//   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
  

//p - one array of numbers
//r- the number that appears in the array an odd number of times

  function findOdd(A) {
    //init object for counting numnber of number instances
    let counter = {};
    for (const element of A) {
        //if property exists in obj, add one to value
        if (counter[element]) {
            counter[element] += 1;
        } else {
            //if property does not exist in obj, creaate new prop and add one to value
            counter[element] = 1;
        }
    }
    //loop through counter obj
    for (const prop in counter){
        //check each value if divisible by 2
        if (counter[prop] % 2 !== 0){
            //if not, return the property
          return +prop
        }
    }
}





findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //should return =>  5);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) //should return =>  -1);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) //should return =>  5);
findOdd([10]) //should return =>  10);
findOdd([1,1,1,1,1,1,10,1,1,1,1]) //should return =>  10);
findOdd([5,4,3,2,1,5,4,3,2,10,10]) //should return =>  1);