// parameters
// return
// examples
// PseudoCode



// Split The Bill

// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

//     The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
//     The function should return an object/dict with the same names, showing how much money the members should pay or receive.

// Further points:

//     The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
//     If value is a decimal, round to two decimal places.

// Translations and comments (and upvotes!) welcome.

function splitTheBill(x) {
    let a = x
    let arr = []
    let average
    for (let key in x){arr.push(x[key])}
    average = ((arr.reduce((a,b) => a + +b, 0)) / arr.length)
    for (let key in a){x[key] = Math.round((x[key] - average) * 100) / 100}
    return a
  }

// P- a string
// R- a number consisting of the consecutive vowels (in order) in the string
// E
// P


// Consecutive Vowels in a String
//   Return an integer with the length of the consecutive vowels found.

//   This is better explained with a couple of examples:
  
//       You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the "a" and make your way right. The next vowel is an "e" and it is the consecutive vowel, then "i" and so forth until you get to "u". If you keep moving right you find "a" which happens to be the consecutive vowel. Return 6.
//       This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the "a", then ignore the rest until you get to the "e", which is the consecutive vowel and so forth until you get to the "o". Return 4.
  

  function getTheVowels(word) {
    //set accumulator, total (for return), and vowels to compare
    let acc = 0,
        tot = 0
    const comp = ['a', 'e', 'i', 'o', 'u']
    //split word and loop through each element
    word.split('').forEach(e => {
      //verify that acc is not larger than the length of comp var
      if (acc > 4){acc = 0}
      //compare element to comp accumulator
      if (e === comp[acc]) {
        //increment acc and tot when match found
        acc++
        tot++
      }
    })
    //return total
    return tot;
  }




  
let s = 'desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdu
getTheVowels(s) // should return => 16 because there are 16 vowels in a row in the passed string. 

s = 'sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja
getTheVowels(s) // should return => 11 because there are 11 vowels in a row in the passed string. 

s = 'jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixou'
getTheVowels(s) // should return => 11 because there are 11 vowels in a row in the passed string. 
