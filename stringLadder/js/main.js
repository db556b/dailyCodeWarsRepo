// 8 KYU string kata

// The Wide-Mouthed frog! 
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide


function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
  }



//   7 kyu string kata
//   String Merge!
//   Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.


function stringMerge(string1, string2, letter){
    return string1.slice(0,string1.indexOf(letter)) + string2.slice(string2.indexOf(letter))
  }

// 6 kyu string array
//   Counting Duplicates
//   Count the number of Duplicates

//   Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  function duplicateCount(text){
    let firstLetterOccurence = ""
    let dupes = ""
    text.split('').forEach(e =>{
      e = e.toLowerCase()
      if (!firstLetterOccurence.includes(e)){
        firstLetterOccurence += e
      } else if (!dupes.includes(e)){
        dupes += e
      }
    })
    return dupes.length
  }




  
//8 kyu string array
//   Polish alphabet

//   There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.


  function correctPolishLetters (string) {
    const polish = {
    'ą' : 'a',
    'ć' : 'c',
    'ę' : 'e',
    'ł' : 'l',
    'ń' : 'n',
    'ó' : 'o',
    'ś' : 's',
    'ź' : 'z',
    'ż' : 'z'
    }
    return string.split('').map(e => polish.hasOwnProperty(e) ? polish[e] : e).join('')
  }