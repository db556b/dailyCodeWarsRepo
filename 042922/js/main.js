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