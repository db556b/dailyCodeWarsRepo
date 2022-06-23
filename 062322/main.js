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






// FizzBuzz++
// There is a common problem given to interviewees in software. It is called FizzBuzz. It works as follows: For the numbers between 1 and 100, print fizz if it is a multiple of 3 and buzz if it is a mutiple of 5, else print the number itself.

// You are in an interview and they ask you to complete fizzbuzz (which can be done in a one-liner in a few langs) and you knock it out of the park.

// Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the g.c.d. of all the numbers == 1) and an equally sized list of words. compute its fizzbuzz representation up until the pattern of strings repeats itself. 



function fizzbuzzPlusPlus(numbers, words) {
    //init arr for pushing and returning
    let arr = [],
    //init length by reducing numbers in numbers param
        length = numbers.reduce((a,b) => a * b)
    //init loop for pushing words || nums into arr
    for (let i = 1; i <= length; i++){
        //init new string to build word(s) for pushing into arr when relevant
      let str = ''
      //init new loop to check for rmod of number in numbers and build string
      for (let j = 0; j < words.length; j++){
        if (i % numbers[j] === 0){str += words[j]}
      }
      //push str into arr. If str is empty, push number
      arr.push(str || i)
    }
    //return arr
    return arr
  }


  fizzbuzzPlusPlus([2,3,5],["fizz", "buzz", "bazz"]) // should return [ 1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz',  13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz',  19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz',  'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz'])