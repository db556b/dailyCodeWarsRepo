// parameters- two string in puts
// return- true or false. true if str 1 contains all the characters from string 2
// examples
// PseudoCode

// Scramblies
// Description:

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False




function scramble(str1, str2) {
    //init variables
    let hash = {},
        track = true
        //create hash map of all letters in string one
    str1.split('').forEach(e => {
        hash[e] ? hash[e]++ : hash[e] = 1;
        })
        //test the letters of sgtring 2 against the hash map and reduce the value of the key by one for each time the letter in encountered
    str2.split('').forEach(e => {
        //reduce the key's value by one when the value is greater than 0
        if (hash[e] > 0){
          hash[e]-- 
        } else {
            //when the the value is 0 or not found in the hash map change track to false
          track = false
        }
    })
   // return track
  return track
  }



scramble('rkqodlw', 'world')// ==> True
scramble('cedewaraaossoqqyt', 'codewars')// ==> True
scramble('katas', 'steak') //==> False
