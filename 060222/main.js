// parameters- two integers
// return- the integer in num passed in to nth when reading num from right to left. If nth is negative or zero, return -1. If nth number does not exist in num, return 0. If num is negative, ignore the negative sign, so '-' will never be returned
// examples
// PseudoCode


// Find the nth Digit of a Number
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// Note

//     If num is negative, ignore its sign and treat it as a positive value
//     If nth is not positive, return -1
//     Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0



const findDigit = function(num, nth){
    //take num and convert to absolute value. convert to string so it can be split. then reverse it. 
    num = Math.abs(num).toString().split('').reverse()
    //return -1 if nth is <= 0 or return 0 if nth is larger than the length of the number, or number[nth - 1] converted to integer
    return nth < 1 ? -1 : num[nth - 1] == undefined  ? 0 : +(num[nth - 1])
}



findDigit(129, 2) // should return  2 because when counting from left to right in number 129, 2 is the second digit
findDigit(-2825, 3) // should return  8 because, when counting from right to left in -2825, 8 is the third digit
findDigit(0, 20) // should return  0 because the 20nth number of 0 is 0 (think 00000000000000000000)
findDigit(65, 0) // should return  -1 because 0  is not a positive number 
findDigit(24, -8) // should return  -1 because -8 is not a positive number 