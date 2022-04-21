// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7

// Do not modify the input list

function longest(words) {
    let length = 0
    words.forEach(e=>e.length>length?length=e.length: length=length)
    return length
  }



//   A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.


  function isNarcissistic(n){
    n = String(n)
    let nArr = [...n +''].map (e => Math.pow(e, n.length)).reduce((a,b)=> a+b,0)
    console.log(n,nArr)
    console.log(n == nArr)
    return n == nArr
  }