// parameters- one array of numbers and one number. Two numbers in the array will equal the second argument
// return- an array of 2 indices. The total of those elements will equal the target number
// examples
// PseudoCode

// Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


function twoSum(numbers, target) {
    //set loop to go through every element in the numbers array
    for (let i = 0; i<numbers.length; i++){
        //set variable in each loop through array to the target minus the current element
      let find = target - numbers[i]
      //check for the last index of the find variable, ensure that it is not finding the current element, and make verify it exists in the array
      if(numbers.lastIndexOf(find) !== i && numbers.lastIndexOf(find) !== -1){
          //return the array of i (for the current element) and the lastIndexOf the find variable
        return [i,numbers.lastIndexOf(find)]
      }
    }
  }


twoSum([1,2,3], 4)// should return =>[0,2] because 3 + 1 === 4
twoSum([1234,5678,9012], 14690)// should return =>[1,2] because 5678 + 9012 === 14690
twoSum([2,2,3], 4)// should return =>[0,1] because 2 + 2 === 4