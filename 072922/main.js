// parameters- a string of letters and an array of numbers indicating the index of a letter than needs to be removed from the string of letters
// return- the singular letter left over after all the other letters have been removed
// examples
// PseudoCode

// Last Survivor
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.


function lastSurvivor(letters, coords) {
    //split the letters argument into an array
    letters = letters.split('')
    //loop through each of the coords array. Splice the singular letter out of the letters var at the index of the element
    coords.forEach(e => letters.splice(e,1))
    //return the final letter from the array- which will always be at index 0 as there is only one element left
    return letters[0]
  }

lastSurvivor('abc', [1, 1]) // should return => 'a'
lastSurvivor('kbc', [0, 1]) // should return => 'b'
lastSurvivor('zbk', [2, 1]) // should return => 'z'
lastSurvivor('c', []) // should return => 'c'
lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]) // should return => 'd'



// Alphabet war
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example


function alphabetWar(fight){
    let left = {
      w : 4,
      p : 3,
      b : 2,
      s : 1
    },
    right = {
      m : 4,
      q : 3,
      d : 2,
      z : 1
      },
     leftTot = 0,
     rightTot = 0
    fight.split('').forEach(e => {
      left.hasOwnProperty(e) ? leftTot += left[e] : right.hasOwnProperty(e) ? rightTot += right[e] : false
    })
     return leftTot > rightTot ? "Left side wins!" : rightTot > leftTot ? "Right side wins!" : "Let's fight again!";
  }


alphabetWar("z");        //should return => 'Right side wins!'
alphabetWar("zdqmwpbs"); //should return => 'Let's fight again!'
alphabetWar("zzzzs");    //should return => 'Right side wins!'
alphabetWar("wwwwwwz");  //should return => 'Left side wins!'


//P- an array of numbers
//R- the sum of the largest two numbers in the argument array

// Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.


function largestPairSum (numbers) {
    //return numbers
    return numbers
    //sorted from lowest to highest
            .sort((a,b) => a - b)
    //splice the final two numbers in the array
            .splice(numbers.length - 2)
    //reduce the spliced numbers to make a total of the highest two numbers in the array
            .reduce((a,b) => a + b,0)
  }

  
largestPairSum(10,14,2,23,19) // should return =>  42
largestPairSum(-100,-29,-24,-19,19) // should return =>  0
largestPairSum(1,2,3,4,6,-1,2) // should return =>  10
largestPairSum(-10, -8, -16, -18, -19) // should return =>  -18