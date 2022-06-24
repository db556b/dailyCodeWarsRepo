// parameters
// return
// examples
// PseudoCode

// Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    let uS1 = [],
        s1s2 = s1 + s2
    function unique(arr, inc){
      arr = arr.split('')
      for (let letter of arr){
        if (!inc.includes(letter)){
          inc.push(letter)
        }
      }
    }
    unique(s1s2,uS1)
    return uS1.sort().join('')
  }

//   Find the next perfect square!
//   You might know some pretty large perfect squares. But what about the NEXT one?

//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
  
//   If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

  function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    return square === Math.ceil(square) ? (square + 1) ** 2  : -1
  }