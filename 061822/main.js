// parameters- a string
// return the middle letter for an odd lengthed string. The middle two letters for an even lengthed string
// examples
// PseudoCode

// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

function getMiddle(s){
    //init variable that will be half way through the string. Subtract 1 from that variable due to indexing from 0 
    const half = s.length/2 - 1
    //init new var for splitting string without altering original argument
    const t = s.split('')
    //if length of string is even, return half and half plus one (half will always be a whole number as all even numbers divided by two equal an integer). If not evenly divisible by two, return math.ceil (round up) of half
    return s.length % 2 === 0 ? [t[half], t[half+1]].join('') : t[Math.ceil(half)]
  }

getMiddle("test") //  should return => "es" because there are an even number of letters in the argument)
getMiddle("testing") //  should return => "t" because there are an odd number of letters in the argument)
getMiddle("middle") //  should return => "dd" because there are an even number of letters in the argument)
getMiddle("A") //  should return => "A" because there are an odd number of letters in the argument)