// parameters- three integers. a bgin where the count begins, an end where the count ends, each step between the begin and end that needs to be added to the sum 
// return a singular number as the sum of every number between begin and end steppin gup by the step number each time
// examples
// PseudoCode


// Sum of a sequence
// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0



const sequenceSum = (begin, end, step) => {
    //return 0 if end is smaller than begin
    if (begin > end) {return 0}
    //init an accumulater
    let sum = 0
    //init a for loop to loop through numbers. set i to begin, stop loop when i exceeds end, increase incrementor by step each loop
    for (let i = begin; i <= end ; i += step){
        //add i to sum accumulator
      sum += i
    }
    //return sum
    return sum
  };




sequenceSum(1, 5, 3) // should return => 5  because 1 (begin) + 4 (begin + step) === 5 ----- next step would be larger than 5, so 5 is not included
sequenceSum(0, 15, 3) // should return => 45  because because 0 (begin) + 3 (0+step) + 6 (3+step) + 9 + 12 + 15 (end--- included because it is the end number) === 45
sequenceSum(16, 15, 3)// should return =>  0  because the end number (15) is smaller than the begin number (16)--- instructins say to return 0 in this case
sequenceSum(2, 24, 22)// should return =>  26  because because 2 (begin) + 4 (2 + 2) + 6 (4 + 2)...24 (end) === 26