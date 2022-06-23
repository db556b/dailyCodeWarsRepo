// parameters- and array of length no more than 100. consisting of integers, Fizz, Buzz, and FizzBuzz
// return- an array consisting of what number is used for Fizz and Buzz (like fizzBuzz traditional would be [3,5])
// examples
// PseudoCode




function reverseFizzBuzz(array) {
    //return the index + 1 of Fizz or fizzbuzz (if ffizzbuzz comes first) and buzz or fizzbuzz (if fizzbuzz comes first)
    return [array.indexOf('Fizz') + 1 || array.indexOf('FizzBuzz') + 1, array.indexOf('Buzz') + 1 || array.indexOf('FizzBuzz') + 1]
  };



  
reverseFizzBuzz([1,2,"Fizz",4,"Buzz"])// should return =>  [3,5] 
reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"])// should return =>  [2,3] 
reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"])// should return =>  [2,2] 
reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"])// should return =>  [1,6] 






// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let arr = array.filter(e => e % 2 === 1 || e % 2 === -1).sort((a,b) => a - +b),
        i = -1
    console.log(arr,array)
    return array.map(e => {
      if (e % 2 === 0) {return e}
      else { 
        i++
        return arr[i]}
    })
  }



  
sortArray([5, 3, 2, 8, 1, 4]) //should return =>  [1, 3, 2, 8, 5, 4]);
sortArray([5, 3, 1, 8, 0]) //should return =>  [1, 3, 5, 8, 0]);
sortArray([]) //should return => []);