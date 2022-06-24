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