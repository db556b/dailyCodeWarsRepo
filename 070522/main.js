// parameters- a positive integer 
// return- true or false depanding on if the argument passed is a narcissistic number (defined in instructions)
// examples
// PseudoCode


// Does my number look big in this?
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


function narcissistic(value) {
    //take argument and convert to string and split
    const newv = value.toString().split('')
    //init accumulator
    let acc = 0
    //loop through each number raising it to the power of the length of the argument and add to the accumulator
    newv.forEach(e => acc += Math.pow(+e,newv.length))
    //return if value and accumeulator are equal
    return acc === value
  }


function narcissisticRefactor(value) {
    const newv = value.toString().split('')
    return newv.map(e => Math.pow(+e,newv.length)).reduce((a,b) => a + b, 0) === value
  }


narcissistic( 7 )// should return =>  true
narcissistic( 371 )// should return =>  true