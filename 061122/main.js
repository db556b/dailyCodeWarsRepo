// parameters- one array, and one number
// return- the final (number) of even numbers contained in the array in the order they originally were in the array
// examples
// PseudoCode

// Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.




function evenNumbers(array, number) {
    //filter array for even numbers and slice the array for negative `number` to remove any extraneous numbers from the front of the array
    return array.filter(e => e % 2 === 0).slice(-number)
    }



evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) // should return =>  [4, 6, 8]) because 4, 6, 8 are the final three even numbers in the array argument
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) // should return =>  [-8, 26] because -8 and 26 are the final 2 even numbers in the array argument
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) // should return =>  [6])  because 6 is the final even number in the array argument