// parameters- whole integer- possible negative or 0
// return- the sum of every number less than the passed argument
// examples- below
// PseudoCode-below

// Triangular Treasure
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// You need to return the nth triangular number. 


function triangular( n ) {
    //loop through every number between 0 and n adding it to the total 
    // there has to be a mathematical method to find the sum of every number that is less than the current number
    //use google to find the formula- it is (n * (n+1)) / 2 -> this finds the average of all the numbers less than 'n'
    return n < 1 ? 0 : (n * (n+1)) / 2
    }

    triangular(10000) // should return 50005000
    triangular(5000) // should return 12502500
    triangular(25) // should return 325
    triangular(12) // should return 78