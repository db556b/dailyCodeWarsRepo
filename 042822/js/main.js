// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// Some good reading: MDN Docs about arrays

function withoutLast(arr) {
    let arr1 = []
    for (let i = 0; i< arr.length-1; i++){
      arr1.push(arr[i])
    }
      return arr1
    }
