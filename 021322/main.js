
// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.



function tripleTrouble(one, two, three){
    let arr = []
    let count = 0
    for (let i = 0; i < one.length; i++){
      arr.push(one[i])
      arr.push(two[i])
      arr.push(three[i])
    }
    return arr.join('')
    }