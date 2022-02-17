
// No zeros for heros
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
    if (n === 0){
      return 0
    }
    n = n.toString().split('')
    console.log(n)
    while (n[n.length-1] === '0'){
      n.pop()
    }
    return +n.join('')
  }