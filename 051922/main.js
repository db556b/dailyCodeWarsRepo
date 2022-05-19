// parameters- one integer
// return- a string of either "not a perfect square" or a string block of the integer broken into a square (examples below)
// examples
// PseudoCode


// Perfect squares, perfect fun
// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

//     12
//     12

// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

//     123
//     123
//     123

// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.



function squareIt(int) {
    //convert int to string
    int = int.toString().split('')
    //going to be using the sqrt of the length of variable 'int' multiple times, so save that number into a variable - called sqrt
    const sqrt = Math.sqrt(int.length)
    //test if sqrt is an integer or that sqrt rounded down to nearest integer equals the sqrt
	if (sqrt === Math.floor(sqrt)){
        //once verified as an integer, use a for loop to loop through the array to insert the '\n' for line breaks once the array is joined back into a string
    for (let i = sqrt; i < int.length-1; i+=sqrt+1){
        //insert the '\n' for line breaks once the array is joined back into a string
      int.splice(i,0,`\n`)
    }
    //return the array joined back into a string
    return int.join('')
  }
  //if above conditional statement is falsy, then the sqrt(int.length) is not an integer; return 'Not a perfect square!""
  return "Not a perfect square!"
}


squareIt(1)//should return "1" because int.length === 1 and sqrt(1)=== integer of 1
squareIt(222)// shoudl return "Not a perfect square!" because int.length === 3 and sqrt(3) !== an integer
squareIt(234562342342)// should return "Not a perfect square!" because int.length === 13 and sqrt(13) !== an integer
squareIt(88989)// should return "Not a perfect square!" because int.length === 5 and sqrt(5) !== an integer
squareIt(112141568)// should return "112\n141\n568" because int.length === 9 and sqrt(9)=== integer of 3