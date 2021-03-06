// 'x' marks the spot.

// #'x' marks the spot

// ##Task:

// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.


const xMarksTheSpot = (input) => {
    let x = 0
    let y = []
    input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
    if(x != 1){
      return []
    }else {
      input.forEach((e,i)=> e.forEach(el=> el.includes('x') ? y.push(i,e.indexOf('x')) : false))
    }
    return y
  }


//   Dropcaps
//   DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

//   But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
  
//   *should work also on Leading and Trailing Spaces and caps.

  function dropCap(n) {
    n = n.split(' ')
      console.log(n)
    return n.map(e=> {
      if (e.split('').length <= 2){
        return e
        } else {
          return e[0].toUpperCase() + e.slice(1).toLowerCase()
        }
    }).join(' ')
      
    }

    function dropCap2(n) {
        return n.split(" ").map((x) => { 
            return x.length > 2 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : 
            x; })
            .join(" ")
      }


    //   Sort Santa's Reindeer
    //   Happy Holidays fellow Code Warriors!

    //   Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!
    //   Sort Santa's Reindeer
      
    //   Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
    //   Notes:
      
    //       It's guaranteed that each string is composed of two words
    //       In case of two identical last names, keep the original order
      

      function sortReindeer(reindeerNames) {
        return reindeerNames.sort((a, b) => 
          a.split(' ')[1] > b.split(' ')[1] ? 1 :
          a.split(' ')[1] < b.split(' ')[1] ? -1 : 0
        )
      }


 //     Scoring Tests
// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

//     An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
//     The points awarded for correct answers
//     The points awarded for ommitted answers (note that this may be negative)
//     The points deducted for incorrect answers (hint: this value has to be subtracted)

// Note: The input will always be valid (an array and three numbers)
      //returns the test score
function scoreTest(str, right, omit, wrong){
    let score = 0
    str.forEach ( e => {
      if (e === 0){
        score += right
      } else if (e === 1){
        score += omit
      } else {
        score -= wrong
      }
    })
    return score
  }

  // Grasshopper - Array Mean
  // Find Mean

  // Find the mean (average) of a list of numbers in an array.
  // Information
  
  // To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
  
  // For an example list of 1, 3, 5, 7
  
  // 1. Add all of the numbers
  
  // 1+3+5+7 = 16
  
  // 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
  
  // 16/4 = 4
  
  // 3. The mean (or average) of this list is 4
  

  var findAverage = function (nums) {
    return nums.reduce((a,b) => a + +b, 0) / nums.length
  }

  // Equalize the array!
  // No description!!!

  // Input :: [10,20,25,0]
  
  // Output :: ["+0", "+10", "+15", "-10"] 

  function equalize(array){
    return array.map(e => {
      let num = e - array [0]
      return num >= 0 ? `+${num}` : num.toString()
    })  
    }



    // Odd-heavy Array
    // An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

    // eg.
    
    // Array [11,4,9,2,8] is odd-heavy 
    // because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
    
    // Array [11,4,9,2,3,10] is not odd-heavy
    // because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
    
    // write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
    

    function isOddHeavy(n){
      let odds = []
      let evens = []
      n.forEach(num => num % 2 === 0 ? evens.push(num) : odds.push(num));
      if(odds.length > 0){
        return Math.min(...odds) >= Math.max(...evens)
      }return false
    }
    