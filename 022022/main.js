

// Simple Fun #352: Reagent Formula
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Task

// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.


function isValid(f){
    return !((f.includes(1) && f.includes(2) || f.includes(3) && f.includes(4)) || (f.includes(5) && !f.includes(6) || f.includes(6) && !f.includes(5)) ||(!f.includes(7) && !f.includes(8)))
  }