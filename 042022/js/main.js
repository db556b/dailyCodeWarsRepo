// Frank's Sticky Calculator
// Description

// Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

// Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

// For instance:

// 50 + 12 becomes 5012

// and then the operation is carried out as usual:

// (5012) + 12 = 5024

// Task

// It is your job to create a function which takes 3 parameters:

// stickyCalc(operation, val1, val2)

// which works just like Frank's sticky calculator
// Some Examples

// stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
// stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
// stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
// stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

// Note

//     The calculator only works for positive integers only.
//     The calculator rounds any non-integer before operating.
//     The calculator rounds any output to nearest integer.

// For example:

// stickyCalc('/', 12.1, 6.8), 18);   

// 12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.

// Although 127 / 7 = 18.1428 ; 18 is outputted instead.

function stickyCalc (operation, val1, val2){
    //"stick" the numbers together
      val1 = Math.round(val1)
      val2 = Math.round(val2)
      let stickyNum = val1.toString() + val2.toString()
    //perform pertinent operation between stickyNum and val2
    if(operation === '+'){
      return Math.round(+stickyNum + val2)
    } else if (operation === '-'){
      return Math.round(+stickyNum - val2)
    } else if(operation === '*'){
      return Math.round(+stickyNum * val2)
    } else {
      return Math.round(+stickyNum / val2)
    }
      }

function stickyCalc2 (operation, val1, val2){
        val1 = Number( Math.round(val1).toString() + val2);
        
        switch(operation){
            case '+':
              return Math.round(val1 + val2);
            case '-':
              return Math.round(val1 - val2);
            case '*':
              return Math.round(val1 * val2);
            default:
              return Math.round(val1 / val2);
        }
      }




    //   Task

    //   You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.
      
    //   Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].
      
    //   Space in the number of characters which do not increase time (i.e. all characters but those that increase time).
      
    //   The moment of time is determined as follows:
      
    //   If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.
      
    //   You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
    //   Examples
      
    //   For moment = "01:00 pm", the output should be [true, false, false].
      
    //   time equals 1, and space equals 7, so the moment is from the past.
      
    //   For moment = "12:02 pm", the output should be [false, true, false].
      
    //   time equals 5, and space equals 5, which means that it's a present moment.
      
    //   For moment = "12:30 pm", the output should be [false, false, true].
      
    //   time equals 6, space equals 5, so the moment is from the future.
    //   Input/Output
      
    //       [input] string moment
      
    //   The moment of time and space that the input time came from.
      
    //       [output] a boolean array
      
    //   Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

function momentOfTimeInSpace(moment) {
    //set var for number comparison
  let numbers = [1,2,3,4,5,6,7,8,9]
  //set vars for time and space sumulative sums/count
  let time = 0
  let space = 0
  //break down moment and loop through making comparisons. increase pertinent time & space vars after comparison made
  moment.split('').forEach(e => numbers.includes(+e) ? time+= +e : space++)
  //return boolean array as per instruction using comparisons
  return [time<space,time==space,time>space]
}

// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

function modifiedSum(a, n) {
    //reduce array raising the element to the power of n and subtract the original element from the exponent 
    return a.reduce((a,b)=>a+(Math.pow(b,n)-b), 0)
   }

   //Filter Unused Digits
//    Given a varying number of integer arguments, return the digits that are not present in any of them.

//    Example:
   
//    [12, 34, 56, 78]  =>  "09"
//    [2015, 8, 26]     =>  "3479"
   
//    Note: the digits in the resulting string should be sorted.
   
function unusedDigits(...args) {
  let numbers = ['0','1','2','3','4','5','6','7','8','9']
  args = args.join('').split('')
  return numbers.map(e=>{
    if (!args.includes(e)){
      return e
    }}).join('');
}