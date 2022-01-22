// All Star Code Challenge #18
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.



function strCount(str, letter){  
    let acc = 0
    str.split('').forEach(e => e === letter ? acc++ : acc)
    return acc
  }


  function strCount2(str, letter){  
    return str.split(letter).length-1
  }