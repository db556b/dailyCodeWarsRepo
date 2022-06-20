// parameters- one word string, an array of string words
// return- all anagrams of word (string) from the words array(also strings)
// examples
// PseudoCode



// Where my anagrams at
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.



function anagrams(word, words) {
    //declare new word const to not alter original
    const w = word.split('').sort().join('')
    //declase new array var for pushing each match and to be returned
    let arr = []
    //loop through each element of words array 
    words.forEach(e => {
        //check for matches to w const after sorting the current element
      if (w === e.split('').sort().join('')) arr.push(e)
    })
    //return arr 
    return arr
  }



//add sorted method to String prototype which splits, sorts, and rejoins the string on which it is called
  String.prototype.sorted = function() {
    return this.split("").sort().join("");
  };
  
  function anagrams2(word, words) {
    //filter words array and return filtered array
    return words.filter(function(x) {
        //return to filtered array from words when word.sorted === words[element].sorted
        return x.sorted() === word.sorted();
    });
  }



anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // should return => ['aabb', 'bbaa'] as these are the anagrams contained inside the words array
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // should return => ['carer', 'racer'] as these are the anagrams contained inside the words array
anagrams('laser', ['lazing', 'lazy',  'lacer']) // should return => [] as there are no anagrams of word inside the words array





//p - single number
//r - if even return num in binary. if odd return number in hex
//e
//p

// Evens and Odds
// This kata is about converting numbers to their binary or hexadecimal representation:

//     If a number is even, convert it to binary.
//     If a number is odd, convert it to hex.

// Numbers will be positive. The hexadecimal string should be lowercased.




function evensAndOdds(num){
	return num % 2 === 0 ? num.toString(2) : num.toString(16)
}


evensAndOdds(2) // Should return => '10'
evensAndOdds(13) // Should return => 'd'
evensAndOdds(47) // Should return => '2f'
evensAndOdds(0) // Should return => '0'
evensAndOdds(12800) // Should return => '11001000000000'
evensAndOdds(8172381723) // Should return => '1e71ca61b' 




// Find the missing term in an Arithmetic Progression
// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.


//p- one list of incrementing or decrementing numbers with one missing form the pattern
//r- the missing number form the pattern

var findMissing = function (list) {  
    //check if list if increasing or decreasing. Reverse list if decreasing
    list = list[0] > list[1] ? list.reverse() : list
    //find diff in index 1 and 0
    const diff = list[1] - list[0],
    //find difference from index 2 and 1
          diff1 = list[2] - list[1],
          //assign lower of differences
          diff2 = diff > diff1 ? diff1 : diff
          //loop through array
    for (let i = 0; i<list.length - 1; i++){
        //test if next index is (lower) difference + current index
      if (list[i] + diff2 !== list[i+1]) {
        //if not return current index + difference
        return list[i] + diff2
      }
    }
  }


var findMissing2 = function (list) { 
    //reverse list when list is descending numbers
    list = list[0] > list[1] ? list.reverse() : list
    //determine min of index 1 - index 0 vs index 2 - 1
    const diff = Math.min(list[1] - list[0],list[2] - list[1])
    //loop array
    for (let i = 0; i<list.length-1; i++){
        //check for diff + crrent ind === next number. If it does not equal, return current index + diff
      if (list[i] + diff !== list[i+1]) {return list[i] + diff}
    }
  }


  findMissing([1, 3, 5, 9, 11])//should return => 7
  findMissing([1, 2, 3, 5, 6, 7, 8, 9, 10, 11]) //should return => 4

