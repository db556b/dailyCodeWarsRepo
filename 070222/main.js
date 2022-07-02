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






  function replaceNth(text, n, oldValue, newValue) {
    let count = 1
    if (n<1){return text}
    let split = text.split('')
  for (let i = 0; i<split.length; i++){
        if(split[i] === oldValue && count == n){
        count = 1
        split[i] = newValue
        }
      else if (split[i] === oldValue){count++}
    }
    text = split.join('')
    return text
  }

//   You're a square!
//   A square of squares

//   You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
  
//   However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
//   Task
  
//   Given an integral number, determine if it's a square number:
  
//       In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
  
//   The tests will always use some integral number, so don't worry about that in dynamic typed languages.


  var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
  }


//   Descending Order
//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


  function descendingOrder(n){
    return +(n.toString().split('').sort((a,b) => a - b).reverse().join(''))
  }