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