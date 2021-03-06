//Bin to Decimal
//Complete the function which converts a binary number (given as a string) to a decimal number.
const binToDec=(bin)=> parseInt(bin,2)
console.log(binToDec(`1001000010101010101000111100011010101`))


//Cat Years, Dog Years
//Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
    let dogYears = 0
    let catYears = 0
    function years(human){
      if (human === 1){
        dogYears = 15
        catYears = 15
      } else if (human === 2){
        dogYears = 24
        catYears = 24
      } else {
        dogYears = ((human - 2) * 5) + 24
        catYears = ((human - 2) * 4) + 24
      }
    }
     years(humanYears)
     return [humanYears,catYears,dogYears]
   }
//      Help the Elite Squad of Brazilian forces BOPE
//    The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

//    In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
   
//    You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
   
//    PT92 - 17 bullets
//    M4A1 - 30 bullets
//    M16A2 - 30 bullets
//    PSG1 - 5 bullets
   
//    Example:
   
//    ["PT92", 6] => 2 (6 streets 3 bullets each)
//    ["M4A1", 6] => 1
   
//    The return Will always be an integer so as the params.
   

   function magNumber(info){
    const guns = {
      PT92 : 17,
      M4A1 : 30,
      M16A2 : 30,
      PSG1 : 5,
      }
    function numberOfClips(gun,streets){
      let noOfBullets = streets * 3
      return Math.ceil(noOfBullets/gun)
    }
    return numberOfClips(guns[info[0]],info[1])
  }
//   How Good are you Really
//   There was a test in your class and you passed it. Congratulations!
//   But you're an ambitious person. You want to know if you're better than the average student in your class.
  
//   You receive an array with your peers' test scores. Now calculate the average and compare your score!
  
//   Return True if you're better, else False!
//   Note:
  
//   Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
  

  function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a + b , yourPoints)/classPoints.length <= yourPoints
  }
//  Reversed Sequence
//   Build a function that returns an array of integers from n to 1 where n>0.

//   Example : n=5 --> [5,4,3,2,1]
  


  const reverseSeq = n => {
    let arr = []
    for (let i = 1; i <= n; i++) arr.push(i)
    return arr.reverse()
  };


//   Exclamation marks series #2: Remove all exclamation marks from the end of sentence
//   Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove (string) {  
    let arr = string.split('')
    for (let i = arr.length-1; i >= 0; i--){
      if (arr[i] === '!') {
        arr.pop()
        }else break;
    }
    return arr.join('')
  }
