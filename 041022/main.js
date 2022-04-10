

// Coprime Validator
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

function isCoprime(x, y) {
    if (x%y === 0 || y%x  === 0) return false;
    const smaller = x < y ? x : y
    let i = 2
    while (i <= Math.floor(smaller/2)){
      if (x % i === 0 && y % i === 0) return false;
      i++
    }
    return true
  }