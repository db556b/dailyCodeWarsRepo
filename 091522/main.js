
// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function getSum( a,b ){
    if (a === b) return a;
    let min = Math.min(a,b),
        max = Math.max(a,b),
        arr = []
    for (let i = min; i <= max; i++){
      arr.push(i)
    }
    return arr.reduce((a,b) => a +b, 0)
  }

//implement known Sum of N natural Numbers formula
  const GetSums = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }