// All Star Code Challenge #18
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.



function strCount(str, letter){ 
    //create accumulator 
    let acc = 0
    //split string into array and compare each element of the array to 'letter' argument. Increase acc when matches; otherwise, do nothing
    str.split('').forEach(e => e === letter ? acc++ : acc)
    //return acc
    return acc
  }


  function strCount2(str, letter){  
      // split str into arr on the argument passed in para letter. Return the length of that array as it will be equal to the number of times the letter exists in the string
    return str.split(letter).length-1
  }