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