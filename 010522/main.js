// parameters- a number, possibly a float
// return- a whole number rounded down to the nearest whole integer
// examples- below
// PseudoCode

//Beginner Series #4 Cockroach



function cockroachSpeed(s) {
    //take number and multiply by 27.778 and return new value rounded down. 
    return Math.floor(s*27.778)
  }

cockroachSpeed(1.08) //should return 30
cockroachSpeed(1.09) //shoudl return 30
cockroachSpeed(0) // should return 0