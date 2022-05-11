// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    let word2 = word.toLowerCase().split('')
    let arr = []
    word.toLowerCase().split('').forEach(e => {
      if (word2.indexOf(e, word2.indexOf(e) + 1) === -1){
        arr.push(`(`)
      } else {arr.push(`)`)}
    })
  return arr.join('')
}

function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


//   Simple Fun #79: Delete a Digit
//   Task

// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example

// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

  function deleteDigit(n) {
      //convert n to string instead of number
    n=n.toString()
    //create array to store value after removing one number
    let arr = []
    //for loop to loop through elements and remove the current integer
    for (let i = 0; i < n.length; i++){
    //create new copy of n (called a) to push into the array at the end of the loop- so we never alter the original value passed as argument
      let a = n.split('')
      //remove current index value
      a.splice(i,1)
      //join the rest of the string back together, convert to a number, and push it into the arr
      arr.push(+(a.join('')))
    }
    //return highest value in the arr array
    return Math.max(...arr)
    
  }

//   Twice as old
//   Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


function twiceAsOld(dad, son) {
    return Math.abs(dad - son * 2);
  }