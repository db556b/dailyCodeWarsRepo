// parameters - 3 numbers. 0 <= h <= 23, 0 <= m <= 59; 0 <= s <= 59
// return - returns a single number
// examples
// PseudoCode


// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    // return hours times millseconds in an hours (360000) + minutes times millseconds in a minute (6000) + seconds times milliseconds in a second (1000)
    return h * 3600000 + m * 60000  + s * 1000;
  }

  past(0,1,1) // returns 61000
  past(1,1,1) // returns 3661000
  past(1,0,1) // returns 3601000