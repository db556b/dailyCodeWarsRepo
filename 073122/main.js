// parameters- a string of letter or numbers    
// return- the first letter or number that occurs onlyt one time. If none are non-repeating, return null
// examples
// PseudoCode

// The First Non Repeated Character In A String 
// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, and None in Python.

// You can assume, that the input string has always non-zero length.



function firstNonRepeated(s) {
    //init object and result (for return) with a value of null for when there are no repeating elements in the argument
    let obj = {},
        result = null
    //assign key : value pairs into the obj object for each element in the argument 
    s.split('').forEach(e => obj[e] ? obj[e]++ : obj[e] = 1)
    //cehck each value in the obj
  Object.getOwnPropertyNames(obj).some(key =>{
    //test for value to equal 1
    if (obj[key] === 1){
        //assign key to result when value === 1
      result = key;
      //return true to stop the loop
      return true
    }
  })
  //return result
    return result
  //   let word = ''
  //   for (let i = 0; i < s.length; i++){
  //     if (i === s.lastIndexOf(s[i]) && !word.includes(s[i])) return s[i];
  //     word += s[i]
  //   }
  //   return null
  }


  
firstNonRepeated("test") // should return 'e' because it is the first element that does not repeat itself in the argument.
firstNonRepeated("teeter") // should return 'r' because it is the first element that does not repeat itself in the argument.
firstNonRepeated("1122321235121222") // should return '5' because it is the first element that does not repeat itself in the argument.
firstNonRepeated("rend") // should return 'r' because it is the first element that does not repeat itself in the argument.
firstNonRepeated("ttrree") // should return => null because all letters in the argument string repeat


// Concatenation of Array
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

 

// Constraints:

//     n == nums.length
//     1 <= n <= 1000
//     1 <= nums[i] <= 1000




var getConcatenation = function(nums) {
    return [...nums,...nums]
};


// Number of 1 Bits
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((a,b) => +a + +b, 0)
};