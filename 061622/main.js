// parameters- one integer
// return each number of the integer squared as an integer
// examples
// PseudoCode

// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



function squareDigits(num){
    //change num into a string. split.map.join.convert back to number and return
    return +(num.toString().split('').map(e => (Number(e) ** 2).toString()).join(''))
  }





  squareDigits(2112)// should return =>  4114
squareDigits(3212)// shoudl return =>  9414)