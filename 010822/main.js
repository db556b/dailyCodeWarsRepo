// Grasshopper - Messi goals function
// Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

function goals (...args) {
    return args.reduce((a,b) => a+ +b,0)
  }