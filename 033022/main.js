

// The takeWhile Function
// Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence. 



function takeWhile (arr, pred) {
    let i = 0
    let arr2 =[]
    while (pred(arr[i]) && i < arr.length){
      arr2.push(arr[i])
      i++
    }
    return arr2
  }