// parameters- single whole number  
// return returns the nth even number starting count at 0   
// examples-below
// PseudoCode -below

//Get Nth Even Number
// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// The input will not be 0.



function nthEven(n){
    //will always return the number times 2 - 2 except in the instance of negative numbers and 0
    //loop through numbers adding 2 to i every loop
    return n * 2 - 2
  }

  nthEven(1) // returns 0
  nthEven(3) // returns 4
  nthEven(100) //returns 198
  nthEven(12987340) // returns 2597466)