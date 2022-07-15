// parameters- a string of words
// return- return an integer with the length of the shortest word
// examples
// PseudoCode

// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //create new map of each word's length. return Math.min of the map
    return Math.min(...(s.split(' ').map(e=> e.length)))
  }

findShort("bitcoin take over the world maybe who knows perhaps") // should return 3 becaue that is the length of the shortest word in the argument
findShort("turns out random test cases are easier than writing out basic ones") // should return 3 becaue that is the length of the shortest word in the argument 
findShort("Let's travel abroad shall we") // should return 2 becaue that is the length of the shortest word in the argument




// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!



function createPhoneNumber(n){
    return `(${n.slice(0,3).join('')}) ${n.slice(3,6).join('')}-${n.slice(6).join('')}`
  }

//   Mumbling
//   This time no story, no theory. The examples below show you how to write function accum:
//   Examples:
  
//   accum("abcd") -> "A-Bb-Ccc-Dddd"
//   accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//   accum("cwAt") -> "C-Ww-Aaa-Tttt"
  
//   The parameter of accum is a string which includes only letters from a..z and A..Z.
  

  function accum(s) {
    let string = []
    s = s.split('')
    s.forEach((e,i) => {
      let str = `${e.toUpperCase()}` 
      for (let j = 0; j < i; j++){
        str += e.toLowerCase()
      }
      string.push(str)
    })
    return string.join('-')
  }

  function accum2(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }




//   Exes and Ohs
//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:


  function XO(str) {
    function test(par){
      return str.toLowerCase().split('').filter(e => e === par).length
    }
   return test('x') === test('o')
  }



XO("ooxx")// should return  => true
XO("xooxx")// should return  => false
XO("ooxXm")// should return  => true
XO("zpzpzpp")// should return  => true // when no 'x' and 'o' is present should return true
XO("zzoo")// should return  => false

