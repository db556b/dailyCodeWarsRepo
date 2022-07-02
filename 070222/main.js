// parameters- an array consisting of numbers or an empty array
// return an array with the lowest number removed from the array without
// examples
// PseudoCode



// Remove the minimum

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    //make full copy of the array and not just apointer to the argument array
    let number = numbers.slice()
    //find and splice the lowest number
    number.splice(numbers.indexOf(Math.min(...numbers)), 1)
    //return the array copy
    return number
  }



  function removeSmallest2(numbers) {
    return numbers.filter((e, i) => i !== numbers.indexOf(Math.min(...numbers)));
  }


  removeSmallest([1, 2, 3, 4, 5])//should return => [2, 3, 4, 5]

  removeSmallest([5, 3, 2, 1, 4])//should return => [5, 3, 2, 4]
  
  removeSmallest([2, 2, 1, 2, 1])//should return => [2, 2, 2, 1]
  
  removeSmallest([])//should return => []

