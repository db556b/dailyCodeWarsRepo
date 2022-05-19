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
    int = int.toString().split('')
    const sqrt = Math.sqrt(int.length)
    console.log(sqrt)
	if (sqrt === Math.floor(sqrt)){
    for (let i = sqrt; i < int.length-1; i+=sqrt+1){
      int.splice(i,0,`\n`)
    }
    return int.join('')
  }
  return "Not a perfect square!"
}