

// Find Nearest square number
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers



function nearestSq(n){
    let up = Math.ceil(Math.sqrt(n)) ** 2 
    let down = Math.floor(Math.sqrt(n)) ** 2 
    return up - n < Math.abs(down - n) ? up : down
}