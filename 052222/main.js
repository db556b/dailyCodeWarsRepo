// parameters- one array with only positive numbers, array will always have an even number of integers passed
// return a single number consisting of the lowest sum of that can be obtained by reducing the array after multiplying each pair of integers
// examples
// PseudoCode- multiplying the largest number by the smallest number, then the seconds smallest number by the second largest number, then the third largest number y the third smallest numer, etc and then adding those numbers will always be the lowest possible end result





// Minimize Sum Of Array (Array Series #1) 
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// function minSum(arr) {
    //sort array largest to smallest or smallest to largest
    arr = arr.sort(function(a, b){return a-b})
    //declare a variable into which to save the total of the multiplied numbers
    let total = 0
    //for loop to multiply i by arr.length - 1 - i. Stops at the halfway point so as to no continue multiplying all the way to the end of the array
   for (let i = 0; i < arr.length/2; i++){
       //add to the total the product of arr[i] and arr[arr.length - 1 - i] (- 1 - i is to get to the last element in the array)
     total += arr[i] * arr [arr.length - i -1]
   }
   //return the integer in total
  return total
  }



  minSum({12,6,10,26,3,24}) //==> return (342)
  minSum({9,2,8,7,5,4,0,6}) //==> return (74)
  minSum({5,4,2,3}) //==> return (22) 