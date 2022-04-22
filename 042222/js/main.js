// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

function modifiedSum(a, n) {
    //reduce array raising the element to the power of n and subtract the original element from the exponent 
    return a.reduce((a,b)=>a+(Math.pow(b,n)-b), 0)
   }

   //Filter Unused Digits
//    Given a varying number of integer arguments, return the digits that are not present in any of them.

//    Example:
   
//    [12, 34, 56, 78]  =>  "09"
//    [2015, 8, 26]     =>  "3479"
   
//    Note: the digits in the resulting string should be sorted.
   
function unusedDigits(...args) {
  let numbers = ['0','1','2','3','4','5','6','7','8','9']
  args = args.join('').split('')
  return numbers.map(e=>{
    if (!args.includes(e)){
      return e
    }}).join('');
}