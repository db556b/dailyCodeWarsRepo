// parameters- one array, and one function
// return- true if any of the elements passed into the function come back true
// examples
// PseudoCode

// Enumerable Magic #2 - True for Any?
// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.


function any(arr, fun){
    //loop through each element and test them against the function. Check for true and return true
    //map a new array and return true if fun(e) is true or false if fun(e) is false. check mapped array for a true element. If it contains a true element, return true, else false. 
    return arr.map(e => fun(e)).includes(true) 
  }



any([1,2,3,4], function(v,i){return v>3}) //should return true)
any([1,2,3,4], function(v,i){return v>4}) //should return false)