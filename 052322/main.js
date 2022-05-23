// parameters- an array of integers (numbers). No less than 4 integers will be in the array
// return a single number-  the sum of the two lowest integers in the array
// examples
// PseudoCode


//Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


function sumTwoSmallestNumbers(arr) {
    //sort the arr from lowest to highest
    arr.sort(function(a, b) {
      return a - b;
    });
    //add the first and second itegers from the array and return it
    return arr[0] + arr[1];
  };



  sumTwoSmallestNumbers([5, 8, 12, 19, 22]) //should return 13);
  sumTwoSmallestNumbers([15, 28, 4, 2, 43]) //should return 6;
  sumTwoSmallestNumbers([3, 87, 45, 12, 7]) //should return 10);
  sumTwoSmallestNumbers([23, 71, 33, 82, 1]) //should return 24)
  sumTwoSmallestNumbers([52, 76, 14, 12, 4]) //should return 16)