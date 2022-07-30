// parameters- a single number(integer)
// return- that number iteratively halved until it equals less than one cumulatively added into a single integer
// examples
// PseudoCode

// Halving Sum
// Task
// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47




function halvingSum(n) {
    //init vars. sum to return at the end. track to track the number that has been halved
    let sum = n,
        track = Math.floor(n / 2)
        //init loop that stops once track gets below 1
    while(track >= 1){
        //add the track to the sum to be returned later
      sum += track
      //halve track and floor it to ensure an integer (as per the instructions)
      track = Math.floor(track/2)
    }
    //return sum
  return sum
}


halvingSum(25) // should return => 47  as 25  =>  25 + 12 + 6 + 3 + 1 = 47
halvingSum(127) // should return => 247 


//function halvingSum(n) {
//     if(n === 1) return n;
//     return n + halvingSum(Math.floor(n/2));
// }