// // parameters- some iterable
// // return- an array
// // examples 
// // PseudoCode


// function uniqueInOrder(iterable){
//     //init new array for returning
//     let arr = []
//     //loop through each item in the argument
//     //check if neighbor is the same or different
//     for(let i = 0; i < iterable.length;i++){
//         let first = iterable[i]
//         let next = iterable[i + 1]
//         if(first != next){
//             arr.push(first)
//           // i = 0, i + 1 = 1 A A A A ... i = 4, B
//         }
//     }
//     return arr
// }

// function uniqueInOrder2(iterable){
//     //declare arr for later return insert iterable[0] into the array since that must be a unique char or and empty arr if iterable is empty
//     let arr = iterable[0] ? [interable[0]] : []
//     //loop through each element in argument
//     for (let i = 1; i < iterable.length; i++){
//         //if current element === the last element in arr do nothing. If no match, push the unique item
//         iterable[i] === arr[arr.length - 1] ? false : arr.push(iterable[i])
//     }
//     //return arr
//     return arr
//   }





// // Unique In Order
// // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// // For example:

// uniqueInOrder('AAAABBBCCDAABBB')//should return ==> ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')        //should return ==> ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])      //should return ==> [1,2,3]
// uniqueInOrder('AAAABBBCCDAABBB')// should return =>  ['A','B','C','D','A','B'] because it removes all of the same characters that are next to each other. 




// /* DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.
// */


// // Matt
// // Params - numbers
// // Return - reutrn the sum of multiples of 3 OR 5 below (numbers) -> if negative return 0
// // Examples... 10 => 23
// // Pseudo 

// // Morgan
// // Params -
// // Return
// // Examples... 10 => 23
// // Pseudo

// // Chris
// // Params - int
// // Return- sum of multiple less than number
// // Examples... 10 => 23
// // Pseudo- iterate through -- number % 3 or 5 -- also less than number

// // Deja
// // Params - integer
// // Return - sum of multiples of 3,5 
// // Example .. 12 => [3,6,9,10] = 28
// // Examples... 10 => [3 + 5 + 6 + 9] = 23
// // Example #3 ... 30 => [3,5,6,9,10,12,15,18,21,24,25,27] = 175
// // Pseudo iterate through the number given, see if i is divisible by 3 or 5 then push to array, return sum of each i

// /*
//   A better way, I want to get the sum of all of the numbers, code like a counter
//   let sum = 0
// for(let i = 1; i < number; i++){
//     if(i % 3 == 0 || i % 5 == 0 ){
//         sum += i
//     }
//     return sum
// }*/

// // Jennie
// // Params -
// // Return
// // Examples... 10 => 23
// // Pseudo::: initialize a sum at 0, decrement number, then loop through and see if it's a multiple of one or the other. Add if it is. Decrement as needed.


// // David
// // Params - an integer
// // Return- 0 if argument is less than 0. otherwisereturn the total of all multiples of 3 and five up to the argument (non-inclusive)
// // Examples... 10 => 23 => 3,5,6,9 
// // Pseudo


// //Matt
// function solution(number){
//     if(number < 0){
//         return 0
//     }
    





    
//     let result = 0
//   for(let i = 0; i < number; i++){
//   if(i % 3 === 0 || i % 5 === 0){
//         result+= i
//     }
//   }
//   return result
// }

// //Morgan
// function solution(number){
  
// }

// //Chris
// if(i % (3 || 5)==0)
   


// //Deja
// function solution(number){
// let sum = 0
// for(let i = 1; i < number; i++){
//     if(i % 3 == 0 || i % 5 == 0 ){
//         sum += i
//     }
// }
//     return sum
// }


// //Jennie


// //David
// function solution(number){
//     var sum = 0;
//     for (var i = 3; i < number; i++) {
//       if (i % 3 == 0 || i % 5 == 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   1




// // Jennie
// function solution(number){
//     let sum = 0 //init an accumaltor variable
//     number-- // reduce number to prevent it from being added in the event it is divisible by 3 or 5
//     while (number > 0) {
//       if (number % 3 === 0 || number % 5 === 0) {
//         sum += number
//       } 
//       number--
//     }
//     return sum
//   }








  




function putlettersInDictionary(dict,letters){
    letters = letters.toUpperCase()
    letters.split('').forEach(e => {
        dict[e] ? dict[e]++ : dict[e] = 1
    })
}




//   function workOnStrings(a,b){
//     let aDict = {}
//     let bDict = {}
//     let result = ""
//     //make your dictionaries with letter occurrences
//     putlettersInDictionary(aDict,a)
//     putlettersInDictionary(bDict,b)

//     for (let char of aDict) {
//       if (aDict[char] % 2 == 1) {
//         for (let i = 0; i < b.length; i++)


//     }
//   }
// }
function workOnStrings(a,b){
    let aDict = makeDict(a)
    let bDict = makeDict(b)
    let first = swapCase(bDict,a)
    let next = swapCase(aDict,b)
    return first + next
    
  }
  
  function makeDict(s) {
    let dict = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toUpperCase()
        char in dict ? dict[char]++ : dict[char] = 1
      }
    return dict
  }
  
  function swapCase(dict,s) {
    let a = s.split("")
    a.forEach((char,i) => {
      if (dict[char.toUpperCase()] % 2 === 1) {
        char.toUpperCase() == a[i] ? a[i] = char.toLowerCase() : a[i] = char.toUpperCase()
      }
    })
    return a.join("")
  }