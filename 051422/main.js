// parameters- two positive integers
// return- return the largest number by which both parameters are divisible
// examples- below
// PseudoCode- below

//Greatest common divisor
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(a,b){
    //Euclid algorithm needs to be used
    //check to see if either number is 0
    if(a === 0) { return b;}
    if(b === 0) { return a;}
    // if neither number is 0 use recursion to call the same function passing b as the argument and then taking the remainder of dividing a by b as the second argument
    //this works as a loop passing the arguments into the same function over and over until one of the two if statements become true. 
    return mygcd(b, a % b)
}


mygcd(6,9) // should return 3
mygcd(12,4) // should return 2
mygcd(24,12) // should return 6