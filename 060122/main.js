// parameters- one array containing integers, a singular integer, a singular integer
// return true or false. True if the params a and b or b and a appear consecutively
// examples
// PseudoCode


// Consecutive items
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.


function consecutive(arr, a, b) {
    //loop through the elements
    for (let i = 0; i<arr.length -1; i++){
        //check if the current element matches a or b. Then check the next element to see if it matches the oppsing element
      if ((arr[i] == a && arr[i + 1] == b) || (arr[i] == b && arr[i+1] == a)){
          //if condition is found true, return true
            return true
        } 
      }
      //once loop has run, if the conditional is not met, return false
      return false
  }



consecutive([1, 3, 5, 7], 3, 7) // should return false because 3 does not come after 7 and 7 does not come after 3)
consecutive([1, 3, 5, 7], 3, 1) // should return true because 3 comes after one)
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4) // should return true because -3 does not come after 4 and 4 does not come after -3)